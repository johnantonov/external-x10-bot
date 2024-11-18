import { Pool } from 'pg';
import axios from 'axios';
import * as dotenv from 'dotenv';
import cron from 'node-cron';
import pool from '../../database/db';
import { create30DaysObject, getXdaysAgoArr, getXDaysPeriod, getYesterdayDate } from '../utils/time';
import { users_db } from '../../database/models/users';
import { articles_db } from '../../database/models/articles';
import { Article, article} from '../dto/articles';
import { calculateLogisticsStorage, extractBuyoutsFromCards, processCampaigns } from '../utils/dataProcessing';
import { formatError } from '../utils/string';
import { updateConversions } from '../utils/conversions';
import { returnNewMenu } from '../components/botButtons';
import { conversions_db } from '../../database/models/conversions';
import { updateCommissions } from '../utils/comissions';
import { commissions_db } from '../../database/models/commissions';
import { generatePdfFromHtml } from '../utils/htmlToPdf';
import FormData from 'form-data';
import { createReportMessage, getReportHtml } from '../utils/report';
import { updateBoxTariffs } from '../utils/boxTariffs';

dotenv.config();

export class ReportService {
  private pool: Pool;

  constructor(pool: Pool) {
    this.pool = pool;
  }

  async prepareReportData(id?: number) {
    try {
      let userIds;

      if (id) { //if report start for one user
        userIds = [await users_db.getUserById(id)]
      } else {
        userIds = await users_db.getReportUsers();
      }

      if (!userIds || userIds.length === 0) {
        console.log('No users who are waiting for report');
        return null
      }

      console.log('list of users waiting report:', userIds)
      for (const chat_id of userIds) {
        const id = chat_id.chat_id

        console.log('processing: ', id)

        const articles = (await articles_db.getAllArticlesForUser(id)).rows


        if (articles.length === 0) {
          console.log('No articles with status ON to fetch advertisement data: ' + id);
          continue;
        }

        const { wb_api_key } = articles[0] ?? null

        if (!wb_api_key) {
          console.log(`No recent campaigns found for article with chat ID: ${id}`);
          continue;
        }

        const advertIds = await this.getCampaigns(wb_api_key, id)
        const nms = articles.map(a => +a.article)

        console.log(`articles for ${id}: ${JSON.stringify(nms)}`)

        let advertDetailsResponse;
        if (advertIds) {
          advertDetailsResponse = await this.getAdvertDetails(wb_api_key, advertIds)
        }

        let advRes: any;
        if (advertDetailsResponse) {
          advRes = processCampaigns(advertDetailsResponse, nms, advertIds)
        }

        const [monthAgoDate, yesterday, today] = getXDaysPeriod(31)
        const yesterdayTime = yesterday + " 23:59:59"
        const monthAgoDateTime = monthAgoDate + " 00:00:00"

        const percent_buys = await this.getBuyPercent(nms, wb_api_key, monthAgoDateTime, yesterdayTime)
        const report = (await this.fetchWbStatistics(nms, wb_api_key, percent_buys));
        const size: Record<string, any> = await this.getNmSizeInfo(nms, wb_api_key)
        const logisticsObj = await calculateLogisticsStorage(size)

        for (const nm of nms) {
          if (advRes && advRes.hasOwnProperty(nm)) {
            await articles_db.processMarketingCost(id, +nm, advRes[nm]);
          }

          let sizes = size[nm] || {};
          let logistics: number = logisticsObj[nm].logistics || 0;
          let storage: number = logisticsObj[nm].storage || 0;
          let info = report[nm]?.order_info || {};
          let percentBuys = percent_buys?.[nm] ?? null;
          let spp = report[nm]?.price_before_spp ?? null;
          let vendor = report[nm]?.vendor ?? null;

          await articles_db.updateFields(id, +nm, {
            order_info: info,
            percent_buys: percentBuys,
            size: sizes,
            price_before_spp: spp,
            vendor_code: vendor,
            logistics: logistics,
            storage: storage,
          });
        }

        console.log(`Report details for articles with chat ID ${id}`);
      }

    } catch (e) {
      formatError(e, 'Error to prerape report service: ')
    }
  }

  async getNmSizeInfo(nmIDs: number[], wb_api_key: string) {
    try {
      let hasMore = true;
      let cursor = {};
      const result: Record<string, any> = {};
      
      while (hasMore) {
        const requestData = {
          settings: {
            cursor: {
              limit: 100,
              ...cursor, 
            },
            filter: {
              withPhoto: -1 
            }
          }
        };
  
        const response = await axios.post(
          'https://content-api.wildberries.ru/content/v2/get/cards/list',
          requestData,
          {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': wb_api_key
            }
          }
        );
  
        const cards = response.data.cards;
        if (!cards || cards.length === 0) {
          break;
        }
        const filteredData = cards.filter((card: any) => nmIDs.includes(card.nmID));
        filteredData.forEach((el: any) => {
          const literSize = (el.dimensions.width * el.dimensions.height * el.dimensions.length) / 1000
          result[el.nmID] = el.dimensions;
          result[el.nmID].literSize = literSize
        });
  
        cursor = response.data.cursor || {};

        if (cards.length < 100) {
          hasMore = false;
        }
      }
  
      return result;
    } catch (error) {
      formatError(error, 'Ошибка получения данных о маркировке.');
      return {};
    }
  }

  async getBuyPercent(nms: article[], wb_api_key: string, startDate: string, endDate: string) {
    try {
      const url = 'https://seller-analytics-api.wildberries.ru/api/v2/nm-report/detail';

      const requestData = {
        nmIDs: nms,
        period: {
          begin: startDate,
          end: endDate
        },
        page: 1
      };

      const response = await axios.post(url, requestData, {
        headers: {
          'Authorization': wb_api_key,
          'Content-Type': 'application/json'
        }
      })

      return extractBuyoutsFromCards(response)
    } catch (e) {
      formatError(e, 'Error fetching buy percent: ');
      return {};
    }
  }

  async fetchWbStatistics(articles: article[], wb_api_key: string, buyoutsPercent: number) {
    const url = 'https://seller-analytics-api.wildberries.ru/api/v2/nm-report/detail';
    const yesterdayUrl = 'https://seller-analytics-api.wildberries.ru/api/v2/nm-report/detail/history'

    const dates = Object.keys(create30DaysObject())

    let moscowTime = new Date().toLocaleString("en-CA", {
      timeZone: "Europe/Moscow",
      hour12: false
    }).replace(",", "");
    let monthStartDateTime = dates[dates.length-1] + ' 00:00:00'
    // let monthEndDateTime = `${dates[0]} ${moscowTime.split(" ")[1]}`
    let hours = moscowTime.split(" ")[1].split(":")[0];
    let minutesAndSeconds = moscowTime.split(" ")[1].slice(2);
    if (hours === "24") {
      hours = "00";
    }
    let monthEndDateTime = `${dates[0]} ${hours.padStart(2, '0')}${minutesAndSeconds}`;

    const periodRequestData = {
      nmIDs: articles,
      period: {
        begin: monthStartDateTime,
        end: monthEndDateTime,
      },
      page: 1
    };

    console.log(monthStartDateTime)
    console.log(monthEndDateTime)

    const yesterdayRequestData = {
      nmIDs: articles,
      period: {
        begin: dates[6],
        end: dates[0]
      },
    };

    const headers = {
      'Authorization': wb_api_key,
      'Content-Type': 'application/json',
    }

    const result: Record<string, any> = {};

    try {
      const yesterdayResponse = await axios.post(yesterdayUrl, yesterdayRequestData, {
        headers: headers
      });

      if (!yesterdayResponse.data.data && !yesterdayResponse.data.data.length) {
        console.log(`no yesterday data for ${JSON.stringify(articles)}`)
      }

      yesterdayResponse.data.data.forEach((el: any) => {
        if (articles.includes(el.nmID)) {
          const alwaysInfo = el.history[0]

          if (!result[el.nmID]) {
            result[el.nmID] = {};
          }

          // const data = el.statistics.selectedPeriod;
          // const stocks = el.stocks;

          el.history.forEach((day: Record<string, any>) => {
            if (!result[el.nmID].order_info) {
              result[el.nmID].order_info = {};
            }
            result[el.nmID].order_info[day.dt] = {
              ordersCount: day.ordersCount,
              ordersSum: day.ordersSumRub,
              buysCount: Math.round(day.ordersCount * ((buyoutsPercent || 0) / 100)),
              buysSum: Math.round(day.ordersSumRub * ((buyoutsPercent || 0) / 100)),
              addToCartCount: day.addToCartCount,
            }
          })

          console.log(buyoutsPercent)

          result[el.nmID].price_before_spp = (alwaysInfo.ordersSumRub / alwaysInfo.ordersCount) || null
          result[el.nmID].vendor = el.vendorCode
        }
      });
    } catch (error) {
      formatError(error, 'Error fetching yesterday report statistics: ')
    }

    try {
      const periodResponse = await axios.post(url, periodRequestData, {
        headers: headers
      });

      if (!periodResponse.data.data.cards) {
        console.log(`no period data for ${JSON.stringify(articles)}`)
        return result;
      }

      for (const el of periodResponse.data.data.cards) {
        if (articles.includes(el.nmID)) {
          if (!result[el.nmID].order_info) result[el.nmID].order_info = {};

          const conversData = el.statistics.selectedPeriod.conversions;
          const ordersCount = el.statistics.selectedPeriod.ordersCount;
          const categoryName = el.object.name;

          const conversions = await conversions_db.getConversion(categoryName)
          const commission = await commissions_db.getCommission(categoryName)

          result[el.nmID].order_info.addToCartPercent = conversData.addToCartPercent;
          result[el.nmID].order_info.cartToOrderPercent = conversData.cartToOrderPercent;
          result[el.nmID].order_info.buyoutsPercent = conversData.buyoutsPercent;
          result[el.nmID].order_info.ordersCount30 = ordersCount;
          result[el.nmID].order_info.commission = isNaN(Number(commission?.kgvpMarketplace)) ? 0 : Number(commission?.kgvpMarketplace);
          result[el.nmID].order_info.click_to_cart = isNaN(Number(conversions?.click_to_cart)) ? 0 : Number(conversions?.click_to_cart).toFixed(2);
          result[el.nmID].order_info.cart_to_order = isNaN(Number(conversions?.cart_to_order)) ? 0 : Number(conversions?.cart_to_order).toFixed(2);
          result[el.nmID].order_info.fullConversion = `${((conversions?.click_to_cart ?? 0) / 100 * (conversions?.cart_to_order ?? 0) / 100 * 100).toFixed(2)}%`
        }
      }

    } catch (error) {
      formatError(error, 'Error fetching period report statistics: ')
    }

    return result;
  }

  async getAdvertDetails(wb_api_key: string, advertIds: []) {
    try {
      const advertIdsNoType = advertIds.map(({ type, ...rest }: any) => {
        return rest;
      });

      const advertDetailsResponse = await axios.post('https://advert-api.wildberries.ru/adv/v2/fullstats', advertIdsNoType, {
        headers: {
          'Authorization': wb_api_key,
          'Content-Type': 'application/json'
        }
      });

      const data = advertDetailsResponse.data
      return data
    } catch (e) {
      formatError(e, 'error fetching adv data: ')
      return [];
    }
  }

  async getCampaigns(wb_api_key: string, chat_id: number) {
    try {
      const campaignResponse = await axios.get('https://advert-api.wildberries.ru/adv/v1/promotion/count', {
        headers: {
          'Authorization': wb_api_key,
          'Content-Type': 'application/json'
        }
      });

      const campaigns = campaignResponse.data.adverts || [];

      if (campaigns.length === 0) {
        console.log(`No recent campaigns found for article with chat ID: ${chat_id}`);
        return null
      }

      const now = new Date();
      const thirtyDaysAgo = new Date();
      thirtyDaysAgo.setDate(now.getDate() - 30);

      const recentCampaigns = campaigns.flatMap((campaign: any) =>
        campaign.advert_list
          .filter((advert: any) => {
            const changeTime = new Date(advert.changeTime);
            return changeTime >= thirtyDaysAgo && changeTime <= now;
          })
          .map((advert: any) => ({
            ...advert,
            type: campaign.type
          }))
      )

      const last30DaysDates = getXdaysAgoArr(10);
      const advertIds = recentCampaigns.map((advert: any) => ({
        id: advert.advertId,
        dates: last30DaysDates,
        type: advert.type
      }));

      if (advertIds.length === 0) {
        console.error(`No recent campaigns found for article with chat ID: ${chat_id}`);
        return null;
      }

      return advertIds
    } catch (e) {
      formatError(e, 'error fetching campaigns data')
      return {};
    }
  }

  // Send message to user
  async sendMessage(chat_id: number, message: string): Promise<void> {
    const telegramApiUrl = `https://api.telegram.org/bot${process.env.TELEGRAM_TOKEN}/sendMessage`;
    const options = returnNewMenu();

    try {
      await axios.post(telegramApiUrl, {
        chat_id: chat_id,
        text: message,
        reply_markup: options,
        parse_mode: 'HTML',
      });
      console.log(`Report Service: Message sent to chat_id: ${chat_id}`);
    } catch (error) {
      console.error(`Report Service: Failed to send message to chat_id: ${chat_id}`, error);
    }
  }

  async sendPdfToTelegram(chat_id: number, pdfBuffer: Buffer, yesterdayDate: string, caption: string): Promise<void> {
    const telegramApiUrl = `https://api.telegram.org/bot${process.env.TELEGRAM_TOKEN}/sendDocument`;
    const options = returnNewMenu();
    const replyMarkup = JSON.stringify(options); 
  
    const formData = new FormData();
    formData.append('chat_id', chat_id.toString());
    formData.append('document', pdfBuffer, { filename: `${yesterdayDate}.pdf`, contentType: 'application/pdf' });
    formData.append('reply_markup', replyMarkup);
    formData.append('caption', caption);
    formData.append('parse_mode', 'HTML'); 
  
    try {
      const response = await axios.post(telegramApiUrl, formData, {
        headers: {
          ...formData.getHeaders(),
        },
      });
      console.log(`PDF sent to chat_id: ${chat_id}`);
    } catch (error: any) {
      console.error(`Failed to send PDF to chat_id: ${chat_id}. Error:`, error.message || error);
    }
  }

  async sendPhoto(chat_id: number, image: any): Promise<void> {
    const telegramApiUrl = `https://api.telegram.org/bot${process.env.TELEGRAM_TOKEN}/sendPhoto`;

    try {
      await axios.post(telegramApiUrl, {
        chat_id: chat_id,
        photo: image,
      });
      console.log(`Report Service: Photo sent to chat_id: ${chat_id}`);
    } catch (error) {
      console.error(`Report Service: Failed to send photo to chat_id: ${chat_id}`, error);
    }
  }

  async processReport(articles: Article[], yesterdayDate: string, chat_id: number) {
    const messageText = createReportMessage(articles, yesterdayDate)
    const htmlTable = await getReportHtml(articles);
    const pdfBuffer = await generatePdfFromHtml(htmlTable);
    if (pdfBuffer && messageText) {
      const formatYesterdayDate = yesterdayDate.slice(0, 5)
      await this.sendPdfToTelegram(chat_id, pdfBuffer, formatYesterdayDate, messageText);
    }
  }

  async run(): Promise<void | null> {
    try {
      const currentHour = new Date().getHours() + 3;
      const usersData = await articles_db.getArticlesByTime(currentHour)
      const ids = Object.keys(usersData)

      const yesterdayDate = getYesterdayDate('ru');
      console.log(`Start report service: ${yesterdayDate} ${currentHour}`)

      if (ids.length > 0) {
        for (const chat_id of ids) {
          if (usersData[chat_id][0] && usersData[chat_id][0].wb_api_key) {
            await this.processReport(usersData[chat_id], yesterdayDate, +chat_id)
          } else {
            console.log('There are no articles for ' + chat_id)
          }
        }
      } else {
        console.log('No new articles to report for this hour: ' + currentHour);
      }
    } catch (error) {
      console.error('Error in report service:', error);
    }
  }

  async runForUser(chat_id: number): Promise<void> {
    try {
      await this.prepareReportData(chat_id)
      let articles;
      const yesterdayDate = getYesterdayDate('ru');

      articles = (await articles_db.getAllArticlesForUser(chat_id)).rows
      if (articles.length > 0) {
        if (articles[0] && articles[0].wb_api_key) {
          await this.processReport(articles, yesterdayDate, chat_id)
        }
      } else {
        this.sendMessage(chat_id, "Возникла ошибка при получении данных о товарах")
      }
    } catch (error) {
      console.error('Error running report for user: ', error);
    }
  }

  // Schedule the report service to run every hour from 4 AM to 11 PM
  // at 00 start to getting adv info
  startCronJob() {
    cron.schedule('0 4-23 * * *', async () => {
      console.log('Running report service at:', new Date().toLocaleTimeString('ru-RU', { timeZone: 'Europe/Moscow' }));
      await this.run();
    }, {
      timezone: 'Europe/Moscow'
    });

    cron.schedule('0 0 * * *', async () => {
      console.log('Running data preparing at 00:00:', new Date().toLocaleTimeString('ru-RU', { timeZone: 'Europe/Moscow' }));
      await updateConversions();
      await updateCommissions();
      await updateBoxTariffs();
      await this.prepareReportData();
    }, {
      timezone: 'Europe/Moscow'
    });
  }
}

export const reportService = new ReportService(pool);
console.log('Report Service started!')
reportService.startCronJob();
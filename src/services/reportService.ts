import { Pool } from 'pg';
import axios from 'axios';
import * as dotenv from 'dotenv';
import cron from 'node-cron';
import express from 'express';
import pool from '../../database/db';
import { getXdaysAgoArr, getXDaysPeriod, getYesterdayDate } from '../utils/time';
import { users_db } from '../../database/models/users';
import { articles_db } from '../../database/models/articles';
import { article, Article } from '../dto/articles';
import { extractBuyoutsFromCards, processCampaigns } from '../utils/marketing';
import { formatError, formatReportArticleMessage } from '../utils/string';
import { createChart } from '../utils/charts';
import { updateConversions } from '../utils/conversions';
import { mainOptions, returnMenu, returnNewMenu } from '../components/botButtons';
import { conversions_db } from '../../database/models/conversions';
import { updateCommissions } from '../utils/comissions';
import { commissions_db } from '../../database/models/commissions';
import { User } from '../dto/user';
import { generatePdfFromHtml, getReportHtml } from '../utils/report';
import FormData from 'form-data';


const app = express();

app.use(express.json());
dotenv.config();
const port = process.env.BASE_PORT;

app.post('/runReportForUser', async (req, res) => {
  const { chat_id, article } = req.body;

  try {
    // const RS = new ReportService(pool);
    const user = await users_db.getUserById(chat_id);
    if (user) {
      // await RS.runForUser(user);
      reportService.runForUser(user, article);
      res.status(200).send('Report run successfully for user.');
    } else {
      res.status(404).send('User not found.');
    }
  } catch (error) {
    res.status(500).send('Error running report for user.');
  }
});

app.listen(port, () => {
  console.log(`API Server running on port ${port}`);
});

export function runPersonReport(chat_id: number, article?: article) {
  axios.post(`http://localhost:${process.env.BASE_PORT}/runReportForUser`, { chat_id: chat_id, article: article })
  .then(response => console.log('Report initiated: ', response.data))
  .catch(error => console.error('Failed to initiate report: ', error));
}

export class ReportService {
  private pool: Pool;

  constructor(pool: Pool) {
    this.pool = pool;
  }

  // Fetch articles with type and matching notification_time
  async getArticlesForReport(hour: number): Promise<Article[]> {
    try {
      const articles = await articles_db.getArticlesByTime(hour)
      return articles
    } catch(e) {
      formatError(e, 'Ошибка получения артикулов: ')
      return []
    }
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
        console.log('wb api key:', wb_api_key)
        
        if (!wb_api_key) {
          console.log(`No recent campaigns found for article with chat ID: ${id}`);
          continue;
        }
        
        const advertIds = await this.getCampaigns(wb_api_key, id)
        const nms = articles.map(a => +a.article)
        
        console.log(`articles for ${id}: ${JSON.stringify(nms)}`)
        // console.log(`advertIds for ${id}: ${JSON.stringify(advertIds)}`)
        
        let advertDetailsResponse;
        if (advertIds) {
          advertDetailsResponse = await this.getAdvertDetails(wb_api_key, advertIds)
        }

        // console.log(`adverts details for ${id}: ${JSON.stringify(advertDetailsResponse)}`)

    
        let advRes: any;
        if (advertDetailsResponse) {
          advRes = processCampaigns(advertDetailsResponse, nms, advertIds)
        }

        console.log(`advert result for ${id}: ${JSON.stringify(advRes)}`)
    
        const [monthAgoDate, yesterday, today] = getXDaysPeriod(31);

        console.log("DATES ", monthAgoDate, yesterday, today)
       
        const report = (await this.fetchWbStatistics(nms, wb_api_key, monthAgoDate, yesterday, today));

        console.log(`statistic report for ${id}: ${JSON.stringify(report)}`)
        
        const yesterdayTime = yesterday + " 23:59:59"
        const monthAgoDateTime = monthAgoDate + " 00:00:00"
        const percent_buys = await this.getBuyPercent(nms, wb_api_key, monthAgoDateTime, yesterdayTime)

        console.log(`persent buy for ${id}: ${JSON.stringify(percent_buys)}`)

        const size: Record<string, any> = await this.getNmSizeInfo(nms, wb_api_key)

        console.log(`size ${id}: ${JSON.stringify(size)}`)
    
        for (const nm of nms) {
          if (advRes && advRes.hasOwnProperty(nm)) {
            await articles_db.processMarketingCost(id, +nm, advRes[nm]);
          }
        
          let sizes = size[nm] || {};
          let info = report[nm]?.order_info || {};        
          let percentBuys = percent_buys?.[nm] ?? null;
          let spp = report[nm]?.price_before_spp ?? null;
        
          await articles_db.updateFields(id, +nm, {
            order_info: info,
            percent_buys: percentBuys,
            size: sizes,
            price_before_spp: spp
          });
        }
    
        console.log(`Report details for articles with chat ID ${id}`);
      }

    } catch (e) {
      // console.log(e)
      formatError(e, 'Error to prerape report service: ')
    }
  }

  async getNmSizeInfo(nmIDs: article[], wb_api_key: string) {
    try {
      const requestData = {
        settings: {cursor: { limit: 100 }},
      };
  
      const response = await axios.post(
        'https://content-api.wildberries.ru/content/v2/get/cards/list',
        requestData,
        { headers: { 'Content-Type': 'application/json', 'Authorization': wb_api_key } }
      );
  
      const cards = response.data.cards;
      const filteredData = cards.filter((card: any) => nmIDs.includes(card.nmID))
      const result: Record<string, any> = {};

      filteredData.forEach((el: any) => {
        result[el.nmID] = el.dimensions
      })

      return result;
    } catch (error) {
      formatError(error, 'Ошибка получения данных о маркировке.')
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
      // console.error(e)
      formatError(e, 'Error fetching buy percent: ');
      return {};
    }
  }

  async fetchWbStatistics(articles: article[], wb_api_key: string, startDate: string, yesterday: string, today: string) {
    const url = 'https://seller-analytics-api.wildberries.ru/api/v2/nm-report/detail';

    let moscowTime = new Date().toLocaleString("en-CA", { 
      timeZone: "Europe/Moscow",
      hour12: false 
    }).replace(",", "");
    let monthStartDateTime = startDate + ' 00:00:00'
    let monthEndDateTime = `${today} ${moscowTime.split(" ")[1]}`
    
    const periodRequestData = {
      nmIDs: articles,
      period: {
        begin: monthStartDateTime,
        end: monthEndDateTime,
      },
      page: 1
    };

    const yesterdayRequestData = {
      nmIDs: articles,
      period: {
        begin: yesterday + ' 00:00:00',
        end: yesterday + ' 23:59:59'
      },
      page: 1
    };

    console.log("DATES FORMATTED ",monthStartDateTime, monthEndDateTime)

    const headers = {
      'Authorization': wb_api_key, 
      'Content-Type': 'application/json',
    }

    const result: Record<string, any> = {};
    try {
      const yesterdayResponse = await axios.post(url, yesterdayRequestData, {
        headers: headers
      });

      const logData = yesterdayResponse.data
      console.log(`yesterday data:`, JSON.stringify(logData))

      if (!yesterdayResponse.data.data.cards) {
        console.log(`no yesterday data for ${JSON.stringify(articles)}`)
        // console.log(`yesterday data:`, JSON.stringify(logData))
        return result;
      }

      yesterdayResponse.data.data.cards.forEach((el: any) => {
        if (articles.includes(el.nmID)) {
          // const data = el.history[0]
          const data = el.statistics.selectedPeriod;
          const stocks = el.stocks;
  
          result[el.nmID] = { 
            order_info: {
              ordersCount: data.ordersCount,
              ordersSum: data.ordersSumRub,
              buysCount: data.buyoutsCount,
              buysSum: data.buyoutsSumRub,
              addToCartCount: data.addToCartCount,
              stocksMp: stocks.stocksMp,
              stocksWb: stocks.stocksWb
            },
            price_before_spp: (data.ordersSumRub / data.ordersCount) || null,
          }
        }
      });
    } catch (error) {
      formatError(error, 'Error fetching yesterday report statistics: ')
    }

    console.log('report result after processing yesterday data: ', result)


    try {
      const periodResponse = await axios.post(url, periodRequestData, {
        headers: headers
      });
      
      const logData = periodResponse.data
      console.log(`period data:`, JSON.stringify(logData))

      if (!periodResponse.data.data.cards) {
        console.log(`no period data for ${JSON.stringify(articles)}`)
        // console.log(`period data:`, JSON.stringify(logData))
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
          // const stock = el.stocks;
          result[el.nmID].order_info.addToCartPercent = conversData.addToCartPercent;
          result[el.nmID].order_info.cartToOrderPercent = conversData.cartToOrderPercent;
          result[el.nmID].order_info.buyoutsPercent = conversData.buyoutsPercent;
          // result[el.nmID].order_info.stocksMp = stock.stocksMp;
          // result[el.nmID].order_info.stocksWb = stock.stocksWb;
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
      advertIds.forEach((obj: any) => {
        delete obj.type;
      });

      const advertDetailsResponse = await axios.post('https://advert-api.wildberries.ru/adv/v2/fullstats', advertIds, {
        headers: {
          'Authorization': wb_api_key,
          'Content-Type': 'application/json'
        }
      });

      const data = advertDetailsResponse.data
      return data

    } catch (e) {
      // console.error(e)
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
      // console.error(e)
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

  async sendPdfToTelegram(chat_id: number, pdfBuffer: Buffer): Promise<void> {
    const telegramApiUrl = `https://api.telegram.org/bot${process.env.TELEGRAM_TOKEN}/sendDocument`;
  
    const formData = new FormData();
    formData.append('chat_id', chat_id.toString());
    formData.append('document', new Blob([pdfBuffer], { type: 'application/pdf' }), 'report.pdf');
  
    try {
      await axios.post(telegramApiUrl, formData, {
        headers: {
          ...formData.getHeaders(),
        },
      });
      console.log(`PDF sent to chat_id: ${chat_id}`);
    } catch (error) {
      console.error(`Failed to send PDF to chat_id: ${chat_id}`, error);
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

  async run(): Promise<void | null> {
    try {
      const currentHour = new Date().getHours() + 3;

      if (currentHour === 0) { 
        console.log('start preparing report')
        return this.prepareReportData()
      }

      const articles = await this.getArticlesForReport(currentHour);

      if (articles.length > 0 ) {
        const date = getYesterdayDate();
        console.log(`preparing text of reports for ${date} date`)
        for (const item of articles) {
          if (item.wb_api_key && item.article) {
            const { article, chat_id, marketing_cost } = item;

            const htmlTable = getReportHtml(item, date); 
            const pdfBuffer = await generatePdfFromHtml(htmlTable); 
            await this.sendPdfToTelegram(chat_id, pdfBuffer);
    
              // const message = formatReportArticleMessage(item, date)
              // const marketingChart = createChart(marketing_cost)
              // this.sendMessage(chat_id, message)
              // if (marketingChart) {
              //   return this.sendPhoto(chat_id, marketingChart)
              // }
            } 
          }
      } else {
        console.log('No new articles to report for this hour: '+currentHour);
      }
    } catch (error) {
      console.error('Error in report service:', error);
    } 
  }

  async runForUser(user: User, article?: article): Promise<void> {
    try {
      const chat_id = user.chat_id
      await this.prepareReportData(chat_id)
      let articles;

      if (!article || article === 'all') {
        articles = (await articles_db.getAllArticlesForUser(chat_id, 'on')).rows 
      } else {
        const res = (await articles_db.getArticle(chat_id, article))
        articles = [res]
      }
      
      if (articles.length > 0 ) {
        const date = getYesterdayDate();
        for (const item of articles) {
          if (item.wb_api_key && item.article) {
              // const message = formatReportArticleMessage(item, date)
              // const marketingChart = createChart(marketing_cost)
              const htmlTable = getReportHtml(item, date); 
              const pdfBuffer = await generatePdfFromHtml(htmlTable); 
              await this.sendPdfToTelegram(chat_id, pdfBuffer);
              // this.sendMessage(chat_id, pdf)
              // if (marketingChart) {
              //   return this.sendPhoto(chat_id, marketingChart)
              // }
            } 
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
      await this.prepareReportData();
    }, {
      timezone: 'Europe/Moscow'
    });
  }
}

export const reportService = new ReportService(pool);
console.log('Report Service started!')
reportService.startCronJob();
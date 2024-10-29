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

      if (id) {
        userIds = [await users_db.getUserById(id)]
      } else {
        userIds = await users_db.getReportUsers();
      }

      if (!userIds || userIds.length === 0) {
        console.log('No users who are waiting for report');
        return null
      }
  
      for (const chat_id of userIds) {
        const id = chat_id.chat_id

        const articles = (await articles_db.getAllArticlesForUser(id)).rows

        if (articles.length === 0) {
          return console.log('No articles with status ON to fetch advertisement data: ' + id);
        }
        
        const { wb_api_key } = articles[0] ?? null
    
        if (!wb_api_key) {
          console.log(`No recent campaigns found for article with chat ID: ${id}`);
          continue;
        }
    
        const advertIds = await this.getCampaigns(wb_api_key, id)
        const nms = articles.map(a => +a.article)
    
        let advertDetailsResponse;
        if (advertIds) {
          advertDetailsResponse = await this.getAdvertDetails(wb_api_key, advertIds)
        }
    
        let advRes: any;
        if (advertDetailsResponse) {
          advRes = processCampaigns(advertDetailsResponse, nms, advertIds)
        }
    
        const [monthAgoDate, yesterday] = getXDaysPeriod(30);
       
        const report = (await this.fetchWbStatistics(nms, wb_api_key, monthAgoDate, yesterday));
        
        const yesterdayTime = yesterday + " 23:59:59"
        const monthAgoDateTime = monthAgoDate + " 00:00:00"
        const percent_buys = await this.getBuyPercent(nms, wb_api_key, monthAgoDateTime, yesterdayTime)
    
        const size: Record<string, any> = await this.getNmSizeInfo(nms, wb_api_key)
    
        for (const nm of nms) {
          await articles_db.processMarketingCost(id, +nm, advRes[nm])
    
          await articles_db.updateFields(id, +nm, {
            order_info: report[nm]?.order_info,
            percent_buys: percent_buys[nm], 
            size: size[nm],
            price_before_spp: report[nm]?.price_before_spp
          })
        }
    
        // const testData = (await articles_db.getArticle(id, nms[0]))
        // const message = formatReportArticleMessage(testData, yesterday)
        console.log(`Report details for articles with chat ID ${id}`);
      }

    } catch (e) {
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

      // console.log(cards)
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
      
      // console.log(responseData.data.data.cards)
      return extractBuyoutsFromCards(response)
    } catch (e) {
      formatError(e, 'Error fetching buy percent: ');
      return {};
    }
  }

  async fetchWbStatistics(articles: article[], wb_api_key: string, startDate: string, endDate: string) {
    const periodUrl = 'https://seller-analytics-api.wildberries.ru/api/v2/nm-report/detail';
    const yesterdayUrl = 'https://seller-analytics-api.wildberries.ru/api/v2/nm-report/detail/history';

    const periodRequestData = {
      nmIDs: articles,
      period: {
        begin: startDate + ' 00:00:00',
        end: endDate + ' 23:59:59',
      },
      page: 1
    };

    const yesterdayRequestData = {
      nmIDs: articles,
      period: {
        begin: endDate,
        end: endDate,
      },
      timezone: 'Europe/Moscow',
      aggregationLevel: 'day',
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

      yesterdayResponse.data.data.forEach((el: any) => {
        if (articles.includes(el.nmID)) {
          const data = el.history[0]
  
          result[el.nmID] = { 
            order_info: {
              ordersCount: data.ordersCount,
              ordersSum: data.ordersSumRub,
              buysCount: data.buyoutsCount,
              buysSum: data.buyoutsSumRub,
              addToCartCount: data.addToCartCount,
            },
            price_before_spp: (data.ordersSumRub / data.ordersCount) || null,
          }
        }
      });
    } catch (error) {
      formatError(error, 'Error fetching yesterday report statistics: ')
    }

    try {
      const periodResponse = await axios.post(periodUrl, periodRequestData, {
        headers: headers
      });

      for (const el of periodResponse.data.data.cards) {
        if (articles.includes(el.nmID)) {
          if (!result[el.nmID].order_info) result[el.nmID].order_info = {};
          const conversData = el.statistics.selectedPeriod.conversions;
          const ordersCount = el.statistics.selectedPeriod.ordersCount;
          const categoryName = el.object.name;
          const conversions = await conversions_db.getConversion(categoryName)
          const commission = await commissions_db.getCommission(categoryName)
          const stock = el.stocks;
          result[el.nmID].order_info.addToCartPercent = conversData.addToCartPercent;
          result[el.nmID].order_info.cartToOrderPercent = conversData.cartToOrderPercent;
          result[el.nmID].order_info.buyoutsPercent = conversData.buyoutsPercent;
          result[el.nmID].order_info.stocksMp = stock.stocksMp;
          result[el.nmID].order_info.stocksWb = stock.stocksWb;
          result[el.nmID].order_info.ordersCount30 = ordersCount;
          result[el.nmID].order_info.commission = Number(commission.kgvpMarketplace) ?? 0;
          result[el.nmID].order_info.click_to_cart = Number(conversions.click_to_cart).toFixed(2) ?? 0;
          result[el.nmID].order_info.cart_to_order = Number(conversions.cart_to_order).toFixed(2) ?? 0;
          result[el.nmID].order_info.fullConversion = (conversions.click_to_cart * conversions.cart_to_order).toFixed(2) ?? 0;
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

      // console.log(JSON.stringify(campaigns))
      
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
        for (const item of articles) {
          if (item.wb_api_key && item.article) {
            const { article, chat_id, marketing_cost } = item;
    
              const message = formatReportArticleMessage(item, date)
              // const marketingChart = createChart(marketing_cost)
              this.sendMessage(chat_id, message)
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
        articles = (await articles_db.getAllArticlesForUser(chat_id)).rows 
      } else {
        console.log(user, article)
        const res = (await articles_db.getArticle(chat_id, article))
        articles = [res]
        console.log(articles)
      }
      
      if (articles.length > 0 ) {
        const date = getYesterdayDate();
        for (const item of articles) {
          if (item.wb_api_key && item.article) {
              const message = formatReportArticleMessage(item, date)
              // const marketingChart = createChart(marketing_cost)
              this.sendMessage(chat_id, message)
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
reportService.startCronJob();
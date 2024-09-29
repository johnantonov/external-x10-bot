import { Pool } from 'pg';
import axios from 'axios';
import * as dotenv from 'dotenv';
import cron from 'node-cron';
import express from 'express';
import pool from '../../database/db';
import { getXdaysAgoArr, getXDaysPeriod, getYesterdayDate } from '../utils/dates';
import { users_db } from '../../database/models/users';
import { articles_db } from '../../database/models/articles';
import { article, Article } from '../dto/articles';
import { extractBuyoutsFromCards, processCampaigns } from '../utils/marketing';
import { formatError, formatReportArticleMessage } from '../utils/string';
import { createChart } from '../utils/charts';
const app = express();

app.use(express.json());
dotenv.config();
const port = process.env.BASE_PORT;

app.post('/runReportForUser', async (req, res) => {
  const { chat_id } = req.body;
  try {
    const RS = new ReportService(pool);
    const user = await users_db.getUserById(chat_id);
    if (user) {
      // await RS.runForUser(user);
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

export function runPersonReport(chat_id: number) {
  axios.post(`http://localhost:${process.env.BASE_PORT}/runReportForUser`, { chat_id: chat_id })
  .then(response => console.log('Report initiated: ', response.data))
  .catch(error => console.error('Failed to initiate report: ', error));
}

export class ReportService {
  private pool: Pool;

  constructor(pool: Pool) {
    this.pool = pool;
  }

  // Fetch articles with type and matching notification_time
  // if hour = 0, add all articles for adv data
  async getArticlesForReport(hour: number, isPreparation: boolean = false ): Promise<Article[]> {
    try {
      let articles;
      if (isPreparation) {
        articles = await articles_db.getAllArticles()
      } else {
        articles = await articles_db.getArticlesByTime(hour)
      }
  
      return articles
    } catch(e) {
      formatError(e, 'Ошибка получения артикулов: ')
      return []
    }
  }

  async prepareReportData(chat_id = 6043879539) {
    const articles = await this.getArticlesForReport(0, true);

    if (articles.length === 0) {
      return console.log('No articles with status ON to fetch advertisement data.');
    }

    const { wb_api_key } = articles[0]

    if (!wb_api_key) {
      console.log(`No recent campaigns found for article with chat ID: ${chat_id}`);
      // continue;
    }

    const advertIds = await this.getCampaigns(wb_api_key, chat_id)
    const nms = articles.map(a => +a.article)

    let advertDetailsResponse;
    if (advertIds) {
      advertDetailsResponse = await this.getAdvertDetails(wb_api_key, advertIds)
    }

    let advRes: any;
    if (advertDetailsResponse) {
      advRes = processCampaigns(advertDetailsResponse, nms)
    }

    const [monthAgoDate, yesterday] = getXDaysPeriod(30);
    const report = (await this.fetchWbStatistics(nms, wb_api_key, yesterday, yesterday));

    const yesterdayTime = yesterday + " 00:00:00"
    const monthAgoDateTime = monthAgoDate + " 00:00:00"
    const percent_buys = await this.getBuyPercent(nms, wb_api_key, monthAgoDateTime, yesterdayTime)

    const size: Record<string, any> = await this.getNmSizeInfo(nms, wb_api_key)

    for (const nm of nms) {
      await articles_db.processMarketingCost(chat_id, +nm, advRes[nm])

      await articles_db.updateFields(chat_id, +nm, {
        order_info: report[nm]?.order_info,
        percent_buys: percent_buys[nm], 
        size: size[nm],
        price_before_spp: report[nm]?.price_before_spp
        
      })
    }
    console.log(`Report details for articles with chat ID ${chat_id}`);
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
  }

  async fetchWbStatistics(articles: article[], wb_api_key: string, startDate: string, endDate: string) {
    const url = 'https://seller-analytics-api.wildberries.ru/api/v2/nm-report/detail/history';

    const requestData = {
      nmIDs: articles,
      period: {
        begin: startDate,
        end: endDate,
      },
      timezone: 'Europe/Moscow',
      aggregationLevel: 'day',
    };

    try {
      const response = await axios.post(url, requestData, {
        headers: {
          'Authorization': wb_api_key, 
          'Content-Type': 'application/json',
        }
      });

      const result: Record<string, any> = {};
      response.data.data.forEach((el: any) => {
        if (articles.includes(el.nmID)) {
          const data = el.history[0]
  
          result[el.nmID] = { 
            order_info: {
              ordersCount: data.ordersCount,
              ordersSum: data.ordersSumRub,
              buysCount: data.buyoutsCount,
              buysSum: data.buyoutsSumRub,
            },
            price_before_spp: (data.ordersSumRub / data.ordersCount) || null,
          }
        }
      })

      return result
    } catch (error) {
      formatError(error, 'Error fetching NM report statistics: ')
      return {};
    }
  }

  async getAdvertDetails(wb_api_key: string, advertIds: []) {
    try {
      const advertDetailsResponse = await axios.post('https://advert-api.wildberries.ru/adv/v2/fullstats', advertIds, {
        headers: {
          'Authorization': wb_api_key,
          'Content-Type': 'application/json'
        }
      });
      const data = advertDetailsResponse.data
      return data

    } catch (e) {
      formatError(e, 'error fetching adv data')
    }
  }

  async getCampaigns(wb_api_key: string, chat_id: number) {
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
      campaign.advert_list.filter((advert: any) => {
        const changeTime = new Date(advert.changeTime);
        return changeTime >= thirtyDaysAgo && changeTime <= now;
      })
    );

    const last30DaysDates = getXdaysAgoArr(10);
    const advertIds = recentCampaigns.map((advert: any) => ({ 
      id: advert.advertId, 
      dates: last30DaysDates 
    }));
    
    if (advertIds.length === 0) {
      console.error(`No recent campaigns found for article with chat ID: ${chat_id}`);
      return null;
    }

    return advertIds
  }

  // Send message to user
  async sendMessage(chat_id: number, message: string): Promise<void> {
    const telegramApiUrl = `https://api.telegram.org/bot${process.env.TELEGRAM_TOKEN}/sendMessage`;
  
    try {
      await axios.post(telegramApiUrl, {
        chat_id: chat_id,
        text: message,
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

  async run(): Promise<void> {
    try {
      const currentHour = new Date().getHours() + 3;
      if (currentHour === 0) {
        return this.prepareReportData()
      }

      const articles = await this.getArticlesForReport(currentHour, false);

      if (articles.length > 0 ) {
        const date = getYesterdayDate();

        for (const item of articles) {
          if (item.wb_api_key && item.article) {
            const { article, chat_id, marketing_cost } = item;
    
              const message = formatReportArticleMessage(item, date)
              const marketingChart = createChart(marketing_cost)
              this.sendMessage(chat_id, message)
              if (marketingChart) {
                return this.sendPhoto(chat_id, marketingChart)
              }
            } 
          }
        } else {
        console.log('No new articles to report for this hour: '+currentHour);
      }
    } catch (error) {
      console.error('Error in report service:', error);
    } 
  }

  // async runForUser(user: User): Promise<void> {
  //   try {
  //     if (user.type === 'old_ss' && user.ss) {
  //       const reportData = await this.getReportsFromWebApp([user.ss]);
  //       if (reportData[user.ss]) {
  //         const formattedMessage = formatReportMessage(reportData[user.ss]);
  //         await this.sendMessage(user.chat_id, formattedMessage);
  //       }
  //     } else if (user.type === 'new_art' && user.article && user.wb_api_key) {
  //       const date = getYesterdayDate();
  //       const report = await this.fetchWbStatistics([{ article: user.article, key: user.wb_api_key}], date, date);
  //       if (report) {
  //         const articleData = await user_articles_db.selectArticle(user.chat_id);
  //         const data = report.data[0].history;
  //         const message = formatReportArticleMessage(data, articleData, user, date); 
  //         const marketingChart = createMarketingChart(articleData?.marketing_cost)
  //         await this.sendMessage(user.chat_id, message);
  //         if (marketingChart) {
  //           return this.sendPhoto(user.chat_id, marketingChart)
  //         }
  //       }
  //     }
  //   } catch (error) {
  //     console.error('Error running report for user:', error);
  //   }
  // }

  // Schedule the report service to run every hour from 4 AM to 11 PM
  // at 00 start to getting adv info
  startCronJob() {
    cron.schedule('0 4-23 * * *', async () => {
      console.log('Running report service at:', new Date().toLocaleTimeString('ru-RU', { timeZone: 'Europe/Moscow' }));
      await this.prepareReportData();
      // await this.run();
    }, {
      timezone: 'Europe/Moscow'
    });

    cron.schedule('0 0 * * *', async () => {
      console.log('Running advertisement data fetch at 00:00:', new Date().toLocaleTimeString('ru-RU', { timeZone: 'Europe/Moscow' }));
      await this.prepareReportData();
    }, {
      timezone: 'Europe/Moscow'
    });
  }
}




export const reportService = new ReportService(pool);
reportService.startCronJob();
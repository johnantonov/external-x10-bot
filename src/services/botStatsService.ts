import axios from 'axios'
import * as dotenv from 'dotenv'
import cron from 'node-cron';
import { users_db } from '../../database/models/users';
import { BotStatsPayload } from '../dto/stats';

dotenv.config()
const env = process.env

export async function sendBotStats() {
  try {
    if (env.MODE === 'test') {
      const statsData: BotStatsPayload = {
        action: 'base_stats',
        data: {
          "users_count": (await users_db.getAllUsers())?.length || 0,
          "users_with_key_count": (await users_db.getReportUsers())?.length || 0,
          "mode": env.MODE
        }
      };
  
      const response = await axios.post(env.STATS_WEB_APP_URL!, statsData, {
        headers: { 'Content-Type': 'application/json' }
      });
      
      const res = response.data;
      console.log('Response from stats web app: ', JSON.stringify(res));
    }
  } catch (e) {
    console.error('Error sending bot base stats', e);
  }
}

cron.schedule('30 * * * *', async () => {
  console.log('Running bot stats service at:', new Date().toLocaleTimeString('ru-RU', { timeZone: 'Europe/Moscow' }));
  await sendBotStats();
}, { timezone: 'Europe/Moscow' });

console.log('Stats Service started!')
import axios from 'axios'
import * as dotenv from 'dotenv'
import cron from 'node-cron';
import { users_db } from '../../database/models/users';
import { BotStatsPayload } from '../dto/stats';
import pool from '../../database/db';
import { bot } from '../bot';

dotenv.config()
const env = process.env

export async function sendBotStats() {
  try {
    const stats = await users_db.getBaseStats()

      const statsData: BotStatsPayload = {
        action: 'base_stats',
        data: {
          "users_count": stats?.users_count,
          "users_with_key_count": stats?.users_with_key_count,
          "active_users": stats?.active_users,
          "mode": env.MODE!
        }
      };
  
      const response = await axios.post(env.STATS_WEB_APP_URL!, statsData, {
        headers: { 'Content-Type': 'application/json' }
      });
      
      const res = response.data;
      console.log('Response from stats web app: ', JSON.stringify(res));
  } catch (e) {
    console.error('Error sending bot base stats', e);
  }
}

export async function getFactUsers() {
  const failedUsers: number[] = [];
  const successfulUsers: number[] = [];

  const query = `SELECT user_id FROM messageJobs`
  const users = (await pool.query(query)).rows;

  for (const user of users) {
    try {
      const message = await bot.sendMessage(user.chat_id, '.', {
        disable_notification: true,
      });

      await bot.deleteMessage(user.chat_id, message.message_id);
      successfulUsers.push(user.chat_id);
    } catch (error) {
      failedUsers.push(user.chat_id);
    }
  }

  const result = 
`Messages successfully received by: ${successfulUsers.length}
Messages failed to be received by: ${failedUsers.length}

List of IDs that did not receive the message: ${failedUsers.join(', ')}
`
  console.log(result)
  return result
}

cron.schedule('30 * * * *', async () => {
  console.log('Running bot stats service at:', new Date().toLocaleTimeString('ru-RU', { timeZone: 'Europe/Moscow' }));
  await sendBotStats();
}, { timezone: 'Europe/Moscow' });

console.log('Stats Service started!')
import axios from 'axios'
import * as dotenv from 'dotenv'
import cron from 'node-cron';
import { users_db } from '../../database/models/users';
import { BotStatsPayload } from '../dto/stats';
import pool from '../../database/db';
import { bot } from '../bot';
import { getRefProgramStats } from '../utils/ref';

dotenv.config()
const env = process.env

export async function sendBotStats() {
  try {
    const stats = await users_db.getBaseStats()

    const baseStatsData: BotStatsPayload = {
      action: 'base_stats',
      data: {
        "users_count": stats?.users_count,
        "users_with_key_count": stats?.users_with_key_count,
        "active_users": stats?.active_users,
        "mode": env.MODE!
      }
    };

    const refStatsData = {
      action: 'ref_stats',
      data: await getRefProgramStats()
    };

    const response = await axios.post(env.STATS_WEB_APP_URL!, baseStatsData, {
      headers: { 'Content-Type': 'application/json' }
    });
      
    const res = response.data;
    console.log('Response from stats web app: ', JSON.stringify(res));

    const response2 = await axios.post(env.STATS_WEB_APP_URL!, refStatsData, {
      headers: { 'Content-Type': 'application/json' }
    });
      
    const res2 = response2.data;
    console.log('Response from stats web app: ', JSON.stringify(res2));
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
      const message = await bot.sendMessage(user.user_id, '.', {
        disable_notification: true,
      });

      await bot.deleteMessage(user.user_id, message.message_id);
      successfulUsers.push(user.user_id);
    } catch (error) {
      failedUsers.push(user.user_id);
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
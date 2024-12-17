import pool from "../../database/db";
import { users_db } from "../../database/models/users";
import { bot } from "../bot";
import { mainOptions } from "../components/buttons";
import { config } from "../config/config";
import { formatError } from "../utils/string&number";

export class BroadcastService {
  static async sendMessageToAllUsers(text: string, options?: object) {
    try {
      const users = await users_db.getAllUsers();

      if (!users || users.length === 0) {
        return console.log('there are no users for message');
      }

      console.log('Waiting message ' + users.length + ' users')

      let count = 0
      let blocked = 0
      let blockedIds = [];

      for (const user of users) {
        try {
          await bot.sendMessage(user.chat_id, text, { parse_mode: 'HTML' });
          count++
        } catch (e) {
          blocked++
          blockedIds.push(user.chat_id)
          formatError(e, `Error sending message to user ${user.user_id}`)
        }
      }

      console.log('BroadcastService: successfully sent '+count+' messages, blocked: '+ blocked)
      console.log('Blocked ids: '+blockedIds)
    } catch (error) {
      console.error('Error sending message to all users: ', error);
    }
  }

  static async sendMessageToFilteredUsers(text: string, options?: object, filter?: string) {
    try {
      const query = `SELECT user_id FROM messageJobs WHERE filter IS NULL LIMIT 2000`
      const users = (await pool.query(query)).rows;

      let count = 0
      let blocked = 0
      let blockedIds = [];
  
      for (const user of users) {
        try {
          await bot.sendMessage(user.user_id, text, { 
            // reply_markup: mainOptions('new')!, 
            parse_mode: 'HTML' 
          });
            const filePath = './public/documents/Тестовый отчет.pdf'; 
            const res = await bot.sendDocument(user.user_id, 'BQACAgIAAxkDBVVA_2dhEOIB2Eiq_jHrBXUbFRt2zUTBAAI2ZQACCAgJS_kSkEKrzHy4NgQ', {
              caption: config.pdf.testReportText, 
              parse_mode: 'HTML',
              // reply_markup: mainOptions('new')!,
              // disable_notification: false
            });
          
            // const log = JSON.stringify(res)
            // console.log(res)
  
          await pool.query(`UPDATE messageJobs SET filter = 1 WHERE user_id = $1`, [user.user_id]);
          count++
        } catch (e) {
          blocked++
          await pool.query(`UPDATE messageJobs SET filter = 0 WHERE user_id = $1`, [user.user_id]);
          formatError(e, `Error sending message to user ${user.user_id}`)
          blockedIds.push(user.user_id);
        }
      }

      console.log('BroadcastService: successfully sent '+count+' messages, blocked: '+ blocked)
      console.log('Blocked ids: '+blockedIds)
    } catch (error) {
      console.error('Error sending message to filtered users: ', error);
    }
  }


  // static async sendMessageToFilteredUsers(text: string, options?: object, filter?: string) {
  //   try {
  //     const query = filter
  //       ? `SELECT user_id FROM messageJobs WHERE filter = $1`
  //       : `SELECT user_id FROM messageJobs`;
  //     const users = (await pool.query(query, filter ? [filter] : [])).rows;

  //     for (const user of users) {
  //       await bot.sendMessage(user.user_id, text, { reply_markup: mainOptions('new')!, disable_notification: true, parse_mode: 'HTML' });
  //     }
  //   } catch (error) {
  //     console.error('Error sending message to filtered users: ', error);
  //   }
  // }

  static async sendMediaGroupToAllUsers(mediaGroup: any[], caption: string) {
    try {
      const users = await users_db.getAllUsers();

      if (!users || users.length === 0) {
        return console.log('there are no users for message');
      }
  
      const updatedMediaGroup = mediaGroup.map((file, index) => {
        if (index === 0) {
          return { ...file, caption }; 
        }
        return file; 
      });
  
      for (const user of users) {
        try {
          await bot.sendMediaGroup(user.chat_id, updatedMediaGroup);
        } catch (error) {
          console.error(`Error sending message to ${user.chat_id}:`, error);
        }
      }
    } catch (error) {
      console.error('Error sending mediagroup: ', error);
    }
  }

  static async sendMediaGroupToFilteredUsers(mediaGroup: any[], caption: string, filter?: string) {
    try {
      const query = filter
        ? `SELECT user_id FROM messageJobs WHERE filter = $1`
        : `SELECT user_id FROM messageJobs`;
      const users = (await pool.query(query, filter ? [filter] : [])).rows;
  
      if (!users || users.length === 0) {
        return console.log('No users for message');
      }
  
      const updatedMediaGroup = mediaGroup.map((file, index) => {
        if (index === 0) {
          return { ...file, caption };
        }
        return file;
      });
  
      for (const user of users) {
        try {
          await bot.sendMediaGroup(user.user_id, updatedMediaGroup);
        } catch (error) {
          console.error(`Error sending media group to ${user.user_id}:`, error);
        }
      }
    } catch (error) {
      console.error('Error sending media group: ', error);
    }
  }

  static async sendPhotoToAllUsers(photo: string, caption?: string, options?: object) {
    try {
      const users = await users_db.getAllUsers();

      if (!users) {
        return console.log('there are no users for photo');
      }

      for (const user of users) {
        await bot.sendPhoto(user.chat_id, photo, { caption, ...options, disable_notification: true });
      }
    } catch (error) {
      console.error('Error sending photo to all users: ', error);
    }
  }

  static async sendVideoToAllUsers(video: string, caption?: string, options?: object) {
    try {
      const users = await users_db.getAllUsers();

      if (!users) {
        return console.log('there are no users for video');
      }

      for (const user of users) {
        await bot.sendVideo(user.chat_id, video, { caption, ...options, disable_notification: true });
      }
    } catch (error) {
      console.error('Error sending video to all users: ', error);
    }
  }

  static async sendPollToAllUsers(question: string, options: string[], optionsObject?: object) {
    try {
      const users = await users_db.getAllUsers();

      if (!users) {
        return console.log('there are no users for poll');
      }

      for (const user of users) {
        await bot.sendPoll(user.chat_id, question, options, { ...optionsObject, disable_notification: true });
      }
    } catch (error) {
      console.error('Error sending poll to all users: ', error);
    }
  }

  static async forwardMessageToAllUsers(chatId: number, messageId: number) {
    try {
      const users = (await pool.query(`SELECT chat_id FROM ${users_db.tableName}`)).rows;
      for (const user of users) {
        await bot.forwardMessage(user.chat_id, chatId, messageId);
      }
    } catch (error) {
      console.error('Error forwarding message to all users: ', error);
    }
  }

  static async forwardMessageToFilteredUsers(chatId: number, messageId: number, filter?: string) {
    try {
      const query = filter
        ? `SELECT user_id FROM messageJobs WHERE filter = $1`
        : `SELECT user_id FROM messageJobs`;
      const users = (await pool.query(query, filter ? [filter] : [])).rows;
  
      for (const user of users) {
        await bot.forwardMessage(user.user_id, chatId, messageId);
      }
    } catch (error) {
      console.error('Error forwarding message to filtered users: ', error);
    }
  }
}
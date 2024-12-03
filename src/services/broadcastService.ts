import pool from "../../database/db";
import { users_db } from "../../database/models/users";
import { bot } from "../bot";

export class BroadcastService {
  static async sendMessageToAllUsers(text: string, options?: object) {
    try {
      const ids = await users_db.getReportUsers();

      if (!ids) {
        return console.log('there are no users for message');
      }

      for (const chat_id of ids) {
        await bot.sendMessage(chat_id, text, { ...options, disable_notification: true });
      }
    } catch (error) {
      console.error('Error sending message to all users: ', error);
    }
  }

  static async sendMessageToFilteredUsers(filter: string, text: string, options?: object) {
    try {
      const ids = ((await pool.query(`SELECT chat_id FROM ${users_db.tableName} WHERE ${filter}`)).rows);
      for (const chat_id of ids) {
        await bot.sendMessage(chat_id, text, { ...options, disable_notification: true });
      }
    } catch (error) {
      console.error('Error sending message to filtered users: ', error);
    }
  }

  static async sendMediaGroupToAllUsers(mediaGroup: any[], caption: string) {
    try {
      const ids = await users_db.getReportUsers(); 
      if (!ids) {
        return console.log('Нет пользователей для отправки сообщений');
      }

      for (const chat_id of ids) {
        await bot.sendMediaGroup(chat_id, mediaGroup);
      }
    } catch (error) {
      console.error('Ошибка при отправке группы медиафайлов всем пользователям: ', error);
    }
  }

  static async sendPhotoToAllUsers(photo: string, caption?: string, options?: object) {
    try {
      const ids = await users_db.getReportUsers();

      if (!ids) {
        return console.log('there are no users for photo');
      }

      for (const chat_id of ids) {
        await bot.sendPhoto(chat_id, photo, { caption, ...options, disable_notification: true });
      }
    } catch (error) {
      console.error('Error sending photo to all users: ', error);
    }
  }

  static async sendVideoToAllUsers(video: string, caption?: string, options?: object) {
    try {
      const ids = await users_db.getReportUsers();

      if (!ids) {
        return console.log('there are no users for video');
      }

      for (const chat_id of ids) {
        await bot.sendVideo(chat_id, video, { caption, ...options, disable_notification: true });
      }
    } catch (error) {
      console.error('Error sending video to all users: ', error);
    }
  }

  static async sendPollToAllUsers(question: string, options: string[], optionsObject?: object) {
    try {
      const ids = await users_db.getReportUsers();

      if (!ids) {
        return console.log('there are no users for poll');
      }

      for (const chat_id of ids) {
        await bot.sendPoll(chat_id, question, options, { ...optionsObject, disable_notification: true });
      }
    } catch (error) {
      console.error('Error sending poll to all users: ', error);
    }
  }

  static async forwardMessageToAllUsers(chatId: number, messageId: number) {
    try {
      const ids = (await pool.query(`SELECT chat_id FROM ${users_db.tableName}`)).rows;
      for (const chat_id of ids) {
        await bot.forwardMessage(chat_id, chatId, messageId);
      }
    } catch (error) {
      console.error('Error forwarding message to all users: ', error);
    }
  }

  static async forwardMessageToFilteredUsers(chatId: number, messageId: number, filter: string) {
    try {
      const ids = (await pool.query(`SELECT chat_id FROM ${users_db.tableName} WHERE ${filter}`)).rows;
      for (const chat_id of ids) {
        await bot.forwardMessage(chat_id, chatId, messageId);
      }
    } catch (error) {
      console.error('Error forwarding message to filtered users: ', error);
    }
  }
}
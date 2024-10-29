import { BaseModel } from "../BaseModel";
import { Pool, QueryResult } from 'pg';
import * as dotenv from 'dotenv';
import pool from "../db";
import { User, user_type } from "../../src/dto/user";
import { article } from "../../src/dto/articles";
import { articles_db } from "./articles";
dotenv.config();

class UsersModel extends BaseModel<User> {
  constructor(pool: Pool) {
    super('users', pool)
  }

  async processUserRequest(chat_id: number, newUsername: string | undefined): Promise<[user_type | null, number | null]> {
    try {
      const userResult = await this.select({ chat_id });
      
      if (userResult.rows.length === 0) {
        console.error(`Пользователь с chat_id ${chat_id} не найден`);
        return [null, null];
      }
  
      const user = userResult.rows[0]; 
      
      if (newUsername) {
        const query = `
          UPDATE ${this.tableName}
          SET username = $1
          WHERE chat_id = $2
        `;
  
        await this.pool.query(query, [newUsername, chat_id]);
      }

      return [user.type, user.last_report_call];
    } catch (error) {
      console.error(`Ошибка при обновлении username: ${error}`);
      return [null, null];
    }
  }

  async  updateLastReportCall(chat_id: number) {
    const now = new Date();
    await pool.query('UPDATE users SET last_report_call = $1 WHERE chat_id = $2', [now, chat_id]);
  }

  async updateNotificationTime(chat_id: number, notification_time: number): Promise<void> {
    const values = [notification_time, chat_id]

    let query = `
      UPDATE ${this.tableName}
      SET notification_time = $1
      WHERE chat_id = $2
    `;

    await this.pool.query(query, values);
  }


  async findOrCreateUser(chat_id: number, username: string | undefined): Promise<User | null> {
    const existingUser = await this.select({ chat_id });
    
    if (existingUser.rows.length > 0) {
      return existingUser.rows[0];  
    } else {
      const newUser: Partial<User> = { chat_id, username };
      await this.insert(newUser);
      return (await this.select({ chat_id })).rows[0];
    }
  }

  async checkWbApiKey(chat_id: number) {
    try {
      const user = await this.select({ chat_id });
  
      if (user.rows.length > 0 && user.rows[0].wb_api_key) {
        return user.rows[0].wb_api_key
      } else {
        return false; 
      }
    } catch (e) {
      console.error('postgres: error to check key - '+e)
    }
  }

  async updateWb_api_key(chat_id: number, wb_api_key: string): Promise<void> {
    const query = `
      UPDATE ${this.tableName}
      SET wb_api_key = $1
      WHERE chat_id = $2
    `;
    await this.pool.query(query, [wb_api_key, chat_id]);
  }

  async updateArticle(chat_id: number, article: article): Promise<void> {
    const oldArticle = (await this.getUserById(chat_id))?.article

    if (oldArticle) {
      await articles_db.updateIs_active(chat_id, oldArticle, false)
    }

    const query = `
      UPDATE ${this.tableName}
      SET article = $1, type = 'article'
      WHERE chat_id = $2
    `;
    await this.pool.query(query, [article, chat_id]);
  }

  async updateType(chat_id: number, wb_api_key?: string | null, article?: article, decreaseTo?: user_type): Promise<void> {
    if (decreaseTo) {
      await this.update('chat_id', chat_id, { type: decreaseTo }, ['chat_id'])
      return
    }

    if (wb_api_key || article) {
      const type: user_type = wb_api_key && article ? 'article' : wb_api_key && !article ? 'registered' : 'article'

      const updateData: Partial<User> = {
        type: type,
        wb_api_key: wb_api_key,
      };
  
      await this.update('chat_id', chat_id, updateData, ['chat_id']);
    } else {
      console.error(`Ошибка ВБ ключа или артикула: ${chat_id}\nартикул: ${article}\n\nключ: ${wb_api_key}`)
    }
  }

  async getUserById(chat_id: number) {
    const existingUser = await this.select({ chat_id });
      if (existingUser.rows.length > 0) {
        return existingUser.rows[0];  
      } else {
        return null
      }
  }

  async getReportUsers() {
    const query = `
      SELECT chat_id FROM ${this.tableName}
      WHERE notification_time > 0
    `;

    const res = await this.pool.query(query);
    return res.rows
  }
}

export const users_db = new UsersModel(pool);
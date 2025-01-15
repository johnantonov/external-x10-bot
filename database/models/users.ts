import { BaseModel } from "../BaseModel";
import { Pool } from 'pg';
import * as dotenv from 'dotenv';
import pool from "../db";
import { User, user_type } from "../../src/dto/user";
import { formatDateForTimestamp } from "../../src/utils/time";
import { Sid } from "../../src/dto/sids";
dotenv.config();

class UsersModel extends BaseModel<User> {
  tableName: string;

  constructor(pool: Pool) {
    super('users', pool);
    this.tableName = 'users'; 
  }

  async processUserRequest(chat_id: number, newUsername: string | undefined, fullname: string | undefined)
  : Promise<[user_type | null, User['last_report_call'] | null,  User['last_sec_report_call'] | null, User['from_ref'] | null]> {
    try {
      const userResult = await this.select({ chat_id });

      if (userResult.rows.length === 0) {
        console.error(`User with chat_id ${chat_id} not found`);
        return [null, null, null, null];
      }

      const user = userResult.rows[0];

        const updQuery = `
          UPDATE ${this.tableName}
          SET username = $1, fullname = $2, is_active = true, last_action = NOW()
          WHERE chat_id = $3
        `;

        await this.pool.query(updQuery, [newUsername, fullname, chat_id]);

      return [user.type, user.last_report_call, user.last_sec_report_call, user.from_ref];
    } catch (error) {
      console.error(`Error while updating username: ${error}`);
      return [null, null, null, null];
    }
  }

  async upsertUserFromJson(data: any): Promise<void> {
    try {
      const columns = Object.keys(data);
      const values = Object.values(data);
  
      const placeholders = values.map((_, index) => `$${index + 1}`).join(', ');

      const updateClause = columns
        .map((col, index) => `${col} = EXCLUDED.${col}`)
        .join(', ');
  
      const query = `
        INSERT INTO ${this.tableName} (${columns.join(', ')})
        VALUES (${placeholders})
        ON CONFLICT (chat_id) 
        DO UPDATE SET ${updateClause};
      `;
  
      await this.pool.query(query, values);
      console.log('success: '+ query)
    } catch (e) {
      console.error('Error in upsertUser:', e);
    }
  }

  async clearLastReportTime(chat_id?: number) {
    try {
      if (chat_id) {
        await pool.query('UPDATE users SET last_report_call = null WHERE chat_id = $1', [chat_id]);
      } else {
        await pool.query('UPDATE users SET last_report_call = null');
      }
    } catch (e) {
      console.error(`Error clearing report time for user: ${chat_id ? chat_id : 'all'} -- `, e)
    }
  }

  async updateIsActive(chat_id: number): Promise<void> {
    try {
      const query = `
        UPDATE users
        SET is_active = true, last_action = NOW()
        WHERE chat_id = $1
      `;
      await this.pool.query(query, [chat_id]);
    } catch (e) {
      console.error(`Error updating is_active for user with chat_id: ${chat_id} -- `, e);
    }
  }

  async updateLastReportCall(chat_id: number, reportType: 'last_report_call' | 'last_sec_report_call' = 'last_report_call') {
    try {
      const now = new Date();
      if (reportType === 'last_sec_report_call') {
        await pool.query('UPDATE users SET last_report_call = $1 WHERE chat_id = $2', [now, chat_id]);
      } else {
        await pool.query('UPDATE users SET last_sec_report_call = $1 WHERE chat_id = $2', [now, chat_id]);
      }
    } catch (e) {
      console.error(`Error updating report time for user: ${chat_id ? chat_id : 'all'} -- `, e)
    }
  }

  async updateNotificationTime(chat_id: number, notification_time: number | string): Promise<void> {
    try {
      const values = [notification_time, chat_id]
  
      let query = `
        UPDATE ${this.tableName}
        SET notification_time = $1
        WHERE chat_id = $2
      `;
  
      await this.pool.query(query, values);      
    } catch (e) {
      console.error(`Error updating notification time for user: ${chat_id}`, e)
    }
  }


  async findOrCreateUser(chat_id: number, username: string | undefined): Promise<User | null> {
    try {
      const existingUser = await this.select({ chat_id });
  
      if (existingUser.rows.length > 0) {
        return existingUser.rows[0];
      } else {
        const newUser: Partial<User> = { chat_id, username };
        await this.insert(newUser);
        return (await this.select({ chat_id })).rows[0];
      }
    } catch (e) {
      console.error("Error in findOrCreateUser: ",e)
      return null
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
      console.error('postgres: error to check key - ' + e)
    }
  }

  async updateWbApiKey(chat_id: number, wb_api_key: string): Promise<void> {
    try {
      const query = `
        UPDATE ${this.tableName}
        SET wb_api_key = $1
        WHERE chat_id = $2
      `;
      const query2 = `
        UPDATE articles 
        SET wb_api_key = $1
        WHERE chat_id = $2
      `
      await this.pool.query(query, [wb_api_key, chat_id]);
      await this.pool.query(query2, [wb_api_key, chat_id]);
    } catch (e) {
      console.error('Error updating wb api key for user: ', chat_id, " -- ", e)
    }
  }

  async updateType(chat_id: number, type: user_type, wb_api_key?: string | null, refData?: { sid: Sid['sid'], from_ref: User['from_ref'] }): Promise<void> {
    try {
      const updateData: Partial<User> = {
        type: type,
      };
  
      // отрабатывает только когда пользователь впервые добавляет wb key
      if (wb_api_key) {
        updateData.wb_api_key = wb_api_key
        updateData.api_reg_at = formatDateForTimestamp(new Date());
      }

      // отрабатывает только когда пользователь имеет реферальный при регистрации, и указанный сид уникален, а также впервые добавляет wb key
      if (refData) {
        
      }
  
      await this.update('chat_id', chat_id, updateData, ['chat_id']);
    } catch {
      console.error(`Error while updating user type: `,chat_id, " ", type)
    }
  }

  async getUserById(chat_id: number): Promise<User | null> {
    try {
      const existingUser = await this.select({ chat_id });
      if (existingUser.rows.length > 0) {
        return existingUser.rows[0];
      } else {
        return null
      }
    } catch (e) {
      console.error('Error getting user by id ', chat_id, " :", e)
      return null
    }
  }

  async getAllUsers() {
    try {
      const query = `SELECT chat_id FROM ${this.tableName}`;
  
      const res = await this.pool.query(query);
      return res.rows
    } catch (e) {
      console.error('Error getting users: ', e)
    }
  }

  async getFromRef(chat_id: number): Promise<User['from_ref'] | null> {
    try {
      const query = `SELECT from_ref FROM ${this.tableName} WHERE chat_id = $1`;
  
      const res = await this.pool.query(query, [chat_id]);
      return res.rows[0].from_ref
    } catch (e) {
      console.error('Error getting users: ', e)
      return null
    }
  }

  async getReportUsers() {
    try {
      const query = `SELECT chat_id FROM ${this.tableName} WHERE wb_api_key IS NOT NULL`;
  
      const res = await this.pool.query(query);
      return res.rows
    } catch (e) {
      console.error('Error getting users: ', e)
    }
  }

  async getBaseStats() {
    try {
      // обновляем is_active для пользователей, у которых прошло больше суток с последнего действия
      const updateQuery = `
        UPDATE ${this.tableName}
        SET is_active = false
        WHERE is_active = true AND last_action < NOW() - INTERVAL '1 day'
      `;
      await this.pool.query(updateQuery);
  
      // выполняем основной запрос для подсчёта статистики
      const statsQuery = `
        SELECT 
          COUNT(*) AS total_users,
          COUNT(*) FILTER (WHERE is_active = true) AS active_users,
          COUNT(*) FILTER (WHERE wb_api_key IS NOT NULL) AS users_with_api_key
        FROM ${this.tableName}
      `;
      const res = await this.pool.query(statsQuery);
  
      return {
        users_count: res.rows[0].total_users || 0,
        active_users: res.rows[0].active_users || 0,
        users_with_key_count: res.rows[0].users_with_api_key || 0
      };
    } catch (e) {
      console.error('Error getting users base stats: ', e);
    }
  }
}

export const users_db = new UsersModel(pool);
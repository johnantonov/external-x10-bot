import { Pool, QueryResult } from 'pg';
import { BaseModel } from "../BaseModel";
import * as dotenv from 'dotenv';
import pool from "../db";
import { article, SKU } from '../../src/dto/sku&report';
import { sortObjDatesKeys } from '../../src/utils/time';
import { config } from '../../src/config/config';
import { user_type } from '../../src/dto/user';
import { users_db } from './users';
dotenv.config();

class ArticlesModel extends BaseModel<SKU> {
  constructor(pool: Pool) {
    super('articles', pool);
  }

  async processMarketingCost(chat_id: number, article: article, marketingCost: Record<string, number>): Promise<void> {
    try {
      const query = `SELECT marketing_cost FROM ${this.tableName} WHERE chat_id = $1 AND article = $2`;
      const result = await this.pool.query(query, [chat_id, article]);

      let currentMarketingCost = result.rows[0]?.marketing_cost || {};
      for (const [date, values] of Object.entries(marketingCost)) {
        if (values || !(date in currentMarketingCost)) {
          currentMarketingCost[date] = values;
        }
      }

      const sortedDates = sortObjDatesKeys(currentMarketingCost);
      const latest30Days = sortedDates.slice(0, 30);

      const updatedMarketingCost = latest30Days.reduce((obj, date) => {
        obj[date] = currentMarketingCost[date];
        return obj;
      }, {} as Record<string, number>);

      const updateQuery = `
        UPDATE ${this.tableName} 
        SET marketing_cost = $1 
        WHERE chat_id = $2 AND article = $3
      `;

      await this.pool.query(updateQuery, [updatedMarketingCost, chat_id, article]);
    } catch (e) {
      console.error('Error updating marketing cost:', e);
    }
  }

  async getArticle(chatId: number, article: article): Promise<SKU> {
    const query = `
      SELECT * FROM ${this.tableName}
      WHERE chat_id = $1 AND article = $2
    `;
    const result = await this.pool.query(query, [chatId, article]);
    return result.rows[0];
  }

  async getArticlesByTime(notification_time: number): Promise<Record<string, any>> {
    const query = `
      SELECT * FROM ${this.tableName}
      WHERE notification_time = $1
    `;

    const data = (await this.pool.query<SKU>(query, [notification_time])).rows
    const res: Record<string, any> = {};

    data.forEach(row => {
      if (!res[row.chat_id]) {
        res[row.chat_id] = []
      }

      res[row.chat_id].push(row)
    })

    return res;
  }

  async getAllArticles(limit: number = 100, offset: number = 0): Promise<SKU[]> {
    const query = `
      SELECT * FROM ${this.tableName}
      WHERE status = $1
      LIMIT $2 OFFSET $3
    `;

    return (await this.pool.query<SKU>(query, [status, limit, offset])).rows;
  }

  async getAllSkuForUser(chat_id: number): Promise<QueryResult<SKU>> {
    let query = `
      SELECT * FROM ${this.tableName}
      WHERE chat_id = $1
    `;
    return await this.pool.query<SKU>(query, [chat_id]);
  }

  async addArticle(article: Partial<SKU>): Promise<void> {
    await this.insert(article);
  }

  async addSku(chat_id: number, articles: number[][]): Promise<number> {
    try {
      const maxCount = config.maxSku
      let skuCount = (await articles_db.getAllSkuForUser(chat_id)).rows.length
      let newCount = 0
  
      for (const article of articles) {
        if (skuCount >= maxCount) {
          return newCount
        }
  
        await this.insert({ chat_id, article: article[0], self_cost: article[1] });
        skuCount++
        newCount++
      }

      return newCount
    } catch (e) {
      console.error('Error while adding new sku into DB: ',e)
      return 0
    }
  }

  async removeSku(chat_id: number, article?: article): Promise<void> {
    try {
      const values = [chat_id]
      let query = `
        DELETE FROM ${this.tableName}
        WHERE chat_id = $1
      `
      if (article) {
        query += ` AND article = $2`;
        values.push(article as number)
      }
  
      await this.pool.query(query, values);
    } catch (e) {
      console.error('Error while removing new sku from DB: ',e)
    }
  }

  async updateNotificationTime(chat_id: number, notification_time: number | string, article?: article): Promise<void> {
    let status = notification_time === 0 ? 'off' : 'on';
    const values = [notification_time, chat_id]

    let query = `
      UPDATE ${this.tableName}
      SET notification_time = $1
      WHERE chat_id = $2
    `;

    if (article) {
      query += `AND article = $3`
      values.push(article as number)
    }

    await this.pool.query(query, values);
  }

  async updateSelfCost(chat_id: number, article: article, self_cost: number): Promise<void> {
    const query = `
      UPDATE ${this.tableName}
      SET self_cost = $1
      WHERE chat_id = $2 AND article = $3
    `;
    await this.pool.query(query, [self_cost, chat_id, article]);
  }

  async updateMarketingCost(chat_id: number, article: article, marketing_cost: JSON): Promise<void> {
    const query = `
      UPDATE ${this.tableName}
      SET marketing_cost = $1
      WHERE chat_id = $2 AND article = $3
    `;
    await this.pool.query(query, [marketing_cost, chat_id, article]);
  }

  async updateOtherCost(chat_id: number, article: article, other_cost: number): Promise<void> {
    const query = `
      UPDATE ${this.tableName}
      SET other_cost = $1
      WHERE chat_id = $2 AND article = $3
    `;
    await this.pool.query(query, [other_cost, chat_id, article]);
  }

  async updateMark(chat_id: number, article: article, mark: number): Promise<void> {
    const query = `
      UPDATE ${this.tableName}
      SET mark = $1
      WHERE chat_id = $2 AND article = $3
    `;
    await this.pool.query(query, [mark, chat_id, article]);
  }

  async updateTax(chat_id: number, tax: number): Promise<void> {
    try {
      const type: user_type = 'registered' // нам следует обновить type, т.к. на данном этапе новые пользователи становятся registered
      const skuQuery = `
        UPDATE ${this.tableName}
        SET tax = $1
        WHERE chat_id = $2
      `;
      await this.pool.query(skuQuery, [tax, chat_id]);

      const usersQuery = `
        UPDATE ${users_db.tableName}
        SET type = $1, tax = $2
        WHERE chat_id = $3
      `;
      await this.pool.query(usersQuery, [type, tax, chat_id]);
    } catch (e) {
      console.error("Error while updating tax: ", e)
    }
  }

  async updatePercentBuys(chat_id: number, article: article, percent_buys: number): Promise<void> {
    const query = `
      UPDATE ${this.tableName}
      SET percent_buys = $1
      WHERE chat_id = $2 AND article = $3
    `;
    await this.pool.query(query, [percent_buys, chat_id, article]);
  }

  async updatePercentMp(chat_id: number, article: article, percent_mp: number): Promise<void> {
    const query = `
      UPDATE ${this.tableName}
      SET percent_mp = $1
      WHERE chat_id = $2 AND article = $3
    `;
    await this.pool.query(query, [percent_mp, chat_id, article]);
  }

  async updatePriceBeforeSpp(chat_id: number, article: article, price_before_spp: number): Promise<void> {
    const query = `
      UPDATE ${this.tableName}
      SET price_before_spp = $1
      WHERE chat_id = $2 AND article = $3
    `;
    await this.pool.query(query, [price_before_spp, chat_id, article]);
  }

  async updateStorage(chat_id: number, article: article, storage: number): Promise<void> {
    const query = `
      UPDATE ${this.tableName}
      SET storage = $1
      WHERE chat_id = $2 AND article = $3
    `;
    await this.pool.query(query, [storage, chat_id, article]);
  }

  async updateSize(chat_id: number, article: article, size: number): Promise<void> {
    const query = `
      UPDATE ${this.tableName}
      SET size = $1
      WHERE chat_id = $2 AND article = $3
    `;
    await this.pool.query(query, [size, chat_id, article]);
  }

  async updateOrderInfo(chat_id: number, article: article, order_info: string): Promise<void> {
    const query = `
      UPDATE ${this.tableName}
      SET order_info = $1
      WHERE chat_id = $2 AND article = $3
    `;
    await this.pool.query(query, [order_info, chat_id, article]);
  }

  async updateFields(chat_id: number, article: article, fields: Partial<SKU>): Promise<void> {
    const keys = Object.keys(fields);
    const values = Object.values(fields);

    if (keys.length === 0) {
      throw new Error("No fields to update");
    }

    const setClause = keys.map((key, index) => `${key} = $${index + 1}`).join(', ');

    const query = `
      UPDATE ${this.tableName}
      SET ${setClause}
      WHERE chat_id = $${keys.length + 1} AND article = $${keys.length + 2}
    `;

    await this.pool.query(query, [...values, chat_id, article]);
  }

  async upsertArticleFromJson(data: any): Promise<void> {
    try {
      const columns = Object.keys(data); 
      const values = Object.values(data);
    
      const placeholders = values.map((_, index) => `$${index + 1}`).join(', ');
    
      const updateClause = columns
        .map((col) => `${col} = EXCLUDED.${col}`)
        .join(', ');
  
      const query = `
        INSERT INTO ${this.tableName} (${columns.join(', ')})
        VALUES (${placeholders})
        ON CONFLICT (chat_id, article) 
        DO UPDATE SET ${updateClause};
      `;
    
      await this.pool.query(query, values);
    } catch (e) {
      console.error('Error in upsertArticleFromJson:', e);
    }
  }
}

export const articles_db = new ArticlesModel(pool);

import { Pool, QueryResult } from 'pg';
import { BaseModel } from "../BaseModel";
import * as dotenv from 'dotenv';
import pool from "../db";
import { article, Article, ArticleStatus } from '../../src/dto/articles';
import { sortObjDatesKeys } from '../../src/utils/time';
dotenv.config();

class ArticlesModel extends BaseModel<Article> {
  constructor(pool: Pool) {
    super('articles', pool);
  }

  async processMarketingCost(chat_id: number, article: article , marketingCost: Record<string, number>): Promise<void> {
    try {
      const query = `SELECT marketing_cost FROM ${this.tableName} WHERE chat_id = $1 AND article = $2`;
      const result = await this.pool.query(query, [chat_id, article]);

      console.log(marketingCost)

      let currentMarketingCost = result.rows[0]?.marketing_cost || {};
      for (const [date, values] of Object.entries(marketingCost)) {
        if (values || !(date in currentMarketingCost)) {
          currentMarketingCost[date] = values;
        }
      }

      console.log(currentMarketingCost)
      
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

  async getArticle(chatId: number, article: article): Promise<Article> {
    const query = `
      SELECT * FROM ${this.tableName}
      WHERE chat_id = $1 AND article = $2
    `;
    const result = await this.pool.query(query, [chatId, article]);
    return result.rows[0];
  }

  async getArticlesByTime(notification_time: number, status: ArticleStatus = 'on'): Promise<Record<string, any>> {
    const query = `
      SELECT * FROM ${this.tableName}
      WHERE notification_time = $1 AND status = $2
    `;

    const data = (await this.pool.query<Article>(query, [notification_time, status])).rows
    const res: Record<string, any> = {};

    data.forEach(row => {
      if (!res[row.chat_id]) {
        res[row.chat_id] = []
      }

      res[row.chat_id].push(row)
    })

    return res;
  }

  async getAllArticles(status: ArticleStatus = 'on', limit: number = 100, offset: number = 0): Promise<Article[]> {
    const query = `
      SELECT * FROM ${this.tableName}
      WHERE status = $1
      LIMIT $2 OFFSET $3
    `;
    
    return (await this.pool.query<Article>(query, [status, limit, offset])).rows;
  }

  async getAllArticlesForUser(chat_id: number, status?: ArticleStatus): Promise<QueryResult<Article>> {
    let query = `
      SELECT * FROM ${this.tableName}
      WHERE chat_id = $1
    `;
    const values: Array<string|number> = [chat_id]
    if (status) {
      query += `AND status = $2`
      values.push(status)
    }
    return await this.pool.query<Article>(query, values);
  }

  async addArticle(article: Partial<Article>): Promise<void> {
    article.status = 'on';
    await this.insert(article);
  }

  async removeArticle(chat_id: number, article?: article): Promise<void> {
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
  }

  async updateNotificationTime(chat_id: number, notification_time: number, article?: article): Promise<void> {
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

  async updateTitle(chat_id: number, article: article, title: string): Promise<void> {
    const query = `
      UPDATE ${this.tableName}
      SET title = $1
      WHERE chat_id = $2 AND article = $3
    `;
    await this.pool.query(query, [title, chat_id, article]);
  }

  async updateIsActive(chat_id: number, article: article, is_active: boolean): Promise<void> {
    const query = `
      UPDATE ${this.tableName}
      SET is_active = $1
      WHERE chat_id = $2 AND article = $3
    `;
    await this.pool.query(query, [is_active, chat_id, article]);
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
  
  async updateTax(chat_id: number, article: article, tax: number): Promise<void> {
    const query = `
      UPDATE ${this.tableName}
      SET tax = $1
      WHERE chat_id = $2 AND article = $3
    `;
    await this.pool.query(query, [tax, chat_id, article]);
  }

  async updateAcquiring(chat_id: number, article: article, acquiring: number): Promise<void> {
    const query = `
      UPDATE ${this.tableName}
      SET acquiring = $1
      WHERE chat_id = $2 AND article = $3
    `;
    await this.pool.query(query, [acquiring, chat_id, article]);
  }

  async updatePercentBuysitle(chat_id: number, article: article, percent_buys: number): Promise<void> {
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

  async updateLogisticsByBuys(chat_id: number, article: article, logistics_by_buys: number): Promise<void> {
    const query = `
      UPDATE ${this.tableName}
      SET logistics_by_buys = $1
      WHERE chat_id = $2 AND article = $3
    `;
    await this.pool.query(query, [logistics_by_buys, chat_id, article]);
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

  async updateStatus(chat_id: number, article: article, status: ArticleStatus): Promise<void> {
    const query = `
      UPDATE ${this.tableName}
      SET status = $1
      WHERE chat_id = $2 AND article = $3
    `;
    await this.pool.query(query, [status, chat_id, article]);
  }

  async updateFields(chat_id: number, article: article, fields: Partial<Article>): Promise<void> {
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
}

export const articles_db = new ArticlesModel(pool);

import { Pool } from 'pg';
import { BaseModel } from "../BaseModel";
import * as dotenv from 'dotenv';
import pool from "../db";
import { Conversion } from '../../src/dto/conversions';
dotenv.config();

class ConversionsModel extends BaseModel<Conversion> {
  constructor(pool: Pool) {
    super('conversions', pool);
  }

  async getConversion(name: string): Promise<Conversion> {
    const query = `
      SELECT * FROM ${this.tableName} WHERE subject_name = $1 LIMIT 1
    `;

    const result = await this.pool.query(query, [name]);
    return result.rows[0];
  }

  async upsertConversions(dataArray: Conversion[]): Promise<void> {
    try {
      const query = `
        INSERT INTO ${this.tableName} (date, category, subject_name, click_to_cart, cart_to_order, buyout_percent)
        VALUES ($1, $2, $3, $4, $5, $6)
        ON CONFLICT (category, subject_name)
        DO UPDATE SET
          date = EXCLUDED.date,
          click_to_cart = EXCLUDED.click_to_cart,
          cart_to_order = EXCLUDED.cart_to_order,
          buyout_percent = EXCLUDED.buyout_percent
      `;
    
      for (const conversion of dataArray) {
        await this.pool.query(query, [
          conversion.date,
          conversion.category,
          conversion.subject_name,
          conversion.click_to_cart,
          conversion.cart_to_order,
          conversion.buyout_percent
        ]);
      }
    } catch (e) {
      console.error(e)
    }
  }
}

export const conversions_db = new ConversionsModel(pool);
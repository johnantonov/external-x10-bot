import { Pool } from 'pg';
import { BaseModel } from "../BaseModel";
import * as dotenv from 'dotenv';
import pool from "../db";
import { Ref } from '../../src/dto/refs';
import { User } from '../../src/dto/user';
dotenv.config();

class RefsModel extends BaseModel<Ref> {
  constructor(pool: Pool) {
    super('refs', pool);
  }

  async checkRef(chat_id: number): Promise<Ref | null> {
    const query = `
      SELECT * FROM ${this.tableName} WHERE chat_id = $1 LIMIT 1
    `;

    const result = await this.pool.query(query, [chat_id]);

    if (result?.rows?.length > 0) {
      console.log('there is no ref for : ' + chat_id)
      return null
    } else {
      return result.rows[0]
    }
  }


  async updateSuccessRefs(ref: User['from_ref']): Promise<void> {
    try {
      const query = `
        UPDATE ${this.tableName}
        SET success_refs = COALESCE(success_refs, 0) + 1
        WHERE ref = $1
      `;
      await this.pool.query(query, [ref]);
    } catch (e) {
      console.error(`Error updating success_refs for user with ref: ${ref} -- `, e);
    }
  }

  async updateClicks(ref: User['from_ref']): Promise<void> {
    console.log(ref)
    try {
      const query = `
        UPDATE ${this.tableName}
        SET clicks = COALESCE(clicks, 0) + 1
        WHERE ref = $1
      `;
      await this.pool.query(query, [ref]);
    } catch (e) {
      console.error(`Error updating clicks for user with ref: ${ref} -- `, e);
    }
  }
}

export const refs_db = new RefsModel(pool);
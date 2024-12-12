import { Pool } from 'pg';
import { BaseModel } from "../BaseModel";
import * as dotenv from 'dotenv';
import pool from "../db";
import { Sid } from '../../src/dto/sids';
import { User } from '../../src/dto/user';
dotenv.config();

class SidsModel extends BaseModel<Sid> {
  constructor(pool: Pool) {
    super('sids', pool);
  }

  async isUniqueSid(sid: string, from_ref?: User['from_ref'] | null): Promise<Boolean> {
    const query = `
      SELECT * FROM ${this.tableName} WHERE sid = $1 LIMIT 1
    `;

    const result = await this.pool.query(query, [sid]);

    if (result?.rows?.length > 0) {
      console.log('sid is not unique: ' + sid)
      return false
    } else {
      console.log('unique sid: ' + sid)
      await this.insert({ sid: sid, added_by: from_ref })
      return true
    }
  }
}

export const sids_db = new SidsModel(pool);
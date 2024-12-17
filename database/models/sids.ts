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

  async upsertSidFromJson(data: any): Promise<void> {
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
        ON CONFLICT (sid) 
        DO UPDATE SET ${updateClause};
      `;
    
      await this.pool.query(query, values);
      console.log('success: '+ query)
    } catch (e) {
      console.error('Error in upsertArticleFromJson:', e);
    }
  }
}

export const sids_db = new SidsModel(pool);
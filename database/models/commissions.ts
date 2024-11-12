import { Pool } from 'pg';
import { BaseModel } from "../BaseModel";
import pool from "../db";
import { Commission } from '../../src/dto/commissions';

class CommissionsModel extends BaseModel<Commission> {
  constructor(pool: Pool) {
    super('commissions', pool);
  }

  async getCommission(name: string): Promise<Commission> {
    const query = `
      SELECT * FROM ${this.tableName} WHERE "subjectName" = $1 LIMIT 1
    `;

    const result = await this.pool.query(query, [name]);
    return result.rows[0];
  }

  async upsertCommissions(dataArray: Commission[]): Promise<void> {
    try {
      const query = `
        INSERT INTO ${this.tableName} ("parentName", "subjectName", "parentID", "subjectID", "kgvpMarketplace", "kgvpSupplier", "kgvpSupplierExpress", "paidStorageKgvp")
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
        ON CONFLICT ("parentName", "subjectName")
        DO UPDATE SET
          "parentID" = EXCLUDED."parentID",
          "subjectID" = EXCLUDED."subjectID",
          "kgvpMarketplace" = EXCLUDED."kgvpMarketplace",
          "kgvpSupplier" = EXCLUDED."kgvpSupplier",
          "kgvpSupplierExpress" = EXCLUDED."kgvpSupplierExpress",
          "paidStorageKgvp" = EXCLUDED."paidStorageKgvp"
      `;

      for (const commission of dataArray) {
        await this.pool.query(query, [
          commission.parentName,
          commission.subjectName,
          commission.parentID,
          commission.subjectID,
          commission.kgvpMarketplace,
          commission.kgvpSupplier,
          commission.kgvpSupplierExpress,
          commission.paidStorageKgvp
        ]);
      }
    } catch (e) {
      console.error(e);
    }
  }
}

export const commissions_db = new CommissionsModel(pool);
import { Pool } from 'pg';
import { BaseModel } from "../BaseModel";
import pool from "../db";
import { BoxTariff } from "../../src/dto/boxTariffs"

class BoxTariffsModel extends BaseModel<BoxTariff> {
  constructor(pool: Pool) {
    super('box_tariffs', pool);
  }

  async getAllTariffs(): Promise<Array<BoxTariff>> {
    const query = `
      SELECT * FROM ${this.tableName}
    `;

    const result = await this.pool.query(query, [name]);
    return result.rows[0];
  }

  async getBoxTariff(name: string | string[]): Promise<Array<BoxTariff>> {
    let query = `SELECT * FROM ${this.tableName} WHERE "warehouseName" `;
    let params: any[] = [];
  
    if (Array.isArray(name)) {
      const placeholders = name.map((_, index) => `$${index + 1}`).join(',');
      query += `IN (${placeholders})`;
      params = name; 
    } else {
      query += `= $1 LIMIT 1`;
      params = [name]; 
    }
  
    const result = await this.pool.query(query, params);
    return result.rows;
  }

  async upsertBoxTariffs(dataArray: BoxTariff[]): Promise<void> {
    try {
      const query = `
        INSERT INTO ${this.tableName} ("warehouseName", "boxDeliveryAndStorageExpr", "boxDeliveryBase", "boxDeliveryLiter", "boxStorageBase", "boxStorageLiter")
        VALUES ($1, $2, $3, $4, $5, $6)
        ON CONFLICT ("warehouseName")
        DO UPDATE SET
          "boxDeliveryAndStorageExpr" = EXCLUDED."boxDeliveryAndStorageExpr",
          "boxDeliveryBase" = EXCLUDED."boxDeliveryBase",
          "boxDeliveryLiter" = EXCLUDED."boxDeliveryLiter",
          "boxStorageBase" = EXCLUDED."boxStorageBase",
          "boxStorageLiter" = EXCLUDED."boxStorageLiter"
      `;

      for (const box_tariff of dataArray) {
        await this.pool.query(query, [
          box_tariff.warehouseName,
          box_tariff.boxDeliveryAndStorageExpr,
          box_tariff.boxDeliveryBase,
          box_tariff.boxDeliveryLiter,
          box_tariff.boxStorageBase,
          box_tariff.boxStorageLiter,
        ]);
      }
    } catch (e) {
      console.error(e);
    }
  }
}

export const box_tariffs_db = new BoxTariffsModel(pool);
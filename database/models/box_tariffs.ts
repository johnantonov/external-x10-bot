import { Pool } from 'pg';
import { BaseModel } from "../BaseModel";
import pool from "../db";
import { BoxTariff } from "../../src/dto/boxTariffs"

class BoxTariffsModel extends BaseModel<BoxTariff> {
  constructor(pool: Pool) {
    super('box_tariffs', pool);
  }

  async getBoxTariff(name: string): Promise<BoxTariff> {
    const query = `
      SELECT * FROM ${this.tableName} WHERE "warehouseName" = $1 LIMIT 1
    `;

    const result = await this.pool.query(query, [name]);
    return result.rows[0];
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
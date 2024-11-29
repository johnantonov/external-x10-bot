import axios from "axios";
import { box_tariffs_db } from "../../database/models/box_tariffs";
import { getTodayDate } from "./time";
import { parseNumericValue } from "./parse";

export async function updateBoxTariffs() {
  try {
    const today = getTodayDate();
    
    const tariffsResponse = await axios.get('https://common-api.wildberries.ru/api/v1/tariffs/box?date='+today, {
      headers: {
        'Authorization': process.env.WB_TEST_KEY!,
        'Content-Type': 'application/json'
      }
    });

    let data = tariffsResponse.data.response.data.warehouseList;

    console.log(JSON.stringify(data))
    
    data = data.map((tariff: any) => ({
      warehouseName: tariff.warehouseName,
      boxDeliveryAndStorageExpr: parseNumericValue(tariff.boxDeliveryAndStorageExpr),
      boxDeliveryBase: parseNumericValue(tariff.boxDeliveryBase),
      boxDeliveryLiter: parseNumericValue(tariff.boxDeliveryLiter),
      boxStorageBase: parseNumericValue(tariff.boxStorageBase),
      boxStorageLiter: parseNumericValue(tariff.boxStorageLiter)
    }));

    await box_tariffs_db.upsertBoxTariffs(data);

    console.log('BoxTariffs updated successfully');
    return true
  } catch (error) {
    console.error('Error getting BoxTariffs data: ', error);
    return false
  }
}
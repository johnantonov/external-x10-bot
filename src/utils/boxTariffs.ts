import axios from "axios";
import { box_tariffs_db } from "../../database/models/box_tariffs";
import { getTodayDate } from "./time";

export async function updateBoxTariffs() {
  try {
    const today = getTodayDate();
    
    const tariffsResponse = await axios.get('https://common-api.wildberries.ru/api/v1/tariffs/box?date='+today, {
      headers: {
        'Authorization': process.env.WB_TEST_KEY!,
        'Content-Type': 'application/json'
      }
    });

    const data = tariffsResponse.data.warehouseList;
    await box_tariffs_db.upsertBoxTariffs(data)

    console.log('Commissions updated successfully');
  } catch (error) {
    console.error('Error getting commissions data: ', error);
  }
}
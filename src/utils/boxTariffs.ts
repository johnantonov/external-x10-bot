import axios from "axios";
import { box_tariffs_db } from "../../database/models/box_tariffs";

export async function updateBoxTariffs() {
  try {
    const commissionResponse = await axios.get('https://common-api.wildberries.ru/api/v1/tariffs/box', {
      headers: {
        'Authorization': process.env.WB_TEST_KEY!,
        'Content-Type': 'application/json'
      }
    });

    const data = commissionResponse.data.report;
    await box_tariffs_db.upsertBoxTariffs(data)

    console.log('Commissions updated successfully');
  } catch (error) {
    console.error('Error getting commissions data: ', error);
  }
}
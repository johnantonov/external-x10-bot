import axios from "axios";
import { commissions_db } from "../../database/models/commissions";

export async function updateCommissions() {
  try {
    const commissionResponse = await axios.get('https://common-api.wildberries.ru/api/v1/tariffs/commission?locale=ru', {
      headers: {
        'Authorization': process.env.WB_TEST_KEY!,
        'Content-Type': 'application/json'
      }
    });

    const data = commissionResponse.data.report;
    // console.log(data)
    await commissions_db.upsertCommissions(data);

    console.log('Commissions updated successfully');
  } catch (error) {
    console.error('Error getting commissions data: ', error);
  }
}
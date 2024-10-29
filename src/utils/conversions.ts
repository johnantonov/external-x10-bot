import axios from "axios";
import { Conversion } from "../dto/conversions";
import { conversions_db } from "../../database/models/conversions";

export function mapToConversion(dataArray: any[][]): Conversion[] {
  return dataArray.map(item => ({
    date: item[0],             // дата
    category: item[1],         // категория
    subject_name: item[2],     // название товара
    click_to_cart: parseFloat(item[3]),  // клики в корзину
    cart_to_order: parseFloat(item[4]),  // корзина -> заказ
    buyout_percent: parseFloat(item[5])  // процент выкупа
  }));
};

export async function updateConversions() {
  try {
    const res = await axios.post(process.env.SS_MP_CONVERSIONS!, null, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const conversionsArray = mapToConversion(res.data.data);
    await conversions_db.upsertConversions(conversionsArray);

    console.log('Conversions updated successfully');
  } catch (error) {
    console.error('Error getting all data: ', error);
  }
}

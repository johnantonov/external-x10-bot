import { SKU } from "../dto/sku";
import { formatNumber, NumberOrZero } from "../utils/string";
import { getYesterdayDate } from "../utils/time";

export function createReportMessage(articles: SKU[], formatReportDate: string) {
  let message = ``;
  let ordersSumTotal = 0;
  let ordersCountTotal = 0;
  let buysSumTotal = 0;
  let buysCountTotal = 0;
  let marketingCostTotal = 0;
  let rev = 0;
  let revTotal = 0;
  let drr: number[] = [];
  let margins: number[] = [];
  let marginsWithDrr: number[] = [];
  let krrrTotalArray: number[] = [];

  const date = getYesterdayDate() as `${number}-${number}-${number}`;

  articles.forEach((articleData: SKU) => {
    const stats = articleData.order_info?.[date] || {};
    const marketing = articleData?.marketing_cost || {};
    const marketingCost = NumberOrZero(marketing?.[date]?.cost)

    ordersSumTotal += (stats?.ordersSum || 0)
    ordersCountTotal += (stats.ordersCount || 0)
    buysSumTotal += NumberOrZero(articleData.sales?.[date].infoBuysSum)
    buysCountTotal += NumberOrZero(articleData.sales?.[date].infoBuysCount)
    marketingCostTotal += marketingCost
    
    revTotal += NumberOrZero(articleData.other_metricks?.[date].revWithDrr);
    krrrTotalArray.push(articleData?.other_metricks?.[date].krrr ?? 0)
    margins.push(articleData?.other_metricks?.[date].margin ?? 0)
    marginsWithDrr.push(articleData?.other_metricks?.[date].marginWithDrr ?? 0)
    drr.push(articleData?.other_metricks?.[date].drr ?? 0)
  })

  const krrrTotal = (krrrTotalArray.reduce((sum, num) => sum + num, 0) / (krrrTotalArray.length || 1));
  const marginTotal = (margins.reduce((sum, num) => sum + num, 0) / (margins.length || 1));
  const marginWithDrrTotal = (marginsWithDrr.reduce((sum, num) => sum + num, 0) / (marginsWithDrr.length || 1));
  const drrTotal = (drr.reduce((sum, num) => sum + num, 0) / (drr.length || 1));

  message = `
Заказы: ${formatNumber(ordersSumTotal)}₽, ${ordersCountTotal}шт
Выкупы: ${formatNumber(buysSumTotal)}₽, ${formatNumber(buysCountTotal)}шт
Реклама: ${formatNumber(marketingCostTotal)}₽
ДРР: ${formatNumber(drrTotal)}%
Маржа до ДРР: ${formatNumber(marginTotal)}%
Маржа с ДРР: ${formatNumber(marginWithDrrTotal)}%
КРРР: ${formatNumber(krrrTotal)}%
<b>Прибыль с ДРР: ${formatNumber(revTotal)}₽</b>
  `
  return `<b>10X Отчет ${formatReportDate}</b>\n${message}`;
}
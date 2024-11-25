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
  let krrrTotalArray: number[] = [];

  const date = getYesterdayDate() as `${number}-${number}-${number}`;

  articles.forEach((articleData: SKU) => {
    const stats = articleData.order_info?.[date] || {};
    const marketing = articleData?.marketing_cost || {};
    const marketingCost = NumberOrZero(marketing?.[date]?.cost)

    ordersSumTotal += (stats?.ordersSum || 0)
    ordersCountTotal += (stats.ordersCount || 0)
    buysSumTotal += (stats.buysSum || 0)
    buysCountTotal += (stats.buysCount || 0)
    marketingCostTotal += marketingCost
    
    rev += NumberOrZero(stats.buysSum);
    revTotal += NumberOrZero(rev - marketingCost);

    const krrr = calcKrrr(revTotal, rev)
    krrrTotalArray.push(Number(krrr))
  })

  const krrrTotal = +((krrrTotalArray.reduce((sum, num) => sum + num, 0) / (krrrTotalArray.length || 1)).toFixed(2));

  message = `
Заказы: ${ordersSumTotal}₽, ${ordersCountTotal}шт
Выкупы: ${buysSumTotal.toFixed(0)}₽, ${buysCountTotal}шт
Реклама: ${marketingCostTotal.toFixed(0)}₽
ДРР: ${formatNumber((marketingCostTotal / (ordersSumTotal || 1)) * 100)}%
Маржа до ДРР: ${calcMargin(rev, buysSumTotal)}%
Маржа с ДРР: ${calcMargin(revTotal, buysSumTotal)}%
КРРР: ${isNaN(krrrTotal) ? 0 : krrrTotal}%
<b>Прибыль с ДРР: ${isNaN(revTotal) ? 0 : revTotal.toFixed(0)}₽</b>
  `
  return `<b>10X Отчет ${formatReportDate}</b>\n${message}`;
}

function calcKrrr(revWithDrr: any, rev: any): number {
  return NumberOrZero(((revWithDrr || 0) / (rev || 1)) * 100);
}

function calcMargin(rev: any, buysSum: any): number {
  return NumberOrZero((rev || 0) / (buysSum || 1) * 100);
}
import { OrdersObject, SKU, TextReportData } from "../dto/sku&report";
import { calculateRevByOne } from "../utils/dataProcessing";
import { formatNumber, getCorrectWordEnd, NumberOrZero } from "../utils/string&number";
import { getTodayDate, getYesterdayDate } from "../utils/time";

export function createReportMessage(articles: SKU[], formatReportDate: string) {
  let message = ``;
  const data = initReportData()

  const date = getYesterdayDate() as `${number}-${number}-${number}`;

  articles.forEach((articleData: SKU) => {
    const stats = articleData.order_info?.[date] || {};
    const marketing = articleData?.marketing_cost || {};
    const marketingCost = NumberOrZero(marketing?.[date]?.cost)

    data.ordersSumTotal += (stats?.ordersSum || 0)
    data.ordersCountTotal += (stats.ordersCount || 0)
    data.buysSumTotal += NumberOrZero(articleData.sales?.[date]?.infoBuysSum)
    data.buysCountTotal += NumberOrZero(articleData.sales?.[date]?.infoBuysCount)
    data.marketingCostTotal += marketingCost
    
    data.revTotal += NumberOrZero(articleData.other_metricks?.[date]?.revWithDrr);
    data.krrrTotalArray.push(articleData?.other_metricks?.[date]?.krrr ?? 0)
    data.margins.push(articleData?.other_metricks?.[date]?.margin ?? 0)
    data.marginsWithDrr.push(articleData?.other_metricks?.[date]?.marginWithDrr ?? 0)
    data.drr.push(articleData?.other_metricks?.[date]?.drr ?? 0)
  })

  const krrrTotal = (data.krrrTotalArray.reduce((sum, num) => sum + num, 0) / (data.krrrTotalArray.length || 1));
  const marginTotal = (data.margins.reduce((sum, num) => sum + num, 0) / (data.margins.length || 1));
  const marginWithDrrTotal = (data.marginsWithDrr.reduce((sum, num) => sum + num, 0) / (data.marginsWithDrr.length || 1));
  const drrTotal = (data.drr.reduce((sum, num) => sum + num, 0) / (data.drr.length || 1));

  message = `
Заказы: ${formatNumber(data.ordersSumTotal)}₽, ${data.ordersCountTotal}шт
Выкупы: ${formatNumber(data.buysSumTotal)}₽, ${formatNumber(data.buysCountTotal)}шт
Реклама: ${formatNumber(data.marketingCostTotal)}₽
ДРР: ${formatNumber(drrTotal, 2)}%
Маржа до ДРР: ${formatNumber(marginTotal, 2)}%
Маржа с ДРР: ${formatNumber(marginWithDrrTotal, 2)}%
КРРР: ${formatNumber(krrrTotal, 2)}%
<b>Прибыль с ДРР: ${formatNumber(data.revTotal)}₽</b>
  `
  return `<b>10X Отчет ${formatReportDate}</b>\n${message}`;
}

function initReportData(): TextReportData {
  return {
    ordersSumTotal: 0,
    ordersCountTotal: 0,
    buysSumTotal: 0,
    buysCountTotal: 0,
    marketingCostTotal: 0,
    revTotal: 0,
    drr: [],
    margins: [],
    marginsWithDrr: [],
    krrrTotalArray: [],
  }
}

export function createStockReportText(data: SKU[]) {
  const total = initTotalStockReportData();

  let message = '<b>Итого:</b>\n';
  let articlesTexts = '';

  const articles = data.map(sku => {
    const stockCount = sku.order_info?.stock || 0;
    const stockSum = stockCount * sku.self_cost;
    const rev = calculateRevByOne(sku) * stockCount;

    total.stockSum += stockSum;
    total.stockCount += stockCount;
    total.rev += rev;

    return {
      article: sku.article,
      vendor_code: sku.vendor_code,
      stockCount,
      stockSum,
      rev
    };
  });

  articles.sort((a, b) => b.rev - a.rev);

  articles.forEach(article => {
    articlesTexts += `\n\n<b>${article.article}\n${article.vendor_code}</b>\nОстатки: ${article.stockCount} шт, ${formatNumber(article.stockSum)}₽\nПотенц. Прибыль: ${formatNumber(article.rev)}₽`;
  });

  return message + `Остатки: ${total.stockCount} шт, ${formatNumber(total.stockSum)}₽\nПотенц. Прибыль: ${formatNumber(total.rev)}₽` + articlesTexts;
}

function initTotalStockReportData() {
  return {
    stockCount: 0,
    stockSum: 0,
    rev: 0,
  }
}

export function createOrdersReportText(data: OrdersObject) {
  let total = 0

  let articlesTexts = '';

  const nms = Object.keys(data)

  const articles = nms.map(sku => {
    total += data[sku]?.orders;
    const ordersCount = data[sku]?.orders;
    const vendor_code = data[sku]?.vendor_code;
    const subject = data[sku]?.subject;

    return {
      article: sku,
      vendor_code: vendor_code,
      ordersCount: ordersCount,
      subject: subject
    }
  })

  articles.sort((a, b) => b.ordersCount - a.ordersCount);

  articles.forEach(article => {
    articlesTexts += `\n\n<b>- ${article.subject}</b> ${article.vendor_code}: ${article.ordersCount}`;
  });

  let message = `<b>Заказы с ${getTodayDate()}</b>\nИтого: ${total} ${getCorrectWordEnd(total)}`;
  return message + articlesTexts;
}
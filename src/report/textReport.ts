import { DateKey, OrdersOrSalesObject, OrdersSalesReportType, SKU, TextReportData } from "../dto/sku&report";
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

// 
export function createStockReportText(data: SKU[], chat_id: number) {
  const total = initTotalStockReportData();
  let message = '<b>Итого:</b>\n';
  let articlesTexts = '';

  let articleCounter = 1;

  const articles = data.map(sku => {
    const stockCount = sku.order_info?.stock || 0;
    const stockSum = stockCount * sku.self_cost;
    const rev = calculateRevByOne(sku) * stockCount;

    total.stockSum += stockSum;
    total.stockCount += stockCount;
    total.rev += rev;

    let article = sku.article;
    let vendor_code = sku.vendor_code;

    if (chat_id === 150462912 || chat_id === 6043879539) {
      article = String(articleCounter).padStart(6, '0'); // 000001, 000002 и тд
      vendor_code = `Артикул_${articleCounter}`;
      articleCounter++;
    }

    return {
      article,
      vendor_code,
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

// export function createOrdersOrSa
export function createOrdersOrSalesReportText(data: OrdersOrSalesObject, date: DateKey, reportType: OrdersSalesReportType, chat_id: number) {
  let total = 0;
  const messages = []; 

  let articleCounter = 1;

  const groupedArticles: { [subject: string]: Array<{ vendor_code: string, ordersCount: number }> } = {};

  Object.keys(data).forEach(sku => {
    total += data[sku]?.orders;
    let vendor_code = data[sku]?.vendor_code;
    const subject = data[sku]?.subject;

    // Подменяем vendor_code и article, если chat_id совпадает
    if (chat_id === 150462912 || chat_id === 6043879539) {
      vendor_code = `Артикул_${articleCounter}`;
      sku = String(articleCounter).padStart(6, '0'); // 000001, 000002 и т.д.
      articleCounter++;
    }

    const ordersCount = data[sku]?.orders;

    if (!groupedArticles[subject]) {
      groupedArticles[subject] = [];
    }

    groupedArticles[subject].push({ vendor_code, ordersCount });
  });

  const sortedSubjects = Object.keys(groupedArticles).sort((a, b) => 
    a.localeCompare(b, ['ru', 'en'], { sensitivity: 'base' })
  );

  const rootWord = reportType === 'orders' ? 'заказ' : reportType === 'sales' ? 'выкуп' : 'возврат';
  const correctWord = getCorrectWordEnd(total, rootWord);

  let currentMessage = `<b>${reportType === 'orders' ? 'Заказы' : reportType === 'sales' ? 'Выкупы' : 'Возвраты'} за ${date}</b>\nИтого: ${total} ${correctWord}\n`;

  sortedSubjects.forEach(subject => {
    const subjectHeader = `\n<b>- ${subject}</b>\n`; 
    let subjectText = '';

    groupedArticles[subject].forEach(article => {
      subjectText += `   ${article.vendor_code}: ${article.ordersCount}\n`;
    });

    if ((currentMessage.length + subjectHeader.length + subjectText.length) > 4000) {
      messages.push(currentMessage.trim());
      currentMessage = '';
    }

    currentMessage += subjectHeader + subjectText;
  });

  if (currentMessage.trim().length > 0) {
    messages.push(currentMessage.trim());
  }

  return messages;
}

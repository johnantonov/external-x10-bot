
import { Article } from "../dto/articles";

export function formatReportArticleMessage(articleData: Article, date: string) {
  console.log(JSON.stringify(articleData))
  console.log(date)

  const name = articleData?.title || articleData?.article || 'Неизвестный товар';
  const stats = articleData.order_info || {};
  const marketing = articleData?.marketing_cost || {};
  const marketingCost = parseFloat(marketing?.[date]) || 0; 
  const prk = marketing.prk || { clicks: 0, views: 0 };
  const ark = marketing.ark || { clicks: 0, views: 0 };
  const tax = parsePercent(articleData.tax)
  const acquiring = parsePercent(articleData.acquiring)
  const commission = parsePercent(stats.commission)

  // WIP -------
  stats.buysCount = (stats.ordersCount || 0) * ((articleData.percent_buys || 0) / 100)
  stats.buysSum = (stats.ordersSum || 0) * ((articleData.percent_buys || 0) / 100)
  // -----------

  let selfCost = (stats?.buysCount ?? 0) * (articleData?.self_cost ?? 0);
  let markCost = (stats?.buysCount ?? 0) * (articleData?.mark ?? 0);
  let taxCost = (stats?.buysSum ?? 0) * tax;
  let acquiringCost = (stats?.buysSum ?? 0) * acquiring;
  let commissionCost = (stats?.buysSum ?? 0) * commission;

  console.log('taxCost: ', taxCost, ' tax: ', tax)
  console.log('acquiringCost: ', acquiringCost, ' acquiring: ', acquiring)
  console.log('commissionCost: ', commissionCost, ' commission: ', commission)

  const ctr = (ark.clicks + prk.clicks) / ((ark.views + prk.views) || 1); 
  const drr = (marketingCost / (stats.ordersSum || 1)) * 100; 
  // console.log(stats.buysSum)
  const krrr = 
  ((stats.buysSum - selfCost - markCost - taxCost - marketingCost) / ((stats.buysSum - selfCost - markCost - taxCost) || 1)) * 100; 
  
  const stocksMp = stats.stocksMp || 0;
  const stocksWb = stats.stocksWb || 0;

  const rev = (stats.buysSum ?? 0) 
  - selfCost
  - markCost
  - taxCost
  - acquiringCost 
  - commissionCost
  - marketingCost;



  let message = `
\nЗаказы: ${formatNumber(stats.ordersCount || 0)}
Корзины: ${formatNumber(stats.addToCartCount || 0)}
% корз/рын: ${formatNumber(stats.addToCartPercent || 0)}% / ${stats.click_to_cart ?? 0}%
% зак/рын: ${formatNumber(stats.cartToOrderPercent || 0)}% / ${stats.cart_to_order ?? 0}%
% карт./рын: ${formatNumber((stats.addToCartPercent || 0) * (stats.cartToOrderPercent || 0) / 100)}% / ${stats.fullConversion ?? 0}
Выкупы: ${formatNumber(stats.buysCount || 0)}
% вык 30Д: ${formatNumber(stats.buyoutsPercent || 0)}%
Клики АРК: ${formatNumber(ark.clicks || 0)}
Клики ПРК: ${formatNumber(prk.clicks || 0)}
CTR: ${formatNumber(ctr)}
Расход РК: ${formatNumber(marketingCost)}
ДРР: ${formatNumber(drr)}%
КРРР: ${isNaN(Number(krrr)) ? 0 : formatNumber(Number(krrr))}%
Остатки: ${formatNumber(stocksMp + stocksWb)}
Хватит на: ${formatNumber((stocksMp + stocksWb) / ((stats.ordersCount30 || 1) / 30))}
Маржа: ${formatNumber((rev / (stats.buysSum || 1)) * 100)}%
Прибыль: ${formatNumber(rev)}`;

  return `📃Отчет за ${date}\n\n#${name}${message}`;
}

export const formatNumber = (num: number): string => {
  return num % 1 === 0 ? num.toString() : num.toFixed(2);
};

export function formatError(error: any, contextMessage: string) {
  const errorMessage = error?.response?.body?.description || (error as Error).message || 'Unknown error';
  console.error(`Error: ${contextMessage} - ${errorMessage.substring(0, 200)}`);
}


export function parsePercent(input: string | number): number {
  if (!input) {
    return 0;
  }

  let str = input.toString().replace(',', '.');
  let num = Number(str);

  if (isNaN(num)) {
    return 0;
  }

  if (num > 1) {
    return num / 100;
  }

  return num;
}

import { Article } from "../dto/articles";

export function formatReportArticleMessage(articleData: Article, date: string) {
  const name = articleData?.title || articleData?.article || 'Неизвестный товар';
  const stats = articleData.order_info || {};
  const marketing = articleData?.marketing_cost || {};
  const marketingCost = parseFloat(marketing?.cost?.[date]) || 0; 
  const prk = marketing.prk || { clicks: 0, views: 0 };
  const ark = marketing.ark || { clicks: 0, views: 0 };

  let selfCost = (stats?.buysCount ?? 0) * (articleData?.self_cost ?? 0);
  const ctr = (ark.clicks + prk.clicks) / ((ark.views + prk.views) || 1); 
  const drr = (marketingCost / (stats.ordersSum || 1)) * 100; 
  const krrr = ((stats.buysSum - ((selfCost ?? 0) * stats.buysCount) - articleData.mark - articleData.tax - marketingCost) / ((stats.buysSum - selfCost - articleData.mark - articleData.tax) || 1)) * 100; 
  const stocksMp = stats.stocksMp || 0;
  const stocksWb = stats.stocksWb || 0;
  const rev = (stats.buysSum ?? 0) 
  - selfCost
  - ((articleData.mark ?? 0) * (stats.buysCount ?? 0)) 
  - ((articleData.tax ?? 0) * (stats.buysSum ?? 0)) 
  - ((articleData.acquiring ?? 0) * (stats.buysCount ?? 0)) 
  - ((stats.commission ?? 0) * (stats.buysCount ?? 0))
  - marketingCost;

  let message = `\n\nКорзины ${formatNumber(stats.addToCartCount || 0)}
% корз/рын: ${formatNumber(stats.addToCartPercent || 0)}% / ${stats.click_to_cart}%
Заказы ${formatNumber(stats.statsCount || 0)}
% зак/рын: ${formatNumber(stats.cartToOrderPercent || 0)}% / ${stats.cart_to_order}%
% карт./рын: ${formatNumber((stats.addToCartPercent || 0) * (stats.cartToOrderPercent || 0))}% / ${stats.fullConversion}%
Выкупы ${formatNumber(stats.buysCount || 0)}
% вык 30Д ${formatNumber(stats.buyoutsPercent || 0)}%
Клики АРК ${formatNumber(ark.clicks || 0)}
Клики ПРК ${formatNumber(prk.clicks || 0)}
CTR ${formatNumber(ctr)}
Расход РК ${formatNumber(marketingCost)}
ДРР ${formatNumber(drr)}%
КРРР ${formatNumber(krrr)}%
Остатки ${formatNumber(stocksMp + stocksWb)}
Хватит на: ${formatNumber((stocksMp + stocksWb) / ((stats.ordersCount30 || 1) / 30))}
Маржа ${formatNumber((rev / (stats.buysSum || 1)) * 100)}%
Прибыль ${formatNumber(rev)}`;

  return `📃Отчет за ${date}\n\n#${name}${message}`;
}

export const formatNumber = (num: number): string => {
  return num % 1 === 0 ? num.toString() : num.toFixed(2);
};

export function formatError(error: any, contextMessage: string) {
  const errorMessage = error?.response?.body?.description || (error as Error).message || 'Unknown error';
  console.error(`Error: ${contextMessage} - ${errorMessage.substring(0, 200)}`);
}
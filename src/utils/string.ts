
import { Article } from "../dto/articles";
import { User } from "../dto/user";

export function formatReportMessage(data: string[]): string {
  let message = '';

  data.forEach((row, i) => {
    if (i === 0) {
      message += `<b>${row[0]}</b>\n`;
    } else if (row[0].startsWith('ТОП')) {
      message += `\n<b>${row[0]}</b>\n`;
    } else if (row[0].startsWith('Товар')) {
      message += `${row[0]} ${row[1]}\n`;
    } else {
      message += `<b>${row[0]}</b> ${row[1]}\n`;
    }
  });

  return message.trim();
}

export function formatReportArticleMessage(articleData: Article, date: string) {
  const name = articleData?.title ? articleData?.title : articleData?.article;
  const orders = articleData.order_info
  
  let selfCost = 0;
  if (articleData?.self_cost) {
    selfCost = orders.buyoutsCount * articleData.self_cost;
  };
  
  console.log(JSON.stringify(articleData))
  
  const rev = orders.buyoutsSumRub - selfCost - (articleData?.marketing_cost[date] ?? 0);

  let message = `
Заказы ${orders.ordersCount} шт на ${formatNumber(orders.ordersSumRub)} руб
Выкупы ${orders.buyoutsCount} шт на ${formatNumber(orders.buyoutsSumRub)} руб
Рекламный бюджет ${formatNumber(articleData?.marketing_cost[date] ?? 0)}
<b>Прибыль: ${formatNumber(rev)}</b>`;

  return `<b>Отчет за ${date}: ${name}</b>\n${message}`;
}

export const formatNumber = (num: number): string => {
  return num % 1 === 0 ? num.toString() : num.toFixed(2);
};

export function formatError(error: any, contextMessage: string) {
  const errorMessage = error?.response?.body?.description || (error as Error).message || 'Unknown error';
  console.error(`Error: ${contextMessage} - ${errorMessage.substring(0, 200)}`);
}
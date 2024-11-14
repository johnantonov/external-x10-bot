import { config } from "../config/configRecalc";
import { Article } from "../dto/articles";
import { getWbArticlePhoto, parsePercent } from "./parse";
import { formatNumber } from "./string";
import { create30DaysObject, getYesterdayDate } from "./time";
import axios from 'axios';
import sharp from 'sharp';

export async function getReportHtml(articleData: Article[]) {
  let tables = ``;
  articleData.unshift({} as Article);  // для создания таблицы итого

  for (const [i, data] of articleData.entries()) {
    let imgSrc: any;

    if (i > 0 && data.article) {
      try {
        const imgUrl = getWbArticlePhoto(+data.article);
        const response = await axios.get(imgUrl, { responseType: 'arraybuffer' });
        let imgBuffer = Buffer.from(response.data, 'binary');
        imgBuffer = await sharp(imgBuffer).resize({ width: 100, height: 140 }).toBuffer();
        const imgBase64 = imgBuffer.toString('base64');
        imgSrc = `data:image/jpeg;base64,${imgBase64}`;
      } catch (error) {
        console.error(`Error while generating table html: ${error}`);
      }
    }

    let dayRows = getDaysRows(config.tableDays, data, i, imgSrc, articleData)

    tables += `<table class="b">
      <thead class="br">
        <tr class="header br">
          <th rowspan="2" colspan="4" class="article_col">${data?.article || ''}<br>${data?.vendor_code  || ''}</th>
          <th rowspan="2" colspan="1" class="bl">Клики АРК</th>
          <th rowspan="2" colspan="1">CTR</th>
          <th rowspan="2" colspan="1" class="bl">Клики ПРК</th>
          <th rowspan="2" colspan="1">CTR</th>
          <th rowspan="2" colspan="1" class="bl">Расходы реклама</th>
          <th rowspan="2" colspan="1">ДРР</th>
          <th rowspan="2" colspan="1">Корзины</th>
          <th rowspan="2" colspan="1">Заказы</th>
          <th rowspan="2" colspan="1">Выкупы</th>
          <th rowspan="2" colspan="1">Маржа</th>
          <th class="br" rowspan="2" colspan="1">Прогноз прибыли до ДРР</th>
        </tr>
      </thead>
      <tbody  class="br">
        ${dayRows}
      </tbody> 
    </table>`
  }

  return `
  <!DOCTYPE html>
    <html lang="ru">
    <head>
      <meta charset="UTF-8">
      ${CSS}
    </head>
    <body>
      <h1></h1>
     ${tables}
    </body>
  </html>
    `
}

export function createReportMessage(articles: Article[], formatReportDate: string) {
  let message = ``;
  let ordersSumTotal = 0;
  let ordersCountTotal = 0;
  let buysSumTotal = 0;
  let buysCountTotal = 0;
  let marketingCostTotal = 0;
  let revTotal = 0;
  let krrrTotalArray: number[] = [];

  const date = getYesterdayDate();

  articles.forEach(articleData => {
    const stats = articleData.order_info?.[date] || {};
    const marketing = articleData?.marketing_cost || {};
    const marketingCost = parseFloat(marketing?.[date]?.cost) || 0;

    const otherCosts = getCosts(articleData, date)
    const [buysCount, buysSum] = getBuysData(articleData, date)
  
    const krrr = formatNumber(
    ((buysSum - otherCosts - marketingCost) / ((buysSum - otherCosts) || 1)) * 100);

    krrrTotalArray.push(krrr)

    ordersSumTotal += (stats.ordersSum || 0)
    ordersCountTotal += (stats.ordersCount || 0)
    buysSumTotal += (buysSum || 0)
    buysCountTotal += (buysCount || 0)
    marketingCostTotal += marketingCost
  
    revTotal += formatNumber((buysSum || 0) - otherCosts - marketingCost);
  })

  const krrrTotal = (krrrTotalArray.reduce((sum, num) => sum + num, 0) / (krrrTotalArray.length || 1)).toFixed(0);

  message = `
Заказы: ${ordersSumTotal}₽, ${ordersCountTotal}шт
Выкупы: ${buysSumTotal.toFixed(0)}₽, ${Math.round(buysCountTotal)}шт
Реклама: ${marketingCostTotal.toFixed(0)}₽
ДРР: ${formatNumber((marketingCostTotal / (ordersSumTotal || 1)) * 100)}%
Маржа до ДРР: ${formatNumber(((revTotal + marketingCostTotal) / (buysSumTotal || 1)) * 100).toFixed(0)}%
Маржа с ДРР: ${formatNumber((revTotal / (buysSumTotal || 1)) * 100).toFixed(0)}%
КРРР: ${krrrTotal}%
Прибыль с ДРР: ${revTotal.toFixed(0)}₽
  `
  return `<b>10X Отчет ${formatReportDate}</b>\n${message}`;
}

function getDaysRows(daysCount: number, data: Article, index: number, imgBase64: any, allData: Article[]) {
  let days = Object.keys(create30DaysObject());
  let dayRows = ``;

  const total: Record<string, any> = {
    ark: { clicks: 0, ctr: 0 },
    prk: { clicks: 0, ctr: 0 },
    marketingCost: 0,
    drr: [],
    carts: 0,
    orders: 0,
    buys: 0,
    margin: 0,
    rev: 0
  };

  for (let i = daysCount; i > 0; i--) {
    const day = days[i];

    const dayParts = day.slice(5).split('-')
    const formatDay = `${dayParts[1]}.${dayParts[0]}` 

    let prk = { clicks: 0, views: 0 };
    let ark = { clicks: 0, views: 0 };
    let marketingCost = 0;
    let stats: any;
    let otherCosts = 0;
    let addToCartCount = 0;
    let ordersCount = 0;
    let buysCount = 0;
    let ordersSum = 0;
    let buysSum = 0;
  
    let ctrArk;
    let ctrPrk;
    let drr = 0;
    let rev = 0;
    let margin = 0;

    dayRows += `<tr class="row">`

    if (i === daysCount) {
      const value = (index === 0 && allData.length > 1) ? "ИТОГО" : `<img src="${imgBase64}" alt="${data.vendor_code}" >`
      dayRows += `<td rowspan="${config.tableDays+1}" colspan="2" class="photo_cell">${value}</td>`
    }

    if (index === 0 && allData.length > 1) {
      allData.forEach((article: Article, indexArticle: number) => {
        if (indexArticle > 0) {
          stats = article.order_info?.[day] || {};
          const marketing = article?.marketing_cost || {};
          prk.clicks += marketing?.[day]?.prk?.clicks || 0
          prk.views += marketing?.[day]?.prk?.views || 0 
          ark.clicks += marketing?.[day]?.ark?.clicks || 0
          ark.views += marketing?.[day]?.ark?.views || 0 
          marketingCost += parseFloat(marketing?.[day]?.cost) || 0;
          addToCartCount += stats.addToCartCount || 0;
          ordersCount += stats.ordersCount || 0;
          ordersSum += stats.ordersSum || 0;

          buysCount = Math.round(ordersCount * ((article.percent_buys || 0) / 100))
          buysSum = Math.round(ordersSum * ((article.percent_buys || 0) / 100))
          otherCosts += getCosts(article, day)
        }
      })
      
      rev += (buysSum ?? 0) - otherCosts
      margin += formatNumber(rev / (buysSum || 1) * 100) 
      drr += (marketingCost / (ordersSum || 1)) * 100;
      ctrArk = (ark.clicks / ark.views) || 0;
      ctrPrk = (prk.clicks / prk.views) || 0;
    } else {
      
      const marketing = data?.marketing_cost || {};
      prk = marketing?.[day].prk || { clicks: 0, views: 0 };
      ark = marketing?.[day].ark || { clicks: 0, views: 0 };
      marketingCost = parseFloat(marketing?.[day].cost) || 0;
      stats = data.order_info?.[day] || {};
      
      const buysData = getBuysData(data, day)
      otherCosts = getCosts(data, day)

      ctrArk = (ark.clicks / ark.views) || 0;
      ctrPrk = (prk.clicks / prk.views) || 0;
      drr = (marketingCost / (stats.ordersSum || 1)) * 100;
      rev = (buysData[1] ?? 0) - otherCosts
      margin = formatNumber(rev / (buysData[1] || 1) * 100)

      addToCartCount = stats?.addToCartCount;
      ordersCount = stats?.ordersCount;
      buysCount = buysData[0];
    }

    dayRows += `
      <td rowspan="1" colspan="2" class="day_cell">${formatDay}</td>
      <td class="bl">${ark.clicks.toFixed(0)}</td>
      <td>${(ctrArk * 100).toFixed(2)}%</td>
      <td class="bl">${prk.clicks.toFixed(0)}</td>
      <td>${(ctrPrk * 100).toFixed(2)}%</td>
      <td class="bl">${marketingCost.toFixed(0)}₽</td>
      <td>${drr.toFixed(2)}%</td>
      <td>${addToCartCount}</td>
      <td>${ordersCount}</td>
      <td>${Math.round(buysCount)}</td>
      <td>${margin.toFixed(2)}%</td>
      <td>${rev.toFixed(0)}₽</td>
    `
  }

  // total

  const totalDrr = (total.drr.reduce((sum: any, num: any) => sum + num, 0) / (total.drr.length || 1)).toFixed(0);

  dayRows += `
    <td rowspan="1" colspan="2" class="day_cell">Итог</td>
    <td class="bl">${total.ark.clicks.toFixed(0)}</td>
    <td>${(total.ark.ctr * 100).toFixed(2)}%</td>
    <td class="bl">${total.prk.clicks.toFixed(0)}</td>
    <td>${(total.prk.ctr * 100).toFixed(2)}%</td>
    <td class="bl">${total.marketingCost.toFixed(0)}₽</td>
    <td>${totalDrr}%</td>
    <td>${total.carts}</td>
    <td>${total.orders}</td>
    <td>${Math.round(total.buys)}</td>
    <td>${total.margin.toFixed(2)}%</td>
    <td>${total.rev.toFixed(0)}₽</td>
  `

  return dayRows
}

function getCosts(data: Article, date: string) {
  const stats = data.order_info?.[date];

  const tax = parsePercent(data?.tax)
  const acquiring = config?.acquiring
  const commission = parsePercent(stats?.commission) || 0

  // WIP -------
  stats.buysCount = Math.round((stats?.ordersCount || 0) * ((data.percent_buys || 0) / 100))
  stats.buysSum = Math.round((stats?.ordersSum || 0) * ((data.percent_buys || 0) / 100))
  // -----------

  let selfCost = (stats?.buysCount ?? 0) * (data?.self_cost ?? 0);
  let markCost = (stats?.buysCount ?? 0) * (data?.mark ?? 0);
  let taxCost = (stats?.buysSum ?? 0) * tax;
  let acquiringCost = (stats?.buysSum ?? 0) * acquiring;
  let commissionCost = (stats?.buysSum ?? 0) * commission;
  let storageCost = (stats?.buysCount ?? 0) * data.storage;
  let logisticsCost = (stats?.buysCount ?? 0) * data.logistics;

  return selfCost + markCost + taxCost + acquiringCost + commissionCost + storageCost + logisticsCost
}

function getBuysData(article: Article, date: string): [number, number] {
  const stats = article.order_info?.[date] || {};

  const buysCount = Math.round(stats?.ordersCount * ((article.percent_buys || 0) / 100))
  const buysSum = Math.round(stats?.ordersSum * ((article.percent_buys || 0) / 100))

  return [buysCount, buysSum]
}

const CSS = `
  <style>
    body {
      font-family: Arial, sans-serif;
      font-size: 12px;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      // margin-bottom: 0px;
    }
    table, th, td {
      border: 0.2px solid #AFEEEE;
    }
    th, td {
      padding: 8px;
      text-align: center;
      /* width: 10%; */
    }
    .article_col {
      // width: 30%; 
      width 400px !important
    }
    .photo_cell {
      width: 700px !important;
      height: 150px !important
    }
    .day_cell {
      width: 150px !important
    }
    .header {
      background-color: #f2f2f2;
      font-weight: bold;
    }
    .title-row {
      text-align: left;
      font-weight: bold;
    }
    .bl {
      border-left: 2px solid black;
    }
    .br {
      border-right: 2px solid black;
    }
    .b {
      border-top: 2px solid black;
      border-right: 2px solid black;
      border-left: 2px solid black;
      border-bottom: 2px solid black;
    }
  </style>
`


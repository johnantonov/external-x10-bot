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
          <th rowspan="2" colspan="1">КРРР</th>
          <th rowspan="2" colspan="1">Корзины</th>
          <th rowspan="2" colspan="1">Заказы</th>
          <th rowspan="2" colspan="1">Выкупы</th>
          <th rowspan="2" colspan="1">Маржа</th>
          <th class="br" rowspan="2" colspan="1">Прогноз прибыли до ДРР</th>
          <th class="br" rowspan="2" colspan="1">Прогноз прибыли с ДРР</th>
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

  const krrrTotal = +((krrrTotalArray.reduce((sum, num) => sum + num, 0) / (krrrTotalArray.length || 1)).toFixed(0));

  message = `
Заказы: ${ordersSumTotal}₽, ${ordersCountTotal}шт
Выкупы: ${buysSumTotal.toFixed(0)}₽, ${Math.round(buysCountTotal)}шт
Реклама: ${marketingCostTotal.toFixed(0)}₽
ДРР: ${formatNumber((marketingCostTotal / (ordersSumTotal || 1)) * 100)}%
Маржа до ДРР: ${formatNumber(((revTotal + marketingCostTotal) / (buysSumTotal || 1)) * 100).toFixed(0)}%
Маржа с ДРР: ${formatNumber((revTotal / (buysSumTotal || 1)) * 100).toFixed(0)}%
КРРР: ${isNaN(krrrTotal) ? 0 : krrrTotal}%
Прибыль с ДРР: ${revTotal.toFixed(0)}₽
  `
  return `<b>10X Отчет ${formatReportDate}</b>\n${message}`;
}

function getDaysRows(daysCount: number, data: Article, index: number, imgBase64: any, allData: Article[]) {
  let days = Object.keys(create30DaysObject());
  let dayRows = ``;

  const total: Record<string, any> = {
    ark: { clicks: 0, ctr: [] },
    prk: { clicks: 0, ctr: [] },
    marketingCost: 0,
    drr: [],
    krrr: [],
    carts: 0,
    orders: 0,
    buys: 0,
    margin: [],
    rev: 0,
    revDrr: 0,
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
    let krrr = 0;
    let rev = 0;
    let revDrr = 0;
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
      revDrr += rev - marketingCost
      margin += formatNumber(rev / (buysSum || 1) * 100) 
      drr += (marketingCost / (ordersSum || 1)) * 100;
      krrr += formatNumber(((buysSum - otherCosts - marketingCost) / ((buysSum - otherCosts) || 1)) * 100);
      ctrArk = (ark.clicks / ark.views) || 0;
      ctrPrk = (prk.clicks / prk.views) || 0;
    } else {
      const marketing = data?.marketing_cost || {};
      prk = marketing?.[day]?.prk || { clicks: 0, views: 0 };
      ark = marketing?.[day]?.ark || { clicks: 0, views: 0 };
      marketingCost = parseFloat(marketing?.[day]?.cost) || 0;
      stats = data.order_info?.[day] || {};
      
      const buysData = getBuysData(data, day)
      otherCosts = getCosts(data, day)

      ctrArk = (ark.clicks / ark.views) || 0;
      ctrPrk = (prk.clicks / prk.views) || 0;
      drr = (marketingCost / (stats.ordersSum || 1)) * 100;
      krrr = ((buysSum - otherCosts - marketingCost) / ((buysSum - otherCosts) || 1)) * 100;
      rev = (buysData[1] ?? 0) - otherCosts
      revDrr += rev - marketingCost
      margin = formatNumber(rev / (buysData[1] || 1) * 100)

      addToCartCount = stats?.addToCartCount;
      ordersCount = stats?.ordersCount;
      buysCount = buysData[0];
    }

    total.ark.clicks += ark.clicks;
    total.ark.ctr.push(ctrArk);
    total.prk.clicks += prk.clicks;
    total.prk.ctr.push(ctrPrk);
    total.buys += buysCount;
    total.carts += addToCartCount;
    total.drr.push(drr);
    total.krrr.push(krrr);
    total.margin.push(margin);
    total.marketingCost += marketingCost;
    total.orders += ordersCount;
    total.rev += rev;
    total.revDrr += total.rev - total.marketingCost;

    dayRows += `
      <td rowspan="1" colspan="2" class="day_cell">${formatDay}</td>
      <td class="bl">${ark.clicks.toFixed(0) || 0}</td>
      <td>${(ctrArk * 100).toFixed(2) || 0}%</td>
      <td class="bl">${prk.clicks.toFixed(0) || 0}</td>
      <td>${(ctrPrk * 100).toFixed(2) || 0}%</td>
      <td class="bl">${marketingCost.toFixed(0) || 0}₽</td>
      <td>${drr.toFixed(2) || 0}%</td>
      <td>${krrr.toFixed(2) || 0}%</td>
      <td>${addToCartCount || 0}</td>
      <td>${ordersCount || 0}</td>
      <td>${Math.round(buysCount) || 0}</td>
      <td>${isNaN(+margin.toFixed(2)) ? 0 : margin.toFixed(2)}%</td>
      <td>${isNaN(+rev.toFixed(0)) ? 0 : rev.toFixed(0)}₽</td>
      <td class="bl">${isNaN(+revDrr.toFixed(0)) ? 0 : revDrr.toFixed(0)}₽</td>
    `
  }

  // total
  const totalDrr = (total.drr.reduce((sum: any, num: any) => sum + num, 0) / (total.drr.length || 1)).toFixed(2);
  const totalKrrr = (total.krrr.reduce((sum: any, num: any) => sum + num, 0) / (total.krrr.length || 1)).toFixed(2);
  const totalArkCtr = ((total.ark.ctr.reduce((sum: any, num: any) => sum + num, 0) / (total.ark.ctr.length || 1)) * 100).toFixed(2);
  const totalPrkCtr = ((total.prk.ctr.reduce((sum: any, num: any) => sum + num, 0) / (total.prk.ctr.length || 1)) * 100).toFixed(2);
  const totalMargin = (total.margin.reduce((sum: any, num: any) => sum + num, 0) / (total.margin.length || 1)).toFixed(2);

  dayRows += `
  <tr class="row">
    <td rowspan="1" colspan="2" class="day_cell">Итог</td>
    <td class="bl">${total.ark.clicks.toFixed(0) || 0}</td>
    <td>${totalArkCtr || 0}%</td>
    <td class="bl">${total.prk.clicks.toFixed(0 || 0)}</td>
    <td>${totalPrkCtr || 0}%</td>
    <td class="bl">${total.marketingCost.toFixed(0) || 0}₽</td>
    <td>${totalDrr || 0}%</td>
    <td>${totalKrrr || 0}%</td>
    <td>${total.carts || 0}</td>
    <td>${total.orders || 0}</td>
    <td>${Math.round(total.buys) || 0}</td>
    <td>${totalMargin}%</td>
    <td>${isNaN(total.rev.toFixed(0)) ? 0 : total.rev.toFixed(0)}₽</td>
    <td class="bl">${isNaN(total.revDrr.toFixed(0)) ? 0 : total.revDrr.toFixed(0)}₽</td>
  </tr>
  `

  return dayRows
}

function getCosts(data: Article, date: string) {
  const stats = data.order_info?.[date] || { buysCount: 0, buysSum: 0 };

  const tax = parsePercent(data?.tax);
  const acquiring = config?.acquiring;
  const commission = parsePercent(stats?.commission) || 0;

  if (stats) {
    stats.buysCount = Math.round((stats?.ordersCount || 0) * ((data?.percent_buys || 0) / 100));
    stats.buysSum = Math.round((stats?.ordersSum || 0) * ((data?.percent_buys || 0) / 100));
  }

  const selfCost = (stats?.buysCount ?? 0) * (data?.self_cost ?? 0);
  const markCost = (stats?.buysCount ?? 0) * (data?.mark ?? 0);
  const taxCost = (stats?.buysSum ?? 0) * tax;
  const acquiringCost = (stats?.buysSum ?? 0) * acquiring;
  const commissionCost = (stats?.buysSum ?? 0) * commission;
  const storageCost = (stats?.buysCount ?? 0) * data.storage;
  const logisticsCost = (stats?.buysCount ?? 0) * data.logistics;

  return selfCost + markCost + taxCost + acquiringCost + commissionCost + storageCost + logisticsCost;
}

function getBuysData(article: Article, date: string): [number, number] {
  const stats = article.order_info?.[date] || {};

  const buysCount = Math.round(stats?.ordersCount * ((article?.percent_buys || 0) / 100))
  const buysSum = Math.round(stats?.ordersSum * ((article?.percent_buys || 0) / 100))

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


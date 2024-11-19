import { config } from "../config/config";
import { Article } from "../dto/articles";
import { getWbArticlePhoto, parsePercent } from "./parse";
import { formatNumber } from "./string";
import { create31DaysObject, getYesterdayDate } from "./time";
import axios from 'axios';
import sharp from 'sharp';

export async function getReportHtml(articleData: Article[]) {
  let tables = ``;
  if (articleData.length > 1) {
    articleData.unshift({} as Article);  // для создания таблицы итого
  }

  for (const [i, data] of articleData.entries()) {
    let imgSrc: any = null;

    if (data.article) {
      try {
        const imgUrl = getWbArticlePhoto(+data.article);
        const response = await axios.get(imgUrl, { responseType: 'arraybuffer' });
        let imgBuffer = Buffer.from(response.data, 'binary');
        imgBuffer = await sharp(imgBuffer).resize({ width: 100, height: 120 }).toBuffer();
        const imgBase64 = imgBuffer.toString('base64');
        imgSrc = `data:image/jpeg;base64,${imgBase64}`;
      } catch (error) {
        console.error(`Error while generating table html: ${error}`);
        imgSrc = null
      }
    }

    let dayRows = getDaysRows(config.tableDays, data, i, imgSrc, articleData)

    tables += `<table class="b">
      <thead class="br">
        <tr class="header br">
          <th rowspan="2" colspan="5" class="article_col">${data?.article || ''}<br>${data?.vendor_code  || ''}</th>
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
          <th rowspan="2" colspan="1">Прогноз прибыли до ДРР</th>
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

function getDaysRows(daysCount: number, data: Article, index: number, imgBase64: any, allData: Article[]) {
  let days = Object.keys(create31DaysObject());
  let dayRows = ``;
  const total = totalDataInit() 

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
    let infoBuysCount = 0;
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
      let value;
      if (index === 0 && allData.length > 1) {
        value = "ИТОГО"
      } else if (imgBase64) {
        value = `<img src="${imgBase64}" alt="${data.vendor_code}" >`
      } else {
        value = 'Ошибка данных'
      }

      dayRows += `<td rowspan="${config.tableDays+1}" colspan="3" class="photo_cell">${value}</td>`
    }

    if (index === 0 && allData.length > 2) {
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
          ordersSum += stats?.ordersSum || 0;
          infoBuysCount += article.sales?.[day] || 0;
          buysCount += stats.buysCount
          buysSum += stats.buysSum
          otherCosts += getCosts(article, day)
        }
      })
      
      rev += (buysSum ?? 0) - otherCosts;
      revDrr += rev - marketingCost;
      margin += formatNumber(rev / (buysSum || 1) * 100);

      drr += (marketingCost / (ordersSum || 1)) * 100;
      krrr += formatNumber((revDrr / (rev || 1)) * 100);

      ctrArk = (ark.clicks / ark.views) || 0;
      ctrPrk = (prk.clicks / prk.views) || 0;

    } else {
      const marketing = data?.marketing_cost || {};
      prk = marketing?.[day]?.prk || { clicks: 0, views: 0 };
      ark = marketing?.[day]?.ark || { clicks: 0, views: 0 };
      ctrArk = (ark.clicks / ark.views) || 0;
      ctrPrk = (prk.clicks / prk.views) || 0;
      
      
      marketingCost = parseFloat(marketing?.[day]?.cost) || 0;
      stats = data.order_info?.[day] || {};
      otherCosts = getCosts(data, day)
      
      drr = (marketingCost / (stats?.ordersSum || 1)) * 100;
      infoBuysCount = data.sales?.[day] || 0;
      
      rev = (stats.buysSum ?? 0) - otherCosts
      revDrr = rev - marketingCost

      margin = calcMargin(revDrr, stats.buysSum)
      krrr = calcKrrr(revDrr, rev);
      
      addToCartCount = stats?.addToCartCount;
      ordersCount = stats?.ordersCount;
      buysCount = stats.buysCount;
    }

    dayRows += `
      <td rowspan="1" colspan="2" class="day_cell">${formatDay}</td>
      <td class="bl">${ark.clicks.toFixed(0) || 0}</td>
      <td>${(ctrArk * 100).toFixed(2) || 0}%</td>
      <td class="bl">${prk.clicks.toFixed(0) || 0}</td>
      <td>${(ctrPrk * 100).toFixed(2) || 0}%</td>
      <td class="bl">${marketingCost.toFixed(0) || 0}₽</td>
      <td>${drr.toFixed(2) || 0}%</td>
      <td>${krrr.toFixed(2)}%</td>
      <td>${addToCartCount || 0}</td>
      <td>${ordersCount || 0}</td>
      <td>${infoBuysCount || 0}</td>
      <td>${margin.toFixed(2)}%</td>
      <td>${isNaN(rev) ? 0 : rev.toFixed(0)}₽</td>
      <td>${isNaN(revDrr) ? 0 : revDrr.toFixed(0)}₽</td>
    `

    total.ark.clicks += ark.clicks;
    total.ark.ctr.push(ctrArk);
    total.prk.clicks += prk.clicks;
    total.prk.ctr.push(ctrPrk);
    total.buys += buysCount;
    total.infoBuys += infoBuysCount;
    total.carts += addToCartCount;
    total.drr.push(drr);
    total.krrr.push(krrr);
    total.margin.push(margin);
    total.marketingCost += marketingCost;
    total.orders += ordersCount;
    total.rev += rev;
    total.revDrr += rev - marketingCost;
  }

  // total row
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
    <td>${total.infoBuys || 0}</td>
    <td>${totalMargin}%</td>
    <td>${isNaN(total.rev.toFixed(0)) ? 0 : total.rev.toFixed(0)}₽</td>
    <td>${isNaN(total.revDrr.toFixed(0)) ? 0 : total.revDrr.toFixed(0)}₽</td>
  </tr>
  `

  return dayRows
}

export function createReportMessage(articles: Article[], formatReportDate: string) {
  let message = ``;
  let ordersSumTotal = 0;
  let ordersCountTotal = 0;
  let buysSumTotal = 0;
  let buysCountTotal = 0;
  let marketingCostTotal = 0;
  let rev = 0;
  let revTotal = 0;
  let krrrTotalArray: number[] = [];

  const date = getYesterdayDate();

  articles.forEach(articleData => {
    const stats = articleData.order_info?.[date] || {};
    const marketing = articleData?.marketing_cost || {};
    const marketingCost = parseFloat(marketing?.[date]?.cost) || 0;

    const otherCosts = getCosts(articleData, date)

    ordersSumTotal += (stats?.ordersSum || 0)
    ordersCountTotal += (stats.ordersCount || 0)
    buysSumTotal += (stats.buysSum || 0)
    buysCountTotal += (stats.buysCount || 0)
    marketingCostTotal += marketingCost
    
    rev += (stats.buysSum || 0) - otherCosts;
    revTotal += formatNumber(rev - marketingCost);

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
Прибыль с ДРР: ${revTotal.toFixed(0)}₽
  `
  return `<b>10X Отчет ${formatReportDate}</b>\n${message}`;
}

function getCosts(data: Article, date: string): number {
  try {
    const stats = data.order_info?.[date];
  
    const tax = parsePercent(data?.tax);
    const acquiring = config?.acquiring;
    const commission = parsePercent(data.order_info?.commission) || 0;
  
    const selfCost = (stats?.buysCount ?? 0) * (data?.self_cost ?? 0);
    const markCost = (stats?.buysCount ?? 0) * (data?.mark ?? 0);
    const taxCost = (stats?.buysSum ?? 0) * tax;
    const acquiringCost = (stats?.buysSum ?? 0) * acquiring;
    const commissionCost = (stats?.buysSum ?? 0) * commission;
    const storageCost = (stats?.buysCount ?? 0) * data.storage * config.turnover;

    const logisticsBase = (config.returnLogistics / (data.percent_buys / 100) - config.returnLogistics) + (data.logistics / (data.percent_buys / 100))
    const logisticsCost = (stats?.buysCount ?? 0) * logisticsBase

    // console.log('___________________________________')
    // console.log(data.article)
    // console.log(date)
    // console.log(JSON.stringify(data))
    // console.log('selfCost: ',selfCost, 'markCost:', markCost, 'taxCost:', taxCost, 'acquiringCost:', acquiringCost, 'commissionCost:', commissionCost, 'storageCost:', storageCost, 'logisticsCost: ', logisticsCost)
  
    return selfCost + markCost + taxCost + acquiringCost + commissionCost + storageCost + logisticsCost;
  } catch (e) {
    console.error('error getting other costs: ', data.article, " ", e)
    return 0
  }
}


function calcKrrr(revWithDrr: any, rev: any): number {
  return formatNumber(((revWithDrr || 0) / (rev || 1)) * 100);
}

function calcMargin(rev: any, buysSum: any): number {
  return formatNumber((rev || 0) / (buysSum || 1) * 100);
}

function totalDataInit(): Record<string, any> {  
  return { 
    ark: { clicks: 0, ctr: [] }, prk: { clicks: 0, ctr: [] }, 
    marketingCost: 0, drr: [], krrr: [], carts: 0, orders: 0, 
    buys: 0, margin: [], rev: 0, revDrr: 0, infoBuys: 0,
  };
}

const CSS = `
  <style>
    body {
      font-family: Arial, sans-serif;
      font-size: 12px;
    }
    table {
      width: 1400px !important;
      border-collapse: collapse;
    }
    table, th, td {
      border: 0.2px solid #AFEEEE;
    }
    td {
      width: 78px
    }
    th, td {
      padding: 8px;
      text-align: center;
    }
    .article_col {
      width 350px !important
    }
    .photo_cell {
      width: 240px !important;
      height: 140px !important
    }
    .day_cell {
      width: 110px !important
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


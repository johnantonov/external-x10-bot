import { Article } from "../dto/articles";
import { getWbArticlePhoto } from "./parse";
import { formatNumber, parsePercent } from "./string";
import { create30DaysObject, getYesterdayDate } from "./time";
import axios from 'axios';
import sharp from 'sharp';


const config = {
  days: 5
}

export async function getReportHtml(articleData: Article[]) {
  let tables = ``;


  for (const [i, data] of articleData.entries()) {
    let imgSrc: any;

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

    let dayRows = getDaysRows(config.days, data, i, imgSrc)

    tables += `<table class="b">
      <thead class="br">
        <tr class="header br">
          <th rowspan="2" colspan="5" class="article_col">${data?.article}<br>${data?.vendor_code}</th>
          <th rowspan="2" colspan="1" class="bl">Клики АРК</th>
          <th rowspan="2" colspan="1">CTR</th>
          <th rowspan="2" colspan="1" class="bl">Клики ПРК</th>
          <th rowspan="2" colspan="1">CTR</th>
          <th rowspan="2" colspan="1" class="bl">Реклама</th>
          <th rowspan="2" colspan="1">ДРР</th>
          <th rowspan="2" colspan="1">Корзины</th>
          <th rowspan="2" colspan="1">Заказы</th>
          <th rowspan="2" colspan="1">Выкупы</th>
          <th rowspan="2" colspan="1">Маржа</th>
          <th class="br" rowspan="2" colspan="1">Прибыль</th>
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


function getDaysRows(daysCount: number, data: Record<string, any>, index: number, imgBase64: any) {
  const marketing = data?.marketing_cost || {};
  let days = Object.keys(create30DaysObject())
  let dayRows = ``

  for (let i = daysCount; i > 0; i--) {
    const day = days[i]
    const formatDay = day.slice(5).replace('-', '/')
    const prk = marketing[day].prk || { clicks: 0, views: 0 };
    const ark = marketing[day].ark || { clicks: 0, views: 0 };
    const marketingCost = parseFloat(marketing?.[day].cost) || 0;
    const stats = data.order_info[day] || {};
    const otherCosts = getCosts(data, day)

    const ctrArk = (ark.clicks / ark.views) || 0;
    const ctrPrk = (prk.clicks / prk.views) || 0;
    const drr = (marketingCost / (stats.ordersSum || 1)) * 100;
    const rev = (stats.buysSum ?? 0) - otherCosts - marketingCost
    const margin = formatNumber(rev / (stats.buysSum || 1) * 100) + "%"

    dayRows += `<tr class="row">`

    if (i === daysCount) {
      const value = index === 0 ? "ИТОГО" : `<img src="${imgBase64}" alt="${data.vendor_code}" >`
      dayRows += `<td rowspan="${config.days}" colspan="3" class="photo_cell">${value}</td>`
    }

    dayRows += `
      <td rowspan="1" colspan="2" class="day_cell">${formatDay}</td>
      <td class="bl">${ark.clicks.toFixed(0)}</td>
      <td>${(ctrArk * 100).toFixed(2)}%</td>
      <td class="bl">${prk.clicks.toFixed(0)}</td>
      <td>${(ctrPrk * 100).toFixed(2)}%</td>
      <td class="bl">${marketingCost.toFixed(0)}</td>
      <td>${drr.toFixed(2)}%</td>
      <td>${stats.addToCartCount}</td>
      <td>${stats.ordersCount}</td>
      <td>${stats.buysCount.toFixed(2)}</td>
      <td>${margin}</td>
      <td>${rev.toFixed(2)}</td>
    `
  }

  return dayRows
}

function getCosts(data: Record<string, any>, date: string) {
  const stats = data.order_info[date] || {};

  const tax = parsePercent(data.tax)
  const acquiring = parsePercent(data.acquiring)
  const commission = parsePercent(stats.commission)

  // WIP -------
  stats.buysCount = (stats.ordersCount || 0) * ((data.percent_buys || 0) / 100)
  stats.buysSum = (stats.ordersSum || 0) * ((data.percent_buys || 0) / 100)
  // -----------

  let selfCost = (stats?.buysCount ?? 0) * (data?.self_cost ?? 0);
  let markCost = (stats?.buysCount ?? 0) * (data?.mark ?? 0);
  let taxCost = (stats?.buysSum ?? 0) * tax;
  let acquiringCost = (stats?.buysSum ?? 0) * acquiring;
  let commissionCost = (stats?.buysSum ?? 0) * commission;

  return selfCost + markCost + taxCost + acquiringCost + commissionCost
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
      margin-bottom: 40px;
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


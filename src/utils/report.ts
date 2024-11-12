import { Article } from "../dto/articles";
import { formatNumber, parsePercent } from "./string";
import { create30DaysObject, getYesterdayDate } from "./time";


const config = {
  days: 5
}

export function getReportHtml(articleData: Article[]) {
  // console.log(JSON.stringify(articleData))
  const date = getYesterdayDate();

  let tables = ``

  articleData.forEach((data, i) => {
    let dayRows = getDaysRows(config.days, data, i)

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
  })
  
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


function getDaysRows(daysCount: number, data: Record<string, any>, index: number) {
  const marketing = data?.marketing_cost || {};
  const prk = marketing.prk || { clicks: 0, views: 0 };
  const ark = marketing.ark || { clicks: 0, views: 0 };
  
  let days = Object.keys(create30DaysObject())
  
  let dayRows = ``
  
  for (let i = daysCount; i > 0; i--) {
    const day = days[i]
    const marketingCost = parseFloat(marketing?.[day]) || 0;
    const stats = data.order_info[day] || {};
    const otherCosts = getCosts(data, day)

    const ctrArk = (ark.clicks / ark.views) || 0; 
    const ctrPrk = (prk.clicks / prk.views) || 0; 
    const drr = (marketingCost / (stats.ordersSum || 1)) * 100; 
    const rev = (stats.buysSum ?? 0) - otherCosts
    const margin = formatNumber(rev / (stats.buysSum || 1) * 100)+"%"
    
    dayRows += `<tr class="row">`

    if (i === daysCount) {
      const value = index === 0 ? "ИТОГО" : 'ФОТО' 
      dayRows += `<td rowspan="${config.days}" colspan="3" class="photo_cell">${value}</td>`
    } 

    dayRows += `
      <td rowspan="1" colspan="2">${day}</td>
      <td class="bl">${ark.clicks.toFixed(0)}</td>
      <td>${(ctrArk*100).toFixed(2)}%</td>
      <td class="bl">${prk.clicks.toFixed(0)}</td>
      <td>${(ctrPrk*100).toFixed(2)}%</td>
      <td class="bl">${marketingCost.toFixed(0)}</td>
      <td>${drr.toFixed(2)}%</td>
      <td>${stats.addToCartCount}</td>
      <td>${stats.ordersCount}</td>
      <td>${stats.buysCount}</td>
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
      width: 30%; 
    }
    .photo_cell {
      width: 250px !important
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


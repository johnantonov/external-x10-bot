import { Article } from "../dto/articles";
import { formatNumber, parsePercent } from "./string";


const config = {
  days: 5
}

export function getReportHtml(articleData: Article, date: string) {
  console.log(JSON.stringify(articleData))
  console.log(date)

  // const stats = articleData.order_info || {};
  // const marketing = articleData?.marketing_cost || {};
  // const marketingCost = parseFloat(marketing?.[date]) || 0; 
  // const prk = marketing.prk || { clicks: 0, views: 0 };
  // const ark = marketing.ark || { clicks: 0, views: 0 };
  // const tax = parsePercent(articleData.tax)
  // const acquiring = parsePercent(articleData.acquiring)
  // const commission = parsePercent(stats.commission)

  // // WIP -------
  // stats.buysCount = (stats.ordersCount || 0) * ((articleData.percent_buys || 0) / 100)
  // stats.buysSum = (stats.ordersSum || 0) * ((articleData.percent_buys || 0) / 100)
  // // -----------

  // let selfCost = (stats?.buysCount ?? 0) * (articleData?.self_cost ?? 0);
  // let markCost = (stats?.buysCount ?? 0) * (articleData?.mark ?? 0);
  // let taxCost = (stats?.buysSum ?? 0) * tax;
  // let acquiringCost = (stats?.buysSum ?? 0) * acquiring;
  // let commissionCost = (stats?.buysSum ?? 0) * commission;

  // const ctr = (ark.clicks + prk.clicks) / ((ark.views + prk.views) || 1); 
  // const drr = (marketingCost / (stats.ordersSum || 1)) * 100; 
  // const krrr = 
  // ((stats.buysSum - selfCost - markCost - taxCost - marketingCost) / ((stats.buysSum - selfCost - markCost - taxCost) || 1)) * 100; 
  
  // const stocksMp = stats.stocksMp || 0;
  // const stocksWb = stats.stocksWb || 0;
  
  // const rev = (stats.buysSum ?? 0) 
  // - selfCost
  // - markCost
  // - taxCost
  // - acquiringCost 
  // - commissionCost
  // - marketingCost;

  // const margin = formatNumber(rev / (stats.buysSum || 1) * 100)


  let dayRows = getDaysRows(config.days, articleData, date)
  
  return `
  <!DOCTYPE html>
    <html lang="ru">
    <head>
      <meta charset="UTF-8">
      ${CSS}
    </head>
    <body>
      <h1></h1>
    <table class="bb">
      <thead>
        <tr class="header rb">
          <th rowspan="2" colspan="3" class="article_col">${articleData?.article}<br>${articleData?.title}</th>
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
          <th rowspan="2" colspan="1">Прибыль</th>
        </tr>
      </thead>
      <tbody>
        ${dayRows}
      </tbody> 
    </table>
    </body>
  </html>
    `
}


function getDaysRows(daysCount: number, data: Record<string, any>, date: string) {
  let dayRows = ``
  const marketing = data?.marketing_cost || {};
  const prk = marketing.prk || { clicks: 0, views: 0 };
  const ark = marketing.ark || { clicks: 0, views: 0 };
  const stats = data.order_info || {};
  const costs = getCosts(data);
  
  for (let i = 0; i < daysCount; i++) {
    let day = new Date(date).getUTCDate() - i
    console.log(day)
    const marketingCost = parseFloat(marketing?.[day]) || 0;
    const ctrArk = (ark.clicks / ark.views) || 0; 
    const ctrPrk = (prk.clicks / prk.views) || 0; 
    const drr = (marketingCost / (stats.ordersSum || 1)) * 100; 
    const rev = (stats.buysSum ?? 0) - costs
    const margin = formatNumber(rev / (stats.buysSum || 1) * 100)
    
    dayRows += `<tr class="row">`

    if (i === 0) {
      dayRows += `<td rowspan="5" colspan="2">ИТОГО</td>`
    }

    dayRows += `
      <td rowspan="1" colspan="1">${day}</td>
      <td class="bl">${ark.clicks}</td>
      <td>${ctrArk}</td>
      <td class="bl">${prk.clicks}</td>
      <td>${ctrPrk}</td>
      <td class="bl">${marketingCost}</td>
      <td>${drr}</td>
      <td>${stats.addToCartCount}</td>
      <td>${stats.ordersCount}</td>
      <td>${stats.buysCount}</td>
      <td>${margin}</td>
      <td>${rev}</td>
    `
  }

  return dayRows
}

function getCosts(data: Record<string, any>) {
  const stats = data.order_info || {};

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
        margin-bottom: 20px;
    }
    table, th, td {
        border: 0.2px solid #AFEEEE;
    }
    th, td {
        padding: 8px;
        text-align: center;
    }
    .img-column {
        width: 80px;
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
        border-left: 2px solid black
    }
    .rb {
        border: 2px solid black
    }
    .bb {
        border-bottom: 2px solid black
    }
  </style>
`

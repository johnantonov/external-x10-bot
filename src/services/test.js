const axios = require('axios');
// const { subDays, format } = require('date-fns');
// const { toZonedTime } = require('date-fns-tz');
const advertIds = `[{"id":18361701,"dates":["2024-11-06","2024-11-05","2024-11-04","2024-11-03","2024-11-02","2024-11-01","2024-10-31","2024-10-30","2024-10-29","2024-10-28"]},{"id":18028957,"dates":["2024-11-06","2024-11-05","2024-11-04","2024-11-03","2024-11-02","2024-11-01","2024-10-31","2024-10-30","2024-10-29","2024-10-28"]},{"id":20107866,"dates":["2024-11-06","2024-11-05","2024-11-04","2024-11-03","2024-11-02","2024-11-01","2024-10-31","2024-10-30","2024-10-29","2024-10-28"]},{"id":16729977,"dates":["2024-11-06","2024-11-05","2024-11-04","2024-11-03","2024-11-02","2024-11-01","2024-10-31","2024-10-30","2024-10-29","2024-10-28"]}]}]`
  const wb_api_key = 'eyJhbGciOiJFUzI1NiIsImtpZCI6IjIwMjQxMDE2djEiLCJ0eXAiOiJKV1QifQ.eyJlbnQiOjEsImV4cCI6MTc0NjMwOTIyOSwiaWQiOiIwMTkyZWM0Yi05NTU5LTdjNjEtOWY5Ny1jZGFhN2E3NjQwODciLCJpaWQiOjQ2ODIwNDgsIm9pZCI6MzE1MDQzLCJzIjoxMDczNzQ5NzU4LCJzaWQiOiJlZDE3YTVjNC1lZjZlLTQzNWYtYjUwOS00ZGU3NjkyZjhkMjUiLCJ0IjpmYWxzZSwidWlkIjo0NjgyMDQ4fQ.uQCMJwM2VQSIRByiMWYvmIyg9iB2IbNeA_NW0vl3GzmQn-dr2vkSE69InFLdup5N4piVndT4jcwrEww8zNnMHg'
 
// async function test() {  
//   const advertDetailsResponse = await axios.post('https://advert-api.wildberries.ru/adv/v2/fullstats', advertIds, {
//     headers: {
//       'Authorization': wb_api_key,
//       'Content-Type': 'application/json'
//     },
//     // timeout: 10000
//   });
    
//   const data = advertDetailsResponse.data

//   console.log(data)
//   return data
// }

async function test(nmIDs) {    
  const salesUrl = 'https://statistics-api.wildberries.ru/api/v1/supplier/sales?dateFrom=2024-11-13'

  const headers = {
    'Authorization': 'eyJhbGciOiJFUzI1NiIsImtpZCI6IjIwMjQxMTE4djEiLCJ0eXAiOiJKV1QifQ.eyJlbnQiOjEsImV4cCI6MTc0OTcwMjEyNiwiaWQiOiIwMTkzYjY4Ny0xNTdhLTc5NjUtYjAyNi1iY2E5ZmM2Y2FjMzgiLCJpaWQiOjQ2Njg1OTM4LCJvaWQiOjEyNzkxNywicyI6MTA3Mzc0OTc1OCwic2lkIjoiOTI5NDM0NGQtMmNjYi00YWFhLTlkZTEtYWY4ZDVhNDhiNjUxIiwidCI6ZmFsc2UsInVpZCI6NDY2ODU5Mzh9.THvMLamGQYMD7iEv04fmEc-B-ObymGi_-4NjepvGk_uJSkgz8NiV_oopYa5bjrcYfBKrOe6tzDNfCUiswpViVQ', 
    'Content-Type': 'application/json',
  }

  let sum = 0

  const salesResponse = await axios.get(salesUrl, {
    headers: headers
  });

  const result = {};

  salesResponse.data.forEach((order) => {
    const article = order.nmId
    const vendorCode = order.supplierArticle
    const subject = order.subject
    const finishedPrice = order.finishedPrice

      if (!result[article]) {
        result[article] = { vendor_code: vendorCode, subject: subject, orders: 0 }
      } else {
        result[article].orders += finishedPrice
      }

      sum += finishedPrice
  });

  console.log(sum)
  console.log(JSON.stringify(result))
}

// async function test(nmIDs) {    
//   const url = 'https://seller-analytics-api.wildberries.ru/api/v2/nm-report/detail/history'

//   const headers = {
//     'Authorization': 'eyJhbGciOiJFUzI1NiIsImtpZCI6IjIwMjQxMDE2djEiLCJ0eXAiOiJKV1QifQ.eyJlbnQiOjEsImV4cCI6MTc0NjMwOTIyOSwiaWQiOiIwMTkyZWM0Yi05NTU5LTdjNjEtOWY5Ny1jZGFhN2E3NjQwODciLCJpaWQiOjQ2ODIwNDgsIm9pZCI6MzE1MDQzLCJzIjoxMDczNzQ5NzU4LCJzaWQiOiJlZDE3YTVjNC1lZjZlLTQzNWYtYjUwOS00ZGU3NjkyZjhkMjUiLCJ0IjpmYWxzZSwidWlkIjo0NjgyMDQ4fQ.uQCMJwM2VQSIRByiMWYvmIyg9iB2IbNeA_NW0vl3GzmQn-dr2vkSE69InFLdup5N4piVndT4jcwrEww8zNnMHg', 
//     'Content-Type': 'application/json',
//   }

//   const articles = [208876406,154289554,272714643,254653199,156480711,254655565,227865105,153209118,254643252,156480236,262163737]

//   const yesterdayRequestData = {
//     nmIDs: articles,
//     period: {
//       begin: "2024-12-03",
//       end: "2024-12-08"
//     },
//   };

//   const yesterdayResponse = await axios.post(url, yesterdayRequestData, {
//     headers: headers
//   });

//   const result = {};

//   yesterdayResponse.data.data.forEach((el) => {
//     if (articles.includes(el.nmID)) {
//       const alwaysInfo = el.history[0]

//       // if (!result[el.nmID]) {
//       //   result[el.nmID] = {};
//       // }

//       el.history.forEach((day) => {
//         if (!result[el.nmID].order_info) {
//           result[el.nmID].order_info = {};
//         }
//         result[el.nmID].order_info[day.dt] = {
//           ordersCount: day.ordersCount,
//           ordersSum: day.ordersSumRub,
//           // buysCount: day.ordersCount * ((buyoutsPercent[el.nmID] || 0) / 100),
//           // buysSum: day.ordersSumRub * ((buyoutsPercent[el.nmID] || 0) / 100),
//           addToCartCount: day.addToCartCount,
//         }
//       })

//       // result[el.nmID].price_before_spp = (alwaysInfo.ordersSumRub / alwaysInfo.ordersCount) || null
//       // result[el.nmID].vendor = el.vendorCode
//     }
//   });

//   console.log(JSON.stringify(result))
// }

test()

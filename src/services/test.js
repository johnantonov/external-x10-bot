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
//     }
//   });
    
//   const data = advertDetailsResponse.data

//   console.log(data)
//   return data
// }

async function test(nmIDs = [254642549]) {    
  const salesUrl = 'https://statistics-api.wildberries.ru/api/v1/supplier/sales?dateFrom=2024-11-13'

  const headers = {
    'Authorization': wb_api_key, 
    'Content-Type': 'application/json',
  }

  const salesResponse = await axios.get(salesUrl, {
    headers: headers
  });

  const result = {};
  nmIDs.forEach(nm => result[nm] = {})

  salesResponse.data.forEach(sale => {
    if (nmIDs.includes(sale.nmId)) {
      const date = sale.date.split('T')[0]
      if (!result[sale.nmId][date]) {
        result[sale.nmId][date] = 1
      } else {
        result[sale.nmId][date] += 1
      }
    }
  });

  console.log(JSON.stringify(result))
}

test()

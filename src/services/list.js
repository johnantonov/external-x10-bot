const axios = require('axios');

async function test() {
  const nmIDs = [228386022, 232574335, 220197677, 220197678, 197620771]
  const url = 'https://content-api.wildberries.ru/content/v2/get/cards/list'
  const wb_api_key = 'eyJhbGciOiJFUzI1NiIsImtpZCI6IjIwMjQwMjI2djEiLCJ0eXAiOiJKV1QifQ.eyJlbnQiOjEsImV4cCI6MTcyOTIxNDc5NiwiaWQiOiIxMDAyNjZhNC1hMWE3LTQzNmYtYWE2MC0zZjc0YmFjYjkxODIiLCJpaWQiOjQxNDM1NDM4LCJvaWQiOjgwMTUzOCwicyI6MTA3Mzc0Mjg0Niwic2lkIjoiYjk0YzkwOGUtMzUxZS00NGNiLTg0YzQtM2I1ZDgzYzA0NmFmIiwidCI6ZmFsc2UsInVpZCI6NDE0MzU0Mzh9.R-nRul_AE8cUULyyhbuWxFJH1e2vORYjQ-fWGvpk_nWh7fTmtZlWef6QpNyZCWT25HG5fvxH5R7f0q7aJQx4Pg'
  const requestData = {
    settings: {cursor: { limit: 100 }},
  };
  
  // const result: Record<string, any> = {};
  // filteredData.forEach((card: any) => {
    //   result[card.nmID] = card;
    // });
    
    
    try {
      const response = await axios.post(url, requestData, 
        { headers: { 'Content-Type': 'application/json', 'Authorization': wb_api_key } }
      );
      
      const cards = response.data.cards;
      const filteredData = cards.filter((card) => nmIDs.includes(card.nmID))
      const result = {};
      filteredData.forEach(el => {
        result[el.nmID] = el.dimensions
      })

      console.log(result);
      // console.log(cards)
    } catch (error) {
      console.error('Error:', error);
  }
}

// {
//   "brandNames": [
//   "Some"
//   ],
//   "objectIDs": [
//   358
//   ],
//   "tagIDs": [
//   123
//   ],
//   "nmIDs": [
//   1234567
//   ],
//   "timezone": "Europe/Moscow",
//   "period": {
//   "begin": "2023-06-01 20:05:32",
//   "end": "2024-03-01 20:05:32"
//   },
//   "orderBy": {
//   "field": "ordersSumRub",
//   "mode": "asc"
//   },
//   "page": 1
//   }

test();
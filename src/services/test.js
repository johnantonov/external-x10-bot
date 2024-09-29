const axios = require('axios');
const { subDays, format } = require('date-fns');
const { toZonedTime } = require('date-fns-tz');
const advertIds = [                                                                                                  
   {
     id: 18361701,                                                                                  
     dates: [                                                                                       
       '2024-09-26', '2024-09-25',
       '2024-09-24', '2024-09-23',                                                                  
       '2024-09-22', '2024-09-21',                                                                  
       '2024-09-20', '2024-09-19',                                                                  
       '2024-09-18', '2024-09-17'                                                                   
     ]
   },                                                                                               
   {                                                                                                
     id: 17370900,                                                                                  
     dates: [                                                                                       
       '2024-09-26', '2024-09-25',                                                                  
       '2024-09-24', '2024-09-23',
       '2024-09-22', '2024-09-21',                                                                  
       '2024-09-20', '2024-09-19',                                                                  
       '2024-09-18', '2024-09-17'                                                                   
     ]                                                                                              
   },                                                                                               
   {
     id: 16729977,                                                                                  
     dates: [                                                                                       
       '2024-09-26', '2024-09-25',                                                                  
       '2024-09-24', '2024-09-23',                                                                  
       '2024-09-22', '2024-09-21',                                                                  
       '2024-09-20', '2024-09-19',                                                                  
       '2024-09-18', '2024-09-17'
     ]                                                                                              
   },                                                                                               
   {                                                                                                
     id: 17686639,                                                                                  
     dates: [                                                                                       
       '2024-09-26', '2024-09-25',                                                                  
       '2024-09-24', '2024-09-23',
       '2024-09-22', '2024-09-21',
       '2024-09-20', '2024-09-19',                                                                  
       '2024-09-18', '2024-09-17'
     ]                                                                                              
   },
   {                                                                                                
     id: 18644667,                                                                                  
     dates: [                                                                                       
       '2024-09-26', '2024-09-25',
       '2024-09-24', '2024-09-23',                                                                  
       '2024-09-22', '2024-09-21',                                                                  
       '2024-09-20', '2024-09-19',                                                                  
       '2024-09-18', '2024-09-17'                                                                   
     ]                                                                                              
   },                                                                                               
   {                                                                                                
     id: 17370805,                                                                                  
     dates: [
       '2024-09-26', '2024-09-25',                                                                  
       '2024-09-24', '2024-09-23',                                                                  
       '2024-09-22', '2024-09-21',
       '2024-09-20', '2024-09-19',                                                                  
       '2024-09-18', '2024-09-17'                                                                   
     ]                                                                                              
   },                                                                                               
   {                                                                                                
     id: 16661711,                                                                                  
     dates: [
       '2024-09-26', '2024-09-25',                                                                  
       '2024-09-24', '2024-09-23',                                                                  
       '2024-09-22', '2024-09-21',                                                                  
       '2024-09-20', '2024-09-19',                                                                  
       '2024-09-18', '2024-09-17'                                                                   
     ]                                                                                              
   },                                                                                               
   {
     id: 16661603,                                                                                  
     dates: [                                                                                       
       '2024-09-26', '2024-09-25',                                                                  
       '2024-09-24', '2024-09-23',
       '2024-09-22', '2024-09-21',
       '2024-09-20', '2024-09-19',                                                                  
       '2024-09-18', '2024-09-17'                                                                   
     ]
   },
   {                                                                                                
     id: 17371473,
     dates: [
       '2024-09-26', '2024-09-25',                                                                  
       '2024-09-24', '2024-09-23',
       '2024-09-22', '2024-09-21',                                                                  
       '2024-09-20', '2024-09-19',
       '2024-09-18', '2024-09-17'                                                                   
     ]                                                                                              
   },
   {
     id: 17371704,
     dates: [
       '2024-09-26', '2024-09-25',                                                                  
       '2024-09-24', '2024-09-23',
       '2024-09-22', '2024-09-21',                                                                  
       '2024-09-20', '2024-09-19',                                                                  
       '2024-09-18', '2024-09-17'                                                                   
     ]                                                                                              
   },
   {                                                                                                
     id: 16658063,
     dates: [                                                                                       
       '2024-09-26', '2024-09-25',                                                                  
       '2024-09-24', '2024-09-23',                                                                  
       '2024-09-22', '2024-09-21',                                                                  
       '2024-09-20', '2024-09-19',
       '2024-09-18', '2024-09-17'                                                                   
     ]                                                                                              
   },
   {                                                                                                
     id: 17371537,                                                                                  
     dates: [                                                                                       
       '2024-09-26', '2024-09-25',                                                                  
       '2024-09-24', '2024-09-23',                                                                  
       '2024-09-22', '2024-09-21',                                                                  
       '2024-09-20', '2024-09-19',
       '2024-09-18', '2024-09-17'                                                                   
     ]                                                                                              
   },
   {                                                                                                
     id: 20107866,                                                                                  
     dates: [                                                                                       
       '2024-09-26', '2024-09-25',                                                                  
       '2024-09-24', '2024-09-23',                                                                  
       '2024-09-22', '2024-09-21',                                                                  
       '2024-09-20', '2024-09-19',                                                                  
       '2024-09-18', '2024-09-17'                                                                   
     ]                                                                                              
   },
   {                                                                                                
     id: 17371343,                                                                                  
     dates: [                                                                                       
       '2024-09-26', '2024-09-25',                                                                  
       '2024-09-24', '2024-09-23',                                                                  
       '2024-09-22', '2024-09-21',                                                                  
       '2024-09-20', '2024-09-19',                                                                  
       '2024-09-18', '2024-09-17'                                                                   
     ]                                                                                              
   },
   {                                                                                                
     id: 17371079,                                                                                  
     dates: [                                                                                       
       '2024-09-26', '2024-09-25',                                                                  
       '2024-09-24', '2024-09-23',                                                                  
       '2024-09-22', '2024-09-21',                                                                  
       '2024-09-20', '2024-09-19',                                                                  
       '2024-09-18', '2024-09-17'                                                                   
     ]                                                                                              
   },
   {                                                                                                
     id: 18028957,                                                                                  
     dates: [                                                                                       
       '2024-09-26', '2024-09-25',                                                                  
       '2024-09-24', '2024-09-23',                                                                  
       '2024-09-22', '2024-09-21',                                                                  
       '2024-09-20', '2024-09-19',                                                                  
       '2024-09-18', '2024-09-17'                                                                   
     ]                                                                                              
   },
   {                                                                                                
     id: 16730148,                                                                                  
     dates: [                                                                                       
       '2024-09-26', '2024-09-25',                                                                  
       '2024-09-24', '2024-09-23',                                                                  
       '2024-09-22', '2024-09-21',                                                                  
       '2024-09-20', '2024-09-19',                                                                  
       '2024-09-18', '2024-09-17'                                                                   
     ]                                                                                              
   },
   {                                                                                                
     id: 19593457,                                                                                  
     dates: [                                                                                       
       '2024-09-26', '2024-09-25',                                                                  
       '2024-09-24', '2024-09-23',                                                                  
       '2024-09-22', '2024-09-21',                                                                  
       '2024-09-20', '2024-09-19',                                                                  
       '2024-09-18', '2024-09-17'                                                                   
     ]                                                                                              
   },
   {                                                                                                
     id: 20120076,                                                                                  
     dates: [                                                                                       
       '2024-09-26', '2024-09-25',                                                                  
       '2024-09-24', '2024-09-23',                                                                  
       '2024-09-22', '2024-09-21',                                                                  
       '2024-09-20', '2024-09-19',                                                                  
       '2024-09-18', '2024-09-17'                                                                   
     ]                                                                                              
   },
   {                                                                                                
     id: 18387214,                                                                                  
     dates: [                                                                                       
       '2024-09-26', '2024-09-25',                                                                  
       '2024-09-24', '2024-09-23',                                                                  
       '2024-09-22', '2024-09-21',                                                                  
       '2024-09-20', '2024-09-19',                                                                  
       '2024-09-18', '2024-09-17'                                                                   
     ]                                                                                              
   },
   {                                                                                                
     id: 16729991,                                                                                  
     dates: [                                                                                       
       '2024-09-26', '2024-09-25',                                                                  
       '2024-09-24', '2024-09-23',                                                                  
       '2024-09-22', '2024-09-21',                                                                  
       '2024-09-20', '2024-09-19',                                                                  
       '2024-09-18', '2024-09-17'                                                                   
     ]                                                                                              
   },                                                                                               
   {
     id: 18643620,                                                                                  
     dates: [                                                                                       
       '2024-09-26', '2024-09-25',                                                                  
       '2024-09-24', '2024-09-23',                                                                  
       '2024-09-22', '2024-09-21',                                                                  
       '2024-09-20', '2024-09-19',                                                                  
       '2024-09-18', '2024-09-17'                                                                   
     ]                                                                                              
   },                                                                                               
   {
     id: 18534882,                                                                                  
     dates: [                                                                                       
       '2024-09-26', '2024-09-25',                                                                  
       '2024-09-24', '2024-09-23',                                                                  
       '2024-09-22', '2024-09-21',                                                                  
       '2024-09-20', '2024-09-19',                                                                  
       '2024-09-18', '2024-09-17'                                                                   
     ]                                                                                              
   }                                                                                                
 ]
 
async function test() {
  const timeZone = 'Europe/Moscow';

  const now = new Date();
  const moscowTime = toZonedTime(now, timeZone);

  const startDate1 = subDays(moscowTime, 7);  
  const endDate1 = subDays(moscowTime, 1);    

  const formattedStartDate = format(startDate1, 'yyyy-MM-dd');
  const formattedEndDate = format(endDate1, 'yyyy-MM-dd');
  let startDate = formattedStartDate
  let endDate = formattedEndDate

  const userNmIds = [220197678, 219065263, 226261464, 93678466, 197620771]
  
  const wb_api_key = 'eyJhbGciOiJFUzI1NiIsImtpZCI6IjIwMjQwMjI2djEiLCJ0eXAiOiJKV1QifQ.eyJlbnQiOjEsImV4cCI6MTcyOTIxNDc5NiwiaWQiOiIxMDAyNjZhNC1hMWE3LTQzNmYtYWE2MC0zZjc0YmFjYjkxODIiLCJpaWQiOjQxNDM1NDM4LCJvaWQiOjgwMTUzOCwicyI6MTA3Mzc0Mjg0Niwic2lkIjoiYjk0YzkwOGUtMzUxZS00NGNiLTg0YzQtM2I1ZDgzYzA0NmFmIiwidCI6ZmFsc2UsInVpZCI6NDE0MzU0Mzh9.R-nRul_AE8cUULyyhbuWxFJH1e2vORYjQ-fWGvpk_nWh7fTmtZlWef6QpNyZCWT25HG5fvxH5R7f0q7aJQx4Pg'

  const url = 'https://advert-api.wildberries.ru/adv/v2/fullstats'

  const advertDetailsResponse = await axios.post('https://advert-api.wildberries.ru/adv/v2/fullstats', advertIds, {
    headers: {
      'Authorization': wb_api_key,
      'Content-Type': 'application/json'
    }
  });
    


  const data = {}

  userNmIds.forEach(nm => {
    const result = create30DaysObject();

    advertDetailsResponse.data.forEach((campaign) => {
      const firstDay = campaign.days[0];
      if (firstDay) {
        const isTargetCampaign = firstDay.apps.some((app) => {
          return app.nm.some((article) => {
            return +article.nmId === +nm }
          )
        }
      );
      
      if (isTargetCampaign) {
          campaign.days.forEach((day) => {
            const dayDate = new Date(day.date).toISOString().split('T')[0];
            if (result.hasOwnProperty(dayDate)) {
              result[dayDate] += day.sum;
            }
          });
        }
      }
    });
  

    data[nm] = result
  })

  console.log(data)
  return data
}

function create30DaysObject() {
  const daysObj = {};
  const today = new Date();
  
  for (let i = 0; i < 30; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() - i);
    const dateString = date.toISOString().split('T')[0];
    daysObj[dateString] = 0; 
  }
  
  return daysObj;
}

test()
import { article } from "../dto/articles";
import { create30DaysObject, getYesterdayDate } from "./time";

export function processCampaigns(advertisements: Record<string, any>, userNmIds: article[], advertTypes: Record<string, any>) {
  const data: Record<string, any> = {}
  const yesterday = getYesterdayDate();
  userNmIds.forEach(nm => {
    const result = {
      cost: create30DaysObject(),
      ark: { views: 0, clicks: 0 },
      prk: { views: 0, clicks: 0 }
    }

    advertisements.forEach((campaign: any) => {
      const firstDay = campaign.days[0];
      if (firstDay) {
        const isTargetCampaign = firstDay.apps.some((app: any) => {
          return app.nm.some((article: any) => {
            return Number(article.nmId) === Number(nm) }
          )
        }
      );
       
      if (isTargetCampaign) {
          campaign.days.forEach((day: any) => {
            const dayDate = new Date(day.date).toISOString().split('T')[0];
            if (result.cost.hasOwnProperty(dayDate)) {
              let sum = 0;
              let clicks = 0;
              let views = 0;
              day.apps.forEach((app: any) => {
                app.nm.forEach((n: any) => {
                  if (Number(n.nmId) === Number(nm)) {
                    sum += n.sum
                    clicks += n.clicks ?? 0
                    views += n.views ?? 0
                  };
                })
              })
              result.cost[dayDate] += sum;
              if (yesterday === dayDate) {
                const object = advertTypes.find((advert: any) => advert.id === campaign.advertId);
                if (object) {
                  const type = object.type === 8 ? 'ark' : 'prk';
                  result[type].clicks += clicks;
                  result[type].views += views;
                }
              }
            }
          });
        }
      }
    });
  

    data[nm] = result
  })

  return data
}

export function extractBuyoutsFromCards(responseData: any) {
  try {
    if (responseData.data && responseData.data.data.cards && responseData.data.data.cards.length > 0) {
      const result: any = {};  
      responseData.data.data.cards.forEach((card: any) => {
        const nmID = card.nmID;  
        const buyoutsPercent = card.statistics.selectedPeriod.conversions.buyoutsPercent;  

        result[nmID] = buyoutsPercent;
      });

      return result;  
    } else {
      console.log('No data available');
      return null;
    }
  } catch (error) {
    console.error('Error extracting buyouts percent:', error);
    return null;
  }
}
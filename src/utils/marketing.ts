import { article } from "../dto/articles";
import { create30DaysObject } from "../utils/dates";

export function processCampaigns(advertisements: Record<string, any>, userNmIds: article[]) {
  const data: Record<string, any> = {}

  userNmIds.forEach(nm => {
    const result = create30DaysObject();

    advertisements.forEach((campaign: any) => {
      const firstDay = campaign.days[0];
      if (firstDay) {
        const isTargetCampaign = firstDay.apps.some((app: any) => {
          return app.nm.some((article: any) => {
            return +article.nmId === +nm }
          )
        }
      );
      
      if (isTargetCampaign) {
          campaign.days.forEach((day: any) => {
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
import { box_tariffs_db } from "../../database/models/box_tariffs";
import { config } from "../config/configRecalc";
import { article } from "../dto/articles";
import { BoxTariff } from "../dto/boxTariffs";
import { create30DaysObject  } from "./time";

export function processCampaigns(advertisements: Record<string, any>, userNmIds: article[], advertTypes: Record<string, any>) {
  const data: Record<string, any> = {}
  const days = create30DaysObject();

  userNmIds.forEach(nm => {
    const result: Record<string, any> = {};

    Object.keys(days).forEach(dayDate => {
      result[dayDate] = { cost: 0, ark: { views: 0, clicks: 0 }, prk: { views: 0, clicks: 0 } };
    });

    advertisements.forEach((campaign: any) => {
      const firstDay = campaign.days[0];
      if (firstDay) {
        const isTargetCampaign = firstDay.apps.some((app: any) => {
          return app.nm.some((article: any) => {
            return Number(article.nmId) === Number(nm)
          })
        }
        );

        if (isTargetCampaign) {
          campaign.days.forEach((day: any) => {
            const dayDate = new Date(day.date).toISOString().split('T')[0];
            if (result.hasOwnProperty(dayDate)) {
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
              result[dayDate].cost += sum
              const object = advertTypes.find((advert: any) => advert.id === campaign.advertId);
              if (object) {
                const type = object.type === 8 ? 'ark' : 'prk';

                result[dayDate][type].clicks += clicks;
                result[dayDate][type].views += views;
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

export async function calculateLogistics(sizesNms: Record<article, Record<string, number>>) {
  const tariffs = await box_tariffs_db.getBoxTariff(config.storagesForLogistics)
  const result: Record<string, any> = {};

  const nms = Object.keys(sizesNms)

  nms.forEach(nm => {
    let sum = 0
    const literSize = sizesNms[nm].literSize 
    
    console.log(sizesNms[nm].literSize )

    tariffs.forEach((t: BoxTariff) => {
      sum += t.boxDeliveryBase + (literSize - 1) * t.boxDeliveryLiter 
    })

    console.log(sum)

    result[nm] = sum/config.storagesForLogistics.length
  })

  return result
}
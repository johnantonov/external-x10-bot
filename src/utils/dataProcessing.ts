import { box_tariffs_db } from "../../database/models/box_tariffs";
import { config } from "../config/config";
import { article, DateKey, MarketingObject, ObjectOther, SKU } from "../dto/sku";
import { BoxTariff } from "../dto/boxTariffs";
import { create31DaysObject  } from "./time";
import { parsePercent } from "./parse";
import { NumberOrZero } from "./string";

export function processCampaigns(advertisements: Record<string, any>, userNmIds: article[], advertTypes: Record<string, any>) {
  const data: Record<string, any> = {}
  const days = create31DaysObject();

  userNmIds.forEach(nm => {
    const result: Record<string, any> = {};

    Object.keys(days).forEach(dayDate => {
      result[dayDate] = { cost: 0, ark: { views: 0, clicks: 0, ctr: 0 }, prk: { views: 0, clicks: 0, ctr: 0 } };
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

export async function calculateLogisticsStorage(sizesNms: Record<article, Record<string, number>>)
: Promise<Record<string, { logistics: number; storage: number; }>> {
  
  const tariffs = await box_tariffs_db.getBoxTariff(config.storagesForLogistics)
  const result: Record<string, any> = {}

  const nms = Object.keys(sizesNms)

  nms.forEach(nm => {
    let logisticsSum = 0
    let storageSum = 0
    const literSize = sizesNms[nm].literSize; 

    tariffs.forEach((t: BoxTariff) => {
      const adjustedLiters = (literSize - 1) < 0 ? 0 : (literSize - 1);
      logisticsSum += +t.boxDeliveryBase + adjustedLiters * +t.boxDeliveryLiter
      storageSum += +t.boxStorageBase + adjustedLiters * +t.boxStorageLiter
    })

    result[nm] = {
      logistics: logisticsSum / tariffs.length,
      storage: storageSum / tariffs.length
    }
  })

  return result
}

export function getCosts(data: Partial<SKU>, sku: SKU, date: DateKey): number {
  try {
    const tax = sku?.tax;
    const acquiring = config.acquiring || 0.015;
    const commission = parsePercent(data.order_info?.commission);
    const buysSum = Math.floor(NumberOrZero(data.order_info?.[date]?.buysSum))
    const buysCount = Math.floor(NumberOrZero(data.order_info?.[date]?.buysCount))
  
    const selfCost = buysCount * NumberOrZero(sku?.self_cost);
    const taxCost = buysSum * tax;
    const acquiringCost = buysSum * acquiring;
    const commissionCost = buysSum * commission;
    const storageCost = buysCount * NumberOrZero(data?.storage) * config.turnover;

    const logisticsBase = (config.returnLogistics / (NumberOrZero(data.percent_buys) / 100) - config.returnLogistics) + (NumberOrZero(data.logistics) / (NumberOrZero(data.percent_buys) / 100))
    const logisticsCost = Math.ceil(buysCount * logisticsBase)

    // console.log(`\n\nDATE: ${date}\n\nselfcost: ${selfCost}\ntaxCost: ${taxCost}\nacquiringCost: ${acquiringCost}\ncommissionCost: ${commissionCost}\nstorageCost: ${storageCost}\nlogisticsCost: ${logisticsCost}\n`)
    // console.log('buysCount: ', buysCount, "\nbuysSum: ",buysSum, "\ncommission: ", commission, "\nacquiring: ", acquiring, "\ntax: ", tax, "")
    
    return selfCost + taxCost + acquiringCost + commissionCost + storageCost + logisticsCost;
  } catch (e) {
    console.error('error getting other costs: ', data.article, " ", e)
    return 0
  }
}

export function calculateOtherMetrics(dates: DateKey[], data: Partial<SKU>, sku: SKU, marketing: MarketingObject): ObjectOther {
  let res: ObjectOther = {}

  dates.forEach(date => {
    if (data.order_info?.[date]) {
      const marketingCost = NumberOrZero(marketing?.[date]?.cost)
      const ordersSum = NumberOrZero(data.order_info?.[date].ordersSum)
      const buysSum = NumberOrZero(data.order_info?.[date].buysSum)
      const otherCosts = getCosts(data, sku, date)

      const revWithoutDrr = buysSum - otherCosts
      const revWithDrr = revWithoutDrr - marketingCost
      const krrr = revWithDrr / revWithoutDrr * 100

      console.log(date)
      console.log('ordersSum: ',ordersSum)
      console.log('buysSum: ',buysSum)
      console.log('marketingCost: ',marketingCost)
      console.log('otherCosts: ',otherCosts)

      res[date] = {
        revWithoutDrr: revWithoutDrr,
        revWithDrr: revWithDrr,
        drr: marketingCost / ordersSum * 100,
        margin: revWithoutDrr / buysSum * 100,
        marginWithDrr: revWithDrr / buysSum * 100,
        krrr: krrr > 0 ? krrr : 0,
        ctrArk: NumberOrZero(marketing?.[date]?.ark.clicks) / NumberOrZero(marketing?.[date]?.ark.views) * 100,
        ctrPrk: NumberOrZero(marketing?.[date]?.prk.clicks) / NumberOrZero(marketing?.[date]?.prk.views) * 100
      }
    }
  })


  return res as ObjectOther
}
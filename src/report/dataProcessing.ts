import { config } from "../config/config";
import { DateKey, SKU } from "../dto/sku";
import { parsePercent } from "../utils/parse";
import { NumberOrZero } from "../utils/string";

export const calculateMetrics = (data: SKU, day: DateKey) => {
  const marketing = data?.marketing_cost || {};
  const prk = marketing?.[day]?.prk || { clicks: 0, views: 0 };
  const ark = marketing?.[day]?.ark || { clicks: 0, views: 0 };

  const ctrArk = (ark.clicks / ark.views) || 0;
  const ctrPrk = (prk.clicks / prk.views) || 0;

  const marketingCost = NumberOrZero(marketing?.[day]?.cost)
  const stats = data.order_info?.[day] || {};
  // const rev = (stats.buysSum || 0) - getCosts(data, day);

  // return { ctrArk, ctrPrk, marketingCost, rev };
};

export function getCosts(data: Partial<SKU>, sku: SKU, date: DateKey): number {
  try {
    const stats = data.order_info?.[date];
  
    const tax = parsePercent(sku?.tax);
    const acquiring = config.acquiring || 0.015;
    const commission = parsePercent(data.order_info?.commission);
  
    const selfCost = NumberOrZero(stats?.buysCount) * NumberOrZero(data?.self_cost);
    const taxCost = NumberOrZero(stats?.buysSum) * tax;
    const acquiringCost = NumberOrZero(stats?.buysSum) * acquiring;
    const commissionCost = NumberOrZero(stats?.buysSum) * commission;
    const storageCost = NumberOrZero(stats?.buysCount) * NumberOrZero(data?.storage) * config.turnover;

    const logisticsBase = (config.returnLogistics / (NumberOrZero(data.percent_buys) / 100) - config.returnLogistics) + (NumberOrZero(data.logistics) / (NumberOrZero(data.percent_buys) / 100))
    const logisticsCost = NumberOrZero(stats?.buysCount) * logisticsBase
  
    return selfCost + taxCost + acquiringCost + commissionCost + storageCost + logisticsCost;
  } catch (e) {
    console.error('error getting other costs: ', data.article, " ", e)
    return 0
  }
}

export function calcKrrr(revWithDrr: any, rev: any): number {
  return NumberOrZero(((revWithDrr || 0) / (rev || 1)) * 100);
}

export function calcMargin(rev: any, buysSum: any): number {
  return NumberOrZero((rev || 0) / (buysSum || 1) * 100);
}
export interface SKUCallbackData {
  type?: string;
  art: article;
  action?: string;
}

export interface SKU {
  article: article;
  chat_id: number;
  wb_api_key: string;
  notification_time?: number;
  self_cost: number;
  marketing_cost: MarketingObject;
  sales: SalesObject;
  other_metricks?: ObjectOther;
  order_info: StatsObject;
  tax: number;
  percent_buys: number;
  percent_mp: number;
  price_before_spp: number;
  logistics: number;
  storage: number;
  size: BoxDimensions;
  vendor_code: string;
}

export type article = number | string;

export type DateKey = `${number}-${number}-${number}`; 

export type MarketingData = {
  ark: {
    views: number;
    clicks: number;
  };
  prk: {
    views: number;
    clicks: number;
  };
  cost: number;
};
export type MarketingObject = Record<DateKey, MarketingData>;

export type SalesObject = Record<DateKey, SalesData>;
export type SalesData = {
  infoBuysCount: number;
  infoBuysSum: number;
}

export type DayData = {
  buysSum: number;
  buysCount: number;
  ordersSum: number;
  ordersCount: number;
  addToCartCount: number;
};

export type Metrics = {
  commission: number;
  cart_to_order: number;
  click_to_cart: number;
  ordersCount30: number;
  buyoutsPercent: number;
  fullConversion: string;
  addToCartPercent: number;
  cartToOrderPercent: number;
};

export type StatsObject = Record<DateKey, DayData> & Metrics;

export type BoxDimensions = {
  width: number;
  height: number;
  length: number;
  isValid: boolean;
  literSize: number;
};


export type ObjectOther = Record<DateKey, OtherData>;
export type OtherData = {
  drr: number,
  margin: number, 
  marginWithDrr: number,
  revWithoutDrr: number,
  revWithDrr: number, 
  krrr: number,
  ctrArk: number,
  ctrPrk: number,
}

export interface TextReportData {
  ordersSumTotal: 0,
  ordersCountTotal: 0,
  buysSumTotal: 0,
  buysCountTotal: 0,
  marketingCostTotal: 0,
  revTotal: 0,
  drr: number[],
  margins: number[],
  marginsWithDrr: number[],
  krrrTotalArray: number[],
}



export interface Article {
  stats: any;
  article: article;
  chat_id: number;
  wb_api_key: string;
  notification_time?: number;
  self_cost: number;
  marketing_cost: Record<any, any>;
  other_cost: number;
  mark: number;
  tax: string;
  percent_buys: number;
  percent_mp: number;
  price_before_spp: number;
  logistics: number;
  storage: number;
  size: number;
  order_info: Record<any, any>;
  vendor_code: string | number;
}

export type article = number | string;

export interface ArticleCallbackData {
  type?: string;
  art: article;
  action?: string;
}




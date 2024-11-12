export interface Article {
  article: article;
  chat_id: number;
  wb_api_key: string;
  status: ArticleStatus; 
  is_active: boolean; 
  notification_time?: number;
  title?: string;
  self_cost: number;
  marketing_cost: Record<any, any>;
  other_cost: number;
  mark: number;
  tax: string;
  acquiring: number | string;
  percent_buys: number;
  percent_mp: number;
  price_before_spp: number;
  logistics: number;
  logistics_by_buys: number;
  size: number;
  order_info: Record<any, any>;
  vendor_code: string | number;
}

export type article = number | string;
export type ArticleStatus = 'on' | 'off';

export interface ArticleCallbackData {
  mn?: string;
  art: article;
  sts: ArticleStatus;
  an?: string;
}




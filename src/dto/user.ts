import { article } from "./articles";

export type user_type = 'new' | 'registered' | 'article'

export class User {
  chat_id: number;
  username: string | undefined;
  wb_api_key: string | undefined | null;
  type: user_type;
  article: article;
  notification_time: number | null;
  added_at: string;
  last_report_call: number | null;

  [key: string]: any;

  constructor (data: any) {
    this.chat_id = data.chat.id;
    this.username = data.from?.username
    this.wb_api_key = data.message_id
    this.type = data.text;
    this.article = data.message_id
    this.notification_time = null
    this.added_at = `${new Date()}`
    this.last_report_call = null
  }
}

export interface UserData {

}
// preregistered - промежуточный тип для единоразового формирования меню после регистрации, фактически не используется в БД
export type user_type = 'new' | 'waitSku' | 'waitTax' | 'preregistered' | 'registered' 


export class User {
  chat_id: number;
  username: string | undefined;
  wb_api_key: string | undefined | null;
  type: user_type;
  notification_time: number | null;
  added_at: string;
  last_report_call: number | null;
  last_sec_report_call: number | null;
  tax: number | null;

  [key: string]: any;

  constructor(data: any) {
    this.chat_id = data.chat.id;
    this.username = data.from?.username
    this.wb_api_key = data.message_id
    this.type = data.text;
    this.notification_time = null
    this.added_at = `${new Date()}`
    this.last_report_call = null
    this.last_sec_report_call = null
    this.tax = data.tax
  }
}

import { Redis } from 'ioredis';

export class redis {
  private client: Redis;

  constructor() {
    this.client = new Redis({
      host: process.env.REDIS_HOST || 'localhost',
      port: 6379,
    });
  }

  public getClient(): Redis {
    return this.client;
  }

  async getUserState(chatId: number): Promise<string | null> {
    return await this.client.get(`user:${chatId}:state`);
  }

  async setUserState(chatId: number, state: string, ttlSeconds?: number): Promise<void> {
    if (ttlSeconds) {
      await this.client.set(`user:${chatId}:state`, state, 'EX', ttlSeconds);
    } else {
      await this.client.set(`user:${chatId}:state`, state);
    }
  }

  async deleteUserState(chatId: number): Promise<void> {
    await this.client.del(`user:${chatId}:state`);
  }
}

export const waitingStates = [
  'ecn', 
  'awaiting_wb_api_key', 
  'esc', 
  'em', 
  'et', 
  'awaiting_article', 
  'awaiting_new_key', 
  'acq', 
]

export const rStates = {
  waitArticleTitle: waitingStates[0],
  waitWbApiKey: waitingStates[1],
  waitSelfCost: waitingStates[2],
  waitMark: waitingStates[3],
  waitTax: waitingStates[4],
  waitArticle: waitingStates[5],
  waitNewKey: waitingStates[6],
  waitAcquiring: waitingStates[7],
}

export const inputStates = [rStates.waitSelfCost, rStates.waitTax, rStates.waitMark, rStates.waitArticleTitle, rStates.waitAcquiring]

export const getStateMessage = (state: string) => {
  const message = (text: string) => '📝 Укажите ' + text + ' в ответном сообщении.'

  switch (state) {
    case rStates.waitMark:
      return message('стоимость маркировки')
    case rStates.waitTax:
      return message('размер налога')
    case rStates.waitArticleTitle:
      return message('имя товара')
    case rStates.waitSelfCost:
      return message('себестоимость товара')
    case rStates.waitAcquiring:
      return message('процент эквайринга')
    default:
      break;
  }
}

export const ttls = {
  usual: 600,
  hour: 3600,
}

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
  'awaiting_wb_api_key',
  'esc',
  'em',
  'et',
  'awaiting_article',
  'awaiting_new_key',
]

export const rStates = {
  waitWbApiKey: waitingStates[0],
  waitSelfCost: waitingStates[1],
  waitMark: waitingStates[2],
  waitTax: waitingStates[3],
  waitArticle: waitingStates[4],
  waitNewKey: waitingStates[5],
}

export const inputStates = [rStates.waitSelfCost, rStates.waitTax, rStates.waitMark]

export const getStateMessage = (state: string) => {
  const message = (text: string) => '📝 Укажите ' + text + ' в ответном сообщении.'

  switch (state) {
    case rStates.waitMark:
      return message('стоимость маркировки')
    case rStates.waitTax:
      return message('размер налога')
    case rStates.waitSelfCost:
      return message('себестоимость товара')
    default:
      break;
  }
}

export const ttls = {
  usual: 600,
  hour: 3600,
}

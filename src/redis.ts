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
  'et',
  'awaiting_sku',
  'awaiting_new_key',
]

export const rStates = {
  waitWbApiKey: waitingStates[0],
  waitSelfCost: waitingStates[1],
  waitTax: waitingStates[2],
  waitSku: waitingStates[3],
  waitNewKey: waitingStates[4],
}

export const inputStates = [rStates.waitSelfCost, rStates.waitTax]

export const ttls = {
  usual: 600,
  hour: 3600,
  day: 3600 * 12
}

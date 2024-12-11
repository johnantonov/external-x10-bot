export type BotStatsAction = 'base_stats';

export interface BotStatsPayload {
  action: BotStatsAction;
  data: {
    [key: string]: number | string;
  };
}
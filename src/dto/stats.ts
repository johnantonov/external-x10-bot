export type BotStatsAction = 'base_stats';

export interface BotStatsPayload {
  action: BotStatsAction;
  data: (number | string)[];
}
import { format, subDays } from 'date-fns';
import { toZonedTime } from 'date-fns-tz';
import { User } from '../dto/user';
import { config } from '../config/config';

/**
 * get yesterday date
 */
export function getYesterdayDate(local: 'en' | 'ru' = 'en') {
  const timeZone = 'Europe/Moscow';

  const now = new Date();
  const moscowTime = toZonedTime(now, timeZone);
  const yesterday = subDays(moscowTime, 1);

  const formatStr = local === "en" ? 'yyyy-MM-dd' : 'dd.MM.yyyy'

  const formattedDate = format(yesterday, formatStr);
  return formattedDate;
}

export function getTodayDate() {
  const timeZone = 'Europe/Moscow';

  const now = new Date();
  const moscowTime = toZonedTime(now, timeZone);
  const yesterday = subDays(moscowTime, 0);

  const formattedDate = format(yesterday, 'yyyy-MM-dd');

  return formattedDate;
}

/**
 * Get start date (30 days ago) and end date (yesterday).
 */
export function getXDaysPeriod(X: number) {
  const timeZone = 'Europe/Moscow';

  const now = new Date();
  const moscowTime = toZonedTime(now, timeZone);

  const startDate = subDays(moscowTime, X);
  const endDate = subDays(moscowTime, 1);

  const formattedStartDate = format(startDate, 'yyyy-MM-dd');
  const formattedEndDate = format(endDate, 'yyyy-MM-dd');

  return [formattedStartDate, formattedEndDate]
}

/**
 * create objects as { "2024-09-30": info } 
 */
export function create31DaysObject() {
  const daysObj: Record<string, any> = {};
  const today = new Date();

  for (let i = 0; i < 31; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() - i);
    const dateString = date.toISOString().split('T')[0];
    daysObj[dateString] = 0;
  }

  return daysObj;
}

/**
 * return dates array
 * @param {number} x - how many days ago return
 */
export function getXdaysAgoArr(x: number) {
  const dates = [];
  const today = new Date();

  for (let i = 0; i < x; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() - i);
    const formattedDate = date.toISOString().split('T')[0];
    dates.push(formattedDate);
  }

  return dates;
}

/**
 * sort obj dates by keys by desc
 */
export function sortObjDatesKeys(obj: Record<string, any>) {
  return Object.keys(obj).sort((a, b) => new Date(b).getTime() - new Date(a).getTime())
}

/**
 * sort obj dates by values by desc
 */
export function sortObjDatesEntries(obj: Record<string, any>) {
  return Object.fromEntries(
    Object.entries(obj)
      .sort(([dateA], [dateB]) => new Date(dateB).getTime() - new Date(dateA).getTime())
  );
}

/**
 * проверяет доступен ли пользователю отчет
 */
export function isReportAvailable(lastTime: User['last_report_call']) {
  if (!lastTime) {
    return true
  }

  const now = new Date();
  const lastReportTime = new Date(lastTime);

  const timeDiffMinutes = (now.getTime() - lastReportTime.getTime()) / (1000 * 60);
  return true
  return timeDiffMinutes >= config.reportStopTime;
}
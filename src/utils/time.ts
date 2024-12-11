import { format, subDays } from 'date-fns';
import { toZonedTime } from 'date-fns-tz';
import { User } from '../dto/user';
import { config } from '../config/config';
import { DateKey } from '../dto/sku&report';

/**
 * get yesterday date
 */
export function getYesterdayDate(local: 'en' | 'ru' = 'en'): DateKey | string  {
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
  const daysObj: Record<`${number}-${number}-${number}`, any> = {};
  const today = new Date();

  for (let i = 0; i < 31; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() - i);
    const dateString = date.toISOString().split('T')[0] as `${number}-${number}-${number}`;
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

export function getReportFormatDay(day: string) {
  const dayParts = day.slice(5).split('-');
  const formatDay = `${dayParts[1]}.${dayParts[0]}`;
  return formatDay;
}

/**
 * проверяет доступен ли пользователю отчет
 */
export function isReportAvailable(lastTime: User['last_report_call'] | User['last_sec_report_call']) {
  if (!lastTime) {
    return true
  }

  const now = new Date();
  const lastReportTime = new Date(lastTime);

  const timeDiffMinutes = (now.getTime() - lastReportTime.getTime()) / (1000 * 60);
  return timeDiffMinutes >= config.reportStopTime;
}

export function formatDateForTimestamp(date: Date): string {
  const pad = (num: number) => num.toString().padStart(2, '0');
  const year = date.getFullYear();
  const month = pad(date.getMonth() + 1); 
  const day = pad(date.getDate());
  const hours = pad(date.getHours()) + 3;
  const minutes = pad(date.getMinutes());
  const seconds = pad(date.getSeconds());
  const milliseconds = date.getMilliseconds().toString().padStart(3, '0'); 

  const microseconds = (date.getMilliseconds() * 1000).toString().padStart(6, '0'); 

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}.${microseconds}`;
}
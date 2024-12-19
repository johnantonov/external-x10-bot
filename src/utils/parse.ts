import { resolve } from "path"
import { article, DateKey, SKU, SKUCallbackData } from "../dto/sku&report"
import { images, ImagesKeys } from "../dto/images"
import { config } from "../config/config"

// возвращает file_id или file_path на сервере
export const getPath = (imageKey: ImagesKeys, isPath?: boolean) => {
  const imageId: string | null = config.images?.[imageKey]

  if (!imageId || isPath) {
    const imageName = images[imageKey]
  //   console.log(2)
    return resolve(__dirname, `../../../public/messageImages/${imageName}`)
  }

  // console.log(1)
  return imageId
}

export function getSkuData(sku: any, path: string): number {
  const keys = path.split('.');

  return keys.reduce((current, key) => {
    return current && current[key] !== undefined ? current[key] : 0;
  }, sku); 
}

export function parseSum(input: string | number): number {
  if (!input) {
    return 0;
  }

  let str = input.toString().toLowerCase().replace(',', '.').trim();
  let match = str.match(/[0-9]*\.?[0-9]+/);
  
  return match ? parseFloat(match[0]) : 0;
}


export function parsePercent(input: string | number | undefined): number {
  if (!input) {
    return 0;
  }

  let str = input.toString().toLowerCase().replace(',', '.').trim();

  if (str.includes('%') || str.includes('процент')) {
    str = str.replace(/[%\sпроцентовпроцент]+/g, '').trim();
  }

  let num = Number(str);

  if (isNaN(num)) {
    return 0;
  }

  if (num >= 1) {
    return num / 100;
  }

  return num;
}


export function parseNumericValue(value: string): number | null {
  if (value === "-" || value === "" || value === null) {
    return null;
  }
  return parseFloat(value.replace(",", "."));
}

export const getCurrentArticle = (data: string): article => {
  const splitData = data.split('?')
  return splitData[1]
}

// use short values because btn callback limit is 64 bytes
export const parseArticleData = (data: string): SKUCallbackData => {
  const newData = data.split('?')
  return {
    type: newData[0],
    art: newData[1],
    action: newData[2],
  }
}

export function parseDate(input: string): DateKey | null {
  const dateRegex = /^(\d{2}|\d{4})[./-](\d{2})[./-](\d{2}|\d{4})$/;

  const match = input.match(dateRegex);
  if (!match) {
    return null; 
  }

  let day, month, year;

  if (match[1].length === 4) {
    year = match[1];
    month = match[2];
    day = match[3];
  } else if (match[3].length === 4) {
    day = match[1];
    month = match[2];
    year = match[3];
  } else {
    day = match[1];
    month = match[2];
    year = `20${match[3]}`; 
  }

  day = day.padStart(2, '0');
  month = month.padStart(2, '0');

  return `${year}-${month}-${day}` as DateKey;

  // TEST
  // console.log(parseDate("10-12-2024"));
  // console.log(parseDate("2024-12-10"));
  // console.log(parseDate("10.12.24"));
  // console.log(parseDate("10.12.2024"));  
  // console.log(parseDate("10/12/24"));
  // console.log(parseDate("10/12/2024"));
  // console.log(parseDate("2024/12/10"));
}

export const newArticleData = (data: SKUCallbackData): string => {
  return data.art + "?" + data.action
}

export function getWbArticlePhoto(article: number): string {
  let s_id = Math.floor(+article / 100000);
  let basket: string;

  if (s_id <= 143) {
    basket = "01";
  } else if (s_id <= 287) {
    basket = "02";
  } else if (s_id <= 431) {
    basket = "03";
  } else if (s_id <= 719) {
    basket = "04";
  } else if (s_id <= 1007) {
    basket = "05";
  } else if (s_id <= 1061) {
    basket = "06";
  } else if (s_id <= 1115) {
    basket = "07";
  } else if (s_id <= 1169) {
    basket = "08";
  } else if (s_id <= 1313) {
    basket = "09";
  } else if (s_id <= 1601) {
    basket = "10";
  } else if (s_id <= 1655) {
    basket = "11";
  } else if (s_id <= 1919) {
    basket = "12";
  } else if (s_id <= 2045) {
    basket = "13";
  } else if (s_id <= 2189) {
    basket = "14";
  } else if (s_id <= 2405) {
    basket = "15";
  } else if (s_id <= 2621) {
    basket = "16"; 
  } else if (s_id <= 2837) {
    basket = "17"; 
  } else {
    basket = "18";
  }

  let imageUrl = `https://basket-${basket}.wbbasket.ru/vol${s_id}/part${Math.floor(+article / 1000)}/${article}/images/big/1.webp`;
  // console.log(imageUrl)
  
  return imageUrl;
}
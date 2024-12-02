import { resolve } from "path"
import { article, SKU, SKUCallbackData } from "../dto/sku&report"

export const getPath = (imageName: string) => {
  return resolve(__dirname, `../../../public/messageImages/${imageName}`)
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

export const newArticleData = (data: SKUCallbackData): string => {
  return data.art + "?" + data.action
}

export function getWbArticlePhoto(article: article) {
  let s_id = Math.floor(+article / 100000);
  let basket;
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
  } else {
    basket = "16"
  }

  let imageUrl = "https://basket-" + basket + ".wbbasket.ru/vol" + s_id + "/part" + Math.floor(+article / 1000) + "/" + article + "/images/big/1.webp";
  // console.log('imageUrl', imageUrl)
  return imageUrl;
}
import { generateTable, generateRow, generateCell, generateTableHeader } from "./htmlBuilder";
import { calculateMetrics } from "./dataProcessing";
import { fetchAndResizeImage } from "./imageProcessing";
import { SKU } from "../dto/sku";
import { CSS } from "./CSS";
import { config } from "../config/config";

export const generateReportHtml = async (articleData: SKU[]): Promise<string> => {
  let tables = ``;
  if (articleData.length > 1) {
    articleData.unshift({} as SKU);  // для создания таблицы итого
  }

  for (const data of articleData) {
    if (data.article) {
      const imgSrc = data.article ? await fetchAndResizeImage(data.article) : null;
      const dayRows = ``
      const totalRow = ``
      const header = generateTableHeader(data);
      tables += generateTable(header, dayRows, totalRow);
    } 
  }

  return `
    <!DOCTYPE html>
    <html lang="ru">
    <head>
      <meta charset="UTF-8">
      <style>
       ${CSS(config.pdf.summaryColSpan)}
      </style>
    </head>
    <body>
      ${tables}
    </body>
    </html>
  `;
};

const generateDayRows = (data: SKU, imgSrc: string | null): string => {
  // Реализация генерации строк для дней
  return ``;
};


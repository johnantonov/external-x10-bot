import { generateTable, generateTableHeader, generateDayRows } from "./htmlBuilder";
import { calculateMetrics } from "./dataProcessing";
import { fetchAndResizeImage } from "./imageProcessing";
import { SKU } from "../dto/sku";
import { CSS } from "./CSS";
import { config } from "../config/config";
import { create31DaysObject } from "../utils/time";

export const generateReportHtml = async (articleData: SKU[]): Promise<string> => {
  let tables = ``;
  // if (articleData.length > 1) {
  //   articleData.unshift({} as SKU);  // для создания таблицы итого
  // }

  let days = Object.keys(create31DaysObject()).reverse() as `${number}-${number}-${number}`[];

  for (const data of articleData) {
      console.log(data.article)
      const imgSrc = data.article ? await fetchAndResizeImage(data.article) : null;
      const dayRows = generateDayRows(data, imgSrc, days);
      console.log(dayRows)
      const totalRow = ``
      const header = generateTableHeader(data);
      tables += generateTable(header, dayRows, totalRow);
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




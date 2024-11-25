import { generateTable, generateTableHeader, generateDayRows, generateTotalTable } from "./htmlBuilder";
import { fetchAndResizeImage } from "./imageProcessing";
import { SKU } from "../dto/sku";
import { CSS } from "./CSS";
import { config } from "../config/config";
import { create31DaysObject } from "../utils/time";

export const generateReportHtml = async (articleData: SKU[]): Promise<string> => {
  let days = Object.keys(create31DaysObject()) as `${number}-${number}-${number}`[];
  let tables = generateTotalTable(articleData, days);

  for (const data of articleData) {
    const imgSrc = data.article ? await fetchAndResizeImage(data.article) : null;
    const header = generateTableHeader(data);
    const dayRows = generateDayRows(data, imgSrc, days);
    tables += generateTable(header, dayRows);
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
      <br>
      <br>
      <p>${config.pdf.footerText}</p>
    </body>
    </html>
  `;
};




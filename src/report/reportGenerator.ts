import { generateTable, generateTableHeader, generateDayRows, generateTotalTable, calculateRangesForSku, calculateTotalRanges } from "./htmlBuilder";
import { fetchAndResizeImage } from "./imageProcessing";
import { SKU } from "../dto/sku";
import { CSS } from "./CSS";
import { config } from "../config/config";
import { create31DaysObject } from "../utils/time";

export const generateReportHtml = async (articleData: SKU[]): Promise<string> => {
  let days = Object.keys(create31DaysObject()) as `${number}-${number}-${number}`[];
  let tables = ``
  days = days.slice(-config.pdf.tableDays+1)

  if (articleData.length > 1) {
    const totalRanges = calculateTotalRanges(articleData, days, config.pdf.cols);
    tables += generateTotalTable(articleData, days, totalRanges);
  }

  for (const data of articleData) {
    const ranges = calculateRangesForSku(data, days, config.pdf.cols);
    const imgSrc = data.article ? await fetchAndResizeImage(data.article) : null;
    const header = generateTableHeader(data);
    console.log(ranges)
    const dayRows = generateDayRows(data, imgSrc, days, ranges);
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
      <p>${config.pdf.footerText}</p>
    </body>
    </html>
  `;
};




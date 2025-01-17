import { generateTable, generateTableHeader, generateDayRows, generateTotalTable, calculateRangesForSku, calculateTotalRanges } from "./htmlBuilder";
import { fetchAndResizeImage } from "./imageProcessing";
import { SKU } from "../dto/sku&report";
import { CSS } from "./CSS";
import { config } from "../config/config";
import { create31DaysObject } from "../utils/time";
import { User } from "../dto/user";

export const generateReportHtml = async (articleData: SKU[], ref: User['from_ref']): Promise<string> => {
  let dates = Object.keys(create31DaysObject()) as `${number}-${number}-${number}`[];
  const days = dates.slice(1, config.pdf.tableDays + 1).reverse();
  let tables = ``

  if (articleData.length > 1) {
    const totalRanges = calculateTotalRanges(articleData, days, config.pdf.cols);
    tables += generateTotalTable(articleData, days, totalRanges, ref);
  }

  let tableNumber = 1

  for (const data of articleData) {
    const ranges = calculateRangesForSku(data, days, config.pdf.cols);
    const imgSrc = data.article ? await fetchAndResizeImage(data.article) : null;
    const header = generateTableHeader(data);
    const dayRows = generateDayRows(data, imgSrc, days, ranges);
    tableNumber += 1
    tables += generateTable(header, dayRows, tableNumber);
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
      <div class="body">
      ${tables}
      </div>
      <br>
      <p class="footer_text">${config.pdf.footerText(ref)}</p>
    </body>
    </html>
  `;
};




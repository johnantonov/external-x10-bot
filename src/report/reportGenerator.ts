import { generateTable, generateRow, generateCell } from "./htmlBuilder";
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

const generateTableHeader = (data: SKU): string => {
  const rs = config.pdf.headerRowspan
  let cells = ``

  config.pdf.cols.forEach(col => {
    const bg = col.headBg || '#ffffff'; 
    cells += `<th rowspan="${rs}" colspan="${col.colspan.length}" style="background:${bg}" class="${col.class.join(' ')}">${col.title}</th>`;
  });

  return `
    <thead class="br">
      <tr class="header br">
        <th rowspan="${rs}" colspan="5" class="article_col">${data?.article || ''}<br>${data?.vendor_code  || ''}</th>
        ${cells}
      </tr>
    </thead>`;
};
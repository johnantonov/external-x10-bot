import { config } from "../config/config";
import { SKU } from "../dto/sku";
import { getSkuData } from "../utils/parse";
import { formatNumber } from "../utils/string";
import { getReportFormatDay } from "../utils/time";

export const generateTable = (header: string, dayRows: string, totalRow: string): string => `
  <table class="b">
    <thead class="br">${header}</thead>
    <tbody class="br">${dayRows}${totalRow}</tbody>
  </table>
`;

export const generateTableHeader = (data: SKU): string => {
  const rs = config.pdf.headerRowspan
  let cells = ``

  config.pdf.cols.forEach(col => {
    const bg = col.headBg || '#ffffff'; 
    cells += `<th rowspan="${rs}" colspan="${col.colspan}" style="background:${bg}" class="${col.class.join(' ')}">${col.title}</th>`;
  });

  return `
    <thead class="br">
      <tr class="header br">
        <th rowspan="${rs}" colspan="${config.pdf.skuCol}">${data?.article || ''}<br>${data?.vendor_code  || ''}</th>
        ${cells}
      </tr>
    </thead>`;
};

export const generateDayRows = (data: SKU, imgSrc: string | null, days: `${number}-${number}-${number}`[]): string => {
  let dayRows = ``;

  for (let i = 0; i > config.pdf.tableDays; i++) {
    const day = days[i];
    const formatDay = getReportFormatDay(day);
    dayRows += `<tr class="row">
    <td rowspan="1" colspan="${config.pdf.dayColspan}">${formatDay}</td>
    `
  
    config.pdf.cols.forEach(col => {
      console.log(col)
      const classNames = col.class.join(' ');
      const value = getSkuData(data, col.source(day))
      const cell = generateCell(classNames, value)
      dayRows += cell
    })

    dayRows += `</tr>`
  }

  return dayRows;
};

function generateCell(className: string, value: any, toFixedVal: number = 0): string {
  return `<td class=${className}>${formatNumber(value, toFixedVal)}</td>`
}
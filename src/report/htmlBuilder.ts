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

  config.pdf.cols.forEach((col, index) => {
    const bg = col.headBg || '#ffffff'; 
    cells += `<th rowspan="${rs}" colspan="${col.colspan}" style="background:${bg}" class="${col.class[index]}">${col.title}</th>`;
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
  const dayCount = config.pdf.tableDays

  const titleCol = `
    <td rowspan="${dayCount+1}" colspan="${config.pdf.photoColspan}">
      ${imgSrc ? `<img src="${imgSrc}" alt="${data.vendor_code}" >` : "Ошибка данных"}
    </td>`

  for (let i = dayCount; i > 0; i--) {
    const day = days[i];
    const formatDay = getReportFormatDay(day);

    dayRows += `<tr>${i === dayCount ? titleCol : ''}<td rowspan="1" colspan="${config.pdf.dayColspan}">${formatDay}</td>`

    config.pdf.cols.forEach((col, index) => {
      const classNames = col.class[index];
      const unit = col.unit[index] as 'р.' | '%' | null
      const toFixedVal = col?.toFixed
      col.source(day).forEach(source => {
        const value = getSkuData(data, source)
        const cell = generateCell(classNames, value, unit, toFixedVal)
        dayRows += cell
      })
    })

    dayRows += `</tr>`
  }

  return dayRows;
};

function generateCell(className: string, value: any, unit: 'р.' | '%' | null, toFixedVal: number = 0): string {
  const formattedValue = formatNumber(value, toFixedVal)
  const unittedValue = formatUnitValue(unit, formattedValue)
  return `<td class="${className}">${unittedValue}</td>`
}

function formatUnitValue(unit: '%' | 'р.' | null, value: string | number) {
  if (unit === '%') return `${value}%`
  if (unit === 'р.') return `р.${value}`
  return value
}
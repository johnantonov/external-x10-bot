import { config } from "../config/config";
import { DateKey, SKU } from "../dto/sku";
import { getSkuData } from "../utils/parse";
import { formatNumber } from "../utils/string";
import { getReportFormatDay } from "../utils/time";

export const generateTable = (header: string, dayRows: string): string => `
  <table>
    <thead>${header}</thead>
    <tbody class="br">${dayRows}</tbody>
  </table>
`;

export function generateTotalTable(data: SKU[], days: DateKey[], ranges: { [key: string]: { min: number, max: number } }) {
  const header = generateTableHeader();
  const dayCount = config.pdf.tableDays;

  const titleCol = `<td rowspan="${dayCount+1}" class="title_cell" colspan="${config.pdf.photoColspan}"><div class="title">${config.pdf.title}</div></td>`;

  let totalRow = `<tr class="total_row"><td rowspan="1" colspan="${config.pdf.dayColspan}">Итог</td>`;
  let dayRows = ``;

  const total: { [key: string]: number[] | number } = {};

  for (let i = 0; i < dayCount; i++) {
    const day = days[i];
    const formatDay = getReportFormatDay(day);

    dayRows += `<tr>${i === 0 ? titleCol : ''}<td rowspan="1" colspan="${config.pdf.dayColspan}">${formatDay}</td>`

    config.pdf.cols.forEach((col) => {
      col.source(day).forEach((source, index) => {
        const classNames = col.class[index];
        const unit = col.unit[index] as 'р.' | '%' | null
        const toFixedVal = col?.toFixed

        const key = `${col.title}${index}`;
        const values = data.map(skuData => { return getSkuData(skuData, source) })
        let value = 0;
        
        if (Array.isArray(col.totalType)) {
          value = values.reduce((sum, num) => sum + num, 0) / values.length;
          if (!total[key]) total[key] = [];

          (total[key] as number[]).push(value)
        } else {
          value = values.reduce((sum, num) => sum + num, 0);
          if (!total[key]) total[key] = 0;
          (total[key] as number) += value
        } 

        let cell;
        if (col.condFormat[index]) {
          cell = generateCell(
            classNames,
            value,
            unit,
            toFixedVal,
            { ...ranges[`${col.title}${index}`],
            reverseColors: col?.condReverse?.[0],
            tolerance: config.pdf.toleranceFormatting })
        } else {
          cell = generateCell(classNames, value, unit, toFixedVal)
        }

        dayRows += cell
      })
    })

    dayRows += `</tr>`
  }

  const totalKeys = Object.keys(total)
  let keyI = 0
  config.pdf.cols.forEach((col) => {
    col.condFormat.forEach((isCond, index) => {
      let value;
      if (typeof total[totalKeys[keyI]] === 'number' || typeof total[totalKeys[keyI]] === 'string') {
        value = total[totalKeys[keyI]];
      } else if (Array.isArray(total[totalKeys[keyI]])) {
        value = (total[totalKeys[keyI]] as number[]).reduce((sum: number, num: number) => sum + num, 0) / (total[totalKeys[keyI]] as number[]).length;
      } else {
        value = 0;
      }
      const unit = col.unit[index] as 'р.' | '%' | null
      const toFixedVal = col?.toFixed
      const cell = generateCell(col.class[index], value, unit, toFixedVal)
      keyI++
      totalRow += cell
    })
  })

  totalRow += '</tr>'


  const res = `
    <table>
      <thead>${header}</thead>
      <tbody class="br">${dayRows}${totalRow}</tbody>
    </table>`

  return res
}

export const generateTableHeader = (data?: SKU): string => {
  const rs = config.pdf.headerRowspan
  let cells = ``

  config.pdf.cols.forEach((col) => {
    const bg = col.headBg || '#ffffff'; 
    cells += `<th rowspan="${rs}" colspan="${col.colspan}" style="background:${bg}" class="${col.class.join(' ')}  bt bb">${col.title}</th>`;
  });

  return `
    <tr class="header">
      <th class="no_border" rowspan="${rs}" colspan="${config.pdf.skuCol}">${data?.article || ''}<br>${data?.vendor_code  || ''}</th>
      ${cells}
    </tr>`
};


export const generateDayRows = (data: SKU, imgSrc: string | null, days: DateKey[], ranges: { [key: string]: { min: number, max: number } }): string => {
  let dayRows = ``;
  const dayCount = config.pdf.tableDays

  const total: { [key: string]: number[] | number } = {};
  let totalRow = `<tr class="total_row"><td rowspan="1" colspan="${config.pdf.dayColspan}">Итог</td>`;

  const titleCol = `
  <td rowspan="${dayCount+1}" colspan="${config.pdf.photoColspan}">
    ${imgSrc ? `<img src="${imgSrc}" alt="${data.vendor_code}" >` : "Ошибка данных"}
  </td>`

  for (let i = 0; i < dayCount; i++) {
    const day = days[i];
    const formatDay = getReportFormatDay(day);

    dayRows += `<tr>${i === 0 ? titleCol : ''}<td rowspan="1" colspan="${config.pdf.dayColspan}">${formatDay}</td>`

    config.pdf.cols.forEach((col) => {
      col.source(day).forEach((source, index) => {
        const classNames = col.class[index];
        const unit = col.unit[index] as 'р.' | '%' | null
        const toFixedVal = col?.toFixed
        const value = getSkuData(data, source)

        let cell;
        if (col.condFormat[index]) {
          cell = generateCell(
            classNames,
            value,
            unit,
            toFixedVal,
            { ...ranges[`${col.title}${index}`],
            reverseColors: col?.condReverse?.[0],
            tolerance: config.pdf.toleranceFormatting })
        } else {
          cell = generateCell(classNames, value, unit, toFixedVal)
        }

        const key = `${col.title}${index}`;
        if (Array.isArray(col.totalType)) {
            if (!total[key]) total[key] = [];
            (total[key] as number[]).push(value)
          } else {
            if (!total[key]) total[key] = 0;
            (total[key] as number) += value
          } 

        dayRows += cell
      })
    })

    dayRows += `</tr>`
  }

  const totalKeys = Object.keys(total)
  let keyI = 0
  config.pdf.cols.forEach((col) => {
    col.condFormat.forEach((isCond, index) => {
      let value;
      if (typeof total[totalKeys[keyI]] === 'number' || typeof total[totalKeys[keyI]] === 'string') {
        value = total[totalKeys[keyI]];
      } else if (Array.isArray(total[totalKeys[keyI]])) {
        value = (total[totalKeys[keyI]] as number[]).reduce((sum: number, num: number) => sum + num, 0) / (total[totalKeys[keyI]] as number[]).length;
      } else {
        value = 0;
      }
      const unit = col.unit[index] as 'р.' | '%' | null
      const toFixedVal = col?.toFixed
      const cell = generateCell(col.class[index], value, unit, toFixedVal)
      keyI++
      totalRow += cell
    })
  })

  totalRow += '</tr>'

  return dayRows + totalRow;
};

function generateCell(
  className: string, 
  value: any, 
  unit: 'р.' | '%' | null, 
  toFixedVal: number = 0, 
  range?: { min: number, max: number, reverseColors?: boolean, tolerance?: number }
): string {
  const formattedValue = formatNumber(value, toFixedVal);
  const unittedValue = formatUnitValue(unit, formattedValue);

  let conditionalClass = '';
  if (range) {
    const { min, max, reverseColors = false } = range;

    if (reverseColors) {
      // логика для инверсных значений (3 стадии) (например дрр где чем выше тем хуже)
      const step = (max - min) / 5;
      if (value === max) {
        conditionalClass = 'red'; // самое большое
      } else if (value >= max - step ) {
        conditionalClass = 'light-red'; // чуть меньше максимума
      } else {
        conditionalClass = 'white'; // все остальные
      }
    } else {
      // логика для обычных значений (5 стадий)
      const step = (max - min) / 5;
      if (value <= min + step) {
        conditionalClass = 'white'; // самое маленькое
      } else if (value <= min + step * 2) {
        conditionalClass = 'light-green-1'; // 20-40%
      } else if (value <= min + step * 3) {
        conditionalClass = 'light-green-2'; // 40-60%
      } else if (value === max) {
        conditionalClass = 'green'; // 60-80%
      } else {
        conditionalClass = 'light-green-3'; // самое большое
      }
    }
  }

  return `<td class="${className} ${conditionalClass}">${unittedValue}</td>`;
}

function formatUnitValue(unit: '%' | 'р.' | null, value: string | number) {
  if (unit === '%') return `${value}%`
  if (unit === 'р.') return `р.${value}`
  return value
}

export function calculateRangesForSku(data: SKU, days: DateKey[], cols: typeof config.pdf.cols) {
  const ranges: { [key: string]: { min: number, max: number } } = {};

  cols.forEach((col) => {
    col.condFormat.forEach((isCond, index) => {
      if (isCond) {
        const key = `${col.title}${index}`;
        const values: number[] = [];

        days.forEach((day) => {
          const value = getSkuData(data, col.source(day)[index]);
          if (!isNaN(value)) {
            values.push(value);
          }
        });

        const min = Math.min(...values);
        const max = Math.max(...values);
        ranges[key] = { min, max };
      }
    });
  });

  return ranges;
}

export function calculateTotalRanges(data: SKU[], days: DateKey[], cols: typeof config.pdf.cols) {
  const totalRanges: { [key: string]: { min: number; max: number } } = {};

  cols.forEach((col) => {
    col.source(days[0]).forEach((_, index) => {
      const key = `${col.title}${index}`;
      let allValues: number[] = [];

      days.forEach((day) => {
        col.source(day).forEach((source) => {
          data.forEach((skuData) => {
            const value = getSkuData(skuData, source);
            if (!isNaN(value) && value != null) {
              allValues.push(value);
            }
          });
        });
      });

      const min = Math.min(...allValues);
      const max = Math.max(...allValues);
      totalRanges[key] = { min, max };
    });
  });

  return totalRanges;
}
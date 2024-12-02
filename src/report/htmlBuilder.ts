import { config } from "../config/config";
import { DateKey, SKU } from "../dto/sku&report";
import { getSkuData } from "../utils/parse";
import { formatNumber } from "../utils/string&number";
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
  <td rowspan="${dayCount+1}" colspan="${config.pdf.photoColspan} class="img-col">
    ${imgSrc ? `<img src="${imgSrc}" alt="${data.vendor_code}" class="img-full">` : "Ошибка данных"}
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

  let backgroundColor = "white";
  if (range) {
    const { min, max, reverseColors } = range;

    if (value < 0 || reverseColors) {
      // инверсная логика (красный градиент)
      if (value < 0) { // в таком случае чем меньше число тем краснее
        backgroundColor = calculateColor(value, min, max, [255, 90, 90], [255, 235, 235] );
      } else {
        backgroundColor = calculateColor(value, min, max, [255, 235, 235], [255, 90, 90]);
      }
    } else {
      // основная логика (зелёный градиент)
      backgroundColor = calculateColor(value, min, max, [224, 247, 224], [87, 187, 138]);
    }
  }

  let fzClass = '';
  const valueLength = value.toString().length;
  if (valueLength > 11) {
    fzClass = 'shrink_fz_3';
  } else if (valueLength > 10) {
    fzClass = 'shrink_fz_2';
  } else if (valueLength > 9) {
    fzClass = 'shrink_fz_1';
  }

  return `<td class="${className} ${fzClass}" style="background-color: ${backgroundColor}">${unittedValue}</td>`;
}

function calculateColor(value: number, min: number, max: number, baseColor: number[], targetColor: number[]) {
  const range = max - min;
  const relativeValue = (value - min) / range; 

  const r = Math.round(baseColor[0] + relativeValue * (targetColor[0] - baseColor[0]));
  const g = Math.round(baseColor[1] + relativeValue * (targetColor[1] - baseColor[1]));
  const b = Math.round(baseColor[2] + relativeValue * (targetColor[2] - baseColor[2]));

  return `rgb(${r}, ${g}, ${b})`;
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

export function calculateTotalRanges(  data: SKU[], days: DateKey[], cols: typeof config.pdf.cols): { [key: string]: { min: number; max: number } } {
  const totalRanges: { [key: string]: { min: number; max: number } } = {};

  cols.forEach((col) => {
    col.source(days[0]).forEach((_, index) => {
      const key = `${col.title}${index}`;
      const allAggregatedValues: number[] = [];
      days.forEach((day) => {
        let dailyValues: number[] = [];
        col.source(day).forEach((source) => {
          dailyValues = data.map((skuData) => getSkuData(skuData, source));
        });

        const aggregatedValue = Array.isArray(col.totalType)
          ? dailyValues.reduce((sum, val) => sum + val, 0) / dailyValues.length 
          : dailyValues.reduce((sum, val) => sum + val, 0); 

        if (!isNaN(aggregatedValue) && aggregatedValue != null) {
          allAggregatedValues.push(aggregatedValue);
        }
      });

      const min = Math.min(...allAggregatedValues);
      const max = Math.max(...allAggregatedValues);
      totalRanges[key] = { min, max };
    });
  });

  return totalRanges;
}
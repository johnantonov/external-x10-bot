import { config } from "../config/config";
import { SKU } from "../dto/sku";

export const generateTable = (header: string, dayRows: string, totalRow: string): string => `
  <table class="b">
    <thead class="br">${header}</thead>
    <tbody class="br">${dayRows}${totalRow}</tbody>
  </table>
`;

export const generateRow = (cells: string, className = ""): string => `
  <tr class="${className}">${cells}</tr>
`;

export const generateCell = (content: string, colspan = 1, rowspan = 1, className = ""): string => `
  <td colspan="${colspan}" rowspan="${rowspan}" class="${className}">${content}</td>
`;

export const generateTableHeader = (data: SKU): string => {
  const rs = config.pdf.headerRowspan
  let cells = ``

  config.pdf.cols.forEach(col => {
    const bg = col.headBg || '#ffffff'; 
    cells += `<th rowspan="${rs}" colspan="${col.colspan.length}" style="background:${bg}" class="${col.class.join(' ')}">${col.title}</th>`;
  });

  return `
    <thead class="br">
      <tr class="header br">
        <th rowspan="${rs}" colspan="${config.pdf.skuCol}">${data?.article || ''}<br>${data?.vendor_code  || ''}</th>
        ${cells}
      </tr>
    </thead>`;
};
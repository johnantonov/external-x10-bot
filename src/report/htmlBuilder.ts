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

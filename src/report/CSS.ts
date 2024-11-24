const mainWidth = 1400
const fontFamily = `Arial, sans-serif`
const fontSize = 16
const usualBorder = `none`;
const specialBorder = `0.2px dashed black`
const usualPadding = 12
const cellTextAlign = `center`
const rowHeight = 30
const headFontStyle = 'bold'


export const CSS = (cols: number) => `
  <style>
    body {
      font-family: ${fontFamily};
      font-size: ${fontSize}px;
    }
    table {
      width: ${mainWidth}px !important;
      border-collapse: collapse;
    }
    table, th, td {
      border: ${usualBorder};
    }
    td {
      height: ${rowHeight};
    }
    th, td {
      padding: ${usualPadding}px;
      text-align: ${cellTextAlign};
    }
    .header {
      font-weight: bold;
    }
    .title-row {
      text-align: ${cellTextAlign};
      font-weight: ${headFontStyle};
    }
    .bl {
      border-left: ${specialBorder};
    }
    .br {
      border-right: ${specialBorder};
    }
    .b {
      border-top: ${specialBorder};
      border-right: ${specialBorder};
      border-left: ${specialBorder};
      border-bottom: ${specialBorder};
    }
  </style>
`
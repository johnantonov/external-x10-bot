const mainWidth = 1400
const fontFamily = `Arial, sans-serif`
const fontSize = 16
const usualBorder = `none`;
const specialBorder = `0.2px dashed black`
const usualPadding = 4
const cellTextAlign = `center`
const rowHeight = 30


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
      width: ${mainWidth / cols}
    }
    th, td {
      padding: ${usualPadding}px;
      text-align: ${cellTextAlign};
    }
    .article_col {
      width 350px !important
    }
    .photo_cell {
      width: 240px !important;
      height: 140px !important
    }
    .day_cell {
      width: 110px !important
    }
    .header {
      background-color: #f2f2f2;
      font-weight: bold;
    }
    .title-row {
      text-align: left;
      font-weight: bold;
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
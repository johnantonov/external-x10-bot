import { config } from "../config/config";

const mainWidth = 1600;
const fontFamily = `Arial, sans-serif`
const fontSize = 20;
const noBorder = `none !important`;
const specialBorder = `0.1px dashed black`
const usualPadding = 12
const cellTextAlign = `center`
const rowHeight = 30
const headFontStyle = 'bold'


export const CSS = (cols: number) => `
  <style>
    * {
      border-collapse: collapse;
    }
    body {
      font-family: ${fontFamily};
      font-size: ${fontSize}px;
    }
    .title {
      font-size: ${config.pdf.titleFz}px !important;
      font-weight: bold !important;
      line-height: 1.2 !important;
      text-align: center; 
    }
    .title_cell {
      width: ${config.pdf.imgWidth} !important;
      height: ${config.pdf.imgHeight} !important
    }
    .fz14 {
      font-size: 14px !important;
    }
    .total_row {
      font-weight: bold;
      background: ${config.pdf.totalRowColor};
    }
    .total_row td:not(:first-child) {
      border-bottom: ${specialBorder} !important;
    }
    table {
      width: ${mainWidth}px !important;
      margin-bottom: 10px;
      border-collapse: collapse;
    }
    .no_border {
      border-top: ${noBorder} !important;
      border-right: ${noBorder} !important;
      border-left: ${noBorder} !important;
      border-bottom: ${noBorder} !important;
    }
    
    td {
      white-space: nowrap;
      height: ${rowHeight};
      width: ${mainWidth / 15} !important
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
    .bt {
      border-top: ${specialBorder};
    }
    .bb {
      border-bottom: ${specialBorder};
    }
    .b {
      border-top: ${specialBorder};
      border-right: ${specialBorder};
      border-left: ${specialBorder};
      border-bottom: ${specialBorder};
    }
  </style>
`
import { config } from "../config/config";

const fontFamily = config.pdf.ff
const fontSize = config.pdf.baseFz;
const noBorder = `none !important`;
const specialBorder = `0.1px dashed black`
const usualPadding = 12
const cellTextAlign = `center`
const rowHeight = 25
const headFontStyle = 'bold'


export const CSS = (cols: number) => `
  <style>
    * {
      border-collapse: collapse;
    }
    .body {
      font-family: ${fontFamily};
      font-size: ${fontSize}px;
    }
    .title {
      font-size: ${config.pdf.titleFz}px !important;
      font-weight: bold !important;
      line-height: 1.2 !important;
      text-align: center; 
    }
    .shrink_fz_1 {
      font-size: ${fontSize-2}px;
    }
    .shrink_fz_2 {
      font-size: ${fontSize-4}px;
    }
    .shrink_fz_3 {
      font-size: ${fontSize-6}px;
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
      width: 100%;
      table-layout: fixed;
      margin-bottom: 10px;
      border-collapse: collapse;
    }
    .end_sheet {
      margin-bottom: 20px !important
    }
    
    .table-wrapper:not(:last-child) {
      margin-bottom: 100px; 
    }
    .no_border {
      border-top: ${noBorder} !important;
      border-right: ${noBorder} !important;
      border-left: ${noBorder} !important;
      border-bottom: ${noBorder} !important;
    }

    .img-col {
      padding: 0 !important;
      margin: 0 !important;
    }
    .img-full {
      display: block;
      max-width: 100%;
      max-height: 100%;
      object-fit: contain; /* cover */
    }

    td {
      white-space: nowrap;
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
    .footer_text {
      font-size: ${config.pdf.titleFz+16}px !important;
    }
    .arrow {
      padding-left: 1100px;
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
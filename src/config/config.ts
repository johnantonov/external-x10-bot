import { DateKey } from "../dto/sku"

export const config = {
  storagesForLogistics: ['Коледино', 'Казань', 'Тула'],
  acquiring: 0.015,
  turnover: 30,
  returnLogistics: 50,

  maxSku: 5,
  reportStopTime: 30,

  pdf: {
    tableDays: 5,
    skuCol: 5,
    photoColspan: 3,
    dayColspan: 2,
    format(unit: '%' | 'р.' | null, value: string | number) {
      if (unit === '%') return `${value}%`
      if (unit === 'р.') return `р.${value}`
      return value
    },

    headerRowspan: 2,

    get cols() {
      return [
        { title: 'Клики\nАРК', colspan: 1, headBg: '#fff2cc', condFormat: [false], class: [''], source(day: DateKey){ return `sku.marketing_cost.${day}.ark.clicks`} }, 
        { title: "CTR\nАРК", colspan: 1, headBg: '#fff2cc', condFormat: [true], class: ['br'], source(day: DateKey){ return `sku.marketing_cost.${day}.ark.ctr`} },
        { title: "Клики\nПРК", colspan: 1, headBg: '#fff2cc', condFormat: [false], class: [''], source(day: DateKey){ return `sku.marketing_cost.${day}.prk.clicks`} }, 
        { title: "CTR\nПРК", colspan: 1, headBg: '#fff2cc', condFormat: [true], class: ['br'], source(day: DateKey){ return `sku.marketing_cost.${day}.prk.ctr`} }, 
        { title: "Корз.", colspan: 1, headBg: '#c9daf8', condFormat: [true], class: ['br'], source(day: DateKey){ return `sku.order_info.${day}.addToCartCount`} },
        { title: "Заказы", colspan: 2, headBg: '#c9daf8', condFormat: [false, true], class: ['br'], source(day: DateKey){ return `sku.order_info.${day}.addToCartCount`} }, 
        { title: "Выкупы", colspan: 2, headBg: '#c9daf8', condFormat: [false, true], class: ['br'], source(day: DateKey){ return `sku.order_info.${day}.addToCartCount`}  }, 
        { title: "Расходы\nреклама", colspan: 1, headBg: '#f4cccc', condFormat: [false], class: [''], source(day: DateKey){ return `sku.marketing_cost.${day}.cost`} }, 
        { title: "ДРР", colspan: 1, headBg: '#f4cccc', condFormat: [true], class: ['br'], source(day: DateKey){ return `sku.other_metricks.${day}.drr`} }, 
        { title: "Маржа", colspan: 1, headBg: '#d9ead3', condFormat: [false], class: [''], source(day: DateKey){ return  `sku.other_metricks.${day}.margin`} }, 
        { title: "Прибыль\nдо ДРР", colspan: 1, headBg: '#d9ead3', condFormat: [false], class: [''], source(day: DateKey){ return `sku.other_metricks.${day}.revWithoutDrr`} }, 
        { title: "Прибыль\nс ДРР", colspan: 1, headBg: '#d9ead3', condFormat: [true], class: [''], source(day: DateKey){ return `sku.other_metricks.${day}.revWithDrr`} }, 
        { title: "КРРР", colspan: 1, headBg: '#d9ead3', condFormat: [false], class: [''], source(day: DateKey){ return `sku.other_metricks.${day}.krrr`} }, 
      ]
    },

    formatData(col: any, value: string | number) {
      return this.format(col.unit, value);
    },

    get summaryColSpan() {
      let count = this.skuCol;
      this.cols.forEach(col => count += col.colspan);
      return count;
    },

    footerText:  `Отчёт подготовлен ботом @bot_123 от команды 10X.\nПолучите подробный отчет по всем SKU вашего кабинета. <b>Бесплатный доступ на 3 дня:</b> @tenXsupport_bot`
  },
}
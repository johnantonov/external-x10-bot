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
    headerRowspan: 2,
    title: '10X\nSYSTEM',
    footerText:  `Отчёт подготовлен ботом @bot_123 от команды 10X.\nПолучите подробный отчет по всем SKU вашего кабинета. <b>Бесплатный доступ на 3 дня:</b> @tenXsupport_bot`,

    get summaryColSpan() {
      let count = this.skuCol;
      this.cols.forEach(col => count += col.colspan);
      return count;
    },

    get cols() {
      return [
        { title: 'Клики\nАРК',
           unit: [null], 
           colspan: 1, 
           headBg: '#fff2cc',
           condFormat: [false],
           class: [''],
           source(day: DateKey){ return [`marketing_cost.${day}.ark.clicks`]} }, 

        { title: "CTR\nАРК",
           unit: ["%"], 
           colspan: 1, 
           toFixed: 2, 
           headBg: '#fff2cc',
           condFormat: [true],
           class: ['br'],
           source(day: DateKey){ return [`other_metricks.${day}.ctrArk`]} },

        { title: "Клики\nПРК",
           unit: [null], 
           colspan: 1, 
           headBg: '#fff2cc',
           condFormat: [false],
           class: [''],
           source(day: DateKey){ return [`marketing_cost.${day}.prk.clicks`]} },

        { title: "CTR\nПРК",
           unit: ["%"], 
           colspan: 1, 
           toFixed: 2, 
           headBg: '#fff2cc',
           condFormat: [true],
           class: ['br'],
           source(day: DateKey){ return [`other_metricks.${day}.ctrPrk`]} },

        { title: "Корз.",
           unit: [null], 
           colspan: 1, 
           headBg: '#c9daf8',
           condFormat: [true],
           class: ['br'],
           source(day: DateKey){ return [`order_info.${day}.addToCartCount`]} },

        { title: "Заказы",
           unit: [null, 'р.'], 
           colspan: 2,
           headBg: '#c9daf8',
           condFormat: [false, true],
           class: ['', 'br'],
           source(day: DateKey){ return [`order_info.${day}.ordersCount`, `order_info.${day}.ordersSum`]} },

        { title: "Выкупы",
           unit: [null, 'р.'], 
           colspan: 2, 
           headBg: '#c9daf8',
           condFormat: [false, true],
           class: [''],
           source(day: DateKey){ return [`order_info.${day}.ordersCount`, `order_info.${day}.ordersSum`]}  },

        { title: "Расходы\nреклама",
           unit: ["р."], 
           colspan: 1, 
           headBg: '#f4cccc',
           condFormat: [false],
           class: ['bl'],
           source(day: DateKey){ return [`marketing_cost.${day}.cost`]} },

        { title: "ДРР",
           unit: ["%"], 
           colspan: 1, 
           headBg: '#f4cccc',
           condFormat: [true],
           class: ['br'],
           source(day: DateKey){ return [`other_metricks.${day}.drr`]} },

        { title: "Маржа",
           unit: ["%"], 
           colspan: 1, 
           headBg: '#d9ead3',
           condFormat: [false],
           class: [''],
           source(day: DateKey){ return  [`other_metricks.${day}.margin`]} },

        { title: "Прибыль\nдо ДРР",
           unit: ["р."], 
           colspan: 1, 
           headBg: '#d9ead3',
           condFormat: [false],
           class: [''],
           source(day: DateKey){ return [`other_metricks.${day}.revWithoutDrr`]} },

        { title: "Прибыль\nс ДРР",
           unit: ["р."], 
           colspan: 1, 
           headBg: '#d9ead3',
           condFormat: [true],
           class: [''],
           source(day: DateKey){ return [`other_metricks.${day}.revWithDrr`]} },

        { title: "КРРР",
           unit: ["%"], 
           colspan: 1, 
           headBg: '#d9ead3',
           condFormat: [false],
           class: [''],
           source(day: DateKey){ return [`other_metricks.${day}.krrr`]} }, 
      ]
    },
  },
}
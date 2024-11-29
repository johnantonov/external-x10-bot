import { DateKey } from "../dto/sku&report"

export const config = {
  storagesForLogistics: ['Коледино', 'Казань', 'Тула'],
  acquiring: 0.015,
  turnover: 30,
  returnLogistics: 50,

  maxSku: 5,
  reportStopTime: 0,

  pdf: {
    tableDays: 5,
    skuCol: 3,
    photoColspan: 2,
    dayColspan: 1,
    headerRowspan: 2,
    totalRowColor: '#f3f3f3',
    title: `<a href="https://t.me/tenXsupport_bot"><span>10X</span><br><span>SYSTEM</span></a>`,
    titleFz: 40,
    footerText: `Отчёт подготовлен ботом <a href="https://t.me/X10XTestBot">@bot_123</a> от команды 10X.<br>Получите подробный отчет по всем SKU вашего кабинета.<br> <b>Бесплатный доступ на 3 дня:</b> <a href="https://t.me/tenXsupport_bot">@tenXsupport_bot</a>`,
    ff: `Arial, sans-serif`,
    baseFz: 26,
    toleranceFormatting: 20,

    imgWidth: 300,
    imgHeight: 360,

    get summaryColSpan() {
      let count = this.skuCol;
      this.cols.forEach(col => count += col.colspan);
      return count;
    },

    get cols() {
      return [
        { title: 'Клики<br>АРК',
           unit: [null], 
           colspan: 1, 
           headBg: '#fff2cc',
           condFormat: [false],
           class: ['bl'],
           totalType: 0,
           source(day: DateKey){ return [`marketing_cost.${day}.ark.clicks`]} }, 

        { title: "CTR<br>АРК",
           unit: ["%"], 
           colspan: 1, 
           toFixed: 2, 
           headBg: '#fff2cc',
           condFormat: [true],
           condReverse: [false],
           class: ['br'],
           totalType: [],
           source(day: DateKey){ return [`other_metricks.${day}.ctrArk`]} },

        { title: "Клики<br>ПРК",
           unit: [null], 
           colspan: 1, 
           headBg: '#fff2cc',
           condFormat: [false],
           class: [''],
           totalType: 0,
           source(day: DateKey){ return [`marketing_cost.${day}.prk.clicks`]} },

        { title: "CTR<br>ПРК",
           unit: ["%"], 
           colspan: 1, 
           toFixed: 2, 
           headBg: '#fff2cc',
           condFormat: [true],
           condReverse: [false],
           class: ['br'],
           totalType: [],
           source(day: DateKey){ return [`other_metricks.${day}.ctrPrk`]} },

        { title: "Корз.",
           unit: [null], 
           colspan: 1, 
           headBg: '#c9daf8',
           condFormat: [true],
           condReverse: [false],
           class: ['br'],
           totalType: 0,
           source(day: DateKey){ return [`order_info.${day}.addToCartCount`]} },

        { title: "Заказы",
           unit: ['р.', null], 
           colspan: 2,
           headBg: '#c9daf8',
           condFormat: [false, true],
           condReverse: [false, false],
           class: ['', 'br'],
           totalType: 0,
           source(day: DateKey){ return [`order_info.${day}.ordersSum`, `order_info.${day}.ordersCount`]} },

        { title: "Выкупы",
           unit: ['р.', null],
           colspan: 2, 
           headBg: '#c9daf8',
           condFormat: [false, true],
           condReverse: [false, false],
           class: [''],
           totalType: 0,
           source(day: DateKey){ return [`sales.${day}.infoBuysSum`, `sales.${day}.infoBuysCount`]}  },

        { title: "Расходы\nреклама",
           unit: ["р."], 
           colspan: 1, 
           headBg: '#f4cccc',
           condFormat: [false],
           class: ['bl'],
           totalType: 0,
           source(day: DateKey){ return [`marketing_cost.${day}.cost`]} },

        { title: "ДРР",
           unit: ["%"], 
           colspan: 1, 
           toFixed: 2,  
           headBg: '#f4cccc',
           condFormat: [true],
           condReverse: [true],
           class: ['br'],
           totalType: [],
           source(day: DateKey){ return [`other_metricks.${day}.drr`]} },

        { title: "Маржа",
           unit: ["%"], 
           colspan: 1, 
           toFixed: 2, 
           headBg: '#d9ead3',
           condFormat: [false],
           class: [''],
           totalType: [],
           source(day: DateKey){ return  [`other_metricks.${day}.margin`]} },

        { title: "Прибыль\nдо ДРР",
           unit: ["р."], 
           colspan: 1, 
           headBg: '#d9ead3',
           condFormat: [false],
           class: [''],
           totalType: 0,
           source(day: DateKey){ return [`other_metricks.${day}.revWithoutDrr`]} },

        { title: "Прибыль\nс ДРР",
           unit: ["р."], 
           colspan: 1, 
           headBg: '#d9ead3',
           condFormat: [true],
           condReverse: [false],
           class: [''],
           totalType: 0,
           source(day: DateKey){ return [`other_metricks.${day}.revWithDrr`]} },

        { title: "КРРР",
           unit: ["%"], 
           colspan: 1, 
           toFixed: 2, 
           headBg: '#d9ead3',
           condFormat: [false],
           class: ['br'],
           totalType: [],
           source(day: DateKey){ return [`other_metricks.${day}.krrr`]} }, 
      ]
    },
  },
}
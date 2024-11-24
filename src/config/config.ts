export const config = {
  storagesForLogistics: ['Коледино', 'Казань', 'Тула'],
  acquiring: 0.015,
  turnover: 30,
  returnLogistics: 50,

  maxSku: 5,
  reportStopTime: 30,

  pdf: {
    tableDays: 5,

    format(unit: '%' | 'р.' | null, value: string | number) {
      if (unit === '%') return `${value}%`
      if (unit === 'р.') return `р.${value}`
      return value
    },

    headerRowspan: 2,

    get cols() {
      return [
        { title: 'Клики\nАРК', colspan: ['ordersSum', 'ordersCount'], headBg: '#fff2cc', condFormat: [false], class: [''] }, 
        { title: "CTR\nАРК", colspan: ['ordersSum'], headBg: '#fff2cc', condFormat: [true], class: ['br'] },
        { title: "Клики\nПРК", colspan: ['ordersSum'], headBg: '#fff2cc', condFormat: [false], class: [''] }, 
        { title: "CTR\nПРК", colspan: ['ordersSum'], headBg: '#fff2cc', condFormat: [true], class: ['br'] }, 
        { title: "Корз.", colspan: ['ordersSum'], headBg: '#c9daf8', condFormat: [true], class: ['br'] },
        { title: "Заказы", colspan: ['ordersSum', 'ordersCount'], headBg: '#c9daf8', condFormat: [false, true], class: ['br']  }, 
        { title: "Выкупы", colspan: ['buysSum', 'buysCount'], headBg: '#c9daf8', condFormat: [false, true], class: ['br']  }, 
        { title: "Расходы\nреклама", colspan: ['ordersSum'], headBg: '#f4cccc', condFormat: [false], class: [''] }, 
        { title: "ДРР", colspan: ['ordersSum'], headBg: '#f4cccc', condFormat: [true], class: ['br'] }, 
        { title: "Маржа", colspan: ['ordersSum'], headBg: '#d9ead3', condFormat: [false], class: [''] }, 
        { title: "Прибыль\nдо ДРР", colspan: ['ordersSum'], headBg: '#d9ead3', condFormat: [false], class: [''] }, 
        { title: "Прибыль\nс ДРР", colspan: ['ordersSum'], headBg: '#d9ead3', condFormat: [true], class: [''] }, 
        { title: "КРРР", colspan: ['ordersSum'], headBg: '#d9ead3', condFormat: [false], class: [''] }, 
      ]
    },

    formatData(col: any, value: string | number) {
      return this.format(col.unit, value);
    },

    get summaryColSpan() {
      let count = 0;
      this.cols.forEach(col => count += col.colspan.length);
      return count;
    },

    footerText:  `Отчёт подготовлен ботом @bot_123 от команды 10X.\nПолучите подробный отчет по всем SKU вашего кабинета. <b>Бесплатный доступ на 3 дня:</b> @tenXsupport_bot`
  },
}
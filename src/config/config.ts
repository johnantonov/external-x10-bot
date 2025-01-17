import { ImagesKeys } from "../dto/images";
import { DateKey } from "../dto/sku&report"
import * as dotenv from 'dotenv';
import { User } from "../dto/user";

dotenv.config();

export const config = {
  storagesForLogistics: ['Коледино', 'Казань', 'Тула'],
  acquiring: 0.015,
  turnover: 30,
  returnLogistics: 50,
  mainBotUrl: 'https://t.me/tenXsupport_bot',
  mainRefPart: 'https://cp.puzzlebot.top/',

  maxSku: 10,
  reportStopTime: 0,

  urls: {
   ordersReport: 'https://statistics-api.wildberries.ru/api/v1/supplier/orders',
   salesReport: 'https://statistics-api.wildberries.ru/api/v1/supplier/sales',
   returnsReport: 'https://statistics-api.wildberries.ru/api/v1/supplier/sales',
   tgSendDoc: `https://api.telegram.org/bot${process.env.TELEGRAM_TOKEN}/sendDocument`
  },

  images: {
   menu: 'AgACAgIAAxkBAAIDymdj-LxNehMdZhftr_PON1n58xSvAALV6zEb6V4hS6mzahygq0y7AQADAgADeQADNgQ',
   hello: 'AgACAgIAAxkBAAIDz2dj-NAy6Y0bnSfIQA5RcTLpmRvOAALX6zEb6V4hS4AulqlN8FTwAQADAgADeQADNgQ',
   editProducts: null,
   apiKey: 'AgACAgIAAxkBAAID2mdj-uM3gmlhkKmYtCZaHuJ4tCAJAALf6zEb6V4hS5iWQLC5nWoYAQADAgADeQADNgQ',
   settings: null,
  }, 

  test_images: {
   menu: 'AgACAgIAAxkBAAIH2WeFOs1xl5Khg98hSf8KaLRDQSSwAAJa6DEbFLYwSJGCvnCUhxaWAQADAgADeQADNgQ',
   hello: 'AgACAgIAAxkBAAIH22eFO2QEAzlJbglGAAFoNFE5VoTdfwACaugxGxS2MEhG16dgC9mCwgEAAwIAA3kAAzYE',
   editProducts: null,
   apiKey: 'AgACAgIAAxkBAAIH3GeFO4Y5pma99YiJDSDdWnN--Gy-AAJ26DEbFLYwSJf74XpU8W0UAQADAgADeQADNgQ',
   settings: null,
  },

  pdf: {
   //  test_pdf_id: 'BQACAgIAAxkDBVVB22dhKEjzNFFgKTjgxqbVw9iowsU3AAK-ZwACF_wIS74j6dHS5WhrNgQ',
    test_pdf_id: 'BQACAgIAAxkDAAMxZ2Et2b0RMXOB_Mf86C55zCacsoQAAutaAALUTwlLNEmtx6lHWfA2BA',
    tableDays: 5,
    skuCol: 3,
    photoColspan: 2,
    dayColspan: 1,
    headerRowspan: 2,
    totalRowColor: '#f3f3f3',
    title: (ref: User['from_ref']) => `${ref ? `<a href="https://cp.puzzlebot.top/${ref}` : `<a href="https://t.me/tenXsupport_bot"`}"><span>10X</span><br><span>SYSTEM</span></a>`,
    titleFz: 44,
    footerText: (ref: User['from_ref']) => `Отчёт подготовлен ботом <a href="https://t.me/${process.env.BOT_USERNAME}?start=${ref}">@${process.env.BOT_USERNAME}</a> от команды 10X.<br><br>Получите подробный отчет по всем SKU вашего кабинета.<br><span class="arrow">⬇️</span><br><b>Бесплатный доступ на 3 дня:</b> ${ref ? `<a href="https://cp.puzzlebot.top/${ref}` : `<a href="https://t.me/tenXsupport_bot"`}">@tenXsupport_bot</a>`,
    testReportText: `<b>10X Отчет 09.12.2024</b>\n\nЗаказы: 210 502₽, 172шт\nВыкупы: 145 843₽, 121шт\nРеклама: 9 448₽\nДРР: 5.32%\nМаржа до ДРР: 26.72%\nМаржа с ДРР: 20.50%\nКРРР: 75.44%\n<b>Прибыль с ДРР: 45 002₽</b>`,

    ff: `Arial, sans-serif`,
    baseFz: 28,
    toleranceFormatting: 20,

    imgWidth: 300,
    imgHeight: 400,

    get summaryColSpan() {
      let count = this.skuCol;
      this.cols.forEach((col: any) => count += col.colspan);
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
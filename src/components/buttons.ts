import TelegramBot, { CallbackQuery, InlineKeyboardButton } from "node-telegram-bot-api";
import { user_type } from "../dto/user";
import { article, SKU, SKUCallbackData } from "../dto/sku&report";
import { articles_db } from "../../database/models/articles";
import { newArticleData } from "../utils/parse";
import { getStartedButton } from "../utils/buttons";
import * as dotenv from 'dotenv';
import { config } from "../config/config";

dotenv.config();

/**
 * set bot commands (using when bot starting)
 */
export async function setBotCommands(bot: TelegramBot) {
  try {
    await bot.setMyCommands([
      { command: '/menu', description: 'Главное меню' }
    ]);
    console.log('Commands set');
  } catch (error) {
    console.error('Error to set command', error);
  }
}

export class Options {
  reply_markup: { inline_keyboard: InlineKeyboardButton[][] };

  constructor(buttons: InlineKeyboardButton[][]) {
    this.reply_markup = {
      inline_keyboard: this.generateInlineKeyboard(buttons),
    };
  }

  generateInlineKeyboard(buttons: InlineKeyboardButton[][]): InlineKeyboardButton[][] {
    try {
      return buttons.map((row: InlineKeyboardButton[]) =>
        row.map((button: InlineKeyboardButton) => ({
          text: button.text,
          callback_data: button?.callback_data,
          url: button?.url,
        }))
      );
    } catch (e) {
      console.error('Error while generating: ', buttons)
      return []
    }
  }
}

export const CallbackData = {
  returnMain: 'return_main',
  returnNewMenu: 'return_new_menu',
  registrateUser: 'snu',
  newSku: 'ton?',
  yes: '?yes',
  no: '?no',
  menu: 'menu',
  menuAndEdit: 'menu_edit',
  changeWbApiKey: 'onc?',
  changeTime: 'ct?',
  chooseTime: 'ct?' + "new?",
  timeLater: 'tl',
  editSelfCost: 'esc?',
  editTax: 'et?',
  returnArticle: 'rc?',
  articlesMenu: 'artm?',
  getAllReportNow: 'arn?',
  goArticle: 'ar?',
  deleteArticle: 'da?',
  testReport: 'tr?',
  stockReport: 'sr?',
  ref: 'ref?',
  ordersReport: 'orders?',
  ordersReportToday: 'orders?today',
  ordersReportYesterday: 'orders?yesterday',
  ordersReportDate: 'orders?date',
  salesReport: 'sales?',
  salesReportToday: 'sales?today',
  salesReportYesterday: 'sales?yesterday',
  salesReportDate: 'sales?date',
  returnsReport: 'returns?',
  returnsReportToday: 'returns?today',
  returnsReportYesterday: 'returns?yesterday',
  returnsReportDate: 'returns?date',
  feedback: 'https://t.me/+ZVISmofZZ_wwN2Ey',
  botV1: 'https://t.me/prostowb_bot',
  full10XBot: config.mainBotUrl,

  faq: 'faq',
  faq_1: 'faq_1',
  faq_2: 'faq_2',
  faq_3: 'faq_3',
  faq_4: 'faq_4',
  faq_5: 'faq_5',
} as const;

export const mainButtons = {
  returnMain: { text: '🔙 Вернуться в главное меню', callback_data: CallbackData.returnMain },
  returnNewMenu: { text: '↩️ Меню', callback_data: CallbackData.returnNewMenu },
  returnFaq: { text: '↩️ FAQ', callback_data: CallbackData.faq },
  getAllReportNow: { text: '📂 Отчет ТОП 10', callback_data: CallbackData.getAllReportNow },
  newSku: { text: '➕ Добавить SKU', callback_data: CallbackData.newSku },
  newTax: { text: '💸 Изменить % налога', callback_data: CallbackData.editTax },
  menu: { text: '↩️ Меню', callback_data: CallbackData.menu },
  info: { text: 'ℹ️ Инфо', callback_data: CallbackData.faq },
  menuAndEdit: { text: '↩️ Меню', callback_data: CallbackData.menuAndEdit },
  changeTime: { text: '🕘 Расписание', callback_data: CallbackData.changeTime },
  chooseTime: { text: '🕘 Выбрать время', callback_data: CallbackData.chooseTime },
  timeLater: { text: '➡️ Настроить позже', callback_data: CallbackData.timeLater },
  changeWbApiKey: { text: '🔑 API ключ', callback_data: CallbackData.changeWbApiKey },
  registrateUser: { text: '🔑 Подключить бота к кабинету', callback_data: CallbackData.registrateUser },
  articlesMenu: { text: '🔢 Артикулы ТОП 10', callback_data: CallbackData.articlesMenu },
  testReport: { text: '📂 Тестовый отчет', callback_data: CallbackData.testReport },
  stockReport: { text: '📦 Остатки ТОП 10', callback_data: CallbackData.stockReport },
  ordersReport: { text: '🛒 Заказы', callback_data: CallbackData.ordersReport},
  ordersReportToday: { text: 'Заказы за сегодня', callback_data: CallbackData.ordersReportToday},
  ordersReportYesterday: { text: 'Заказы за вчера', callback_data: CallbackData.ordersReportYesterday},
  ordersReportDate: { text: 'Заказы за дату', callback_data: CallbackData.ordersReportDate},
  salesReport: { text: '💸 Выкупы', callback_data: CallbackData.salesReport},
  salesReportToday: { text: 'Выкупы за сегодня', callback_data: CallbackData.salesReportToday},
  salesReportYesterday: { text: 'Выкупы за вчера', callback_data: CallbackData.salesReportYesterday},
  salesReportDate: { text: 'Выкупы за дату', callback_data: CallbackData.salesReportDate},
  returnsReport: { text: '◀️ Возвраты', callback_data: CallbackData.returnsReport},
  returnsReportToday: { text: 'Возвраты за сегодня', callback_data: CallbackData.returnsReportToday},
  returnsReportYesterday: { text: 'Возвраты за вчера', callback_data: CallbackData.returnsReportYesterday},
  returnsReportDate: { text: 'Возвраты за дату', callback_data: CallbackData.returnsReportDate},
  ref: { text: '👤 Реф. программа', callback_data: CallbackData.ref},
  feedback: { text: '🛎 Поддержка', url: CallbackData.feedback },
  botV1: { text: '🤖 Бот v1', url: CallbackData.botV1 },
  full10XBot: { text: '📈 Полный доступ 10Х ', url: CallbackData.full10XBot },
};

export const articleButtons: Record<string, ((article: any) => TelegramBot.InlineKeyboardButton)> = {
  editSelfCost: (article: article) => { return { text: '💰 Изменить расходы', callback_data: CallbackData.editSelfCost! + article } },
  returnArticle: (article: string) => { return { text: '↩️ Вернуться к настройкам', callback_data: CallbackData.returnArticle + article } },
  deleteArticle: (article: string) => { return { text: '🗑 Удалить артикул', callback_data: CallbackData.deleteArticle + article } },
}

export const faqButtons = {
  faq_1: { text: 'Как получить полный отчет по всем SKU?', callback_data: CallbackData.faq_1 },
  faq_2: { text: 'Расшифровка показателей в отчете', callback_data: CallbackData.faq_2 },
  faq_3: { text: 'Почему отчет только за вчера?', callback_data: CallbackData.faq_3 },
  faq_4: { text: 'Как считается прибыль?', callback_data: CallbackData.faq_4 },
  faq_5: { text: 'Что такое КРРР?', callback_data: CallbackData.faq_5 },
  menu: mainButtons.menu
}

/**
 * returns menu
 * @param {boolean} edit - the message or callback data
 */
export const returnMenu = (edit: boolean = false) => {
  return new Options([[edit ? mainButtons.menuAndEdit : mainButtons.menu]]).reply_markup
}

export const returnNewMenu = () => {
  return new Options([[mainButtons.returnNewMenu]]).reply_markup
}

export const returnFaq = () => {
  return new Options([[mainButtons.returnFaq]]).reply_markup
}

/**
 * returns main options for new or registred user
 * @param {boolean} waitReport - if user wait all reports change btn to loading text
 * @param {boolean} type - current type of user
 */
export const mainOptions = (type?: user_type) => {
  if (type && type !== 'registered') {
    return getStartedButton(type)
  }

  let menu: Array<Array<any>> = [
    [mainButtons.getAllReportNow, mainButtons.stockReport],
    [mainButtons.articlesMenu, mainButtons.changeTime],
    [mainButtons.ordersReport, mainButtons.salesReport, mainButtons.returnsReport],
    [mainButtons.changeWbApiKey, mainButtons.botV1],
    // [mainButtons.ref],
    [mainButtons.full10XBot],
    [mainButtons.info, mainButtons.feedback],
  ];

  if (process.env.MODE === 'test') {
    menu = [
      [mainButtons.getAllReportNow, mainButtons.stockReport],
      [mainButtons.articlesMenu, mainButtons.changeTime],
      [mainButtons.ordersReport, mainButtons.salesReport, mainButtons.returnsReport],
      [mainButtons.changeWbApiKey, mainButtons.botV1],
      // [mainButtons.ref],
      [mainButtons.full10XBot],
      [mainButtons.info, mainButtons.feedback],
    ];
  }

  return new Options(menu).reply_markup;
};

export const ordersReportMenu = () => {
  const menu: Array<Array<any>> = [
    [mainButtons.ordersReportToday],
    [mainButtons.ordersReportYesterday],
    [mainButtons.ordersReportDate],
    [mainButtons.menuAndEdit]
  ];

  return new Options(menu).reply_markup; 
}

export const salesReportMenu = () => {
  const menu: Array<Array<any>> = [
    [mainButtons.salesReportToday],
    [mainButtons.salesReportYesterday],
    [mainButtons.salesReportDate],
    [mainButtons.menuAndEdit]
  ];

  return new Options(menu).reply_markup; 
}

export const returnsReportMenu = () => {
  const menu: Array<Array<any>> = [
    [mainButtons.returnsReportToday],
    [mainButtons.returnsReportYesterday],
    [mainButtons.returnsReportDate],
    [mainButtons.menuAndEdit]
  ];

  return new Options(menu).reply_markup; 
}

/**
 * returns article menu
 */
export const articleOptions = async (chat_id: number, article: article) => {
  if (!article) {
    return console.error('Возникла ошибка при получении пользователя или его артикула: ', chat_id)
  }

  const articleBtns = [
    [articleButtons.editSelfCost(article)],
    [articleButtons.deleteArticle(article)],
    [mainButtons.menuAndEdit]
  ]

  return new Options(articleBtns).reply_markup;
}

/**
 * returns the button to return on article menu
 * @param {string} article - current article
 */
export const returnArticleMenu = (article: article) => {
  const btn = articleButtons.returnArticle(article)
  return new Options([[btn]]).reply_markup
}

/**
 * create yes|no choice 
 * @param {string} cbPart - part of button`s callback 
 */
export const yesNo = (cbPart: string) => {
  return new Options([
    [{ text: '✅ Да', callback_data: cbPart + CallbackData.yes }],
    [{ text: '❌ Нет', callback_data: cbPart + CallbackData.no }],
  ]).reply_markup
}

/**
 * generate and return article keyboard
 * @param {number} chat_id - user chat id
 */
export async function generateArticlesButtons(chat_id: number, page: number = 1): Promise<TelegramBot.InlineKeyboardButton[][]> {
  const articles = (await articles_db.getAllSkuForUser(chat_id)).rows;
  const articleButtons: TelegramBot.InlineKeyboardButton[][] = [];
  const articlesPerPage = 12;
  const pages = Math.ceil(articles.length / articlesPerPage);

  // use little keys because btn callback limit is 64 bytes and we have a large string ss id
  articles.forEach((article: SKU, i) => {
    const data: SKUCallbackData = {
      type: CallbackData.goArticle,
      art: article.article,
      action: "",
    };

    const rowIndex = Math.floor(i / 3);

    if (!articleButtons[rowIndex]) {
      articleButtons[rowIndex] = [];
    }

    articleButtons[rowIndex].push({
      text: `${article.article}`,
      callback_data: data.type + newArticleData(data),
    });
  });

  articleButtons.push(
    [mainButtons.newSku, mainButtons.newTax],
    [{ text: '↩️ Меню', callback_data: CallbackData.menuAndEdit }]
  );

  return articleButtons;
}

// /**
//  * generate and return time keyboard
//  * @param {string} callback - the callback to be handled by the callback handler
//  */
export function generateReportTimeButtons(callback: string, page: number = 0): TelegramBot.InlineKeyboardButton[][] {
  const startTime = 5;
  const endTime = 24;
  const timesPerPage = 20;
  const times: TelegramBot.InlineKeyboardButton[][] = [];

  for (let i = page * timesPerPage + startTime; i < Math.min((page + 1) * timesPerPage + startTime, endTime); i++) {
    const row = Math.floor((i - page * timesPerPage - startTime) / 4);
    if (!times[row]) {
      times[row] = [];
    }
    times[row].push({ text: `${i}:00`, callback_data: `${callback}${i}` });
  }

  times.push([mainButtons.menuAndEdit])
  return times;
}



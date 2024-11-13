import TelegramBot, { CallbackQuery, InlineKeyboardButton } from "node-telegram-bot-api";
import { user_type } from "../dto/user";
import { Article, article, ArticleCallbackData } from "../dto/articles";
import { articles_db } from "../../database/models/articles";
import { newArticleData } from "../utils/parse";

/**
 * set bot commands (now using when bot starting)
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
          callback_data: button.callback_data,
        }))
      );
    } catch (e) {
      console.error('Возникла ошибка при создании кнопок: ', buttons)
      return []
    }
  }
}

export const CallbackData: Record<string, CallbackQuery['data']> = {
  returnMain: 'return_main',
  returnNewMenu: 'return_new_menu',
  registrateUser: 'snu',
  newArticle: 'ton?',
  yes: '?yes',
  no: '?no',
  menu: 'menu',
  menuAndEdit: 'menu_edit',
  loading: 'loading',
  connectionBtn: 'con?',
  changeWbApiKey: 'onc?',
  changeTime: 'ct?',
  editSelfCost: 'esc?',
  editMark: 'em?',
  editTax: 'et?',
  returnArticle: 'rc?',
  editArticle: 'ea?',
  articlesMenu: 'artm?',
  getAllReportNow: 'arn?',
  goArticle: 'ar?',
  deleteArticle: 'da?'
} as const

export const mainButtons: Record<string, InlineKeyboardButton> = {
  returnMain: { text: '🔙 Вернуться в главное меню', callback_data: CallbackData.returnMain },
  returnNewMenu: { text: '↩️ Меню', callback_data: CallbackData.returnNewMenu },
  getReportNow: { text: '📂 Сформировать отчет сейчас', callback_data: CallbackData.getReportNow },
  getAllReportNow: { text: '📂 Сформировать отчеты сейчас', callback_data: CallbackData.getAllReportNow },
  newArticle: { text: '➕ Новый артикул', callback_data: CallbackData.newArticle },
  editArticle: { text: '⚙️ Настройки товара', callback_data: CallbackData.editArticle },
  menu: { text: '↩️ Меню', callback_data: CallbackData.menu },
  menuAndEdit: { text: '↩️ Меню', callback_data: CallbackData.menuAndEdit },
  changeTime: { text: '🕘 Настроить расписание отчетов', callback_data: CallbackData.changeTime },
  changeWbApiKey: { text: '🔑 Обновить WB API KEY', callback_data: CallbackData.changeWbApiKey },
  loading: { text: '⏳ Загрузка...', callback_data: CallbackData.loading },
  registrateUser: { text: '🔑 Подключить WB API KEY', callback_data: CallbackData.registrateUser },
  articlesMenu: { text: '🔢 Артикулы', callback_data: CallbackData.articlesMenu },
}

export const articleButtons: Record<string, ((article: any) => TelegramBot.InlineKeyboardButton)> = {
  editSelfCost: (article: article) => { return { text: '💰 Себестоимость', callback_data: CallbackData.editSelfCost! + article } },
  editMark: (article: article) => { return { text: '🗂 Указать маркировку', callback_data: CallbackData.editMark! + article } },
  editTax: (article: article) => { return { text: '💸 Указать налог', callback_data: CallbackData.editTax! + article } },
  returnArticle: (article: string) => { return { text: '↩️ Вернуться к настройкам', callback_data: CallbackData.returnArticle + article } },
  deleteArticle: (article: string) => { return { text: '🗑 Удалить артикул', callback_data: CallbackData.deleteArticle + article } },
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

/**
 * returns main options for new or registred user
 * @param {boolean} waitReport - if user wait all reports change btn to loading text
 * @param {boolean} type - current type of user
 */
export const mainOptions = (waitReport?: boolean, type?: user_type) => {
  if (type === 'new') {
    return new Options([[mainButtons.registrateUser]]).reply_markup
  }

  const menu = [
    [mainButtons.getAllReportNow],
    [mainButtons.articlesMenu],
    [mainButtons.changeTime],
    [mainButtons.changeWbApiKey]
  ];

  if (waitReport) {
    menu[0] = [mainButtons.loading]
  }

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
    [articleButtons.editMark(article)],
    [articleButtons.editTax(article)],
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
  const articles = (await articles_db.getAllArticlesForUser(chat_id)).rows;
  const articleButtons: TelegramBot.InlineKeyboardButton[][] = [];
  const articlesPerPage = 12;
  const pages = Math.ceil(articles.length / articlesPerPage);

  // use little keys because btn callback limit is 64 bytes and we have a large string ss id
  articles.forEach((article: Article, i) => {
    const data: ArticleCallbackData = {
      mn: CallbackData.goArticle,
      art: article.article,
      an: "",
    };

    const rowIndex = Math.floor(i / 3);

    if (!articleButtons[rowIndex]) {
      articleButtons[rowIndex] = [];
    }

    articleButtons[rowIndex].push({
      text: `${article.article}`,
      callback_data: data.mn + newArticleData(data),
    });
  });

  articleButtons.push([mainButtons.newArticle, { text: '↩️ Меню', callback_data: CallbackData.menuAndEdit }]);

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

  /*
  const navigationButtons: TelegramBot.InlineKeyboardButton[] = [];
  if (page > 0) {
    navigationButtons.push({ text: '⬅️ Назад', callback_data: `${rep}_time_prev_page_${page - 1}` });
  }
  if ((page + 1) * timesPerPage + startTime < endTime) {
    navigationButtons.push({ text: 'Вперед ➡️', callback_data: `${rep}_time_next_page_${page + 1}` });
  }

  if (navigationButtons.length > 0) {
    times.push(navigationButtons);
  }
  */

  times.push([mainButtons.menuAndEdit])
  return times;
}


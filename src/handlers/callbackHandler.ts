import TelegramBot from "node-telegram-bot-api";
import { UserCallback } from "../dto/messages";
import { getStateMessage, redis, rStates, ttls } from "../redis";
import { handleStartMenu } from "../components/botAnswers";
import { RediceService } from "../bot";
import { createEditData, MessageService } from "../services/messageService";
import { articleOptions, CallbackData, generateArticlesButtons, generateReportTimeButtons, mainOptions, Options, returnArticleMenu, returnMenu, yesNo } from "../components/botButtons";
import { users_db } from "../../database/models/users";
import { getStateAndArticleFromCallback, newArticleData, parseArticleData } from "../utils/parse";
import { articles_db } from "../../database/models/articles";
import { isReportAvailable } from "../utils/time";
import { reportService } from "../services/reportService";
import { CallbackProcessor } from "../utils/CallbackProcessor";
import { texts } from "../components/texts";
import dotenv from 'dotenv';
dotenv.config();

/**
 * handler that starting if user send button callback
 */
export async function callbackHandler(query: TelegramBot.CallbackQuery, bot: TelegramBot, RS: redis, MS: MessageService) {
  const env = process.env
  const userCallback = new UserCallback(query);

  if (!env) {
    return console.error('error to getting environment')
  }

  if (!userCallback.userCallbackData) {
    return console.error('error to getting callback')
  }

  if (!userCallback.message_id) {
    return console.error('message_id not found')
  }

  const { chat_id, userCallbackData, message_id, username } = userCallback;
  const [type, last_report_call] = await users_db.processUserRequest(chat_id, username)
  const returnBtn = returnMenu(true);
  const mainBtn = mainOptions(false, type ?? 'new')
  const action = new CallbackProcessor(userCallbackData).getAction();
  const [state, currentArticle] = getStateAndArticleFromCallback(userCallbackData);
  const callbackObj = parseArticleData(userCallbackData)

  let articleMenu;
  let data: any;
  let newButtonCallback: string;
  let editData: { text: string; options: Options['reply_markup']; image?: string } | null = null;


  switch (action) {
    case 'menu':
      await RediceService.deleteUserState(chat_id)
      const menu = await MS.getSpecialMsg(chat_id, 'menu');
      if (userCallbackData === CallbackData.menuAndEdit) {
        await handleStartMenu(userCallback, '/menu', false, menu.message_id)
      } else {
        await handleStartMenu(userCallback, '/menu', true)
      }
      break;

    case 'new menu':
      await RediceService.deleteUserState(chat_id)
      await MS.deleteAllMessages(chat_id)
      await handleStartMenu(userCallback, '/menu', true)
      break;

    case 'new user':
      await RS.setUserState(chat_id, rStates.waitWbApiKey, ttls.usual)
      editData = createEditData('🔑 Отправьте ваш ключ :)', returnBtn);
      break;

    case 'change key':
      await RS.setUserState(chat_id, rStates.waitNewKey, ttls.usual)
      editData = createEditData(`❗️ Если вы подключите ключ от другого личного кабинета, то перестанете получать отчеты по текущим артикулам.
        \nДля продолжения отправьте в чат обновленный ключ или ключ от другого кабинета`, returnBtn);
      break;

    case 'articles':
      editData = createEditData('🔢 Выберите артикул.', { inline_keyboard: await generateArticlesButtons(chat_id) });
      break;

    case 'add article':
      data = parseArticleData(userCallbackData);
      newButtonCallback = newArticleData(data);
      const maxCount = +env.MAX_ARTICLES!
      const articlesCount = (await articles_db.getAllArticlesForUser(chat_id)).rows.length
      if (articlesCount <= maxCount) {
        await RS.setUserState(chat_id, rStates.waitArticle, ttls.usual)
        editData = createEditData(texts.addArticles, returnBtn);
      } else {
        editData = createEditData(`❗️ Вы можете добавить максимум ${maxCount}.`, returnBtn);
      }
      break;

    case 'return article menu':
      if (currentArticle) {
        const articleToReturn = await articles_db.getArticle(chat_id, +currentArticle)
        articleMenu = (await articleOptions(chat_id, +articleToReturn.article))
        if (articleMenu) {
          editData = createEditData(' ', articleMenu);
        }
      } else {
        editData = createEditData('❗️Возникла ошибка при получении артикула. Попробуйте позже.', returnBtn);
      }
      break;

    case 'go article':
      articleMenu = (await articleOptions(chat_id, callbackObj.art))
      if (articleMenu) {
        editData = createEditData(' ', articleMenu);
      } else {
        editData = createEditData('❗️Возникла ошибка при получении артикула. Попробуйте позже', returnBtn);
      }
      break;

    case "input states":
      const message = getStateMessage(state)
      await RediceService.setUserState(chat_id, state + "?" + currentArticle)
      if (message) {
        editData = createEditData(message, returnArticleMenu(currentArticle));
      } else {
        editData = createEditData("❗️Возникла ошибка, попробуйте добавить информацию позже.", returnArticleMenu(currentArticle));
      }
      break;

    case 'delete article':
      newButtonCallback = newArticleData(callbackObj);
      console.log(JSON.stringify(newButtonCallback))
      console.log(JSON.stringify(callbackObj))

      if (!callbackObj.action) {
        editData = createEditData(`❔ Вы уверены, что хотите удалить артикул ${callbackObj.art}?`, yesNo(callbackObj.type + "?" + newButtonCallback));
      } else {
        if (callbackObj.action === 'no') {
          articleMenu = (await articleOptions(chat_id, +currentArticle))
          if (articleMenu) {
            editData = createEditData(' ', articleMenu);
          } else {
            editData = createEditData(' ', mainBtn);
          }
        } else {
          await articles_db.removeArticle(chat_id, currentArticle)
          editData = createEditData(`✅ Вы успешно удалили артикул ${currentArticle}`, mainBtn);
        }
      }
      break;

    case 'get all reports':
      const accessAllReports = isReportAvailable(last_report_call)
      if (accessAllReports) {
        await users_db.updateLastReportCall(chat_id);
        MS.deleteAllMessages(chat_id)
        const loadingMsg = await bot.sendMessage(chat_id, 'Подготавливаем отчеты ⌛️')
        let reportResponse = await reportService.runForUser(chat_id)
        await MS.deleteMessage(chat_id, loadingMsg.message_id)
      } else {
        editData = createEditData(`Вы получили отчет недавно, попробуйте позже`, mainBtn);
      }
      break;

    case 'change time':
      const selectedTime = +userCallbackData.split('?')[1]
      if (!selectedTime) {
        editData = { text: 'Выберите время по МСК, когда вам будет удобно получать отчеты:', options: { inline_keyboard: generateReportTimeButtons(userCallbackData) } }
      } else {
        await users_db.updateNotificationTime(chat_id, selectedTime);
        await articles_db.updateNotificationTime(chat_id, selectedTime)
        editData = createEditData(`✅ Вы будете получать отчёт ежедневно в ${selectedTime}:00`, mainBtn)
      };
      break;

    default:
      await bot.sendMessage(chat_id, 'Возникла ошибка при обработке ответа!', { reply_markup: mainBtn })
      console.error('Error processing callback')
      break;
  }

  if (editData) {
    await MS.editMessage(chat_id, message_id, editData?.text, editData?.options)
  }

  return bot.answerCallbackQuery(query.id);
}

import TelegramBot, { InlineKeyboardButton } from "node-telegram-bot-api";
import { MessageMS, UserCallback } from "../dto/messages";
import { getStateMessage, redis, rStates, ttls } from "../redis";
import { handleStartMenu } from "../components/botAnswers";
import { RediceService } from "../bot";
import dotenv from 'dotenv';
import { createEditData, MessageService } from "../services/messageService";
import { CallbackProcessor } from "../utils/CallbackProcessor";
import { articleOptions, CallbackData, generateArticlesButtons, generateReportTimeButtons, mainOptions, Options, returnArticleMenu, returnMenu, yesNo } from "../components/botButtons";
import { users_db } from "../../database/models/users";
import { getStateAndArticleFromCallback, newArticleData, parseArticleData } from "../utils/parse";
import { articles_db } from "../../database/models/articles";
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

  let articleMenu;
  let data: any;
  let newButtonCallback: string;
  let editData: { text: string; options: Options['reply_markup']; image?: string } | null = null;
  
  const { chat_id, userCallbackData, message_id, username } = userCallback;
  const type = await users_db.processUserRequest(chat_id, username)
  const returnBtn = returnMenu(true);
  const mainBtn = mainOptions(false, type ?? 'new')
  const processor = new CallbackProcessor(userCallbackData);
  const action = processor.getAction();
  const [state, currentArticle] = getStateAndArticleFromCallback(userCallbackData);
  const callbackObj = parseArticleData(userCallbackData)
  
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

    case 'new user': 
      await RS.setUserState(chat_id, rStates.waitWbApiKey, ttls.usual)
      editData = createEditData('🔑 Отправьте ваш ключ :)', returnBtn);
      break;

    case 'change key': 
      await RS.setUserState(chat_id, rStates.waitNewKey, ttls.usual)
      editData = createEditData('🔑 Все ваши артикулы будут удалены, т.к. подключится новый ЛК. Если вы уверены то отправьте ключ.', returnBtn);
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
          editData = createEditData('🔢 Напишите номер артикула, который желаете отслеживать.', returnBtn);
        } else {
          editData = createEditData(`❗️ Вы можете добавить максимум ${maxCount}.`, returnBtn);
        }
      break;
      
    case 'return article menu': 
      if (currentArticle) {
        articleMenu = (await articleOptions(chat_id, +currentArticle, callbackObj.sts))
        if (articleMenu) {
          editData = createEditData(' ', articleMenu);
        }
      } else {
        editData = createEditData('❗️Возникла ошибка при получении артикула. Попробуйте позже.', returnBtn);
      }
      break;

    case 'go article': 
      articleMenu = (await articleOptions(chat_id, callbackObj.art, callbackObj.sts))
      if (articleMenu) {
        editData = createEditData(' ', articleMenu);
      } else {
        editData = createEditData('❗️Возникла ошибка при получении артикула. Попробуйте позже', returnBtn);
      }
      break;
      
    case "input states":
      const message = getStateMessage(state)
      await RediceService.setUserState(chat_id, state+"?"+currentArticle)
      if (message) {
        editData = createEditData(message, returnArticleMenu(currentArticle));
      } else {
        editData = createEditData("❗️Возникла ошибка, попробуйте добавить информацию позже.", returnArticleMenu(currentArticle));
      }
      break;

      case 'delete article': 
        newButtonCallback = newArticleData(callbackObj);
        const action = callbackObj.an;

        if (!action) {
            editData = createEditData(`❔ Вы уверены, что хотите удалить артикул ${callbackObj.art}?`, yesNo(callbackObj.mn + "?" + newButtonCallback));
        } else {
          if (action === 'no') {
            articleMenu = (await articleOptions(chat_id, +currentArticle, callbackObj.sts))
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

      case 'off report':  
        const newMenuWithOnBtn = await articleOptions(chat_id, +currentArticle, 'off')
        if (newMenuWithOnBtn) {
          await articles_db.updateStatus(chat_id, currentArticle, 'off')
          editData = createEditData(`✅ Вы успешно отключили отчет по артикулу ${currentArticle}`, newMenuWithOnBtn);
        } else {
          editData = createEditData(`Возникла ошибка при получении данных об артикуле ${currentArticle}`, mainBtn);
        }
        break;

      case 'on report':  
        const newMenuWithOffBtn = await articleOptions(chat_id, +currentArticle, 'on')
        if (newMenuWithOffBtn) {
          await articles_db.updateStatus(chat_id, currentArticle, 'on')
          editData = createEditData(`✅ Отчет по товару ${currentArticle} включен и придет согласно расписанию`, newMenuWithOffBtn);
        } else {
          editData = createEditData(`Возникла ошибка при получении данных об артикуле ${currentArticle}`, mainBtn);
        }

        break;

    // case 'off': 
    //   data = parseConnectionData(userCallbackData);
    //   newButtonCallback = newConnectionData(data);
    //   const text = userCallbackData.startsWith(CallbackData.offConnection as string) ? 'удалить таблицу из подключений?' : 'отключить ежедневную рассылку?' 
    //   const endText = userCallbackData.startsWith(CallbackData.offConnection as string) ? 'удалили таблицу. Вы сможете подключить ее повторно в меню "Подключения"' : 'отключили ежедневную рассылкую.' 
    //   const action = data.an;
    //   if (!action) {
    //     return MS.editMessage(chat_id, message_id, 'Вы уверены, что хотите ' + text, yesNo(data.mn + "?" + newButtonCallback))
    //   } else if (userCallbackData.endsWith(CallbackData.yes as string)) {
    //     if (userCallbackData.startsWith(CallbackData.offConnection as string)) {
    //       await connections_db.removeConnection(chat_id, data.ss) 
    //     } else {
    //       await connections_db.updateNotificationTime(chat_id, 0, data.ss)
    //     }
    //   } else {
    //     return MS.editMessage(chat_id, message_id, ' ', connectionOptions(newButtonCallback, data.sts));
    //   }
    //   editData = createEditData(`✅ Вы успешно ` + endText, mainBtn);
    // break;


    // case 'get all reports': 
    //   await bot.editMessageReplyMarkup(mainOptions(true), { chat_id, message_id })
    //   await runPersonReport(chat_id, 'all')
    //   await MS.deleteAllMessages(chat_id);
    // break;

    // case 'change title':
    //   data = parseConnectionData(userCallbackData);
    //   newButtonCallback = newConnectionData(data);;
    //   await RS.setUserState(chat_id, rStates.waitConnectionTitle+data.ss, ttls.usual)
    //   await MS.editMessage(chat_id, message_id, '✍️ Введите название подключения', returnConnectionMenu(newButtonCallback));
    // break;

    case 'change time': 
      const selectedTime = +userCallbackData.split('?')[1]
      if (!selectedTime) {
        editData = { text: 'Выберите время по МСК, когда вам будет удобно получать отчеты:', options: { inline_keyboard: generateReportTimeButtons(userCallbackData) } }
      } else {
        await articles_db.updateNotificationTime(chat_id, selectedTime);
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

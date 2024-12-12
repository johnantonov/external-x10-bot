import TelegramBot from "node-telegram-bot-api";
import { UserCallback } from "../dto/messages";
import { redis, rStates, ttls } from "../redis";
import { handleStartMenu } from "../components/botAnswers";
import { RediceService } from "../bot";
import { createEditData, MessageService } from "../services/messageManipulatorService";
import { articleOptions, CallbackData, generateArticlesButtons, generateReportTimeButtons, mainOptions, Options, returnMenu, yesNo } from "../components/buttons";
import { users_db } from "../../database/models/users";
import { getCurrentArticle, parseArticleData } from "../utils/parse";
import { articles_db } from "../../database/models/articles";
import { isReportAvailable } from "../utils/time";
import { texts } from "../components/texts";
import dotenv from 'dotenv';
import { config } from "../config/config";
import { images } from "../dto/images";
import { btn } from "../utils/buttons";
import { getFaqData } from "../utils/faq";
import { CallbackProcessor } from "../utils/CallbackProcessor";
import { requestOrdersReport, requestReport, requestStockReport } from "../utils/requestReport";
import { createUserRefText } from "../utils/ref";

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
  const [type, last_report_call, last_sec_report_call, success_refs] = await users_db.processUserRequest(chat_id, username)
  const returnBtn = returnMenu(true);
  const mainBtn = mainOptions(type ?? 'new')
  const action = new CallbackProcessor(userCallbackData, type).getAction();
  const currentArticle = getCurrentArticle(userCallbackData);
  const callbackObj = parseArticleData(userCallbackData)

  let articleMenu;
  let editData: { text: string; options?: Options['reply_markup']; image?: string } | null = null;

  switch (action) {
    case 'menu':
      await RediceService.deleteUserState(chat_id)
      const menu = await MS.getSpecialMsg(chat_id, 'menu');

      if (userCallbackData === CallbackData.menuAndEdit && menu?.message_id) {
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
      await RS.setUserState(chat_id, rStates.waitWbApiKey, ttls.day)
      editData = createEditData(texts.sendKey, undefined, images.apiKey);
      break;

    case 'test report': 
      const filePath = './public/documents/Тестовый отчет.pdf'; 
      try {
          // await bot.sendMessage(chatId, messageText);
          await bot.sendDocument(chat_id, filePath, {
            caption: config.pdf.testReportText, 
            parse_mode: 'HTML',
            reply_markup: mainOptions('new')!,
            disable_notification: true
          });
        } catch (error) {
          console.error('Error while sending test report', error);
        }
      break;

    case 'change key':
      await RS.setUserState(chat_id, rStates.waitNewKey, ttls.usual)
      editData = createEditData(texts.warningChangeKey, returnBtn, images.apiKey);
      break;

    case 'articles':
      editData = createEditData(texts.chooseSku, { inline_keyboard: await generateArticlesButtons(chat_id) });
      break;

    case 'all ready': 
      editData = createEditData(texts.allReady, btn('getAllReportNow'));
      break;

    case 'add sku':
      const maxCount = config.maxSku
      const articlesCount = (await articles_db.getAllSkuForUser(chat_id)).rows.length
      if (articlesCount < maxCount) {
        // разные состояние ожидания артикулов для нового и для старого пользователя (для нового ожидается автоматически следующий шаг tax)
        const newUserState = type === 'waitSku' ? rStates.waitSku : rStates.waitSkuOldUser 

        await RS.setUserState(chat_id, newUserState, ttls.usual)
        editData = createEditData(texts.addSku, returnBtn);
      } else {
        editData = createEditData(texts.errorMaxSku, returnBtn);
      }
      break;
    
    case 'info':
      const [faqText, faqBtn] = getFaqData(userCallbackData)
      editData = createEditData(faqText, faqBtn);
      break;

    case 'return article menu':
      await RediceService.deleteUserState(chat_id)
      if (currentArticle) {
        const articleToReturn = await articles_db.getArticle(chat_id, currentArticle)
        articleMenu = (await articleOptions(chat_id, +articleToReturn.article))
        if (articleMenu) {
          editData = createEditData(' ', articleMenu);
        }
      } else {
        editData = createEditData(texts.errorGetSku, returnBtn);
      }
      break;

    case 'go article':
      articleMenu = (await articleOptions(chat_id, callbackObj.art))
      if (articleMenu) {
        editData = createEditData(' ', articleMenu);
      } else {
        editData = createEditData(texts.errorGetSku, returnBtn);
      }
      break;

    case "update tax":
      try {
        await RediceService.setUserState(chat_id, rStates.waitTax, ttls.usual)
        if (type === 'waitTax') {
          editData = createEditData(texts.addedSku);
        } else {
          editData = createEditData(texts.updateTax, returnBtn);
        }
      } catch {
        editData = createEditData(texts.errorAddLater, returnBtn);
      }
      break;

    case 'delete article':
      if (!callbackObj.action) {
        editData = createEditData(`❔ Вы уверены, что хотите удалить артикул ${callbackObj.art}?`, yesNo(callbackObj.type + "?" + callbackObj.art));
      } else {
        if (callbackObj.action === 'no') {
          articleMenu = (await articleOptions(chat_id, currentArticle))
          if (articleMenu) {
            editData = createEditData(' ', articleMenu);
          } else {
            if (mainBtn) editData = createEditData(' ', mainBtn);
          }
        } else {
          await articles_db.removeSku(chat_id, currentArticle)
          if (mainBtn) editData = createEditData(`✅ Вы успешно удалили артикул ${currentArticle}`, mainBtn);
        }
      }
      break;

      case 'get all reports':
        const accessAllReports = isReportAvailable(last_report_call);
        if (accessAllReports) {
          await users_db.updateLastReportCall(chat_id);
          MS.deleteAllMessages(chat_id);
          const loadingMsg = await bot.sendMessage(chat_id, texts.loadingReports, { disable_notification: true });
      
          try {
            requestReport(chat_id, loadingMsg.message_id); 
 
          } catch (error) {
            console.error("Failed to generate report:", error);
          }
      
          // await MS.deleteMessage(chat_id, loadingMsg.message_id);
        } else {
          if (mainBtn) editData = createEditData(texts.errorGetSkuAgain, mainBtn);
        }
        break;

    case 'change time':
      try {
        const timeCallback = userCallbackData.split('?')
        const selectedTime = timeCallback[timeCallback.length-1]
  
        // если нет время в коллбэке, генерируем клавиатуру, при нажатии на время вернется тот же колбэк но уже с selectedTime
        if (!selectedTime) { 
          editData = { text: texts.chooseTime, options: { inline_keyboard: generateReportTimeButtons(userCallbackData) } }
        } else {
          await users_db.updateNotificationTime(chat_id, selectedTime);
          await articles_db.updateNotificationTime(chat_id, selectedTime)
          const timeSuccessText = `${texts.successNewTime} ${selectedTime}:00`
  
          if (userCallbackData.startsWith(CallbackData.chooseTime)) { 
            editData = createEditData(timeSuccessText + '\n\n' + texts.allReady, btn('getAllReportNow'))
          } else {
            if (mainBtn) editData = createEditData(timeSuccessText, mainBtn)
          }
        }; 
      } catch(e) {
        console.error('Error changing time: ', e)
      }
      break;

    case 'selfcost': 
      try {
        await RediceService.setUserState(chat_id, rStates.waitSelfCost + "?" + callbackObj.art)
        const currentSelfcost = (await articles_db.getArticle(chat_id, callbackObj.art)).self_cost
        editData = createEditData(texts.currentSelfcost(currentSelfcost) + texts.updateSelfcost, returnBtn);
      } catch(e) {
        editData = createEditData(texts.errorAddLater, returnBtn);
        console.error("Error processing new selfcost: ", e)
      }
      break;

    case 'stock report': 
      const accessStockReport = isReportAvailable(last_sec_report_call);
      if (accessStockReport) {
        await users_db.updateLastReportCall(chat_id, 'last_sec_report_call');
        MS.deleteAllMessages(chat_id);
        const loadingMsg = await bot.sendMessage(chat_id, texts.loadingReports, { disable_notification: true });
    
        try {
          requestStockReport(chat_id, loadingMsg.message_id); 
        } catch (error) {
          console.error("Failed to generate report:", error);
        }
    
        // await MS.deleteMessage(chat_id, loadingMsg.message_id);
      } else {
        if (mainBtn) editData = createEditData(texts.errorGetSkuAgain, mainBtn);
      }
      break;

    case 'orders report': 
      // const accessOrdersReport = isReportAvailable(last_sec_report_call);
      // if (accessStockReport) {
        // await users_db.updateLastReportCall(chat_id, 'last_sec_report_call');
        MS.deleteAllMessages(chat_id);
        const loadingMsg = await bot.sendMessage(chat_id, texts.loadingReports, { disable_notification: true });
    
        try {
          requestOrdersReport(chat_id, loadingMsg.message_id); 
        } catch (error) {
          console.error("Failed to generate report:", error);
          if (mainBtn) editData = createEditData(texts.errorGetSkuAgain, mainBtn);
        }
    
        // await MS.deleteMessage(chat_id, loadingMsg.message_id);
      // } else {
      //   if (mainBtn) editData = createEditData(texts.errorGetSkuAgain, mainBtn);
      // }
      break;

    case 'ref':
      editData = createEditData(createUserRefText(chat_id, success_refs), returnBtn);
      break;

    case 'fb':
      break;  

    default:
      if (mainBtn) await bot.sendMessage(chat_id, texts.errorResponse, { reply_markup: mainBtn, disable_notification: true })
      console.error('Error processing callback')
      break;
  }

  if (editData) {
    await MS.editMessage(chat_id, message_id, editData?.text, editData?.options, editData?.image)
  }

  return bot.answerCallbackQuery(query.id);
}

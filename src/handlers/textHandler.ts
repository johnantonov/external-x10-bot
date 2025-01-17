import { articles_db } from "../../database/models/articles";
import { users_db } from "../../database/models/users";
import { bot, MS, RediceService } from "../bot";
import { handleStartMenu, sendImageWithText } from "../components/botAnswers";
import { articleOptions, mainOptions } from "../components/buttons";
import { texts } from "../components/texts";
import { AwaitingAnswer, MessageMS, UserMsg } from "../dto/messages";
import { User } from "../dto/user";
import { rStates, ttls } from "../redis";
import { requestOrdersOrSalesReport } from "../utils/requestReport";
import { awaitingHandler } from "./awaitingHandler";

export async function handleMenuCommand(UserMsg: UserMsg, chat_id: number, text: string, msgs: MessageMS[], ref?: User['from_ref']) {
  await RediceService.deleteUserState(chat_id);
  const menu = await MS.getSpecialMsg(chat_id, 'menu');
  if (text === '/menu') {
    await MS.deleteAllNewMessages(msgs, chat_id);
  }
  return handleStartMenu(UserMsg, text as '/start' | '/menu', !!menu, menu?.message_id, ref);
}

export async function handleUserState(chat_id: number, msgs: MessageMS[], userTextMessage: UserMsg) {
  const userState = await RediceService.getUserState(chat_id);
  
  if (userState) {
    const response = await bot.sendMessage(chat_id, "Проверяем...⌛️", { disable_notification: true });
    const answer: AwaitingAnswer = await awaitingHandler(userTextMessage, userState);
    const ref = await users_db.getFromRef(chat_id)

    msgs.push({ chat_id, message_id: response.message_id, special: 'menu' });

    if (!answer.result) {
      await MS.saveMessages(msgs);
      if (answer?.type) {
        await bot.deleteMessage(chat_id, response.message_id)
        return bot.sendMessage(chat_id, answer.text, { reply_markup: mainOptions(answer.type, ref)!, disable_notification: true });
      }
      return bot.editMessageText(answer.text, { chat_id, message_id: response.message_id });
    } else {
      await RediceService.deleteUserState(chat_id);
      await MS.deleteOldAndNewMessages(chat_id, msgs);

      let newBtns;

      if (answer.type === 'waitTax') {
        await RediceService.setUserState(chat_id, 'waitTax', ttls.day)
        newBtns = mainOptions(answer.type, ref)?.inline_keyboard

      } else if (userState === rStates.waitSelfCost) {
        const article = await articles_db.getArticle(chat_id, userState?.split('?')[1])
        const articleBtns = await articleOptions(chat_id, article.article)
        if (articleBtns) newBtns = articleBtns.inline_keyboard

      } else if (userState.startsWith(rStates.waitDateForOrdersOrSalesReport) ) {
        const loadingMsg = await bot.sendMessage(chat_id, texts.loadingReports, { disable_notification: true });
        if (answer?.data?.date && answer?.data?.reportType) {
          return requestOrdersOrSalesReport(chat_id, loadingMsg.message_id, answer.data.date, answer.data.reportType); 
        } 

      } else {
        newBtns = mainOptions(answer.type, ref)?.inline_keyboard
      }

      const successResponse = await sendImageWithText(bot, chat_id, 'menu', answer.text, newBtns);
      if (successResponse) {
        await MS.saveMessage({ chat_id, message_id: successResponse.message_id, special: "menu" });
      }
    }
  }
}

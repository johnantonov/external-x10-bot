import TelegramBot, { InlineKeyboardButton, Message } from "node-telegram-bot-api";
import { SendMessageOptions } from 'node-telegram-bot-api';
import { users_db } from "../../database/models/users";
import { UserCallback, UserMsg } from "../dto/messages";
import { mainOptions } from "./buttons";
import { bot, MS, RediceService } from "../bot";
import { getPath } from "../utils/parse";
import { User, user_type } from "../dto/user";
import { images, ImagesKeys } from "../dto/images";
import { texts } from "./texts";
import { rStates, ttls } from "../redis";
import { refs_db } from "../../database/models/refs";

/**
 * handles the /start or /menu commands and manages menu rendering
 * @param {UserMsg | UserCallback} msg - the message or callback data
 * @param {'/menu' | '/start'} command - the command that triggered the menu
 * @param {boolean} [isNewMsg=true] - flag to determine if it's a new message
 * @param {number} [menuId] - optional menu message id for editing, fill if isNewMsg = false
 * @returns {Promise<void>}
 */

export async function handleStartMenu(
  msg: UserMsg | UserCallback, 
  command: '/menu' | '/start', 
  isNewMsg: boolean = true, 
  menuId?: number, 
  ref?: User['from_ref']) 
{
  try {
    const users = await users_db.select({ chat_id: msg.chat_id });
    const isUser = users.rows.length > 0;
    const user = users.rows[0];
    const chat_id = msg.chat_id

    if (!chat_id) {
      return console.error('handleStartMenu: error to get chat id:', msg, command, isNewMsg, menuId)
    }

    const img = command === '/menu' ? 'menu' : 'hello';

    if (isUser) {
      const type = user.type
      let text = ''

      if (type === 'waitTax') {
        text = texts.updateTax
        await RediceService.setUserState(chat_id, rStates.waitTax)
      } else {
        text = texts.menu
      }

      if (!isNewMsg) {
        if (!menuId) {
          await sendNewMenu(chat_id, img, text, type)
          return console.error('handleStartMenu: error to get menu id:', msg, command, isNewMsg, menuId)
        }
        const editedBtn = mainOptions(type);
        if (editedBtn) {
          return MS.editMessage(chat_id, menuId, text, editedBtn, img)
        }
      } else {
        await sendNewMenu(chat_id, img, text, type)
      }
    } else {
      await users_db.insert({ chat_id: chat_id, username: msg.username, type: 'new', from_ref: ref || null });
      if (ref) await refs_db.updateClicks(ref)
      await sendNewMenu(chat_id, img, texts.start, 'new')
      console.log('insert new user into db: ', chat_id, " ", msg.username)
    }
  } catch (error) {
    console.error('error while processing the /start command', error);
    return bot.sendMessage(msg.chat_id, texts.error, { disable_notification: true });
  }
}

/**
 * sends a photo with a caption to the user
 * @param {TelegramBot} bot - the telegram bot instance
 * @param {number} chat_id - the id of the chat to send the photo
 * @param {string} imageName - name of the image file to send
 * @param {string} [caption] - optional caption to accompany the image
 * @param {SendMessageOptions} [keyboard] 
 * @returns {Promise<Message>} 
 */
export async function sendImageWithText(bot: TelegramBot, chat_id: number, imageKey: ImagesKeys, caption?: string, keyboard?: InlineKeyboardButton[][]): Promise<Message | void> {
  try {
    const imagePath = getPath(imageKey);

    const options: SendMessageOptions = {
      parse_mode: 'HTML',
      reply_markup: {
        inline_keyboard: keyboard || []
      },
      disable_notification: true,
    };

    const answer = await bot.sendPhoto(chat_id, imagePath, { caption, ...options, parse_mode: 'HTML', disable_notification: true });
    return answer
  } catch (e) {
    return console.error('error in sendImageWithText: ', e, chat_id, imageKey, caption, keyboard)
  }
};

/**
 * sends a new menu to the user and saves the message in the message service
 * @param {number} chat_id - the id of the chat to send the menu
 * @param {string} img - the image file name to send with the menu
 * @param {string} caption - the caption to accompany the image
 * @param {user_type} userType - the type of user (used to determine button options)
 * @returns {Promise<void>}
 */
export async function sendNewMenu(chat_id: number, img: ImagesKeys, caption: string, userType: user_type) {
  const keyboard = mainOptions(userType)?.inline_keyboard
  const newMenu = await sendImageWithText(bot, chat_id, img, caption, keyboard);
  if (newMenu) {
    await MS.deleteAllMessages(chat_id)
    await MS.saveMessage({ chat_id, message_id: newMenu.message_id, special: 'menu' });
  }
}
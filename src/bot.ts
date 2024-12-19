import TelegramBot from 'node-telegram-bot-api';
import dotenv from 'dotenv';
import { setBotCommands } from './components/buttons';
import { redis } from './redis';
import { MessageMS, UserMsg } from './dto/messages';
import { MessageService } from './services/messageManipulatorService';
import { callbackHandler } from './handlers/callbackHandler';
import { handleAdminCommand } from './handlers/adminHandler';
import { handleMenuCommand, handleUserState } from './handlers/textHandler';

dotenv.config();
const token = process.env.TELEGRAM_TOKEN;

if (!token) {
  throw new Error('Token not found');
};

export const bot = new TelegramBot(token, { polling: true });
// bot.getUpdates({ offset: -1 });
export const RediceService = new redis();
export const MS = new MessageService(bot, RediceService.getClient());

setBotCommands(bot)

bot.on('callback_query', async (query: TelegramBot.CallbackQuery) => {
  if (!query.message?.chat.id) return
  return callbackHandler(query, bot, RediceService, MS);
});

const mediaGroupBuffer = new Map(); // хранилище для медиафайлов по chat_id
const commandBuffer = new Map(); // хранилище для команд (текста) по chat_id

bot.on('message', async (msg: TelegramBot.Message) => {
  const UserTextMessage = new UserMsg(msg);
  let { chat_id, text, message_id } = UserTextMessage;
  const textMsg = text ? text : msg?.caption

  if (msg.photo || msg.video) {
    if (!mediaGroupBuffer.has(chat_id)) {
      mediaGroupBuffer.set(chat_id, []);
    }
    mediaGroupBuffer.get(chat_id).push(msg);

    if (textMsg?.startsWith('/admin__')) {
      commandBuffer.set(chat_id, textMsg);
    }

    setTimeout(async () => {
      const mediaGroup = mediaGroupBuffer.get(chat_id);
      const command = commandBuffer.get(chat_id); 

      if (mediaGroup && command) {
        const mediaGroupFormatted = mediaGroup.map((message: any) => {
          if (message.photo) {
            const largestPhoto = message.photo[message.photo.length - 1];
            return {
              type: 'photo',
              media: largestPhoto.file_id,
            };
          } else if (message.video) {
            return {
              type: 'video',
              media: message.video.file_id,
            };
          }
        });

        await handleAdminCommand(chat_id, msg, bot, mediaGroupFormatted);

        mediaGroupBuffer.delete(chat_id);
        commandBuffer.delete(chat_id);
      }
    }, 2000);
    return;
  }

  if (!textMsg) {
    console.log('there are no text')
    return;
  };

  const msgs: MessageMS[] = [new MessageMS({ chat_id, message_id, content: text })];

  if (textMsg.startsWith('/start ')) { // пропуск " " для реф
    try {
      const referralId = +textMsg.split(' ')[1];
      if (referralId) {
        console.log(`User started with referral ID: ${referralId}`);
        await handleMenuCommand(UserTextMessage, chat_id, textMsg, msgs, referralId);
        return;
      } else {
        await handleMenuCommand(UserTextMessage, chat_id, textMsg, msgs);
        return console.log('Referral ID is missing or invalid');
      }
    } catch (e) {
      console.error('Error while parsing ref-code: ', e)
    }
  }

  if (['/start', '/menu'].includes(textMsg)) {
    await handleMenuCommand(UserTextMessage, chat_id, textMsg, msgs);
    return;
  }
  
  if (textMsg.startsWith('/admin__')) {
    console.log(JSON.stringify(msg))
    return handleAdminCommand(chat_id, msg, bot)
  }

  await handleUserState(chat_id, msgs, UserTextMessage);
});

console.log('Bot started!');
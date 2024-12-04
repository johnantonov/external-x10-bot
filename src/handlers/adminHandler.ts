import TelegramBot, { Message } from "node-telegram-bot-api"
// import { reportService } from "../services/reportService"
import * as dotenv from 'dotenv';
import pool from "../../database/db"
import { migrations } from "../helpers/wip-quick-fix-migration";
import { users_db } from "../../database/models/users";
import axios from "axios";
import { updateConversions } from "../utils/conversions";
import { updateCommissions } from "../utils/comissions";
import { articles_db } from "../../database/models/articles";
import { updateBoxTariffs } from "../utils/boxTariffs";
import { RediceService } from "../bot";
import { requestPrepareReports, requestRunReportService } from "../utils/requestReport";
import { BroadcastService } from "../services/broadcastService";

dotenv.config();

const helpInfo = `
/admin__send_all_message_{text msg} - отправка сообщения всем пользователям, можно прикрепить фото или видео
/admin__send_filter_message_{text msg} - отправка сообщения отфильтрованным пользователям, можно прикрепить фото или видео
/admin__forward_message - команда пересылки сообщения всем, нужно ответить на пересылаемое сообщение
/admin__forward_filter_message - команда пересылки сообщения отфильтрованным, нужно ответить на пересылаемое сообщение
/admin__run_report_service - запуск репорт сервиса на прошедший час
/admin__check_state - проверить текущий юзер статус в редисе
/admin__clear_state - очистить текущий юзер статус в редисе
/admin__prepare_report_service - запуск подготовки данных для отчета
/admin__clean_db_{tableName} - очистить таблицу в базе данных
/admin__delete_user_{id} - удалить пользователя из таблицы users
/admin__my_id - получить свой tg id
/admin__get_article_{id}_{article} - получить свой tg id
/admin__help - команды
/admin__send_all_data - отправить всю базу данных в Google Sheets
/admin__get_mp_conversions - обновить базу конверсий
/admin__get_mp_commissions - обновить базу комиссий
/admin__get_mp_tariffs - обновить базу тарифов коробов
/admin__db_migrate_{N} - запуск N-миграции БД
/admin__clear_last_report_time_{id} - очистка времени последнего отчета
/admin__clear_last_report_time_all - очистка времени последнего отчета у всех
`

export async function handleAdminCommand(chat_id: number, msg: Message, bot: TelegramBot, mediaGroup?: any) {
  try {

    const adminChatIds = process.env.ADMIN_CHAT ? process.env.ADMIN_CHAT.split(',').map(Number) : [];
    const command = msg?.text ? msg.text : msg?.caption

    if (!command) {
      return console.error(`There is no admin command`)
    }

    if (!process.env.ADMIN_CHAT) {
      return console.error(`Error to getting admins from the env`)
    }

    if (!adminChatIds.includes(chat_id)) {
      await bot.sendMessage(chat_id, 'У вас нет доступа. Запросите права администратора.')
      return console.error(`Chat id ${chat_id} does not have access.`);
    }

    const action = command.split('__')[1]
    console.log('admin handler action: ', action)

    if (action === 'run_report_service') {
      console.log('admin started report serivce')
      requestRunReportService();
    }

    if (action.startsWith('send_all_message')) {
      const message = action.split('send_all_message_')[1];
      
      if (!message) {
        await bot.sendMessage(chat_id, 'Сообщение не может быть пустым.');
        return;
      }
      try {
        if (mediaGroup) {
          await BroadcastService.sendMediaGroupToAllUsers(mediaGroup, message);
        } else {
          await BroadcastService.sendMessageToAllUsers(message);
        }
  
        await bot.sendMessage(chat_id, 'Сообщение успешно отправлено всем пользователям.');
      } catch (error) {
        console.error('Error sending message to all users: ', error);
        await bot.sendMessage(chat_id, 'Произошла ошибка при отправке сообщения.');
      }
    }

    if (action.startsWith('send_filter_message')) {
      const message = action.split('send_filter_message_')[1];
      
      if (!message) {
        await bot.sendMessage(chat_id, 'Сообщение не может быть пустым.');
        return;
      }
      try {
        if (mediaGroup) {
          await BroadcastService.sendMediaGroupToFilteredUsers(mediaGroup, message);
        } else {
          await BroadcastService.sendMessageToFilteredUsers(message);
        }
  
        await bot.sendMessage(chat_id, 'Сообщение успешно отправлено всем пользователям.');
      } catch (error) {
        console.error('Error sending message to all users: ', error);
        await bot.sendMessage(chat_id, 'Произошла ошибка при отправке сообщения.');
      }
    }

    // if (action.startsWith('create_poll')) {
    //   await BroadcastService.sendPollToAllUsers('Опрос на тему...', ['123', '234'])
    // }



    if (action === 'prepare_report_service') {
      console.log('admin started preparing report serivce')
      requestPrepareReports()
    }

    if (action === 'forward_message') {
      try {
        console.log('admin started preparing report serivce')
  
        if (!msg.reply_to_message) {
          await bot.sendMessage(chat_id, 'Ответьте на сообщение, которое вы хотите переслать.');
          return;
        }
  
        const messageId = msg.reply_to_message.message_id;

        await BroadcastService.forwardMessageToAllUsers(chat_id, messageId);
        await bot.sendMessage(chat_id, 'Сообщение успешно переслано всем пользователям.');
      } catch (error) {
        console.error('Error forwarding message by admin: ', error);
        await bot.sendMessage(chat_id, 'Произошла ошибка при пересылке сообщения.');
      }
    }

    if (action === 'forward_filter_message') {
      try {
        console.log('admin started preparing report serivce')
  
        if (!msg.reply_to_message) {
          await bot.sendMessage(chat_id, 'Ответьте на сообщение, которое вы хотите переслать.');
          return;
        }
  
        const messageId = msg.reply_to_message.message_id;

        await BroadcastService.forwardMessageToFilteredUsers(chat_id, messageId);
        await bot.sendMessage(chat_id, 'Сообщение успешно переслано всем пользователям.');
      } catch (error) {
        console.error('Error forwarding message by admin: ', error);
        await bot.sendMessage(chat_id, 'Произошла ошибка при пересылке сообщения.');
      }
    }

    if (action.startsWith('clean_db')) {
      const db = action.split('db_')[1];
      if (db) {
        pool.query(`DELETE FROM ${db}`, (err, result) => {
          if (err) {
            console.error(`Failed to delete data from ${db}:`, err);
          } else {
            console.log(`All data deleted from ${db} by admin`);
          }
        });
      } else {
        console.error('No table specified for deletion.');
      }
    }

    if (action.startsWith('delete_user')) {
      const user = action.split('delete_user_')[1];
      if (user) {
        pool.query(`DELETE FROM users WHERE chat_id = ${user}`, (err, result) => {
          if (err) {
            console.error(`Failed to delete ${user}:`, err);
          } else {
            console.log(`delete ${user} by admin`);
          }
        });
      } else {
        console.error('No table specified for deletion.');
      }
    }

    if (action.startsWith('help')) {
      await bot.sendMessage(chat_id, helpInfo)
    }

    // work in progress, now all migrations are added to the folder sql migrations and helpers/wip 
    if (action.startsWith('db_migrate')) {
      const step = +action.split('migrate_')[1];
      try {
        for (const m of migrations[step]) {
          await pool.query(m);
        }
        console.log(`Migration step ${step} completed successfully.`);
      } catch (e) {
        console.error('Error during migration process:', e);
      }
    }

    // send all data to spreadsheet db
    if (action.startsWith('send_all_data')) {
      const data = await users_db.getAllData();
      console.log('sending response with all data...')

      // Отправка запроса без обработки
      axios.post(process.env.SS_ALL_DATA_URL!, data, {
        headers: {
          'Content-Type': 'application/json',
        },
      }).then(res => {
        console.log('successfully send all data: ', res.status)
      }).catch(error => {
        console.error('Error sending all data: ', error);
      });
    }

    // get mp conversions data 
    if (action.startsWith('get_mp_conversions')) {
      console.log('start to updating');
      await updateConversions();
    }

    // get mp commissions data 
    if (action.startsWith('get_mp_commissions')) {
      console.log('start to updating');
      await updateCommissions();
    }

    if (action.startsWith('get_mp_tariffs')) {
      console.log('start to updating')
      await updateBoxTariffs();
    }

    if (action.startsWith('check_state')) {
      console.log('start to checking state')
      const state = await RediceService.getUserState(chat_id)
      await bot.sendMessage(chat_id, `${state}`);
    }

    if (action.startsWith('clear_state')) {
      console.log('start to clearing state')
      const state = await RediceService.deleteUserState(chat_id)
      await bot.sendMessage(chat_id, `${state}`);
    }

    if (action.startsWith('my_id')) {
      await bot.sendMessage(chat_id, `${chat_id}`);
    }


    // get mp commissions data 
    if (action.startsWith('clear_last_report_time')) {
      console.log('start to clearing')
      const id = action.split('time_')[1];

      if (id === 'all') {
        await users_db.clearLastReportTime()
      }

      await users_db.clearLastReportTime(+id)
    }

    if (action.startsWith('get_article')) {
      const id = action.split('_')[2]
      const article = action.split('_')[3]

      const msg = await articles_db.getArticle(+id, article)

      await bot.sendMessage(chat_id, `${JSON.stringify(msg)}`)
    }

  } catch (e) {
    console.error('error in admin handler: ' + e)
  }
}
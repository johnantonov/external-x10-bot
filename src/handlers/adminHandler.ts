import TelegramBot from "node-telegram-bot-api"
import { reportService } from "../services/reportService"
import * as dotenv from 'dotenv';
import pool from "../../database/db"
import { migrations } from "../helpers/wip-quick-fix-migration";
import { users_db } from "../../database/models/users";
import axios from "axios";
import { updateConversions } from "../utils/conversions";
import { updateCommissions } from "../utils/comissions";

dotenv.config();

const helpInfo = `
/admin__run_report_service - запуск репорт сервиса на прошедший час
/admin__prepare_report_service - запуск подготовки данных для отчета
/admin__clean_db_{tableName} - очистить таблицу в базе данных
/admin__delete_user_{id} - удалить пользователя из таблицы users
/admin__help - команды
/admin__send_all_data - отправить всю базу данных в Google Sheets
/admin__get_mp_conversions - обновить базу конверсий
/admin__get_mp_commissions - обновить базу комиссий
/admin__clear_last_report_time_{id} - очистка времени последнего отчета
/admin__clear_last_report_time_all - очистка времени последнего отчета у всех
`

export async function handleAdminCommand(chat_id: number, command: string, bot: TelegramBot) {
  try {

    const adminChatIds = process.env.ADMIN_CHAT ? process.env.ADMIN_CHAT.split(',').map(Number) : [];

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
      if (reportService) {
        reportService.run()
      }
    }
    
    if (action === 'prepare_report_service') {
      console.log('admin started preparing report serivce')
      if (reportService) {
        reportService.prepareReportData()
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

    // Отправка запроса без обработки
    axios.post(process.env.SS_ALL_DATA_URL!, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    }).catch(error => {
      console.error('Error sending all data: ', error);
    });
  }

  // get mp conversions data 
  if (action.startsWith('get_mp_conversions')) {
    console.log('start to updating')
    await updateConversions()
  }

  // get mp commissions data 
  if (action.startsWith('get_mp_commissions')) {
    console.log('start to updating')
    await updateCommissions()
  }

  if (action.startsWith('my_id')) {
    await bot.sendMessage(chat_id, `${chat_id}`)
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
    
  } catch (e) {
    console.error('error in admin handler: '+e)
  }
}
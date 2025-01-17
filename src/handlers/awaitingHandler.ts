import { AwaitingAnswer, UserMsg } from "../dto/messages";
import { rStates } from "../redis";
import { users_db } from "../../database/models/users";
import { sids_db } from "../../database/models/sids";
import dotenv from 'dotenv';
import { articles_db } from "../../database/models/articles";
import jwt from 'jsonwebtoken'; 
import { texts } from "../components/texts";
import { parseDate, parsePercent, parseSum } from "../utils/parse";
import { User, user_type } from "../dto/user";
import { checkAuth } from "../utils/auth";
import { refs_db } from "../../database/models/refs";

dotenv.config();

/**
 * handler that starting if user has any state in redis
 * @param {UserMsg} data - user message data
 * @param {string} state - user state
 */
export async function awaitingHandler(data: UserMsg, state: string) {
  if (!data.text) {
    return new AwaitingAnswer({ result: false, text: texts.errorNoText });
  }

  if (!isKey(data.text, state)) {
    return new AwaitingAnswer({ result: false, text: texts.errorFormat });
  }

  const { chat_id, text } = data;

  try {
    const handleError = (message: string, type?: user_type) => new AwaitingAnswer({ result: false, text: message, type: type });

    if (state === rStates.waitWbApiKey || state === rStates.waitNewKey) {
      try {
        const user = await users_db.getUserById(chat_id);
        const isValidKey = await checkAuth(text)

        if (!isValidKey) {
          return handleError(texts.errorValidKey, user?.type)
        }

        const oldApiKey = user?.wb_api_key;

        if (oldApiKey) {
          const oldSid = extractSidFromToken(oldApiKey);
          const newSid = extractSidFromToken(text);

          await sids_db.isUniqueSid(newSid); // проверяем есть ли у нас в бд этот sid и добавляем его если нет

          if (newSid === oldSid) {
            await users_db.updateWbApiKey(chat_id, text);
            return new AwaitingAnswer({ result: true, text: texts.updatedWbKey, type: user?.type });
          } else {
            await articles_db.removeSku(chat_id);
            await users_db.updateWbApiKey(chat_id, text);
            return new AwaitingAnswer({ result: true, text: texts.updatedWbKeyAndDeleted, type: user?.type });
          }
        } else { // если это новый пользователь, то ведем его - выставляем состояние ожидания SKU и расходов
          const sid = extractSidFromToken(text);
          const isUniqueSid = await sids_db.isUniqueSid(sid, user?.from_ref); // добавляем новый сид и проверяем его уникальность
          
          if (user?.from_ref && isUniqueSid) {
            await refs_db.updateSuccessRefs(user.from_ref)
          }

          await users_db.updateType(chat_id, 'waitSku', text);
          return new AwaitingAnswer({ result: true, text: texts.addedNewKey, type: 'waitSku' });
        }
      } catch (e) {
        console.error('Error processing add wb api key: ', e);
        return handleError(texts.error);
      }

    } else if (state.startsWith(rStates.waitSku)) {
      try {
        const lines = text.split('\n');
        const newSku = [];
    
        for (const line of lines) {
          const [sku, expense] = line.split('-').map(part => part.trim());
    
          if (!sku || isNaN(Number(sku)) || !expense || isNaN(Number(expense))) {
            return handleError(texts.errorInvalidSKUFormat); 
          }
    
          newSku.push([ Number(sku), Number(expense) ]); 
        }
    
        if (newSku.length === 0) {
          return handleError(texts.errorNoSKU);  
        }
    
        const successAdded = await articles_db.addSku(chat_id, newSku);  

        if (state === rStates.waitSkuOldUser) {
          return new AwaitingAnswer({ 
            result: successAdded > 0 ? true : false,
            text: successAdded > 0 ? texts.addedSkuOld(successAdded) : texts.errorAddNewSku,
            type: 'registered'
          });
        } 
    
        await users_db.updateType(chat_id, 'waitTax');
        return new AwaitingAnswer({ result: true, text: texts.warningFirstAddSku(successAdded) + texts.addedSku, type: 'waitTax' });
      } catch (e) {
        console.error('Error processing add sku: ', e);
        return handleError(texts.error);
      }
 
    } else if (state === rStates.waitTax) {
      try {
        const type = (await users_db.getUserById(chat_id))?.type
        const formattingTax = parsePercent(text)
        await articles_db.updateTax(chat_id, formattingTax)
        const resText = type === 'waitTax' ? texts.settedTax : texts.updatedTax
        const resType: user_type = type === 'waitTax' ? 'preregistered' : 'registered'
        return new AwaitingAnswer({ result: true, text: resText, type: resType });
      } catch (e) {
        console.error('Error processing add tax: ', e)
        return handleError(texts.error);
      }
 
      // обработка ситуации когда мы ждем от пользователя ввода себестоимости
    } else if (state.startsWith(rStates.waitSelfCost)) {
      try {
        const article = state.split('?')[1]
        const formattingCost = parseSum(text)
        await articles_db.updateSelfCost(chat_id, article, formattingCost)
        return new AwaitingAnswer({ result: true, text: texts.addedSelfcost, type: 'registered' });
      } catch (e) {
        console.error('Error processing update self cost: ', e)
        return handleError(texts.error);
      }

    // обработка ситуации когда мы ждем от пользователя ввода даты для отчета
    } else if (state.startsWith(rStates.waitDateForOrdersOrSalesReport)) {
      try {
        const date = parseDate(text)
        if (!date) return handleError(texts.errorParseDate + texts.getOrdersReportText)
        const reportType = state.split('?')[1]
        return new AwaitingAnswer({ 
          result: true, 
          text: texts.loadingReports, 
          type: 'registered', 
          data: { date: date, reportType: reportType }
        });
      } catch (e) {
        console.error('Error processing orders report in awaiting handler: ', e)
        return handleError(texts.error);
      }
    } else if (state === rStates.waitRef) {
      try {
        const ref = text.split('/').pop() ;
        await refs_db.insert({ chat_id, ref })
        return new AwaitingAnswer({ result: true, text: texts.successRefConnectionText(ref as User['from_ref']), type: 'registered' });
      } catch (e) {
        console.error('Error processing ref program in awaiting handler: ', e)
        return handleError(texts.error);
      }
    }

    return handleError(texts.errorDoAgain);
  } catch (e) {
    console.error('Error in awaiting handler: ' + e)
    return new AwaitingAnswer({ result: false, text: texts.errorDoAgain })
  }
}

/**
 * check format 
 * @param {string} text - key text
 * @param {string} state - user state from redis
 */
export function isKey(text: string, state: string): Boolean {
  if (state === rStates.waitWbApiKey || state === rStates.waitNewKey) {
    return /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{100,}$/.test(text);
  }

  if (state.startsWith(rStates.waitTax)) {
    return /^(\d+([.,]\d+)?|[.,]?\d+)$/.test(text);
  }

  if (state === rStates.waitRef) {
    return text.startsWith('https://')
  }

  return true;
}

/**
 * Extract sid from the JWT token
 * @param {string} token - JWT token
 * @returns {string} - sid value
 */
export function extractSidFromToken(token: string): string {
  try {
    const decoded: any = jwt.decode(token);
    return decoded?.sid || '';
  } catch (e) {
    console.error('Ошибка декодирования JWT токена: ', e);
    return '';
  }
}
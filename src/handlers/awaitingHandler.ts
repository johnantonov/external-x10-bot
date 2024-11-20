import { AwaitingAnswer, UserMsg } from "../dto/messages";
import { rStates } from "../redis";
import { users_db } from "../../database/models/users";
import dotenv from 'dotenv';
import { articles_db } from "../../database/models/articles";
import jwt from 'jsonwebtoken'; 
import { texts } from "../components/texts";

dotenv.config();

/**
 * handler that starting if user has any state in redis
 * @param {UserMsg} data - user message data
 * @param {string} state - user state
 */
export async function awaitingHandler(data: UserMsg, state: string) {
  if (!data.text) {
    return new AwaitingAnswer({ result: false, text: "Текст отсутствует" });
  }

  if (!isKey(data.text, state)) {
    return new AwaitingAnswer({ result: false, text: "Введенные данные не соответствуют ожидаемому формату" });
  }

  const { chat_id, text } = data;

  try {
    const handleError = (message: string) => new AwaitingAnswer({ result: false, text: message });

    if (state === rStates.waitWbApiKey || state === rStates.waitNewKey) {
      try {
        const user = await users_db.getUserById(chat_id);
        const oldApiKey = user?.wb_api_key;

        if (oldApiKey) {
          const oldSid = extractSidFromToken(oldApiKey);
          const newSid = extractSidFromToken(text);

          if (newSid === oldSid) {
            await users_db.updateWbApiKey(chat_id, text);
            return new AwaitingAnswer({ result: true, text: texts.updatedWbKey, type: user?.type });
          } else {
            await articles_db.removeArticle(chat_id);
            await users_db.updateWbApiKey(chat_id, text);
            return new AwaitingAnswer({ result: true, text: texts.updatedWbKeyAndDeleted, type: user?.type });
          }
        } else {
          await users_db.updateTypeAndKey(chat_id, text);
          return new AwaitingAnswer({ result: true, text: texts.addedNewKey, type: 'registered' });
        }
      } catch (e) {
        console.error('Error processing add wb api key: ', e);
        return handleError("Возникла ошибка, попробуйте позже.");
      }

    } else if (state.startsWith(rStates.waitArticle)) {
      try {
        const lines = text.split('\n');
      
        const newArticles = lines
          .flatMap(line => line.split(',')) 
          .map(article => article.trim())  
          .filter(article => article !== ''); 
        
        if (newArticles.length === 0) {
          return handleError("Список артикулов пуст. Пожалуйста, проверьте ввод.");
        }
      
        await articles_db.addArticles(chat_id, newArticles);
      
        return new AwaitingAnswer({ result: true, text: texts.addedArticle, type: 'article' });
      } catch (e) {
        console.error('Ошибка в процессе добавления артикула: ', e);
        return handleError("Возникла ошибка, попробуйте еще раз.");
      }

    } else if (state.startsWith(rStates.waitMark)) {
      try {
        const article = state.split('?')[1]
        console.log(chat_id, article, +text)
        await articles_db.updateMark(chat_id, article, +text)
        return new AwaitingAnswer({ result: true, text: "✅ Данные о маркировке сохранены" });
      } catch (e) {
        console.error('Ошибка в процессе сохранения маркировки: ', e)
        return handleError("Возникла ошибка, попробуйте позже.");
      }

    } else if (state.startsWith(rStates.waitSelfCost)) {
      try {
        const article = state.split('?')[1]
        await articles_db.updateSelfCost(chat_id, article, +text)
        return new AwaitingAnswer({ result: true, text: "✅ Себестоимость товара сохранена" });
      } catch (e) {
        console.error('Ошибка в процессе обновления себестоимости: ', e)
        return handleError("Возникла ошибка, попробуйте позже.");
      }

    } else if (state.startsWith(rStates.waitTax)) {
      try {
        const article = state.split('?')[1]
        await articles_db.updateTax(chat_id, article, +text)
        return new AwaitingAnswer({ result: true, text: "✅ Налог сохранен" });
      } catch (e) {
        console.error('Ошибка в процессе сохранения налога: ', e)
        return handleError("Возникла ошибка, попробуйте позже.");
      }
    }

    return handleError("Возникла ошибка, попробуйте еще раз.");
  } catch (e) {
    console.error('Error in awaiting handler: ' + e)
    return new AwaitingAnswer({ result: false, text: "Возникла ошибка, попробуйте еще раз." })
  }
}

/**
 * check format 
 * @param {string} text - key text
 * @param {string} state - user state from redis
 */
export function isKey(text: string, state: string): Boolean {
  if (state === rStates.waitWbApiKey) {
    return /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{50,}$/.test(text);
  }

  if (state.startsWith(rStates.waitTax)) {
    return /^(\d+([.,]\d+)?|[.,]?\d+)$/.test(text);
  }

  if ([rStates.waitSelfCost, rStates.waitMark].includes(state.split('?')[0])) {
    return /^\d+$/.test(text);
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
    console.log(JSON.stringify(decoded))
    return decoded?.sid || '';
  } catch (e) {
    console.error('Ошибка декодирования JWT токена: ', e);
    return '';
  }
}
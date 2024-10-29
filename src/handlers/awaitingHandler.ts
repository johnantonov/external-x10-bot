import axios from "axios";
import { AwaitingAnswer, UserMsg } from "../dto/messages";
import { redis, rStates } from "../redis";
import { users_db } from "../../database/models/users";
import dotenv from 'dotenv';
import { articles_db } from "../../database/models/articles";
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
    
    if (state === rStates.waitWbApiKey) {
      try {
        await users_db.updateType(chat_id, text);
        return new AwaitingAnswer({ result: true, text: "✅ Вы добавили WB ключ", type: 'registered'});
      } catch (e) {
        console.error('Ошибка в процессе добавления ключа вб: ', e)
        return handleError("Возникла ошибка, попробуйте еще раз.");
      }
    } else if (state.startsWith(rStates.waitArticleTitle)) {
      try {
        const article = state.split('?')[1]
        await articles_db.updateTitle(chat_id, article, text)
        return new AwaitingAnswer({ result: true, text: "✅ Артикул переименован" });
      } catch (e) {
        console.error('Ошибка в процессе переименования ключа: ', e)
        return handleError("Возникла ошибка, попробуйте еще раз.");
      }
    } else if (state.startsWith(rStates.waitArticle)) {
      try {
        await articles_db.addArticle({ chat_id, article: text, is_active: true })
        return new AwaitingAnswer({ result: true, text: "✅ Вы добавили артикул", type: 'article' });
      } catch (e) {
        console.error('Ошибка в процессе добавления артикула: ', e)
        return handleError("Возникла ошибка, попробуйте еще раз.");
      }
    } else if (state === rStates.waitNewKey) {
      try {
        const type = (await users_db.getUserById(chat_id))?.type
        await users_db.updateWb_api_key(chat_id, text)
        return new AwaitingAnswer({ result: true, text: "✅ Вы обновили WB ключ", type });
      } catch (e) {
        console.error('Ошибка в процессе добавления ключа вб: ', e)
        return handleError("Возникла ошибка, попробуйте позже.");
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
        console.log(state)
        const article = state.split('?')[1]
        console.log(article)
        await articles_db.updateSelf_cost(chat_id, article, +text)
        console.log(+text)
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
    } else if (state.startsWith(rStates.waitAcquiring)) {
      try {
        const article = state.split('?')[1]
        await articles_db.updateAcquiring(chat_id, article, +text)
        return new AwaitingAnswer({ result: true, text: "✅ Эквайринг сохранен" });
      } catch (e) {
        console.error('Ошибка в процессе сохранения эквайринга: ', e)
        return handleError("Возникла ошибка, попробуйте позже.");
      }
    }

    return handleError("Возникла ошибка, попробуйте еще раз.");
  } catch (e) {
    console.error('Error in awaiting handler: '+e)
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

  if (state === rStates.waitArticleTitle.split('?')[0]) {
    return /^\d{6,}$/.test(text);
  }

  if ([rStates.waitSelfCost, rStates.waitMark, rStates.waitTax].includes(state.split('?')[0])) {
    return /^\d+$/.test(text);
  }

  return true
}

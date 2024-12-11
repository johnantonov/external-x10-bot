export const createUserRefText = (chat_id: number | string, refCounts: number | null) => {
  return `
<b>Реферальная программа</b>

Ваша реферальная ссылка: 
https://t.me/${process.env.BOT_USERNAME}?start=${chat_id}

Приглашенных пользователей: ${ refCounts ? refCounts : 0 }
  `;
}
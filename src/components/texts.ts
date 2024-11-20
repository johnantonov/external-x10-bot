import { config } from "../config/config"
import { rStates } from "../redis"

export const texts = {
  addArticles: `🔢 Отправьте артикулы через запятую или в столбик \n\nНапример: "1111111, 222222, 333333"\nили: \n"1111111\n2222222\n333333"\n\n❗️Вы можете добавить максимум до ${config.maxArticles} артикулов`,
  addedNewKey: '✅ Вы добавили новый WB ключ',
  updatedWbKey: "✅ Вы обновили WB ключ",
  updatedWbKeyAndDeleted: "✅ Вы обновили ключ и удалили старые артикулы",
  addedArticle: "✅ Вы добавили артикул",

  chooseTime: 'Выберите время по МСК, когда вам будет удобно получать отчеты:',
  successNewTime: `✅ Вы будете получать отчёт ежедн~евно в`,

  chooseArt: '🔢 Выберите артикул.',
  sendKey: '🔑 Отправьте ваш ключ :)',

  warningChangeKey: `❗️ Если вы подключите ключ от другого личного кабинета, то перестанете получать отчеты по текущим артикулам.
        \nДля продолжения отправьте в чат обновленный ключ или ключ от другого кабинета`,

  loadingReports: 'Подготавливаем отчеты ⌛️',

  errorMaxArts: `❗️ Вы можете добавить максимум ${config.maxArticles}.`,
  errorGetArt: '❗️Возникла ошибка при получении артикула. Попробуйте позже',
  errorAddLater: "❗️Возникла ошибка, попробуйте добавить информацию позже",
  errorResponse: 'Возникла ошибка при обработке ответа!',
  errorGetArtAgain: `Вы получили отчет недавно, попробуйте позже`,
}

export const getStateMessage = (state: string) => {
  const message = (text: string) => '📝 Укажите ' + text + ' в ответном сообщении.'

  switch (state) {
    case rStates.waitMark:
      return message('стоимость маркировки')
    case rStates.waitTax:
      return message('размер налога') + " Для ответа подойдет любой из следующих форматов (примеры для налога 6%): \n\n<b>6</b>\n<b>0,06</b>\n<b>0.06</b>"
    case rStates.waitSelfCost:
      return message('себестоимость товара')
    default:
      break;
  }
}
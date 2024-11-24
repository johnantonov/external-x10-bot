import { config } from "../config/config"
import { rStates } from "../redis"

const newSku = `
Для удобства мы реализовали внесение SKU и расходов по ним одновременно. 

Расходы по SKU - <i>это себестоимость + маркировка товара (наклейки) + доставка до склада маркетплейса. Все расходы надо рассчитать на 1 единицу товара. Например.
Себестоимость - 550р
Оплатили фуллфилменту (маркировка + доставка) - 100р. на 1 единицу товара
Итоговая расход на 1 товар - 650р.</i>

Пришлите номера SKU из вашего кабинета и расходы по ним в столбик, в формате SKU - расход:
1111111 - 540
2222222 - 230
3333333 - 1125

❗️Вы можете добавить максимум до 5 артикулов
`

export const texts = {
  start: `Телеграм бот от Команды 10X\n\nПолучайте ежедневные отчеты по прибыли и ключевым показателям ваших товаров`,
  menu: " ", 

  addSku: newSku,
  addedNewKey: '✅ Вы добавили верный WB ключ\n\nВ 1 очередь необходимо внести список SKU для отслеживания:',
  updatedWbKey: "✅ Вы обновили WB ключ",
  updatedWbKeyAndDeleted: "✅ Вы обновили ключ и удалили старые артикулы",
  addedSkuOld: (count: number) => `✅ ${count} SKU и расходы по ним внесены`,
  addedSelfcost: `✅ Расходы внесены`,
  addedSku: "✅ SKU и расходы по ним внесены.\n\n📝 Укажите размер налога в ответном сообщении. Для ответа подойдет любой из следующих форматов (примеры для налога 6%):\n6\n0,06\n0.06",
  settedTax: "Отлично, все расходы внесены!\n\nВыберете удобное время получения автоматического отчета:",
  updateTax: "📝 Укажите размер налога в ответном сообщении. Для ответа подойдет любой из следующих форматов (примеры для налога 6%):\n6\n0,06\n0.06",
  updatedTax: "✅Отлично, вы обновили налог!",
  allReady: "Всё настроено! Получите свой первый отчет:",
  updateSelfcost: `📝 Укажите расходы товара в ответном сообщении\n\nРасходы по SKU - это себестоимость + маркировка товара (наклейки) + доставка до склада маркетплейса. Все расходы надо рассчитать на 1 единицу товара. Например.\nСебестоимость - 550р\nОплатили фуллфилменту (маркировка + доставка) - 100р. на 1 единицу товара\nИтоговая расход на 1 товар - 650р.`,

  chooseTime: 'Выберите время по МСК, когда вам будет удобно получать отчеты:',
  successNewTime: `✅ Вы будете получать отчёт ежедневно в`,

  chooseSku: '🔢 Выберите артикул',
  sendKey: '<b>Для начала работы привяжите свой API ключ</b>\n\nПереходите в <a href="https://seller.wildberries.ru/supplier-settings/access-to-api">Настройки API</a> - Создать новый токен - Имя токена любое, например "10X" - выбрать абсолютно все галочки и установить флажок "только на чтение".\n\nГотовый ключ пришлите в этот чат:',
  warningChangeKey: `❗️ Если вы подключите ключ от другого личного кабинета, то перестанете получать отчеты по текущим артикулам.\n\nДля продолжения отправьте в чат обновленный ключ или ключ от другого кабинета.n\nПереходите в <a href="https://seller.wildberries.ru/supplier-settings/access-to-api">Настройки API</a> - Создать новый токен - Имя токена любое, например "10X" - выбрать абсолютно все галочки и установить флажок "только на чтение".\n\nГотовый ключ пришлите в этот чат:`,

  loadingReports: 'Подготавливаем отчеты ⌛️',

  error: 'Произошла ошибка. Попробуйте позже',
  errorMaxSku: `❗️ Вы можете добавить максимум ${config.maxSku}.`,
  errorGetSku: '❗️Возникла ошибка при получении артикула. Попробуйте позже',
  errorAddLater: "❗️Возникла ошибка, попробуйте добавить информацию позже",
  errorResponse: 'Возникла ошибка при обработке ответа!',
  errorAddNewSku: 'Возникла ошибка при добавлении SKU. Возможно, вы пытаетесь добавить существующий артикул.\nПроверьте данные и попробуйте еще раз',
  errorGetSkuAgain: `Вы получили отчет недавно, попробуйте позже`,
  errorFormat: "Введенные данные не соответствуют ожидаемому формату",
  errorNoText: "Текст отсутствует",
  errorNoSKU: "Список артикулов пуст. Пожалуйста, проверьте ввод.",
  errorDoAgain: "Возникла ошибка, попробуйте еще раз.",
  errorInvalidSKUFormat: "Неверный формат данных. Пришлите номера SKU из вашего кабинета и расходы по ним в столбик, в формате SKU - расход:\n\n1111111 - 540\n2222222 - 230\n3333333 - 1125",

  FAQ: 'FAQ',
  faq_1: `<b>Как получить полный отчет по всем SKU?</b>\n\nПодключить нашу полную Систему 10X: @tenXsupport_bot\n\n1. Всё тянется автоматом с вашего кабинета, обновление раз в 1 час \n2. Удобная РНП - за 2 графика я понимаю что с прибылью и ДРР\n3. Видно вообще всё - 55 показателей карточки в разрезе каждого дня\n4. Любая сегментация: по кабинетам, по категориям, по тегам\n5. Расчёт цены заказа и корзин по Джему\n\n<b>В общем решает 2 задачи:</b>\n📈 Растит чистую прибыль кабинета\n🤯 Устраняет хаос в работе менеджеров\n\n👉<b>Бесплатный доступ на 3 дня:</b> @tenXsupport_bot`,
  faq_2: `TEST`,
  faq_3: `<b>Почему отчёт только за вчера?</b>\n\nВБ отдает данные с опозданием в несколько часов и верные данные подгружаются только на вчерашний день. Именно поэтому даже если вы в 23:50 сегодня запросите отчет, то прийдет отчет за вчера.`,
  faq_4: `<b>Как считается прибыль?</b>\n\nВсё прибыль мы считаем прогнозную, на основе заказов, а не фактических выкупов. Это позволяет понять верные ли вы действия сделали сегодня, и в случае ошибки быстро поменять стратегию.\n\nНапример менеджер зашел в акцию, не согласовав с селлером, и кабинет получил увеличение продаж. Селлер доволен, менеджер тем более. Но только через 2 недели как будете считать прибыль от фин. отчетов, увидите что сработали в сильный минус. <u>А в нашей системе вы увидите минус в этот же день</u>.\n\nРасчетные цифры всегда будут отличаться от факта. Когда вы считаете прибыль на основе финансового отчета - вы считаете от реальных выкупов. Но тогда все данные для управления действиями на сегодня будут приходить с задержкой 1-2 недели, пока придут выкупы.\n\nВ расчетах учитываем расходы на товар, маркировку, логистику, % выкупа, среднюю приёмку товара, коэффициенты склада, налоги.`,
  faq_5: `<b>Что такое КРРР?</b>\n\nКРРР - коэффициент рентабельности рекламных расходов.  Он показывает, какая доля прибыли остаётся после вычета рекламных расходов относительно общей прибыли.\n\nПрибыль с ДРР / Прибыль до ДРР`,
}




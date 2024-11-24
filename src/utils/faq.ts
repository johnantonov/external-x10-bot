import { CallbackData, faqButtons, Options, returnFaq } from "../components/buttons";
import { texts } from "../components/texts";
import { btn } from "./buttons";

export const getFaqData = (callbackData: string): [string, Options["reply_markup"]] => {
  if (callbackData === CallbackData.faq) return [texts.FAQ, btn(Object.keys(faqButtons), faqButtons)];

  const returnBtn = returnFaq()

  if (callbackData === CallbackData.faq_1) return [texts.faq_1, returnBtn];
  if (callbackData === CallbackData.faq_2) return [texts.faq_2, returnBtn];
  if (callbackData === CallbackData.faq_3) return [texts.faq_3, returnBtn];
  if (callbackData === CallbackData.faq_4) return [texts.faq_4, returnBtn];

  return [texts.faq_5, returnBtn];
}
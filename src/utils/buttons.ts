import { faqButtons, mainButtons, Options } from "../components/buttons";
import { user_type } from "../dto/user";

export function getStartedButton(type: user_type) {
  if (type === 'new') {
    return new Options([[mainButtons.registrateUser]]).reply_markup; 
  };

  if (type === 'waitSku') {
    return new Options([[mainButtons.newSku]]).reply_markup; 
  };

  if (type === 'preregistered') {
    return new Options([
      [mainButtons.chooseTime],
      [mainButtons.timeLater]
    ]).reply_markup; 
  }

  return null;
}

export const btn = (buttonKeys: string[] | string, source: Record<string, any> = mainButtons) => {
  if (!Array.isArray(buttonKeys)) buttonKeys = [buttonKeys];
  const buttons = buttonKeys.map(key => [source[key]]);
  return new Options(buttons).reply_markup;
}
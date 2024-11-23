import { mainButtons, Options } from "../components/buttons";
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

export const btn = (
  buttonKeys: keyof typeof mainButtons | Array<keyof typeof mainButtons> | Record<string, any>,
  buttonSource: Record<string, any> = mainButtons
) => {
  if (typeof buttonKeys === 'object' && !Array.isArray(buttonKeys)) {   // если buttonKeys - объект, то получаем его ключи
    buttonKeys = Object.keys(buttonKeys) as Array<keyof typeof buttonSource>;
  }

  if (!Array.isArray(buttonKeys)) {  // если передано одно значение, делаем его массивом
    buttonKeys = [buttonKeys];
  }

  // Создаем кнопки из соответствующего источника (mainButtons или другого объекта)
  const buttons = buttonKeys.map((key: any) => buttonSource[key]);

  return new Options([buttons]).reply_markup;
};
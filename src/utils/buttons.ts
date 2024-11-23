import { mainButtons, Options } from "../components/botButtons";
import { user_type } from "../dto/user";

export function getStartedButton(type: user_type) {
  if (type === 'new') {
    return new Options([[mainButtons.registrateUser]]).reply_markup; 
  };

  if (type === 'waitSku') {
    return new Options([[mainButtons.newSku]]).reply_markup; 
  };

  return null;
}
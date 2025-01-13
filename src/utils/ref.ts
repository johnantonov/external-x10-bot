import { refs_db } from "../../database/models/refs";
import { RediceService } from "../bot";
import { texts } from "../components/texts";
import { User } from "../dto/user";
import { rStates } from "../redis";

export const processUserRef = async (chat_id: number, from_ref?: User['from_ref']) => {
  const ref = await refs_db.checkRef(chat_id);
  if (ref?.ref) {
    return texts.getRefInfoText(ref.ref, ref.success_refs, ref.clicks);
  } else {
    await RediceService.setUserState(chat_id, rStates.waitRef);
    return texts.getNewRefText(from_ref);
  }
};
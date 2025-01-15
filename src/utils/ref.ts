import pool from "../../database/db";
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

export const getRefProgramStats = async () => {
  try {
    const query = `
      SELECT 
        u.chat_id, u.fullname, u.username, u.from_ref, u.api_reg_at, u.added_at
      FROM users u
      WHERE u.from_ref IS NOT NULL
      AND (u.added_at >= NOW() - INTERVAL '30 minutes' OR u.api_reg_at >= NOW() - INTERVAL '30 minutes')
    `;

    const usersData: User[] = (await pool.query(query)).rows;
    const result = {
      chat_id: [] as number[],
      fullname: [] as (string | null)[],
      username: [] as (string | null)[],
      invited_chat_id: [] as number[],
      invited_fullname: [] as (string | null)[],
      invited_username: [] as (string | null)[],
      is_unique_sid: [] as boolean[],
      time: [] as (string | null)[]
    };

    for (const user of usersData) {
      const { chat_id, fullname, username, from_ref, api_reg_at } = user;

      result.invited_chat_id.push(chat_id);
      result.invited_fullname.push(fullname || null);
      result.invited_username.push(username || null);
      result.is_unique_sid.push(api_reg_at ? true : false);

      const refQuery = `
        SELECT chat_id 
        FROM refs  
        WHERE ref = $1
      `;
      const refData = await pool.query(refQuery, [from_ref]);

      if (refData.rows.length > 0) {
        const inviterChatId = refData.rows[0].chat_id;

        const inviterQuery = `
          SELECT chat_id, fullname, username
          FROM users
          WHERE chat_id = $1
        `;
        const inviterData = await pool.query(inviterQuery, [inviterChatId]);

        if (inviterData.rows.length > 0) {
          const inviter = inviterData.rows[0];
          result.chat_id.push(inviter.chat_id );
          result.fullname.push(inviter.fullname || null);
          result.username.push(inviter.username || null);
        } 
      } 
      
      result.time.push(user.api_reg_at || user.added_at || null);
    }

    return result;

  } catch (error) {
    console.error('Error fetching referral stats:', error);
    return null;
  }
};
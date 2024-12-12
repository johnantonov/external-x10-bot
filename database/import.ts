import { readFileSync } from "fs";
import { users_db } from "./models/users";
import { resolve } from "path";

export async function upsertUsersFromJson(usersData) {
  for (const userData of usersData) {
    const uniqueColumns = ['chat_id'];
    await users_db.update('chat_id', userData.chat_id, userData, uniqueColumns);
  }
}

export async function startImport() {
  const filePath = resolve(__dirname, '../../users_oldData.json');
  const jsonData = JSON.parse(readFileSync(filePath, 'utf-8'));
  upsertUsersFromJson(jsonData);
}


import { users_db } from "./models/users";
import { articles_db } from "./models/articles";
import { sids_db } from "./models/sids";


export async function startImport() {
  const importData = usersData;
  console.log('length:', importData.length)

  for (const data of importData) {
    // await sids_db.upsertSidFromJson(data);
  }
}

const usersData = [
  1
]
import { users_db } from "./models/users";

export async function upsertUsersFromJson(usersData:any) {
  for (const userData of usersData) {
    const uniqueColumns = ['chat_id'];
    await users_db.update('chat_id', userData.chat_id, userData, uniqueColumns);
  }
}

export async function startImport() {
  const jsonData = json;
  await upsertUsersFromJson(jsonData);
}

const json = [
  {
    "chat_id": 179730539,
    "username": "aka_basen",
    "wb_api_key": "eyJhbGciOiJFUzI1NiIsImtpZCI6IjIwMjQxMTE4djEiLCJ0eXAiOiJKV1QifQ.eyJlbnQiOjEsImV4cCI6MTc0OTAwODM5NiwiaWQiOiIwMTkzOGQyZC05OWY5LTc4NDYtYTBkNy04ZTUwN2NmNTlmZmMiLCJpaWQiOjEzNzMwMTM2Miwib2lkIjozOTcxMzMxLCJzIjoxMDczNzQ5NzU4LCJzaWQiOiJlNDFiN2UxNy1lMzM0LTQ0NjEtYTlkNi1iNzJkNmVkMjI4ODkiLCJ0IjpmYWxzZSwidWlkIjoxMzczMDEzNjJ9.GQjaLnx1EL-vNXPOB1GxVrs0HV7tRfCEKqClEJtBoiLIi1bDL1F2fUS8sgU_C95dy-n3ij38ytH0f2WjpEJm-w",
    "type": "registered",
    "tax": 0,
    "notification_time": 10,
    "added_at": "2024-12-03 15:38:54.345564",
    "last_report_call": "2024-12-07 08:09:32.973",
    "last_sec_report_call": "2024-12-12 06:10:20.162",
    "api_reg_at": null,
    "success_refs": null,
    "from_ref": null
  },

]
import { users_db } from "./models/users";
import { articles_db } from "./models/articles";


export async function startImport() {
  const articlesData = json;
  for (const data of articlesData) {
    await articles_db.upsertArticleFromJson(data);
  }
}

const json = [
  {
    "article": "174526939",
    "chat_id": 981744819,
    "wb_api_key": "eyJhbGciOiJFUzI1NiIsImtpZCI6IjIwMjQxMTE4djEiLCJ0eXAiOiJKV1QifQ.eyJlbnQiOjEsImV4cCI6MTc0ODQ3MTgzMSwiaWQiOiIwMTkzNmQzMi00NmYwLTc4ZDMtYTMyZC0zZGY5ZjNjY2I3NGUiLCJpaWQiOjIxMDUzMzA4LCJvaWQiOjU4MzIxLCJzIjo2NCwic2lkIjoiMDdiNGZmZDQtNDA0MC01OWQ2LTg5NDMtMmRhYmE1MDQyYmViIiwidCI6ZmFsc2UsInVpZCI6MjEwNTMzMDh9.WVjHSZU5GXfVQ_p-PyJSrSYJUTcexHBH5rIKMP4az5W4-gTI5Yu8fqc1oN3hQB1JvwtKIkbgaaQZUSY2X3iRAg",
    "notification_time": 13,
    "self_cost": 742,
    "marketing_cost": {
      "2024-11-13": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-14": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-15": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-16": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-17": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-18": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-19": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-20": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-21": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-22": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-23": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-24": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-25": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-26": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-27": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-28": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-29": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-30": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-01": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-02": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-03": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-04": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-05": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-06": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-07": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-08": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-09": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-10": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-11": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-12": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      }
    },
    "sales": {},
    "other_metricks": {},
    "order_info": {},
    "tax": 0,
    "percent_buys": null,
    "percent_mp": null,
    "price_before_spp": null,
    "logistics": 549,
    "storage": 3,
    "size": {
      "width": 38,
      "height": 15,
      "length": 60,
      "isValid": true,
      "literSize": 34.2
    },
    "vendor_code": null
  },
  {
    "article": "154168125",
    "chat_id": 981744819,
    "wb_api_key": "eyJhbGciOiJFUzI1NiIsImtpZCI6IjIwMjQxMTE4djEiLCJ0eXAiOiJKV1QifQ.eyJlbnQiOjEsImV4cCI6MTc0ODQ3MTgzMSwiaWQiOiIwMTkzNmQzMi00NmYwLTc4ZDMtYTMyZC0zZGY5ZjNjY2I3NGUiLCJpaWQiOjIxMDUzMzA4LCJvaWQiOjU4MzIxLCJzIjo2NCwic2lkIjoiMDdiNGZmZDQtNDA0MC01OWQ2LTg5NDMtMmRhYmE1MDQyYmViIiwidCI6ZmFsc2UsInVpZCI6MjEwNTMzMDh9.WVjHSZU5GXfVQ_p-PyJSrSYJUTcexHBH5rIKMP4az5W4-gTI5Yu8fqc1oN3hQB1JvwtKIkbgaaQZUSY2X3iRAg",
    "notification_time": 13,
    "self_cost": 763,
    "marketing_cost": {
      "2024-11-13": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-14": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-15": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-16": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-17": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-18": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-19": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-20": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-21": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-22": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-23": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-24": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-25": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-26": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-27": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-28": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-29": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-30": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-01": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-02": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-03": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-04": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-05": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-06": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-07": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-08": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-09": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-10": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-11": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-12": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      }
    },
    "sales": {},
    "other_metricks": {},
    "order_info": {},
    "tax": 0,
    "percent_buys": null,
    "percent_mp": null,
    "price_before_spp": null,
    "logistics": 549,
    "storage": 3,
    "size": {
      "width": 38,
      "height": 15,
      "length": 60,
      "isValid": true,
      "literSize": 34.2
    },
    "vendor_code": null
  },
  {
    "article": "223621857",
    "chat_id": 981744819,
    "wb_api_key": "eyJhbGciOiJFUzI1NiIsImtpZCI6IjIwMjQxMTE4djEiLCJ0eXAiOiJKV1QifQ.eyJlbnQiOjEsImV4cCI6MTc0ODQ3MTgzMSwiaWQiOiIwMTkzNmQzMi00NmYwLTc4ZDMtYTMyZC0zZGY5ZjNjY2I3NGUiLCJpaWQiOjIxMDUzMzA4LCJvaWQiOjU4MzIxLCJzIjo2NCwic2lkIjoiMDdiNGZmZDQtNDA0MC01OWQ2LTg5NDMtMmRhYmE1MDQyYmViIiwidCI6ZmFsc2UsInVpZCI6MjEwNTMzMDh9.WVjHSZU5GXfVQ_p-PyJSrSYJUTcexHBH5rIKMP4az5W4-gTI5Yu8fqc1oN3hQB1JvwtKIkbgaaQZUSY2X3iRAg",
    "notification_time": 13,
    "self_cost": 376,
    "marketing_cost": {
      "2024-11-13": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-14": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-15": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-16": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-17": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-18": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-19": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-20": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-21": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-22": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-23": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-24": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-25": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-26": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-27": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-28": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-29": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-30": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-01": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-02": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-03": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-04": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-05": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-06": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-07": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-08": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-09": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-10": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-11": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-12": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      }
    },
    "sales": {},
    "other_metricks": {},
    "order_info": {},
    "tax": 0,
    "percent_buys": null,
    "percent_mp": null,
    "price_before_spp": null,
    "logistics": 140,
    "storage": 0,
    "size": {
      "width": 26,
      "height": 8,
      "length": 31,
      "isValid": true,
      "literSize": 6.448
    },
    "vendor_code": null
  },
  {
    "article": "165114914",
    "chat_id": 981744819,
    "wb_api_key": "eyJhbGciOiJFUzI1NiIsImtpZCI6IjIwMjQxMTE4djEiLCJ0eXAiOiJKV1QifQ.eyJlbnQiOjEsImV4cCI6MTc0ODQ3MTgzMSwiaWQiOiIwMTkzNmQzMi00NmYwLTc4ZDMtYTMyZC0zZGY5ZjNjY2I3NGUiLCJpaWQiOjIxMDUzMzA4LCJvaWQiOjU4MzIxLCJzIjo2NCwic2lkIjoiMDdiNGZmZDQtNDA0MC01OWQ2LTg5NDMtMmRhYmE1MDQyYmViIiwidCI6ZmFsc2UsInVpZCI6MjEwNTMzMDh9.WVjHSZU5GXfVQ_p-PyJSrSYJUTcexHBH5rIKMP4az5W4-gTI5Yu8fqc1oN3hQB1JvwtKIkbgaaQZUSY2X3iRAg",
    "notification_time": 13,
    "self_cost": 450,
    "marketing_cost": {
      "2024-11-13": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-14": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-15": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-16": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-17": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-18": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-19": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-20": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-21": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-22": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-23": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-24": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-25": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-26": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-27": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-28": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-29": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-30": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-01": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-02": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-03": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-04": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-05": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-06": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-07": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-08": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-09": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-10": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-11": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-12": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      }
    },
    "sales": {},
    "other_metricks": {},
    "order_info": {},
    "tax": 0,
    "percent_buys": null,
    "percent_mp": null,
    "price_before_spp": null,
    "logistics": 153,
    "storage": 0,
    "size": {
      "width": 29,
      "height": 7,
      "length": 36,
      "isValid": true,
      "literSize": 7.308
    },
    "vendor_code": null
  },
  {
    "article": "285189212",
    "chat_id": 1063309507,
    "wb_api_key": "eyJhbGciOiJFUzI1NiIsImtpZCI6IjIwMjQxMTE4djEiLCJ0eXAiOiJKV1QifQ.eyJlbnQiOjEsImV4cCI6MTc0OTQ0NjgxNywiaWQiOiIwMTkzYTc0Zi02MGUyLTc4MWQtOGI4NS1iNjg2MDYxMDViYjgiLCJpaWQiOjUwMjU5NzIzLCJvaWQiOjE4MTIyMiwicyI6MTA3Mzc0OTc1OCwic2lkIjoiOWI3MGVjZDItN2E2Zi00YjViLTllN2ItMjgwNmU4NWFhM2E5IiwidCI6ZmFsc2UsInVpZCI6NTAyNTk3MjN9.YwSqhIzz7q1qqwXfS-2x3YvoKMqsl3TzVI-Ni9DNaXF1SpXxeO_7LW1N8F9pU21-dY6hWmP7OhuJ-FIbhnHSjA",
    "notification_time": 8,
    "self_cost": 237,
    "marketing_cost": {
      "2024-11-13": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-14": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-15": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-16": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-17": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-18": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-19": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-20": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-21": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-22": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-23": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-24": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-25": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-26": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-27": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-28": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-29": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-30": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-01": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-02": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-03": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-04": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-05": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-06": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-07": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-08": {
        "ark": {
          "ctr": 0,
          "views": 42,
          "clicks": 1
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 3.6999999999999997
      },
      "2024-12-09": {
        "ark": {
          "ctr": 0,
          "views": 93,
          "clicks": 3
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 7.4
      },
      "2024-12-10": {
        "ark": {
          "ctr": 0,
          "views": 443,
          "clicks": 24
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 82.62
      },
      "2024-12-11": {
        "ark": {
          "ctr": 0,
          "views": 561,
          "clicks": 33
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 129.21
      },
      "2024-12-12": {
        "ark": {
          "ctr": 0,
          "views": 69,
          "clicks": 1
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 18.07
      }
    },
    "sales": {
      "2024-12-11": {
        "infoBuysSum": 1486,
        "infoBuysCount": 1
      }
    },
    "other_metricks": {
      "2024-12-07": {
        "drr": null,
        "krrr": 0,
        "ctrArk": null,
        "ctrPrk": null,
        "margin": null,
        "revWithDrr": 0,
        "marginWithDrr": null,
        "revWithoutDrr": 0
      },
      "2024-12-08": {
        "drr": 0.24899057873485866,
        "krrr": 99.51874300876668,
        "ctrArk": 2.380952380952381,
        "ctrPrk": null,
        "margin": 51.73755047106325,
        "revWithDrr": 765.1199999999999,
        "marginWithDrr": 51.48855989232839,
        "revWithoutDrr": 768.8199999999999
      },
      "2024-12-09": {
        "drr": 0.49798115746971744,
        "krrr": 99.03748601753335,
        "ctrArk": 3.225806451612903,
        "ctrPrk": null,
        "margin": 51.73755047106325,
        "revWithDrr": 761.42,
        "marginWithDrr": 51.239569313593535,
        "revWithoutDrr": 768.8199999999999
      },
      "2024-12-10": {
        "drr": null,
        "krrr": 0,
        "ctrArk": 5.417607223476298,
        "ctrPrk": null,
        "margin": null,
        "revWithDrr": -82.62,
        "marginWithDrr": null,
        "revWithoutDrr": 0
      },
      "2024-12-11": {
        "drr": null,
        "krrr": 0,
        "ctrArk": 5.88235294117647,
        "ctrPrk": null,
        "margin": null,
        "revWithDrr": -129.21,
        "marginWithDrr": null,
        "revWithoutDrr": 0
      }
    },
    "order_info": {
      "stock": 178,
      "2024-12-07": {
        "buysSum": 0,
        "buysCount": 0,
        "ordersSum": 0,
        "ordersCount": 0,
        "addToCartCount": 0
      },
      "2024-12-08": {
        "buysSum": 1486,
        "buysCount": 1,
        "ordersSum": 1486,
        "ordersCount": 1,
        "addToCartCount": 2
      },
      "2024-12-09": {
        "buysSum": 1486,
        "buysCount": 1,
        "ordersSum": 1486,
        "ordersCount": 1,
        "addToCartCount": 5
      },
      "2024-12-10": {
        "buysSum": 0,
        "buysCount": 0,
        "ordersSum": 0,
        "ordersCount": 0,
        "addToCartCount": 2
      },
      "2024-12-11": {
        "buysSum": 0,
        "buysCount": 0,
        "ordersSum": 0,
        "ordersCount": 0,
        "addToCartCount": 5
      },
      "commission": 24.5,
      "pricePerOne": 1486,
      "cart_to_order": "67.00",
      "click_to_cart": "16.82",
      "ordersCount30": 2,
      "buyoutsPercent": 100,
      "fullConversion": "11.27%",
      "addToCartPercent": 1,
      "cartToOrderPercent": 14
    },
    "tax": 0,
    "percent_buys": 100,
    "percent_mp": null,
    "price_before_spp": null,
    "logistics": 60,
    "storage": 0,
    "size": {
      "width": 20,
      "height": 2,
      "length": 25,
      "isValid": true,
      "literSize": 1
    },
    "vendor_code": "komplekt2/black"
  },
  {
    "article": "154290915",
    "chat_id": 6076407816,
    "wb_api_key": "eyJhbGciOiJFUzI1NiIsImtpZCI6IjIwMjQxMDE2djEiLCJ0eXAiOiJKV1QifQ.eyJlbnQiOjEsImV4cCI6MTc0NjMwOTIyOSwiaWQiOiIwMTkyZWM0Yi05NTU5LTdjNjEtOWY5Ny1jZGFhN2E3NjQwODciLCJpaWQiOjQ2ODIwNDgsIm9pZCI6MzE1MDQzLCJzIjoxMDczNzQ5NzU4LCJzaWQiOiJlZDE3YTVjNC1lZjZlLTQzNWYtYjUwOS00ZGU3NjkyZjhkMjUiLCJ0IjpmYWxzZSwidWlkIjo0NjgyMDQ4fQ.uQCMJwM2VQSIRByiMWYvmIyg9iB2IbNeA_NW0vl3GzmQn-dr2vkSE69InFLdup5N4piVndT4jcwrEww8zNnMHg",
    "notification_time": null,
    "self_cost": 500,
    "marketing_cost": {
      "2024-11-13": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-14": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-15": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-16": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-17": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-18": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-19": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-20": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-21": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-22": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-23": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-24": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-25": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-26": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-27": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-28": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-29": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-30": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-01": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-02": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-03": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-04": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-05": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-06": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-07": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-08": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-09": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-10": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-11": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-12": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      }
    },
    "sales": {
      "2024-12-06": {
        "infoBuysSum": 2542,
        "infoBuysCount": 2
      },
      "2024-12-07": {
        "infoBuysSum": 1271,
        "infoBuysCount": 1
      },
      "2024-12-08": {
        "infoBuysSum": 1270.46,
        "infoBuysCount": 1
      },
      "2024-12-10": {
        "infoBuysSum": 1125,
        "infoBuysCount": 1
      }
    },
    "other_metricks": {
      "2024-12-07": {
        "drr": 0,
        "krrr": 100,
        "ctrArk": null,
        "ctrPrk": null,
        "margin": 23.17279028501717,
        "revWithDrr": 208.94904999999983,
        "marginWithDrr": 23.17279028501717,
        "revWithoutDrr": 208.94904999999983
      },
      "2024-12-08": {
        "drr": null,
        "krrr": 0,
        "ctrArk": null,
        "ctrPrk": null,
        "margin": null,
        "revWithDrr": 0,
        "marginWithDrr": null,
        "revWithoutDrr": 0
      },
      "2024-12-09": {
        "drr": 0,
        "krrr": 100,
        "ctrArk": null,
        "ctrPrk": null,
        "margin": 16.750616588419398,
        "revWithDrr": 133.79554999999993,
        "marginWithDrr": 16.750616588419398,
        "revWithoutDrr": 133.79554999999993
      },
      "2024-12-10": {
        "drr": 0,
        "krrr": 100,
        "ctrArk": null,
        "ctrPrk": null,
        "margin": 16.81321439749608,
        "revWithDrr": 268.59109999999987,
        "marginWithDrr": 16.81321439749608,
        "revWithoutDrr": 268.59109999999987
      },
      "2024-12-11": {
        "drr": 0,
        "krrr": 100,
        "ctrArk": null,
        "ctrPrk": null,
        "margin": 16.834080333855,
        "revWithDrr": 403.3866500000004,
        "marginWithDrr": 16.834080333855,
        "revWithoutDrr": 403.3866500000004
      }
    },
    "order_info": {
      "stock": 91,
      "2024-12-07": {
        "buysSum": 901.6999999999999,
        "buysCount": 0.71,
        "ordersSum": 1270,
        "ordersCount": 1,
        "addToCartCount": 7
      },
      "2024-12-08": {
        "buysSum": 0,
        "buysCount": 0,
        "ordersSum": 0,
        "ordersCount": 0,
        "addToCartCount": 3
      },
      "2024-12-09": {
        "buysSum": 798.75,
        "buysCount": 0.71,
        "ordersSum": 1125,
        "ordersCount": 1,
        "addToCartCount": 5
      },
      "2024-12-10": {
        "buysSum": 1597.5,
        "buysCount": 1.42,
        "ordersSum": 2250,
        "ordersCount": 2,
        "addToCartCount": 10
      },
      "2024-12-11": {
        "buysSum": 2396.25,
        "buysCount": 2.13,
        "ordersSum": 3375,
        "ordersCount": 3,
        "addToCartCount": 16
      },
      "commission": 18.5,
      "pricePerOne": 1248.4871794871794,
      "cart_to_order": "95.00",
      "click_to_cart": "14.85",
      "ordersCount30": 39,
      "buyoutsPercent": 70,
      "fullConversion": "14.11%",
      "addToCartPercent": 3,
      "cartToOrderPercent": 17
    },
    "tax": 0,
    "percent_buys": 71,
    "percent_mp": null,
    "price_before_spp": 1270,
    "logistics": 74,
    "storage": 0,
    "size": {
      "width": 10,
      "height": 13,
      "length": 15,
      "isValid": true,
      "literSize": 1.95
    },
    "vendor_code": "156-2стшарик-23"
  },
  {
    "article": "228218956",
    "chat_id": 179730539,
    "wb_api_key": "eyJhbGciOiJFUzI1NiIsImtpZCI6IjIwMjQxMTE4djEiLCJ0eXAiOiJKV1QifQ.eyJlbnQiOjEsImV4cCI6MTc0OTAwODM5NiwiaWQiOiIwMTkzOGQyZC05OWY5LTc4NDYtYTBkNy04ZTUwN2NmNTlmZmMiLCJpaWQiOjEzNzMwMTM2Miwib2lkIjozOTcxMzMxLCJzIjoxMDczNzQ5NzU4LCJzaWQiOiJlNDFiN2UxNy1lMzM0LTQ0NjEtYTlkNi1iNzJkNmVkMjI4ODkiLCJ0IjpmYWxzZSwidWlkIjoxMzczMDEzNjJ9.GQjaLnx1EL-vNXPOB1GxVrs0HV7tRfCEKqClEJtBoiLIi1bDL1F2fUS8sgU_C95dy-n3ij38ytH0f2WjpEJm-w",
    "notification_time": 10,
    "self_cost": 240,
    "marketing_cost": {
      "2024-11-13": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-14": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-15": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-16": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-17": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-18": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-19": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-20": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-21": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-22": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-23": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-24": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-25": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-26": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-27": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-28": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-29": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-30": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-01": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-02": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-03": {
        "ark": {
          "ctr": 0,
          "views": 9561,
          "clicks": 238
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 544.92
      },
      "2024-12-04": {
        "ark": {
          "ctr": 0,
          "views": 7405,
          "clicks": 183
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 496.59
      },
      "2024-12-05": {
        "ark": {
          "ctr": 0,
          "views": 6860,
          "clicks": 126
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 427.20000000000005
      },
      "2024-12-06": {
        "ark": {
          "ctr": 0,
          "views": 7083,
          "clicks": 130
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 429.5
      },
      "2024-12-07": {
        "ark": {
          "ctr": 0,
          "views": 6984,
          "clicks": 160
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 463.24
      },
      "2024-12-08": {
        "ark": {
          "ctr": 0,
          "views": 8095,
          "clicks": 175
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 532.51
      },
      "2024-12-09": {
        "ark": {
          "ctr": 0,
          "views": 7115,
          "clicks": 149
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 462.76
      },
      "2024-12-10": {
        "ark": {
          "ctr": 0,
          "views": 7249,
          "clicks": 183
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 629.56
      },
      "2024-12-11": {
        "ark": {
          "ctr": 0,
          "views": 6906,
          "clicks": 150
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 420.71999999999997
      },
      "2024-12-12": {
        "ark": {
          "ctr": 0,
          "views": 2195,
          "clicks": 48
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 128.13
      }
    },
    "sales": {
      "2024-12-05": {
        "infoBuysSum": 3632,
        "infoBuysCount": 3
      },
      "2024-12-06": {
        "infoBuysSum": 7235,
        "infoBuysCount": 6
      },
      "2024-12-07": {
        "infoBuysSum": 7264,
        "infoBuysCount": 6
      },
      "2024-12-08": {
        "infoBuysSum": 9637.31,
        "infoBuysCount": 8
      },
      "2024-12-09": {
        "infoBuysSum": 15613,
        "infoBuysCount": 13
      },
      "2024-12-10": {
        "infoBuysSum": 9666,
        "infoBuysCount": 8
      },
      "2024-12-11": {
        "infoBuysSum": 3574,
        "infoBuysCount": 3
      },
      "2024-12-12": {
        "infoBuysSum": 1172,
        "infoBuysCount": 1
      }
    },
    "other_metricks": {
      "2024-12-07": {
        "drr": 3.5064718794943603,
        "krrr": 90.8611780032303,
        "ctrArk": 2.290950744558992,
        "ctrPrk": null,
        "margin": 43.601102387129195,
        "revWithDrr": 4605.684640000001,
        "marginWithDrr": 39.61647525134015,
        "revWithoutDrr": 5068.924640000001
      },
      "2024-12-08": {
        "drr": 4.9265426959015635,
        "krrr": 87.15952324853784,
        "ctrArk": 2.1618282890673255,
        "ctrPrk": null,
        "margin": 43.59919090993196,
        "revWithDrr": 3614.61016,
        "marginWithDrr": 38.000846937316545,
        "revWithoutDrr": 4147.12016
      },
      "2024-12-09": {
        "drr": 4.935053855177562,
        "krrr": 86.91964148624349,
        "ctrArk": 2.094167252283907,
        "ctrPrk": null,
        "margin": 42.873562973232374,
        "revWithDrr": 3075.0635199999997,
        "marginWithDrr": 37.265547228712414,
        "revWithoutDrr": 3537.82352
      },
      "2024-12-10": {
        "drr": 10.743344709897611,
        "krrr": 71.51780304702865,
        "ctrArk": 2.524486136018761,
        "ctrPrk": null,
        "margin": 42.86307787775364,
        "revWithDrr": 1580.8031999999998,
        "marginWithDrr": 30.65473161650636,
        "revWithoutDrr": 2210.3632
      },
      "2024-12-11": {
        "drr": 5.982084458979098,
        "krrr": 84.14338934916981,
        "ctrArk": 2.172024326672459,
        "ctrPrk": null,
        "margin": 42.87059447022477,
        "revWithDrr": 2232.55824,
        "marginWithDrr": 36.0727712213849,
        "revWithoutDrr": 2653.2782399999996
      }
    },
    "order_info": {
      "stock": 200,
      "2024-12-07": {
        "buysSum": 11625.68,
        "buysCount": 9.68,
        "ordersSum": 13211,
        "ordersCount": 11,
        "addToCartCount": 46
      },
      "2024-12-08": {
        "buysSum": 9511.92,
        "buysCount": 7.92,
        "ordersSum": 10809,
        "ordersCount": 9,
        "addToCartCount": 43
      },
      "2024-12-09": {
        "buysSum": 8251.76,
        "buysCount": 7.04,
        "ordersSum": 9377,
        "ordersCount": 8,
        "addToCartCount": 37
      },
      "2024-12-10": {
        "buysSum": 5156.8,
        "buysCount": 4.4,
        "ordersSum": 5860,
        "ordersCount": 5,
        "addToCartCount": 38
      },
      "2024-12-11": {
        "buysSum": 6189.04,
        "buysCount": 5.28,
        "ordersSum": 7033,
        "ordersCount": 6,
        "addToCartCount": 36
      },
      "commission": 19.5,
      "pricePerOne": 1215.893280632411,
      "cart_to_order": "94.00",
      "click_to_cart": "14.37",
      "ordersCount30": 253,
      "buyoutsPercent": 87,
      "fullConversion": "13.51%",
      "addToCartPercent": 12,
      "cartToOrderPercent": 17
    },
    "tax": 0,
    "percent_buys": 88,
    "percent_mp": null,
    "price_before_spp": 1201,
    "logistics": 86,
    "storage": 0,
    "size": {
      "width": 10,
      "height": 8,
      "length": 34,
      "isValid": true,
      "literSize": 2.72
    },
    "vendor_code": "nabor_silikon_green"
  },
  {
    "article": "250506416",
    "chat_id": 1063309507,
    "wb_api_key": "eyJhbGciOiJFUzI1NiIsImtpZCI6IjIwMjQxMTE4djEiLCJ0eXAiOiJKV1QifQ.eyJlbnQiOjEsImV4cCI6MTc0OTQ0NjgxNywiaWQiOiIwMTkzYTc0Zi02MGUyLTc4MWQtOGI4NS1iNjg2MDYxMDViYjgiLCJpaWQiOjUwMjU5NzIzLCJvaWQiOjE4MTIyMiwicyI6MTA3Mzc0OTc1OCwic2lkIjoiOWI3MGVjZDItN2E2Zi00YjViLTllN2ItMjgwNmU4NWFhM2E5IiwidCI6ZmFsc2UsInVpZCI6NTAyNTk3MjN9.YwSqhIzz7q1qqwXfS-2x3YvoKMqsl3TzVI-Ni9DNaXF1SpXxeO_7LW1N8F9pU21-dY6hWmP7OhuJ-FIbhnHSjA",
    "notification_time": 8,
    "self_cost": 300,
    "marketing_cost": {
      "2024-11-13": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-14": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-15": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-16": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-17": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-18": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-19": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-20": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-21": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-22": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-23": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-24": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-25": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-26": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-27": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-28": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-29": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-30": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-01": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-02": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-03": {
        "ark": {
          "ctr": 0,
          "views": 3670,
          "clicks": 239
        },
        "prk": {
          "ctr": 0,
          "views": 66,
          "clicks": 3
        },
        "cost": 583.36
      },
      "2024-12-04": {
        "ark": {
          "ctr": 0,
          "views": 5667,
          "clicks": 333
        },
        "prk": {
          "ctr": 0,
          "views": 328,
          "clicks": 28
        },
        "cost": 1026.9
      },
      "2024-12-05": {
        "ark": {
          "ctr": 0,
          "views": 2443,
          "clicks": 136
        },
        "prk": {
          "ctr": 0,
          "views": 67,
          "clicks": 2
        },
        "cost": 865.41
      },
      "2024-12-06": {
        "ark": {
          "ctr": 0,
          "views": 2735,
          "clicks": 183
        },
        "prk": {
          "ctr": 0,
          "views": 3,
          "clicks": 0
        },
        "cost": 969.5699999999999
      },
      "2024-12-07": {
        "ark": {
          "ctr": 0,
          "views": 2863,
          "clicks": 136
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 942.47
      },
      "2024-12-08": {
        "ark": {
          "ctr": 0,
          "views": 3323,
          "clicks": 198
        },
        "prk": {
          "ctr": 0,
          "views": 1,
          "clicks": 0
        },
        "cost": 962.48
      },
      "2024-12-09": {
        "ark": {
          "ctr": 0,
          "views": 3078,
          "clicks": 179
        },
        "prk": {
          "ctr": 0,
          "views": 35,
          "clicks": 1
        },
        "cost": 812.26
      },
      "2024-12-10": {
        "ark": {
          "ctr": 0,
          "views": 2761,
          "clicks": 172
        },
        "prk": {
          "ctr": 0,
          "views": 15,
          "clicks": 1
        },
        "cost": 1036.4399999999998
      },
      "2024-12-11": {
        "ark": {
          "ctr": 0,
          "views": 1675,
          "clicks": 134
        },
        "prk": {
          "ctr": 0,
          "views": 280,
          "clicks": 29
        },
        "cost": 856.85
      },
      "2024-12-12": {
        "ark": {
          "ctr": 0,
          "views": 193,
          "clicks": 13
        },
        "prk": {
          "ctr": 0,
          "views": 27,
          "clicks": 4
        },
        "cost": 73.91
      }
    },
    "sales": {
      "2024-12-06": {
        "infoBuysSum": 3622.42,
        "infoBuysCount": 3
      },
      "2024-12-07": {
        "infoBuysSum": 3622,
        "infoBuysCount": 3
      },
      "2024-12-08": {
        "infoBuysSum": 4783,
        "infoBuysCount": 4
      },
      "2024-12-09": {
        "infoBuysSum": 1300,
        "infoBuysCount": 1
      },
      "2024-12-10": {
        "infoBuysSum": 1300,
        "infoBuysCount": 1
      },
      "2024-12-11": {
        "infoBuysSum": 3900,
        "infoBuysCount": 3
      }
    },
    "other_metricks": {
      "2024-12-07": {
        "drr": 12.08294871794872,
        "krrr": 15.792187982479211,
        "ctrArk": 4.750261962975899,
        "ctrPrk": null,
        "margin": 32.61128205128205,
        "revWithDrr": 176.74919999999997,
        "marginWithDrr": 5.150034965034965,
        "revWithoutDrr": 1119.2192
      },
      "2024-12-08": {
        "drr": 7.4036923076923085,
        "krrr": 48.39337877312561,
        "ctrArk": 5.9584712609088175,
        "ctrPrk": 0,
        "margin": 32.60545454545455,
        "revWithDrr": 902.5520000000001,
        "marginWithDrr": 15.778881118881122,
        "revWithoutDrr": 1865.0320000000002
      },
      "2024-12-09": {
        "drr": 10.413589743589743,
        "krrr": 27.426191402005973,
        "ctrArk": 5.815464587394412,
        "ctrPrk": 2.857142857142857,
        "margin": 32.61128205128205,
        "revWithDrr": 306.9592,
        "marginWithDrr": 8.944032634032634,
        "revWithoutDrr": 1119.2192
      },
      "2024-12-10": {
        "drr": 11.389450549450547,
        "krrr": 20.60500876957528,
        "ctrArk": 6.229626946758421,
        "ctrPrk": 6.666666666666667,
        "margin": 32.602957042957044,
        "revWithDrr": 268.9824000000001,
        "marginWithDrr": 6.717842157842161,
        "revWithoutDrr": 1305.4224
      },
      "2024-12-11": {
        "drr": 9.415934065934065,
        "krrr": 34.362241677483084,
        "ctrArk": 8,
        "ctrPrk": 10.357142857142858,
        "margin": 32.602957042957044,
        "revWithDrr": 448.5723999999999,
        "marginWithDrr": 11.20310689310689,
        "revWithoutDrr": 1305.4224
      }
    },
    "order_info": {
      "stock": 578,
      "2024-12-07": {
        "buysSum": 3432,
        "buysCount": 2.64,
        "ordersSum": 7800,
        "ordersCount": 6,
        "addToCartCount": 30
      },
      "2024-12-08": {
        "buysSum": 5720,
        "buysCount": 4.4,
        "ordersSum": 13000,
        "ordersCount": 10,
        "addToCartCount": 32
      },
      "2024-12-09": {
        "buysSum": 3432,
        "buysCount": 2.64,
        "ordersSum": 7800,
        "ordersCount": 6,
        "addToCartCount": 31
      },
      "2024-12-10": {
        "buysSum": 4004,
        "buysCount": 3.08,
        "ordersSum": 9100,
        "ordersCount": 7,
        "addToCartCount": 40
      },
      "2024-12-11": {
        "buysSum": 4004,
        "buysCount": 3.08,
        "ordersSum": 9100,
        "ordersCount": 7,
        "addToCartCount": 27
      },
      "commission": 24.5,
      "pricePerOne": 1218.9285714285713,
      "cart_to_order": "67.00",
      "click_to_cart": "16.82",
      "ordersCount30": 238,
      "buyoutsPercent": 43,
      "fullConversion": "11.27%",
      "addToCartPercent": 6,
      "cartToOrderPercent": 20
    },
    "tax": 0,
    "percent_buys": 44,
    "percent_mp": null,
    "price_before_spp": 1300,
    "logistics": 63,
    "storage": 0,
    "size": {
      "width": 30,
      "height": 2,
      "length": 20,
      "isValid": true,
      "literSize": 1.2
    },
    "vendor_code": "bodypoyis/black"
  },
  {
    "article": "127736137",
    "chat_id": 6076407816,
    "wb_api_key": "eyJhbGciOiJFUzI1NiIsImtpZCI6IjIwMjQxMDE2djEiLCJ0eXAiOiJKV1QifQ.eyJlbnQiOjEsImV4cCI6MTc0NjMwOTIyOSwiaWQiOiIwMTkyZWM0Yi05NTU5LTdjNjEtOWY5Ny1jZGFhN2E3NjQwODciLCJpaWQiOjQ2ODIwNDgsIm9pZCI6MzE1MDQzLCJzIjoxMDczNzQ5NzU4LCJzaWQiOiJlZDE3YTVjNC1lZjZlLTQzNWYtYjUwOS00ZGU3NjkyZjhkMjUiLCJ0IjpmYWxzZSwidWlkIjo0NjgyMDQ4fQ.uQCMJwM2VQSIRByiMWYvmIyg9iB2IbNeA_NW0vl3GzmQn-dr2vkSE69InFLdup5N4piVndT4jcwrEww8zNnMHg",
    "notification_time": null,
    "self_cost": 500,
    "marketing_cost": {
      "2024-11-13": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-14": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-15": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-16": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-17": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-18": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-19": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-20": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-21": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-22": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-23": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-24": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-25": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-26": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-27": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-28": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-29": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-30": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-01": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-02": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-03": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-04": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-05": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-06": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-07": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-08": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-09": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-10": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-11": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-12": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      }
    },
    "sales": {
      "2024-12-06": {
        "infoBuysSum": 9472,
        "infoBuysCount": 4
      },
      "2024-12-07": {
        "infoBuysSum": 7104,
        "infoBuysCount": 3
      },
      "2024-12-08": {
        "infoBuysSum": 2368,
        "infoBuysCount": 1
      },
      "2024-12-09": {
        "infoBuysSum": 4736,
        "infoBuysCount": 2
      },
      "2024-12-10": {
        "infoBuysSum": 2368,
        "infoBuysCount": 1
      },
      "2024-12-11": {
        "infoBuysSum": 2415,
        "infoBuysCount": 1
      }
    },
    "other_metricks": {
      "2024-12-07": {
        "drr": null,
        "krrr": 0,
        "ctrArk": null,
        "ctrPrk": null,
        "margin": null,
        "revWithDrr": 0,
        "marginWithDrr": null,
        "revWithoutDrr": 0
      },
      "2024-12-08": {
        "drr": 0,
        "krrr": 100,
        "ctrArk": null,
        "ctrPrk": null,
        "margin": 45.269691241335856,
        "revWithDrr": 1005.8020000000001,
        "marginWithDrr": 45.269691241335856,
        "revWithoutDrr": 1005.8020000000001
      },
      "2024-12-09": {
        "drr": 0,
        "krrr": 100,
        "ctrArk": null,
        "ctrPrk": null,
        "margin": 45.28086812474491,
        "revWithDrr": 3017.7344000000003,
        "marginWithDrr": 45.28086812474491,
        "revWithoutDrr": 3017.7344000000003
      },
      "2024-12-10": {
        "drr": 0,
        "krrr": 100,
        "ctrArk": null,
        "ctrPrk": null,
        "margin": 45.28851900298816,
        "revWithDrr": 3019.0776000000005,
        "marginWithDrr": 45.28851900298816,
        "revWithoutDrr": 3019.0776000000005
      },
      "2024-12-11": {
        "drr": null,
        "krrr": 0,
        "ctrArk": null,
        "ctrPrk": null,
        "margin": null,
        "revWithDrr": 0,
        "marginWithDrr": null,
        "revWithoutDrr": 0
      }
    },
    "order_info": {
      "stock": 73,
      "2024-12-07": {
        "buysSum": 0,
        "buysCount": 0,
        "ordersSum": 0,
        "ordersCount": 0,
        "addToCartCount": 0
      },
      "2024-12-08": {
        "buysSum": 2221.8,
        "buysCount": 0.92,
        "ordersSum": 2415,
        "ordersCount": 1,
        "addToCartCount": 6
      },
      "2024-12-09": {
        "buysSum": 6664.4800000000005,
        "buysCount": 2.7600000000000002,
        "ordersSum": 7244,
        "ordersCount": 3,
        "addToCartCount": 39
      },
      "2024-12-10": {
        "buysSum": 6666.320000000001,
        "buysCount": 2.7600000000000002,
        "ordersSum": 7246,
        "ordersCount": 3,
        "addToCartCount": 32
      },
      "2024-12-11": {
        "buysSum": 0,
        "buysCount": 0,
        "ordersSum": 0,
        "ordersCount": 0,
        "addToCartCount": 21
      },
      "commission": 18.5,
      "pricePerOne": 2239.4605263157896,
      "cart_to_order": "95.00",
      "click_to_cart": "14.85",
      "ordersCount30": 76,
      "buyoutsPercent": 91,
      "fullConversion": "14.11%",
      "addToCartPercent": 7,
      "cartToOrderPercent": 11
    },
    "tax": 0,
    "percent_buys": 92,
    "percent_mp": null,
    "price_before_spp": null,
    "logistics": 134,
    "storage": 0,
    "size": {
      "width": 15,
      "height": 20,
      "length": 20,
      "isValid": true,
      "literSize": 6
    },
    "vendor_code": "156-LT-бизиборд-22"
  },
  {
    "article": "154289554",
    "chat_id": 6076407816,
    "wb_api_key": "eyJhbGciOiJFUzI1NiIsImtpZCI6IjIwMjQxMDE2djEiLCJ0eXAiOiJKV1QifQ.eyJlbnQiOjEsImV4cCI6MTc0NjMwOTIyOSwiaWQiOiIwMTkyZWM0Yi05NTU5LTdjNjEtOWY5Ny1jZGFhN2E3NjQwODciLCJpaWQiOjQ2ODIwNDgsIm9pZCI6MzE1MDQzLCJzIjoxMDczNzQ5NzU4LCJzaWQiOiJlZDE3YTVjNC1lZjZlLTQzNWYtYjUwOS00ZGU3NjkyZjhkMjUiLCJ0IjpmYWxzZSwidWlkIjo0NjgyMDQ4fQ.uQCMJwM2VQSIRByiMWYvmIyg9iB2IbNeA_NW0vl3GzmQn-dr2vkSE69InFLdup5N4piVndT4jcwrEww8zNnMHg",
    "notification_time": null,
    "self_cost": 500,
    "marketing_cost": {
      "2024-11-13": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-14": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-15": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-16": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-17": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-18": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-19": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-20": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-21": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-22": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-23": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-24": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-25": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-26": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-27": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-28": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-29": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-30": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-01": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-02": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-03": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-04": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-05": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-06": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-07": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-08": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-09": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-10": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-11": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-12": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      }
    },
    "sales": {
      "2024-12-06": {
        "infoBuysSum": 6780,
        "infoBuysCount": 4
      },
      "2024-12-07": {
        "infoBuysSum": 6738,
        "infoBuysCount": 4
      },
      "2024-12-08": {
        "infoBuysSum": 6780,
        "infoBuysCount": 4
      },
      "2024-12-09": {
        "infoBuysSum": 3390,
        "infoBuysCount": 2
      },
      "2024-12-10": {
        "infoBuysSum": 5085,
        "infoBuysCount": 3
      },
      "2024-12-11": {
        "infoBuysSum": 6781.04,
        "infoBuysCount": 4
      }
    },
    "other_metricks": {
      "2024-12-07": {
        "drr": 0,
        "krrr": 100,
        "ctrArk": null,
        "ctrPrk": null,
        "margin": 36.13933456815532,
        "revWithDrr": 526.8030800000001,
        "marginWithDrr": 36.13933456815532,
        "revWithoutDrr": 526.8030800000001
      },
      "2024-12-08": {
        "drr": 0,
        "krrr": 100,
        "ctrArk": null,
        "ctrPrk": null,
        "margin": 36.13933456815532,
        "revWithDrr": 1053.6061600000003,
        "marginWithDrr": 36.13933456815532,
        "revWithoutDrr": 1053.6061600000003
      },
      "2024-12-09": {
        "drr": 0,
        "krrr": 100,
        "ctrArk": null,
        "ctrPrk": null,
        "margin": 36.14477044272128,
        "revWithDrr": 4215.68024,
        "marginWithDrr": 36.14477044272128,
        "revWithoutDrr": 4215.68024
      },
      "2024-12-10": {
        "drr": 0,
        "krrr": 100,
        "ctrArk": null,
        "ctrPrk": null,
        "margin": 36.13933456815532,
        "revWithDrr": 1580.4092400000004,
        "marginWithDrr": 36.13933456815532,
        "revWithoutDrr": 1580.4092400000004
      },
      "2024-12-11": {
        "drr": 0,
        "krrr": 100,
        "ctrArk": null,
        "ctrPrk": null,
        "margin": 36.13933456815532,
        "revWithDrr": 1053.6061600000003,
        "marginWithDrr": 36.13933456815532,
        "revWithoutDrr": 1053.6061600000003
      }
    },
    "order_info": {
      "stock": 166,
      "2024-12-07": {
        "buysSum": 1457.7,
        "buysCount": 0.86,
        "ordersSum": 1695,
        "ordersCount": 1,
        "addToCartCount": 16
      },
      "2024-12-08": {
        "buysSum": 2915.4,
        "buysCount": 1.72,
        "ordersSum": 3390,
        "ordersCount": 2,
        "addToCartCount": 19
      },
      "2024-12-09": {
        "buysSum": 11663.32,
        "buysCount": 6.88,
        "ordersSum": 13562,
        "ordersCount": 8,
        "addToCartCount": 25
      },
      "2024-12-10": {
        "buysSum": 4373.1,
        "buysCount": 2.58,
        "ordersSum": 5085,
        "ordersCount": 3,
        "addToCartCount": 13
      },
      "2024-12-11": {
        "buysSum": 2915.4,
        "buysCount": 1.72,
        "ordersSum": 3390,
        "ordersCount": 2,
        "addToCartCount": 19
      },
      "commission": 18.5,
      "pricePerOne": 1673.7205882352941,
      "cart_to_order": "95.00",
      "click_to_cart": "14.85",
      "ordersCount30": 136,
      "buyoutsPercent": 86,
      "fullConversion": "14.11%",
      "addToCartPercent": 6,
      "cartToOrderPercent": 19
    },
    "tax": 0,
    "percent_buys": 86,
    "percent_mp": null,
    "price_before_spp": 1695,
    "logistics": 91,
    "storage": 0,
    "size": {
      "width": 10,
      "height": 24,
      "length": 13,
      "isValid": true,
      "literSize": 3.12
    },
    "vendor_code": "156-1стгорка-23"
  },
  {
    "article": "211223212",
    "chat_id": 823886150,
    "wb_api_key": "eyJhbGciOiJFUzI1NiIsImtpZCI6IjIwMjQxMTE4djEiLCJ0eXAiOiJKV1QifQ.eyJlbnQiOjEsImV4cCI6MTc0OTUzMTExMiwiaWQiOiIwMTkzYWM1NS05ZTgyLTc0YzQtYmE5YS1lOWRiYzA1NjA5NDIiLCJpaWQiOjIzNTEzODAwLCJvaWQiOjQxNzIzOSwicyI6MTA3Mzc0OTc1OCwic2lkIjoiNzA5ZjA1YTAtYjY5My00Y2U0LWFiMjAtNmUxNjAwMWIzYjBlIiwidCI6ZmFsc2UsInVpZCI6MjM1MTM4MDB9.-eqz3heZn0d833kJYNsNFGXe2TTzbiRYZBQmWT3prGlDLPPFc6g6QD3Jcy-KTZSQadI6vNhyyg8VJVKU1nsnnA",
    "notification_time": null,
    "self_cost": 815,
    "marketing_cost": {
      "2024-11-13": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-14": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-15": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-16": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-17": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-18": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-19": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-20": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-21": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-22": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-23": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-24": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-25": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-26": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-27": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-28": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-29": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-30": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-01": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-02": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-03": {
        "ark": {
          "ctr": 0,
          "views": 32793,
          "clicks": 1331
        },
        "prk": {
          "ctr": 0,
          "views": 4379,
          "clicks": 306
        },
        "cost": 2064.19
      },
      "2024-12-04": {
        "ark": {
          "ctr": 0,
          "views": 28247,
          "clicks": 1324
        },
        "prk": {
          "ctr": 0,
          "views": 3098,
          "clicks": 208
        },
        "cost": 1616.8
      },
      "2024-12-05": {
        "ark": {
          "ctr": 0,
          "views": 26667,
          "clicks": 1305
        },
        "prk": {
          "ctr": 0,
          "views": 2471,
          "clicks": 144
        },
        "cost": 1507.73
      },
      "2024-12-06": {
        "ark": {
          "ctr": 0,
          "views": 28298,
          "clicks": 1390
        },
        "prk": {
          "ctr": 0,
          "views": 2383,
          "clicks": 162
        },
        "cost": 1583.9099999999999
      },
      "2024-12-07": {
        "ark": {
          "ctr": 0,
          "views": 32098,
          "clicks": 984
        },
        "prk": {
          "ctr": 0,
          "views": 2880,
          "clicks": 123
        },
        "cost": 1847.79
      },
      "2024-12-08": {
        "ark": {
          "ctr": 0,
          "views": 37256,
          "clicks": 1138
        },
        "prk": {
          "ctr": 0,
          "views": 3872,
          "clicks": 171
        },
        "cost": 2247.05
      },
      "2024-12-09": {
        "ark": {
          "ctr": 0,
          "views": 33043,
          "clicks": 1308
        },
        "prk": {
          "ctr": 0,
          "views": 3310,
          "clicks": 173
        },
        "cost": 1905.2099999999998
      },
      "2024-12-10": {
        "ark": {
          "ctr": 0,
          "views": 28426,
          "clicks": 1043
        },
        "prk": {
          "ctr": 0,
          "views": 2681,
          "clicks": 107
        },
        "cost": 1498.02
      },
      "2024-12-11": {
        "ark": {
          "ctr": 0,
          "views": 30731,
          "clicks": 926
        },
        "prk": {
          "ctr": 0,
          "views": 5332,
          "clicks": 227
        },
        "cost": 2031.03
      },
      "2024-12-12": {
        "ark": {
          "ctr": 0,
          "views": 2794,
          "clicks": 107
        },
        "prk": {
          "ctr": 0,
          "views": 494,
          "clicks": 37
        },
        "cost": 191.06
      }
    },
    "sales": {
      "2024-12-05": {
        "infoBuysSum": 39330.8,
        "infoBuysCount": 17
      },
      "2024-12-06": {
        "infoBuysSum": 46827.630000000005,
        "infoBuysCount": 20
      },
      "2024-12-07": {
        "infoBuysSum": 69179,
        "infoBuysCount": 32
      },
      "2024-12-08": {
        "infoBuysSum": 35025.5,
        "infoBuysCount": 17
      },
      "2024-12-09": {
        "infoBuysSum": 59454.020000000004,
        "infoBuysCount": 30
      },
      "2024-12-10": {
        "infoBuysSum": 65920.56,
        "infoBuysCount": 30
      },
      "2024-12-11": {
        "infoBuysSum": 53964.99,
        "infoBuysCount": 25
      }
    },
    "other_metricks": {
      "2024-12-07": {
        "drr": 1.807659949129329,
        "krrr": 86.79837404356817,
        "ctrArk": 3.065611564583463,
        "ctrPrk": 4.270833333333333,
        "margin": 24.022292818722615,
        "revWithDrr": 12148.895000000004,
        "marginWithDrr": 20.85095957463607,
        "revWithoutDrr": 13996.685000000005
      },
      "2024-12-08": {
        "drr": 2.9565669324491464,
        "krrr": 79.21964867875512,
        "ctrArk": 3.054541550354305,
        "ctrPrk": 4.416322314049586,
        "margin": 24.960884685860073,
        "revWithDrr": 8566.289800000002,
        "marginWithDrr": 19.773925155247536,
        "revWithoutDrr": 10813.339800000002
      },
      "2024-12-09": {
        "drr": 1.497288673729213,
        "krrr": 89.66279962975851,
        "ctrArk": 3.9584783463971185,
        "ctrPrk": 5.226586102719033,
        "margin": 25.41135066100384,
        "revWithDrr": 16525.40885,
        "marginWithDrr": 22.784528426391184,
        "revWithoutDrr": 18430.61885
      },
      "2024-12-10": {
        "drr": 1.1752402620327147,
        "krrr": 91.90916293292977,
        "ctrArk": 3.6691761063814816,
        "ctrPrk": 3.991048116374487,
        "margin": 25.483457447211162,
        "revWithDrr": 17016.998749999988,
        "marginWithDrr": 23.421632426101134,
        "revWithoutDrr": 18515.01874999999
      },
      "2024-12-11": {
        "drr": 1.5424450924997721,
        "krrr": 89.30200605255746,
        "ctrArk": 3.0132439556148514,
        "ctrPrk": 4.2573143285821455,
        "margin": 25.29487336807037,
        "revWithDrr": 16954.118149999995,
        "marginWithDrr": 22.588829346140948,
        "revWithoutDrr": 18985.148149999994
      }
    },
    "order_info": {
      "stock": 1489,
      "2024-12-07": {
        "buysSum": 58265.399999999994,
        "buysCount": 25.08,
        "ordersSum": 102220,
        "ordersCount": 44,
        "addToCartCount": 207
      },
      "2024-12-08": {
        "buysSum": 43321.14,
        "buysCount": 18.24,
        "ordersSum": 76002,
        "ordersCount": 32,
        "addToCartCount": 231
      },
      "2024-12-09": {
        "buysSum": 72529.07999999999,
        "buysCount": 30.209999999999997,
        "ordersSum": 127244,
        "ordersCount": 53,
        "addToCartCount": 257
      },
      "2024-12-10": {
        "buysSum": 72655.04999999999,
        "buysCount": 30.209999999999997,
        "ordersSum": 127465,
        "ordersCount": 53,
        "addToCartCount": 234
      },
      "2024-12-11": {
        "buysSum": 75055.31999999999,
        "buysCount": 31.349999999999998,
        "ordersSum": 131676,
        "ordersCount": 55,
        "addToCartCount": 197
      },
      "commission": 24.5,
      "pricePerOne": 2341.929181929182,
      "cart_to_order": "74.00",
      "click_to_cart": "12.17",
      "ordersCount30": 1638,
      "buyoutsPercent": 57,
      "fullConversion": "9.01%",
      "addToCartPercent": 11,
      "cartToOrderPercent": 19
    },
    "tax": 0,
    "percent_buys": 57,
    "percent_mp": null,
    "price_before_spp": 2323,
    "logistics": 79,
    "storage": 0,
    "size": {
      "width": 30,
      "height": 3,
      "length": 25,
      "isValid": true,
      "literSize": 2.25
    },
    "vendor_code": "ХалатДлинШелк"
  },
  {
    "article": "62516883",
    "chat_id": 981744819,
    "wb_api_key": "eyJhbGciOiJFUzI1NiIsImtpZCI6IjIwMjQxMTE4djEiLCJ0eXAiOiJKV1QifQ.eyJlbnQiOjEsImV4cCI6MTc0ODQ3MTgzMSwiaWQiOiIwMTkzNmQzMi00NmYwLTc4ZDMtYTMyZC0zZGY5ZjNjY2I3NGUiLCJpaWQiOjIxMDUzMzA4LCJvaWQiOjU4MzIxLCJzIjo2NCwic2lkIjoiMDdiNGZmZDQtNDA0MC01OWQ2LTg5NDMtMmRhYmE1MDQyYmViIiwidCI6ZmFsc2UsInVpZCI6MjEwNTMzMDh9.WVjHSZU5GXfVQ_p-PyJSrSYJUTcexHBH5rIKMP4az5W4-gTI5Yu8fqc1oN3hQB1JvwtKIkbgaaQZUSY2X3iRAg",
    "notification_time": 13,
    "self_cost": 642,
    "marketing_cost": {
      "2024-11-13": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-14": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-15": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-16": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-17": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-18": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-19": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-20": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-21": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-22": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-23": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-24": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-25": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-26": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-27": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-28": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-29": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-30": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-01": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-02": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-03": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-04": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-05": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-06": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-07": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-08": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-09": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-10": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-11": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-12": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      }
    },
    "sales": {},
    "other_metricks": {},
    "order_info": {},
    "tax": 0,
    "percent_buys": null,
    "percent_mp": null,
    "price_before_spp": null,
    "logistics": 270,
    "storage": 1,
    "size": {
      "width": 26,
      "height": 15,
      "length": 39,
      "isValid": true,
      "literSize": 15.21
    },
    "vendor_code": null
  },
  {
    "article": "254642549",
    "chat_id": 150462912,
    "wb_api_key": "eyJhbGciOiJFUzI1NiIsImtpZCI6IjIwMjQxMDE2djEiLCJ0eXAiOiJKV1QifQ.eyJlbnQiOjEsImV4cCI6MTc0NjMwOTIyOSwiaWQiOiIwMTkyZWM0Yi05NTU5LTdjNjEtOWY5Ny1jZGFhN2E3NjQwODciLCJpaWQiOjQ2ODIwNDgsIm9pZCI6MzE1MDQzLCJzIjoxMDczNzQ5NzU4LCJzaWQiOiJlZDE3YTVjNC1lZjZlLTQzNWYtYjUwOS00ZGU3NjkyZjhkMjUiLCJ0IjpmYWxzZSwidWlkIjo0NjgyMDQ4fQ.uQCMJwM2VQSIRByiMWYvmIyg9iB2IbNeA_NW0vl3GzmQn-dr2vkSE69InFLdup5N4piVndT4jcwrEww8zNnMHg",
    "notification_time": null,
    "self_cost": 500,
    "marketing_cost": {
      "2024-11-13": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-14": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-15": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-16": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-17": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-18": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-19": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-20": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-21": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-22": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-23": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-24": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-25": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-26": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-27": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-28": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-29": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-30": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-01": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-02": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-03": {
        "ark": {
          "ctr": 0,
          "views": 4,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0.16
      },
      "2024-12-04": {
        "ark": {
          "ctr": 0,
          "views": 3,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0.12
      },
      "2024-12-05": {
        "ark": {
          "ctr": 0,
          "views": 3,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0.14
      },
      "2024-12-06": {
        "ark": {
          "ctr": 0,
          "views": 1197,
          "clicks": 39
        },
        "prk": {
          "ctr": 0,
          "views": 2778,
          "clicks": 96
        },
        "cost": 1149.81
      },
      "2024-12-07": {
        "ark": {
          "ctr": 0,
          "views": 2010,
          "clicks": 78
        },
        "prk": {
          "ctr": 0,
          "views": 2947,
          "clicks": 90
        },
        "cost": 1357.81
      },
      "2024-12-08": {
        "ark": {
          "ctr": 0,
          "views": 2287,
          "clicks": 87
        },
        "prk": {
          "ctr": 0,
          "views": 3604,
          "clicks": 107
        },
        "cost": 1648.65
      },
      "2024-12-09": {
        "ark": {
          "ctr": 0,
          "views": 2231,
          "clicks": 96
        },
        "prk": {
          "ctr": 0,
          "views": 3659,
          "clicks": 115
        },
        "cost": 1570.67
      },
      "2024-12-10": {
        "ark": {
          "ctr": 0,
          "views": 2016,
          "clicks": 64
        },
        "prk": {
          "ctr": 0,
          "views": 3399,
          "clicks": 124
        },
        "cost": 1528.63
      },
      "2024-12-11": {
        "ark": {
          "ctr": 0,
          "views": 3445,
          "clicks": 120
        },
        "prk": {
          "ctr": 0,
          "views": 1817,
          "clicks": 53
        },
        "cost": 1247.8200000000002
      },
      "2024-12-12": {
        "ark": {
          "ctr": 0,
          "views": 271,
          "clicks": 4
        },
        "prk": {
          "ctr": 0,
          "views": 14,
          "clicks": 0
        },
        "cost": 56.089999999999996
      }
    },
    "sales": {
      "2024-12-06": {
        "infoBuysSum": 5296,
        "infoBuysCount": 2
      },
      "2024-12-07": {
        "infoBuysSum": 2703,
        "infoBuysCount": 1
      },
      "2024-12-09": {
        "infoBuysSum": 10812,
        "infoBuysCount": 4
      },
      "2024-12-10": {
        "infoBuysSum": 13515,
        "infoBuysCount": 5
      },
      "2024-12-11": {
        "infoBuysSum": 13513,
        "infoBuysCount": 5
      }
    },
    "other_metricks": {
      "2024-12-07": {
        "drr": 8.372240720187445,
        "krrr": 80.92986722995508,
        "ctrArk": 3.880597014925373,
        "ctrPrk": 3.053953172718018,
        "margin": 46.704651569178445,
        "revWithDrr": 5762.276767999998,
        "marginWithDrr": 37.798012505149245,
        "revWithoutDrr": 7120.086767999998
      },
      "2024-12-08": {
        "drr": 7.624520186838089,
        "krrr": 82.63255881805227,
        "ctrArk": 3.8041101880192394,
        "ctrPrk": 2.9689234184239734,
        "margin": 46.70343548683878,
        "revWithDrr": 7844.112824,
        "marginWithDrr": 38.59224379871315,
        "revWithoutDrr": 9492.762824
      },
      "2024-12-09": {
        "drr": 3.418810674328501,
        "krrr": 92.21203131174698,
        "ctrArk": 4.303003137606455,
        "ctrPrk": 3.142935228204428,
        "margin": 46.70065812861175,
        "revWithDrr": 18597.233375999996,
        "marginWithDrr": 43.06362549634738,
        "revWithoutDrr": 20167.903376
      },
      "2024-12-10": {
        "drr": 11.314803849000741,
        "krrr": 74.2198071025058,
        "ctrArk": 3.1746031746031744,
        "ctrPrk": 3.648131803471609,
        "margin": 46.69098256610549,
        "revWithDrr": 4400.84464,
        "marginWithDrr": 34.6539571948281,
        "revWithoutDrr": 5929.47464
      },
      "2024-12-11": {
        "drr": 4.198304286387188,
        "krrr": 90.43555485229574,
        "ctrArk": 3.483309143686502,
        "ctrPrk": 2.9168959823885525,
        "margin": 46.696709393571915,
        "revWithDrr": 11798.624207999997,
        "marginWithDrr": 42.23042823784087,
        "revWithoutDrr": 13046.444207999997
      }
    },
    "order_info": {
      "stock": 257,
      "2024-12-07": {
        "buysSum": 15244.919999999998,
        "buysCount": 5.64,
        "ordersSum": 16218,
        "ordersCount": 6,
        "addToCartCount": 76
      },
      "2024-12-08": {
        "buysSum": 20325.62,
        "buysCount": 7.52,
        "ordersSum": 21623,
        "ordersCount": 8,
        "addToCartCount": 59
      },
      "2024-12-09": {
        "buysSum": 43185.479999999996,
        "buysCount": 15.979999999999999,
        "ordersSum": 45942,
        "ordersCount": 17,
        "addToCartCount": 69
      },
      "2024-12-10": {
        "buysSum": 12699.4,
        "buysCount": 4.699999999999999,
        "ordersSum": 13510,
        "ordersCount": 5,
        "addToCartCount": 57
      },
      "2024-12-11": {
        "buysSum": 27938.679999999997,
        "buysCount": 10.34,
        "ordersSum": 29722,
        "ordersCount": 11,
        "addToCartCount": 57
      },
      "commission": 18.5,
      "pricePerOne": 2672.8870967741937,
      "cart_to_order": "92.00",
      "click_to_cart": "8.27",
      "ordersCount30": 124,
      "buyoutsPercent": 92,
      "fullConversion": "7.61%",
      "addToCartPercent": 17,
      "cartToOrderPercent": 13
    },
    "tax": 0,
    "percent_buys": 94,
    "percent_mp": null,
    "price_before_spp": 2703,
    "logistics": 170,
    "storage": 0,
    "size": {
      "width": 24,
      "height": 11,
      "length": 32,
      "isValid": true,
      "literSize": 8.448
    },
    "vendor_code": "маш-паук-DH666-80"
  },
  {
    "article": "285158296",
    "chat_id": 1063309507,
    "wb_api_key": "eyJhbGciOiJFUzI1NiIsImtpZCI6IjIwMjQxMTE4djEiLCJ0eXAiOiJKV1QifQ.eyJlbnQiOjEsImV4cCI6MTc0OTQ0NjgxNywiaWQiOiIwMTkzYTc0Zi02MGUyLTc4MWQtOGI4NS1iNjg2MDYxMDViYjgiLCJpaWQiOjUwMjU5NzIzLCJvaWQiOjE4MTIyMiwicyI6MTA3Mzc0OTc1OCwic2lkIjoiOWI3MGVjZDItN2E2Zi00YjViLTllN2ItMjgwNmU4NWFhM2E5IiwidCI6ZmFsc2UsInVpZCI6NTAyNTk3MjN9.YwSqhIzz7q1qqwXfS-2x3YvoKMqsl3TzVI-Ni9DNaXF1SpXxeO_7LW1N8F9pU21-dY6hWmP7OhuJ-FIbhnHSjA",
    "notification_time": 8,
    "self_cost": 497,
    "marketing_cost": {
      "2024-11-13": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-14": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-15": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-16": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-17": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-18": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-19": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-20": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-21": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-22": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-23": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-24": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-25": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-26": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-27": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-28": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-29": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-30": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-01": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-02": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-03": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-04": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-05": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-06": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-07": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-08": {
        "ark": {
          "ctr": 0,
          "views": 29,
          "clicks": 1
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 2.4000000000000004
      },
      "2024-12-09": {
        "ark": {
          "ctr": 0,
          "views": 112,
          "clicks": 3
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 9.76
      },
      "2024-12-10": {
        "ark": {
          "ctr": 0,
          "views": 432,
          "clicks": 17
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 84.33
      },
      "2024-12-11": {
        "ark": {
          "ctr": 0,
          "views": 497,
          "clicks": 17
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 112.66
      },
      "2024-12-12": {
        "ark": {
          "ctr": 0,
          "views": 59,
          "clicks": 5
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 14.420000000000002
      }
    },
    "sales": {
      "2024-12-11": {
        "infoBuysSum": 2096,
        "infoBuysCount": 1
      }
    },
    "other_metricks": {
      "2024-12-07": {
        "drr": null,
        "krrr": 0,
        "ctrArk": null,
        "ctrPrk": null,
        "margin": null,
        "revWithDrr": 0,
        "marginWithDrr": null,
        "revWithoutDrr": 0
      },
      "2024-12-08": {
        "drr": null,
        "krrr": 0,
        "ctrArk": 3.4482758620689653,
        "ctrPrk": null,
        "margin": null,
        "revWithDrr": -2.4000000000000004,
        "marginWithDrr": null,
        "revWithoutDrr": 0
      },
      "2024-12-09": {
        "drr": null,
        "krrr": 0,
        "ctrArk": 2.6785714285714284,
        "ctrPrk": null,
        "margin": null,
        "revWithDrr": -9.76,
        "marginWithDrr": null,
        "revWithoutDrr": 0
      },
      "2024-12-10": {
        "drr": 1.005844465648855,
        "krrr": 97.77674080167041,
        "ctrArk": 3.935185185185185,
        "ctrPrk": null,
        "margin": 45.24188931297711,
        "revWithDrr": 3708.750000000001,
        "marginWithDrr": 44.23604484732825,
        "revWithoutDrr": 3793.080000000001
      },
      "2024-12-11": {
        "drr": null,
        "krrr": 0,
        "ctrArk": 3.420523138832998,
        "ctrPrk": null,
        "margin": null,
        "revWithDrr": -112.66,
        "marginWithDrr": null,
        "revWithoutDrr": 0
      }
    },
    "order_info": {
      "stock": 106,
      "2024-12-07": {
        "buysSum": 0,
        "buysCount": 0,
        "ordersSum": 0,
        "ordersCount": 0,
        "addToCartCount": 0
      },
      "2024-12-08": {
        "buysSum": 0,
        "buysCount": 0,
        "ordersSum": 0,
        "ordersCount": 0,
        "addToCartCount": 1
      },
      "2024-12-09": {
        "buysSum": 0,
        "buysCount": 0,
        "ordersSum": 0,
        "ordersCount": 0,
        "addToCartCount": 3
      },
      "2024-12-10": {
        "buysSum": 8384,
        "buysCount": 4,
        "ordersSum": 8384,
        "ordersCount": 4,
        "addToCartCount": 7
      },
      "2024-12-11": {
        "buysSum": 0,
        "buysCount": 0,
        "ordersSum": 0,
        "ordersCount": 0,
        "addToCartCount": 3
      },
      "commission": 24.5,
      "pricePerOne": 2096,
      "cart_to_order": "67.00",
      "click_to_cart": "16.82",
      "ordersCount30": 5,
      "buyoutsPercent": 100,
      "fullConversion": "11.27%",
      "addToCartPercent": 2,
      "cartToOrderPercent": 33
    },
    "tax": 0,
    "percent_buys": 100,
    "percent_mp": null,
    "price_before_spp": null,
    "logistics": 60,
    "storage": 0,
    "size": {
      "width": 20,
      "height": 2,
      "length": 25,
      "isValid": true,
      "literSize": 1
    },
    "vendor_code": "kmbflowe/White"
  },
  {
    "article": "85978420",
    "chat_id": 1297873019,
    "wb_api_key": "eyJhbGciOiJFUzI1NiIsImtpZCI6IjIwMjQxMTE4djEiLCJ0eXAiOiJKV1QifQ.eyJlbnQiOjEsImV4cCI6MTc0OTAwODQyNywiaWQiOiIwMTkzOGQyZS0xMmM3LTdkMjctOGU4Yy1mYjg4NzEzNzZmOWUiLCJpaWQiOjI0NjAzMjk5LCJvaWQiOjQzNzk2OSwicyI6MTA3Mzc0OTc1OCwic2lkIjoiMDNmNWY1ZDEtMjRjMy00NTlmLThhNmItNmVkNTBlMDEyMTJhIiwidCI6ZmFsc2UsInVpZCI6MjQ2MDMyOTl9.Cp6R4nwwUlmg2WzcZznmsFz-RUk1Lv1QQEFlGvBAJKbW0Us6Jpbd8_MWSvI7_sZCp0lNN71nbFzoXrAKVPJPJw",
    "notification_time": 8,
    "self_cost": 337,
    "marketing_cost": {
      "2024-11-13": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-14": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-15": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-16": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-17": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-18": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-19": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-20": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-21": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-22": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-23": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-24": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-25": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-26": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-27": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-28": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-29": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-30": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-01": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-02": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-03": {
        "ark": {
          "ctr": 0,
          "views": 17672,
          "clicks": 248
        },
        "prk": {
          "ctr": 0,
          "views": 392,
          "clicks": 41
        },
        "cost": 1563.35
      },
      "2024-12-04": {
        "ark": {
          "ctr": 0,
          "views": 15492,
          "clicks": 155
        },
        "prk": {
          "ctr": 0,
          "views": 318,
          "clicks": 17
        },
        "cost": 1370.24
      },
      "2024-12-05": {
        "ark": {
          "ctr": 0,
          "views": 13545,
          "clicks": 140
        },
        "prk": {
          "ctr": 0,
          "views": 283,
          "clicks": 13
        },
        "cost": 1217.23
      },
      "2024-12-06": {
        "ark": {
          "ctr": 0,
          "views": 12048,
          "clicks": 113
        },
        "prk": {
          "ctr": 0,
          "views": 391,
          "clicks": 6
        },
        "cost": 1155.19
      },
      "2024-12-07": {
        "ark": {
          "ctr": 0,
          "views": 11699,
          "clicks": 133
        },
        "prk": {
          "ctr": 0,
          "views": 359,
          "clicks": 19
        },
        "cost": 1115.93
      },
      "2024-12-08": {
        "ark": {
          "ctr": 0,
          "views": 14444,
          "clicks": 169
        },
        "prk": {
          "ctr": 0,
          "views": 459,
          "clicks": 6
        },
        "cost": 1393.0600000000002
      },
      "2024-12-09": {
        "ark": {
          "ctr": 0,
          "views": 15489,
          "clicks": 169
        },
        "prk": {
          "ctr": 0,
          "views": 636,
          "clicks": 46
        },
        "cost": 1557.2599999999998
      },
      "2024-12-10": {
        "ark": {
          "ctr": 0,
          "views": 14163,
          "clicks": 170
        },
        "prk": {
          "ctr": 0,
          "views": 561,
          "clicks": 46
        },
        "cost": 1398.13
      },
      "2024-12-11": {
        "ark": {
          "ctr": 0,
          "views": 8790,
          "clicks": 144
        },
        "prk": {
          "ctr": 0,
          "views": 454,
          "clicks": 29
        },
        "cost": 978.3100000000002
      },
      "2024-12-12": {
        "ark": {
          "ctr": 0,
          "views": 1371,
          "clicks": 13
        },
        "prk": {
          "ctr": 0,
          "views": 89,
          "clicks": 4
        },
        "cost": 157.17000000000002
      }
    },
    "sales": {
      "2024-12-06": {
        "infoBuysSum": 15702.940000000002,
        "infoBuysCount": 25
      },
      "2024-12-07": {
        "infoBuysSum": 19089.04,
        "infoBuysCount": 28
      },
      "2024-12-08": {
        "infoBuysSum": 12358.87,
        "infoBuysCount": 18
      },
      "2024-12-09": {
        "infoBuysSum": 8632.26,
        "infoBuysCount": 12
      },
      "2024-12-10": {
        "infoBuysSum": 15834.650000000001,
        "infoBuysCount": 23
      },
      "2024-12-11": {
        "infoBuysSum": 14744.02,
        "infoBuysCount": 21
      }
    },
    "other_metricks": {
      "2024-12-07": {
        "drr": 9.277768540073163,
        "krrr": 45.12024976377114,
        "ctrArk": 1.1368493033592615,
        "ctrPrk": 5.2924791086350975,
        "margin": 18.178098773113632,
        "revWithDrr": 917.4794000000004,
        "marginWithDrr": 8.202003568733888,
        "revWithoutDrr": 2033.4094000000005
      },
      "2024-12-08": {
        "drr": 10.355783526613143,
        "krrr": 38.85546396608778,
        "ctrArk": 1.1700360011077264,
        "ctrPrk": 1.3071895424836601,
        "margin": 18.211359225473924,
        "revWithDrr": 885.2465999999997,
        "marginWithDrr": 7.076108121588824,
        "revWithoutDrr": 2278.3066
      },
      "2024-12-09": {
        "drr": 7.6920721165719925,
        "krrr": 52.45978760369256,
        "ctrArk": 1.0910969074827297,
        "ctrPrk": 7.232704402515723,
        "margin": 17.39799817823065,
        "revWithDrr": 1718.409,
        "marginWithDrr": 9.126952891594101,
        "revWithoutDrr": 3275.669
      },
      "2024-12-10": {
        "drr": 6.582842883374925,
        "krrr": 61.14076762694336,
        "ctrArk": 1.2003106686436489,
        "ctrPrk": 8.19964349376114,
        "margin": 18.215299811110317,
        "revWithDrr": 2199.8052,
        "marginWithDrr": 11.136974130062011,
        "revWithoutDrr": 3597.9352
      },
      "2024-12-11": {
        "drr": 4.629081101542539,
        "krrr": 72.23645275908889,
        "ctrArk": 1.6382252559726962,
        "ctrPrk": 6.387665198237885,
        "margin": 17.928208227887392,
        "revWithDrr": 2545.4112000000014,
        "marginWithDrr": 12.950701667088966,
        "revWithoutDrr": 3523.7212000000018
      }
    },
    "order_info": {
      "stock": 227,
      "2024-12-07": {
        "buysSum": 11186.04,
        "buysCount": 15.81,
        "ordersSum": 12028,
        "ordersCount": 17,
        "addToCartCount": 54
      },
      "2024-12-08": {
        "buysSum": 12510.36,
        "buysCount": 17.67,
        "ordersSum": 13452,
        "ordersCount": 19,
        "addToCartCount": 68
      },
      "2024-12-09": {
        "buysSum": 18827.850000000002,
        "buysCount": 26.970000000000002,
        "ordersSum": 20245,
        "ordersCount": 29,
        "addToCartCount": 105
      },
      "2024-12-10": {
        "buysSum": 19752.27,
        "buysCount": 27.900000000000002,
        "ordersSum": 21239,
        "ordersCount": 30,
        "addToCartCount": 104
      },
      "2024-12-11": {
        "buysSum": 19654.620000000003,
        "buysCount": 27.900000000000002,
        "ordersSum": 21134,
        "ordersCount": 30,
        "addToCartCount": 78
      },
      "commission": 16.5,
      "pricePerOne": 694.1800486618005,
      "cart_to_order": "94.00",
      "click_to_cart": "22.57",
      "ordersCount30": 822,
      "buyoutsPercent": 92,
      "fullConversion": "21.22%",
      "addToCartPercent": 20,
      "cartToOrderPercent": 37
    },
    "tax": 0,
    "percent_buys": 93,
    "percent_mp": null,
    "price_before_spp": 707,
    "logistics": 60,
    "storage": 0,
    "size": {
      "width": 6,
      "height": 26,
      "length": 6,
      "isValid": true,
      "literSize": 0.936
    },
    "vendor_code": "DT-0132"
  },
  {
    "article": "225806199",
    "chat_id": 7366390419,
    "wb_api_key": "eyJhbGciOiJFUzI1NiIsImtpZCI6IjIwMjQxMTE4djEiLCJ0eXAiOiJKV1QifQ.eyJlbnQiOjEsImV4cCI6MTc0OTAwNTY1OCwiaWQiOiIwMTkzOGQwMy1kNGYzLTc4OWYtYTk4MC01YzQ4ZDQxNTZiNmMiLCJpaWQiOjExMjExMjMyLCJvaWQiOjE4Mzg3MywicyI6MTA3Mzc0OTc1OCwic2lkIjoiMDFjNWZmNWMtYjA1NC00YzUyLThmOTItZGViMjQzZTg3NDgzIiwidCI6ZmFsc2UsInVpZCI6MTEyMTEyMzJ9.cc7F9M5ZIDl6DHnVLOR65hYv6ZqBRkjrjASiTc_WHHlKXIddzamdkOPuCer0CQgTqV5eQKPGoTcNRR-kc8O2eg",
    "notification_time": 10,
    "self_cost": 1300,
    "marketing_cost": {
      "2024-11-13": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-14": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-15": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-16": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-17": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-18": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-19": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-20": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-21": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-22": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-23": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-24": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-25": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-26": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-27": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-28": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-29": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-30": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-01": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-02": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-03": {
        "ark": {
          "ctr": 0,
          "views": 17749,
          "clicks": 526
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 1326.2
      },
      "2024-12-04": {
        "ark": {
          "ctr": 0,
          "views": 19004,
          "clicks": 543
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 1321.62
      },
      "2024-12-05": {
        "ark": {
          "ctr": 0,
          "views": 19390,
          "clicks": 605
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 1575.73
      },
      "2024-12-06": {
        "ark": {
          "ctr": 0,
          "views": 16742,
          "clicks": 628
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 1495.56
      },
      "2024-12-07": {
        "ark": {
          "ctr": 0,
          "views": 21357,
          "clicks": 686
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 1991.94
      },
      "2024-12-08": {
        "ark": {
          "ctr": 0,
          "views": 26108,
          "clicks": 881
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 2156.3199999999997
      },
      "2024-12-09": {
        "ark": {
          "ctr": 0,
          "views": 18933,
          "clicks": 539
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 1430.51
      },
      "2024-12-10": {
        "ark": {
          "ctr": 0,
          "views": 12405,
          "clicks": 399
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 828.5900000000001
      },
      "2024-12-11": {
        "ark": {
          "ctr": 0,
          "views": 12722,
          "clicks": 402
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 859.86
      },
      "2024-12-12": {
        "ark": {
          "ctr": 0,
          "views": 851,
          "clicks": 18
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 58.75
      }
    },
    "sales": {
      "2024-12-06": {
        "infoBuysSum": 18273,
        "infoBuysCount": 6
      },
      "2024-12-07": {
        "infoBuysSum": 18126,
        "infoBuysCount": 8
      },
      "2024-12-08": {
        "infoBuysSum": 27189,
        "infoBuysCount": 9
      },
      "2024-12-09": {
        "infoBuysSum": 21147,
        "infoBuysCount": 7
      },
      "2024-12-10": {
        "infoBuysSum": 30259,
        "infoBuysCount": 10
      },
      "2024-12-11": {
        "infoBuysSum": 18224,
        "infoBuysCount": 6
      }
    },
    "other_metricks": {
      "2024-12-07": {
        "drr": 3.6631358269888556,
        "krrr": 50.34714770469487,
        "ctrArk": 3.2120616191412656,
        "ctrPrk": null,
        "margin": 14.187487021052068,
        "revWithDrr": 2019.7932800000003,
        "marginWithDrr": 7.142995046073499,
        "revWithoutDrr": 4011.7332800000004
      },
      "2024-12-08": {
        "drr": 6.4888808642532565,
        "krrr": 12.018991154797796,
        "ctrArk": 3.374444614677494,
        "ctrPrk": null,
        "margin": 14.183307523327365,
        "revWithDrr": 294.5725599999969,
        "marginWithDrr": 1.7046904766864865,
        "revWithoutDrr": 2450.8925599999966
      },
      "2024-12-09": {
        "drr": 2.9595125786163523,
        "krrr": 59.875826128665906,
        "ctrArk": 2.846881107061744,
        "ctrPrk": null,
        "margin": 14.184392585236678,
        "revWithDrr": 2134.69736,
        "marginWithDrr": 8.493022241743692,
        "revWithoutDrr": 3565.2073600000003
      },
      "2024-12-10": {
        "drr": 1.3060590775826741,
        "krrr": 82.29459577189672,
        "ctrArk": 3.216444981862152,
        "ctrPrk": null,
        "margin": 14.185793444284661,
        "revWithDrr": 3851.2805599999992,
        "marginWithDrr": 11.674141372010288,
        "revWithoutDrr": 4679.870559999999
      },
      "2024-12-11": {
        "drr": 2.0330543339480776,
        "krrr": 72.4375704206517,
        "ctrArk": 3.1598805219305146,
        "ctrPrk": null,
        "margin": 14.184960950998704,
        "revWithDrr": 2259.821440000004,
        "marginWithDrr": 10.275241078021631,
        "revWithoutDrr": 3119.681440000004
      }
    },
    "order_info": {
      "stock": 1121,
      "2024-12-07": {
        "buysSum": 28276.56,
        "buysCount": 9.36,
        "ordersSum": 54378,
        "ordersCount": 18,
        "addToCartCount": 96
      },
      "2024-12-08": {
        "buysSum": 17280.12,
        "buysCount": 5.720000000000001,
        "ordersSum": 33231,
        "ordersCount": 11,
        "addToCartCount": 108
      },
      "2024-12-09": {
        "buysSum": 25134.72,
        "buysCount": 8.32,
        "ordersSum": 48336,
        "ordersCount": 16,
        "addToCartCount": 119
      },
      "2024-12-10": {
        "buysSum": 32989.840000000004,
        "buysCount": 10.92,
        "ordersSum": 63442,
        "ordersCount": 21,
        "addToCartCount": 175
      },
      "2024-12-11": {
        "buysSum": 21992.88,
        "buysCount": 7.28,
        "ordersSum": 42294,
        "ordersCount": 14,
        "addToCartCount": 124
      },
      "commission": 24.5,
      "pricePerOne": 3056.4177897574123,
      "cart_to_order": "57.00",
      "click_to_cart": "12.45",
      "ordersCount30": 371,
      "buyoutsPercent": 53,
      "fullConversion": "7.10%",
      "addToCartPercent": 5,
      "cartToOrderPercent": 15
    },
    "tax": 0,
    "percent_buys": 52,
    "percent_mp": null,
    "price_before_spp": 3021,
    "logistics": 121,
    "storage": 0,
    "size": {
      "width": 40,
      "height": 4,
      "length": 32,
      "isValid": true,
      "literSize": 5.12
    },
    "vendor_code": "Zip - Black/Grey"
  },
  {
    "article": "225645743",
    "chat_id": 737593394,
    "wb_api_key": "eyJhbGciOiJFUzI1NiIsImtpZCI6IjIwMjQxMTE4djEiLCJ0eXAiOiJKV1QifQ.eyJlbnQiOjEsImV4cCI6MTc0OTAwNjIyMCwiaWQiOiIwMTkzOGQwYy02ODAxLTdlZGItOThiOS00YzJmZmJjNTNiOGMiLCJpaWQiOjQ3NDU1ODg5LCJvaWQiOjE0MDEwMzcsInMiOjEwNzM3NDk3NTgsInNpZCI6IjYyNGI1YmJlLTI3NmEtNDRmMC1iMjI1LTM4ZTRjMTZjNzZhNiIsInQiOmZhbHNlLCJ1aWQiOjQ3NDU1ODg5fQ.hekQz3NnYF3DMCOG9ZqCr4jrl96Of8JrVmE01-3z5r9S45218ElHu8-IWtIyeXla1lvWRDU1mTmyAEoVQ83n4Q",
    "notification_time": 7,
    "self_cost": 735,
    "marketing_cost": {
      "2024-11-13": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-14": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-15": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-16": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-17": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-18": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-19": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-20": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-21": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-22": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-23": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-24": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-25": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-26": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-27": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-28": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-29": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-30": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-01": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-02": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-03": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-04": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-05": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-06": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-07": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-08": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-09": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-10": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-11": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-12": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      }
    },
    "sales": {
      "2024-12-06": {
        "infoBuysSum": 1944,
        "infoBuysCount": 1
      },
      "2024-12-08": {
        "infoBuysSum": 4278,
        "infoBuysCount": 2
      },
      "2024-12-10": {
        "infoBuysSum": 2139,
        "infoBuysCount": 3
      },
      "2024-12-11": {
        "infoBuysSum": 1789,
        "infoBuysCount": 1
      }
    },
    "other_metricks": {
      "2024-12-07": {
        "drr": 0,
        "krrr": 100,
        "ctrArk": null,
        "ctrPrk": null,
        "margin": 24.881442520529216,
        "revWithDrr": 538.4319280000002,
        "marginWithDrr": 24.881442520529216,
        "revWithoutDrr": 538.4319280000002
      },
      "2024-12-08": {
        "drr": 0,
        "krrr": 100,
        "ctrArk": null,
        "ctrPrk": null,
        "margin": 25.57278925055948,
        "revWithDrr": 843.3036419999999,
        "marginWithDrr": 25.57278925055948,
        "revWithoutDrr": 843.3036419999999
      },
      "2024-12-09": {
        "drr": 0,
        "krrr": 100,
        "ctrArk": null,
        "ctrPrk": null,
        "margin": 19.66292237763973,
        "revWithDrr": 950.8438700000002,
        "marginWithDrr": 19.66292237763973,
        "revWithoutDrr": 950.8438700000002
      },
      "2024-12-10": {
        "drr": 0,
        "krrr": 100,
        "ctrArk": null,
        "ctrPrk": null,
        "margin": 23.03519515471314,
        "revWithDrr": 478.45712800000024,
        "marginWithDrr": 23.03519515471314,
        "revWithoutDrr": 478.45712800000024
      },
      "2024-12-11": {
        "drr": 0,
        "krrr": 100,
        "ctrArk": null,
        "ctrPrk": null,
        "margin": 22.29228949299587,
        "revWithDrr": 683.4927419999999,
        "marginWithDrr": 22.29228949299587,
        "revWithoutDrr": 683.4927419999999
      }
    },
    "order_info": {
      "stock": 63,
      "2024-12-07": {
        "buysSum": 2163.9900000000002,
        "buysCount": 1.06,
        "ordersSum": 4083,
        "ordersCount": 2,
        "addToCartCount": 9
      },
      "2024-12-08": {
        "buysSum": 3297.6600000000003,
        "buysCount": 1.59,
        "ordersSum": 6222,
        "ordersCount": 3,
        "addToCartCount": 10
      },
      "2024-12-09": {
        "buysSum": 4835.72,
        "buysCount": 2.6500000000000004,
        "ordersSum": 9124,
        "ordersCount": 5,
        "addToCartCount": 13
      },
      "2024-12-10": {
        "buysSum": 2077.07,
        "buysCount": 1.06,
        "ordersSum": 3919,
        "ordersCount": 2,
        "addToCartCount": 4
      },
      "2024-12-11": {
        "buysSum": 3066.05,
        "buysCount": 1.59,
        "ordersSum": 5785,
        "ordersCount": 3,
        "addToCartCount": 8
      },
      "commission": 24.5,
      "pricePerOne": 1882.3620689655172,
      "cart_to_order": "56.00",
      "click_to_cart": "16.40",
      "ordersCount30": 58,
      "buyoutsPercent": 53,
      "fullConversion": "9.18%",
      "addToCartPercent": 5,
      "cartToOrderPercent": 32
    },
    "tax": 0,
    "percent_buys": 53,
    "percent_mp": null,
    "price_before_spp": 2041,
    "logistics": 62,
    "storage": 0,
    "size": {
      "width": 29,
      "height": 1,
      "length": 38,
      "isValid": true,
      "literSize": 1.102
    },
    "vendor_code": "серый_закр_однотон"
  },
  {
    "article": "248583423",
    "chat_id": 6043879539,
    "wb_api_key": "eyJhbGciOiJFUzI1NiIsImtpZCI6IjIwMjQxMDE2djEiLCJ0eXAiOiJKV1QifQ.eyJlbnQiOjEsImV4cCI6MTc0NjMwOTIyOSwiaWQiOiIwMTkyZWM0Yi05NTU5LTdjNjEtOWY5Ny1jZGFhN2E3NjQwODciLCJpaWQiOjQ2ODIwNDgsIm9pZCI6MzE1MDQzLCJzIjoxMDczNzQ5NzU4LCJzaWQiOiJlZDE3YTVjNC1lZjZlLTQzNWYtYjUwOS00ZGU3NjkyZjhkMjUiLCJ0IjpmYWxzZSwidWlkIjo0NjgyMDQ4fQ.uQCMJwM2VQSIRByiMWYvmIyg9iB2IbNeA_NW0vl3GzmQn-dr2vkSE69InFLdup5N4piVndT4jcwrEww8zNnMHg",
    "notification_time": null,
    "self_cost": 763,
    "marketing_cost": {
      "2024-11-13": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-14": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-15": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-16": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-17": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-18": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-19": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-20": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-21": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-22": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-23": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-24": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-25": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-26": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-27": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-28": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-29": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-30": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-01": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-02": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-03": {
        "ark": {
          "ctr": 0,
          "views": 2827,
          "clicks": 171
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 287.12
      },
      "2024-12-04": {
        "ark": {
          "ctr": 0,
          "views": 2414,
          "clicks": 150
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 245.57
      },
      "2024-12-05": {
        "ark": {
          "ctr": 0,
          "views": 2466,
          "clicks": 174
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 252.97
      },
      "2024-12-06": {
        "ark": {
          "ctr": 0,
          "views": 2339,
          "clicks": 143
        },
        "prk": {
          "ctr": 0,
          "views": 548,
          "clicks": 23
        },
        "cost": 381.48999999999995
      },
      "2024-12-07": {
        "ark": {
          "ctr": 0,
          "views": 2437,
          "clicks": 162
        },
        "prk": {
          "ctr": 0,
          "views": 805,
          "clicks": 28
        },
        "cost": 461.09
      },
      "2024-12-08": {
        "ark": {
          "ctr": 0,
          "views": 2777,
          "clicks": 170
        },
        "prk": {
          "ctr": 0,
          "views": 866,
          "clicks": 32
        },
        "cost": 546.96
      },
      "2024-12-09": {
        "ark": {
          "ctr": 0,
          "views": 5328,
          "clicks": 259
        },
        "prk": {
          "ctr": 0,
          "views": 2107,
          "clicks": 107
        },
        "cost": 1076.6399999999999
      },
      "2024-12-10": {
        "ark": {
          "ctr": 0,
          "views": 4780,
          "clicks": 240
        },
        "prk": {
          "ctr": 0,
          "views": 377,
          "clicks": 25
        },
        "cost": 491.14
      },
      "2024-12-11": {
        "ark": {
          "ctr": 0,
          "views": 4904,
          "clicks": 233
        },
        "prk": {
          "ctr": 0,
          "views": 276,
          "clicks": 18
        },
        "cost": 454.38
      },
      "2024-12-12": {
        "ark": {
          "ctr": 0,
          "views": 237,
          "clicks": 14
        },
        "prk": {
          "ctr": 0,
          "views": 680,
          "clicks": 27
        },
        "cost": 214.07
      }
    },
    "sales": {
      "2024-12-06": {
        "infoBuysSum": 4800,
        "infoBuysCount": 2
      },
      "2024-12-07": {
        "infoBuysSum": 9600.41,
        "infoBuysCount": 4
      },
      "2024-12-08": {
        "infoBuysSum": 7200,
        "infoBuysCount": 3
      },
      "2024-12-09": {
        "infoBuysSum": 9600,
        "infoBuysCount": 4
      },
      "2024-12-10": {
        "infoBuysSum": 9266.2,
        "infoBuysCount": 4
      },
      "2024-12-11": {
        "infoBuysSum": 9098.71,
        "infoBuysCount": 4
      }
    },
    "other_metricks": {
      "2024-12-07": {
        "drr": 9.604040824828159,
        "krrr": 69.86521272822046,
        "ctrArk": 6.647517439474764,
        "ctrPrk": 3.4782608695652173,
        "margin": 35.02228478041433,
        "revWithDrr": 1069.0021019999997,
        "marginWithDrr": 24.468393764119647,
        "revWithoutDrr": 1530.0921019999996
      },
      "2024-12-08": {
        "drr": 11.395000000000001,
        "krrr": 64.23739298566521,
        "ctrArk": 6.121714079942383,
        "ctrPrk": 3.695150115473441,
        "margin": 35.01416442307692,
        "revWithDrr": 982.4587019999999,
        "marginWithDrr": 22.4921864010989,
        "revWithoutDrr": 1529.418702
      },
      "2024-12-09": {
        "drr": 6.027207076079046,
        "krrr": 79.36814763568539,
        "ctrArk": 4.861111111111112,
        "ctrPrk": 5.078310393925012,
        "margin": 32.10232587096048,
        "revWithDrr": 4141.699008,
        "marginWithDrr": 25.47902139175273,
        "revWithoutDrr": 5218.339007999999
      },
      "2024-12-10": {
        "drr": 2.742879481737965,
        "krrr": 90.64013019028907,
        "ctrArk": 5.02092050209205,
        "ctrPrk": 6.631299734748011,
        "margin": 32.20294018948772,
        "revWithDrr": 4756.155208000001,
        "marginWithDrr": 29.188786912852592,
        "revWithoutDrr": 5247.295208000001
      },
      "2024-12-11": {
        "drr": 3.391401701746529,
        "krrr": 88.38944884318106,
        "ctrArk": 4.751223491027733,
        "ctrPrk": 6.521739130434782,
        "margin": 32.098519756105965,
        "revWithDrr": 3459.129306,
        "marginWithDrr": 28.371704699241647,
        "revWithoutDrr": 3913.509306
      }
    },
    "order_info": {
      "stock": 133,
      "2024-12-07": {
        "buysSum": 4368.91,
        "buysCount": 1.82,
        "ordersSum": 4801,
        "ordersCount": 2,
        "addToCartCount": 39
      },
      "2024-12-08": {
        "buysSum": 4368,
        "buysCount": 1.82,
        "ordersSum": 4800,
        "ordersCount": 2,
        "addToCartCount": 33
      },
      "2024-12-09": {
        "buysSum": 16255.33,
        "buysCount": 7.28,
        "ordersSum": 17863,
        "ordersCount": 8,
        "addToCartCount": 53
      },
      "2024-12-10": {
        "buysSum": 16294.460000000001,
        "buysCount": 7.28,
        "ordersSum": 17906,
        "ordersCount": 8,
        "addToCartCount": 32
      },
      "2024-12-11": {
        "buysSum": 12192.18,
        "buysCount": 5.46,
        "ordersSum": 13398,
        "ordersCount": 6,
        "addToCartCount": 29
      },
      "commission": 18.5,
      "pricePerOne": 2331.99,
      "cart_to_order": "95.00",
      "click_to_cart": "14.85",
      "ordersCount30": 100,
      "buyoutsPercent": 88,
      "fullConversion": "14.11%",
      "addToCartPercent": 7,
      "cartToOrderPercent": 12
    },
    "tax": 0,
    "percent_buys": 91,
    "percent_mp": null,
    "price_before_spp": 2400,
    "logistics": 135,
    "storage": 0,
    "size": {
      "width": 17,
      "height": 17,
      "length": 21,
      "isValid": true,
      "literSize": 6.069
    },
    "vendor_code": "156-бизиборд6в1-24"
  },
  {
    "article": "261039467",
    "chat_id": 1378200575,
    "wb_api_key": "eyJhbGciOiJFUzI1NiIsImtpZCI6IjIwMjQxMTE4djEiLCJ0eXAiOiJKV1QifQ.eyJlbnQiOjEsImV4cCI6MTc0OTA3OTYxOSwiaWQiOiIwMTkzOTE2Yy02MDQzLTc2OGQtODc3ZS1jODQ4Njc0YTFlYjAiLCJpaWQiOjMzMDU1Njk2LCJvaWQiOjI1NDAwMywicyI6MTA3Mzc0OTc1OCwic2lkIjoiMjEyN2Q3ODgtOWYzNS00NzM4LWEwYTgtMDgzOGFlMzc2NzQzIiwidCI6ZmFsc2UsInVpZCI6MzMwNTU2OTZ9.9nJqXDUwVO_cf3lTJ_4Y6w7bUMVM-RKQ83Vrz_yXzAPE-LJuyM0YaElSxNERwPJxygdtY4j3XIQvCB4e16TsfA",
    "notification_time": 12,
    "self_cost": 260,
    "marketing_cost": {
      "2024-11-13": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-14": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-15": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-16": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-17": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-18": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-19": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-20": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-21": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-22": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-23": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-24": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-25": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-26": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-27": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-28": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-29": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-30": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-01": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-02": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-03": {
        "ark": {
          "ctr": 0,
          "views": 6611,
          "clicks": 369
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 844.76
      },
      "2024-12-04": {
        "ark": {
          "ctr": 0,
          "views": 5674,
          "clicks": 294
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 689.01
      },
      "2024-12-05": {
        "ark": {
          "ctr": 0,
          "views": 6521,
          "clicks": 345
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 812.23
      },
      "2024-12-06": {
        "ark": {
          "ctr": 0,
          "views": 7255,
          "clicks": 404
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 941.6199999999999
      },
      "2024-12-07": {
        "ark": {
          "ctr": 0,
          "views": 9018,
          "clicks": 481
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 1204.06
      },
      "2024-12-08": {
        "ark": {
          "ctr": 0,
          "views": 8184,
          "clicks": 457
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 1052.82
      },
      "2024-12-09": {
        "ark": {
          "ctr": 0,
          "views": 6571,
          "clicks": 382
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 1029.52
      },
      "2024-12-10": {
        "ark": {
          "ctr": 0,
          "views": 7447,
          "clicks": 398
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 1000.7199999999999
      },
      "2024-12-11": {
        "ark": {
          "ctr": 0,
          "views": 6354,
          "clicks": 340
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 785.47
      },
      "2024-12-12": {
        "ark": {
          "ctr": 0,
          "views": 433,
          "clicks": 24
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 55.53
      }
    },
    "sales": {
      "2024-12-06": {
        "infoBuysSum": 3950,
        "infoBuysCount": 5
      },
      "2024-12-07": {
        "infoBuysSum": 6176.07,
        "infoBuysCount": 10
      },
      "2024-12-08": {
        "infoBuysSum": 8533,
        "infoBuysCount": 11
      },
      "2024-12-09": {
        "infoBuysSum": 11060,
        "infoBuysCount": 14
      },
      "2024-12-10": {
        "infoBuysSum": 9367,
        "infoBuysCount": 12
      },
      "2024-12-11": {
        "infoBuysSum": 7674.35,
        "infoBuysCount": 10
      }
    },
    "other_metricks": {
      "2024-12-07": {
        "drr": 6.927848101265822,
        "krrr": 50.26627283703146,
        "ctrArk": 5.333776890663118,
        "ctrPrk": null,
        "margin": 22.110919319780088,
        "revWithDrr": 1216.9530000000009,
        "marginWithDrr": 11.114335032056559,
        "revWithoutDrr": 2421.013000000001
      },
      "2024-12-08": {
        "drr": 5.552848101265822,
        "krrr": 60.13851300698623,
        "ctrArk": 5.584066471163245,
        "ctrPrk": null,
        "margin": 22.111680396490524,
        "revWithDrr": 1588.376,
        "marginWithDrr": 13.297635791306678,
        "revWithoutDrr": 2641.196
      },
      "2024-12-09": {
        "drr": 9.706043179032713,
        "krrr": 4.51642007433015,
        "ctrArk": 5.8134226145183385,
        "ctrPrk": null,
        "margin": 16.13514884600017,
        "revWithDrr": 48.69680000000017,
        "marginWithDrr": 0.7287311015038013,
        "revWithoutDrr": 1078.2168000000001
      },
      "2024-12-10": {
        "drr": 5.757882623705408,
        "krrr": 58.66523641136997,
        "ctrArk": 5.344434000268564,
        "ctrPrk": null,
        "margin": 22.110919319780088,
        "revWithDrr": 1420.293000000001,
        "marginWithDrr": 12.971423091676265,
        "revWithoutDrr": 2421.013000000001
      },
      "2024-12-11": {
        "drr": 5.232978014656895,
        "krrr": 62.42199155742274,
        "ctrArk": 5.350960025180989,
        "ctrPrk": null,
        "margin": 22.10418979939299,
        "revWithDrr": 1304.7684999999994,
        "marginWithDrr": 13.797875490413794,
        "revWithoutDrr": 2090.2384999999995
      }
    },
    "order_info": {
      "stock": 323,
      "2024-12-07": {
        "buysSum": 10949.4,
        "buysCount": 13.86,
        "ordersSum": 17380,
        "ordersCount": 22,
        "addToCartCount": 105
      },
      "2024-12-08": {
        "buysSum": 11944.8,
        "buysCount": 15.120000000000001,
        "ordersSum": 18960,
        "ordersCount": 24,
        "addToCartCount": 90
      },
      "2024-12-09": {
        "buysSum": 6682.41,
        "buysCount": 9.45,
        "ordersSum": 10607,
        "ordersCount": 15,
        "addToCartCount": 83
      },
      "2024-12-10": {
        "buysSum": 10949.4,
        "buysCount": 13.86,
        "ordersSum": 17380,
        "ordersCount": 22,
        "addToCartCount": 80
      },
      "2024-12-11": {
        "buysSum": 9456.3,
        "buysCount": 11.97,
        "ordersSum": 15010,
        "ordersCount": 19,
        "addToCartCount": 86
      },
      "commission": 24.5,
      "pricePerOne": 740.2910958904109,
      "cart_to_order": "71.00",
      "click_to_cart": "14.99",
      "ordersCount30": 584,
      "buyoutsPercent": 61,
      "fullConversion": "10.64%",
      "addToCartPercent": 14,
      "cartToOrderPercent": 23
    },
    "tax": 0,
    "percent_buys": 63,
    "percent_mp": null,
    "price_before_spp": 790,
    "logistics": 68,
    "storage": 0,
    "size": {
      "width": 25,
      "height": 2,
      "length": 30,
      "isValid": true,
      "literSize": 1.5
    },
    "vendor_code": "BLUE bunny T-shirt"
  },
  {
    "article": "264201065",
    "chat_id": 179730539,
    "wb_api_key": "eyJhbGciOiJFUzI1NiIsImtpZCI6IjIwMjQxMTE4djEiLCJ0eXAiOiJKV1QifQ.eyJlbnQiOjEsImV4cCI6MTc0OTAwODM5NiwiaWQiOiIwMTkzOGQyZC05OWY5LTc4NDYtYTBkNy04ZTUwN2NmNTlmZmMiLCJpaWQiOjEzNzMwMTM2Miwib2lkIjozOTcxMzMxLCJzIjoxMDczNzQ5NzU4LCJzaWQiOiJlNDFiN2UxNy1lMzM0LTQ0NjEtYTlkNi1iNzJkNmVkMjI4ODkiLCJ0IjpmYWxzZSwidWlkIjoxMzczMDEzNjJ9.GQjaLnx1EL-vNXPOB1GxVrs0HV7tRfCEKqClEJtBoiLIi1bDL1F2fUS8sgU_C95dy-n3ij38ytH0f2WjpEJm-w",
    "notification_time": 10,
    "self_cost": 240,
    "marketing_cost": {
      "2024-11-13": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-14": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-15": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-16": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-17": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-18": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-19": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-20": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-21": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-22": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-23": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-24": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-25": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-26": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-27": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-28": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-29": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-30": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-01": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-02": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-03": {
        "ark": {
          "ctr": 0,
          "views": 7458,
          "clicks": 247
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 467.04
      },
      "2024-12-04": {
        "ark": {
          "ctr": 0,
          "views": 5953,
          "clicks": 189
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 389.45000000000005
      },
      "2024-12-05": {
        "ark": {
          "ctr": 0,
          "views": 5893,
          "clicks": 187
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 374.62
      },
      "2024-12-06": {
        "ark": {
          "ctr": 0,
          "views": 5609,
          "clicks": 142
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 340.06
      },
      "2024-12-07": {
        "ark": {
          "ctr": 0,
          "views": 6313,
          "clicks": 193
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 397.05999999999995
      },
      "2024-12-08": {
        "ark": {
          "ctr": 0,
          "views": 7154,
          "clicks": 254
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 446.87
      },
      "2024-12-09": {
        "ark": {
          "ctr": 0,
          "views": 6024,
          "clicks": 171
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 385.48
      },
      "2024-12-10": {
        "ark": {
          "ctr": 0,
          "views": 6002,
          "clicks": 171
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 370.35
      },
      "2024-12-11": {
        "ark": {
          "ctr": 0,
          "views": 6227,
          "clicks": 215
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 388.89
      },
      "2024-12-12": {
        "ark": {
          "ctr": 0,
          "views": 1939,
          "clicks": 77
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 125.68
      }
    },
    "sales": {
      "2024-12-05": {
        "infoBuysSum": 2326,
        "infoBuysCount": 2
      },
      "2024-12-06": {
        "infoBuysSum": 10467,
        "infoBuysCount": 9
      },
      "2024-12-07": {
        "infoBuysSum": 8051,
        "infoBuysCount": 7
      },
      "2024-12-08": {
        "infoBuysSum": 4622,
        "infoBuysCount": 4
      },
      "2024-12-09": {
        "infoBuysSum": 14998.55,
        "infoBuysCount": 13
      },
      "2024-12-10": {
        "infoBuysSum": 10197,
        "infoBuysCount": 9
      },
      "2024-12-11": {
        "infoBuysSum": 1981,
        "infoBuysCount": 4
      }
    },
    "other_metricks": {
      "2024-12-07": {
        "drr": 5.840835539864665,
        "krrr": 84.36792406047272,
        "ctrArk": 3.05718358941866,
        "ctrPrk": null,
        "margin": 41.98250179332322,
        "revWithDrr": 2142.9737200000004,
        "marginWithDrr": 35.41976523167753,
        "revWithoutDrr": 2540.0337200000004
      },
      "2024-12-08": {
        "drr": 4.930163283318623,
        "krrr": 86.80649341011404,
        "ctrArk": 3.5504612804025717,
        "ctrPrk": null,
        "margin": 41.986633874470684,
        "revWithDrr": 2940.1749600000003,
        "marginWithDrr": 36.447124567371105,
        "revWithoutDrr": 3387.04496
      },
      "2024-12-09": {
        "drr": 4.860421132265793,
        "krrr": 86.99477450255434,
        "ctrArk": 2.838645418326693,
        "ctrPrk": null,
        "margin": 41.99194655023171,
        "revWithDrr": 2578.5593400000002,
        "marginWithDrr": 36.53079921060722,
        "revWithoutDrr": 2964.0393400000003
      },
      "2024-12-10": {
        "drr": 10.895851721094441,
        "krrr": 70.83896980706224,
        "ctrArk": 2.8490503165611463,
        "ctrPrk": null,
        "margin": 41.98250179332322,
        "revWithDrr": 899.6668600000002,
        "marginWithDrr": 29.739971769621604,
        "revWithoutDrr": 1270.0168600000002
      },
      "2024-12-11": {
        "drr": 16.73364888123924,
        "krrr": 55.99267728289246,
        "ctrArk": 3.4527059579251644,
        "ctrPrk": null,
        "margin": 42.72437293314509,
        "revWithDrr": 494.8038399999999,
        "marginWithDrr": 23.922520257595384,
        "revWithoutDrr": 883.6938399999999
      }
    },
    "order_info": {
      "stock": 209,
      "2024-12-07": {
        "buysSum": 6050.22,
        "buysCount": 5.34,
        "ordersSum": 6798,
        "ordersCount": 6,
        "addToCartCount": 42
      },
      "2024-12-08": {
        "buysSum": 8066.96,
        "buysCount": 7.12,
        "ordersSum": 9064,
        "ordersCount": 8,
        "addToCartCount": 44
      },
      "2024-12-09": {
        "buysSum": 7058.59,
        "buysCount": 6.23,
        "ordersSum": 7931,
        "ordersCount": 7,
        "addToCartCount": 28
      },
      "2024-12-10": {
        "buysSum": 3025.11,
        "buysCount": 2.67,
        "ordersSum": 3399,
        "ordersCount": 3,
        "addToCartCount": 29
      },
      "2024-12-11": {
        "buysSum": 2068.36,
        "buysCount": 1.78,
        "ordersSum": 2324,
        "ordersCount": 2,
        "addToCartCount": 32
      },
      "commission": 19.5,
      "pricePerOne": 1129.47533632287,
      "cart_to_order": "94.00",
      "click_to_cart": "14.37",
      "ordersCount30": 223,
      "buyoutsPercent": 89,
      "fullConversion": "13.51%",
      "addToCartPercent": 11,
      "cartToOrderPercent": 19
    },
    "tax": 0,
    "percent_buys": 89,
    "percent_mp": null,
    "price_before_spp": 1133,
    "logistics": 86,
    "storage": 0,
    "size": {
      "width": 10,
      "height": 8,
      "length": 34,
      "isValid": true,
      "literSize": 2.72
    },
    "vendor_code": "nabor_silikon_white"
  },
  {
    "article": "127736137",
    "chat_id": 6043879539,
    "wb_api_key": "eyJhbGciOiJFUzI1NiIsImtpZCI6IjIwMjQxMDE2djEiLCJ0eXAiOiJKV1QifQ.eyJlbnQiOjEsImV4cCI6MTc0NjMwOTIyOSwiaWQiOiIwMTkyZWM0Yi05NTU5LTdjNjEtOWY5Ny1jZGFhN2E3NjQwODciLCJpaWQiOjQ2ODIwNDgsIm9pZCI6MzE1MDQzLCJzIjoxMDczNzQ5NzU4LCJzaWQiOiJlZDE3YTVjNC1lZjZlLTQzNWYtYjUwOS00ZGU3NjkyZjhkMjUiLCJ0IjpmYWxzZSwidWlkIjo0NjgyMDQ4fQ.uQCMJwM2VQSIRByiMWYvmIyg9iB2IbNeA_NW0vl3GzmQn-dr2vkSE69InFLdup5N4piVndT4jcwrEww8zNnMHg",
    "notification_time": null,
    "self_cost": 756,
    "marketing_cost": {
      "2024-11-13": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-14": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-15": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-16": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-17": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-18": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-19": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-20": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-21": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-22": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-23": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-24": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-25": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-26": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-27": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-28": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-29": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-30": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-01": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-02": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-03": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-04": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-05": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-06": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-07": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-08": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-09": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-10": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-11": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-12": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      }
    },
    "sales": {
      "2024-12-06": {
        "infoBuysSum": 9472,
        "infoBuysCount": 4
      },
      "2024-12-07": {
        "infoBuysSum": 7104,
        "infoBuysCount": 3
      },
      "2024-12-08": {
        "infoBuysSum": 2368,
        "infoBuysCount": 1
      },
      "2024-12-09": {
        "infoBuysSum": 4736,
        "infoBuysCount": 2
      },
      "2024-12-10": {
        "infoBuysSum": 2368,
        "infoBuysCount": 1
      },
      "2024-12-11": {
        "infoBuysSum": 2415,
        "infoBuysCount": 1
      }
    },
    "other_metricks": {
      "2024-12-07": {
        "drr": null,
        "krrr": 0,
        "ctrArk": null,
        "ctrPrk": null,
        "margin": null,
        "revWithDrr": 0,
        "marginWithDrr": null,
        "revWithoutDrr": 0
      },
      "2024-12-08": {
        "drr": 0,
        "krrr": 100,
        "ctrArk": null,
        "ctrPrk": null,
        "margin": 35.6692771626609,
        "revWithDrr": 792.5,
        "marginWithDrr": 35.6692771626609,
        "revWithoutDrr": 792.5
      },
      "2024-12-09": {
        "drr": 0,
        "krrr": 100,
        "ctrArk": null,
        "ctrPrk": null,
        "margin": 35.67899070895253,
        "revWithDrr": 2377.8192,
        "marginWithDrr": 35.67899070895253,
        "revWithoutDrr": 2377.8192
      },
      "2024-12-10": {
        "drr": 0,
        "krrr": 100,
        "ctrArk": null,
        "ctrPrk": null,
        "margin": 35.68956785752859,
        "revWithDrr": 2379.1808,
        "marginWithDrr": 35.68956785752859,
        "revWithoutDrr": 2379.1808
      },
      "2024-12-11": {
        "drr": null,
        "krrr": 0,
        "ctrArk": null,
        "ctrPrk": null,
        "margin": null,
        "revWithDrr": 0,
        "marginWithDrr": null,
        "revWithoutDrr": 0
      }
    },
    "order_info": {
      "stock": 73,
      "2024-12-07": {
        "buysSum": 0,
        "buysCount": 0,
        "ordersSum": 0,
        "ordersCount": 0,
        "addToCartCount": 0
      },
      "2024-12-08": {
        "buysSum": 2221.8,
        "buysCount": 0.92,
        "ordersSum": 2415,
        "ordersCount": 1,
        "addToCartCount": 6
      },
      "2024-12-09": {
        "buysSum": 6664.4800000000005,
        "buysCount": 2.7600000000000002,
        "ordersSum": 7244,
        "ordersCount": 3,
        "addToCartCount": 39
      },
      "2024-12-10": {
        "buysSum": 6666.320000000001,
        "buysCount": 2.7600000000000002,
        "ordersSum": 7246,
        "ordersCount": 3,
        "addToCartCount": 32
      },
      "2024-12-11": {
        "buysSum": 0,
        "buysCount": 0,
        "ordersSum": 0,
        "ordersCount": 0,
        "addToCartCount": 21
      },
      "commission": 18.5,
      "pricePerOne": 2241.7402597402597,
      "cart_to_order": "95.00",
      "click_to_cart": "14.85",
      "ordersCount30": 77,
      "buyoutsPercent": 91,
      "fullConversion": "14.11%",
      "addToCartPercent": 7,
      "cartToOrderPercent": 11
    },
    "tax": 0,
    "percent_buys": 92,
    "percent_mp": null,
    "price_before_spp": null,
    "logistics": 134,
    "storage": 0,
    "size": {
      "width": 15,
      "height": 20,
      "length": 20,
      "isValid": true,
      "literSize": 6
    },
    "vendor_code": "156-LT-бизиборд-22"
  },
  {
    "article": "254643755",
    "chat_id": 150462912,
    "wb_api_key": "eyJhbGciOiJFUzI1NiIsImtpZCI6IjIwMjQxMDE2djEiLCJ0eXAiOiJKV1QifQ.eyJlbnQiOjEsImV4cCI6MTc0NjMwOTIyOSwiaWQiOiIwMTkyZWM0Yi05NTU5LTdjNjEtOWY5Ny1jZGFhN2E3NjQwODciLCJpaWQiOjQ2ODIwNDgsIm9pZCI6MzE1MDQzLCJzIjoxMDczNzQ5NzU4LCJzaWQiOiJlZDE3YTVjNC1lZjZlLTQzNWYtYjUwOS00ZGU3NjkyZjhkMjUiLCJ0IjpmYWxzZSwidWlkIjo0NjgyMDQ4fQ.uQCMJwM2VQSIRByiMWYvmIyg9iB2IbNeA_NW0vl3GzmQn-dr2vkSE69InFLdup5N4piVndT4jcwrEww8zNnMHg",
    "notification_time": null,
    "self_cost": 500,
    "marketing_cost": {
      "2024-11-13": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-14": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-15": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-16": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-17": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-18": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-19": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-20": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-21": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-22": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-23": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-24": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-25": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-26": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-27": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-28": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-29": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-30": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-01": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-02": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-03": {
        "ark": {
          "ctr": 0,
          "views": 23273,
          "clicks": 797
        },
        "prk": {
          "ctr": 0,
          "views": 9441,
          "clicks": 296
        },
        "cost": 3823.8599999999997
      },
      "2024-12-04": {
        "ark": {
          "ctr": 0,
          "views": 17385,
          "clicks": 627
        },
        "prk": {
          "ctr": 0,
          "views": 5600,
          "clicks": 204
        },
        "cost": 2637.51
      },
      "2024-12-05": {
        "ark": {
          "ctr": 0,
          "views": 15051,
          "clicks": 597
        },
        "prk": {
          "ctr": 0,
          "views": 4561,
          "clicks": 191
        },
        "cost": 2296.6
      },
      "2024-12-06": {
        "ark": {
          "ctr": 0,
          "views": 16171,
          "clicks": 578
        },
        "prk": {
          "ctr": 0,
          "views": 4230,
          "clicks": 168
        },
        "cost": 2252.1900000000005
      },
      "2024-12-07": {
        "ark": {
          "ctr": 0,
          "views": 18177,
          "clicks": 654
        },
        "prk": {
          "ctr": 0,
          "views": 4153,
          "clicks": 148
        },
        "cost": 2378.65
      },
      "2024-12-08": {
        "ark": {
          "ctr": 0,
          "views": 18173,
          "clicks": 660
        },
        "prk": {
          "ctr": 0,
          "views": 5803,
          "clicks": 223
        },
        "cost": 2932.15
      },
      "2024-12-09": {
        "ark": {
          "ctr": 0,
          "views": 30509,
          "clicks": 968
        },
        "prk": {
          "ctr": 0,
          "views": 8922,
          "clicks": 390
        },
        "cost": 4055.88
      },
      "2024-12-10": {
        "ark": {
          "ctr": 0,
          "views": 22851,
          "clicks": 733
        },
        "prk": {
          "ctr": 0,
          "views": 9686,
          "clicks": 479
        },
        "cost": 3626.2400000000002
      },
      "2024-12-11": {
        "ark": {
          "ctr": 0,
          "views": 50012,
          "clicks": 1892
        },
        "prk": {
          "ctr": 0,
          "views": 9607,
          "clicks": 459
        },
        "cost": 5285.46
      },
      "2024-12-12": {
        "ark": {
          "ctr": 0,
          "views": 2252,
          "clicks": 89
        },
        "prk": {
          "ctr": 0,
          "views": 421,
          "clicks": 15
        },
        "cost": 220.20999999999998
      }
    },
    "sales": {
      "2024-12-06": {
        "infoBuysSum": 19734.450000000004,
        "infoBuysCount": 22
      },
      "2024-12-07": {
        "infoBuysSum": 17940.52,
        "infoBuysCount": 20
      },
      "2024-12-08": {
        "infoBuysSum": 17044.17,
        "infoBuysCount": 19
      },
      "2024-12-09": {
        "infoBuysSum": 18837.25,
        "infoBuysCount": 25
      },
      "2024-12-10": {
        "infoBuysSum": 8950.8,
        "infoBuysCount": 10
      },
      "2024-12-11": {
        "infoBuysSum": 15936,
        "infoBuysCount": 18
      }
    },
    "other_metricks": {
      "2024-12-07": {
        "drr": 13.25891861761427,
        "krrr": 0,
        "ctrArk": 3.5979534576662817,
        "ctrPrk": 3.563688899590657,
        "margin": 5.8985261733869425,
        "revWithDrr": -1436.8559200000004,
        "marginWithDrr": -8.999135194718978,
        "revWithoutDrr": 941.7940799999997
      },
      "2024-12-08": {
        "drr": 21.792270531400966,
        "krrr": 0,
        "ctrArk": 3.631761404281076,
        "ctrPrk": 3.8428399103911772,
        "margin": 5.894350790608742,
        "revWithDrr": -2226.3044399999985,
        "marginWithDrr": -18.59134643568448,
        "revWithoutDrr": 705.8455600000016
      },
      "2024-12-09": {
        "drr": 12.86192680915837,
        "krrr": 0,
        "ctrArk": 3.172834245632436,
        "ctrPrk": 4.371217215870881,
        "margin": 4.2855713576143675,
        "revWithDrr": -2853.123255999998,
        "marginWithDrr": -10.166031798743349,
        "revWithoutDrr": 1202.756744000002
      },
      "2024-12-10": {
        "drr": 17.998014691284496,
        "krrr": 0,
        "ctrArk": 3.207737079340073,
        "ctrPrk": 4.945281850092917,
        "margin": 4.287140843153919,
        "revWithDrr": -2857.481908,
        "marginWithDrr": -15.935347574019671,
        "revWithoutDrr": 768.758092
      },
      "2024-12-11": {
        "drr": 15.87845104695527,
        "krrr": 0,
        "ctrArk": 3.7830920579061025,
        "ctrPrk": 4.777766212136983,
        "margin": 4.287865026769241,
        "revWithDrr": -4015.1615479999973,
        "marginWithDrr": -13.553091205764767,
        "revWithoutDrr": 1270.2984520000027
      }
    },
    "order_info": {
      "stock": 470,
      "2024-12-07": {
        "buysSum": 15966.6,
        "buysCount": 17.8,
        "ordersSum": 17940,
        "ordersCount": 20,
        "addToCartCount": 175
      },
      "2024-12-08": {
        "buysSum": 11974.95,
        "buysCount": 13.35,
        "ordersSum": 13455,
        "ordersCount": 15,
        "addToCartCount": 157
      },
      "2024-12-09": {
        "buysSum": 28065.260000000002,
        "buysCount": 32.04,
        "ordersSum": 31534,
        "ordersCount": 36,
        "addToCartCount": 244
      },
      "2024-12-10": {
        "buysSum": 17931.72,
        "buysCount": 20.47,
        "ordersSum": 20148,
        "ordersCount": 23,
        "addToCartCount": 190
      },
      "2024-12-11": {
        "buysSum": 29625.43,
        "buysCount": 33.82,
        "ordersSum": 33287,
        "ordersCount": 38,
        "addToCartCount": 443
      },
      "commission": 18.5,
      "pricePerOne": 894.6365313653137,
      "cart_to_order": "92.00",
      "click_to_cart": "8.27",
      "ordersCount30": 542,
      "buyoutsPercent": 89,
      "fullConversion": "7.61%",
      "addToCartPercent": 13,
      "cartToOrderPercent": 10
    },
    "tax": 0,
    "percent_buys": 89,
    "percent_mp": null,
    "price_before_spp": 897,
    "logistics": 78,
    "storage": 0,
    "size": {
      "width": 11,
      "height": 6,
      "length": 34,
      "isValid": true,
      "literSize": 2.244
    },
    "vendor_code": "маш-спасатели-JY530-3"
  },
  {
    "article": "217899780",
    "chat_id": 737593394,
    "wb_api_key": "eyJhbGciOiJFUzI1NiIsImtpZCI6IjIwMjQxMTE4djEiLCJ0eXAiOiJKV1QifQ.eyJlbnQiOjEsImV4cCI6MTc0OTAwNjIyMCwiaWQiOiIwMTkzOGQwYy02ODAxLTdlZGItOThiOS00YzJmZmJjNTNiOGMiLCJpaWQiOjQ3NDU1ODg5LCJvaWQiOjE0MDEwMzcsInMiOjEwNzM3NDk3NTgsInNpZCI6IjYyNGI1YmJlLTI3NmEtNDRmMC1iMjI1LTM4ZTRjMTZjNzZhNiIsInQiOmZhbHNlLCJ1aWQiOjQ3NDU1ODg5fQ.hekQz3NnYF3DMCOG9ZqCr4jrl96Of8JrVmE01-3z5r9S45218ElHu8-IWtIyeXla1lvWRDU1mTmyAEoVQ83n4Q",
    "notification_time": 7,
    "self_cost": 735,
    "marketing_cost": {
      "2024-11-13": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-14": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-15": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-16": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-17": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-18": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-19": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-20": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-21": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-22": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-23": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-24": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-25": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-26": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-27": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-28": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-29": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-30": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-01": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-02": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-03": {
        "ark": {
          "ctr": 0,
          "views": 3675,
          "clicks": 131
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 925.3800000000001
      },
      "2024-12-04": {
        "ark": {
          "ctr": 0,
          "views": 3577,
          "clicks": 157
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 947.7
      },
      "2024-12-05": {
        "ark": {
          "ctr": 0,
          "views": 3341,
          "clicks": 183
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 959.56
      },
      "2024-12-06": {
        "ark": {
          "ctr": 0,
          "views": 592,
          "clicks": 24
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 151.09
      },
      "2024-12-07": {
        "ark": {
          "ctr": 0,
          "views": 3966,
          "clicks": 178
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 995.85
      },
      "2024-12-08": {
        "ark": {
          "ctr": 0,
          "views": 5290,
          "clicks": 275
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 1326.53
      },
      "2024-12-09": {
        "ark": {
          "ctr": 0,
          "views": 2180,
          "clicks": 113
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 564.3800000000001
      },
      "2024-12-10": {
        "ark": {
          "ctr": 0,
          "views": 2599,
          "clicks": 150
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 282.14
      },
      "2024-12-11": {
        "ark": {
          "ctr": 0,
          "views": 4415,
          "clicks": 245
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 476.64
      },
      "2024-12-12": {
        "ark": {
          "ctr": 0,
          "views": 263,
          "clicks": 9
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 29.75
      }
    },
    "sales": {
      "2024-12-06": {
        "infoBuysSum": 15787,
        "infoBuysCount": 10
      },
      "2024-12-07": {
        "infoBuysSum": 19258,
        "infoBuysCount": 12
      },
      "2024-12-08": {
        "infoBuysSum": 6232.4400000000005,
        "infoBuysCount": 5
      },
      "2024-12-09": {
        "infoBuysSum": 12444,
        "infoBuysCount": 6
      },
      "2024-12-10": {
        "infoBuysSum": 8190,
        "infoBuysCount": 6
      },
      "2024-12-11": {
        "infoBuysSum": 11704,
        "infoBuysCount": 10
      }
    },
    "other_metricks": {
      "2024-12-07": {
        "drr": 3.03067652697891,
        "krrr": 81.26837819258527,
        "ctrArk": 4.48814926878467,
        "ctrPrk": null,
        "margin": 26.523716026599487,
        "revWithDrr": 4320.560987999997,
        "marginWithDrr": 21.55539385122422,
        "revWithoutDrr": 5316.410987999998
      },
      "2024-12-08": {
        "drr": 3.2489101151114377,
        "krrr": 79.72494211445219,
        "ctrArk": 5.198487712665406,
        "ctrPrk": null,
        "margin": 26.269134154812225,
        "revWithDrr": 5216.1393599999965,
        "marginWithDrr": 20.943051998891832,
        "revWithoutDrr": 6542.669359999996
      },
      "2024-12-09": {
        "drr": 1.4104563402809018,
        "krrr": 89.00989595329398,
        "ctrArk": 5.183486238532111,
        "ctrPrk": null,
        "margin": 21.039141202218577,
        "revWithDrr": 4570.967196000002,
        "marginWithDrr": 18.726917693561358,
        "revWithoutDrr": 5135.347196000002
      },
      "2024-12-10": {
        "drr": 1.3363963622584312,
        "krrr": 90.69541376680738,
        "ctrArk": 5.7714505579068875,
        "ctrPrk": null,
        "margin": 23.54552533249679,
        "revWithDrr": 2750.1280980000006,
        "marginWithDrr": 21.354711623876412,
        "revWithoutDrr": 3032.2680980000005
      },
      "2024-12-11": {
        "drr": 1.142829740810895,
        "krrr": 91.84942489101533,
        "ctrArk": 5.549263873159683,
        "ctrPrk": null,
        "margin": 22.98600225539056,
        "revWithDrr": 5371.290896000001,
        "marginWithDrr": 21.112510877012042,
        "revWithoutDrr": 5847.930896000002
      }
    },
    "order_info": {
      "stock": 135,
      "2024-12-07": {
        "buysSum": 20043.989999999998,
        "buysCount": 9.76,
        "ordersSum": 32859,
        "ordersCount": 16,
        "addToCartCount": 41
      },
      "2024-12-08": {
        "buysSum": 24906.3,
        "buysCount": 12.2,
        "ordersSum": 40830,
        "ordersCount": 20,
        "addToCartCount": 59
      },
      "2024-12-09": {
        "buysSum": 24408.54,
        "buysCount": 13.42,
        "ordersSum": 40014,
        "ordersCount": 22,
        "addToCartCount": 57
      },
      "2024-12-10": {
        "buysSum": 12878.32,
        "buysCount": 6.71,
        "ordersSum": 21112,
        "ordersCount": 11,
        "addToCartCount": 53
      },
      "2024-12-11": {
        "buysSum": 25441.27,
        "buysCount": 13.42,
        "ordersSum": 41707,
        "ordersCount": 22,
        "addToCartCount": 70
      },
      "commission": 24.5,
      "pricePerOne": 1970.97212543554,
      "cart_to_order": "56.00",
      "click_to_cart": "16.40",
      "ordersCount30": 287,
      "buyoutsPercent": 61,
      "fullConversion": "9.18%",
      "addToCartPercent": 11,
      "cartToOrderPercent": 31
    },
    "tax": 0,
    "percent_buys": 61,
    "percent_mp": null,
    "price_before_spp": 2053,
    "logistics": 62,
    "storage": 0,
    "size": {
      "width": 29,
      "height": 1,
      "length": 38,
      "isValid": true,
      "literSize": 1.102
    },
    "vendor_code": "тем-син_закр_однотон"
  },
  {
    "article": "252799201",
    "chat_id": 843357804,
    "wb_api_key": "eyJhbGciOiJFUzI1NiIsImtpZCI6IjIwMjQxMTE4djEiLCJ0eXAiOiJKV1QifQ.eyJlbnQiOjEsImV4cCI6MTc0OTEwMzI3MSwiaWQiOiIwMTkzOTJkNS00N2YzLTc4ZTItYmZmOS02ZDRhMDVmZGYxNmMiLCJpaWQiOjk2Mzg1NzcsIm9pZCI6MjU4Mjg1LCJzIjoxMDczNzQ5NzU4LCJzaWQiOiI0OGU2YzMwMC05YTE2LTRlMzgtYjc0Ny1iNjcyOGVkZjU2M2UiLCJ0IjpmYWxzZSwidWlkIjo5NjM4NTc3fQ.XwuFzazFGwLUg0PyborB0R8PImIKuLTWFJEfN6WQjZuQOeslx3doaeN-_pA1olMWsjeeysAP0oesZ_w4RwDJaw",
    "notification_time": 20,
    "self_cost": 2000,
    "marketing_cost": {
      "2024-11-13": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-14": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-15": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-16": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-17": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-18": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-19": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-20": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-21": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-22": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-23": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-24": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-25": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-26": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-27": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-28": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-29": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-30": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-01": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-02": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-03": {
        "ark": {
          "ctr": 0,
          "views": 159,
          "clicks": 6
        },
        "prk": {
          "ctr": 0,
          "views": 4,
          "clicks": 0
        },
        "cost": 6.67
      },
      "2024-12-04": {
        "ark": {
          "ctr": 0,
          "views": 47,
          "clicks": 1
        },
        "prk": {
          "ctr": 0,
          "views": 1,
          "clicks": 0
        },
        "cost": 1.96
      },
      "2024-12-05": {
        "ark": {
          "ctr": 0,
          "views": 31,
          "clicks": 1
        },
        "prk": {
          "ctr": 0,
          "views": 3,
          "clicks": 0
        },
        "cost": 1.74
      },
      "2024-12-06": {
        "ark": {
          "ctr": 0,
          "views": 28,
          "clicks": 1
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 1.17
      },
      "2024-12-07": {
        "ark": {
          "ctr": 0,
          "views": 11,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0.41
      },
      "2024-12-08": {
        "ark": {
          "ctr": 0,
          "views": 9,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 3,
          "clicks": 0
        },
        "cost": 0.8400000000000001
      },
      "2024-12-09": {
        "ark": {
          "ctr": 0,
          "views": 7874,
          "clicks": 321
        },
        "prk": {
          "ctr": 0,
          "views": 972,
          "clicks": 38
        },
        "cost": 1499.59
      },
      "2024-12-10": {
        "ark": {
          "ctr": 0,
          "views": 11198,
          "clicks": 356
        },
        "prk": {
          "ctr": 0,
          "views": 30,
          "clicks": 2
        },
        "cost": 1907.6700000000003
      },
      "2024-12-11": {
        "ark": {
          "ctr": 0,
          "views": 11109,
          "clicks": 365
        },
        "prk": {
          "ctr": 0,
          "views": 240,
          "clicks": 5
        },
        "cost": 2542.4900000000002
      },
      "2024-12-12": {
        "ark": {
          "ctr": 0,
          "views": 554,
          "clicks": 19
        },
        "prk": {
          "ctr": 0,
          "views": 28,
          "clicks": 0
        },
        "cost": 151.75
      }
    },
    "sales": {
      "2024-12-06": {
        "infoBuysSum": 38418,
        "infoBuysCount": 6
      },
      "2024-12-07": {
        "infoBuysSum": 37506,
        "infoBuysCount": 6
      },
      "2024-12-08": {
        "infoBuysSum": 13680,
        "infoBuysCount": 2
      },
      "2024-12-09": {
        "infoBuysSum": 37164,
        "infoBuysCount": 6
      },
      "2024-12-10": {
        "infoBuysSum": 31236.3,
        "infoBuysCount": 5
      }
    },
    "other_metricks": {
      "2024-12-07": {
        "drr": 0.002997076023391813,
        "krrr": 99.98799494353112,
        "ctrArk": 0,
        "ctrPrk": null,
        "margin": 25.474606038906778,
        "revWithDrr": 3414.8175839999985,
        "marginWithDrr": 25.471547798066585,
        "revWithoutDrr": 3415.2275839999984
      },
      "2024-12-08": {
        "drr": 0.0061403508771929825,
        "krrr": 99.97540427455156,
        "ctrArk": 0,
        "ctrPrk": 0,
        "margin": 25.474606038906778,
        "revWithDrr": 3414.3875839999982,
        "marginWithDrr": 25.46834037474638,
        "revWithoutDrr": 3415.2275839999984
      },
      "2024-12-09": {
        "drr": 4.312884670693126,
        "krrr": 83.1969353730821,
        "ctrArk": 4.076708153416307,
        "ctrPrk": 3.909465020576132,
        "margin": 26.191071824760957,
        "revWithDrr": 7424.912959999998,
        "marginWithDrr": 21.79016909956389,
        "revWithoutDrr": 8924.502959999998
      },
      "2024-12-10": {
        "drr": 9.144233534656314,
        "krrr": 64.36993393455433,
        "ctrArk": 3.179139131987855,
        "ctrPrk": 6.666666666666667,
        "margin": 26.188137087449302,
        "revWithDrr": 3446.4317759999994,
        "marginWithDrr": 16.857286541881635,
        "revWithoutDrr": 5354.1017759999995
      },
      "2024-12-11": {
        "drr": 7.336363111726686,
        "krrr": 71.26290937353171,
        "ctrArk": 3.2856242686110364,
        "ctrPrk": 2.083333333333333,
        "margin": 26.050252982079254,
        "revWithDrr": 6304.926159999997,
        "marginWithDrr": 18.56416817419488,
        "revWithoutDrr": 8847.416159999997
      }
    },
    "order_info": {
      "stock": 86,
      "2024-12-07": {
        "buysSum": 13406.4,
        "buysCount": 1.96,
        "ordersSum": 13680,
        "ordersCount": 2,
        "addToCartCount": 35
      },
      "2024-12-08": {
        "buysSum": 13406.4,
        "buysCount": 1.96,
        "ordersSum": 13680,
        "ordersCount": 2,
        "addToCartCount": 34
      },
      "2024-12-09": {
        "buysSum": 34074.6,
        "buysCount": 4.9,
        "ordersSum": 34770,
        "ordersCount": 5,
        "addToCartCount": 63
      },
      "2024-12-10": {
        "buysSum": 20444.76,
        "buysCount": 2.94,
        "ordersSum": 20862,
        "ordersCount": 3,
        "addToCartCount": 53
      },
      "2024-12-11": {
        "buysSum": 33962.88,
        "buysCount": 4.9,
        "ordersSum": 34656,
        "ordersCount": 5,
        "addToCartCount": 79
      },
      "commission": 22.5,
      "pricePerOne": 6077.994047619048,
      "cart_to_order": "94.00",
      "click_to_cart": "3.23",
      "ordersCount30": 168,
      "buyoutsPercent": 98,
      "fullConversion": "3.04%",
      "addToCartPercent": 5,
      "cartToOrderPercent": 6
    },
    "tax": 0,
    "percent_buys": 98,
    "percent_mp": null,
    "price_before_spp": 6840,
    "logistics": 800,
    "storage": 5,
    "size": {
      "width": 22,
      "height": 24,
      "length": 97,
      "isValid": true,
      "literSize": 51.216
    },
    "vendor_code": "Королева белоснежная 150"
  },
  {
    "article": "225022910",
    "chat_id": 179730539,
    "wb_api_key": "eyJhbGciOiJFUzI1NiIsImtpZCI6IjIwMjQxMTE4djEiLCJ0eXAiOiJKV1QifQ.eyJlbnQiOjEsImV4cCI6MTc0OTAwODM5NiwiaWQiOiIwMTkzOGQyZC05OWY5LTc4NDYtYTBkNy04ZTUwN2NmNTlmZmMiLCJpaWQiOjEzNzMwMTM2Miwib2lkIjozOTcxMzMxLCJzIjoxMDczNzQ5NzU4LCJzaWQiOiJlNDFiN2UxNy1lMzM0LTQ0NjEtYTlkNi1iNzJkNmVkMjI4ODkiLCJ0IjpmYWxzZSwidWlkIjoxMzczMDEzNjJ9.GQjaLnx1EL-vNXPOB1GxVrs0HV7tRfCEKqClEJtBoiLIi1bDL1F2fUS8sgU_C95dy-n3ij38ytH0f2WjpEJm-w",
    "notification_time": 10,
    "self_cost": 851,
    "marketing_cost": {
      "2024-11-13": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-14": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-15": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-16": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-17": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-18": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-19": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-20": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-21": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-22": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-23": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-24": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-25": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-26": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-27": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-28": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-29": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-30": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-01": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-02": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-03": {
        "ark": {
          "ctr": 0,
          "views": 5418,
          "clicks": 204
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 312.32
      },
      "2024-12-04": {
        "ark": {
          "ctr": 0,
          "views": 7468,
          "clicks": 295
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 343.71
      },
      "2024-12-05": {
        "ark": {
          "ctr": 0,
          "views": 6263,
          "clicks": 232
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 301.49
      },
      "2024-12-06": {
        "ark": {
          "ctr": 0,
          "views": 6093,
          "clicks": 196
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 303.03999999999996
      },
      "2024-12-07": {
        "ark": {
          "ctr": 0,
          "views": 4230,
          "clicks": 149
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 245.58
      },
      "2024-12-08": {
        "ark": {
          "ctr": 0,
          "views": 232,
          "clicks": 13
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 4.46
      },
      "2024-12-09": {
        "ark": {
          "ctr": 0,
          "views": 80,
          "clicks": 2
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 1.47
      },
      "2024-12-10": {
        "ark": {
          "ctr": 0,
          "views": 1784,
          "clicks": 74
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 269.86
      },
      "2024-12-11": {
        "ark": {
          "ctr": 0,
          "views": 58,
          "clicks": 1
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 2.01
      },
      "2024-12-12": {
        "ark": {
          "ctr": 0,
          "views": 6,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0.14
      }
    },
    "sales": {
      "2024-12-05": {
        "infoBuysSum": 2160,
        "infoBuysCount": 1
      },
      "2024-12-06": {
        "infoBuysSum": 6480,
        "infoBuysCount": 3
      },
      "2024-12-07": {
        "infoBuysSum": 2160,
        "infoBuysCount": 1
      },
      "2024-12-08": {
        "infoBuysSum": 4320,
        "infoBuysCount": 2
      },
      "2024-12-09": {
        "infoBuysSum": 6480,
        "infoBuysCount": 3
      },
      "2024-12-11": {
        "infoBuysSum": 6480,
        "infoBuysCount": 3
      }
    },
    "other_metricks": {
      "2024-12-07": {
        "drr": 1.8949074074074077,
        "krrr": 91.64829180905149,
        "ctrArk": 3.522458628841608,
        "ctrPrk": null,
        "margin": 28.01093869074836,
        "revWithDrr": 2694.8963000000003,
        "marginWithDrr": 25.671546829751563,
        "revWithoutDrr": 2940.4763000000003
      },
      "2024-12-08": {
        "drr": null,
        "krrr": 0,
        "ctrArk": 5.603448275862069,
        "ctrPrk": null,
        "margin": null,
        "revWithDrr": -4.46,
        "marginWithDrr": null,
        "revWithoutDrr": 0
      },
      "2024-12-09": {
        "drr": null,
        "krrr": 0,
        "ctrArk": 2.5,
        "ctrPrk": null,
        "margin": null,
        "revWithDrr": -1.47,
        "marginWithDrr": null,
        "revWithoutDrr": 0
      },
      "2024-12-10": {
        "drr": 6.246759259259259,
        "krrr": 72.44898657171404,
        "ctrArk": 4.147982062780269,
        "ctrPrk": null,
        "margin": 27.991886716963872,
        "revWithDrr": 709.6320999999999,
        "marginWithDrr": 20.279838248742564,
        "revWithoutDrr": 979.4920999999999
      },
      "2024-12-11": {
        "drr": null,
        "krrr": 0,
        "ctrArk": 1.7241379310344827,
        "ctrPrk": null,
        "margin": null,
        "revWithDrr": -2.01,
        "marginWithDrr": null,
        "revWithoutDrr": 0
      }
    },
    "order_info": {
      "stock": 0,
      "2024-12-07": {
        "buysSum": 10497.6,
        "buysCount": 4.86,
        "ordersSum": 12960,
        "ordersCount": 6,
        "addToCartCount": 30
      },
      "2024-12-08": {
        "buysSum": 0,
        "buysCount": 0,
        "ordersSum": 0,
        "ordersCount": 0,
        "addToCartCount": 0
      },
      "2024-12-09": {
        "buysSum": 0,
        "buysCount": 0,
        "ordersSum": 0,
        "ordersCount": 0,
        "addToCartCount": 1
      },
      "2024-12-10": {
        "buysSum": 3499.2000000000003,
        "buysCount": 1.62,
        "ordersSum": 4320,
        "ordersCount": 2,
        "addToCartCount": 13
      },
      "2024-12-11": {
        "buysSum": 0,
        "buysCount": 0,
        "ordersSum": 0,
        "ordersCount": 0,
        "addToCartCount": 0
      },
      "commission": 19.5,
      "pricePerOne": 2159.9846153846156,
      "cart_to_order": "94.00",
      "click_to_cart": "14.37",
      "ordersCount30": 65,
      "buyoutsPercent": 81,
      "fullConversion": "13.51%",
      "addToCartPercent": 12,
      "cartToOrderPercent": 13
    },
    "tax": 0,
    "percent_buys": 81,
    "percent_mp": null,
    "price_before_spp": 2160,
    "logistics": 82,
    "storage": 0,
    "size": {
      "width": 10,
      "height": 7,
      "length": 35,
      "isValid": true,
      "literSize": 2.45
    },
    "vendor_code": "povarskoy_nabor"
  },
  {
    "article": "259396382",
    "chat_id": 643659011,
    "wb_api_key": "eyJhbGciOiJFUzI1NiIsImtpZCI6IjIwMjQxMTE4djEiLCJ0eXAiOiJKV1QifQ.eyJlbnQiOjEsImV4cCI6MTc0OTEwOTM0NSwiaWQiOiIwMTkzOTMzMS1mNmQ3LTcxMzMtODQ5ZS0yNjVlYWQzMjkwZDciLCJpaWQiOjM3MDc5NTYsIm9pZCI6NDA3MDgyNSwicyI6MTA3Mzc0OTc1OCwic2lkIjoiNzIzYzA1OWEtNTk4My00YzAwLThiNDgtNGJmYTZhZTlkYTgxIiwidCI6ZmFsc2UsInVpZCI6MzcwNzk1Nn0.LALOxpHrdhVmmPsrNVTlfMzFbGlcOPJiCG59_ULRpNJTi-HX1GIpHEB5hvlA0qYDqKUkDkyQ5aUCXPhhAoSPfA",
    "notification_time": 8,
    "self_cost": 1350,
    "marketing_cost": {
      "2024-11-12": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-13": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-14": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-15": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-16": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-17": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-18": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-19": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-20": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-21": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-22": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-23": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-24": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-25": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-26": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-27": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-28": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-29": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-30": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-01": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-02": {
        "ark": {
          "ctr": 0,
          "views": 123182,
          "clicks": 5693
        },
        "prk": {
          "ctr": 0,
          "views": 13991,
          "clicks": 921
        },
        "cost": 9287.849999999999
      },
      "2024-12-03": {
        "ark": {
          "ctr": 0,
          "views": 126417,
          "clicks": 5918
        },
        "prk": {
          "ctr": 0,
          "views": 16649,
          "clicks": 1318
        },
        "cost": 10549.470000000001
      },
      "2024-12-04": {
        "ark": {
          "ctr": 0,
          "views": 112134,
          "clicks": 5524
        },
        "prk": {
          "ctr": 0,
          "views": 15298,
          "clicks": 1137
        },
        "cost": 9186.289999999999
      },
      "2024-12-05": {
        "ark": {
          "ctr": 0,
          "views": 153555,
          "clicks": 7814
        },
        "prk": {
          "ctr": 0,
          "views": 23351,
          "clicks": 2160
        },
        "cost": 13183.99
      },
      "2024-12-06": {
        "ark": {
          "ctr": 0,
          "views": 142707,
          "clicks": 7218
        },
        "prk": {
          "ctr": 0,
          "views": 16119,
          "clicks": 1259
        },
        "cost": 10501.199999999999
      },
      "2024-12-07": {
        "ark": {
          "ctr": 0,
          "views": 136323,
          "clicks": 6634
        },
        "prk": {
          "ctr": 0,
          "views": 18050,
          "clicks": 1382
        },
        "cost": 11727.39
      },
      "2024-12-08": {
        "ark": {
          "ctr": 0,
          "views": 182018,
          "clicks": 10285
        },
        "prk": {
          "ctr": 0,
          "views": 31927,
          "clicks": 2756
        },
        "cost": 15481.900000000001
      },
      "2024-12-09": {
        "ark": {
          "ctr": 0,
          "views": 162479,
          "clicks": 8494
        },
        "prk": {
          "ctr": 0,
          "views": 31405,
          "clicks": 2248
        },
        "cost": 12843.9
      },
      "2024-12-10": {
        "ark": {
          "ctr": 0,
          "views": 135487,
          "clicks": 6930
        },
        "prk": {
          "ctr": 0,
          "views": 15825,
          "clicks": 1045
        },
        "cost": 8073.93
      },
      "2024-12-11": {
        "ark": {
          "ctr": 0,
          "views": 19514,
          "clicks": 884
        },
        "prk": {
          "ctr": 0,
          "views": 2453,
          "clicks": 196
        },
        "cost": 1230.08
      }
    },
    "sales": {
      "2024-11-26": {
        "infoBuysSum": 5320,
        "infoBuysCount": 1
      },
      "2024-12-06": {
        "infoBuysSum": 151847.21000000002,
        "infoBuysCount": 39
      },
      "2024-12-07": {
        "infoBuysSum": 217312.76,
        "infoBuysCount": 46
      },
      "2024-12-08": {
        "infoBuysSum": 161746.83000000002,
        "infoBuysCount": 46
      },
      "2024-12-09": {
        "infoBuysSum": 172855.86,
        "infoBuysCount": 40
      },
      "2024-12-10": {
        "infoBuysSum": 207655.87,
        "infoBuysCount": 51
      },
      "2024-12-11": {
        "infoBuysSum": 109126.86,
        "infoBuysCount": 33
      }
    },
    "other_metricks": {
      "2024-12-07": {
        "drr": 0,
        "krrr": 100,
        "ctrArk": null,
        "ctrPrk": null,
        "margin": 37.694289965284334,
        "revWithDrr": 91562.3064,
        "marginWithDrr": 37.694289965284334,
        "revWithoutDrr": 91562.3064
      },
      "2024-12-08": {
        "drr": 0,
        "krrr": 100,
        "ctrArk": null,
        "ctrPrk": null,
        "margin": 36.2783439522466,
        "revWithDrr": 119793.42079999999,
        "marginWithDrr": 36.2783439522466,
        "revWithoutDrr": 119793.42079999999
      },
      "2024-12-09": {
        "drr": 0,
        "krrr": 100,
        "ctrArk": null,
        "ctrPrk": null,
        "margin": 36.08228051847638,
        "revWithDrr": 78997.4192,
        "marginWithDrr": 36.08228051847638,
        "revWithoutDrr": 78997.4192
      },
      "2024-12-10": {
        "drr": 0,
        "krrr": 100,
        "ctrArk": null,
        "ctrPrk": null,
        "margin": 37.22559900707546,
        "revWithDrr": 84807.33360000001,
        "marginWithDrr": 37.22559900707546,
        "revWithoutDrr": 84807.33360000001
      },
      "2024-12-11": {
        "drr": 0,
        "krrr": 100,
        "ctrArk": null,
        "ctrPrk": null,
        "margin": 38.60311125022264,
        "revWithDrr": 73259.3632,
        "marginWithDrr": 38.60311125022264,
        "revWithoutDrr": 73259.3632
      }
    },
    "order_info": {
      "stock": 701,
      "2024-12-07": {
        "buysSum": 242907.63,
        "buysCount": 44.02,
        "ordersSum": 783573,
        "ordersCount": 142,
        "addToCartCount": 793
      },
      "2024-12-08": {
        "buysSum": 330206.42,
        "buysCount": 62.31,
        "ordersSum": 1065182,
        "ordersCount": 201,
        "addToCartCount": 1370
      },
      "2024-12-09": {
        "buysSum": 218936.88,
        "buysCount": 41.54,
        "ordersSum": 706248,
        "ordersCount": 134,
        "addToCartCount": 990
      },
      "2024-12-10": {
        "buysSum": 227819.93,
        "buysCount": 41.85,
        "ordersSum": 734903,
        "ordersCount": 135,
        "addToCartCount": 736
      },
      "2024-12-11": {
        "buysSum": 189775.8,
        "buysCount": 33.48,
        "ordersSum": 612180,
        "ordersCount": 108,
        "addToCartCount": 615
      },
      "commission": 24.5,
      "pricePerOne": 5346.782139894941,
      "cart_to_order": "47.00",
      "click_to_cart": "13.88",
      "ordersCount30": 3617,
      "buyoutsPercent": 31,
      "fullConversion": "6.52%",
      "addToCartPercent": 8,
      "cartToOrderPercent": 15
    },
    "tax": 0,
    "percent_buys": 31,
    "percent_mp": null,
    "price_before_spp": 5518,
    "logistics": 128,
    "storage": 0,
    "size": {
      "width": 35,
      "height": 4,
      "length": 40,
      "isValid": true,
      "literSize": 5.6
    },
    "vendor_code": "КБР1ЧЕР"
  },
  {
    "article": "229001228",
    "chat_id": 790998671,
    "wb_api_key": "eyJhbGciOiJFUzI1NiIsImtpZCI6IjIwMjQxMTE4djEiLCJ0eXAiOiJKV1QifQ.eyJlbnQiOjEsImV4cCI6MTc0ODk5NDIxMSwiaWQiOiIwMTkzOGM1NS0yOWY4LTdjYmUtYTAwYi1iNzJiOWYxOTI2NDYiLCJpaWQiOjUwMTY4ODUsIm9pZCI6MjU1MTc0LCJzIjoxMDczNzQ5NzU4LCJzaWQiOiI1MjFiMmVhNy1mMTllLTQyMDgtYjlmZS01YTFmYzc5YjQyNTEiLCJ0IjpmYWxzZSwidWlkIjo1MDE2ODg1fQ.fYu6InnnQg4M_QHMbcwX_gamWjNReMyneexoGropo24YHj-SvprS4GLIkrFd9_oxao1GgMa1R5PHOBN8zmLiFQ",
    "notification_time": 8,
    "self_cost": 1120,
    "marketing_cost": {
      "2024-11-13": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-14": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-15": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-16": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-17": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-18": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-19": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-20": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-21": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-22": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-23": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-24": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-25": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-26": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-27": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-28": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-29": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-30": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-01": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-02": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-03": {
        "ark": {
          "ctr": 0,
          "views": 2837,
          "clicks": 135
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 495.6
      },
      "2024-12-04": {
        "ark": {
          "ctr": 0,
          "views": 2693,
          "clicks": 128
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 461.89
      },
      "2024-12-05": {
        "ark": {
          "ctr": 0,
          "views": 2636,
          "clicks": 117
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 453.99
      },
      "2024-12-06": {
        "ark": {
          "ctr": 0,
          "views": 2713,
          "clicks": 124
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 461.65999999999997
      },
      "2024-12-07": {
        "ark": {
          "ctr": 0,
          "views": 2567,
          "clicks": 130
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 473.40999999999997
      },
      "2024-12-08": {
        "ark": {
          "ctr": 0,
          "views": 3471,
          "clicks": 187
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 653.94
      },
      "2024-12-09": {
        "ark": {
          "ctr": 0,
          "views": 3361,
          "clicks": 167
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 620.2
      },
      "2024-12-10": {
        "ark": {
          "ctr": 0,
          "views": 3080,
          "clicks": 115
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 533.02
      },
      "2024-12-11": {
        "ark": {
          "ctr": 0,
          "views": 3266,
          "clicks": 137
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 579.21
      },
      "2024-12-12": {
        "ark": {
          "ctr": 0,
          "views": 257,
          "clicks": 11
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 46.510000000000005
      }
    },
    "sales": {
      "2024-12-06": {
        "infoBuysSum": 19418.08,
        "infoBuysCount": 6
      },
      "2024-12-07": {
        "infoBuysSum": 23506,
        "infoBuysCount": 7
      },
      "2024-12-08": {
        "infoBuysSum": 10731,
        "infoBuysCount": 3
      },
      "2024-12-09": {
        "infoBuysSum": 6643,
        "infoBuysCount": 4
      },
      "2024-12-10": {
        "infoBuysSum": 10731,
        "infoBuysCount": 5
      },
      "2024-12-11": {
        "infoBuysSum": 511,
        "infoBuysCount": 2
      }
    },
    "other_metricks": {
      "2024-12-07": {
        "drr": 3.3087084148727985,
        "krrr": 73.07820916436164,
        "ctrArk": 5.064277366575769,
        "ctrPrk": null,
        "margin": 27.31127884943933,
        "revWithDrr": 1285.054000000001,
        "marginWithDrr": 19.95859348305534,
        "revWithoutDrr": 1758.4640000000009
      },
      "2024-12-08": {
        "drr": 2.285225048923679,
        "krrr": 81.40593154025332,
        "ctrArk": 5.387496398732354,
        "ctrPrk": null,
        "margin": 27.31127884943933,
        "revWithDrr": 2862.9880000000016,
        "marginWithDrr": 22.233000962942263,
        "revWithoutDrr": 3516.9280000000017
      },
      "2024-12-09": {
        "drr": 2.889758643183301,
        "krrr": 76.49151162385205,
        "ctrArk": 4.9687592978280275,
        "ctrPrk": null,
        "margin": 27.31645595833462,
        "revWithDrr": 2017.995999999999,
        "marginWithDrr": 20.89477008459395,
        "revWithoutDrr": 2638.195999999999
      },
      "2024-12-10": {
        "drr": 2.1287591357482327,
        "krrr": 82.67763210491047,
        "ctrArk": 3.7337662337662336,
        "ctrPrk": null,
        "margin": 27.309060088484195,
        "revWithDrr": 2544.042000000001,
        "marginWithDrr": 22.578484231265897,
        "revWithoutDrr": 3077.062000000001
      },
      "2024-12-11": {
        "drr": 2.3132313590798357,
        "krrr": 81.17652487990168,
        "ctrArk": 4.19473361910594,
        "ctrPrk": null,
        "margin": 27.309060088484195,
        "revWithDrr": 2497.8520000000008,
        "marginWithDrr": 22.16854595719567,
        "revWithoutDrr": 3077.062000000001
      }
    },
    "order_info": {
      "stock": 107,
      "2024-12-07": {
        "buysSum": 6438.6,
        "buysCount": 1.8,
        "ordersSum": 14308,
        "ordersCount": 4,
        "addToCartCount": 18
      },
      "2024-12-08": {
        "buysSum": 12877.2,
        "buysCount": 3.6,
        "ordersSum": 28616,
        "ordersCount": 8,
        "addToCartCount": 23
      },
      "2024-12-09": {
        "buysSum": 9657.9,
        "buysCount": 2.7,
        "ordersSum": 21462,
        "ordersCount": 6,
        "addToCartCount": 15
      },
      "2024-12-10": {
        "buysSum": 11267.550000000001,
        "buysCount": 3.15,
        "ordersSum": 25039,
        "ordersCount": 7,
        "addToCartCount": 20
      },
      "2024-12-11": {
        "buysSum": 11267.550000000001,
        "buysCount": 3.15,
        "ordersSum": 25039,
        "ordersCount": 7,
        "addToCartCount": 19
      },
      "commission": 24.5,
      "pricePerOne": 3203.8849206349205,
      "cart_to_order": "49.00",
      "click_to_cart": "15.96",
      "ordersCount30": 252,
      "buyoutsPercent": 44,
      "fullConversion": "7.82%",
      "addToCartPercent": 7,
      "cartToOrderPercent": 33
    },
    "tax": 0,
    "percent_buys": 45,
    "percent_mp": null,
    "price_before_spp": 3577,
    "logistics": 116,
    "storage": 0,
    "size": {
      "width": 40,
      "height": 4,
      "length": 30,
      "isValid": true,
      "literSize": 4.8
    },
    "vendor_code": "рубашка_джинс_голубая"
  },
  {
    "article": "264368002",
    "chat_id": 179730539,
    "wb_api_key": "eyJhbGciOiJFUzI1NiIsImtpZCI6IjIwMjQxMTE4djEiLCJ0eXAiOiJKV1QifQ.eyJlbnQiOjEsImV4cCI6MTc0OTAwODM5NiwiaWQiOiIwMTkzOGQyZC05OWY5LTc4NDYtYTBkNy04ZTUwN2NmNTlmZmMiLCJpaWQiOjEzNzMwMTM2Miwib2lkIjozOTcxMzMxLCJzIjoxMDczNzQ5NzU4LCJzaWQiOiJlNDFiN2UxNy1lMzM0LTQ0NjEtYTlkNi1iNzJkNmVkMjI4ODkiLCJ0IjpmYWxzZSwidWlkIjoxMzczMDEzNjJ9.GQjaLnx1EL-vNXPOB1GxVrs0HV7tRfCEKqClEJtBoiLIi1bDL1F2fUS8sgU_C95dy-n3ij38ytH0f2WjpEJm-w",
    "notification_time": 10,
    "self_cost": 240,
    "marketing_cost": {
      "2024-11-13": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-14": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-15": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-16": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-17": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-18": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-19": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-20": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-21": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-22": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-23": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-24": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-25": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-26": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-27": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-28": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-29": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-30": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-01": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-02": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-03": {
        "ark": {
          "ctr": 0,
          "views": 16917,
          "clicks": 363
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 1839.5
      },
      "2024-12-04": {
        "ark": {
          "ctr": 0,
          "views": 19449,
          "clicks": 411
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 2143.94
      },
      "2024-12-05": {
        "ark": {
          "ctr": 0,
          "views": 18054,
          "clicks": 354
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 1966.1599999999999
      },
      "2024-12-06": {
        "ark": {
          "ctr": 0,
          "views": 12992,
          "clicks": 198
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 898.24
      },
      "2024-12-07": {
        "ark": {
          "ctr": 0,
          "views": 11980,
          "clicks": 234
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 1123.8400000000001
      },
      "2024-12-08": {
        "ark": {
          "ctr": 0,
          "views": 11527,
          "clicks": 225
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 703.4300000000001
      },
      "2024-12-09": {
        "ark": {
          "ctr": 0,
          "views": 13654,
          "clicks": 274
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 942.9699999999999
      },
      "2024-12-10": {
        "ark": {
          "ctr": 0,
          "views": 13940,
          "clicks": 273
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 876.78
      },
      "2024-12-11": {
        "ark": {
          "ctr": 0,
          "views": 22864,
          "clicks": 397
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 1932.6000000000001
      },
      "2024-12-12": {
        "ark": {
          "ctr": 0,
          "views": 6452,
          "clicks": 126
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 445.48999999999995
      }
    },
    "sales": {
      "2024-12-05": {
        "infoBuysSum": 5880,
        "infoBuysCount": 6
      },
      "2024-12-06": {
        "infoBuysSum": 13813.37,
        "infoBuysCount": 14
      },
      "2024-12-07": {
        "infoBuysSum": 6803,
        "infoBuysCount": 7
      },
      "2024-12-08": {
        "infoBuysSum": 7865.79,
        "infoBuysCount": 8
      },
      "2024-12-09": {
        "infoBuysSum": 7969,
        "infoBuysCount": 8
      },
      "2024-12-10": {
        "infoBuysSum": 957.27,
        "infoBuysCount": 3
      },
      "2024-12-11": {
        "infoBuysSum": 15938,
        "infoBuysCount": 16
      },
      "2024-12-12": {
        "infoBuysSum": 1949,
        "infoBuysCount": 2
      }
    },
    "other_metricks": {
      "2024-12-07": {
        "drr": 11.329032258064517,
        "krrr": 64.43837799715772,
        "ctrArk": 1.9532554257095158,
        "ctrPrk": null,
        "margin": 37.04356714178545,
        "revWithDrr": 2036.4208000000008,
        "marginWithDrr": 23.87027381845462,
        "revWithoutDrr": 3160.260800000001
      },
      "2024-12-08": {
        "drr": 6.446980111813766,
        "krrr": 79.76183090342383,
        "ctrArk": 1.9519389259998263,
        "ctrPrk": null,
        "margin": 37.041337417114796,
        "revWithDrr": 2772.3290799999995,
        "marginWithDrr": 29.544848915005762,
        "revWithoutDrr": 3475.75908
      },
      "2024-12-09": {
        "drr": 19.011491935483868,
        "krrr": 40.30439019152837,
        "ctrArk": 2.006737952248425,
        "ctrPrk": null,
        "margin": 37.03184546136535,
        "revWithDrr": 636.6604000000005,
        "marginWithDrr": 14.92545948987248,
        "revWithoutDrr": 1579.6304000000005
      },
      "2024-12-10": {
        "drr": 7.365423387096774,
        "krrr": 76.88129192312635,
        "ctrArk": 1.9583931133428982,
        "ctrPrk": null,
        "margin": 37.0455207551888,
        "revWithDrr": 2915.7329600000003,
        "marginWithDrr": 28.481074956239063,
        "revWithoutDrr": 3792.51296
      },
      "2024-12-11": {
        "drr": 14.206115848279918,
        "krrr": 60.2327101305572,
        "ctrArk": 1.7363540937718684,
        "ctrPrk": null,
        "margin": 41.538509193602415,
        "revWithDrr": 2927.172959999999,
        "marginWithDrr": 25.0197698351374,
        "revWithoutDrr": 4859.772959999999
      }
    },
    "order_info": {
      "stock": 230,
      "2024-12-07": {
        "buysSum": 8531.2,
        "buysCount": 8.6,
        "ordersSum": 9920,
        "ordersCount": 10,
        "addToCartCount": 56
      },
      "2024-12-08": {
        "buysSum": 9383.46,
        "buysCount": 9.459999999999999,
        "ordersSum": 10911,
        "ordersCount": 11,
        "addToCartCount": 44
      },
      "2024-12-09": {
        "buysSum": 4265.6,
        "buysCount": 4.3,
        "ordersSum": 4960,
        "ordersCount": 5,
        "addToCartCount": 52
      },
      "2024-12-10": {
        "buysSum": 10237.44,
        "buysCount": 10.32,
        "ordersSum": 11904,
        "ordersCount": 12,
        "addToCartCount": 55
      },
      "2024-12-11": {
        "buysSum": 11699.44,
        "buysCount": 10.32,
        "ordersSum": 13604,
        "ordersCount": 12,
        "addToCartCount": 65
      },
      "commission": 19.5,
      "pricePerOne": 1002.1623616236162,
      "cart_to_order": "94.00",
      "click_to_cart": "15.17",
      "ordersCount30": 271,
      "buyoutsPercent": 86,
      "fullConversion": "14.26%",
      "addToCartPercent": 12,
      "cartToOrderPercent": 16
    },
    "tax": 0,
    "percent_buys": 86,
    "percent_mp": null,
    "price_before_spp": 992,
    "logistics": 86,
    "storage": 0,
    "size": {
      "width": 10,
      "height": 8,
      "length": 34,
      "isValid": true,
      "literSize": 2.72
    },
    "vendor_code": "nabor_silikon_green_3"
  },
  {
    "article": "264366731",
    "chat_id": 179730539,
    "wb_api_key": "eyJhbGciOiJFUzI1NiIsImtpZCI6IjIwMjQxMTE4djEiLCJ0eXAiOiJKV1QifQ.eyJlbnQiOjEsImV4cCI6MTc0OTAwODM5NiwiaWQiOiIwMTkzOGQyZC05OWY5LTc4NDYtYTBkNy04ZTUwN2NmNTlmZmMiLCJpaWQiOjEzNzMwMTM2Miwib2lkIjozOTcxMzMxLCJzIjoxMDczNzQ5NzU4LCJzaWQiOiJlNDFiN2UxNy1lMzM0LTQ0NjEtYTlkNi1iNzJkNmVkMjI4ODkiLCJ0IjpmYWxzZSwidWlkIjoxMzczMDEzNjJ9.GQjaLnx1EL-vNXPOB1GxVrs0HV7tRfCEKqClEJtBoiLIi1bDL1F2fUS8sgU_C95dy-n3ij38ytH0f2WjpEJm-w",
    "notification_time": 10,
    "self_cost": 240,
    "marketing_cost": {
      "2024-11-13": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-14": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-15": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-16": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-17": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-18": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-19": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-20": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-21": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-22": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-23": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-24": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-25": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-26": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-27": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-28": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-29": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-30": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-01": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-02": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-03": {
        "ark": {
          "ctr": 0,
          "views": 11218,
          "clicks": 158
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 561.8799999999999
      },
      "2024-12-04": {
        "ark": {
          "ctr": 0,
          "views": 8873,
          "clicks": 142
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 692.3399999999999
      },
      "2024-12-05": {
        "ark": {
          "ctr": 0,
          "views": 8541,
          "clicks": 116
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 656.8299999999999
      },
      "2024-12-06": {
        "ark": {
          "ctr": 0,
          "views": 8612,
          "clicks": 125
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 631.9
      },
      "2024-12-07": {
        "ark": {
          "ctr": 0,
          "views": 7676,
          "clicks": 130
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 565.6600000000001
      },
      "2024-12-08": {
        "ark": {
          "ctr": 0,
          "views": 8186,
          "clicks": 138
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 393.00000000000006
      },
      "2024-12-09": {
        "ark": {
          "ctr": 0,
          "views": 9500,
          "clicks": 126
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 553.48
      },
      "2024-12-10": {
        "ark": {
          "ctr": 0,
          "views": 7761,
          "clicks": 92
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 351.45000000000005
      },
      "2024-12-11": {
        "ark": {
          "ctr": 0,
          "views": 15347,
          "clicks": 173
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 575.32
      },
      "2024-12-12": {
        "ark": {
          "ctr": 0,
          "views": 5537,
          "clicks": 66
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 165.09
      }
    },
    "sales": {
      "2024-12-05": {
        "infoBuysSum": 3114,
        "infoBuysCount": 3
      },
      "2024-12-06": {
        "infoBuysSum": 4266,
        "infoBuysCount": 4
      },
      "2024-12-07": {
        "infoBuysSum": 4294.3099999999995,
        "infoBuysCount": 4
      },
      "2024-12-08": {
        "infoBuysSum": 5301,
        "infoBuysCount": 5
      },
      "2024-12-09": {
        "infoBuysSum": 4233.18,
        "infoBuysCount": 4
      },
      "2024-12-10": {
        "infoBuysSum": 5325,
        "infoBuysCount": 5
      },
      "2024-12-11": {
        "infoBuysSum": 2103,
        "infoBuysCount": 2
      },
      "2024-12-12": {
        "infoBuysSum": 1065,
        "infoBuysCount": 1
      }
    },
    "other_metricks": {
      "2024-12-07": {
        "drr": 17.704538341158063,
        "krrr": 54.44476058775166,
        "ctrArk": 1.6935904116727463,
        "ctrPrk": null,
        "margin": 40.90935837245697,
        "revWithDrr": 676.0413000000001,
        "marginWithDrr": 22.273002223869536,
        "revWithoutDrr": 1241.7013000000002
      },
      "2024-12-08": {
        "drr": null,
        "krrr": 0,
        "ctrArk": 1.6858050329831418,
        "ctrPrk": null,
        "margin": null,
        "revWithDrr": -393.00000000000006,
        "marginWithDrr": null,
        "revWithoutDrr": 0
      },
      "2024-12-09": {
        "drr": 17.323317683881065,
        "krrr": 55.42567282485732,
        "ctrArk": 1.3263157894736841,
        "ctrPrk": null,
        "margin": 40.90935837245697,
        "revWithDrr": 688.2213000000002,
        "marginWithDrr": 22.674287126266375,
        "revWithoutDrr": 1241.7013000000002
      },
      "2024-12-10": {
        "drr": 11.000000000000002,
        "krrr": 71.6960914835154,
        "ctrArk": 1.1854142507408838,
        "ctrPrk": null,
        "margin": 40.90935837245697,
        "revWithDrr": 890.2513000000001,
        "marginWithDrr": 29.330411004035916,
        "revWithoutDrr": 1241.7013000000002
      },
      "2024-12-11": {
        "drr": 5.415795914525087,
        "krrr": 87.05970361521048,
        "ctrArk": 1.1272561412653939,
        "ctrPrk": null,
        "margin": 44.05492451829942,
        "revWithDrr": 3870.6369,
        "marginWithDrr": 38.35408671353617,
        "revWithoutDrr": 4445.9569
      }
    },
    "order_info": {
      "stock": 323,
      "2024-12-07": {
        "buysSum": 3035.25,
        "buysCount": 2.8499999999999996,
        "ordersSum": 3195,
        "ordersCount": 3,
        "addToCartCount": 23
      },
      "2024-12-08": {
        "buysSum": 0,
        "buysCount": 0,
        "ordersSum": 0,
        "ordersCount": 0,
        "addToCartCount": 15
      },
      "2024-12-09": {
        "buysSum": 3035.25,
        "buysCount": 2.8499999999999996,
        "ordersSum": 3195,
        "ordersCount": 3,
        "addToCartCount": 25
      },
      "2024-12-10": {
        "buysSum": 3035.25,
        "buysCount": 2.8499999999999996,
        "ordersSum": 3195,
        "ordersCount": 3,
        "addToCartCount": 18
      },
      "2024-12-11": {
        "buysSum": 10091.85,
        "buysCount": 8.549999999999999,
        "ordersSum": 10623,
        "ordersCount": 9,
        "addToCartCount": 36
      },
      "commission": 19.5,
      "pricePerOne": 1076.183908045977,
      "cart_to_order": "94.00",
      "click_to_cart": "17.16",
      "ordersCount30": 87,
      "buyoutsPercent": 94,
      "fullConversion": "16.13%",
      "addToCartPercent": 12,
      "cartToOrderPercent": 15
    },
    "tax": 0,
    "percent_buys": 95,
    "percent_mp": null,
    "price_before_spp": 1065,
    "logistics": 86,
    "storage": 0,
    "size": {
      "width": 10,
      "height": 8,
      "length": 34,
      "isValid": true,
      "literSize": 2.72
    },
    "vendor_code": "nabor_silikon_green_2"
  },
  {
    "article": "105061578",
    "chat_id": 621634597,
    "wb_api_key": "eyJhbGciOiJFUzI1NiIsImtpZCI6IjIwMjQxMDE2djEiLCJ0eXAiOiJKV1QifQ.eyJlbnQiOjEsImV4cCI6MTc0NTI3NzkzMiwiaWQiOiIwMTkyYWVkMy0zZTE0LTczZjMtYjg3Zi0wNzY4NmEwM2MyMTAiLCJpaWQiOjUxMjU4OTA2LCJvaWQiOjIzMTg5MywicyI6MTA3Mzc0OTc1OCwic2lkIjoiNmFmMDg1MjEtNWFmNy00ZWJhLTlmMzMtMDU1YmQ4ZmYxMDdkIiwidCI6ZmFsc2UsInVpZCI6NTEyNTg5MDZ9.k6sknkEF1VwSIll5SBjuP5xQ33z1ud6CpszgC6sYqcmqoVAprF80M33RaotHwL72LDK0_45Yf9lSoE9H8R2iqw",
    "notification_time": 21,
    "self_cost": 30,
    "marketing_cost": {
      "2024-11-13": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-14": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-15": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-16": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-17": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-18": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-19": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-20": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-21": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-22": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-23": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-24": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-25": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-26": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-27": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-28": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-29": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-30": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-01": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-02": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-03": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-04": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-05": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-06": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-07": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-08": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-09": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-10": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-11": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-12": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      }
    },
    "sales": {
      "2024-12-05": {
        "infoBuysSum": 3992,
        "infoBuysCount": 21
      },
      "2024-12-06": {
        "infoBuysSum": 12556.65,
        "infoBuysCount": 66
      },
      "2024-12-07": {
        "infoBuysSum": 10468.14,
        "infoBuysCount": 55
      },
      "2024-12-08": {
        "infoBuysSum": 14018.86,
        "infoBuysCount": 74
      },
      "2024-12-09": {
        "infoBuysSum": 13660.77,
        "infoBuysCount": 72
      },
      "2024-12-10": {
        "infoBuysSum": 15342.37,
        "infoBuysCount": 81
      },
      "2024-12-11": {
        "infoBuysSum": 14385.100000000002,
        "infoBuysCount": 76
      }
    },
    "other_metricks": {
      "2024-12-07": {
        "drr": 0,
        "krrr": 100,
        "ctrArk": null,
        "ctrPrk": null,
        "margin": 11.566463775092107,
        "revWithDrr": 1590.7160999999996,
        "marginWithDrr": 11.566463775092107,
        "revWithoutDrr": 1590.7160999999996
      },
      "2024-12-08": {
        "drr": 0,
        "krrr": 100,
        "ctrArk": null,
        "ctrPrk": null,
        "margin": 11.585826933876527,
        "revWithDrr": 2091.9624000000003,
        "marginWithDrr": 11.585826933876527,
        "revWithoutDrr": 2091.9624000000003
      },
      "2024-12-09": {
        "drr": 0,
        "krrr": 100,
        "ctrArk": null,
        "ctrPrk": null,
        "margin": 11.575281618538284,
        "revWithDrr": 1612.0478000000003,
        "marginWithDrr": 11.575281618538284,
        "revWithoutDrr": 1612.0478000000003
      },
      "2024-12-10": {
        "drr": 0,
        "krrr": 100,
        "ctrArk": null,
        "ctrPrk": null,
        "margin": 11.577430022236722,
        "revWithDrr": 2488.1598999999987,
        "marginWithDrr": 11.577430022236722,
        "revWithoutDrr": 2488.1598999999987
      },
      "2024-12-11": {
        "drr": 0,
        "krrr": 100,
        "ctrArk": null,
        "ctrPrk": null,
        "margin": 11.571002735913154,
        "revWithDrr": 2168.3631000000023,
        "marginWithDrr": 11.571002735913154,
        "revWithoutDrr": 2168.3631000000023
      }
    },
    "order_info": {
      "stock": 1402,
      "2024-12-07": {
        "buysSum": 13752.83,
        "buysCount": 72.8,
        "ordersSum": 15113,
        "ordersCount": 80,
        "addToCartCount": 267
      },
      "2024-12-08": {
        "buysSum": 18056.22,
        "buysCount": 95.55,
        "ordersSum": 19842,
        "ordersCount": 105,
        "addToCartCount": 369
      },
      "2024-12-09": {
        "buysSum": 13926.640000000001,
        "buysCount": 73.71000000000001,
        "ordersSum": 15304,
        "ordersCount": 81,
        "addToCartCount": 286
      },
      "2024-12-10": {
        "buysSum": 21491.47,
        "buysCount": 113.75,
        "ordersSum": 23617,
        "ordersCount": 125,
        "addToCartCount": 305
      },
      "2024-12-11": {
        "buysSum": 18739.63,
        "buysCount": 99.19,
        "ordersSum": 20593,
        "ordersCount": 109,
        "addToCartCount": 309
      },
      "commission": 24.5,
      "pricePerOne": 194.43464776251662,
      "cart_to_order": "98.00",
      "click_to_cart": "17.34",
      "ordersCount30": 2257,
      "buyoutsPercent": 91,
      "fullConversion": "16.99%",
      "addToCartPercent": 29,
      "cartToOrderPercent": 33
    },
    "tax": 0,
    "percent_buys": 91,
    "percent_mp": null,
    "price_before_spp": 188,
    "logistics": 60,
    "storage": 0,
    "size": {
      "width": 8,
      "height": 12,
      "length": 2,
      "isValid": true,
      "literSize": 0.192
    },
    "vendor_code": "Зажим4"
  },
  {
    "article": "254642158",
    "chat_id": 150462912,
    "wb_api_key": "eyJhbGciOiJFUzI1NiIsImtpZCI6IjIwMjQxMDE2djEiLCJ0eXAiOiJKV1QifQ.eyJlbnQiOjEsImV4cCI6MTc0NjMwOTIyOSwiaWQiOiIwMTkyZWM0Yi05NTU5LTdjNjEtOWY5Ny1jZGFhN2E3NjQwODciLCJpaWQiOjQ2ODIwNDgsIm9pZCI6MzE1MDQzLCJzIjoxMDczNzQ5NzU4LCJzaWQiOiJlZDE3YTVjNC1lZjZlLTQzNWYtYjUwOS00ZGU3NjkyZjhkMjUiLCJ0IjpmYWxzZSwidWlkIjo0NjgyMDQ4fQ.uQCMJwM2VQSIRByiMWYvmIyg9iB2IbNeA_NW0vl3GzmQn-dr2vkSE69InFLdup5N4piVndT4jcwrEww8zNnMHg",
    "notification_time": null,
    "self_cost": 500,
    "marketing_cost": {
      "2024-11-13": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-14": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-15": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-16": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-17": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-18": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-19": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-20": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-21": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-22": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-23": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-24": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-25": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-26": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-27": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-28": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-29": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-30": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-01": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-02": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-03": {
        "ark": {
          "ctr": 0,
          "views": 712,
          "clicks": 25
        },
        "prk": {
          "ctr": 0,
          "views": 836,
          "clicks": 30
        },
        "cost": 428.65000000000003
      },
      "2024-12-04": {
        "ark": {
          "ctr": 0,
          "views": 781,
          "clicks": 17
        },
        "prk": {
          "ctr": 0,
          "views": 790,
          "clicks": 33
        },
        "cost": 424.01
      },
      "2024-12-05": {
        "ark": {
          "ctr": 0,
          "views": 1729,
          "clicks": 48
        },
        "prk": {
          "ctr": 0,
          "views": 1078,
          "clicks": 44
        },
        "cost": 738.56
      },
      "2024-12-06": {
        "ark": {
          "ctr": 0,
          "views": 1532,
          "clicks": 36
        },
        "prk": {
          "ctr": 0,
          "views": 1007,
          "clicks": 38
        },
        "cost": 656.8000000000001
      },
      "2024-12-07": {
        "ark": {
          "ctr": 0,
          "views": 681,
          "clicks": 29
        },
        "prk": {
          "ctr": 0,
          "views": 1192,
          "clicks": 46
        },
        "cost": 514.95
      },
      "2024-12-08": {
        "ark": {
          "ctr": 0,
          "views": 830,
          "clicks": 31
        },
        "prk": {
          "ctr": 0,
          "views": 1255,
          "clicks": 51
        },
        "cost": 556.75
      },
      "2024-12-09": {
        "ark": {
          "ctr": 0,
          "views": 3733,
          "clicks": 113
        },
        "prk": {
          "ctr": 0,
          "views": 1642,
          "clicks": 104
        },
        "cost": 1134.39
      },
      "2024-12-10": {
        "ark": {
          "ctr": 0,
          "views": 4802,
          "clicks": 170
        },
        "prk": {
          "ctr": 0,
          "views": 2627,
          "clicks": 166
        },
        "cost": 1718.5
      },
      "2024-12-11": {
        "ark": {
          "ctr": 0,
          "views": 4680,
          "clicks": 159
        },
        "prk": {
          "ctr": 0,
          "views": 2385,
          "clicks": 173
        },
        "cost": 1622.71
      },
      "2024-12-12": {
        "ark": {
          "ctr": 0,
          "views": 297,
          "clicks": 9
        },
        "prk": {
          "ctr": 0,
          "views": 107,
          "clicks": 7
        },
        "cost": 83.53999999999999
      }
    },
    "sales": {
      "2024-12-06": {
        "infoBuysSum": 8399.68,
        "infoBuysCount": 3
      },
      "2024-12-07": {
        "infoBuysSum": 2788,
        "infoBuysCount": 1
      },
      "2024-12-11": {
        "infoBuysSum": -2788,
        "infoBuysCount": 1
      }
    },
    "other_metricks": {
      "2024-12-07": {
        "drr": null,
        "krrr": 0,
        "ctrArk": 4.258443465491924,
        "ctrPrk": 3.859060402684564,
        "margin": null,
        "revWithDrr": -514.95,
        "marginWithDrr": null,
        "revWithoutDrr": 0
      },
      "2024-12-08": {
        "drr": 20.33418553688824,
        "krrr": 51.49631367627971,
        "ctrArk": 3.734939759036145,
        "ctrPrk": 4.063745019920319,
        "margin": 41.92296932067201,
        "revWithDrr": 591.1008999999997,
        "marginWithDrr": 21.58878378378377,
        "revWithoutDrr": 1147.8508999999997
      },
      "2024-12-09": {
        "drr": null,
        "krrr": 0,
        "ctrArk": 3.027055987141709,
        "ctrPrk": 6.333739342265529,
        "margin": null,
        "revWithDrr": -1134.39,
        "marginWithDrr": null,
        "revWithoutDrr": 0
      },
      "2024-12-10": {
        "drr": 34.38375350140056,
        "krrr": 11.770525533461011,
        "ctrArk": 3.540191586838817,
        "ctrPrk": 6.318995051389417,
        "margin": 38.97082432973189,
        "revWithDrr": 229.26179999999977,
        "marginWithDrr": 4.587070828331328,
        "revWithoutDrr": 1947.7617999999998
      },
      "2024-12-11": {
        "drr": 7.214930416611089,
        "krrr": 81.48738451234344,
        "ctrArk": 3.3974358974358974,
        "ctrPrk": 7.253668763102724,
        "margin": 38.9730474411987,
        "revWithDrr": 7142.718100000001,
        "marginWithDrr": 31.75811702458762,
        "revWithoutDrr": 8765.428100000001
      }
    },
    "order_info": {
      "stock": 432,
      "2024-12-07": {
        "buysSum": 0,
        "buysCount": 0,
        "ordersSum": 0,
        "ordersCount": 0,
        "addToCartCount": 8
      },
      "2024-12-08": {
        "buysSum": 2738,
        "buysCount": 1,
        "ordersSum": 2738,
        "ordersCount": 1,
        "addToCartCount": 10
      },
      "2024-12-09": {
        "buysSum": 0,
        "buysCount": 0,
        "ordersSum": 0,
        "ordersCount": 0,
        "addToCartCount": 20
      },
      "2024-12-10": {
        "buysSum": 4998,
        "buysCount": 2,
        "ordersSum": 4998,
        "ordersCount": 2,
        "addToCartCount": 38
      },
      "2024-12-11": {
        "buysSum": 22491,
        "buysCount": 9,
        "ordersSum": 22491,
        "ordersCount": 9,
        "addToCartCount": 52
      },
      "commission": 18.5,
      "pricePerOne": 2628.2272727272725,
      "cart_to_order": "95.00",
      "click_to_cart": "8.36",
      "ordersCount30": 22,
      "buyoutsPercent": 100,
      "fullConversion": "7.94%",
      "addToCartPercent": 6,
      "cartToOrderPercent": 9
    },
    "tax": 0,
    "percent_buys": 100,
    "percent_mp": null,
    "price_before_spp": null,
    "logistics": 297,
    "storage": 1,
    "size": {
      "width": 33,
      "height": 11,
      "length": 47,
      "isValid": true,
      "literSize": 17.061
    },
    "vendor_code": "трек-аэропорт-660-S110"
  },
  {
    "article": "217896205",
    "chat_id": 737593394,
    "wb_api_key": "eyJhbGciOiJFUzI1NiIsImtpZCI6IjIwMjQxMTE4djEiLCJ0eXAiOiJKV1QifQ.eyJlbnQiOjEsImV4cCI6MTc0OTAwNjIyMCwiaWQiOiIwMTkzOGQwYy02ODAxLTdlZGItOThiOS00YzJmZmJjNTNiOGMiLCJpaWQiOjQ3NDU1ODg5LCJvaWQiOjE0MDEwMzcsInMiOjEwNzM3NDk3NTgsInNpZCI6IjYyNGI1YmJlLTI3NmEtNDRmMC1iMjI1LTM4ZTRjMTZjNzZhNiIsInQiOmZhbHNlLCJ1aWQiOjQ3NDU1ODg5fQ.hekQz3NnYF3DMCOG9ZqCr4jrl96Of8JrVmE01-3z5r9S45218ElHu8-IWtIyeXla1lvWRDU1mTmyAEoVQ83n4Q",
    "notification_time": 7,
    "self_cost": 735,
    "marketing_cost": {
      "2024-11-13": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-14": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-15": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-16": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-17": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-18": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-19": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-20": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-21": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-22": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-23": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-24": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-25": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-26": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-27": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-28": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-29": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-30": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-01": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-02": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-03": {
        "ark": {
          "ctr": 0,
          "views": 4,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0.18
      },
      "2024-12-04": {
        "ark": {
          "ctr": 0,
          "views": 4,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0.16
      },
      "2024-12-05": {
        "ark": {
          "ctr": 0,
          "views": 4,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0.2
      },
      "2024-12-06": {
        "ark": {
          "ctr": 0,
          "views": 1,
          "clicks": 1
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0.04
      },
      "2024-12-07": {
        "ark": {
          "ctr": 0,
          "views": 1,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0.04
      },
      "2024-12-08": {
        "ark": {
          "ctr": 0,
          "views": 4,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0.19
      },
      "2024-12-09": {
        "ark": {
          "ctr": 0,
          "views": 2,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0.08
      },
      "2024-12-10": {
        "ark": {
          "ctr": 0,
          "views": 2,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0.13
      },
      "2024-12-11": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-12": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      }
    },
    "sales": {
      "2024-12-06": {
        "infoBuysSum": 10889,
        "infoBuysCount": 7
      },
      "2024-12-07": {
        "infoBuysSum": 6168,
        "infoBuysCount": 5
      },
      "2024-12-08": {
        "infoBuysSum": 5989,
        "infoBuysCount": 3
      },
      "2024-12-09": {
        "infoBuysSum": 3966,
        "infoBuysCount": 2
      },
      "2024-12-10": {
        "infoBuysSum": 12600,
        "infoBuysCount": 6
      },
      "2024-12-11": {
        "infoBuysSum": 14679,
        "infoBuysCount": 7
      }
    },
    "other_metricks": {
      "2024-12-07": {
        "drr": 0.00021164021164021165,
        "krrr": 99.99818739562645,
        "ctrArk": 0,
        "ctrPrk": null,
        "margin": 24.842614814814823,
        "revWithDrr": 2206.7294740000007,
        "marginWithDrr": 24.842164516492183,
        "revWithoutDrr": 2206.7694740000006
      },
      "2024-12-08": {
        "drr": 0.0005322128851540616,
        "krrr": 99.99544316925247,
        "ctrArk": 0,
        "ctrPrk": null,
        "margin": 24.84989905238692,
        "revWithDrr": 4169.374562000002,
        "marginWithDrr": 24.84876668454617,
        "revWithoutDrr": 4169.564562000001
      },
      "2024-12-09": {
        "drr": 0.00038095238095238096,
        "krrr": 99.99673834674282,
        "ctrArk": 0,
        "ctrPrk": null,
        "margin": 24.850495035461005,
        "revWithDrr": 2452.6638600000015,
        "marginWithDrr": 24.849684498480258,
        "revWithoutDrr": 2452.7438600000014
      },
      "2024-12-10": {
        "drr": 0.000442492937131965,
        "krrr": 99.99620640772613,
        "ctrArk": 0,
        "ctrPrk": null,
        "margin": 24.817488711360618,
        "revWithDrr": 3426.701103999999,
        "marginWithDrr": 24.816547237026295,
        "revWithoutDrr": 3426.831103999999
      },
      "2024-12-11": {
        "drr": 0,
        "krrr": 100,
        "ctrArk": null,
        "ctrPrk": null,
        "margin": 24.817488711360618,
        "revWithDrr": 3426.831103999999,
        "marginWithDrr": 24.817488711360618,
        "revWithoutDrr": 3426.831103999999
      }
    },
    "order_info": {
      "stock": 84,
      "2024-12-07": {
        "buysSum": 8883,
        "buysCount": 4.2299999999999995,
        "ordersSum": 18900,
        "ordersCount": 9,
        "addToCartCount": 17
      },
      "2024-12-08": {
        "buysSum": 16779,
        "buysCount": 7.989999999999999,
        "ordersSum": 35700,
        "ordersCount": 17,
        "addToCartCount": 44
      },
      "2024-12-09": {
        "buysSum": 9870,
        "buysCount": 4.699999999999999,
        "ordersSum": 21000,
        "ordersCount": 10,
        "addToCartCount": 21
      },
      "2024-12-10": {
        "buysSum": 13808.13,
        "buysCount": 6.58,
        "ordersSum": 29379,
        "ordersCount": 14,
        "addToCartCount": 38
      },
      "2024-12-11": {
        "buysSum": 13808.13,
        "buysCount": 6.58,
        "ordersSum": 29379,
        "ordersCount": 14,
        "addToCartCount": 22
      },
      "commission": 24.5,
      "pricePerOne": 2055.286908077994,
      "cart_to_order": "56.00",
      "click_to_cart": "16.40",
      "ordersCount30": 359,
      "buyoutsPercent": 48,
      "fullConversion": "9.18%",
      "addToCartPercent": 11,
      "cartToOrderPercent": 41
    },
    "tax": 0,
    "percent_buys": 47,
    "percent_mp": null,
    "price_before_spp": 2100,
    "logistics": 62,
    "storage": 0,
    "size": {
      "width": 29,
      "height": 1,
      "length": 38,
      "isValid": true,
      "literSize": 1.102
    },
    "vendor_code": "черн_закр_однотон"
  },
  {
    "article": "159883335",
    "chat_id": 209523270,
    "wb_api_key": "eyJhbGciOiJFUzI1NiIsImtpZCI6IjIwMjQxMTE4djEiLCJ0eXAiOiJKV1QifQ.eyJlbnQiOjEsImV4cCI6MTc0OTA2MTI2NywiaWQiOiIwMTkzOTA1NC01YTQyLTc3YzAtODQzMS1kNDg1M2U4NGQ3Y2YiLCJpaWQiOjI5NDExOTE2LCJvaWQiOjY5NjM4OSwicyI6MTA3Mzc0OTc1OCwic2lkIjoiNjY3OGNhN2YtZDM5OC00MzY3LWE4ZDktNGY1M2Q1MTg4NTBhIiwidCI6ZmFsc2UsInVpZCI6Mjk0MTE5MTZ9.v4yeTBsdFmNc2l4a5uooQJRB-3QX5zezHQ47kcgpyQnUbgD_UnhzJKzkkSE9E2uv7J0kNy34whTZxEsZZfS4DA",
    "notification_time": 10,
    "self_cost": 3035,
    "marketing_cost": {
      "2024-11-13": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-14": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-15": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-16": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-17": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-18": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-19": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-20": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-21": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-22": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-23": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-24": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-25": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-26": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-27": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-28": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-29": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-30": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-01": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-02": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-03": {
        "ark": {
          "ctr": 0,
          "views": 3113,
          "clicks": 136
        },
        "prk": {
          "ctr": 0,
          "views": 2589,
          "clicks": 96
        },
        "cost": 1255.24
      },
      "2024-12-04": {
        "ark": {
          "ctr": 0,
          "views": 4530,
          "clicks": 180
        },
        "prk": {
          "ctr": 0,
          "views": 2373,
          "clicks": 73
        },
        "cost": 2094.69
      },
      "2024-12-05": {
        "ark": {
          "ctr": 0,
          "views": 4327,
          "clicks": 130
        },
        "prk": {
          "ctr": 0,
          "views": 1896,
          "clicks": 66
        },
        "cost": 1839.54
      },
      "2024-12-06": {
        "ark": {
          "ctr": 0,
          "views": 4867,
          "clicks": 142
        },
        "prk": {
          "ctr": 0,
          "views": 1385,
          "clicks": 50
        },
        "cost": 1897.99
      },
      "2024-12-07": {
        "ark": {
          "ctr": 0,
          "views": 7791,
          "clicks": 204
        },
        "prk": {
          "ctr": 0,
          "views": 843,
          "clicks": 16
        },
        "cost": 2774.46
      },
      "2024-12-08": {
        "ark": {
          "ctr": 0,
          "views": 9323,
          "clicks": 258
        },
        "prk": {
          "ctr": 0,
          "views": 1299,
          "clicks": 45
        },
        "cost": 3845.23
      },
      "2024-12-09": {
        "ark": {
          "ctr": 0,
          "views": 7659,
          "clicks": 242
        },
        "prk": {
          "ctr": 0,
          "views": 1015,
          "clicks": 25
        },
        "cost": 3232.25
      },
      "2024-12-10": {
        "ark": {
          "ctr": 0,
          "views": 7685,
          "clicks": 253
        },
        "prk": {
          "ctr": 0,
          "views": 849,
          "clicks": 16
        },
        "cost": 3112.6899999999996
      },
      "2024-12-11": {
        "ark": {
          "ctr": 0,
          "views": 6084,
          "clicks": 192
        },
        "prk": {
          "ctr": 0,
          "views": 791,
          "clicks": 15
        },
        "cost": 2353.07
      },
      "2024-12-12": {
        "ark": {
          "ctr": 0,
          "views": 443,
          "clicks": 14
        },
        "prk": {
          "ctr": 0,
          "views": 64,
          "clicks": 3
        },
        "cost": 169.68
      }
    },
    "sales": {
      "2024-12-05": {
        "infoBuysSum": 10239,
        "infoBuysCount": 1
      },
      "2024-12-06": {
        "infoBuysSum": 29183.72,
        "infoBuysCount": 3
      },
      "2024-12-07": {
        "infoBuysSum": 9727,
        "infoBuysCount": 3
      },
      "2024-12-10": {
        "infoBuysSum": 19454,
        "infoBuysCount": 2
      },
      "2024-12-11": {
        "infoBuysSum": 9727,
        "infoBuysCount": 1
      }
    },
    "other_metricks": {
      "2024-12-07": {
        "drr": null,
        "krrr": 0,
        "ctrArk": 2.6184058529072005,
        "ctrPrk": 1.8979833926453145,
        "margin": null,
        "revWithDrr": -2774.46,
        "marginWithDrr": null,
        "revWithoutDrr": 0
      },
      "2024-12-08": {
        "drr": 9.882877557314691,
        "krrr": 66.34111393398176,
        "ctrArk": 2.767349565590475,
        "ctrPrk": 3.4642032332563506,
        "margin": 37.643419980862156,
        "revWithDrr": 7578.885440000002,
        "marginWithDrr": 24.973064138151013,
        "revWithoutDrr": 11424.115440000001
      },
      "2024-12-09": {
        "drr": 33.229669990747404,
        "krrr": 0,
        "ctrArk": 3.159681420550986,
        "ctrPrk": 2.4630541871921183,
        "margin": 37.63353472886731,
        "revWithDrr": -376.97113999999965,
        "marginWithDrr": -4.96860628491141,
        "revWithoutDrr": 2855.2788600000003
      },
      "2024-12-10": {
        "drr": 8.079872287405253,
        "krrr": 72.16215338125205,
        "ctrArk": 3.2921275211450878,
        "ctrPrk": 1.884570082449941,
        "margin": 37.21124973043777,
        "revWithDrr": 8068.814240000002,
        "marginWithDrr": 26.852439105559245,
        "revWithoutDrr": 11181.504240000002
      },
      "2024-12-11": {
        "drr": 4.152012422141055,
        "krrr": 85.35697575685656,
        "ctrArk": 3.155818540433925,
        "ctrPrk": 1.8963337547408345,
        "margin": 36.352414368167906,
        "revWithDrr": 13716.492960000003,
        "marginWithDrr": 31.02932151926912,
        "revWithoutDrr": 16069.562960000003
      }
    },
    "order_info": {
      "stock": 45,
      "2024-12-07": {
        "buysSum": 0,
        "buysCount": 0,
        "ordersSum": 0,
        "ordersCount": 0,
        "addToCartCount": 34
      },
      "2024-12-08": {
        "buysSum": 30348.24,
        "buysCount": 3.12,
        "ordersSum": 38908,
        "ordersCount": 4,
        "addToCartCount": 44
      },
      "2024-12-09": {
        "buysSum": 7587.06,
        "buysCount": 0.78,
        "ordersSum": 9727,
        "ordersCount": 1,
        "addToCartCount": 49
      },
      "2024-12-10": {
        "buysSum": 30048.72,
        "buysCount": 3.12,
        "ordersSum": 38524,
        "ordersCount": 4,
        "addToCartCount": 33
      },
      "2024-12-11": {
        "buysSum": 44204.94,
        "buysCount": 4.68,
        "ordersSum": 56673,
        "ordersCount": 6,
        "addToCartCount": 38
      },
      "commission": 16.5,
      "pricePerOne": 9399.379310344828,
      "cart_to_order": "94.00",
      "click_to_cart": "9.34",
      "ordersCount30": 58,
      "buyoutsPercent": 77,
      "fullConversion": "8.78%",
      "addToCartPercent": 7,
      "cartToOrderPercent": 5
    },
    "tax": 0,
    "percent_buys": 78,
    "percent_mp": null,
    "price_before_spp": null,
    "logistics": 789,
    "storage": 5,
    "size": {
      "width": 41,
      "height": 15,
      "length": 82,
      "isValid": true,
      "literSize": 50.43
    },
    "vendor_code": "Velvet6_Белый"
  },
  {
    "article": "175481056",
    "chat_id": 6568895149,
    "wb_api_key": "eyJhbGciOiJFUzI1NiIsImtpZCI6IjIwMjQxMTE4djEiLCJ0eXAiOiJKV1QifQ.eyJlbnQiOjEsImV4cCI6MTc0OTE3NDU0MywiaWQiOiIwMTkzOTcxNC1kMDliLTcyNmYtYjY0ZC0wMjlmNjVjMDQxZmYiLCJpaWQiOjQ4NzQyNDg4LCJvaWQiOjEyMDcxNTcsInMiOjEwNzM3NDk3NTgsInNpZCI6IjBkYzIzNGJjLTQ0YjUtNDNiZi05YmY0LTM3ZjEzNDZjOTVjNSIsInQiOmZhbHNlLCJ1aWQiOjQ4NzQyNDg4fQ.PsopY1dj2S7c9RD220HlLjNsBQkJJhPc8lxsyCUSB4RoGIxVmstQ6YgMeGWLj1NeYZnLtgZN1f6_XKY42x--Fg",
    "notification_time": 23,
    "self_cost": 1925,
    "marketing_cost": {
      "2024-11-13": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-14": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-15": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-16": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-17": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-18": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-19": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-20": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-21": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-22": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-23": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-24": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-25": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-26": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-27": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-28": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-29": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-30": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-01": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-02": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-03": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-04": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-05": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-06": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-07": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-08": {
        "ark": {
          "ctr": 0,
          "views": 5160,
          "clicks": 265
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 1007.3499999999999
      },
      "2024-12-09": {
        "ark": {
          "ctr": 0,
          "views": 6030,
          "clicks": 241
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 1145.23
      },
      "2024-12-10": {
        "ark": {
          "ctr": 0,
          "views": 5855,
          "clicks": 281
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 1091.87
      },
      "2024-12-11": {
        "ark": {
          "ctr": 0,
          "views": 4477,
          "clicks": 201
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 789.87
      },
      "2024-12-12": {
        "ark": {
          "ctr": 0,
          "views": 5,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0.23
      }
    },
    "sales": {
      "2024-12-06": {
        "infoBuysSum": 10227,
        "infoBuysCount": 3
      },
      "2024-12-07": {
        "infoBuysSum": 3409,
        "infoBuysCount": 1
      },
      "2024-12-08": {
        "infoBuysSum": 6783.91,
        "infoBuysCount": 2
      },
      "2024-12-09": {
        "infoBuysSum": 30679.77,
        "infoBuysCount": 9
      },
      "2024-12-10": {
        "infoBuysSum": 6818,
        "infoBuysCount": 2
      },
      "2024-12-11": {
        "infoBuysSum": 20419.91,
        "infoBuysCount": 6
      }
    },
    "other_metricks": {
      "2024-12-07": {
        "drr": 0,
        "krrr": 100,
        "ctrArk": null,
        "ctrPrk": null,
        "margin": 6.4446326627318165,
        "revWithDrr": 799.6990000000005,
        "marginWithDrr": 6.4446326627318165,
        "revWithoutDrr": 799.6990000000005
      },
      "2024-12-08": {
        "drr": 5.909944265180404,
        "krrr": 0,
        "ctrArk": 5.135658914728682,
        "ctrPrk": null,
        "margin": 6.443020898139705,
        "revWithDrr": -7.976249999999254,
        "marginWithDrr": -0.05142334931128818,
        "revWithoutDrr": 999.3737500000007
      },
      "2024-12-09": {
        "drr": 3.732701020175353,
        "krrr": 36.343319079231335,
        "ctrArk": 3.9966832504145935,
        "ctrPrk": null,
        "margin": 6.443737237958428,
        "revWithDrr": 653.842750000003,
        "marginWithDrr": 2.3418679850184794,
        "revWithoutDrr": 1799.072750000003
      },
      "2024-12-10": {
        "drr": 3.558782308268961,
        "krrr": 39.30929141136744,
        "ctrArk": 4.79931682322801,
        "ctrPrk": null,
        "margin": 6.443737237958428,
        "revWithDrr": 707.2027500000031,
        "marginWithDrr": 2.5329874486518773,
        "revWithoutDrr": 1799.072750000003
      },
      "2024-12-11": {
        "drr": 11.585068935171606,
        "krrr": 0,
        "ctrArk": 4.489613580522671,
        "ctrPrk": null,
        "margin": 6.4365738397712615,
        "revWithDrr": -390.52049999999974,
        "marginWithDrr": -6.294271143933797,
        "revWithoutDrr": 399.34950000000026
      }
    },
    "order_info": {
      "stock": 727,
      "2024-12-07": {
        "buysSum": 12408.76,
        "buysCount": 3.64,
        "ordersSum": 13636,
        "ordersCount": 4,
        "addToCartCount": 26
      },
      "2024-12-08": {
        "buysSum": 15510.95,
        "buysCount": 4.55,
        "ordersSum": 17045,
        "ordersCount": 5,
        "addToCartCount": 66
      },
      "2024-12-09": {
        "buysSum": 27919.710000000003,
        "buysCount": 8.19,
        "ordersSum": 30681,
        "ordersCount": 9,
        "addToCartCount": 57
      },
      "2024-12-10": {
        "buysSum": 27919.710000000003,
        "buysCount": 8.19,
        "ordersSum": 30681,
        "ordersCount": 9,
        "addToCartCount": 70
      },
      "2024-12-11": {
        "buysSum": 6204.38,
        "buysCount": 1.82,
        "ordersSum": 6818,
        "ordersCount": 2,
        "addToCartCount": 43
      },
      "commission": 19.5,
      "pricePerOne": 3396.438016528926,
      "cart_to_order": "96.00",
      "click_to_cart": "5.89",
      "ordersCount30": 121,
      "buyoutsPercent": 90,
      "fullConversion": "5.65%",
      "addToCartPercent": 8,
      "cartToOrderPercent": 13
    },
    "tax": 0,
    "percent_buys": 91,
    "percent_mp": null,
    "price_before_spp": 3409,
    "logistics": 266,
    "storage": 1,
    "size": {
      "width": 26,
      "height": 23,
      "length": 25,
      "isValid": true,
      "literSize": 14.95
    },
    "vendor_code": "VL-275"
  },
  {
    "article": "134451148",
    "chat_id": 209523270,
    "wb_api_key": "eyJhbGciOiJFUzI1NiIsImtpZCI6IjIwMjQxMTE4djEiLCJ0eXAiOiJKV1QifQ.eyJlbnQiOjEsImV4cCI6MTc0OTA2MTI2NywiaWQiOiIwMTkzOTA1NC01YTQyLTc3YzAtODQzMS1kNDg1M2U4NGQ3Y2YiLCJpaWQiOjI5NDExOTE2LCJvaWQiOjY5NjM4OSwicyI6MTA3Mzc0OTc1OCwic2lkIjoiNjY3OGNhN2YtZDM5OC00MzY3LWE4ZDktNGY1M2Q1MTg4NTBhIiwidCI6ZmFsc2UsInVpZCI6Mjk0MTE5MTZ9.v4yeTBsdFmNc2l4a5uooQJRB-3QX5zezHQ47kcgpyQnUbgD_UnhzJKzkkSE9E2uv7J0kNy34whTZxEsZZfS4DA",
    "notification_time": 10,
    "self_cost": 1689,
    "marketing_cost": {
      "2024-11-13": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-14": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-15": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-16": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-17": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-18": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-19": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-20": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-21": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-22": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-23": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-24": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-25": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-26": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-27": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-28": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-29": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-30": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-01": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-02": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-03": {
        "ark": {
          "ctr": 0,
          "views": 3556,
          "clicks": 55
        },
        "prk": {
          "ctr": 0,
          "views": 302,
          "clicks": 3
        },
        "cost": 1121.78
      },
      "2024-12-04": {
        "ark": {
          "ctr": 0,
          "views": 3303,
          "clicks": 51
        },
        "prk": {
          "ctr": 0,
          "views": 291,
          "clicks": 8
        },
        "cost": 1085.45
      },
      "2024-12-05": {
        "ark": {
          "ctr": 0,
          "views": 3154,
          "clicks": 44
        },
        "prk": {
          "ctr": 0,
          "views": 285,
          "clicks": 11
        },
        "cost": 1033.86
      },
      "2024-12-06": {
        "ark": {
          "ctr": 0,
          "views": 2968,
          "clicks": 53
        },
        "prk": {
          "ctr": 0,
          "views": 248,
          "clicks": 6
        },
        "cost": 991.71
      },
      "2024-12-07": {
        "ark": {
          "ctr": 0,
          "views": 4554,
          "clicks": 63
        },
        "prk": {
          "ctr": 0,
          "views": 306,
          "clicks": 3
        },
        "cost": 1589.6
      },
      "2024-12-08": {
        "ark": {
          "ctr": 0,
          "views": 5702,
          "clicks": 88
        },
        "prk": {
          "ctr": 0,
          "views": 438,
          "clicks": 2
        },
        "cost": 2129.62
      },
      "2024-12-09": {
        "ark": {
          "ctr": 0,
          "views": 4480,
          "clicks": 73
        },
        "prk": {
          "ctr": 0,
          "views": 281,
          "clicks": 4
        },
        "cost": 1669.33
      },
      "2024-12-10": {
        "ark": {
          "ctr": 0,
          "views": 4655,
          "clicks": 77
        },
        "prk": {
          "ctr": 0,
          "views": 314,
          "clicks": 4
        },
        "cost": 1788.1899999999998
      },
      "2024-12-11": {
        "ark": {
          "ctr": 0,
          "views": 4394,
          "clicks": 83
        },
        "prk": {
          "ctr": 0,
          "views": 163,
          "clicks": 8
        },
        "cost": 1258.0300000000002
      },
      "2024-12-12": {
        "ark": {
          "ctr": 0,
          "views": 639,
          "clicks": 11
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 184.07999999999998
      }
    },
    "sales": {
      "2024-12-09": {
        "infoBuysSum": 6309,
        "infoBuysCount": 1
      },
      "2024-12-10": {
        "infoBuysSum": 12618,
        "infoBuysCount": 2
      },
      "2024-12-11": {
        "infoBuysSum": 12618,
        "infoBuysCount": 2
      }
    },
    "other_metricks": {
      "2024-12-07": {
        "drr": 12.597876050087176,
        "krrr": 59.483660338291045,
        "ctrArk": 1.383399209486166,
        "ctrPrk": 0.9803921568627451,
        "margin": 42.593592106948755,
        "revWithDrr": 2333.7553999999996,
        "marginWithDrr": 25.33622765477454,
        "revWithoutDrr": 3923.3553999999995
      },
      "2024-12-08": {
        "drr": null,
        "krrr": 0,
        "ctrArk": 1.5433181339880744,
        "ctrPrk": 0.45662100456621,
        "margin": null,
        "revWithDrr": -2129.62,
        "marginWithDrr": null,
        "revWithoutDrr": 0
      },
      "2024-12-09": {
        "drr": 26.45950229830401,
        "krrr": 14.881247120034041,
        "ctrArk": 1.6294642857142858,
        "ctrPrk": 1.4234875444839856,
        "margin": 42.58273568743934,
        "revWithDrr": 291.8476999999998,
        "marginWithDrr": 6.336842128118773,
        "revWithoutDrr": 1961.1776999999997
      },
      "2024-12-10": {
        "drr": 15.115722738799661,
        "krrr": 48.27950741175983,
        "ctrArk": 1.6541353383458646,
        "ctrPrk": 1.2738853503184715,
        "margin": 40.035329265044744,
        "revWithDrr": 1669.2209999999993,
        "marginWithDrr": 19.32885975983973,
        "revWithoutDrr": 3457.410999999999
      },
      "2024-12-11": {
        "drr": 4.3884257159800475,
        "krrr": 80.15660794987141,
        "ctrArk": 1.8889394629039598,
        "ctrPrk": 4.9079754601226995,
        "margin": 30.294931740997598,
        "revWithDrr": 5081.7631,
        "marginWithDrr": 24.2833896643126,
        "revWithoutDrr": 6339.793100000001
      }
    },
    "order_info": {
      "stock": 101,
      "2024-12-07": {
        "buysSum": 9211.14,
        "buysCount": 1.46,
        "ordersSum": 12618,
        "ordersCount": 2,
        "addToCartCount": 15
      },
      "2024-12-08": {
        "buysSum": 0,
        "buysCount": 0,
        "ordersSum": 0,
        "ordersCount": 0,
        "addToCartCount": 10
      },
      "2024-12-09": {
        "buysSum": 4605.57,
        "buysCount": 0.73,
        "ordersSum": 6309,
        "ordersCount": 1,
        "addToCartCount": 12
      },
      "2024-12-10": {
        "buysSum": 8635.9,
        "buysCount": 1.46,
        "ordersSum": 11830,
        "ordersCount": 2,
        "addToCartCount": 15
      },
      "2024-12-11": {
        "buysSum": 20926.91,
        "buysCount": 4.38,
        "ordersSum": 28667,
        "ordersCount": 6,
        "addToCartCount": 22
      },
      "commission": 16.5,
      "pricePerOne": 5810.25,
      "cart_to_order": "95.00",
      "click_to_cart": "9.01",
      "ordersCount30": 20,
      "buyoutsPercent": 73,
      "fullConversion": "8.56%",
      "addToCartPercent": 5,
      "cartToOrderPercent": 7
    },
    "tax": 0,
    "percent_buys": 73,
    "percent_mp": null,
    "price_before_spp": 6309,
    "logistics": 458,
    "storage": 2,
    "size": {
      "width": 40,
      "height": 14,
      "length": 50,
      "isValid": true,
      "literSize": 28
    },
    "vendor_code": "na_nogkah_bel"
  },
  {
    "article": "175691580",
    "chat_id": 621634597,
    "wb_api_key": "eyJhbGciOiJFUzI1NiIsImtpZCI6IjIwMjQxMDE2djEiLCJ0eXAiOiJKV1QifQ.eyJlbnQiOjEsImV4cCI6MTc0NTI3NzkzMiwiaWQiOiIwMTkyYWVkMy0zZTE0LTczZjMtYjg3Zi0wNzY4NmEwM2MyMTAiLCJpaWQiOjUxMjU4OTA2LCJvaWQiOjIzMTg5MywicyI6MTA3Mzc0OTc1OCwic2lkIjoiNmFmMDg1MjEtNWFmNy00ZWJhLTlmMzMtMDU1YmQ4ZmYxMDdkIiwidCI6ZmFsc2UsInVpZCI6NTEyNTg5MDZ9.k6sknkEF1VwSIll5SBjuP5xQ33z1ud6CpszgC6sYqcmqoVAprF80M33RaotHwL72LDK0_45Yf9lSoE9H8R2iqw",
    "notification_time": 21,
    "self_cost": 58,
    "marketing_cost": {
      "2024-11-13": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-14": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-15": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-16": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-17": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-18": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-19": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-20": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-21": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-22": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-23": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-24": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-25": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-26": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-27": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-28": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-29": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-30": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-01": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-02": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-03": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-04": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-05": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-06": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-07": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-08": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-09": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-10": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-11": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-12": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      }
    },
    "sales": {
      "2024-12-05": {
        "infoBuysSum": 4212.84,
        "infoBuysCount": 14
      },
      "2024-12-06": {
        "infoBuysSum": 23755.830000000005,
        "infoBuysCount": 79
      },
      "2024-12-07": {
        "infoBuysSum": 18356.170000000002,
        "infoBuysCount": 61
      },
      "2024-12-08": {
        "infoBuysSum": 26156.430000000004,
        "infoBuysCount": 87
      },
      "2024-12-09": {
        "infoBuysSum": 26174.230000000007,
        "infoBuysCount": 87
      },
      "2024-12-10": {
        "infoBuysSum": 29183.840000000007,
        "infoBuysCount": 99
      },
      "2024-12-11": {
        "infoBuysSum": 29478.520000000008,
        "infoBuysCount": 98
      }
    },
    "other_metricks": {
      "2024-12-07": {
        "drr": 0,
        "krrr": 100,
        "ctrArk": null,
        "ctrPrk": null,
        "margin": 29.129913512357643,
        "revWithDrr": 8064.581599999998,
        "marginWithDrr": 29.129913512357643,
        "revWithoutDrr": 8064.581599999998
      },
      "2024-12-08": {
        "drr": 0,
        "krrr": 100,
        "ctrArk": null,
        "ctrPrk": null,
        "margin": 29.179498602987504,
        "revWithDrr": 8252.4816,
        "marginWithDrr": 29.179498602987504,
        "revWithoutDrr": 8252.4816
      },
      "2024-12-09": {
        "drr": 0,
        "krrr": 100,
        "ctrArk": null,
        "ctrPrk": null,
        "margin": 29.18968881682519,
        "revWithDrr": 7431.391199999998,
        "marginWithDrr": 29.18968881682519,
        "revWithoutDrr": 7431.391199999998
      },
      "2024-12-10": {
        "drr": 0,
        "krrr": 100,
        "ctrArk": null,
        "ctrPrk": null,
        "margin": 29.17282191264074,
        "revWithDrr": 6681.754799999999,
        "marginWithDrr": 29.17282191264074,
        "revWithoutDrr": 6681.754799999999
      },
      "2024-12-11": {
        "drr": 0,
        "krrr": 100,
        "ctrArk": null,
        "ctrPrk": null,
        "margin": 29.157914813633667,
        "revWithDrr": 5686.9771999999975,
        "marginWithDrr": 29.157914813633667,
        "revWithoutDrr": 5686.9771999999975
      }
    },
    "order_info": {
      "stock": 2588,
      "2024-12-07": {
        "buysSum": 27684.879999999997,
        "buysCount": 92.11999999999999,
        "ordersSum": 29452,
        "ordersCount": 98,
        "addToCartCount": 338
      },
      "2024-12-08": {
        "buysSum": 28281.78,
        "buysCount": 94,
        "ordersSum": 30087,
        "ordersCount": 100,
        "addToCartCount": 368
      },
      "2024-12-09": {
        "buysSum": 25458.96,
        "buysCount": 84.6,
        "ordersSum": 27084,
        "ordersCount": 90,
        "addToCartCount": 316
      },
      "2024-12-10": {
        "buysSum": 22904.039999999997,
        "buysCount": 76.14,
        "ordersSum": 24366,
        "ordersCount": 81,
        "addToCartCount": 304
      },
      "2024-12-11": {
        "buysSum": 19504.059999999998,
        "buysCount": 64.86,
        "ordersSum": 20749,
        "ordersCount": 69,
        "addToCartCount": 291
      },
      "commission": 19.5,
      "pricePerOne": 298.75446917183507,
      "cart_to_order": "95.00",
      "click_to_cart": "12.53",
      "ordersCount30": 2741,
      "buyoutsPercent": 94,
      "fullConversion": "11.90%",
      "addToCartPercent": 21,
      "cartToOrderPercent": 24
    },
    "tax": 0,
    "percent_buys": 94,
    "percent_mp": null,
    "price_before_spp": 300,
    "logistics": 60,
    "storage": 0,
    "size": {
      "width": 35,
      "height": 1,
      "length": 25,
      "isValid": true,
      "literSize": 0.875
    },
    "vendor_code": "NakB01-36"
  },
  {
    "article": "85606396",
    "chat_id": 209523270,
    "wb_api_key": "eyJhbGciOiJFUzI1NiIsImtpZCI6IjIwMjQxMTE4djEiLCJ0eXAiOiJKV1QifQ.eyJlbnQiOjEsImV4cCI6MTc0OTA2MTI2NywiaWQiOiIwMTkzOTA1NC01YTQyLTc3YzAtODQzMS1kNDg1M2U4NGQ3Y2YiLCJpaWQiOjI5NDExOTE2LCJvaWQiOjY5NjM4OSwicyI6MTA3Mzc0OTc1OCwic2lkIjoiNjY3OGNhN2YtZDM5OC00MzY3LWE4ZDktNGY1M2Q1MTg4NTBhIiwidCI6ZmFsc2UsInVpZCI6Mjk0MTE5MTZ9.v4yeTBsdFmNc2l4a5uooQJRB-3QX5zezHQ47kcgpyQnUbgD_UnhzJKzkkSE9E2uv7J0kNy34whTZxEsZZfS4DA",
    "notification_time": 10,
    "self_cost": 1823,
    "marketing_cost": {
      "2024-11-13": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-14": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-15": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-16": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-17": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-18": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-19": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-20": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-21": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-22": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-23": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-24": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-25": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-26": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-27": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-28": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-29": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-30": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-01": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-02": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-03": {
        "ark": {
          "ctr": 0,
          "views": 2417,
          "clicks": 43
        },
        "prk": {
          "ctr": 0,
          "views": 1325,
          "clicks": 35
        },
        "cost": 814.96
      },
      "2024-12-04": {
        "ark": {
          "ctr": 0,
          "views": 2065,
          "clicks": 44
        },
        "prk": {
          "ctr": 0,
          "views": 2591,
          "clicks": 75
        },
        "cost": 1410.06
      },
      "2024-12-05": {
        "ark": {
          "ctr": 0,
          "views": 2143,
          "clicks": 19
        },
        "prk": {
          "ctr": 0,
          "views": 2243,
          "clicks": 27
        },
        "cost": 1295.16
      },
      "2024-12-06": {
        "ark": {
          "ctr": 0,
          "views": 2185,
          "clicks": 23
        },
        "prk": {
          "ctr": 0,
          "views": 1943,
          "clicks": 42
        },
        "cost": 1179.68
      },
      "2024-12-07": {
        "ark": {
          "ctr": 0,
          "views": 2716,
          "clicks": 44
        },
        "prk": {
          "ctr": 0,
          "views": 3035,
          "clicks": 61
        },
        "cost": 1753.0099999999998
      },
      "2024-12-08": {
        "ark": {
          "ctr": 0,
          "views": 3049,
          "clicks": 49
        },
        "prk": {
          "ctr": 0,
          "views": 5021,
          "clicks": 126
        },
        "cost": 2623.35
      },
      "2024-12-09": {
        "ark": {
          "ctr": 0,
          "views": 2891,
          "clicks": 68
        },
        "prk": {
          "ctr": 0,
          "views": 2730,
          "clicks": 59
        },
        "cost": 1636
      },
      "2024-12-10": {
        "ark": {
          "ctr": 0,
          "views": 2382,
          "clicks": 45
        },
        "prk": {
          "ctr": 0,
          "views": 1511,
          "clicks": 33
        },
        "cost": 802.5699999999999
      },
      "2024-12-11": {
        "ark": {
          "ctr": 0,
          "views": 2832,
          "clicks": 48
        },
        "prk": {
          "ctr": 0,
          "views": 1404,
          "clicks": 25
        },
        "cost": 749.96
      },
      "2024-12-12": {
        "ark": {
          "ctr": 0,
          "views": 311,
          "clicks": 7
        },
        "prk": {
          "ctr": 0,
          "views": 223,
          "clicks": 6
        },
        "cost": 97.28
      }
    },
    "sales": {
      "2024-12-06": {
        "infoBuysSum": 11988,
        "infoBuysCount": 2
      },
      "2024-12-08": {
        "infoBuysSum": 6309,
        "infoBuysCount": 1
      },
      "2024-12-09": {
        "infoBuysSum": 11988,
        "infoBuysCount": 2
      }
    },
    "other_metricks": {
      "2024-12-07": {
        "drr": 29.246079412746074,
        "krrr": 20.443729939726392,
        "ctrArk": 1.6200294550810017,
        "ctrPrk": 2.009884678747941,
        "margin": 40.846112779446116,
        "revWithDrr": 450.4744000000005,
        "marginWithDrr": 8.350468987506034,
        "revWithoutDrr": 2203.4844000000003
      },
      "2024-12-08": {
        "drr": 14.588755422088756,
        "krrr": 60.32112879510364,
        "ctrArk": 1.6070842899311248,
        "ctrPrk": 2.509460266879108,
        "margin": 40.85229179797082,
        "revWithDrr": 3988.103200000002,
        "marginWithDrr": 24.642563551205537,
        "revWithoutDrr": 6611.453200000002
      },
      "2024-12-09": {
        "drr": null,
        "krrr": 0,
        "ctrArk": 2.352127291594604,
        "ctrPrk": 2.161172161172161,
        "margin": null,
        "revWithDrr": -1636,
        "marginWithDrr": null,
        "revWithoutDrr": 0
      },
      "2024-12-10": {
        "drr": 13.568385460693152,
        "krrr": 62.59972652882012,
        "ctrArk": 1.8891687657430731,
        "ctrPrk": 2.183984116479153,
        "margin": 40.3098224852071,
        "revWithDrr": 1343.3234,
        "marginWithDrr": 25.233838639992484,
        "revWithoutDrr": 2145.8934
      },
      "2024-12-11": {
        "drr": 12.678951817413356,
        "krrr": 65.05138605673515,
        "ctrArk": 1.694915254237288,
        "ctrPrk": 1.7806267806267806,
        "margin": 40.3098224852071,
        "revWithDrr": 1395.9334,
        "marginWithDrr": 26.222098243636704,
        "revWithoutDrr": 2145.8934
      }
    },
    "order_info": {
      "stock": 133,
      "2024-12-07": {
        "buysSum": 5394.6,
        "buysCount": 0.9,
        "ordersSum": 5994,
        "ordersCount": 1,
        "addToCartCount": 23
      },
      "2024-12-08": {
        "buysSum": 16183.800000000001,
        "buysCount": 2.7,
        "ordersSum": 17982,
        "ordersCount": 3,
        "addToCartCount": 38
      },
      "2024-12-09": {
        "buysSum": 0,
        "buysCount": 0,
        "ordersSum": 0,
        "ordersCount": 0,
        "addToCartCount": 23
      },
      "2024-12-10": {
        "buysSum": 5323.5,
        "buysCount": 0.9,
        "ordersSum": 5915,
        "ordersCount": 1,
        "addToCartCount": 13
      },
      "2024-12-11": {
        "buysSum": 5323.5,
        "buysCount": 0.9,
        "ordersSum": 5915,
        "ordersCount": 1,
        "addToCartCount": 13
      },
      "commission": 16.5,
      "pricePerOne": 5970.941176470588,
      "cart_to_order": "95.00",
      "click_to_cart": "9.01",
      "ordersCount30": 34,
      "buyoutsPercent": 90,
      "fullConversion": "8.56%",
      "addToCartPercent": 10,
      "cartToOrderPercent": 7
    },
    "tax": 0,
    "percent_buys": 90,
    "percent_mp": null,
    "price_before_spp": 5994,
    "logistics": 444,
    "storage": 2,
    "size": {
      "width": 40,
      "height": 13,
      "length": 52,
      "isValid": true,
      "literSize": 27.04
    },
    "vendor_code": "Тумба/Velvet3Белый"
  },
  {
    "article": "248845014",
    "chat_id": 501660146,
    "wb_api_key": "eyJhbGciOiJFUzI1NiIsImtpZCI6IjIwMjQxMTE4djEiLCJ0eXAiOiJKV1QifQ.eyJlbnQiOjEsImV4cCI6MTc0OTE1NTIyOSwiaWQiOiIwMTkzOTVlZS0xN2IxLTc1YzUtOWEyNC01N2UwOWY5N2M4MjkiLCJpaWQiOjYwMDI0OTczLCJvaWQiOjUyOTk3NSwicyI6MTA3Mzc0OTc1OCwic2lkIjoiMWIyYmJmODYtMzE0ZC00OWIzLWE2ZGQtYmZkOTUxZWEwYWE0IiwidCI6ZmFsc2UsInVpZCI6NjAwMjQ5NzN9.Xg12YoKgPh1o-Qvt6XDK57lWsBy4TS9ZaEjoVnkEibCq6b62gpVXHJMwIhrHnrkkT-c-exukmrtOZheILeBdiQ",
    "notification_time": 5,
    "self_cost": 780,
    "marketing_cost": {
      "2024-11-13": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-14": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-15": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-16": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-17": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-18": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-19": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-20": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-21": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-22": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-23": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-24": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-25": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-26": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-27": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-28": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-29": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-30": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-01": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-02": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-03": {
        "ark": {
          "ctr": 0,
          "views": 3714,
          "clicks": 87
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 345.63
      },
      "2024-12-04": {
        "ark": {
          "ctr": 0,
          "views": 2796,
          "clicks": 80
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 297.33
      },
      "2024-12-05": {
        "ark": {
          "ctr": 0,
          "views": 2312,
          "clicks": 63
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 309.39
      },
      "2024-12-06": {
        "ark": {
          "ctr": 0,
          "views": 2441,
          "clicks": 46
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 329.54
      },
      "2024-12-07": {
        "ark": {
          "ctr": 0,
          "views": 4380,
          "clicks": 122
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 790.9399999999999
      },
      "2024-12-08": {
        "ark": {
          "ctr": 0,
          "views": 5202,
          "clicks": 144
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 1048.0900000000001
      },
      "2024-12-09": {
        "ark": {
          "ctr": 0,
          "views": 5849,
          "clicks": 106
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 1034.33
      },
      "2024-12-10": {
        "ark": {
          "ctr": 0,
          "views": 2395,
          "clicks": 68
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 406.51
      },
      "2024-12-11": {
        "ark": {
          "ctr": 0,
          "views": 1912,
          "clicks": 50
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 242.82999999999998
      },
      "2024-12-12": {
        "ark": {
          "ctr": 0,
          "views": 143,
          "clicks": 1
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 15.02
      }
    },
    "sales": {
      "2024-12-06": {
        "infoBuysSum": 2726,
        "infoBuysCount": 1
      },
      "2024-12-08": {
        "infoBuysSum": 5452,
        "infoBuysCount": 2
      },
      "2024-12-10": {
        "infoBuysSum": 5452,
        "infoBuysCount": 2
      },
      "2024-12-11": {
        "infoBuysSum": 2651,
        "infoBuysCount": 1
      }
    },
    "other_metricks": {
      "2024-12-07": {
        "drr": 5.802934702861335,
        "krrr": 4.426710582319691,
        "ctrArk": 2.7853881278538815,
        "ctrPrk": null,
        "margin": 21.68468504349649,
        "revWithDrr": 36.63432000000023,
        "marginWithDrr": 0.9599182475631544,
        "revWithoutDrr": 827.5743200000002
      },
      "2024-12-08": {
        "drr": 6.40798483736855,
        "krrr": 0,
        "ctrArk": 2.768166089965398,
        "ctrPrk": null,
        "margin": 21.667216574083774,
        "revWithDrr": -55.800816000000395,
        "marginWithDrr": -1.2184435593753362,
        "revWithoutDrr": 992.2891839999998
      },
      "2024-12-09": {
        "drr": 19.508298755186722,
        "krrr": 0,
        "ctrArk": 1.8122756026671225,
        "ctrPrk": null,
        "margin": 20.1924966319987,
        "revWithDrr": -734.5602719999999,
        "marginWithDrr": -49.479998922239574,
        "revWithoutDrr": 299.769728
      },
      "2024-12-10": {
        "drr": null,
        "krrr": 0,
        "ctrArk": 2.8392484342379958,
        "ctrPrk": null,
        "margin": null,
        "revWithDrr": -406.51,
        "marginWithDrr": null,
        "revWithoutDrr": 0
      },
      "2024-12-11": {
        "drr": null,
        "krrr": 0,
        "ctrArk": 2.615062761506276,
        "ctrPrk": null,
        "margin": null,
        "revWithDrr": -242.82999999999998,
        "marginWithDrr": null,
        "revWithoutDrr": 0
      }
    },
    "order_info": {
      "stock": 323,
      "2024-12-07": {
        "buysSum": 3816.4000000000005,
        "buysCount": 1.4000000000000001,
        "ordersSum": 13630,
        "ordersCount": 5,
        "addToCartCount": 14
      },
      "2024-12-08": {
        "buysSum": 4579.68,
        "buysCount": 1.6800000000000002,
        "ordersSum": 16356,
        "ordersCount": 6,
        "addToCartCount": 27
      },
      "2024-12-09": {
        "buysSum": 1484.5600000000002,
        "buysCount": 0.56,
        "ordersSum": 5302,
        "ordersCount": 2,
        "addToCartCount": 33
      },
      "2024-12-10": {
        "buysSum": 0,
        "buysCount": 0,
        "ordersSum": 0,
        "ordersCount": 0,
        "addToCartCount": 11
      },
      "2024-12-11": {
        "buysSum": 0,
        "buysCount": 0,
        "ordersSum": 0,
        "ordersCount": 0,
        "addToCartCount": 17
      },
      "commission": 24.5,
      "pricePerOne": 2782.2913385826773,
      "cart_to_order": "50.00",
      "click_to_cart": "15.61",
      "ordersCount30": 127,
      "buyoutsPercent": 28,
      "fullConversion": "7.80%",
      "addToCartPercent": 4,
      "cartToOrderPercent": 14
    },
    "tax": 0,
    "percent_buys": 28,
    "percent_mp": null,
    "price_before_spp": 2726,
    "logistics": 132,
    "storage": 0,
    "size": {
      "width": 28,
      "height": 11,
      "length": 19,
      "isValid": true,
      "literSize": 5.852
    },
    "vendor_code": "КроссовкиБелоСерые01"
  },
  {
    "article": "230707589",
    "chat_id": 1063309507,
    "wb_api_key": "eyJhbGciOiJFUzI1NiIsImtpZCI6IjIwMjQxMTE4djEiLCJ0eXAiOiJKV1QifQ.eyJlbnQiOjEsImV4cCI6MTc0OTQ0NjgxNywiaWQiOiIwMTkzYTc0Zi02MGUyLTc4MWQtOGI4NS1iNjg2MDYxMDViYjgiLCJpaWQiOjUwMjU5NzIzLCJvaWQiOjE4MTIyMiwicyI6MTA3Mzc0OTc1OCwic2lkIjoiOWI3MGVjZDItN2E2Zi00YjViLTllN2ItMjgwNmU4NWFhM2E5IiwidCI6ZmFsc2UsInVpZCI6NTAyNTk3MjN9.YwSqhIzz7q1qqwXfS-2x3YvoKMqsl3TzVI-Ni9DNaXF1SpXxeO_7LW1N8F9pU21-dY6hWmP7OhuJ-FIbhnHSjA",
    "notification_time": 8,
    "self_cost": 626,
    "marketing_cost": {
      "2024-11-13": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-14": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-15": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-16": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-17": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-18": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-19": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-20": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-21": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-22": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-23": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-24": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-25": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-26": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-27": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-28": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-29": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-30": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-01": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-02": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-03": {
        "ark": {
          "ctr": 0,
          "views": 4266,
          "clicks": 319
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 321.73
      },
      "2024-12-04": {
        "ark": {
          "ctr": 0,
          "views": 163,
          "clicks": 21
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 2.94
      },
      "2024-12-05": {
        "ark": {
          "ctr": 0,
          "views": 17153,
          "clicks": 929
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 860.53
      },
      "2024-12-06": {
        "ark": {
          "ctr": 0,
          "views": 3905,
          "clicks": 295
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 162.64000000000001
      },
      "2024-12-07": {
        "ark": {
          "ctr": 0,
          "views": 280,
          "clicks": 39
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 5.22
      },
      "2024-12-08": {
        "ark": {
          "ctr": 0,
          "views": 10840,
          "clicks": 535
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 523.1
      },
      "2024-12-09": {
        "ark": {
          "ctr": 0,
          "views": 21213,
          "clicks": 1117
        },
        "prk": {
          "ctr": 0,
          "views": 10,
          "clicks": 1
        },
        "cost": 1499.6100000000001
      },
      "2024-12-10": {
        "ark": {
          "ctr": 0,
          "views": 17375,
          "clicks": 864
        },
        "prk": {
          "ctr": 0,
          "views": 6,
          "clicks": 0
        },
        "cost": 1359.67
      },
      "2024-12-11": {
        "ark": {
          "ctr": 0,
          "views": 18332,
          "clicks": 985
        },
        "prk": {
          "ctr": 0,
          "views": 2,
          "clicks": 0
        },
        "cost": 1519.02
      },
      "2024-12-12": {
        "ark": {
          "ctr": 0,
          "views": 1153,
          "clicks": 80
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 71.2
      }
    },
    "sales": {
      "2024-12-06": {
        "infoBuysSum": 30555.18,
        "infoBuysCount": 17
      },
      "2024-12-07": {
        "infoBuysSum": 14280,
        "infoBuysCount": 8
      },
      "2024-12-08": {
        "infoBuysSum": 11337,
        "infoBuysCount": 6
      },
      "2024-12-09": {
        "infoBuysSum": 3780,
        "infoBuysCount": 2
      },
      "2024-12-10": {
        "infoBuysSum": 24885,
        "infoBuysCount": 13
      },
      "2024-12-11": {
        "infoBuysSum": 11656.27,
        "infoBuysCount": 6
      }
    },
    "other_metricks": {
      "2024-12-07": {
        "drr": 0.02378673957621326,
        "krrr": 99.80967840024852,
        "ctrArk": 13.928571428571429,
        "ctrPrk": null,
        "margin": 29.757575757575754,
        "revWithDrr": 2737.506,
        "marginWithDrr": 29.700940663346675,
        "revWithoutDrr": 2742.7259999999997
      },
      "2024-12-08": {
        "drr": 1.6387844611528823,
        "krrr": 86.8899083120638,
        "ctrArk": 4.935424354243542,
        "ctrPrk": null,
        "margin": 29.762322472848794,
        "revWithDrr": 3466.9560000000006,
        "marginWithDrr": 25.860454708199075,
        "revWithoutDrr": 3990.0560000000005
      },
      "2024-12-09": {
        "drr": 3.758421052631579,
        "krrr": 69.93154640167464,
        "ctrArk": 5.265638994955923,
        "ctrPrk": 10,
        "margin": 29.760830648048692,
        "revWithDrr": 3487.7099999999996,
        "marginWithDrr": 20.81220909416398,
        "revWithoutDrr": 4987.32
      },
      "2024-12-10": {
        "drr": 4.123961176827419,
        "krrr": 68.43537989811438,
        "ctrArk": 4.972661870503598,
        "ctrPrk": 0,
        "margin": 31.10747143868162,
        "revWithDrr": 2947.905999999999,
        "marginWithDrr": 21.288516255759195,
        "revWithoutDrr": 4307.575999999999
      },
      "2024-12-11": {
        "drr": 8.037142857142857,
        "krrr": 39.96827331425306,
        "ctrArk": 5.373118044948724,
        "ctrPrk": 0,
        "margin": 31.87656840513983,
        "revWithDrr": 1011.3420000000001,
        "marginWithDrr": 12.740513983371127,
        "revWithoutDrr": 2530.362
      }
    },
    "order_info": {
      "stock": 444,
      "2024-12-07": {
        "buysSum": 9216.9,
        "buysCount": 4.62,
        "ordersSum": 21945,
        "ordersCount": 11,
        "addToCartCount": 81
      },
      "2024-12-08": {
        "buysSum": 13406.4,
        "buysCount": 6.72,
        "ordersSum": 31920,
        "ordersCount": 16,
        "addToCartCount": 96
      },
      "2024-12-09": {
        "buysSum": 16758,
        "buysCount": 8.4,
        "ordersSum": 39900,
        "ordersCount": 20,
        "addToCartCount": 94
      },
      "2024-12-10": {
        "buysSum": 13847.4,
        "buysCount": 6.72,
        "ordersSum": 32970,
        "ordersCount": 16,
        "addToCartCount": 104
      },
      "2024-12-11": {
        "buysSum": 7938,
        "buysCount": 3.78,
        "ordersSum": 18900,
        "ordersCount": 9,
        "addToCartCount": 72
      },
      "commission": 24.5,
      "pricePerOne": 1898.6558966074313,
      "cart_to_order": "67.00",
      "click_to_cart": "16.82",
      "ordersCount30": 619,
      "buyoutsPercent": 42,
      "fullConversion": "11.27%",
      "addToCartPercent": 6,
      "cartToOrderPercent": 20
    },
    "tax": 0,
    "percent_buys": 42,
    "percent_mp": null,
    "price_before_spp": 1995,
    "logistics": 60,
    "storage": 0,
    "size": {
      "width": 23,
      "height": 2,
      "length": 21,
      "isValid": true,
      "literSize": 0.966
    },
    "vendor_code": "kmbody/black"
  },
  {
    "article": "252799780",
    "chat_id": 843357804,
    "wb_api_key": "eyJhbGciOiJFUzI1NiIsImtpZCI6IjIwMjQxMTE4djEiLCJ0eXAiOiJKV1QifQ.eyJlbnQiOjEsImV4cCI6MTc0OTEwMzI3MSwiaWQiOiIwMTkzOTJkNS00N2YzLTc4ZTItYmZmOS02ZDRhMDVmZGYxNmMiLCJpaWQiOjk2Mzg1NzcsIm9pZCI6MjU4Mjg1LCJzIjoxMDczNzQ5NzU4LCJzaWQiOiI0OGU2YzMwMC05YTE2LTRlMzgtYjc0Ny1iNjcyOGVkZjU2M2UiLCJ0IjpmYWxzZSwidWlkIjo5NjM4NTc3fQ.XwuFzazFGwLUg0PyborB0R8PImIKuLTWFJEfN6WQjZuQOeslx3doaeN-_pA1olMWsjeeysAP0oesZ_w4RwDJaw",
    "notification_time": 20,
    "self_cost": 3750,
    "marketing_cost": {
      "2024-11-13": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-14": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-15": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-16": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-17": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-18": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-19": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-20": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-21": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-22": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-23": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-24": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-25": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-26": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-27": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-28": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-29": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-30": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-01": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-02": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-03": {
        "ark": {
          "ctr": 0,
          "views": 19063,
          "clicks": 871
        },
        "prk": {
          "ctr": 0,
          "views": 1,
          "clicks": 0
        },
        "cost": 2366.56
      },
      "2024-12-04": {
        "ark": {
          "ctr": 0,
          "views": 21804,
          "clicks": 1087
        },
        "prk": {
          "ctr": 0,
          "views": 16,
          "clicks": 0
        },
        "cost": 2808.0200000000004
      },
      "2024-12-05": {
        "ark": {
          "ctr": 0,
          "views": 17723,
          "clicks": 918
        },
        "prk": {
          "ctr": 0,
          "views": 51,
          "clicks": 2
        },
        "cost": 2076.19
      },
      "2024-12-06": {
        "ark": {
          "ctr": 0,
          "views": 18629,
          "clicks": 1107
        },
        "prk": {
          "ctr": 0,
          "views": 6,
          "clicks": 0
        },
        "cost": 2257.0200000000004
      },
      "2024-12-07": {
        "ark": {
          "ctr": 0,
          "views": 5667,
          "clicks": 429
        },
        "prk": {
          "ctr": 0,
          "views": 10,
          "clicks": 0
        },
        "cost": 707.04
      },
      "2024-12-08": {
        "ark": {
          "ctr": 0,
          "views": 19,
          "clicks": 2
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 2.8
      },
      "2024-12-09": {
        "ark": {
          "ctr": 0,
          "views": 9,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 9046,
          "clicks": 905
        },
        "cost": 1357.8799999999999
      },
      "2024-12-10": {
        "ark": {
          "ctr": 0,
          "views": 8,
          "clicks": 1
        },
        "prk": {
          "ctr": 0,
          "views": 1321,
          "clicks": 103
        },
        "cost": 199.22
      },
      "2024-12-11": {
        "ark": {
          "ctr": 0,
          "views": 1,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 10470,
          "clicks": 1282
        },
        "cost": 1570.53
      },
      "2024-12-12": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 501,
          "clicks": 58
        },
        "cost": 75.15
      }
    },
    "sales": {
      "2024-12-06": {
        "infoBuysSum": 35100,
        "infoBuysCount": 4
      },
      "2024-12-07": {
        "infoBuysSum": 26325,
        "infoBuysCount": 3
      },
      "2024-12-08": {
        "infoBuysSum": 35100,
        "infoBuysCount": 4
      },
      "2024-12-09": {
        "infoBuysSum": 43875,
        "infoBuysCount": 5
      },
      "2024-12-10": {
        "infoBuysSum": 8775,
        "infoBuysCount": 1
      },
      "2024-12-11": {
        "infoBuysSum": 19575,
        "infoBuysCount": 2
      }
    },
    "other_metricks": {
      "2024-12-07": {
        "drr": 4.028717948717948,
        "krrr": 49.58323021179575,
        "ctrArk": 7.57014293276866,
        "ctrPrk": 0,
        "margin": 8.411399130304389,
        "revWithDrr": 695.350519999999,
        "marginWithDrr": 4.17064339481181,
        "revWithoutDrr": 1402.390519999999
      },
      "2024-12-08": {
        "drr": null,
        "krrr": 0,
        "ctrArk": 10.526315789473683,
        "ctrPrk": null,
        "margin": null,
        "revWithDrr": -2.8,
        "marginWithDrr": null,
        "revWithoutDrr": 0
      },
      "2024-12-09": {
        "drr": 12.572962962962961,
        "krrr": 33.04612480409828,
        "ctrArk": 0,
        "ctrPrk": 10.00442184390891,
        "margin": 19.766888499025352,
        "revWithDrr": 670.2027600000013,
        "marginWithDrr": 6.532190643274865,
        "revWithoutDrr": 2028.0827600000011
      },
      "2024-12-10": {
        "drr": 1.8446296296296298,
        "krrr": 90.17692946613283,
        "ctrArk": 12.5,
        "ctrPrk": 7.797123391370174,
        "margin": 19.766888499025352,
        "revWithDrr": 1828.8627600000011,
        "marginWithDrr": 17.825173099415213,
        "revWithoutDrr": 2028.0827600000011
      },
      "2024-12-11": {
        "drr": 5.058067632850242,
        "krrr": 69.79937754946651,
        "ctrArk": 0,
        "ctrPrk": 12.24450811843362,
        "margin": 17.62970855157217,
        "revWithDrr": 3629.793280000001,
        "marginWithDrr": 12.305426832782441,
        "revWithoutDrr": 5200.3232800000005
      }
    },
    "order_info": {
      "stock": 25,
      "2024-12-07": {
        "buysSum": 16672.5,
        "buysCount": 1.9,
        "ordersSum": 17550,
        "ordersCount": 2,
        "addToCartCount": 41
      },
      "2024-12-08": {
        "buysSum": 0,
        "buysCount": 0,
        "ordersSum": 0,
        "ordersCount": 0,
        "addToCartCount": 0
      },
      "2024-12-09": {
        "buysSum": 10260,
        "buysCount": 0.95,
        "ordersSum": 10800,
        "ordersCount": 1,
        "addToCartCount": 87
      },
      "2024-12-10": {
        "buysSum": 10260,
        "buysCount": 0.95,
        "ordersSum": 10800,
        "ordersCount": 1,
        "addToCartCount": 39
      },
      "2024-12-11": {
        "buysSum": 29497.5,
        "buysCount": 2.8499999999999996,
        "ordersSum": 31050,
        "ordersCount": 3,
        "addToCartCount": 135
      },
      "commission": 22.5,
      "pricePerOne": 8979.545454545454,
      "cart_to_order": "94.00",
      "click_to_cart": "3.23",
      "ordersCount30": 44,
      "buyoutsPercent": 95,
      "fullConversion": "3.04%",
      "addToCartPercent": 3,
      "cartToOrderPercent": 3
    },
    "tax": 0,
    "percent_buys": 95,
    "percent_mp": null,
    "price_before_spp": 8775,
    "logistics": 1245,
    "storage": 8,
    "size": {
      "width": 27,
      "height": 26,
      "length": 116,
      "isValid": true,
      "literSize": 81.432
    },
    "vendor_code": "Королева белоснежная 210"
  },
  {
    "article": "223733357",
    "chat_id": 1063309507,
    "wb_api_key": "eyJhbGciOiJFUzI1NiIsImtpZCI6IjIwMjQxMTE4djEiLCJ0eXAiOiJKV1QifQ.eyJlbnQiOjEsImV4cCI6MTc0OTQ0NjgxNywiaWQiOiIwMTkzYTc0Zi02MGUyLTc4MWQtOGI4NS1iNjg2MDYxMDViYjgiLCJpaWQiOjUwMjU5NzIzLCJvaWQiOjE4MTIyMiwicyI6MTA3Mzc0OTc1OCwic2lkIjoiOWI3MGVjZDItN2E2Zi00YjViLTllN2ItMjgwNmU4NWFhM2E5IiwidCI6ZmFsc2UsInVpZCI6NTAyNTk3MjN9.YwSqhIzz7q1qqwXfS-2x3YvoKMqsl3TzVI-Ni9DNaXF1SpXxeO_7LW1N8F9pU21-dY6hWmP7OhuJ-FIbhnHSjA",
    "notification_time": 8,
    "self_cost": 523,
    "marketing_cost": {
      "2024-11-13": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-14": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-15": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-16": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-17": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-18": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-19": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-20": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-21": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-22": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-23": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-24": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-25": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-26": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-27": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-28": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-29": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-30": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-01": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-02": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-03": {
        "ark": {
          "ctr": 0,
          "views": 7143,
          "clicks": 373
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 615.0699999999999
      },
      "2024-12-04": {
        "ark": {
          "ctr": 0,
          "views": 3093,
          "clicks": 228
        },
        "prk": {
          "ctr": 0,
          "views": 197,
          "clicks": 25
        },
        "cost": 781.5500000000001
      },
      "2024-12-05": {
        "ark": {
          "ctr": 0,
          "views": 3583,
          "clicks": 216
        },
        "prk": {
          "ctr": 0,
          "views": 622,
          "clicks": 61
        },
        "cost": 978.37
      },
      "2024-12-06": {
        "ark": {
          "ctr": 0,
          "views": 3595,
          "clicks": 218
        },
        "prk": {
          "ctr": 0,
          "views": 462,
          "clicks": 40
        },
        "cost": 962.73
      },
      "2024-12-07": {
        "ark": {
          "ctr": 0,
          "views": 4693,
          "clicks": 232
        },
        "prk": {
          "ctr": 0,
          "views": 538,
          "clicks": 20
        },
        "cost": 955.11
      },
      "2024-12-08": {
        "ark": {
          "ctr": 0,
          "views": 6401,
          "clicks": 294
        },
        "prk": {
          "ctr": 0,
          "views": 145,
          "clicks": 8
        },
        "cost": 928.17
      },
      "2024-12-09": {
        "ark": {
          "ctr": 0,
          "views": 5776,
          "clicks": 286
        },
        "prk": {
          "ctr": 0,
          "views": 370,
          "clicks": 20
        },
        "cost": 792.6
      },
      "2024-12-10": {
        "ark": {
          "ctr": 0,
          "views": 6085,
          "clicks": 298
        },
        "prk": {
          "ctr": 0,
          "views": 160,
          "clicks": 7
        },
        "cost": 1035.23
      },
      "2024-12-11": {
        "ark": {
          "ctr": 0,
          "views": 6351,
          "clicks": 310
        },
        "prk": {
          "ctr": 0,
          "views": 97,
          "clicks": 4
        },
        "cost": 1009.74
      },
      "2024-12-12": {
        "ark": {
          "ctr": 0,
          "views": 575,
          "clicks": 26
        },
        "prk": {
          "ctr": 0,
          "views": 10,
          "clicks": 0
        },
        "cost": 52.53
      }
    },
    "sales": {
      "2024-12-06": {
        "infoBuysSum": 3820.21,
        "infoBuysCount": 8
      },
      "2024-12-07": {
        "infoBuysSum": 2549,
        "infoBuysCount": 5
      },
      "2024-12-08": {
        "infoBuysSum": 4665.55,
        "infoBuysCount": 9
      },
      "2024-12-09": {
        "infoBuysSum": 2319,
        "infoBuysCount": 4
      },
      "2024-12-10": {
        "infoBuysSum": 3691.16,
        "infoBuysCount": 6
      },
      "2024-12-11": {
        "infoBuysSum": 2414.65,
        "infoBuysCount": 4
      }
    },
    "other_metricks": {
      "2024-12-07": {
        "drr": 17.61220726535128,
        "krrr": 207.72144075213617,
        "ctrArk": 4.943532921372257,
        "ctrPrk": 3.717472118959108,
        "margin": -23.356813571823707,
        "revWithDrr": -1841.7579999999998,
        "marginWithDrr": -48.51710966518269,
        "revWithoutDrr": -886.6479999999997
      },
      "2024-12-08": {
        "drr": 42.4209323583181,
        "krrr": 463.5420053032945,
        "ctrArk": 4.593032338697078,
        "ctrPrk": 5.517241379310345,
        "margin": -16.66969182554191,
        "revWithDrr": -1183.4829999999997,
        "marginWithDrr": -77.27102376599633,
        "revWithoutDrr": -255.31299999999987
      },
      "2024-12-09": {
        "drr": 17.593784683684795,
        "krrr": 278.26859494838186,
        "ctrArk": 4.951523545706371,
        "ctrPrk": 5.405405405405405,
        "margin": -14.09893768828285,
        "revWithDrr": -1237.2099999999996,
        "marginWithDrr": -39.232915807832555,
        "revWithoutDrr": -444.6099999999997
      },
      "2024-12-10": {
        "drr": 66.02232142857143,
        "krrr": 996.7844210745154,
        "ctrArk": 4.897288414133114,
        "ctrPrk": 4.375,
        "margin": -10.517310495626832,
        "revWithDrr": -1150.6680000000001,
        "marginWithDrr": -104.83491253644317,
        "revWithoutDrr": -115.4380000000001
      },
      "2024-12-11": {
        "drr": 17.65897166841553,
        "krrr": 453.5343279192476,
        "ctrArk": 4.881121083293969,
        "ctrPrk": 4.123711340206185,
        "margin": -7.135686803577671,
        "revWithDrr": -1295.3529999999998,
        "marginWithDrr": -32.362789187028426,
        "revWithoutDrr": -285.61299999999983
      }
    },
    "order_info": {
      "stock": 110,
      "2024-12-07": {
        "buysSum": 3796.1,
        "buysCount": 5.6,
        "ordersSum": 5423,
        "ordersCount": 8,
        "addToCartCount": 22
      },
      "2024-12-08": {
        "buysSum": 1531.6,
        "buysCount": 2.0999999999999996,
        "ordersSum": 2188,
        "ordersCount": 3,
        "addToCartCount": 24
      },
      "2024-12-09": {
        "buysSum": 3153.5,
        "buysCount": 4.199999999999999,
        "ordersSum": 4505,
        "ordersCount": 6,
        "addToCartCount": 25
      },
      "2024-12-10": {
        "buysSum": 1097.6,
        "buysCount": 1.4,
        "ordersSum": 1568,
        "ordersCount": 2,
        "addToCartCount": 13
      },
      "2024-12-11": {
        "buysSum": 4002.6,
        "buysCount": 4.8999999999999995,
        "ordersSum": 5718,
        "ordersCount": 7,
        "addToCartCount": 30
      },
      "commission": 24.5,
      "pricePerOne": 533.7484662576687,
      "cart_to_order": "67.00",
      "click_to_cart": "16.82",
      "ordersCount30": 163,
      "buyoutsPercent": 69,
      "fullConversion": "11.27%",
      "addToCartPercent": 4,
      "cartToOrderPercent": 34
    },
    "tax": 0,
    "percent_buys": 70,
    "percent_mp": null,
    "price_before_spp": 677,
    "logistics": 68,
    "storage": 0,
    "size": {
      "width": 20,
      "height": 3,
      "length": 25,
      "isValid": true,
      "literSize": 1.5
    },
    "vendor_code": "kmbarhat/black"
  },
  {
    "article": "229069602",
    "chat_id": 1944574607,
    "wb_api_key": "eyJhbGciOiJFUzI1NiIsImtpZCI6IjIwMjQxMTE4djEiLCJ0eXAiOiJKV1QifQ.eyJlbnQiOjEsImV4cCI6MTc0Nzc3OTYwNywiaWQiOiIwMTkzNDNlZi1jNWU5LTcyNWEtYWJkYi04ZjI1MzE4NWM2ZTkiLCJpaWQiOjE4MTczMjU4LCJvaWQiOjQwMDY4MjMsInMiOjEwNzM3NDk3NTgsInNpZCI6ImJhOGQxZGNmLTNmZDAtNDkzZi04ODUzLWYyOTU1MDVkNDM3YiIsInQiOmZhbHNlLCJ1aWQiOjE4MTczMjU4fQ.D0sCu-VCl7lLImUgrt3-2TBn_TdMoQVd4GzsutO5CAnFwlP5l8lX-tSaT--2Y1CKZYHv_ZShMS540Jmcqkcdlw",
    "notification_time": 9,
    "self_cost": 219,
    "marketing_cost": {
      "2024-11-13": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-14": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-15": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-16": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-17": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-18": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-19": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-20": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-21": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-22": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-23": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-24": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-25": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-26": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-27": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-28": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-29": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-30": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-01": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-02": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-03": {
        "ark": {
          "ctr": 0,
          "views": 3301,
          "clicks": 170
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 688.27
      },
      "2024-12-04": {
        "ark": {
          "ctr": 0,
          "views": 3128,
          "clicks": 176
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 577.77
      },
      "2024-12-05": {
        "ark": {
          "ctr": 0,
          "views": 3833,
          "clicks": 281
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 692.75
      },
      "2024-12-06": {
        "ark": {
          "ctr": 0,
          "views": 3468,
          "clicks": 308
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 548.34
      },
      "2024-12-07": {
        "ark": {
          "ctr": 0,
          "views": 3474,
          "clicks": 246
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 592.8399999999999
      },
      "2024-12-08": {
        "ark": {
          "ctr": 0,
          "views": 3784,
          "clicks": 268
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 614.03
      },
      "2024-12-09": {
        "ark": {
          "ctr": 0,
          "views": 4762,
          "clicks": 302
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 1279.81
      },
      "2024-12-10": {
        "ark": {
          "ctr": 0,
          "views": 5516,
          "clicks": 373
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 1463.8000000000002
      },
      "2024-12-11": {
        "ark": {
          "ctr": 0,
          "views": 4393,
          "clicks": 289
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 1143.2
      },
      "2024-12-12": {
        "ark": {
          "ctr": 0,
          "views": 246,
          "clicks": 16
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 60.18
      }
    },
    "sales": {
      "2024-12-05": {
        "infoBuysSum": 2495.91,
        "infoBuysCount": 4
      },
      "2024-12-06": {
        "infoBuysSum": 6867.620000000001,
        "infoBuysCount": 11
      },
      "2024-12-07": {
        "infoBuysSum": 4394.68,
        "infoBuysCount": 9
      },
      "2024-12-08": {
        "infoBuysSum": 7540,
        "infoBuysCount": 12
      },
      "2024-12-09": {
        "infoBuysSum": 3120,
        "infoBuysCount": 5
      },
      "2024-12-10": {
        "infoBuysSum": 6240.04,
        "infoBuysCount": 10
      },
      "2024-12-11": {
        "infoBuysSum": 6811.76,
        "infoBuysCount": 11
      }
    },
    "other_metricks": {
      "2024-12-07": {
        "drr": 10.556267806267805,
        "krrr": 47.44854737303727,
        "ctrArk": 7.081174438687392,
        "ctrPrk": null,
        "margin": 23.35754654475586,
        "revWithDrr": 535.2734400000006,
        "marginWithDrr": 11.082816537467712,
        "revWithoutDrr": 1128.1134400000005
      },
      "2024-12-08": {
        "drr": 10.93358262108262,
        "krrr": 45.57019017520085,
        "ctrArk": 7.08245243128964,
        "ctrPrk": null,
        "margin": 23.35754654475586,
        "revWithDrr": 514.0834400000006,
        "marginWithDrr": 10.644078380706299,
        "revWithoutDrr": 1128.1134400000005
      },
      "2024-12-09": {
        "drr": 19.689384615384615,
        "krrr": 0,
        "ctrArk": 6.341873162536748,
        "ctrPrk": null,
        "margin": 20.5855198568873,
        "revWithDrr": -129.07943999999998,
        "marginWithDrr": -2.3091134168157423,
        "revWithoutDrr": 1150.73056
      },
      "2024-12-10": {
        "drr": 17.060606060606062,
        "krrr": 0,
        "ctrArk": 6.7621464829586655,
        "ctrPrk": null,
        "margin": 18.84911367702065,
        "revWithDrr": -72.96160000000054,
        "marginWithDrr": -0.9888003469398893,
        "revWithoutDrr": 1390.8383999999996
      },
      "2024-12-11": {
        "drr": 11.755269922879178,
        "krrr": 27.52223448190307,
        "ctrArk": 6.578647848850444,
        "ctrPrk": null,
        "margin": 18.859464578226827,
        "revWithDrr": 434.11132000000066,
        "marginWithDrr": 5.190546063251039,
        "revWithoutDrr": 1577.3113200000007
      }
    },
    "order_info": {
      "stock": 348,
      "2024-12-07": {
        "buysSum": 4829.76,
        "buysCount": 7.74,
        "ordersSum": 5616,
        "ordersCount": 9,
        "addToCartCount": 42
      },
      "2024-12-08": {
        "buysSum": 4829.76,
        "buysCount": 7.74,
        "ordersSum": 5616,
        "ordersCount": 9,
        "addToCartCount": 31
      },
      "2024-12-09": {
        "buysSum": 5590,
        "buysCount": 9.459999999999999,
        "ordersSum": 6500,
        "ordersCount": 11,
        "addToCartCount": 51
      },
      "2024-12-10": {
        "buysSum": 7378.8,
        "buysCount": 12.9,
        "ordersSum": 8580,
        "ordersCount": 15,
        "addToCartCount": 56
      },
      "2024-12-11": {
        "buysSum": 8363.5,
        "buysCount": 14.62,
        "ordersSum": 9725,
        "ordersCount": 17,
        "addToCartCount": 50
      },
      "commission": 19.5,
      "pricePerOne": 618.7370517928287,
      "cart_to_order": "99.00",
      "click_to_cart": "12.88",
      "ordersCount30": 251,
      "buyoutsPercent": 86,
      "fullConversion": "12.75%",
      "addToCartPercent": 6,
      "cartToOrderPercent": 24
    },
    "tax": 0,
    "percent_buys": 86,
    "percent_mp": null,
    "price_before_spp": 624,
    "logistics": 67,
    "storage": 0,
    "size": {
      "width": 45,
      "height": 1,
      "length": 32,
      "isValid": true,
      "literSize": 1.44
    },
    "vendor_code": "Планер2зеленый"
  },
  {
    "article": "254643004",
    "chat_id": 150462912,
    "wb_api_key": "eyJhbGciOiJFUzI1NiIsImtpZCI6IjIwMjQxMDE2djEiLCJ0eXAiOiJKV1QifQ.eyJlbnQiOjEsImV4cCI6MTc0NjMwOTIyOSwiaWQiOiIwMTkyZWM0Yi05NTU5LTdjNjEtOWY5Ny1jZGFhN2E3NjQwODciLCJpaWQiOjQ2ODIwNDgsIm9pZCI6MzE1MDQzLCJzIjoxMDczNzQ5NzU4LCJzaWQiOiJlZDE3YTVjNC1lZjZlLTQzNWYtYjUwOS00ZGU3NjkyZjhkMjUiLCJ0IjpmYWxzZSwidWlkIjo0NjgyMDQ4fQ.uQCMJwM2VQSIRByiMWYvmIyg9iB2IbNeA_NW0vl3GzmQn-dr2vkSE69InFLdup5N4piVndT4jcwrEww8zNnMHg",
    "notification_time": null,
    "self_cost": 500,
    "marketing_cost": {
      "2024-11-13": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-14": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-15": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-16": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-17": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-18": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-19": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-20": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-21": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-22": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-23": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-24": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-25": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-26": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-27": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-28": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-29": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-30": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-01": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-02": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-03": {
        "ark": {
          "ctr": 0,
          "views": 6107,
          "clicks": 300
        },
        "prk": {
          "ctr": 0,
          "views": 161,
          "clicks": 7
        },
        "cost": 314.59000000000003
      },
      "2024-12-04": {
        "ark": {
          "ctr": 0,
          "views": 5475,
          "clicks": 258
        },
        "prk": {
          "ctr": 0,
          "views": 57,
          "clicks": 4
        },
        "cost": 322.05
      },
      "2024-12-05": {
        "ark": {
          "ctr": 0,
          "views": 5313,
          "clicks": 290
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 332.74
      },
      "2024-12-06": {
        "ark": {
          "ctr": 0,
          "views": 5773,
          "clicks": 277
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 314.86
      },
      "2024-12-07": {
        "ark": {
          "ctr": 0,
          "views": 5714,
          "clicks": 273
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 317.27
      },
      "2024-12-08": {
        "ark": {
          "ctr": 0,
          "views": 5730,
          "clicks": 263
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 295.92
      },
      "2024-12-09": {
        "ark": {
          "ctr": 0,
          "views": 5609,
          "clicks": 187
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 346.55
      },
      "2024-12-10": {
        "ark": {
          "ctr": 0,
          "views": 5150,
          "clicks": 172
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 330.41999999999996
      },
      "2024-12-11": {
        "ark": {
          "ctr": 0,
          "views": 6994,
          "clicks": 268
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 425.49
      },
      "2024-12-12": {
        "ark": {
          "ctr": 0,
          "views": 434,
          "clicks": 15
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 21.4
      }
    },
    "sales": {
      "2024-12-05": {
        "infoBuysSum": 3492,
        "infoBuysCount": 1
      },
      "2024-12-06": {
        "infoBuysSum": 10167,
        "infoBuysCount": 3
      },
      "2024-12-07": {
        "infoBuysSum": 14069,
        "infoBuysCount": 4
      },
      "2024-12-08": {
        "infoBuysSum": 14103,
        "infoBuysCount": 4
      },
      "2024-12-09": {
        "infoBuysSum": 24441,
        "infoBuysCount": 7
      },
      "2024-12-10": {
        "infoBuysSum": 31630.07,
        "infoBuysCount": 9
      },
      "2024-12-11": {
        "infoBuysSum": 7120,
        "infoBuysCount": 2
      }
    },
    "other_metricks": {
      "2024-12-07": {
        "drr": 1.4853464419475655,
        "krrr": 96.1421129489425,
        "ctrArk": 4.777738886944348,
        "ctrPrk": null,
        "margin": 44.25465904688106,
        "revWithDrr": 7906.6618,
        "marginWithDrr": 42.54736428602178,
        "revWithoutDrr": 8223.9318
      },
      "2024-12-08": {
        "drr": 2.7707865168539327,
        "krrr": 92.80344226590012,
        "ctrArk": 4.5898778359511345,
        "ctrPrk": null,
        "margin": 44.25465904688106,
        "revWithDrr": 3816.0459,
        "marginWithDrr": 41.0698469585432,
        "revWithoutDrr": 4111.9659
      },
      "2024-12-09": {
        "drr": 1.2168188202247192,
        "krrr": 96.83984734825852,
        "ctrArk": 3.3339276163308966,
        "ctrPrk": null,
        "margin": 44.25869495027767,
        "revWithDrr": 10619.6924,
        "marginWithDrr": 42.8600526281803,
        "revWithoutDrr": 10966.2424
      },
      "2024-12-10": {
        "drr": 1.5469101123595503,
        "krrr": 95.9822137630081,
        "ctrArk": 3.3398058252427183,
        "ctrPrk": null,
        "margin": 44.25465904688106,
        "revWithDrr": 7893.5118,
        "marginWithDrr": 42.476601446467775,
        "revWithoutDrr": 8223.9318
      },
      "2024-12-11": {
        "drr": 1.9866000560276404,
        "krrr": 94.84926800264905,
        "ctrArk": 3.831855876465542,
        "ctrPrk": null,
        "margin": 44.33250150534033,
        "revWithDrr": 7835.277599999999,
        "marginWithDrr": 42.049053165078675,
        "revWithoutDrr": 8260.7676
      }
    },
    "order_info": {
      "stock": 217,
      "2024-12-07": {
        "buysSum": 18583.2,
        "buysCount": 5.22,
        "ordersSum": 21360,
        "ordersCount": 6,
        "addToCartCount": 50
      },
      "2024-12-08": {
        "buysSum": 9291.6,
        "buysCount": 2.61,
        "ordersSum": 10680,
        "ordersCount": 3,
        "addToCartCount": 57
      },
      "2024-12-09": {
        "buysSum": 24777.6,
        "buysCount": 6.96,
        "ordersSum": 28480,
        "ordersCount": 8,
        "addToCartCount": 41
      },
      "2024-12-10": {
        "buysSum": 18583.2,
        "buysCount": 5.22,
        "ordersSum": 21360,
        "ordersCount": 6,
        "addToCartCount": 30
      },
      "2024-12-11": {
        "buysSum": 18633.66,
        "buysCount": 5.22,
        "ordersSum": 21418,
        "ordersCount": 6,
        "addToCartCount": 42
      },
      "commission": 18.5,
      "pricePerOne": 3446.4493670886077,
      "cart_to_order": "95.00",
      "click_to_cart": "8.54",
      "ordersCount30": 158,
      "buyoutsPercent": 88,
      "fullConversion": "8.11%",
      "addToCartPercent": 9,
      "cartToOrderPercent": 9
    },
    "tax": 0,
    "percent_buys": 87,
    "percent_mp": null,
    "price_before_spp": 3560,
    "logistics": 386,
    "storage": 2,
    "size": {
      "width": 35,
      "height": 15,
      "length": 44,
      "isValid": true,
      "literSize": 23.1
    },
    "vendor_code": "клининг1-667-70"
  },
  {
    "article": "229069006",
    "chat_id": 1944574607,
    "wb_api_key": "eyJhbGciOiJFUzI1NiIsImtpZCI6IjIwMjQxMTE4djEiLCJ0eXAiOiJKV1QifQ.eyJlbnQiOjEsImV4cCI6MTc0Nzc3OTYwNywiaWQiOiIwMTkzNDNlZi1jNWU5LTcyNWEtYWJkYi04ZjI1MzE4NWM2ZTkiLCJpaWQiOjE4MTczMjU4LCJvaWQiOjQwMDY4MjMsInMiOjEwNzM3NDk3NTgsInNpZCI6ImJhOGQxZGNmLTNmZDAtNDkzZi04ODUzLWYyOTU1MDVkNDM3YiIsInQiOmZhbHNlLCJ1aWQiOjE4MTczMjU4fQ.D0sCu-VCl7lLImUgrt3-2TBn_TdMoQVd4GzsutO5CAnFwlP5l8lX-tSaT--2Y1CKZYHv_ZShMS540Jmcqkcdlw",
    "notification_time": 9,
    "self_cost": 219,
    "marketing_cost": {
      "2024-11-13": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-14": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-15": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-16": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-17": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-18": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-19": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-20": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-21": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-22": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-23": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-24": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-25": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-26": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-27": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-28": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-29": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-30": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-01": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-02": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-03": {
        "ark": {
          "ctr": 0,
          "views": 3545,
          "clicks": 153
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 420.73
      },
      "2024-12-04": {
        "ark": {
          "ctr": 0,
          "views": 3426,
          "clicks": 172
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 403.79
      },
      "2024-12-05": {
        "ark": {
          "ctr": 0,
          "views": 3627,
          "clicks": 152
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 547.76
      },
      "2024-12-06": {
        "ark": {
          "ctr": 0,
          "views": 2664,
          "clicks": 122
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 448.34999999999997
      },
      "2024-12-07": {
        "ark": {
          "ctr": 0,
          "views": 3175,
          "clicks": 119
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 479.05999999999995
      },
      "2024-12-08": {
        "ark": {
          "ctr": 0,
          "views": 3540,
          "clicks": 148
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 512.49
      },
      "2024-12-09": {
        "ark": {
          "ctr": 0,
          "views": 4811,
          "clicks": 294
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 1024.54
      },
      "2024-12-10": {
        "ark": {
          "ctr": 0,
          "views": 5427,
          "clicks": 417
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 1068.78
      },
      "2024-12-11": {
        "ark": {
          "ctr": 0,
          "views": 5503,
          "clicks": 375
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 1006.22
      },
      "2024-12-12": {
        "ark": {
          "ctr": 0,
          "views": 453,
          "clicks": 31
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 84.63
      }
    },
    "sales": {
      "2024-12-05": {
        "infoBuysSum": 1300,
        "infoBuysCount": 2
      },
      "2024-12-06": {
        "infoBuysSum": 7722,
        "infoBuysCount": 12
      },
      "2024-12-07": {
        "infoBuysSum": 6500,
        "infoBuysCount": 10
      },
      "2024-12-08": {
        "infoBuysSum": 9100,
        "infoBuysCount": 14
      },
      "2024-12-09": {
        "infoBuysSum": 7150,
        "infoBuysCount": 11
      },
      "2024-12-10": {
        "infoBuysSum": 5122,
        "infoBuysCount": 8
      },
      "2024-12-11": {
        "infoBuysSum": 8371.970000000001,
        "infoBuysCount": 13
      }
    },
    "other_metricks": {
      "2024-12-07": {
        "drr": 12.283589743589744,
        "krrr": 49.07174197562605,
        "ctrArk": 3.7480314960629926,
        "ctrPrk": null,
        "margin": 26.504834037757114,
        "revWithDrr": 461.59655999999995,
        "marginWithDrr": 13.006383770076077,
        "revWithoutDrr": 940.6565599999999
      },
      "2024-12-08": {
        "drr": 5.256307692307692,
        "krrr": 78.20713651324559,
        "ctrArk": 4.1807909604519775,
        "ctrPrk": null,
        "margin": 26.504834037757107,
        "revWithDrr": 1839.1513999999995,
        "marginWithDrr": 20.728671738517885,
        "revWithoutDrr": 2351.6413999999995
      },
      "2024-12-09": {
        "drr": 9.826779205831574,
        "krrr": 54.464964173481455,
        "ctrArk": 6.110995635003118,
        "ctrPrk": null,
        "margin": 23.71505429157453,
        "revWithDrr": 1225.4637199999997,
        "marginWithDrr": 12.916395823627742,
        "revWithoutDrr": 2250.0037199999997
      },
      "2024-12-10": {
        "drr": 5.338828113292372,
        "krrr": 70.90403861842451,
        "ctrArk": 7.683803206191266,
        "ctrPrk": null,
        "margin": 20.16377463387803,
        "revWithDrr": 2604.5132999999996,
        "marginWithDrr": 14.296930553336965,
        "revWithoutDrr": 3673.2932999999994
      },
      "2024-12-11": {
        "drr": 7.32915725835822,
        "krrr": 60.06621272909691,
        "ctrArk": 6.814464837361439,
        "ctrPrk": null,
        "margin": 20.168432587152093,
        "revWithDrr": 1513.500940000001,
        "marginWithDrr": 12.11441362192328,
        "revWithoutDrr": 2519.720940000001
      }
    },
    "order_info": {
      "stock": 782,
      "2024-12-07": {
        "buysSum": 3549,
        "buysCount": 5.46,
        "ordersSum": 3900,
        "ordersCount": 6,
        "addToCartCount": 25
      },
      "2024-12-08": {
        "buysSum": 8872.5,
        "buysCount": 13.65,
        "ordersSum": 9750,
        "ordersCount": 15,
        "addToCartCount": 42
      },
      "2024-12-09": {
        "buysSum": 9487.66,
        "buysCount": 15.47,
        "ordersSum": 10426,
        "ordersCount": 17,
        "addToCartCount": 61
      },
      "2024-12-10": {
        "buysSum": 18217.29,
        "buysCount": 31.85,
        "ordersSum": 20019,
        "ordersCount": 35,
        "addToCartCount": 115
      },
      "2024-12-11": {
        "buysSum": 12493.390000000001,
        "buysCount": 21.84,
        "ordersSum": 13729,
        "ordersCount": 24,
        "addToCartCount": 101
      },
      "commission": 19.5,
      "pricePerOne": 612.9644859813084,
      "cart_to_order": "99.00",
      "click_to_cart": "12.88",
      "ordersCount30": 535,
      "buyoutsPercent": 92,
      "fullConversion": "12.75%",
      "addToCartPercent": 8,
      "cartToOrderPercent": 31
    },
    "tax": 0,
    "percent_buys": 91,
    "percent_mp": null,
    "price_before_spp": 650,
    "logistics": 67,
    "storage": 0,
    "size": {
      "width": 45,
      "height": 1,
      "length": 32,
      "isValid": true,
      "literSize": 1.44
    },
    "vendor_code": "Планер1беж"
  },
  {
    "article": "279020869",
    "chat_id": 7439188685,
    "wb_api_key": "eyJhbGciOiJFUzI1NiIsImtpZCI6IjIwMjQxMTE4djEiLCJ0eXAiOiJKV1QifQ.eyJlbnQiOjEsImV4cCI6MTc0OTAxMzEyNiwiaWQiOiIwMTkzOGQ3NS1jNWNiLTdlOTUtYmE3Zi03NmMyOTZhOWM4ZDYiLCJpaWQiOjIwMDAwOTgyLCJvaWQiOjkwMzIyNiwicyI6MTA3Mzc0OTc1OCwic2lkIjoiOTM4NmUyNTItODQ1Zi00MjRiLWJhNTgtZGVjM2I0NmI0NDRjIiwidCI6ZmFsc2UsInVpZCI6MjAwMDA5ODJ9.geaiT28m1WEskAxNhgiiwiJVroecnCBLBqadp-HhWwmJyxfaULCic_kzQxjJ8f4ubn_eabFAqK8zR--8teEMTw",
    "notification_time": 23,
    "self_cost": 430,
    "marketing_cost": {
      "2024-11-13": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-14": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-15": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-16": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-17": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-18": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-19": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-20": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-21": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-22": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-23": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-24": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-25": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-26": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-27": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-28": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-29": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-30": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-01": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-02": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-03": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-04": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 2,
          "clicks": 0
        },
        "cost": 0.7
      },
      "2024-12-05": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-06": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-07": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-08": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-09": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-10": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-11": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-12": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      }
    },
    "sales": {},
    "other_metricks": {
      "2024-12-07": {
        "drr": 0,
        "krrr": 100,
        "ctrArk": null,
        "ctrPrk": null,
        "margin": 35.384375,
        "revWithDrr": 452.91999999999996,
        "marginWithDrr": 35.384375,
        "revWithoutDrr": 452.91999999999996
      },
      "2024-12-08": {
        "drr": null,
        "krrr": 0,
        "ctrArk": null,
        "ctrPrk": null,
        "margin": null,
        "revWithDrr": 0,
        "marginWithDrr": null,
        "revWithoutDrr": 0
      },
      "2024-12-09": {
        "drr": null,
        "krrr": 0,
        "ctrArk": null,
        "ctrPrk": null,
        "margin": null,
        "revWithDrr": 0,
        "marginWithDrr": null,
        "revWithoutDrr": 0
      },
      "2024-12-10": {
        "drr": null,
        "krrr": 0,
        "ctrArk": null,
        "ctrPrk": null,
        "margin": null,
        "revWithDrr": 0,
        "marginWithDrr": null,
        "revWithoutDrr": 0
      },
      "2024-12-11": {
        "drr": null,
        "krrr": 0,
        "ctrArk": null,
        "ctrPrk": null,
        "margin": null,
        "revWithDrr": 0,
        "marginWithDrr": null,
        "revWithoutDrr": 0
      }
    },
    "order_info": {
      "stock": 195,
      "2024-12-07": {
        "buysSum": 1280,
        "buysCount": 0.8,
        "ordersSum": 1600,
        "ordersCount": 1,
        "addToCartCount": 1
      },
      "2024-12-08": {
        "buysSum": 0,
        "buysCount": 0,
        "ordersSum": 0,
        "ordersCount": 0,
        "addToCartCount": 1
      },
      "2024-12-09": {
        "buysSum": 0,
        "buysCount": 0,
        "ordersSum": 0,
        "ordersCount": 0,
        "addToCartCount": 2
      },
      "2024-12-10": {
        "buysSum": 0,
        "buysCount": 0,
        "ordersSum": 0,
        "ordersCount": 0,
        "addToCartCount": 2
      },
      "2024-12-11": {
        "buysSum": 0,
        "buysCount": 0,
        "ordersSum": 0,
        "ordersCount": 0,
        "addToCartCount": 1
      },
      "commission": 24.5,
      "pricePerOne": 1600,
      "cart_to_order": "67.00",
      "click_to_cart": "16.82",
      "ordersCount30": 7,
      "buyoutsPercent": 80,
      "fullConversion": "11.27%",
      "addToCartPercent": 3,
      "cartToOrderPercent": 50
    },
    "tax": 0,
    "percent_buys": 80,
    "percent_mp": null,
    "price_before_spp": 1600,
    "logistics": 60,
    "storage": 0,
    "size": {
      "width": 20,
      "height": 2,
      "length": 25,
      "isValid": true,
      "literSize": 1
    },
    "vendor_code": "Корсет.черный"
  },
  {
    "article": "248583423",
    "chat_id": 6076407816,
    "wb_api_key": "eyJhbGciOiJFUzI1NiIsImtpZCI6IjIwMjQxMDE2djEiLCJ0eXAiOiJKV1QifQ.eyJlbnQiOjEsImV4cCI6MTc0NjMwOTIyOSwiaWQiOiIwMTkyZWM0Yi05NTU5LTdjNjEtOWY5Ny1jZGFhN2E3NjQwODciLCJpaWQiOjQ2ODIwNDgsIm9pZCI6MzE1MDQzLCJzIjoxMDczNzQ5NzU4LCJzaWQiOiJlZDE3YTVjNC1lZjZlLTQzNWYtYjUwOS00ZGU3NjkyZjhkMjUiLCJ0IjpmYWxzZSwidWlkIjo0NjgyMDQ4fQ.uQCMJwM2VQSIRByiMWYvmIyg9iB2IbNeA_NW0vl3GzmQn-dr2vkSE69InFLdup5N4piVndT4jcwrEww8zNnMHg",
    "notification_time": null,
    "self_cost": 400,
    "marketing_cost": {
      "2024-11-13": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-14": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-15": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-16": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-17": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-18": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-19": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-20": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-21": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-22": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-23": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-24": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-25": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-26": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-27": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-28": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-29": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-30": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-01": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-02": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-03": {
        "ark": {
          "ctr": 0,
          "views": 2827,
          "clicks": 171
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 287.12
      },
      "2024-12-04": {
        "ark": {
          "ctr": 0,
          "views": 2414,
          "clicks": 150
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 245.57
      },
      "2024-12-05": {
        "ark": {
          "ctr": 0,
          "views": 2466,
          "clicks": 174
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 252.97
      },
      "2024-12-06": {
        "ark": {
          "ctr": 0,
          "views": 2339,
          "clicks": 143
        },
        "prk": {
          "ctr": 0,
          "views": 548,
          "clicks": 23
        },
        "cost": 381.48999999999995
      },
      "2024-12-07": {
        "ark": {
          "ctr": 0,
          "views": 2437,
          "clicks": 162
        },
        "prk": {
          "ctr": 0,
          "views": 805,
          "clicks": 28
        },
        "cost": 461.09
      },
      "2024-12-08": {
        "ark": {
          "ctr": 0,
          "views": 2777,
          "clicks": 170
        },
        "prk": {
          "ctr": 0,
          "views": 866,
          "clicks": 32
        },
        "cost": 546.96
      },
      "2024-12-09": {
        "ark": {
          "ctr": 0,
          "views": 5328,
          "clicks": 259
        },
        "prk": {
          "ctr": 0,
          "views": 2107,
          "clicks": 107
        },
        "cost": 1076.6399999999999
      },
      "2024-12-10": {
        "ark": {
          "ctr": 0,
          "views": 4780,
          "clicks": 240
        },
        "prk": {
          "ctr": 0,
          "views": 377,
          "clicks": 25
        },
        "cost": 491.14
      },
      "2024-12-11": {
        "ark": {
          "ctr": 0,
          "views": 4904,
          "clicks": 233
        },
        "prk": {
          "ctr": 0,
          "views": 276,
          "clicks": 18
        },
        "cost": 454.38
      },
      "2024-12-12": {
        "ark": {
          "ctr": 0,
          "views": 205,
          "clicks": 10
        },
        "prk": {
          "ctr": 0,
          "views": 159,
          "clicks": 9
        },
        "cost": 61.46
      }
    },
    "sales": {
      "2024-12-06": {
        "infoBuysSum": 4800,
        "infoBuysCount": 2
      },
      "2024-12-07": {
        "infoBuysSum": 9600.41,
        "infoBuysCount": 4
      },
      "2024-12-08": {
        "infoBuysSum": 7200,
        "infoBuysCount": 3
      },
      "2024-12-09": {
        "infoBuysSum": 9600,
        "infoBuysCount": 4
      },
      "2024-12-10": {
        "infoBuysSum": 9266.2,
        "infoBuysCount": 4
      },
      "2024-12-11": {
        "infoBuysSum": 9098.71,
        "infoBuysCount": 4
      }
    },
    "other_metricks": {
      "2024-12-07": {
        "drr": 9.604040824828159,
        "krrr": 78.52461713650264,
        "ctrArk": 6.647517439474764,
        "ctrPrk": 3.4782608695652173,
        "margin": 49.14413439507795,
        "revWithDrr": 1685.973002,
        "marginWithDrr": 38.59024337878327,
        "revWithoutDrr": 2147.063002
      },
      "2024-12-08": {
        "drr": 11.395000000000001,
        "krrr": 74.51731593527585,
        "ctrArk": 6.121714079942383,
        "ctrPrk": 3.695150115473441,
        "margin": 49.13916442307692,
        "revWithDrr": 1599.438702,
        "marginWithDrr": 36.6171864010989,
        "revWithoutDrr": 2146.398702
      },
      "2024-12-09": {
        "drr": 6.027207076079046,
        "krrr": 86.01480301509979,
        "ctrArk": 4.861111111111112,
        "ctrPrk": 5.078310393925012,
        "margin": 47.35939355276086,
        "revWithDrr": 6621.785708000001,
        "marginWithDrr": 40.73608907355311,
        "revWithoutDrr": 7698.425708000001
      },
      "2024-12-10": {
        "drr": 2.742879481737965,
        "krrr": 93.64383852762151,
        "ctrArk": 5.02092050209205,
        "ctrPrk": 6.631299734748011,
        "margin": 47.42096766631113,
        "revWithDrr": 7235.850608,
        "marginWithDrr": 44.406814389676,
        "revWithoutDrr": 7726.990608
      },
      "2024-12-11": {
        "drr": 3.391401701746529,
        "krrr": 92.12999589027409,
        "ctrArk": 4.751223491027733,
        "ctrPrk": 6.521739130434782,
        "margin": 47.354677391573944,
        "revWithDrr": 5319.187506,
        "marginWithDrr": 43.627862334709626,
        "revWithoutDrr": 5773.567506
      }
    },
    "order_info": {
      "stock": 133,
      "2024-12-07": {
        "buysSum": 4368.91,
        "buysCount": 1.82,
        "ordersSum": 4801,
        "ordersCount": 2,
        "addToCartCount": 39
      },
      "2024-12-08": {
        "buysSum": 4368,
        "buysCount": 1.82,
        "ordersSum": 4800,
        "ordersCount": 2,
        "addToCartCount": 33
      },
      "2024-12-09": {
        "buysSum": 16255.33,
        "buysCount": 7.28,
        "ordersSum": 17863,
        "ordersCount": 8,
        "addToCartCount": 53
      },
      "2024-12-10": {
        "buysSum": 16294.460000000001,
        "buysCount": 7.28,
        "ordersSum": 17906,
        "ordersCount": 8,
        "addToCartCount": 32
      },
      "2024-12-11": {
        "buysSum": 12192.18,
        "buysCount": 5.46,
        "ordersSum": 13398,
        "ordersCount": 6,
        "addToCartCount": 29
      },
      "commission": 18.5,
      "pricePerOne": 2331.99,
      "cart_to_order": "95.00",
      "click_to_cart": "14.85",
      "ordersCount30": 100,
      "buyoutsPercent": 88,
      "fullConversion": "14.11%",
      "addToCartPercent": 7,
      "cartToOrderPercent": 12
    },
    "tax": 0,
    "percent_buys": 91,
    "percent_mp": null,
    "price_before_spp": 2400,
    "logistics": 135,
    "storage": 0,
    "size": {
      "width": 17,
      "height": 17,
      "length": 21,
      "isValid": true,
      "literSize": 6.069
    },
    "vendor_code": "156-бизиборд6в1-24"
  },
  {
    "article": "279022713",
    "chat_id": 7439188685,
    "wb_api_key": "eyJhbGciOiJFUzI1NiIsImtpZCI6IjIwMjQxMTE4djEiLCJ0eXAiOiJKV1QifQ.eyJlbnQiOjEsImV4cCI6MTc0OTAxMzEyNiwiaWQiOiIwMTkzOGQ3NS1jNWNiLTdlOTUtYmE3Zi03NmMyOTZhOWM4ZDYiLCJpaWQiOjIwMDAwOTgyLCJvaWQiOjkwMzIyNiwicyI6MTA3Mzc0OTc1OCwic2lkIjoiOTM4NmUyNTItODQ1Zi00MjRiLWJhNTgtZGVjM2I0NmI0NDRjIiwidCI6ZmFsc2UsInVpZCI6MjAwMDA5ODJ9.geaiT28m1WEskAxNhgiiwiJVroecnCBLBqadp-HhWwmJyxfaULCic_kzQxjJ8f4ubn_eabFAqK8zR--8teEMTw",
    "notification_time": 23,
    "self_cost": 410,
    "marketing_cost": {
      "2024-11-13": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-14": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-15": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-16": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-17": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-18": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-19": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-20": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-21": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-22": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-23": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-24": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-25": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-26": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-27": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-28": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-29": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-30": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-01": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-02": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-03": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-04": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 13,
          "clicks": 1
        },
        "cost": 4.54
      },
      "2024-12-05": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-06": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-07": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-08": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-09": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-10": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-11": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-12": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      }
    },
    "sales": {},
    "other_metricks": {
      "2024-12-07": {
        "drr": null,
        "krrr": 0,
        "ctrArk": null,
        "ctrPrk": null,
        "margin": null,
        "revWithDrr": 0,
        "marginWithDrr": null,
        "revWithoutDrr": 0
      },
      "2024-12-08": {
        "drr": null,
        "krrr": 0,
        "ctrArk": null,
        "ctrPrk": null,
        "margin": null,
        "revWithDrr": 0,
        "marginWithDrr": null,
        "revWithoutDrr": 0
      },
      "2024-12-09": {
        "drr": 0,
        "krrr": 100,
        "ctrArk": null,
        "ctrPrk": null,
        "margin": 36.01458333333333,
        "revWithDrr": 432.17499999999995,
        "marginWithDrr": 36.01458333333333,
        "revWithoutDrr": 432.17499999999995
      },
      "2024-12-10": {
        "drr": null,
        "krrr": 0,
        "ctrArk": null,
        "ctrPrk": null,
        "margin": null,
        "revWithDrr": 0,
        "marginWithDrr": null,
        "revWithoutDrr": 0
      },
      "2024-12-11": {
        "drr": 0,
        "krrr": 100,
        "ctrArk": null,
        "ctrPrk": null,
        "margin": 36.01458333333333,
        "revWithDrr": 432.17499999999995,
        "marginWithDrr": 36.01458333333333,
        "revWithoutDrr": 432.17499999999995
      }
    },
    "order_info": {
      "stock": 204,
      "2024-12-07": {
        "buysSum": 0,
        "buysCount": 0,
        "ordersSum": 0,
        "ordersCount": 0,
        "addToCartCount": 0
      },
      "2024-12-08": {
        "buysSum": 0,
        "buysCount": 0,
        "ordersSum": 0,
        "ordersCount": 0,
        "addToCartCount": 1
      },
      "2024-12-09": {
        "buysSum": 1200,
        "buysCount": 0.75,
        "ordersSum": 1600,
        "ordersCount": 1,
        "addToCartCount": 2
      },
      "2024-12-10": {
        "buysSum": 0,
        "buysCount": 0,
        "ordersSum": 0,
        "ordersCount": 0,
        "addToCartCount": 2
      },
      "2024-12-11": {
        "buysSum": 1200,
        "buysCount": 0.75,
        "ordersSum": 1600,
        "ordersCount": 1,
        "addToCartCount": 1
      },
      "commission": 24.5,
      "pricePerOne": 1600,
      "cart_to_order": "67.00",
      "click_to_cart": "16.82",
      "ordersCount30": 7,
      "buyoutsPercent": 75,
      "fullConversion": "11.27%",
      "addToCartPercent": 3,
      "cartToOrderPercent": 47
    },
    "tax": 0,
    "percent_buys": 75,
    "percent_mp": null,
    "price_before_spp": null,
    "logistics": 60,
    "storage": 0,
    "size": {
      "width": 20,
      "height": 2,
      "length": 25,
      "isValid": true,
      "literSize": 1
    },
    "vendor_code": "Сетка01.черно-красный"
  },
  {
    "article": "279022717",
    "chat_id": 7439188685,
    "wb_api_key": "eyJhbGciOiJFUzI1NiIsImtpZCI6IjIwMjQxMTE4djEiLCJ0eXAiOiJKV1QifQ.eyJlbnQiOjEsImV4cCI6MTc0OTAxMzEyNiwiaWQiOiIwMTkzOGQ3NS1jNWNiLTdlOTUtYmE3Zi03NmMyOTZhOWM4ZDYiLCJpaWQiOjIwMDAwOTgyLCJvaWQiOjkwMzIyNiwicyI6MTA3Mzc0OTc1OCwic2lkIjoiOTM4NmUyNTItODQ1Zi00MjRiLWJhNTgtZGVjM2I0NmI0NDRjIiwidCI6ZmFsc2UsInVpZCI6MjAwMDA5ODJ9.geaiT28m1WEskAxNhgiiwiJVroecnCBLBqadp-HhWwmJyxfaULCic_kzQxjJ8f4ubn_eabFAqK8zR--8teEMTw",
    "notification_time": 23,
    "self_cost": 380,
    "marketing_cost": {
      "2024-11-13": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-14": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-15": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-16": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-17": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-18": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-19": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-20": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-21": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-22": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-23": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-24": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-25": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-26": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-27": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-28": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-29": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-30": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-01": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-02": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-03": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 50,
          "clicks": 5
        },
        "cost": 7.82
      },
      "2024-12-04": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 1160,
          "clicks": 24
        },
        "cost": 883.86
      },
      "2024-12-05": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 2420,
          "clicks": 81
        },
        "cost": 573.38
      },
      "2024-12-06": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 2799,
          "clicks": 101
        },
        "cost": 557
      },
      "2024-12-07": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 2,
          "clicks": 0
        },
        "cost": 0.4
      },
      "2024-12-08": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 1,
          "clicks": 0
        },
        "cost": 0.2
      },
      "2024-12-09": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 3906,
          "clicks": 134
        },
        "cost": 777.14
      },
      "2024-12-10": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 6058,
          "clicks": 213
        },
        "cost": 1205.54
      },
      "2024-12-11": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 5202,
          "clicks": 138
        },
        "cost": 1035.2
      },
      "2024-12-12": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 2,
          "clicks": 0
        },
        "cost": 0.4
      }
    },
    "sales": {
      "2024-12-06": {
        "infoBuysSum": 1472,
        "infoBuysCount": 1
      },
      "2024-12-07": {
        "infoBuysSum": 2944,
        "infoBuysCount": 2
      },
      "2024-12-10": {
        "infoBuysSum": 1472,
        "infoBuysCount": 1
      },
      "2024-12-11": {
        "infoBuysSum": 1472,
        "infoBuysCount": 1
      }
    },
    "other_metricks": {
      "2024-12-07": {
        "drr": null,
        "krrr": 0,
        "ctrArk": null,
        "ctrPrk": 0,
        "margin": null,
        "revWithDrr": -0.4,
        "marginWithDrr": null,
        "revWithoutDrr": 0
      },
      "2024-12-08": {
        "drr": 0.01358695652173913,
        "krrr": 99.93096687790802,
        "ctrArk": null,
        "ctrPrk": 0,
        "margin": 32.802989130434774,
        "revWithDrr": 289.5159999999999,
        "marginWithDrr": 32.78034420289854,
        "revWithoutDrr": 289.7159999999999
      },
      "2024-12-09": {
        "drr": 26.39741847826087,
        "krrr": 0,
        "ctrArk": null,
        "ctrPrk": 3.430619559651818,
        "margin": 32.802989130434774,
        "revWithDrr": -197.7080000000002,
        "marginWithDrr": -11.192708333333346,
        "revWithoutDrr": 579.4319999999998
      },
      "2024-12-10": {
        "drr": 16.545978589074938,
        "krrr": 15.066211634873591,
        "ctrArk": null,
        "ctrPrk": 3.5160118851105975,
        "margin": 32.46838686064598,
        "revWithDrr": 213.8479999999995,
        "marginWithDrr": 4.891755878854413,
        "revWithoutDrr": 1419.3879999999995
      },
      "2024-12-11": {
        "drr": 36.069686411149824,
        "krrr": 0,
        "ctrArk": null,
        "ctrPrk": 2.6528258362168398,
        "margin": 31.89547038327526,
        "revWithDrr": -485.96000000000004,
        "marginWithDrr": -28.220673635307786,
        "revWithoutDrr": 549.24
      }
    },
    "order_info": {
      "stock": 137,
      "2024-12-07": {
        "buysSum": 0,
        "buysCount": 0,
        "ordersSum": 0,
        "ordersCount": 0,
        "addToCartCount": 1
      },
      "2024-12-08": {
        "buysSum": 883.1999999999999,
        "buysCount": 0.6,
        "ordersSum": 1472,
        "ordersCount": 1,
        "addToCartCount": 2
      },
      "2024-12-09": {
        "buysSum": 1766.3999999999999,
        "buysCount": 1.2,
        "ordersSum": 2944,
        "ordersCount": 2,
        "addToCartCount": 14
      },
      "2024-12-10": {
        "buysSum": 4371.599999999999,
        "buysCount": 3,
        "ordersSum": 7286,
        "ordersCount": 5,
        "addToCartCount": 22
      },
      "2024-12-11": {
        "buysSum": 1722,
        "buysCount": 1.2,
        "ordersSum": 2870,
        "ordersCount": 2,
        "addToCartCount": 11
      },
      "commission": 24.5,
      "pricePerOne": 1525.0645161290322,
      "cart_to_order": "67.00",
      "click_to_cart": "16.82",
      "ordersCount30": 31,
      "buyoutsPercent": 60,
      "fullConversion": "11.27%",
      "addToCartPercent": 10,
      "cartToOrderPercent": 23
    },
    "tax": 0,
    "percent_buys": 60,
    "percent_mp": null,
    "price_before_spp": null,
    "logistics": 60,
    "storage": 0,
    "size": {
      "width": 20,
      "height": 2,
      "length": 25,
      "isValid": true,
      "literSize": 1
    },
    "vendor_code": "Кружево.черный"
  },
  {
    "article": "254642687",
    "chat_id": 150462912,
    "wb_api_key": "eyJhbGciOiJFUzI1NiIsImtpZCI6IjIwMjQxMDE2djEiLCJ0eXAiOiJKV1QifQ.eyJlbnQiOjEsImV4cCI6MTc0NjMwOTIyOSwiaWQiOiIwMTkyZWM0Yi05NTU5LTdjNjEtOWY5Ny1jZGFhN2E3NjQwODciLCJpaWQiOjQ2ODIwNDgsIm9pZCI6MzE1MDQzLCJzIjoxMDczNzQ5NzU4LCJzaWQiOiJlZDE3YTVjNC1lZjZlLTQzNWYtYjUwOS00ZGU3NjkyZjhkMjUiLCJ0IjpmYWxzZSwidWlkIjo0NjgyMDQ4fQ.uQCMJwM2VQSIRByiMWYvmIyg9iB2IbNeA_NW0vl3GzmQn-dr2vkSE69InFLdup5N4piVndT4jcwrEww8zNnMHg",
    "notification_time": null,
    "self_cost": 500,
    "marketing_cost": {
      "2024-11-13": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-14": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-15": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-16": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-17": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-18": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-19": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-20": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-21": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-22": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-23": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-24": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-25": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-26": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-27": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-28": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-29": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-30": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-01": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-02": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-03": {
        "ark": {
          "ctr": 0,
          "views": 2427,
          "clicks": 41
        },
        "prk": {
          "ctr": 0,
          "views": 8,
          "clicks": 1
        },
        "cost": 252.96
      },
      "2024-12-04": {
        "ark": {
          "ctr": 0,
          "views": 2418,
          "clicks": 25
        },
        "prk": {
          "ctr": 0,
          "views": 5946,
          "clicks": 139
        },
        "cost": 1140.12
      },
      "2024-12-05": {
        "ark": {
          "ctr": 0,
          "views": 1964,
          "clicks": 25
        },
        "prk": {
          "ctr": 0,
          "views": 3689,
          "clicks": 66
        },
        "cost": 1901.94
      },
      "2024-12-06": {
        "ark": {
          "ctr": 0,
          "views": 2074,
          "clicks": 34
        },
        "prk": {
          "ctr": 0,
          "views": 3887,
          "clicks": 60
        },
        "cost": 2145.08
      },
      "2024-12-07": {
        "ark": {
          "ctr": 0,
          "views": 1659,
          "clicks": 26
        },
        "prk": {
          "ctr": 0,
          "views": 4097,
          "clicks": 70
        },
        "cost": 2213.19
      },
      "2024-12-08": {
        "ark": {
          "ctr": 0,
          "views": 1675,
          "clicks": 32
        },
        "prk": {
          "ctr": 0,
          "views": 6084,
          "clicks": 115
        },
        "cost": 3212.5
      },
      "2024-12-09": {
        "ark": {
          "ctr": 0,
          "views": 1346,
          "clicks": 17
        },
        "prk": {
          "ctr": 0,
          "views": 3380,
          "clicks": 50
        },
        "cost": 1829.5400000000002
      },
      "2024-12-10": {
        "ark": {
          "ctr": 0,
          "views": 1250,
          "clicks": 19
        },
        "prk": {
          "ctr": 0,
          "views": 2559,
          "clicks": 37
        },
        "cost": 1411.0500000000002
      },
      "2024-12-11": {
        "ark": {
          "ctr": 0,
          "views": 4198,
          "clicks": 69
        },
        "prk": {
          "ctr": 0,
          "views": 7044,
          "clicks": 193
        },
        "cost": 2107.59
      },
      "2024-12-12": {
        "ark": {
          "ctr": 0,
          "views": 402,
          "clicks": 10
        },
        "prk": {
          "ctr": 0,
          "views": 390,
          "clicks": 14
        },
        "cost": 83.27
      }
    },
    "sales": {
      "2024-12-06": {
        "infoBuysSum": 6291,
        "infoBuysCount": 3
      },
      "2024-12-07": {
        "infoBuysSum": 4194.110000000001,
        "infoBuysCount": 2
      },
      "2024-12-08": {
        "infoBuysSum": 4194,
        "infoBuysCount": 2
      },
      "2024-12-09": {
        "infoBuysSum": 8205.7,
        "infoBuysCount": 4
      },
      "2024-12-10": {
        "infoBuysSum": 8388,
        "infoBuysCount": 4
      },
      "2024-12-11": {
        "infoBuysSum": 4194,
        "infoBuysCount": 2
      }
    },
    "other_metricks": {
      "2024-12-07": {
        "drr": 26.385193133047213,
        "krrr": 18.46866034901288,
        "ctrArk": 1.567209162145871,
        "ctrPrk": 1.7085672443251159,
        "margin": 38.526221132229715,
        "revWithDrr": 501.3367199999998,
        "marginWithDrr": 7.115276926221129,
        "revWithoutDrr": 2714.52672
      },
      "2024-12-08": {
        "drr": 76.59752026704817,
        "krrr": 0,
        "ctrArk": 1.9104477611940298,
        "ctrPrk": 1.8902038132807366,
        "margin": 38.51202852147058,
        "revWithDrr": -1855.73664,
        "marginWithDrr": -52.67549560596771,
        "revWithoutDrr": 1356.76336
      },
      "2024-12-09": {
        "drr": 14.540931489429346,
        "krrr": 55.07343622240191,
        "ctrArk": 1.263001485884101,
        "ctrPrk": 1.4792899408284024,
        "margin": 38.530952002482756,
        "revWithDrr": 2242.750079999999,
        "marginWithDrr": 21.220319276971626,
        "revWithoutDrr": 4072.290079999999
      },
      "2024-12-10": {
        "drr": null,
        "krrr": 0,
        "ctrArk": 1.52,
        "ctrPrk": 1.4458772958186792,
        "margin": null,
        "revWithDrr": -1411.0500000000002,
        "marginWithDrr": null,
        "revWithoutDrr": 0
      },
      "2024-12-11": {
        "drr": 17.37215628090999,
        "krrr": 44.48378164323559,
        "ctrArk": 1.6436398284897569,
        "ctrPrk": 2.7399204997160704,
        "margin": 37.25242648328702,
        "revWithDrr": 1688.760079999999,
        "marginWithDrr": 16.57128805363226,
        "revWithoutDrr": 3796.3500799999993
      }
    },
    "order_info": {
      "stock": 114,
      "2024-12-07": {
        "buysSum": 7045.92,
        "buysCount": 3.36,
        "ordersSum": 8388,
        "ordersCount": 4,
        "addToCartCount": 16
      },
      "2024-12-08": {
        "buysSum": 3522.96,
        "buysCount": 1.68,
        "ordersSum": 4194,
        "ordersCount": 2,
        "addToCartCount": 30
      },
      "2024-12-09": {
        "buysSum": 10568.88,
        "buysCount": 5.04,
        "ordersSum": 12582,
        "ordersCount": 6,
        "addToCartCount": 15
      },
      "2024-12-10": {
        "buysSum": 0,
        "buysCount": 0,
        "ordersSum": 0,
        "ordersCount": 0,
        "addToCartCount": 8
      },
      "2024-12-11": {
        "buysSum": 10190.88,
        "buysCount": 5.04,
        "ordersSum": 12132,
        "ordersCount": 6,
        "addToCartCount": 45
      },
      "commission": 18.5,
      "pricePerOne": 2031.0823529411764,
      "cart_to_order": "92.00",
      "click_to_cart": "8.27",
      "ordersCount30": 85,
      "buyoutsPercent": 83,
      "fullConversion": "7.61%",
      "addToCartPercent": 13,
      "cartToOrderPercent": 13
    },
    "tax": 0,
    "percent_buys": 84,
    "percent_mp": null,
    "price_before_spp": 2097,
    "logistics": 159,
    "storage": 0,
    "size": {
      "width": 16,
      "height": 16,
      "length": 30,
      "isValid": true,
      "literSize": 7.68
    },
    "vendor_code": "внедорожник-красн-DH666-53B"
  },
  {
    "article": "264237517",
    "chat_id": 807559940,
    "wb_api_key": "eyJhbGciOiJFUzI1NiIsImtpZCI6IjIwMjQxMTE4djEiLCJ0eXAiOiJKV1QifQ.eyJlbnQiOjEsImV4cCI6MTc0OTAxMTk5NywiaWQiOiIwMTkzOGQ2NC04YmIyLTc1OGUtOTE4Ny0zNWU2OWZjM2QxZDkiLCJpaWQiOjYwMDk0NDM0LCJvaWQiOjM1NTUxMywicyI6MTA3Mzc0OTc1OCwic2lkIjoiNGYzNGU4YjAtYmFjNS00YTZmLWFkNTYtNjQ4MWJiNDljYjc0IiwidCI6ZmFsc2UsInVpZCI6NjAwOTQ0MzR9.BUTAiRGFvJ8xq9dUpWQXxMAWo4iDxmpgkeETeR6OM41GTIlZQkCjGp8A6Zfw-DffEcNzouLocPLuy9CGklhA5g",
    "notification_time": 9,
    "self_cost": 1470,
    "marketing_cost": {
      "2024-11-13": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-14": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-15": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-16": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-17": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-18": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-19": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-20": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-21": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-22": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-23": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-24": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-25": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-26": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-27": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-28": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-29": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-30": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-01": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-02": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-03": {
        "ark": {
          "ctr": 0,
          "views": 3395,
          "clicks": 150
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 292.27
      },
      "2024-12-04": {
        "ark": {
          "ctr": 0,
          "views": 3586,
          "clicks": 159
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 294.37
      },
      "2024-12-05": {
        "ark": {
          "ctr": 0,
          "views": 5110,
          "clicks": 210
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 445.25
      },
      "2024-12-06": {
        "ark": {
          "ctr": 0,
          "views": 5961,
          "clicks": 205
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 604.46
      },
      "2024-12-07": {
        "ark": {
          "ctr": 0,
          "views": 7844,
          "clicks": 312
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 847.55
      },
      "2024-12-08": {
        "ark": {
          "ctr": 0,
          "views": 6926,
          "clicks": 293
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 773.3700000000001
      },
      "2024-12-09": {
        "ark": {
          "ctr": 0,
          "views": 4934,
          "clicks": 193
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 540.29
      },
      "2024-12-10": {
        "ark": {
          "ctr": 0,
          "views": 7795,
          "clicks": 324
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 837.25
      },
      "2024-12-11": {
        "ark": {
          "ctr": 0,
          "views": 9653,
          "clicks": 605
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 703.35
      },
      "2024-12-12": {
        "ark": {
          "ctr": 0,
          "views": 62,
          "clicks": 5
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 1.74
      }
    },
    "sales": {
      "2024-12-06": {
        "infoBuysSum": 20549.93,
        "infoBuysCount": 6
      },
      "2024-12-07": {
        "infoBuysSum": 13599.93,
        "infoBuysCount": 4
      },
      "2024-12-08": {
        "infoBuysSum": 20199.92,
        "infoBuysCount": 8
      },
      "2024-12-09": {
        "infoBuysSum": 3400,
        "infoBuysCount": 1
      },
      "2024-12-10": {
        "infoBuysSum": 16800,
        "infoBuysCount": 5
      },
      "2024-12-11": {
        "infoBuysSum": 13449.95,
        "infoBuysCount": 4
      }
    },
    "other_metricks": {
      "2024-12-07": {
        "drr": 1.8071428571428572,
        "krrr": 70.49429144522198,
        "ctrArk": 3.977562468128506,
        "ctrPrk": null,
        "margin": 10.040529169142575,
        "revWithDrr": 2024.9449899999993,
        "marginWithDrr": 7.077999895137892,
        "revWithoutDrr": 2872.4949899999992
      },
      "2024-12-08": {
        "drr": 3.2979530916844357,
        "krrr": 46.1534308890126,
        "ctrArk": 4.230436038117239,
        "ctrPrk": null,
        "margin": 10.040529169142575,
        "revWithDrr": 662.8774949999995,
        "marginWithDrr": 4.634048690971369,
        "revWithoutDrr": 1436.2474949999996
      },
      "2024-12-09": {
        "drr": 1.3440049751243779,
        "krrr": 78.05734163400383,
        "ctrArk": 3.911633563032023,
        "ctrPrk": null,
        "margin": 10.04111173639998,
        "revWithDrr": 1921.991420000003,
        "marginWithDrr": 7.837824891933787,
        "revWithoutDrr": 2462.281420000003
      },
      "2024-12-10": {
        "drr": 4.998507462686567,
        "krrr": 18.399384308857016,
        "ctrArk": 4.1565105837075045,
        "ctrPrk": null,
        "margin": 10.041927330560311,
        "revWithDrr": 188.78392499999973,
        "marginWithDrr": 1.8476528015659381,
        "revWithoutDrr": 1026.0339249999997
      },
      "2024-12-11": {
        "drr": 3.499253731343284,
        "krrr": 42.84684438888755,
        "ctrArk": 6.267481611934114,
        "ctrPrk": null,
        "margin": 10.03703376559825,
        "revWithDrr": 527.2907100000015,
        "marginWithDrr": 4.300552238805982,
        "revWithoutDrr": 1230.6407100000015
      }
    },
    "order_info": {
      "stock": 171,
      "2024-12-07": {
        "buysSum": 28609,
        "buysCount": 8.54,
        "ordersSum": 46900,
        "ordersCount": 14,
        "addToCartCount": 65
      },
      "2024-12-08": {
        "buysSum": 14304.5,
        "buysCount": 4.27,
        "ordersSum": 23450,
        "ordersCount": 7,
        "addToCartCount": 61
      },
      "2024-12-09": {
        "buysSum": 24522,
        "buysCount": 7.32,
        "ordersSum": 40200,
        "ordersCount": 12,
        "addToCartCount": 47
      },
      "2024-12-10": {
        "buysSum": 10217.5,
        "buysCount": 3.05,
        "ordersSum": 16750,
        "ordersCount": 5,
        "addToCartCount": 57
      },
      "2024-12-11": {
        "buysSum": 12261,
        "buysCount": 3.66,
        "ordersSum": 20100,
        "ordersCount": 6,
        "addToCartCount": 100
      },
      "commission": 24.5,
      "pricePerOne": 3428.0837438423646,
      "cart_to_order": "77.00",
      "click_to_cart": "9.67",
      "ordersCount30": 203,
      "buyoutsPercent": 62,
      "fullConversion": "7.45%",
      "addToCartPercent": 6,
      "cartToOrderPercent": 14
    },
    "tax": 0,
    "percent_buys": 61,
    "percent_mp": null,
    "price_before_spp": 3350,
    "logistics": 242,
    "storage": 1,
    "size": {
      "width": 33,
      "height": 15,
      "length": 27,
      "isValid": true,
      "literSize": 13.365
    },
    "vendor_code": "00009"
  },
  {
    "article": "44051639",
    "chat_id": 621634597,
    "wb_api_key": "eyJhbGciOiJFUzI1NiIsImtpZCI6IjIwMjQxMDE2djEiLCJ0eXAiOiJKV1QifQ.eyJlbnQiOjEsImV4cCI6MTc0NTI3NzkzMiwiaWQiOiIwMTkyYWVkMy0zZTE0LTczZjMtYjg3Zi0wNzY4NmEwM2MyMTAiLCJpaWQiOjUxMjU4OTA2LCJvaWQiOjIzMTg5MywicyI6MTA3Mzc0OTc1OCwic2lkIjoiNmFmMDg1MjEtNWFmNy00ZWJhLTlmMzMtMDU1YmQ4ZmYxMDdkIiwidCI6ZmFsc2UsInVpZCI6NTEyNTg5MDZ9.k6sknkEF1VwSIll5SBjuP5xQ33z1ud6CpszgC6sYqcmqoVAprF80M33RaotHwL72LDK0_45Yf9lSoE9H8R2iqw",
    "notification_time": 21,
    "self_cost": 28,
    "marketing_cost": {
      "2024-11-13": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-14": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-15": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-16": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-17": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-18": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-19": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-20": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-21": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-22": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-23": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-24": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-25": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-26": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-27": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-28": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-29": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-30": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-01": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-02": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-03": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-04": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-05": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-06": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-07": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-08": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-09": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-10": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-11": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-12": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      }
    },
    "sales": {
      "2024-12-05": {
        "infoBuysSum": 6274.01,
        "infoBuysCount": 32
      },
      "2024-12-06": {
        "infoBuysSum": 42807.990000000005,
        "infoBuysCount": 222
      },
      "2024-12-07": {
        "infoBuysSum": 32220.039999999994,
        "infoBuysCount": 167
      },
      "2024-12-08": {
        "infoBuysSum": 35937.51999999999,
        "infoBuysCount": 188
      },
      "2024-12-09": {
        "infoBuysSum": 32050.499999999996,
        "infoBuysCount": 168
      },
      "2024-12-10": {
        "infoBuysSum": 39519.71,
        "infoBuysCount": 213
      },
      "2024-12-11": {
        "infoBuysSum": 39156.25000000001,
        "infoBuysCount": 214
      }
    },
    "other_metricks": {
      "2024-12-07": {
        "drr": 0,
        "krrr": 100,
        "ctrArk": null,
        "ctrPrk": null,
        "margin": 19.411365533155113,
        "revWithDrr": 6824.0772,
        "marginWithDrr": 19.411365533155113,
        "revWithoutDrr": 6824.0772
      },
      "2024-12-08": {
        "drr": 0,
        "krrr": 100,
        "ctrArk": null,
        "ctrPrk": null,
        "margin": 16.82012985103919,
        "revWithDrr": 8467.381199999996,
        "marginWithDrr": 16.82012985103919,
        "revWithoutDrr": 8467.381199999996
      },
      "2024-12-09": {
        "drr": 0,
        "krrr": 100,
        "ctrArk": null,
        "ctrPrk": null,
        "margin": 15.844750309559027,
        "revWithDrr": 8755.178399999997,
        "marginWithDrr": 15.844750309559027,
        "revWithoutDrr": 8755.178399999997
      },
      "2024-12-10": {
        "drr": 0,
        "krrr": 100,
        "ctrArk": null,
        "ctrPrk": null,
        "margin": 15.846308833010964,
        "revWithDrr": 9909.698400000001,
        "marginWithDrr": 15.846308833010964,
        "revWithoutDrr": 9909.698400000001
      },
      "2024-12-11": {
        "drr": 0,
        "krrr": 100,
        "ctrArk": null,
        "ctrPrk": null,
        "margin": 15.828042065954664,
        "revWithDrr": 8978.941200000001,
        "marginWithDrr": 15.828042065954664,
        "revWithoutDrr": 8978.941200000001
      }
    },
    "order_info": {
      "stock": 5128,
      "2024-12-07": {
        "buysSum": 35155.06,
        "buysCount": 187.06,
        "ordersSum": 37399,
        "ordersCount": 199,
        "addToCartCount": 810
      },
      "2024-12-08": {
        "buysSum": 50340.759999999995,
        "buysCount": 281.06,
        "ordersSum": 53554,
        "ordersCount": 299,
        "addToCartCount": 1173
      },
      "2024-12-09": {
        "buysSum": 55256.02,
        "buysCount": 313.96,
        "ordersSum": 58783,
        "ordersCount": 334,
        "addToCartCount": 1254
      },
      "2024-12-10": {
        "buysSum": 62536.32,
        "buysCount": 355.32,
        "ordersSum": 66528,
        "ordersCount": 378,
        "addToCartCount": 1348
      },
      "2024-12-11": {
        "buysSum": 56728.06,
        "buysCount": 322.41999999999996,
        "ordersSum": 60349,
        "ordersCount": 343,
        "addToCartCount": 1100
      },
      "commission": 19.5,
      "pricePerOne": 191.71091490333384,
      "cart_to_order": "95.00",
      "click_to_cart": "12.53",
      "ordersCount30": 6569,
      "buyoutsPercent": 94,
      "fullConversion": "11.90%",
      "addToCartPercent": 21,
      "cartToOrderPercent": 24
    },
    "tax": 0,
    "percent_buys": 94,
    "percent_mp": null,
    "price_before_spp": 187,
    "logistics": 60,
    "storage": 0,
    "size": {
      "width": 35,
      "height": 1,
      "length": 25,
      "isValid": true,
      "literSize": 0.875
    },
    "vendor_code": "NakB01"
  },
  {
    "article": "91983566",
    "chat_id": 1297873019,
    "wb_api_key": "eyJhbGciOiJFUzI1NiIsImtpZCI6IjIwMjQxMTE4djEiLCJ0eXAiOiJKV1QifQ.eyJlbnQiOjEsImV4cCI6MTc0OTAwODQyNywiaWQiOiIwMTkzOGQyZS0xMmM3LTdkMjctOGU4Yy1mYjg4NzEzNzZmOWUiLCJpaWQiOjI0NjAzMjk5LCJvaWQiOjQzNzk2OSwicyI6MTA3Mzc0OTc1OCwic2lkIjoiMDNmNWY1ZDEtMjRjMy00NTlmLThhNmItNmVkNTBlMDEyMTJhIiwidCI6ZmFsc2UsInVpZCI6MjQ2MDMyOTl9.Cp6R4nwwUlmg2WzcZznmsFz-RUk1Lv1QQEFlGvBAJKbW0Us6Jpbd8_MWSvI7_sZCp0lNN71nbFzoXrAKVPJPJw",
    "notification_time": 8,
    "self_cost": 55,
    "marketing_cost": {
      "2024-11-13": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-14": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-15": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-16": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-17": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-18": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-19": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-20": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-21": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-22": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-23": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-24": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-25": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-26": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-27": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-28": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-29": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-30": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-01": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-02": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-03": {
        "ark": {
          "ctr": 0,
          "views": 5912,
          "clicks": 183
        },
        "prk": {
          "ctr": 0,
          "views": 140,
          "clicks": 4
        },
        "cost": 2286.89
      },
      "2024-12-04": {
        "ark": {
          "ctr": 0,
          "views": 7512,
          "clicks": 252
        },
        "prk": {
          "ctr": 0,
          "views": 178,
          "clicks": 4
        },
        "cost": 3192.1400000000003
      },
      "2024-12-05": {
        "ark": {
          "ctr": 0,
          "views": 7723,
          "clicks": 283
        },
        "prk": {
          "ctr": 0,
          "views": 208,
          "clicks": 4
        },
        "cost": 3166.46
      },
      "2024-12-06": {
        "ark": {
          "ctr": 0,
          "views": 5172,
          "clicks": 145
        },
        "prk": {
          "ctr": 0,
          "views": 274,
          "clicks": 9
        },
        "cost": 2321.12
      },
      "2024-12-07": {
        "ark": {
          "ctr": 0,
          "views": 2719,
          "clicks": 81
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 1120.03
      },
      "2024-12-08": {
        "ark": {
          "ctr": 0,
          "views": 4419,
          "clicks": 152
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 2076.75
      },
      "2024-12-09": {
        "ark": {
          "ctr": 0,
          "views": 7103,
          "clicks": 195
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 3115.2500000000005
      },
      "2024-12-10": {
        "ark": {
          "ctr": 0,
          "views": 4969,
          "clicks": 178
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 2126.86
      },
      "2024-12-11": {
        "ark": {
          "ctr": 0,
          "views": 2486,
          "clicks": 71
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 1088.22
      },
      "2024-12-12": {
        "ark": {
          "ctr": 0,
          "views": 1079,
          "clicks": 43
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 529.36
      }
    },
    "sales": {
      "2024-12-06": {
        "infoBuysSum": 6143.4,
        "infoBuysCount": 17
      },
      "2024-12-07": {
        "infoBuysSum": 8664.98,
        "infoBuysCount": 24
      },
      "2024-12-08": {
        "infoBuysSum": 9603.029999999999,
        "infoBuysCount": 25
      },
      "2024-12-09": {
        "infoBuysSum": 7057.45,
        "infoBuysCount": 17
      },
      "2024-12-10": {
        "infoBuysSum": 3518,
        "infoBuysCount": 9
      },
      "2024-12-11": {
        "infoBuysSum": 8096.3099999999995,
        "infoBuysCount": 20
      }
    },
    "other_metricks": {
      "2024-12-07": {
        "drr": 15.651621017328116,
        "krrr": 62.03765560331226,
        "ctrArk": 2.979036410445017,
        "ctrPrk": null,
        "margin": 43.39929687270159,
        "revWithDrr": 1830.3409999999997,
        "marginWithDrr": 26.92390632814568,
        "revWithoutDrr": 2950.3709999999996
      },
      "2024-12-08": {
        "drr": 21.7392442164765,
        "krrr": 46.784392292109686,
        "ctrArk": 3.4396922380629102,
        "ctrPrk": null,
        "margin": 43.00132226305322,
        "revWithDrr": 1825.7705000000005,
        "marginWithDrr": 20.117907298341116,
        "revWithoutDrr": 3902.5205000000005
      },
      "2024-12-09": {
        "drr": 54.84595070422535,
        "krrr": 0,
        "ctrArk": 2.7453188793467547,
        "ctrPrk": null,
        "margin": 42.27853965900667,
        "revWithDrr": -833.9000000000005,
        "marginWithDrr": -15.454040029651603,
        "revWithoutDrr": 2281.35
      },
      "2024-12-10": {
        "drr": 45.48460222412318,
        "krrr": 0,
        "ctrArk": 3.582209700140873,
        "ctrPrk": null,
        "margin": 43.68693440187295,
        "revWithDrr": -186.19900000000007,
        "marginWithDrr": -4.191594255098827,
        "revWithoutDrr": 1940.661
      },
      "2024-12-11": {
        "drr": 12.978175313059035,
        "krrr": 67.30994674671307,
        "ctrArk": 2.8559935639581657,
        "ctrPrk": null,
        "margin": 41.79019552458965,
        "revWithDrr": 2240.6825,
        "marginWithDrr": 28.12895835294856,
        "revWithoutDrr": 3328.9025
      }
    },
    "order_info": {
      "stock": 1435,
      "2024-12-07": {
        "buysSum": 6798.2,
        "buysCount": 16.15,
        "ordersSum": 7156,
        "ordersCount": 17,
        "addToCartCount": 50
      },
      "2024-12-08": {
        "buysSum": 9075.35,
        "buysCount": 21.849999999999998,
        "ordersSum": 9553,
        "ordersCount": 23,
        "addToCartCount": 51
      },
      "2024-12-09": {
        "buysSum": 5396,
        "buysCount": 13.299999999999999,
        "ordersSum": 5680,
        "ordersCount": 14,
        "addToCartCount": 63
      },
      "2024-12-10": {
        "buysSum": 4442.2,
        "buysCount": 10.45,
        "ordersSum": 4676,
        "ordersCount": 11,
        "addToCartCount": 51
      },
      "2024-12-11": {
        "buysSum": 7965.75,
        "buysCount": 19.95,
        "ordersSum": 8385,
        "ordersCount": 21,
        "addToCartCount": 43
      },
      "commission": 19.5,
      "pricePerOne": 367.53777777777776,
      "cart_to_order": "98.00",
      "click_to_cart": "20.33",
      "ordersCount30": 900,
      "buyoutsPercent": 95,
      "fullConversion": "19.92%",
      "addToCartPercent": 18,
      "cartToOrderPercent": 40
    },
    "tax": 0,
    "percent_buys": 95,
    "percent_mp": null,
    "price_before_spp": 420,
    "logistics": 60,
    "storage": 0,
    "size": {
      "width": 20,
      "height": 17,
      "length": 1,
      "isValid": true,
      "literSize": 0.34
    },
    "vendor_code": "TMG-02"
  },
  {
    "article": "123404135",
    "chat_id": 621634597,
    "wb_api_key": "eyJhbGciOiJFUzI1NiIsImtpZCI6IjIwMjQxMDE2djEiLCJ0eXAiOiJKV1QifQ.eyJlbnQiOjEsImV4cCI6MTc0NTI3NzkzMiwiaWQiOiIwMTkyYWVkMy0zZTE0LTczZjMtYjg3Zi0wNzY4NmEwM2MyMTAiLCJpaWQiOjUxMjU4OTA2LCJvaWQiOjIzMTg5MywicyI6MTA3Mzc0OTc1OCwic2lkIjoiNmFmMDg1MjEtNWFmNy00ZWJhLTlmMzMtMDU1YmQ4ZmYxMDdkIiwidCI6ZmFsc2UsInVpZCI6NTEyNTg5MDZ9.k6sknkEF1VwSIll5SBjuP5xQ33z1ud6CpszgC6sYqcmqoVAprF80M33RaotHwL72LDK0_45Yf9lSoE9H8R2iqw",
    "notification_time": 21,
    "self_cost": 50,
    "marketing_cost": {
      "2024-11-13": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-14": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-15": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-16": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-17": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-18": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-19": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-20": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-21": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-22": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-23": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-24": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-25": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-26": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-27": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-28": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-29": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-30": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-01": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-02": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-03": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-04": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-05": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-06": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-07": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-08": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-09": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-10": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-11": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-12": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      }
    },
    "sales": {
      "2024-12-05": {
        "infoBuysSum": 5676.83,
        "infoBuysCount": 26
      },
      "2024-12-06": {
        "infoBuysSum": 23988.91,
        "infoBuysCount": 110
      },
      "2024-12-07": {
        "infoBuysSum": 22850,
        "infoBuysCount": 105
      },
      "2024-12-08": {
        "infoBuysSum": 25047.79,
        "infoBuysCount": 117
      },
      "2024-12-09": {
        "infoBuysSum": 27595.72000000001,
        "infoBuysCount": 127
      },
      "2024-12-10": {
        "infoBuysSum": 26775.920000000002,
        "infoBuysCount": 133
      },
      "2024-12-11": {
        "infoBuysSum": 32173.700000000004,
        "infoBuysCount": 152
      }
    },
    "other_metricks": {
      "2024-12-07": {
        "drr": 0,
        "krrr": 100,
        "ctrArk": null,
        "ctrPrk": null,
        "margin": 9.529260027093814,
        "revWithDrr": 2201.7259999999987,
        "marginWithDrr": 9.529260027093814,
        "revWithoutDrr": 2201.7259999999987
      },
      "2024-12-08": {
        "drr": 0,
        "krrr": 100,
        "ctrArk": null,
        "ctrPrk": null,
        "margin": 7.299770109938482,
        "revWithDrr": 2414.5216,
        "marginWithDrr": 7.299770109938482,
        "revWithoutDrr": 2414.5216
      },
      "2024-12-09": {
        "drr": 0,
        "krrr": 100,
        "ctrArk": null,
        "ctrPrk": null,
        "margin": 6.461359634917402,
        "revWithDrr": 1683.7502000000022,
        "marginWithDrr": 6.461359634917402,
        "revWithoutDrr": 1683.7502000000022
      },
      "2024-12-10": {
        "drr": 0,
        "krrr": 100,
        "ctrArk": null,
        "ctrPrk": null,
        "margin": 6.449612973952333,
        "revWithDrr": 2320.9545,
        "marginWithDrr": 6.449612973952333,
        "revWithoutDrr": 2320.9545
      },
      "2024-12-11": {
        "drr": 0,
        "krrr": 100,
        "ctrArk": null,
        "ctrPrk": null,
        "margin": 6.445323194200362,
        "revWithDrr": 2415.9526999999944,
        "marginWithDrr": 6.445323194200362,
        "revWithoutDrr": 2415.9526999999944
      }
    },
    "order_info": {
      "stock": 3017,
      "2024-12-07": {
        "buysSum": 23104.9,
        "buysCount": 106.47,
        "ordersSum": 25390,
        "ordersCount": 117,
        "addToCartCount": 519
      },
      "2024-12-08": {
        "buysSum": 33076.68,
        "buysCount": 158.34,
        "ordersSum": 36348,
        "ordersCount": 174,
        "addToCartCount": 615
      },
      "2024-12-09": {
        "buysSum": 26058.760000000002,
        "buysCount": 126.49000000000001,
        "ordersSum": 28636,
        "ordersCount": 139,
        "addToCartCount": 571
      },
      "2024-12-10": {
        "buysSum": 35985.950000000004,
        "buysCount": 174.72,
        "ordersSum": 39545,
        "ordersCount": 192,
        "addToCartCount": 638
      },
      "2024-12-11": {
        "buysSum": 37483.81,
        "buysCount": 182,
        "ordersSum": 41191,
        "ordersCount": 200,
        "addToCartCount": 625
      },
      "commission": 24.5,
      "pricePerOne": 220.57016317016317,
      "cart_to_order": "89.00",
      "click_to_cart": "15.66",
      "ordersCount30": 4290,
      "buyoutsPercent": 91,
      "fullConversion": "13.94%",
      "addToCartPercent": 23,
      "cartToOrderPercent": 26
    },
    "tax": 0,
    "percent_buys": 91,
    "percent_mp": null,
    "price_before_spp": 217,
    "logistics": 60,
    "storage": 0,
    "size": {
      "width": 14,
      "height": 2,
      "length": 20,
      "isValid": true,
      "literSize": 0.56
    },
    "vendor_code": "ПерчСкелет"
  },
  {
    "article": "228949261",
    "chat_id": 790998671,
    "wb_api_key": "eyJhbGciOiJFUzI1NiIsImtpZCI6IjIwMjQxMTE4djEiLCJ0eXAiOiJKV1QifQ.eyJlbnQiOjEsImV4cCI6MTc0ODk5NDIxMSwiaWQiOiIwMTkzOGM1NS0yOWY4LTdjYmUtYTAwYi1iNzJiOWYxOTI2NDYiLCJpaWQiOjUwMTY4ODUsIm9pZCI6MjU1MTc0LCJzIjoxMDczNzQ5NzU4LCJzaWQiOiI1MjFiMmVhNy1mMTllLTQyMDgtYjlmZS01YTFmYzc5YjQyNTEiLCJ0IjpmYWxzZSwidWlkIjo1MDE2ODg1fQ.fYu6InnnQg4M_QHMbcwX_gamWjNReMyneexoGropo24YHj-SvprS4GLIkrFd9_oxao1GgMa1R5PHOBN8zmLiFQ",
    "notification_time": 8,
    "self_cost": 1120,
    "marketing_cost": {
      "2024-11-13": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-14": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-15": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-16": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-17": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-18": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-19": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-20": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-21": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-22": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-23": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-24": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-25": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-26": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-27": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-28": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-29": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-30": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-01": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-02": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-03": {
        "ark": {
          "ctr": 0,
          "views": 7539,
          "clicks": 366
        },
        "prk": {
          "ctr": 0,
          "views": 93,
          "clicks": 9
        },
        "cost": 1295.7
      },
      "2024-12-04": {
        "ark": {
          "ctr": 0,
          "views": 8270,
          "clicks": 343
        },
        "prk": {
          "ctr": 0,
          "views": 119,
          "clicks": 6
        },
        "cost": 1380.19
      },
      "2024-12-05": {
        "ark": {
          "ctr": 0,
          "views": 8264,
          "clicks": 428
        },
        "prk": {
          "ctr": 0,
          "views": 142,
          "clicks": 8
        },
        "cost": 1368.3600000000001
      },
      "2024-12-06": {
        "ark": {
          "ctr": 0,
          "views": 7260,
          "clicks": 342
        },
        "prk": {
          "ctr": 0,
          "views": 191,
          "clicks": 6
        },
        "cost": 1254.4199999999998
      },
      "2024-12-07": {
        "ark": {
          "ctr": 0,
          "views": 8342,
          "clicks": 417
        },
        "prk": {
          "ctr": 0,
          "views": 192,
          "clicks": 10
        },
        "cost": 1425.89
      },
      "2024-12-08": {
        "ark": {
          "ctr": 0,
          "views": 9276,
          "clicks": 437
        },
        "prk": {
          "ctr": 0,
          "views": 362,
          "clicks": 26
        },
        "cost": 1716.26
      },
      "2024-12-09": {
        "ark": {
          "ctr": 0,
          "views": 8520,
          "clicks": 434
        },
        "prk": {
          "ctr": 0,
          "views": 282,
          "clicks": 8
        },
        "cost": 1541.4099999999999
      },
      "2024-12-10": {
        "ark": {
          "ctr": 0,
          "views": 7795,
          "clicks": 360
        },
        "prk": {
          "ctr": 0,
          "views": 193,
          "clicks": 9
        },
        "cost": 1395.51
      },
      "2024-12-11": {
        "ark": {
          "ctr": 0,
          "views": 7194,
          "clicks": 381
        },
        "prk": {
          "ctr": 0,
          "views": 203,
          "clicks": 17
        },
        "cost": 1337.86
      },
      "2024-12-12": {
        "ark": {
          "ctr": 0,
          "views": 558,
          "clicks": 26
        },
        "prk": {
          "ctr": 0,
          "views": 16,
          "clicks": 3
        },
        "cost": 111.53
      }
    },
    "sales": {
      "2024-12-05": {
        "infoBuysSum": 0,
        "infoBuysCount": 2
      },
      "2024-12-06": {
        "infoBuysSum": 10285,
        "infoBuysCount": 7
      },
      "2024-12-07": {
        "infoBuysSum": 18173,
        "infoBuysCount": 5
      },
      "2024-12-08": {
        "infoBuysSum": 40511,
        "infoBuysCount": 13
      },
      "2024-12-09": {
        "infoBuysSum": 21453.21,
        "infoBuysCount": 6
      },
      "2024-12-10": {
        "infoBuysSum": 7003.530000000001,
        "infoBuysCount": 6
      },
      "2024-12-11": {
        "infoBuysSum": 21896,
        "infoBuysCount": 10
      }
    },
    "other_metricks": {
      "2024-12-07": {
        "drr": 3.8299489658877253,
        "krrr": 66.56541725169974,
        "ctrArk": 4.998801246703429,
        "ctrPrk": 5.208333333333334,
        "margin": 27.939152139305428,
        "revWithDrr": 2838.825999999998,
        "marginWithDrr": 18.597813198115855,
        "revWithoutDrr": 4264.7159999999985
      },
      "2024-12-08": {
        "drr": 3.073256334497269,
        "krrr": 73.17117169505933,
        "ctrArk": 4.711082363087538,
        "ctrPrk": 7.18232044198895,
        "margin": 27.939152139305445,
        "revWithDrr": 4680.814,
        "marginWithDrr": 20.443404981995027,
        "revWithoutDrr": 6397.0740000000005
      },
      "2024-12-09": {
        "drr": 2.5876477303250067,
        "krrr": 77.41108636875326,
        "ctrArk": 5.093896713615023,
        "ctrPrk": 2.8368794326241136,
        "margin": 27.93997104354605,
        "revWithDrr": 5282.3355999999985,
        "marginWithDrr": 21.62863511592408,
        "revWithoutDrr": 6823.745599999998
      },
      "2024-12-10": {
        "drr": 2.0824156146476853,
        "krrr": 81.82240643093772,
        "ctrArk": 4.6183450930083385,
        "ctrPrk": 4.66321243523316,
        "margin": 27.941335883947065,
        "revWithDrr": 6281.5787999999975,
        "marginWithDrr": 22.862273409196614,
        "revWithoutDrr": 7677.088799999998
      },
      "2024-12-11": {
        "drr": 1.891315718789318,
        "krrr": 83.48883671791654,
        "ctrArk": 5.2960800667222685,
        "ctrPrk": 8.374384236453201,
        "margin": 27.938462535734406,
        "revWithDrr": 6764.900400000003,
        "marginWithDrr": 23.325497367955585,
        "revWithoutDrr": 8102.760400000003
      }
    },
    "order_info": {
      "stock": 393,
      "2024-12-07": {
        "buysSum": 15264.3,
        "buysCount": 4.1,
        "ordersSum": 37230,
        "ordersCount": 10,
        "addToCartCount": 41
      },
      "2024-12-08": {
        "buysSum": 22896.449999999997,
        "buysCount": 6.1499999999999995,
        "ordersSum": 55845,
        "ordersCount": 15,
        "addToCartCount": 62
      },
      "2024-12-09": {
        "buysSum": 24422.879999999997,
        "buysCount": 6.56,
        "ordersSum": 59568,
        "ordersCount": 16,
        "addToCartCount": 54
      },
      "2024-12-10": {
        "buysSum": 27475.739999999998,
        "buysCount": 7.38,
        "ordersSum": 67014,
        "ordersCount": 18,
        "addToCartCount": 36
      },
      "2024-12-11": {
        "buysSum": 29002.17,
        "buysCount": 7.789999999999999,
        "ordersSum": 70737,
        "ordersCount": 19,
        "addToCartCount": 37
      },
      "commission": 24.5,
      "pricePerOne": 3405.0865384615386,
      "cart_to_order": "49.00",
      "click_to_cart": "15.96",
      "ordersCount30": 520,
      "buyoutsPercent": 41,
      "fullConversion": "7.82%",
      "addToCartPercent": 8,
      "cartToOrderPercent": 29
    },
    "tax": 0,
    "percent_buys": 41,
    "percent_mp": null,
    "price_before_spp": 3723,
    "logistics": 116,
    "storage": 0,
    "size": {
      "width": 40,
      "height": 4,
      "length": 30,
      "isValid": true,
      "literSize": 4.8
    },
    "vendor_code": "рубашка_джинс_черная"
  },
  {
    "article": "109717596",
    "chat_id": 1297873019,
    "wb_api_key": "eyJhbGciOiJFUzI1NiIsImtpZCI6IjIwMjQxMTE4djEiLCJ0eXAiOiJKV1QifQ.eyJlbnQiOjEsImV4cCI6MTc0OTAwODQyNywiaWQiOiIwMTkzOGQyZS0xMmM3LTdkMjctOGU4Yy1mYjg4NzEzNzZmOWUiLCJpaWQiOjI0NjAzMjk5LCJvaWQiOjQzNzk2OSwicyI6MTA3Mzc0OTc1OCwic2lkIjoiMDNmNWY1ZDEtMjRjMy00NTlmLThhNmItNmVkNTBlMDEyMTJhIiwidCI6ZmFsc2UsInVpZCI6MjQ2MDMyOTl9.Cp6R4nwwUlmg2WzcZznmsFz-RUk1Lv1QQEFlGvBAJKbW0Us6Jpbd8_MWSvI7_sZCp0lNN71nbFzoXrAKVPJPJw",
    "notification_time": 8,
    "self_cost": 200,
    "marketing_cost": {
      "2024-11-13": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-14": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-15": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-16": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-17": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-18": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-19": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-20": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-21": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-22": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-23": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-24": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-25": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-26": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-27": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-28": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-29": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-30": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-01": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-02": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-03": {
        "ark": {
          "ctr": 0,
          "views": 41167,
          "clicks": 563
        },
        "prk": {
          "ctr": 0,
          "views": 2457,
          "clicks": 158
        },
        "cost": 2940.4799999999996
      },
      "2024-12-04": {
        "ark": {
          "ctr": 0,
          "views": 27049,
          "clicks": 388
        },
        "prk": {
          "ctr": 0,
          "views": 2949,
          "clicks": 216
        },
        "cost": 3008.59
      },
      "2024-12-05": {
        "ark": {
          "ctr": 0,
          "views": 53100,
          "clicks": 1252
        },
        "prk": {
          "ctr": 0,
          "views": 1665,
          "clicks": 191
        },
        "cost": 4041.87
      },
      "2024-12-06": {
        "ark": {
          "ctr": 0,
          "views": 11960,
          "clicks": 441
        },
        "prk": {
          "ctr": 0,
          "views": 1158,
          "clicks": 128
        },
        "cost": 1822.5300000000002
      },
      "2024-12-07": {
        "ark": {
          "ctr": 0,
          "views": 15442,
          "clicks": 533
        },
        "prk": {
          "ctr": 0,
          "views": 2676,
          "clicks": 246
        },
        "cost": 1866.7399999999998
      },
      "2024-12-08": {
        "ark": {
          "ctr": 0,
          "views": 7189,
          "clicks": 258
        },
        "prk": {
          "ctr": 0,
          "views": 1761,
          "clicks": 110
        },
        "cost": 1676.7000000000003
      },
      "2024-12-09": {
        "ark": {
          "ctr": 0,
          "views": 10656,
          "clicks": 407
        },
        "prk": {
          "ctr": 0,
          "views": 1768,
          "clicks": 92
        },
        "cost": 2411.6499999999996
      },
      "2024-12-10": {
        "ark": {
          "ctr": 0,
          "views": 8815,
          "clicks": 271
        },
        "prk": {
          "ctr": 0,
          "views": 2543,
          "clicks": 163
        },
        "cost": 2076.5
      },
      "2024-12-11": {
        "ark": {
          "ctr": 0,
          "views": 17833,
          "clicks": 448
        },
        "prk": {
          "ctr": 0,
          "views": 964,
          "clicks": 54
        },
        "cost": 2278.7
      },
      "2024-12-12": {
        "ark": {
          "ctr": 0,
          "views": 1317,
          "clicks": 46
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 195.84000000000003
      }
    },
    "sales": {
      "2024-12-05": {
        "infoBuysSum": 503,
        "infoBuysCount": 1
      },
      "2024-12-06": {
        "infoBuysSum": 86585.24000000002,
        "infoBuysCount": 182
      },
      "2024-12-07": {
        "infoBuysSum": 81058.64999999998,
        "infoBuysCount": 167
      },
      "2024-12-08": {
        "infoBuysSum": 92562.46000000004,
        "infoBuysCount": 189
      },
      "2024-12-09": {
        "infoBuysSum": 83236.53000000003,
        "infoBuysCount": 170
      },
      "2024-12-10": {
        "infoBuysSum": 73269.83000000002,
        "infoBuysCount": 149
      },
      "2024-12-11": {
        "infoBuysSum": 76553.49000000003,
        "infoBuysCount": 155
      },
      "2024-12-12": {
        "infoBuysSum": 3893.61,
        "infoBuysCount": 8
      }
    },
    "other_metricks": {
      "2024-12-07": {
        "drr": 2.0762548799341554,
        "krrr": 90.0206214331182,
        "ctrArk": 3.451625437119544,
        "ctrPrk": 9.192825112107624,
        "margin": 21.67234648366683,
        "revWithDrr": 16839.23440000001,
        "marginWithDrr": 19.509580983735418,
        "revWithoutDrr": 18705.974400000006
      },
      "2024-12-08": {
        "drr": 1.8654665613422197,
        "krrr": 91.02675385619995,
        "ctrArk": 3.588816247044095,
        "ctrPrk": 6.246450880181715,
        "margin": 21.655422169312757,
        "revWithDrr": 17008.845599999997,
        "marginWithDrr": 19.712227834581277,
        "revWithoutDrr": 18685.545599999998
      },
      "2024-12-09": {
        "drr": 3.206086066391034,
        "krrr": 85.14522001865421,
        "ctrArk": 3.8194444444444446,
        "ctrPrk": 5.203619909502263,
        "margin": 22.482143727593808,
        "revWithDrr": 13823.191600000007,
        "marginWithDrr": 19.142470741769817,
        "revWithoutDrr": 16234.841600000007
      },
      "2024-12-10": {
        "drr": 2.626951395390026,
        "krrr": 87.37598002276347,
        "ctrArk": 3.0743051616562678,
        "ctrPrk": 6.409752261108927,
        "margin": 21.67619909082475,
        "revWithDrr": 14372.301599999999,
        "marginWithDrr": 18.93979138729347,
        "revWithoutDrr": 16448.8016
      },
      "2024-12-11": {
        "drr": 3.57476782128514,
        "krrr": 82.13592246405516,
        "ctrArk": 2.5121964896540123,
        "ctrPrk": 5.601659751037345,
        "margin": 20.844717411311915,
        "revWithDrr": 10477.0664,
        "marginWithDrr": 17.12100093080656,
        "revWithoutDrr": 12755.7664
      }
    },
    "order_info": {
      "stock": 2026,
      "2024-12-07": {
        "buysSum": 86312.64,
        "buysCount": 174.72,
        "ordersSum": 89909,
        "ordersCount": 182,
        "addToCartCount": 466
      },
      "2024-12-08": {
        "buysSum": 86285.76,
        "buysCount": 174.72,
        "ordersSum": 89881,
        "ordersCount": 182,
        "addToCartCount": 471
      },
      "2024-12-09": {
        "buysSum": 72212.16,
        "buysCount": 144,
        "ordersSum": 75221,
        "ordersCount": 150,
        "addToCartCount": 398
      },
      "2024-12-10": {
        "buysSum": 75884.16,
        "buysCount": 153.6,
        "ordersSum": 79046,
        "ordersCount": 160,
        "addToCartCount": 373
      },
      "2024-12-11": {
        "buysSum": 61194.24,
        "buysCount": 125.75999999999999,
        "ordersSum": 63744,
        "ordersCount": 131,
        "addToCartCount": 305
      },
      "commission": 16.5,
      "pricePerOne": 493.61898940505296,
      "cart_to_order": "100.00",
      "click_to_cart": "7.33",
      "ordersCount30": 4908,
      "buyoutsPercent": 97,
      "fullConversion": "7.33%",
      "addToCartPercent": 24,
      "cartToOrderPercent": 38
    },
    "tax": 0,
    "percent_buys": 96,
    "percent_mp": null,
    "price_before_spp": 494,
    "logistics": 60,
    "storage": 0,
    "size": {
      "width": 7,
      "height": 26,
      "length": 3,
      "isValid": true,
      "literSize": 0.546
    },
    "vendor_code": "110404"
  },
  {
    "article": "270069631",
    "chat_id": 501660146,
    "wb_api_key": "eyJhbGciOiJFUzI1NiIsImtpZCI6IjIwMjQxMTE4djEiLCJ0eXAiOiJKV1QifQ.eyJlbnQiOjEsImV4cCI6MTc0OTE1NTIyOSwiaWQiOiIwMTkzOTVlZS0xN2IxLTc1YzUtOWEyNC01N2UwOWY5N2M4MjkiLCJpaWQiOjYwMDI0OTczLCJvaWQiOjUyOTk3NSwicyI6MTA3Mzc0OTc1OCwic2lkIjoiMWIyYmJmODYtMzE0ZC00OWIzLWE2ZGQtYmZkOTUxZWEwYWE0IiwidCI6ZmFsc2UsInVpZCI6NjAwMjQ5NzN9.Xg12YoKgPh1o-Qvt6XDK57lWsBy4TS9ZaEjoVnkEibCq6b62gpVXHJMwIhrHnrkkT-c-exukmrtOZheILeBdiQ",
    "notification_time": 5,
    "self_cost": 980,
    "marketing_cost": {
      "2024-11-13": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-14": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-15": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-16": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-17": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-18": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-19": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-20": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-21": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-22": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-23": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-24": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-25": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-26": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-27": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-28": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-29": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-30": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-01": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-02": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-03": {
        "ark": {
          "ctr": 0,
          "views": 6629,
          "clicks": 385
        },
        "prk": {
          "ctr": 0,
          "views": 2934,
          "clicks": 224
        },
        "cost": 3301.1400000000003
      },
      "2024-12-04": {
        "ark": {
          "ctr": 0,
          "views": 8112,
          "clicks": 346
        },
        "prk": {
          "ctr": 0,
          "views": 2904,
          "clicks": 223
        },
        "cost": 3290.0699999999997
      },
      "2024-12-05": {
        "ark": {
          "ctr": 0,
          "views": 8236,
          "clicks": 327
        },
        "prk": {
          "ctr": 0,
          "views": 2934,
          "clicks": 215
        },
        "cost": 3297.64
      },
      "2024-12-06": {
        "ark": {
          "ctr": 0,
          "views": 8722,
          "clicks": 434
        },
        "prk": {
          "ctr": 0,
          "views": 1978,
          "clicks": 171
        },
        "cost": 2078.15
      },
      "2024-12-07": {
        "ark": {
          "ctr": 0,
          "views": 13727,
          "clicks": 793
        },
        "prk": {
          "ctr": 0,
          "views": 3,
          "clicks": 1
        },
        "cost": 828.7399999999999
      },
      "2024-12-08": {
        "ark": {
          "ctr": 0,
          "views": 15319,
          "clicks": 920
        },
        "prk": {
          "ctr": 0,
          "views": 10,
          "clicks": 0
        },
        "cost": 903.8500000000001
      },
      "2024-12-09": {
        "ark": {
          "ctr": 0,
          "views": 5181,
          "clicks": 323
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 251.95000000000002
      },
      "2024-12-10": {
        "ark": {
          "ctr": 0,
          "views": 331,
          "clicks": 36
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 9.13
      },
      "2024-12-11": {
        "ark": {
          "ctr": 0,
          "views": 103,
          "clicks": 9
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 2.9000000000000004
      },
      "2024-12-12": {
        "ark": {
          "ctr": 0,
          "views": 4,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0.11
      }
    },
    "sales": {
      "2024-12-06": {
        "infoBuysSum": 24798.42,
        "infoBuysCount": 10
      },
      "2024-12-07": {
        "infoBuysSum": 37616,
        "infoBuysCount": 13
      },
      "2024-12-08": {
        "infoBuysSum": 31312,
        "infoBuysCount": 13
      },
      "2024-12-09": {
        "infoBuysSum": 17653,
        "infoBuysCount": 9
      },
      "2024-12-10": {
        "infoBuysSum": 31942.78,
        "infoBuysCount": 11
      },
      "2024-12-11": {
        "infoBuysSum": 10928,
        "infoBuysCount": 4
      }
    },
    "other_metricks": {
      "2024-12-07": {
        "drr": 2.3334271877463673,
        "krrr": 66.4864113263944,
        "ctrArk": 5.776935965615211,
        "ctrPrk": 33.33333333333333,
        "margin": 17.40657506475956,
        "revWithDrr": 1644.1076800000028,
        "marginWithDrr": 11.573007095393644,
        "revWithoutDrr": 2472.8476800000026
      },
      "2024-12-08": {
        "drr": 3.0076201251164654,
        "krrr": 56.795448559084114,
        "ctrArk": 6.005613943468894,
        "ctrPrk": 0,
        "margin": 17.403375482497008,
        "revWithDrr": 1188.1749600000005,
        "marginWithDrr": 9.884325169705846,
        "revWithoutDrr": 2092.0249600000006
      },
      "2024-12-09": {
        "drr": 0.7446211136068094,
        "krrr": 87.28993765425612,
        "ctrArk": 6.234317699285852,
        "ctrPrk": null,
        "margin": 14.64629152382079,
        "revWithDrr": 1730.3376800000012,
        "marginWithDrr": 12.784738739803766,
        "revWithoutDrr": 1982.2876800000013
      },
      "2024-12-10": {
        "drr": 0.03290801614763553,
        "krrr": 99.35617579308988,
        "ctrArk": 10.876132930513595,
        "ctrPrk": null,
        "margin": 12.778339100346011,
        "revWithDrr": 1408.958959999999,
        "marginWithDrr": 12.696069059976923,
        "revWithoutDrr": 1418.0889599999991
      },
      "2024-12-11": {
        "drr": 0.009582342056568861,
        "krrr": 99.8124308322524,
        "ctrArk": 8.737864077669903,
        "ctrPrk": null,
        "margin": 12.771744647105463,
        "revWithDrr": 1543.1963199999987,
        "marginWithDrr": 12.747788791964037,
        "revWithoutDrr": 1546.0963199999987
      }
    },
    "order_info": {
      "stock": 21,
      "2024-12-07": {
        "buysSum": 14206.400000000001,
        "buysCount": 5.2,
        "ordersSum": 35516,
        "ordersCount": 13,
        "addToCartCount": 62
      },
      "2024-12-08": {
        "buysSum": 12020.800000000001,
        "buysCount": 4.4,
        "ordersSum": 30052,
        "ordersCount": 11,
        "addToCartCount": 65
      },
      "2024-12-09": {
        "buysSum": 13534.400000000001,
        "buysCount": 5.2,
        "ordersSum": 33836,
        "ordersCount": 13,
        "addToCartCount": 81
      },
      "2024-12-10": {
        "buysSum": 11097.6,
        "buysCount": 4.4,
        "ordersSum": 27744,
        "ordersCount": 11,
        "addToCartCount": 68
      },
      "2024-12-11": {
        "buysSum": 12105.6,
        "buysCount": 4.800000000000001,
        "ordersSum": 30264,
        "ordersCount": 12,
        "addToCartCount": 65
      },
      "commission": 24.5,
      "pricePerOne": 3552.3453145057765,
      "cart_to_order": "50.00",
      "click_to_cart": "15.61",
      "ordersCount30": 779,
      "buyoutsPercent": 40,
      "fullConversion": "7.80%",
      "addToCartPercent": 6,
      "cartToOrderPercent": 22
    },
    "tax": 0,
    "percent_buys": 40,
    "percent_mp": null,
    "price_before_spp": 2732,
    "logistics": 174,
    "storage": 0,
    "size": {
      "width": 28,
      "height": 13,
      "length": 24,
      "isValid": true,
      "literSize": 8.736
    },
    "vendor_code": "КроссовкиБежевыеЗима01"
  },
  {
    "article": "238699079",
    "chat_id": 5105827939,
    "wb_api_key": "eyJhbGciOiJFUzI1NiIsImtpZCI6IjIwMjQxMTE4djEiLCJ0eXAiOiJKV1QifQ.eyJlbnQiOjEsImV4cCI6MTc0OTE1MDk2MywiaWQiOiIwMTkzOTVhZC0wMWU1LTdhYTMtYTllYy1kNWFhMTBiMzRjZWUiLCJpaWQiOjY5NjE2NjAxLCJvaWQiOjQ0MDA4MCwicyI6MTA3Mzc0OTc1OCwic2lkIjoiOGZiNTA1ZGMtZmE5My00YTI1LWIyZDItZjk2NmVmOWVjM2M1IiwidCI6ZmFsc2UsInVpZCI6Njk2MTY2MDF9.8xJ81Uqdczq63lBXHW9gQ1oFitttLOm-PidIoDZrxPDt4xC7SPe-pbk56_3Iofrxl4ZZikh29FRK2zuLWTMOVw",
    "notification_time": 9,
    "self_cost": 522,
    "marketing_cost": {
      "2024-11-13": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-14": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-15": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-16": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-17": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-18": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-19": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-20": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-21": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-22": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-23": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-24": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-25": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-26": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-27": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-28": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-29": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-30": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-01": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-02": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-03": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-04": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-05": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-06": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-07": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-08": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-09": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-10": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-11": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-12": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      }
    },
    "sales": {
      "2024-12-07": {
        "infoBuysSum": 2318,
        "infoBuysCount": 2
      },
      "2024-12-08": {
        "infoBuysSum": 2318,
        "infoBuysCount": 4
      },
      "2024-12-09": {
        "infoBuysSum": 1158.73,
        "infoBuysCount": 1
      },
      "2024-12-10": {
        "infoBuysSum": 3477,
        "infoBuysCount": 3
      },
      "2024-12-11": {
        "infoBuysSum": 8113,
        "infoBuysCount": 7
      }
    },
    "other_metricks": {
      "2024-12-07": {
        "drr": 0,
        "krrr": 100,
        "ctrArk": null,
        "ctrPrk": null,
        "margin": 6.324696746688331,
        "revWithDrr": 186.92325000000028,
        "marginWithDrr": 6.324696746688331,
        "revWithoutDrr": 186.92325000000028
      },
      "2024-12-08": {
        "drr": 0,
        "krrr": 100,
        "ctrArk": null,
        "ctrPrk": null,
        "margin": 6.343494410514672,
        "revWithDrr": 674.9237000000012,
        "marginWithDrr": 6.343494410514672,
        "revWithoutDrr": 674.9237000000012
      },
      "2024-12-09": {
        "drr": 0,
        "krrr": 100,
        "ctrArk": null,
        "ctrPrk": null,
        "margin": 6.348865171607895,
        "revWithDrr": 262.69254999999976,
        "marginWithDrr": 6.348865171607895,
        "revWithoutDrr": 262.69254999999976
      },
      "2024-12-10": {
        "drr": 0,
        "krrr": 100,
        "ctrArk": null,
        "ctrPrk": null,
        "margin": 9.454661897626751,
        "revWithDrr": 117.36449999999991,
        "marginWithDrr": 9.454661897626751,
        "revWithoutDrr": 117.36449999999991
      },
      "2024-12-11": {
        "drr": 0,
        "krrr": 100,
        "ctrArk": null,
        "ctrPrk": null,
        "margin": 9.474801424267318,
        "revWithDrr": 470.45799999999963,
        "marginWithDrr": 9.474801424267318,
        "revWithoutDrr": 470.45799999999963
      }
    },
    "order_info": {
      "stock": 116,
      "2024-12-07": {
        "buysSum": 2955.4500000000003,
        "buysCount": 2.55,
        "ordersSum": 5795,
        "ordersCount": 5,
        "addToCartCount": 35
      },
      "2024-12-08": {
        "buysSum": 10639.62,
        "buysCount": 9.18,
        "ordersSum": 20862,
        "ordersCount": 18,
        "addToCartCount": 32
      },
      "2024-12-09": {
        "buysSum": 4137.63,
        "buysCount": 3.5700000000000003,
        "ordersSum": 8113,
        "ordersCount": 7,
        "addToCartCount": 16
      },
      "2024-12-10": {
        "buysSum": 1241.34,
        "buysCount": 1.02,
        "ordersSum": 2434,
        "ordersCount": 2,
        "addToCartCount": 24
      },
      "2024-12-11": {
        "buysSum": 4965.36,
        "buysCount": 4.08,
        "ordersSum": 9736,
        "ordersCount": 8,
        "addToCartCount": 17
      },
      "commission": 24.5,
      "pricePerOne": 1204.1911764705883,
      "cart_to_order": "71.00",
      "click_to_cart": "14.99",
      "ordersCount30": 136,
      "buyoutsPercent": 50,
      "fullConversion": "10.64%",
      "addToCartPercent": 8,
      "cartToOrderPercent": 30
    },
    "tax": 0,
    "percent_buys": 51,
    "percent_mp": null,
    "price_before_spp": 1159,
    "logistics": 92,
    "storage": 0,
    "size": {
      "width": 30,
      "height": 3,
      "length": 35,
      "isValid": true,
      "literSize": 3.15
    },
    "vendor_code": "Футболка 5/ зеленый"
  },
  {
    "article": "274042117",
    "chat_id": 790998671,
    "wb_api_key": "eyJhbGciOiJFUzI1NiIsImtpZCI6IjIwMjQxMTE4djEiLCJ0eXAiOiJKV1QifQ.eyJlbnQiOjEsImV4cCI6MTc0ODk5NDIxMSwiaWQiOiIwMTkzOGM1NS0yOWY4LTdjYmUtYTAwYi1iNzJiOWYxOTI2NDYiLCJpaWQiOjUwMTY4ODUsIm9pZCI6MjU1MTc0LCJzIjoxMDczNzQ5NzU4LCJzaWQiOiI1MjFiMmVhNy1mMTllLTQyMDgtYjlmZS01YTFmYzc5YjQyNTEiLCJ0IjpmYWxzZSwidWlkIjo1MDE2ODg1fQ.fYu6InnnQg4M_QHMbcwX_gamWjNReMyneexoGropo24YHj-SvprS4GLIkrFd9_oxao1GgMa1R5PHOBN8zmLiFQ",
    "notification_time": 8,
    "self_cost": 1115,
    "marketing_cost": {
      "2024-11-13": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-14": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-15": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-16": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-17": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-18": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-19": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-20": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-21": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-22": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-23": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-24": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-25": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-26": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-27": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-28": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-29": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-30": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-01": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-02": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-03": {
        "ark": {
          "ctr": 0,
          "views": 2602,
          "clicks": 66
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 2319.79
      },
      "2024-12-04": {
        "ark": {
          "ctr": 0,
          "views": 2716,
          "clicks": 52
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 1722.04
      },
      "2024-12-05": {
        "ark": {
          "ctr": 0,
          "views": 2942,
          "clicks": 42
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 1844.7
      },
      "2024-12-06": {
        "ark": {
          "ctr": 0,
          "views": 3384,
          "clicks": 69
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 2094.43
      },
      "2024-12-07": {
        "ark": {
          "ctr": 0,
          "views": 3824,
          "clicks": 78
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 2120.4
      },
      "2024-12-08": {
        "ark": {
          "ctr": 0,
          "views": 3854,
          "clicks": 56
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 2186.4
      },
      "2024-12-09": {
        "ark": {
          "ctr": 0,
          "views": 5320,
          "clicks": 195
        },
        "prk": {
          "ctr": 0,
          "views": 1034,
          "clicks": 24
        },
        "cost": 2980.4300000000003
      },
      "2024-12-10": {
        "ark": {
          "ctr": 0,
          "views": 2577,
          "clicks": 76
        },
        "prk": {
          "ctr": 0,
          "views": 7177,
          "clicks": 298
        },
        "cost": 3891.56
      },
      "2024-12-11": {
        "ark": {
          "ctr": 0,
          "views": 708,
          "clicks": 15
        },
        "prk": {
          "ctr": 0,
          "views": 5924,
          "clicks": 246
        },
        "cost": 2727.8200000000006
      },
      "2024-12-12": {
        "ark": {
          "ctr": 0,
          "views": 63,
          "clicks": 3
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 14.16
      }
    },
    "sales": {
      "2024-12-05": {
        "infoBuysSum": 3918,
        "infoBuysCount": 1
      },
      "2024-12-06": {
        "infoBuysSum": 3918,
        "infoBuysCount": 1
      },
      "2024-12-07": {
        "infoBuysSum": 7836,
        "infoBuysCount": 2
      },
      "2024-12-08": {
        "infoBuysSum": 7836,
        "infoBuysCount": 2
      },
      "2024-12-09": {
        "infoBuysSum": 15672,
        "infoBuysCount": 4
      },
      "2024-12-10": {
        "infoBuysSum": 15192,
        "infoBuysCount": 4
      },
      "2024-12-11": {
        "infoBuysSum": 15672,
        "infoBuysCount": 4
      }
    },
    "other_metricks": {
      "2024-12-07": {
        "drr": 9.019908116385912,
        "krrr": 55.15041742854271,
        "ctrArk": 2.0397489539748954,
        "ctrPrk": null,
        "margin": 34.087228869796945,
        "revWithDrr": 2607.4032,
        "marginWithDrr": 18.799249011515737,
        "revWithoutDrr": 4727.8032
      },
      "2024-12-08": {
        "drr": 13.950995405819297,
        "krrr": 30.631630352126333,
        "ctrArk": 1.4530358069538143,
        "ctrPrk": null,
        "margin": 34.087228869796945,
        "revWithDrr": 965.4688000000001,
        "marginWithDrr": 10.44147394467949,
        "revWithoutDrr": 3151.8688
      },
      "2024-12-09": {
        "drr": 6.752832155156789,
        "krrr": 64.0918554921607,
        "ctrArk": 3.6654135338345863,
        "ctrPrk": 2.321083172147002,
        "margin": 31.87432373895171,
        "revWithDrr": 5319.720399999998,
        "marginWithDrr": 20.42884550987241,
        "revWithoutDrr": 8300.150399999999
      },
      "2024-12-10": {
        "drr": 6.658385518256169,
        "krrr": 61.550220615237585,
        "ctrArk": 2.949165696546372,
        "ctrPrk": 4.15215271004598,
        "margin": 29.3510115378124,
        "revWithDrr": 6229.590400000003,
        "marginWithDrr": 18.06561235432737,
        "revWithoutDrr": 10121.150400000002
      },
      "2024-12-11": {
        "drr": 6.1033248310735235,
        "krrr": 64.75496052398462,
        "ctrArk": 2.11864406779661,
        "ctrPrk": 4.152599594868332,
        "margin": 29.35056538890064,
        "revWithDrr": 5011.765599999998,
        "marginWithDrr": 19.005947031148903,
        "revWithoutDrr": 7739.5855999999985
      }
    },
    "order_info": {
      "stock": 291,
      "2024-12-07": {
        "buysSum": 13869.72,
        "buysCount": 3.54,
        "ordersSum": 23508,
        "ordersCount": 6,
        "addToCartCount": 23
      },
      "2024-12-08": {
        "buysSum": 9246.48,
        "buysCount": 2.36,
        "ordersSum": 15672,
        "ordersCount": 4,
        "addToCartCount": 15
      },
      "2024-12-09": {
        "buysSum": 26040.239999999998,
        "buysCount": 7.08,
        "ordersSum": 44136,
        "ordersCount": 12,
        "addToCartCount": 30
      },
      "2024-12-10": {
        "buysSum": 34483.14,
        "buysCount": 10.03,
        "ordersSum": 58446,
        "ordersCount": 17,
        "addToCartCount": 60
      },
      "2024-12-11": {
        "buysSum": 26369.46,
        "buysCount": 7.67,
        "ordersSum": 44694,
        "ordersCount": 13,
        "addToCartCount": 48
      },
      "commission": 24.5,
      "pricePerOne": 3726.011111111111,
      "cart_to_order": "30.00",
      "click_to_cart": "20.78",
      "ordersCount30": 90,
      "buyoutsPercent": 59,
      "fullConversion": "6.23%",
      "addToCartPercent": 14,
      "cartToOrderPercent": 34
    },
    "tax": 0,
    "percent_buys": 59,
    "percent_mp": null,
    "price_before_spp": 3918,
    "logistics": 98,
    "storage": 0,
    "size": {
      "width": 40,
      "height": 3,
      "length": 30,
      "isValid": true,
      "literSize": 3.6
    },
    "vendor_code": "джинсы_черные"
  },
  {
    "article": "261029595",
    "chat_id": 1378200575,
    "wb_api_key": "eyJhbGciOiJFUzI1NiIsImtpZCI6IjIwMjQxMTE4djEiLCJ0eXAiOiJKV1QifQ.eyJlbnQiOjEsImV4cCI6MTc0OTA3OTYxOSwiaWQiOiIwMTkzOTE2Yy02MDQzLTc2OGQtODc3ZS1jODQ4Njc0YTFlYjAiLCJpaWQiOjMzMDU1Njk2LCJvaWQiOjI1NDAwMywicyI6MTA3Mzc0OTc1OCwic2lkIjoiMjEyN2Q3ODgtOWYzNS00NzM4LWEwYTgtMDgzOGFlMzc2NzQzIiwidCI6ZmFsc2UsInVpZCI6MzMwNTU2OTZ9.9nJqXDUwVO_cf3lTJ_4Y6w7bUMVM-RKQ83Vrz_yXzAPE-LJuyM0YaElSxNERwPJxygdtY4j3XIQvCB4e16TsfA",
    "notification_time": 12,
    "self_cost": 260,
    "marketing_cost": {
      "2024-11-13": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-14": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-15": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-16": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-17": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-18": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-19": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-20": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-21": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-22": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-23": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-24": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-25": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-26": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-27": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-28": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-29": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-30": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-01": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-02": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-03": {
        "ark": {
          "ctr": 0,
          "views": 5868,
          "clicks": 133
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 1007.2
      },
      "2024-12-04": {
        "ark": {
          "ctr": 0,
          "views": 6841,
          "clicks": 203
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 1024.8300000000002
      },
      "2024-12-05": {
        "ark": {
          "ctr": 0,
          "views": 5875,
          "clicks": 235
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 1027.67
      },
      "2024-12-06": {
        "ark": {
          "ctr": 0,
          "views": 11469,
          "clicks": 450
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 1645.06
      },
      "2024-12-07": {
        "ark": {
          "ctr": 0,
          "views": 7106,
          "clicks": 300
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 1041.94
      },
      "2024-12-08": {
        "ark": {
          "ctr": 0,
          "views": 6982,
          "clicks": 268
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 1040.61
      },
      "2024-12-09": {
        "ark": {
          "ctr": 0,
          "views": 6422,
          "clicks": 270
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 1019.44
      },
      "2024-12-10": {
        "ark": {
          "ctr": 0,
          "views": 5975,
          "clicks": 298
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 824.47
      },
      "2024-12-11": {
        "ark": {
          "ctr": 0,
          "views": 6225,
          "clicks": 252
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 811.77
      },
      "2024-12-12": {
        "ark": {
          "ctr": 0,
          "views": 456,
          "clicks": 26
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 61.92
      }
    },
    "sales": {
      "2024-12-06": {
        "infoBuysSum": 3133.35,
        "infoBuysCount": 6
      },
      "2024-12-07": {
        "infoBuysSum": 3675,
        "infoBuysCount": 5
      },
      "2024-12-08": {
        "infoBuysSum": 7170.03,
        "infoBuysCount": 10
      },
      "2024-12-09": {
        "infoBuysSum": 7350,
        "infoBuysCount": 10
      },
      "2024-12-10": {
        "infoBuysSum": 9403,
        "infoBuysCount": 13
      },
      "2024-12-11": {
        "infoBuysSum": 11839.130000000001,
        "infoBuysCount": 17
      }
    },
    "other_metricks": {
      "2024-12-07": {
        "drr": 5.520796905632385,
        "krrr": 34.96183625418527,
        "ctrArk": 4.221784407542922,
        "ctrPrk": null,
        "margin": 14.147582966848585,
        "revWithDrr": 560.1039999999998,
        "marginWithDrr": 4.946254790794608,
        "revWithoutDrr": 1602.0439999999999
      },
      "2024-12-08": {
        "drr": 4.6522263948497855,
        "krrr": 45.17056710982222,
        "ctrArk": 3.8384417072472075,
        "ctrPrk": null,
        "margin": 14.14151168335718,
        "revWithDrr": 857.2940000000006,
        "marginWithDrr": 6.387801025274206,
        "revWithoutDrr": 1897.9040000000005
      },
      "2024-12-09": {
        "drr": 8.707952507047066,
        "krrr": 0,
        "ctrArk": 4.204297726564933,
        "ctrPrk": null,
        "margin": 13.257538224993592,
        "revWithDrr": -88.20400000000018,
        "marginWithDrr": -1.2557159534181854,
        "revWithoutDrr": 931.2359999999999
      },
      "2024-12-10": {
        "drr": 5.616663260440085,
        "krrr": 33.820672782089105,
        "ctrArk": 4.98744769874477,
        "ctrPrk": null,
        "margin": 14.145059836046961,
        "revWithDrr": 421.34199999999987,
        "marginWithDrr": 4.783954401980152,
        "revWithoutDrr": 1245.812
      },
      "2024-12-11": {
        "drr": 4.466655661934632,
        "krrr": 47.3789632533682,
        "ctrArk": 4.048192771084337,
        "ctrPrk": null,
        "margin": 14.147243314625294,
        "revWithDrr": 730.9020000000005,
        "marginWithDrr": 6.702817211400908,
        "revWithoutDrr": 1542.6720000000005
      }
    },
    "order_info": {
      "stock": 564,
      "2024-12-07": {
        "buysSum": 11323.8,
        "buysCount": 16.2,
        "ordersSum": 18873,
        "ordersCount": 27,
        "addToCartCount": 148
      },
      "2024-12-08": {
        "buysSum": 13420.8,
        "buysCount": 19.2,
        "ordersSum": 22368,
        "ordersCount": 32,
        "addToCartCount": 146
      },
      "2024-12-09": {
        "buysSum": 7024.2,
        "buysCount": 10.2,
        "ordersSum": 11707,
        "ordersCount": 17,
        "addToCartCount": 109
      },
      "2024-12-10": {
        "buysSum": 8807.4,
        "buysCount": 12.6,
        "ordersSum": 14679,
        "ordersCount": 21,
        "addToCartCount": 113
      },
      "2024-12-11": {
        "buysSum": 10904.4,
        "buysCount": 15.6,
        "ordersSum": 18174,
        "ordersCount": 26,
        "addToCartCount": 113
      },
      "commission": 24.5,
      "pricePerOne": 730.5728987993139,
      "cart_to_order": "71.00",
      "click_to_cart": "14.99",
      "ordersCount30": 583,
      "buyoutsPercent": 60,
      "fullConversion": "10.64%",
      "addToCartPercent": 16,
      "cartToOrderPercent": 13
    },
    "tax": 0,
    "percent_buys": 60,
    "percent_mp": null,
    "price_before_spp": 699,
    "logistics": 68,
    "storage": 0,
    "size": {
      "width": 25,
      "height": 2,
      "length": 30,
      "isValid": true,
      "literSize": 1.5
    },
    "vendor_code": "PINK bunny T-shirt"
  },
  {
    "article": "255350431",
    "chat_id": 1135777201,
    "wb_api_key": "eyJhbGciOiJFUzI1NiIsImtpZCI6IjIwMjQxMTE4djEiLCJ0eXAiOiJKV1QifQ.eyJlbnQiOjEsImV4cCI6MTc0ODk5MTQxNiwiaWQiOiIwMTkzOGMyYS04MmVhLTc0NDYtYjIzNi04ZDBhZTA5ZTY0NzkiLCJpaWQiOjMzNTI4OTUxLCJvaWQiOjM5NDUzMDksInMiOjEwNzM3NDk3NTgsInNpZCI6ImRmNzQwNjNmLWMxYmMtNDhlZS1hOGZmLWM5NGE1NDY5OGY2NSIsInQiOmZhbHNlLCJ1aWQiOjMzNTI4OTUxfQ.ndg4L9pT0gMMVinXm8r116C9A-sQbivVYybp7g_e--DRXNRdogL0TfKznPp_R2RizBlFWNgB7of1eKqLjt-l7Q",
    "notification_time": 10,
    "self_cost": 1450,
    "marketing_cost": {
      "2024-11-13": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-14": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-15": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-16": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-17": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-18": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-19": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-20": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-21": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-22": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-23": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-24": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-25": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-26": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-27": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-28": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-29": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-30": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-01": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-02": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-03": {
        "ark": {
          "ctr": 0,
          "views": 23616,
          "clicks": 744
        },
        "prk": {
          "ctr": 0,
          "views": 1020,
          "clicks": 23
        },
        "cost": 2798.6400000000003
      },
      "2024-12-04": {
        "ark": {
          "ctr": 0,
          "views": 9525,
          "clicks": 299
        },
        "prk": {
          "ctr": 0,
          "views": 1645,
          "clicks": 57
        },
        "cost": 1791.6699999999998
      },
      "2024-12-05": {
        "ark": {
          "ctr": 0,
          "views": 10984,
          "clicks": 311
        },
        "prk": {
          "ctr": 0,
          "views": 4854,
          "clicks": 106
        },
        "cost": 2689.13
      },
      "2024-12-06": {
        "ark": {
          "ctr": 0,
          "views": 11000,
          "clicks": 370
        },
        "prk": {
          "ctr": 0,
          "views": 2062,
          "clicks": 40
        },
        "cost": 1228.58
      },
      "2024-12-07": {
        "ark": {
          "ctr": 0,
          "views": 14638,
          "clicks": 513
        },
        "prk": {
          "ctr": 0,
          "views": 3773,
          "clicks": 123
        },
        "cost": 2036.4799999999998
      },
      "2024-12-08": {
        "ark": {
          "ctr": 0,
          "views": 11521,
          "clicks": 403
        },
        "prk": {
          "ctr": 0,
          "views": 224,
          "clicks": 4
        },
        "cost": 1341.2000000000003
      },
      "2024-12-09": {
        "ark": {
          "ctr": 0,
          "views": 10925,
          "clicks": 413
        },
        "prk": {
          "ctr": 0,
          "views": 2460,
          "clicks": 113
        },
        "cost": 1807.5600000000002
      },
      "2024-12-10": {
        "ark": {
          "ctr": 0,
          "views": 7016,
          "clicks": 275
        },
        "prk": {
          "ctr": 0,
          "views": 516,
          "clicks": 15
        },
        "cost": 804.35
      },
      "2024-12-11": {
        "ark": {
          "ctr": 0,
          "views": 6915,
          "clicks": 307
        },
        "prk": {
          "ctr": 0,
          "views": 1,
          "clicks": 0
        },
        "cost": 537.7
      },
      "2024-12-12": {
        "ark": {
          "ctr": 0,
          "views": 526,
          "clicks": 19
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 43.49
      }
    },
    "sales": {
      "2024-12-06": {
        "infoBuysSum": 17181,
        "infoBuysCount": 5
      },
      "2024-12-07": {
        "infoBuysSum": -3513,
        "infoBuysCount": 1
      },
      "2024-12-09": {
        "infoBuysSum": 6906,
        "infoBuysCount": 2
      },
      "2024-12-10": {
        "infoBuysSum": 3684,
        "infoBuysCount": 1
      },
      "2024-12-11": {
        "infoBuysSum": 0.44000000000005457,
        "infoBuysCount": 2
      }
    },
    "other_metricks": {
      "2024-12-07": {
        "drr": 27.63952225841476,
        "krrr": 0,
        "ctrArk": 3.504577128022954,
        "ctrPrk": 3.260005300821627,
        "margin": 16.101273319514366,
        "revWithDrr": -1514.4895999999997,
        "marginWithDrr": -46.71582272233737,
        "revWithoutDrr": 521.9904000000001
      },
      "2024-12-08": {
        "drr": 12.135360115816145,
        "krrr": 0,
        "ctrArk": 3.4979602465063797,
        "ctrPrk": 1.7857142857142856,
        "margin": 16.11155529233705,
        "revWithDrr": -557.7144000000003,
        "marginWithDrr": -11.468808607245096,
        "revWithoutDrr": 783.4856
      },
      "2024-12-09": {
        "drr": 10.343690987124464,
        "krrr": 0,
        "ctrArk": 3.780320366132723,
        "ctrPrk": 4.59349593495935,
        "margin": 13.36831837690206,
        "revWithDrr": -779.6700000000008,
        "marginWithDrr": -10.140070230198996,
        "revWithoutDrr": 1027.8899999999994
      },
      "2024-12-10": {
        "drr": 3.4474112806446087,
        "krrr": 27.236960277088407,
        "ctrArk": 3.919612314709236,
        "ctrPrk": 2.9069767441860463,
        "margin": 10.767864657201184,
        "revWithDrr": 301.08759999999927,
        "marginWithDrr": 2.9328390193725284,
        "revWithoutDrr": 1105.4375999999993
      },
      "2024-12-11": {
        "drr": 2.0420796779461474,
        "krrr": 53.845287549781276,
        "ctrArk": 4.439624005784527,
        "ctrPrk": 0,
        "margin": 10.055506644432235,
        "revWithDrr": 627.2947999999985,
        "marginWithDrr": 5.414416467281899,
        "revWithoutDrr": 1164.9947999999986
      }
    },
    "order_info": {
      "stock": 423,
      "2024-12-07": {
        "buysSum": 3241.92,
        "buysCount": 0.88,
        "ordersSum": 7368,
        "ordersCount": 2,
        "addToCartCount": 44
      },
      "2024-12-08": {
        "buysSum": 4862.88,
        "buysCount": 1.32,
        "ordersSum": 11052,
        "ordersCount": 3,
        "addToCartCount": 37
      },
      "2024-12-09": {
        "buysSum": 7689,
        "buysCount": 2.2,
        "ordersSum": 17475,
        "ordersCount": 5,
        "addToCartCount": 54
      },
      "2024-12-10": {
        "buysSum": 10266.08,
        "buysCount": 3.08,
        "ordersSum": 23332,
        "ordersCount": 7,
        "addToCartCount": 46
      },
      "2024-12-11": {
        "buysSum": 11585.64,
        "buysCount": 3.52,
        "ordersSum": 26331,
        "ordersCount": 8,
        "addToCartCount": 39
      },
      "commission": 24.5,
      "pricePerOne": 3615.8056537102475,
      "cart_to_order": "77.00",
      "click_to_cart": "9.67",
      "ordersCount30": 283,
      "buyoutsPercent": 43,
      "fullConversion": "7.45%",
      "addToCartPercent": 7,
      "cartToOrderPercent": 13
    },
    "tax": 0,
    "percent_buys": 44,
    "percent_mp": null,
    "price_before_spp": 3684,
    "logistics": 149,
    "storage": 0,
    "size": {
      "width": 35,
      "height": 4,
      "length": 50,
      "isValid": true,
      "literSize": 7
    },
    "vendor_code": "СумкаВиннаяБоттега"
  },
  {
    "article": "176973258",
    "chat_id": 7366390419,
    "wb_api_key": "eyJhbGciOiJFUzI1NiIsImtpZCI6IjIwMjQxMTE4djEiLCJ0eXAiOiJKV1QifQ.eyJlbnQiOjEsImV4cCI6MTc0OTAwNTY1OCwiaWQiOiIwMTkzOGQwMy1kNGYzLTc4OWYtYTk4MC01YzQ4ZDQxNTZiNmMiLCJpaWQiOjExMjExMjMyLCJvaWQiOjE4Mzg3MywicyI6MTA3Mzc0OTc1OCwic2lkIjoiMDFjNWZmNWMtYjA1NC00YzUyLThmOTItZGViMjQzZTg3NDgzIiwidCI6ZmFsc2UsInVpZCI6MTEyMTEyMzJ9.cc7F9M5ZIDl6DHnVLOR65hYv6ZqBRkjrjASiTc_WHHlKXIddzamdkOPuCer0CQgTqV5eQKPGoTcNRR-kc8O2eg",
    "notification_time": 10,
    "self_cost": 1300,
    "marketing_cost": {
      "2024-11-13": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-14": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-15": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-16": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-17": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-18": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-19": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-20": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-21": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-22": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-23": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-24": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-25": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-26": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-27": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-28": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-29": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-30": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-01": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-02": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-03": {
        "ark": {
          "ctr": 0,
          "views": 35469,
          "clicks": 2931
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 1627.76
      },
      "2024-12-04": {
        "ark": {
          "ctr": 0,
          "views": 34077,
          "clicks": 2864
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 1416.9299999999998
      },
      "2024-12-05": {
        "ark": {
          "ctr": 0,
          "views": 34914,
          "clicks": 2821
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 1537.8
      },
      "2024-12-06": {
        "ark": {
          "ctr": 0,
          "views": 37263,
          "clicks": 3142
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 1611.81
      },
      "2024-12-07": {
        "ark": {
          "ctr": 0,
          "views": 42751,
          "clicks": 3593
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 1993.91
      },
      "2024-12-08": {
        "ark": {
          "ctr": 0,
          "views": 46616,
          "clicks": 3976
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 1992.96
      },
      "2024-12-09": {
        "ark": {
          "ctr": 0,
          "views": 61393,
          "clicks": 5450
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 2613.73
      },
      "2024-12-10": {
        "ark": {
          "ctr": 0,
          "views": 84696,
          "clicks": 8513
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 3318.9700000000003
      },
      "2024-12-11": {
        "ark": {
          "ctr": 0,
          "views": 57250,
          "clicks": 5101
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 2663.68
      },
      "2024-12-12": {
        "ark": {
          "ctr": 0,
          "views": 2600,
          "clicks": 171
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 148.9
      }
    },
    "sales": {
      "2024-12-06": {
        "infoBuysSum": 64687.4,
        "infoBuysCount": 21
      },
      "2024-12-07": {
        "infoBuysSum": 52248,
        "infoBuysCount": 21
      },
      "2024-12-08": {
        "infoBuysSum": 41742,
        "infoBuysCount": 17
      },
      "2024-12-09": {
        "infoBuysSum": 55062.18,
        "infoBuysCount": 19
      },
      "2024-12-10": {
        "infoBuysSum": 41105.24,
        "infoBuysCount": 15
      },
      "2024-12-11": {
        "infoBuysSum": 79106.88,
        "infoBuysCount": 27
      }
    },
    "other_metricks": {
      "2024-12-07": {
        "drr": 2.2249486698803786,
        "krrr": 80.77829641915851,
        "ctrArk": 8.404481766508386,
        "ctrPrk": null,
        "margin": 19.957223771617137,
        "revWithDrr": 8379.31208,
        "marginWithDrr": 16.121105375271657,
        "revWithoutDrr": 10373.22208
      },
      "2024-12-08": {
        "drr": 1.6674698795180722,
        "krrr": 85.60422786353011,
        "ctrArk": 8.529260339797494,
        "ctrPrk": null,
        "margin": 19.97078059363892,
        "revWithDrr": 11851.104639999998,
        "marginWithDrr": 17.095832525504314,
        "revWithoutDrr": 13844.064639999997
      },
      "2024-12-09": {
        "drr": 1.798689724938581,
        "krrr": 81.20424769662881,
        "ctrArk": 8.87723356082941,
        "ctrPrk": null,
        "margin": 16.49941503204616,
        "revWithDrr": 11292.231079999994,
        "marginWithDrr": 13.398225851117571,
        "revWithoutDrr": 13905.961079999994
      },
      "2024-12-10": {
        "drr": 1.6017499239897883,
        "krrr": 81.59728571450147,
        "ctrArk": 10.05124208935487,
        "ctrPrk": null,
        "margin": 15.00668736762698,
        "revWithDrr": 14716.249959999986,
        "marginWithDrr": 12.245049567644585,
        "revWithoutDrr": 18035.219959999988
      },
      "2024-12-11": {
        "drr": 1.2150827030627045,
        "krrr": 86.0394820102755,
        "ctrArk": 8.91004366812227,
        "ctrPrk": null,
        "margin": 15.006392880524213,
        "revWithDrr": 16416.41431999999,
        "marginWithDrr": 12.911422702829894,
        "revWithoutDrr": 19080.09431999999
      }
    },
    "order_info": {
      "stock": 2017,
      "2024-12-07": {
        "buysSum": 51977.28,
        "buysCount": 15.659999999999998,
        "ordersSum": 89616,
        "ordersCount": 27,
        "addToCartCount": 287
      },
      "2024-12-08": {
        "buysSum": 69321.59999999999,
        "buysCount": 20.88,
        "ordersSum": 119520,
        "ordersCount": 36,
        "addToCartCount": 297
      },
      "2024-12-09": {
        "buysSum": 84281.54,
        "buysCount": 27.259999999999998,
        "ordersSum": 145313,
        "ordersCount": 47,
        "addToCartCount": 454
      },
      "2024-12-10": {
        "buysSum": 120181.21999999999,
        "buysCount": 40.019999999999996,
        "ordersSum": 207209,
        "ordersCount": 69,
        "addToCartCount": 712
      },
      "2024-12-11": {
        "buysSum": 127146.43999999999,
        "buysCount": 42.339999999999996,
        "ordersSum": 219218,
        "ordersCount": 73,
        "addToCartCount": 405
      },
      "commission": 24.5,
      "pricePerOne": 2996.7083333333335,
      "cart_to_order": "57.00",
      "click_to_cart": "12.45",
      "ordersCount30": 1176,
      "buyoutsPercent": 58,
      "fullConversion": "7.10%",
      "addToCartPercent": 5,
      "cartToOrderPercent": 13
    },
    "tax": 0,
    "percent_buys": 58,
    "percent_mp": null,
    "price_before_spp": 3319,
    "logistics": 121,
    "storage": 0,
    "size": {
      "width": 40,
      "height": 4,
      "length": 32,
      "isValid": true,
      "literSize": 5.12
    },
    "vendor_code": "ZipfooterGrey"
  },
  {
    "article": "197424744",
    "chat_id": 7366390419,
    "wb_api_key": "eyJhbGciOiJFUzI1NiIsImtpZCI6IjIwMjQxMTE4djEiLCJ0eXAiOiJKV1QifQ.eyJlbnQiOjEsImV4cCI6MTc0OTAwNTY1OCwiaWQiOiIwMTkzOGQwMy1kNGYzLTc4OWYtYTk4MC01YzQ4ZDQxNTZiNmMiLCJpaWQiOjExMjExMjMyLCJvaWQiOjE4Mzg3MywicyI6MTA3Mzc0OTc1OCwic2lkIjoiMDFjNWZmNWMtYjA1NC00YzUyLThmOTItZGViMjQzZTg3NDgzIiwidCI6ZmFsc2UsInVpZCI6MTEyMTEyMzJ9.cc7F9M5ZIDl6DHnVLOR65hYv6ZqBRkjrjASiTc_WHHlKXIddzamdkOPuCer0CQgTqV5eQKPGoTcNRR-kc8O2eg",
    "notification_time": 10,
    "self_cost": 1300,
    "marketing_cost": {
      "2024-11-13": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-14": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-15": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-16": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-17": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-18": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-19": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-20": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-21": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-22": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-23": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-24": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-25": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-26": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-27": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-28": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-29": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-30": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-01": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-02": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-03": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-04": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-05": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-06": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-07": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-08": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-09": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-10": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-11": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-12": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      }
    },
    "sales": {
      "2024-12-06": {
        "infoBuysSum": 5814,
        "infoBuysCount": 2
      },
      "2024-12-07": {
        "infoBuysSum": 15706,
        "infoBuysCount": 5
      },
      "2024-12-08": {
        "infoBuysSum": 3317,
        "infoBuysCount": 3
      },
      "2024-12-09": {
        "infoBuysSum": 13209,
        "infoBuysCount": 4
      },
      "2024-12-10": {
        "infoBuysSum": 9609,
        "infoBuysCount": 5
      },
      "2024-12-11": {
        "infoBuysSum": 6323,
        "infoBuysCount": 2
      }
    },
    "other_metricks": {
      "2024-12-07": {
        "drr": 0,
        "krrr": 100,
        "ctrArk": null,
        "ctrPrk": null,
        "margin": 16.84520760473324,
        "revWithDrr": 1682.9406799999997,
        "marginWithDrr": 16.84520760473324,
        "revWithoutDrr": 1682.9406799999997
      },
      "2024-12-08": {
        "drr": 0,
        "krrr": 100,
        "ctrArk": null,
        "ctrPrk": null,
        "margin": 16.86354462573011,
        "revWithDrr": 3129.67152,
        "marginWithDrr": 16.86354462573011,
        "revWithoutDrr": 3129.67152
      },
      "2024-12-09": {
        "drr": 0,
        "krrr": 100,
        "ctrArk": null,
        "ctrPrk": null,
        "margin": 12.652642671617324,
        "revWithDrr": 2332.8904600000005,
        "marginWithDrr": 12.652642671617324,
        "revWithoutDrr": 2332.8904600000005
      },
      "2024-12-10": {
        "drr": 0,
        "krrr": 100,
        "ctrArk": null,
        "ctrPrk": null,
        "margin": 12.287072534330532,
        "revWithDrr": 1286.0424199999998,
        "marginWithDrr": 12.287072534330532,
        "revWithoutDrr": 1286.0424199999998
      },
      "2024-12-11": {
        "drr": 0,
        "krrr": 100,
        "ctrArk": null,
        "ctrPrk": null,
        "margin": 11.570659462353829,
        "revWithDrr": 2091.7507600000026,
        "marginWithDrr": 11.570659462353829,
        "revWithoutDrr": 2091.7507600000026
      }
    },
    "order_info": {
      "stock": 1720,
      "2024-12-07": {
        "buysSum": 9990.619999999999,
        "buysCount": 3.01,
        "ordersSum": 23234,
        "ordersCount": 7,
        "addToCartCount": 63
      },
      "2024-12-08": {
        "buysSum": 18558.8,
        "buysCount": 5.59,
        "ordersSum": 43160,
        "ordersCount": 13,
        "addToCartCount": 60
      },
      "2024-12-09": {
        "buysSum": 18437.97,
        "buysCount": 6.02,
        "ordersSum": 42879,
        "ordersCount": 14,
        "addToCartCount": 77
      },
      "2024-12-10": {
        "buysSum": 10466.63,
        "buysCount": 3.44,
        "ordersSum": 24341,
        "ordersCount": 8,
        "addToCartCount": 122
      },
      "2024-12-11": {
        "buysSum": 18078.06,
        "buysCount": 6.02,
        "ordersSum": 42042,
        "ordersCount": 14,
        "addToCartCount": 59
      },
      "commission": 24.5,
      "pricePerOne": 3013.6477987421385,
      "cart_to_order": "57.00",
      "click_to_cart": "12.45",
      "ordersCount30": 318,
      "buyoutsPercent": 44,
      "fullConversion": "7.10%",
      "addToCartPercent": 5,
      "cartToOrderPercent": 17
    },
    "tax": 0,
    "percent_buys": 43,
    "percent_mp": null,
    "price_before_spp": 3319,
    "logistics": 121,
    "storage": 0,
    "size": {
      "width": 40,
      "height": 4,
      "length": 32,
      "isValid": true,
      "literSize": 5.12
    },
    "vendor_code": "Hodie Fleece Black"
  },
  {
    "article": "265344036",
    "chat_id": 737593394,
    "wb_api_key": "eyJhbGciOiJFUzI1NiIsImtpZCI6IjIwMjQxMTE4djEiLCJ0eXAiOiJKV1QifQ.eyJlbnQiOjEsImV4cCI6MTc0OTAwNjIyMCwiaWQiOiIwMTkzOGQwYy02ODAxLTdlZGItOThiOS00YzJmZmJjNTNiOGMiLCJpaWQiOjQ3NDU1ODg5LCJvaWQiOjE0MDEwMzcsInMiOjEwNzM3NDk3NTgsInNpZCI6IjYyNGI1YmJlLTI3NmEtNDRmMC1iMjI1LTM4ZTRjMTZjNzZhNiIsInQiOmZhbHNlLCJ1aWQiOjQ3NDU1ODg5fQ.hekQz3NnYF3DMCOG9ZqCr4jrl96Of8JrVmE01-3z5r9S45218ElHu8-IWtIyeXla1lvWRDU1mTmyAEoVQ83n4Q",
    "notification_time": 7,
    "self_cost": 735,
    "marketing_cost": {
      "2024-11-13": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-14": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-15": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-16": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-17": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-18": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-19": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-20": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-21": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-22": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-23": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-24": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-25": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-26": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-27": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-28": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-29": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-30": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-01": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-02": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-03": {
        "ark": {
          "ctr": 0,
          "views": 724,
          "clicks": 12
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 74.28999999999999
      },
      "2024-12-04": {
        "ark": {
          "ctr": 0,
          "views": 2596,
          "clicks": 85
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 271.32
      },
      "2024-12-05": {
        "ark": {
          "ctr": 0,
          "views": 1725,
          "clicks": 47
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 202.2
      },
      "2024-12-06": {
        "ark": {
          "ctr": 0,
          "views": 1153,
          "clicks": 37
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 171.65
      },
      "2024-12-07": {
        "ark": {
          "ctr": 0,
          "views": 1311,
          "clicks": 45
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 196.08999999999997
      },
      "2024-12-08": {
        "ark": {
          "ctr": 0,
          "views": 1769,
          "clicks": 59
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 264.87
      },
      "2024-12-09": {
        "ark": {
          "ctr": 0,
          "views": 795,
          "clicks": 24
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 108.49
      },
      "2024-12-10": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-11": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-12": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      }
    },
    "sales": {
      "2024-12-06": {
        "infoBuysSum": 5754,
        "infoBuysCount": 7
      },
      "2024-12-07": {
        "infoBuysSum": 7698,
        "infoBuysCount": 4
      },
      "2024-12-08": {
        "infoBuysSum": 13608,
        "infoBuysCount": 7
      },
      "2024-12-09": {
        "infoBuysSum": 7776,
        "infoBuysCount": 4
      },
      "2024-12-10": {
        "infoBuysSum": 11664,
        "infoBuysCount": 8
      },
      "2024-12-11": {
        "infoBuysSum": 15552,
        "infoBuysCount": 10
      }
    },
    "other_metricks": {
      "2024-12-07": {
        "drr": 1.2608667695473248,
        "krrr": 87.81523089452067,
        "ctrArk": 3.4324942791762014,
        "ctrPrk": null,
        "margin": 21.558108710562422,
        "revWithDrr": 1413.2141920000006,
        "marginWithDrr": 18.93130294067216,
        "revWithoutDrr": 1609.3041920000005
      },
      "2024-12-08": {
        "drr": 0.8515625000000001,
        "krrr": 91.77322306289535,
        "ctrArk": 3.335217637083098,
        "ctrPrk": null,
        "margin": 21.56480667009603,
        "revWithDrr": 2954.738384000001,
        "marginWithDrr": 19.79071812842936,
        "revWithoutDrr": 3219.608384000001
      },
      "2024-12-09": {
        "drr": 0.465043508080072,
        "krrr": 95.50633466232834,
        "ctrArk": 3.018867924528302,
        "ctrPrk": null,
        "margin": 21.5601423121437,
        "revWithDrr": 2305.797488000002,
        "marginWithDrr": 20.59130167031022,
        "revWithoutDrr": 2414.2874880000018
      },
      "2024-12-10": {
        "drr": 0,
        "krrr": 100,
        "ctrArk": null,
        "ctrPrk": null,
        "margin": 21.562339000794164,
        "revWithDrr": 3822.8474559999995,
        "marginWithDrr": 21.562339000794164,
        "revWithoutDrr": 3822.8474559999995
      },
      "2024-12-11": {
        "drr": 0,
        "krrr": 100,
        "ctrArk": null,
        "ctrPrk": null,
        "margin": 21.549178097850934,
        "revWithDrr": 1206.4781439999997,
        "marginWithDrr": 21.549178097850934,
        "revWithoutDrr": 1206.4781439999997
      }
    },
    "order_info": {
      "stock": 119,
      "2024-12-07": {
        "buysSum": 7464.96,
        "buysCount": 3.84,
        "ordersSum": 15552,
        "ordersCount": 8,
        "addToCartCount": 22
      },
      "2024-12-08": {
        "buysSum": 14929.92,
        "buysCount": 7.68,
        "ordersSum": 31104,
        "ordersCount": 16,
        "addToCartCount": 42
      },
      "2024-12-09": {
        "buysSum": 11197.92,
        "buysCount": 5.76,
        "ordersSum": 23329,
        "ordersCount": 12,
        "addToCartCount": 33
      },
      "2024-12-10": {
        "buysSum": 17729.28,
        "buysCount": 9.12,
        "ordersSum": 36936,
        "ordersCount": 19,
        "addToCartCount": 41
      },
      "2024-12-11": {
        "buysSum": 5598.719999999999,
        "buysCount": 2.88,
        "ordersSum": 11664,
        "ordersCount": 6,
        "addToCartCount": 24
      },
      "commission": 24.5,
      "pricePerOne": 1918.0851063829787,
      "cart_to_order": "56.00",
      "click_to_cart": "16.40",
      "ordersCount30": 282,
      "buyoutsPercent": 49,
      "fullConversion": "9.18%",
      "addToCartPercent": 14,
      "cartToOrderPercent": 41
    },
    "tax": 0,
    "percent_buys": 48,
    "percent_mp": null,
    "price_before_spp": 1944,
    "logistics": 62,
    "storage": 0,
    "size": {
      "width": 29,
      "height": 1,
      "length": 38,
      "isValid": true,
      "literSize": 1.102
    },
    "vendor_code": "белый_закр_однотон"
  },
  {
    "article": "206869776",
    "chat_id": 5105827939,
    "wb_api_key": "eyJhbGciOiJFUzI1NiIsImtpZCI6IjIwMjQxMTE4djEiLCJ0eXAiOiJKV1QifQ.eyJlbnQiOjEsImV4cCI6MTc0OTE1MDk2MywiaWQiOiIwMTkzOTVhZC0wMWU1LTdhYTMtYTllYy1kNWFhMTBiMzRjZWUiLCJpaWQiOjY5NjE2NjAxLCJvaWQiOjQ0MDA4MCwicyI6MTA3Mzc0OTc1OCwic2lkIjoiOGZiNTA1ZGMtZmE5My00YTI1LWIyZDItZjk2NmVmOWVjM2M1IiwidCI6ZmFsc2UsInVpZCI6Njk2MTY2MDF9.8xJ81Uqdczq63lBXHW9gQ1oFitttLOm-PidIoDZrxPDt4xC7SPe-pbk56_3Iofrxl4ZZikh29FRK2zuLWTMOVw",
    "notification_time": 9,
    "self_cost": 522,
    "marketing_cost": {
      "2024-11-13": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-14": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-15": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-16": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-17": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-18": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-19": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-20": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-21": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-22": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-23": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-24": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-25": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-26": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-27": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-28": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-29": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-30": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-01": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-02": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-03": {
        "ark": {
          "ctr": 0,
          "views": 2600,
          "clicks": 140
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 505.6
      },
      "2024-12-04": {
        "ark": {
          "ctr": 0,
          "views": 2141,
          "clicks": 138
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 323.38
      },
      "2024-12-05": {
        "ark": {
          "ctr": 0,
          "views": 2453,
          "clicks": 132
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 310.85
      },
      "2024-12-06": {
        "ark": {
          "ctr": 0,
          "views": 2009,
          "clicks": 121
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 302
      },
      "2024-12-07": {
        "ark": {
          "ctr": 0,
          "views": 2812,
          "clicks": 146
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 579.21
      },
      "2024-12-08": {
        "ark": {
          "ctr": 0,
          "views": 3764,
          "clicks": 168
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 759.1800000000001
      },
      "2024-12-09": {
        "ark": {
          "ctr": 0,
          "views": 4147,
          "clicks": 197
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 815.8299999999999
      },
      "2024-12-10": {
        "ark": {
          "ctr": 0,
          "views": 2626,
          "clicks": 164
        },
        "prk": {
          "ctr": 0,
          "views": 1684,
          "clicks": 47
        },
        "cost": 1308.98
      },
      "2024-12-11": {
        "ark": {
          "ctr": 0,
          "views": 2905,
          "clicks": 181
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 323.12
      },
      "2024-12-12": {
        "ark": {
          "ctr": 0,
          "views": 26,
          "clicks": 1
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 1.11
      }
    },
    "sales": {
      "2024-12-06": {
        "infoBuysSum": 4839,
        "infoBuysCount": 4
      },
      "2024-12-07": {
        "infoBuysSum": 14256.32,
        "infoBuysCount": 12
      },
      "2024-12-08": {
        "infoBuysSum": 10895,
        "infoBuysCount": 9
      },
      "2024-12-09": {
        "infoBuysSum": 9707,
        "infoBuysCount": 8
      },
      "2024-12-10": {
        "infoBuysSum": 8519,
        "infoBuysCount": 7
      },
      "2024-12-11": {
        "infoBuysSum": 14546,
        "infoBuysCount": 12
      }
    },
    "other_metricks": {
      "2024-12-07": {
        "drr": 3.661020163074395,
        "krrr": 43.257985575707906,
        "ctrArk": 5.19203413940256,
        "ctrPrk": null,
        "margin": 11.521508483299765,
        "revWithDrr": 441.5679999999993,
        "marginWithDrr": 4.9839724778097745,
        "revWithoutDrr": 1020.7779999999993
      },
      "2024-12-08": {
        "drr": 3.8988290879211176,
        "krrr": 39.57959277228105,
        "ctrArk": 4.463336875664187,
        "ctrPrk": null,
        "margin": 11.522919356732018,
        "revWithDrr": 497.31600000000094,
        "marginWithDrr": 4.560724556872881,
        "revWithoutDrr": 1256.496000000001
      },
      "2024-12-09": {
        "drr": 6.09419586165683,
        "krrr": 5.571515545750789,
        "ctrArk": 4.750421991801302,
        "ctrPrk": null,
        "margin": 11.524586752606488,
        "revWithDrr": 48.13600000000133,
        "marginWithDrr": 0.6420941425050065,
        "revWithoutDrr": 863.9660000000013
      },
      "2024-12-10": {
        "drr": 6.7223705834018075,
        "krrr": 0,
        "ctrArk": 6.245239908606245,
        "ctrPrk": 2.7909738717339665,
        "margin": 11.522919356732018,
        "revWithDrr": -52.483999999999014,
        "marginWithDrr": -0.4813138279140653,
        "revWithoutDrr": 1256.496000000001
      },
      "2024-12-11": {
        "drr": 2.655053410024651,
        "krrr": 58.84136244363491,
        "ctrArk": 6.230636833046472,
        "ctrPrk": null,
        "margin": 11.519251085808198,
        "revWithDrr": 461.9400000000004,
        "marginWithDrr": 6.778084282192751,
        "revWithoutDrr": 785.0600000000004
      }
    },
    "order_info": {
      "stock": 283,
      "2024-12-07": {
        "buysSum": 8859.76,
        "buysCount": 7.280000000000001,
        "ordersSum": 15821,
        "ordersCount": 13,
        "addToCartCount": 47
      },
      "2024-12-08": {
        "buysSum": 10904.320000000002,
        "buysCount": 8.96,
        "ordersSum": 19472,
        "ordersCount": 16,
        "addToCartCount": 40
      },
      "2024-12-09": {
        "buysSum": 7496.720000000001,
        "buysCount": 6.16,
        "ordersSum": 13387,
        "ordersCount": 11,
        "addToCartCount": 34
      },
      "2024-12-10": {
        "buysSum": 10904.320000000002,
        "buysCount": 8.96,
        "ordersSum": 19472,
        "ordersCount": 16,
        "addToCartCount": 51
      },
      "2024-12-11": {
        "buysSum": 6815.200000000001,
        "buysCount": 5.6000000000000005,
        "ordersSum": 12170,
        "ordersCount": 10,
        "addToCartCount": 52
      },
      "commission": 24.5,
      "pricePerOne": 1214.375939849624,
      "cart_to_order": "71.00",
      "click_to_cart": "14.99",
      "ordersCount30": 266,
      "buyoutsPercent": 55,
      "fullConversion": "10.64%",
      "addToCartPercent": 9,
      "cartToOrderPercent": 35
    },
    "tax": 0,
    "percent_buys": 56,
    "percent_mp": null,
    "price_before_spp": 1217,
    "logistics": 92,
    "storage": 0,
    "size": {
      "width": 30,
      "height": 3,
      "length": 35,
      "isValid": true,
      "literSize": 3.15
    },
    "vendor_code": "Футболка 3/коричневый"
  },
  {
    "article": "160988247",
    "chat_id": 5105827939,
    "wb_api_key": "eyJhbGciOiJFUzI1NiIsImtpZCI6IjIwMjQxMTE4djEiLCJ0eXAiOiJKV1QifQ.eyJlbnQiOjEsImV4cCI6MTc0OTE1MDk2MywiaWQiOiIwMTkzOTVhZC0wMWU1LTdhYTMtYTllYy1kNWFhMTBiMzRjZWUiLCJpaWQiOjY5NjE2NjAxLCJvaWQiOjQ0MDA4MCwicyI6MTA3Mzc0OTc1OCwic2lkIjoiOGZiNTA1ZGMtZmE5My00YTI1LWIyZDItZjk2NmVmOWVjM2M1IiwidCI6ZmFsc2UsInVpZCI6Njk2MTY2MDF9.8xJ81Uqdczq63lBXHW9gQ1oFitttLOm-PidIoDZrxPDt4xC7SPe-pbk56_3Iofrxl4ZZikh29FRK2zuLWTMOVw",
    "notification_time": 9,
    "self_cost": 522,
    "marketing_cost": {
      "2024-11-13": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-14": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-15": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-16": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-17": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-18": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-19": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-20": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-21": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-22": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-23": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-24": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-25": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-26": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-27": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-28": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-29": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-30": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-01": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-02": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-03": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-04": {
        "ark": {
          "ctr": 0,
          "views": 2511,
          "clicks": 66
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 432.31
      },
      "2024-12-05": {
        "ark": {
          "ctr": 0,
          "views": 1801,
          "clicks": 42
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 320.54999999999995
      },
      "2024-12-06": {
        "ark": {
          "ctr": 0,
          "views": 5902,
          "clicks": 102
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 861.5100000000001
      },
      "2024-12-07": {
        "ark": {
          "ctr": 0,
          "views": 3713,
          "clicks": 95
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 694.04
      },
      "2024-12-08": {
        "ark": {
          "ctr": 0,
          "views": 3062,
          "clicks": 86
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 589.21
      },
      "2024-12-09": {
        "ark": {
          "ctr": 0,
          "views": 4499,
          "clicks": 114
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 729.2900000000001
      },
      "2024-12-10": {
        "ark": {
          "ctr": 0,
          "views": 9167,
          "clicks": 224
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 1454.46
      },
      "2024-12-11": {
        "ark": {
          "ctr": 0,
          "views": 3373,
          "clicks": 81
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 550.08
      },
      "2024-12-12": {
        "ark": {
          "ctr": 0,
          "views": 710,
          "clicks": 14
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 113.62
      }
    },
    "sales": {
      "2024-12-06": {
        "infoBuysSum": 1159,
        "infoBuysCount": 1
      },
      "2024-12-07": {
        "infoBuysSum": 1217,
        "infoBuysCount": 1
      },
      "2024-12-08": {
        "infoBuysSum": 10605,
        "infoBuysCount": 11
      },
      "2024-12-09": {
        "infoBuysSum": 3592.76,
        "infoBuysCount": 3
      },
      "2024-12-10": {
        "infoBuysSum": 3593,
        "infoBuysCount": 3
      },
      "2024-12-11": {
        "infoBuysSum": 9678,
        "infoBuysCount": 8
      }
    },
    "other_metricks": {
      "2024-12-07": {
        "drr": 7.128594905505341,
        "krrr": 3.995175136460157,
        "ctrArk": 2.558577969297064,
        "ctrPrk": null,
        "margin": 12.585163572552688,
        "revWithDrr": 28.882000000000517,
        "marginWithDrr": 0.5027993259334659,
        "revWithoutDrr": 722.9220000000005
      },
      "2024-12-08": {
        "drr": 4.034579567241852,
        "krrr": 45.63896656742465,
        "ctrArk": 2.8086218158066623,
        "ctrPrk": null,
        "margin": 12.579360658096912,
        "revWithDrr": 494.67299999999886,
        "marginWithDrr": 5.741090205144619,
        "revWithoutDrr": 1083.882999999999
      },
      "2024-12-09": {
        "drr": 14.981306491372228,
        "krrr": 0,
        "ctrArk": 2.5338964214269835,
        "ctrPrk": null,
        "margin": 12.567754829185418,
        "revWithDrr": -368.32899999999984,
        "marginWithDrr": -12.824290071445477,
        "revWithoutDrr": 360.96100000000024
      },
      "2024-12-10": {
        "drr": 19.91865242399343,
        "krrr": 0,
        "ctrArk": 2.443547507363369,
        "ctrPrk": null,
        "margin": 12.567754829185398,
        "revWithDrr": -913.0185000000006,
        "marginWithDrr": -21.1926730080916,
        "revWithoutDrr": 541.4414999999995
      },
      "2024-12-11": {
        "drr": 7.533278553820871,
        "krrr": 0,
        "ctrArk": 2.4014230655203086,
        "ctrPrk": null,
        "margin": 12.567754829185398,
        "revWithDrr": -8.63850000000059,
        "marginWithDrr": -0.20051390610421552,
        "revWithoutDrr": 541.4414999999995
      }
    },
    "order_info": {
      "stock": 338,
      "2024-12-07": {
        "buysSum": 5744.24,
        "buysCount": 4.72,
        "ordersSum": 9736,
        "ordersCount": 8,
        "addToCartCount": 28
      },
      "2024-12-08": {
        "buysSum": 8616.359999999999,
        "buysCount": 7.08,
        "ordersSum": 14604,
        "ordersCount": 12,
        "addToCartCount": 26
      },
      "2024-12-09": {
        "buysSum": 2872.12,
        "buysCount": 2.36,
        "ordersSum": 4868,
        "ordersCount": 4,
        "addToCartCount": 25
      },
      "2024-12-10": {
        "buysSum": 4308.179999999999,
        "buysCount": 3.54,
        "ordersSum": 7302,
        "ordersCount": 6,
        "addToCartCount": 29
      },
      "2024-12-11": {
        "buysSum": 4308.179999999999,
        "buysCount": 3.54,
        "ordersSum": 7302,
        "ordersCount": 6,
        "addToCartCount": 21
      },
      "commission": 24.5,
      "pricePerOne": 1215.6842105263158,
      "cart_to_order": "71.00",
      "click_to_cart": "14.99",
      "ordersCount30": 133,
      "buyoutsPercent": 59,
      "fullConversion": "10.64%",
      "addToCartPercent": 8,
      "cartToOrderPercent": 31
    },
    "tax": 0,
    "percent_buys": 59,
    "percent_mp": null,
    "price_before_spp": 1217,
    "logistics": 92,
    "storage": 0,
    "size": {
      "width": 30,
      "height": 3,
      "length": 35,
      "isValid": true,
      "literSize": 3.15
    },
    "vendor_code": "Футболка2"
  },
  {
    "article": "225818878",
    "chat_id": 7366390419,
    "wb_api_key": "eyJhbGciOiJFUzI1NiIsImtpZCI6IjIwMjQxMTE4djEiLCJ0eXAiOiJKV1QifQ.eyJlbnQiOjEsImV4cCI6MTc0OTAwNTY1OCwiaWQiOiIwMTkzOGQwMy1kNGYzLTc4OWYtYTk4MC01YzQ4ZDQxNTZiNmMiLCJpaWQiOjExMjExMjMyLCJvaWQiOjE4Mzg3MywicyI6MTA3Mzc0OTc1OCwic2lkIjoiMDFjNWZmNWMtYjA1NC00YzUyLThmOTItZGViMjQzZTg3NDgzIiwidCI6ZmFsc2UsInVpZCI6MTEyMTEyMzJ9.cc7F9M5ZIDl6DHnVLOR65hYv6ZqBRkjrjASiTc_WHHlKXIddzamdkOPuCer0CQgTqV5eQKPGoTcNRR-kc8O2eg",
    "notification_time": 10,
    "self_cost": 1300,
    "marketing_cost": {
      "2024-11-13": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-14": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-15": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-16": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-17": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-18": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-19": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-20": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-21": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-22": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-23": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-24": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-25": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-26": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-27": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-28": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-29": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-30": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-01": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-02": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-03": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-04": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-05": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-06": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-07": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-08": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-09": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-10": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-11": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-12": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      }
    },
    "sales": {
      "2024-12-06": {
        "infoBuysSum": 19060,
        "infoBuysCount": 6
      },
      "2024-12-07": {
        "infoBuysSum": 6606,
        "infoBuysCount": 6
      },
      "2024-12-08": {
        "infoBuysSum": 9513,
        "infoBuysCount": 3
      },
      "2024-12-09": {
        "infoBuysSum": 9510,
        "infoBuysCount": 3
      },
      "2024-12-10": {
        "infoBuysSum": 6674,
        "infoBuysCount": 4
      },
      "2024-12-11": {
        "infoBuysSum": 9326,
        "infoBuysCount": 3
      }
    },
    "other_metricks": {
      "2024-12-07": {
        "drr": 0,
        "krrr": 100,
        "ctrArk": null,
        "ctrPrk": null,
        "margin": 19.121822425284854,
        "revWithDrr": 3364.067799999999,
        "marginWithDrr": 19.121822425284854,
        "revWithoutDrr": 3364.067799999999
      },
      "2024-12-08": {
        "drr": 0,
        "krrr": 100,
        "ctrArk": null,
        "ctrPrk": null,
        "margin": 19.1247919981814,
        "revWithDrr": 2692.1587199999994,
        "marginWithDrr": 19.1247919981814,
        "revWithoutDrr": 2692.1587199999994
      },
      "2024-12-09": {
        "drr": 0,
        "krrr": 100,
        "ctrArk": null,
        "ctrPrk": null,
        "margin": 14.857351487381004,
        "revWithDrr": 1680.2386800000004,
        "marginWithDrr": 14.857351487381004,
        "revWithoutDrr": 1680.2386800000004
      },
      "2024-12-10": {
        "drr": 0,
        "krrr": 100,
        "ctrArk": null,
        "ctrPrk": null,
        "margin": 14.07803756352285,
        "revWithDrr": 3137.0541599999997,
        "marginWithDrr": 14.07803756352285,
        "revWithoutDrr": 3137.0541599999997
      },
      "2024-12-11": {
        "drr": 0,
        "krrr": 100,
        "ctrArk": null,
        "ctrPrk": null,
        "margin": 14.078013251598145,
        "revWithDrr": 2016.5782599999984,
        "marginWithDrr": 14.078013251598145,
        "revWithoutDrr": 2016.5782599999984
      }
    },
    "order_info": {
      "stock": 897,
      "2024-12-07": {
        "buysSum": 17592.82,
        "buysCount": 5.300000000000001,
        "ordersSum": 33194,
        "ordersCount": 10,
        "addToCartCount": 44
      },
      "2024-12-08": {
        "buysSum": 14076.800000000001,
        "buysCount": 4.24,
        "ordersSum": 26560,
        "ordersCount": 8,
        "addToCartCount": 51
      },
      "2024-12-09": {
        "buysSum": 11309.140000000001,
        "buysCount": 3.71,
        "ordersSum": 21338,
        "ordersCount": 7,
        "addToCartCount": 52
      },
      "2024-12-10": {
        "buysSum": 22283.32,
        "buysCount": 7.42,
        "ordersSum": 42044,
        "ordersCount": 14,
        "addToCartCount": 126
      },
      "2024-12-11": {
        "buysSum": 14324.310000000001,
        "buysCount": 4.7700000000000005,
        "ordersSum": 27027,
        "ordersCount": 9,
        "addToCartCount": 84
      },
      "commission": 24.5,
      "pricePerOne": 2998.687898089172,
      "cart_to_order": "57.00",
      "click_to_cart": "12.45",
      "ordersCount30": 314,
      "buyoutsPercent": 52,
      "fullConversion": "7.10%",
      "addToCartPercent": 4,
      "cartToOrderPercent": 18
    },
    "tax": 0,
    "percent_buys": 53,
    "percent_mp": null,
    "price_before_spp": 3319,
    "logistics": 121,
    "storage": 0,
    "size": {
      "width": 40,
      "height": 4,
      "length": 32,
      "isValid": true,
      "literSize": 5.12
    },
    "vendor_code": "Zip White Melange"
  },
  {
    "article": "265352626",
    "chat_id": 737593394,
    "wb_api_key": "eyJhbGciOiJFUzI1NiIsImtpZCI6IjIwMjQxMTE4djEiLCJ0eXAiOiJKV1QifQ.eyJlbnQiOjEsImV4cCI6MTc0OTAwNjIyMCwiaWQiOiIwMTkzOGQwYy02ODAxLTdlZGItOThiOS00YzJmZmJjNTNiOGMiLCJpaWQiOjQ3NDU1ODg5LCJvaWQiOjE0MDEwMzcsInMiOjEwNzM3NDk3NTgsInNpZCI6IjYyNGI1YmJlLTI3NmEtNDRmMC1iMjI1LTM4ZTRjMTZjNzZhNiIsInQiOmZhbHNlLCJ1aWQiOjQ3NDU1ODg5fQ.hekQz3NnYF3DMCOG9ZqCr4jrl96Of8JrVmE01-3z5r9S45218ElHu8-IWtIyeXla1lvWRDU1mTmyAEoVQ83n4Q",
    "notification_time": 7,
    "self_cost": 735,
    "marketing_cost": {
      "2024-11-13": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-14": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-15": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-16": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-17": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-18": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-19": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-20": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-21": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-22": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-23": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-24": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-25": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-26": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-27": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-28": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-29": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-30": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-01": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-02": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-03": {
        "ark": {
          "ctr": 0,
          "views": 2935,
          "clicks": 167
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 661.19
      },
      "2024-12-04": {
        "ark": {
          "ctr": 0,
          "views": 3759,
          "clicks": 185
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 883.75
      },
      "2024-12-05": {
        "ark": {
          "ctr": 0,
          "views": 3421,
          "clicks": 236
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 865.72
      },
      "2024-12-06": {
        "ark": {
          "ctr": 0,
          "views": 691,
          "clicks": 37
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 154.82
      },
      "2024-12-07": {
        "ark": {
          "ctr": 0,
          "views": 4188,
          "clicks": 243
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 988.65
      },
      "2024-12-08": {
        "ark": {
          "ctr": 0,
          "views": 5501,
          "clicks": 322
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 1263.33
      },
      "2024-12-09": {
        "ark": {
          "ctr": 0,
          "views": 3581,
          "clicks": 196
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 607.5
      },
      "2024-12-10": {
        "ark": {
          "ctr": 0,
          "views": 249,
          "clicks": 12
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 15.96
      },
      "2024-12-11": {
        "ark": {
          "ctr": 0,
          "views": 67,
          "clicks": 1
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 4.199999999999999
      },
      "2024-12-12": {
        "ark": {
          "ctr": 0,
          "views": 1,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0.06
      }
    },
    "sales": {
      "2024-12-06": {
        "infoBuysSum": 8166,
        "infoBuysCount": 4
      },
      "2024-12-07": {
        "infoBuysSum": 17661,
        "infoBuysCount": 9
      },
      "2024-12-08": {
        "infoBuysSum": 14078,
        "infoBuysCount": 9
      },
      "2024-12-09": {
        "infoBuysSum": 13541,
        "infoBuysCount": 9
      },
      "2024-12-10": {
        "infoBuysSum": 12094,
        "infoBuysCount": 8
      },
      "2024-12-11": {
        "infoBuysSum": 18173,
        "infoBuysCount": 13
      }
    },
    "other_metricks": {
      "2024-12-07": {
        "drr": 2.3874667954600337,
        "krrr": 78.97419820535164,
        "ctrArk": 5.802292263610315,
        "ctrPrk": null,
        "margin": 22.70987635836755,
        "revWithDrr": 3713.4299000000005,
        "marginWithDrr": 17.934942767447478,
        "revWithoutDrr": 4702.079900000001
      },
      "2024-12-08": {
        "drr": 4.219539078156313,
        "krrr": 63.730540941269595,
        "ctrArk": 5.853481185239048,
        "ctrPrk": null,
        "margin": 23.267725450901803,
        "revWithDrr": 2219.8485,
        "marginWithDrr": 14.828647294589178,
        "revWithoutDrr": 3483.1785
      },
      "2024-12-09": {
        "drr": 1.3618633428981348,
        "krrr": 88.64312295386931,
        "ctrArk": 5.473331471655962,
        "ctrPrk": null,
        "margin": 23.98306043758966,
        "revWithDrr": 4741.6817999999985,
        "marginWithDrr": 21.259333751793395,
        "revWithoutDrr": 5349.1817999999985
      },
      "2024-12-10": {
        "drr": 0.05519817389499896,
        "krrr": 99.5548634432049,
        "ctrArk": 4.819277108433735,
        "ctrPrk": null,
        "margin": 24.800557515390473,
        "revWithDrr": 3569.4566000000004,
        "marginWithDrr": 24.690161167600476,
        "revWithoutDrr": 3585.4166000000005
      },
      "2024-12-11": {
        "drr": 0.012822078397850772,
        "krrr": 99.89496035803913,
        "ctrArk": 1.4925373134328357,
        "ctrPrk": null,
        "margin": 24.41378922945415,
        "revWithDrr": 3994.290400000001,
        "marginWithDrr": 24.38814507265845,
        "revWithoutDrr": 3998.4904000000006
      }
    },
    "order_info": {
      "stock": 103,
      "2024-12-07": {
        "buysSum": 20705,
        "buysCount": 10.5,
        "ordersSum": 41410,
        "ordersCount": 21,
        "addToCartCount": 50
      },
      "2024-12-08": {
        "buysSum": 14970,
        "buysCount": 7.5,
        "ordersSum": 29940,
        "ordersCount": 15,
        "addToCartCount": 61
      },
      "2024-12-09": {
        "buysSum": 22304,
        "buysCount": 11,
        "ordersSum": 44608,
        "ordersCount": 22,
        "addToCartCount": 49
      },
      "2024-12-10": {
        "buysSum": 14457,
        "buysCount": 7,
        "ordersSum": 28914,
        "ordersCount": 14,
        "addToCartCount": 32
      },
      "2024-12-11": {
        "buysSum": 16378,
        "buysCount": 8,
        "ordersSum": 32756,
        "ordersCount": 16,
        "addToCartCount": 46
      },
      "commission": 24.5,
      "pricePerOne": 1980.1694352159468,
      "cart_to_order": "56.00",
      "click_to_cart": "16.40",
      "ordersCount30": 301,
      "buyoutsPercent": 50,
      "fullConversion": "9.18%",
      "addToCartPercent": 10,
      "cartToOrderPercent": 36
    },
    "tax": 0,
    "percent_buys": 50,
    "percent_mp": null,
    "price_before_spp": 1971,
    "logistics": 62,
    "storage": 0,
    "size": {
      "width": 29,
      "height": 1,
      "length": 38,
      "isValid": true,
      "literSize": 1.102
    },
    "vendor_code": "бежевый_закр_однотон"
  },
  {
    "article": "157223694",
    "chat_id": 209523270,
    "wb_api_key": "eyJhbGciOiJFUzI1NiIsImtpZCI6IjIwMjQxMTE4djEiLCJ0eXAiOiJKV1QifQ.eyJlbnQiOjEsImV4cCI6MTc0OTA2MTI2NywiaWQiOiIwMTkzOTA1NC01YTQyLTc3YzAtODQzMS1kNDg1M2U4NGQ3Y2YiLCJpaWQiOjI5NDExOTE2LCJvaWQiOjY5NjM4OSwicyI6MTA3Mzc0OTc1OCwic2lkIjoiNjY3OGNhN2YtZDM5OC00MzY3LWE4ZDktNGY1M2Q1MTg4NTBhIiwidCI6ZmFsc2UsInVpZCI6Mjk0MTE5MTZ9.v4yeTBsdFmNc2l4a5uooQJRB-3QX5zezHQ47kcgpyQnUbgD_UnhzJKzkkSE9E2uv7J0kNy34whTZxEsZZfS4DA",
    "notification_time": 10,
    "self_cost": 4728,
    "marketing_cost": {
      "2024-11-13": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-14": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-15": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-16": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-17": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-18": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-19": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-20": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-21": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-22": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-23": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-24": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-25": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-26": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-27": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-28": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-29": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-30": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-01": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-02": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-03": {
        "ark": {
          "ctr": 0,
          "views": 10915,
          "clicks": 290
        },
        "prk": {
          "ctr": 0,
          "views": 4007,
          "clicks": 113
        },
        "cost": 4497.28
      },
      "2024-12-04": {
        "ark": {
          "ctr": 0,
          "views": 10365,
          "clicks": 262
        },
        "prk": {
          "ctr": 0,
          "views": 3817,
          "clicks": 69
        },
        "cost": 4301.21
      },
      "2024-12-05": {
        "ark": {
          "ctr": 0,
          "views": 9648,
          "clicks": 211
        },
        "prk": {
          "ctr": 0,
          "views": 3591,
          "clicks": 84
        },
        "cost": 3944.9499999999994
      },
      "2024-12-06": {
        "ark": {
          "ctr": 0,
          "views": 9908,
          "clicks": 207
        },
        "prk": {
          "ctr": 0,
          "views": 3803,
          "clicks": 75
        },
        "cost": 4047.58
      },
      "2024-12-07": {
        "ark": {
          "ctr": 0,
          "views": 12232,
          "clicks": 293
        },
        "prk": {
          "ctr": 0,
          "views": 3891,
          "clicks": 99
        },
        "cost": 5526.43
      },
      "2024-12-08": {
        "ark": {
          "ctr": 0,
          "views": 16231,
          "clicks": 469
        },
        "prk": {
          "ctr": 0,
          "views": 9066,
          "clicks": 212
        },
        "cost": 9902.75
      },
      "2024-12-09": {
        "ark": {
          "ctr": 0,
          "views": 12008,
          "clicks": 281
        },
        "prk": {
          "ctr": 0,
          "views": 7262,
          "clicks": 133
        },
        "cost": 7334.379999999999
      },
      "2024-12-10": {
        "ark": {
          "ctr": 0,
          "views": 12045,
          "clicks": 277
        },
        "prk": {
          "ctr": 0,
          "views": 6029,
          "clicks": 92
        },
        "cost": 6696.530000000001
      },
      "2024-12-11": {
        "ark": {
          "ctr": 0,
          "views": 14173,
          "clicks": 399
        },
        "prk": {
          "ctr": 0,
          "views": 5440,
          "clicks": 186
        },
        "cost": 5126.07
      },
      "2024-12-12": {
        "ark": {
          "ctr": 0,
          "views": 1918,
          "clicks": 60
        },
        "prk": {
          "ctr": 0,
          "views": 531,
          "clicks": 39
        },
        "cost": 297.86
      }
    },
    "sales": {
      "2024-12-06": {
        "infoBuysSum": 15060,
        "infoBuysCount": 1
      },
      "2024-12-08": {
        "infoBuysSum": 45271,
        "infoBuysCount": 3
      },
      "2024-12-09": {
        "infoBuysSum": 14212,
        "infoBuysCount": 1
      }
    },
    "other_metricks": {
      "2024-12-07": {
        "drr": 36.6960823373174,
        "krrr": 0,
        "ctrArk": 2.395356442119032,
        "ctrPrk": 2.5443330763299925,
        "margin": 39.58269093323675,
        "revWithDrr": -280.61513600000126,
        "marginWithDrr": -2.1174026318966654,
        "revWithoutDrr": 5245.814863999999
      },
      "2024-12-08": {
        "drr": 32.877656042496675,
        "krrr": 5.612852752784436,
        "ctrArk": 2.8895323763169243,
        "ctrPrk": 2.3384072358261636,
        "margin": 39.58269093323675,
        "revWithDrr": 588.8797279999981,
        "marginWithDrr": 2.221718157672334,
        "revWithoutDrr": 10491.629727999998
      },
      "2024-12-09": {
        "drr": null,
        "krrr": 0,
        "ctrArk": 2.3401065956029314,
        "ctrPrk": 1.831451390801432,
        "margin": null,
        "revWithDrr": -7334.379999999999,
        "marginWithDrr": null,
        "revWithoutDrr": 0
      },
      "2024-12-10": {
        "drr": null,
        "krrr": 0,
        "ctrArk": 2.2997094229970942,
        "ctrPrk": 1.525957870293581,
        "margin": null,
        "revWithDrr": -6696.530000000001,
        "marginWithDrr": null,
        "revWithoutDrr": 0
      },
      "2024-12-11": {
        "drr": 20.138563683507503,
        "krrr": 28.463841987549966,
        "ctrArk": 2.8152120228603685,
        "ctrPrk": 3.419117647058824,
        "margin": 31.99043965227827,
        "revWithDrr": 2039.6349280000013,
        "marginWithDrr": 9.105708193747015,
        "revWithoutDrr": 7165.704928000001
      }
    },
    "order_info": {
      "stock": 220,
      "2024-12-07": {
        "buysSum": 13252.8,
        "buysCount": 0.88,
        "ordersSum": 15060,
        "ordersCount": 1,
        "addToCartCount": 69
      },
      "2024-12-08": {
        "buysSum": 26505.6,
        "buysCount": 1.76,
        "ordersSum": 30120,
        "ordersCount": 2,
        "addToCartCount": 82
      },
      "2024-12-09": {
        "buysSum": 0,
        "buysCount": 0,
        "ordersSum": 0,
        "ordersCount": 0,
        "addToCartCount": 56
      },
      "2024-12-10": {
        "buysSum": 0,
        "buysCount": 0,
        "ordersSum": 0,
        "ordersCount": 0,
        "addToCartCount": 46
      },
      "2024-12-11": {
        "buysSum": 22399.52,
        "buysCount": 1.76,
        "ordersSum": 25454,
        "ordersCount": 2,
        "addToCartCount": 89
      },
      "commission": 16.5,
      "pricePerOne": 14223.08064516129,
      "cart_to_order": "94.00",
      "click_to_cart": "6.88",
      "ordersCount30": 62,
      "buyoutsPercent": 87,
      "fullConversion": "6.47%",
      "addToCartPercent": 8,
      "cartToOrderPercent": 3
    },
    "tax": 0,
    "percent_buys": 88,
    "percent_mp": null,
    "price_before_spp": 15060,
    "logistics": 1122,
    "storage": 7,
    "size": {
      "width": 41,
      "height": 22,
      "length": 81,
      "isValid": true,
      "literSize": 73.062
    },
    "vendor_code": "Velvet4_MAX_Белый"
  },
  {
    "article": "200231334",
    "chat_id": 621634597,
    "wb_api_key": "eyJhbGciOiJFUzI1NiIsImtpZCI6IjIwMjQxMDE2djEiLCJ0eXAiOiJKV1QifQ.eyJlbnQiOjEsImV4cCI6MTc0NTI3NzkzMiwiaWQiOiIwMTkyYWVkMy0zZTE0LTczZjMtYjg3Zi0wNzY4NmEwM2MyMTAiLCJpaWQiOjUxMjU4OTA2LCJvaWQiOjIzMTg5MywicyI6MTA3Mzc0OTc1OCwic2lkIjoiNmFmMDg1MjEtNWFmNy00ZWJhLTlmMzMtMDU1YmQ4ZmYxMDdkIiwidCI6ZmFsc2UsInVpZCI6NTEyNTg5MDZ9.k6sknkEF1VwSIll5SBjuP5xQ33z1ud6CpszgC6sYqcmqoVAprF80M33RaotHwL72LDK0_45Yf9lSoE9H8R2iqw",
    "notification_time": 21,
    "self_cost": 123,
    "marketing_cost": {
      "2024-11-13": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-14": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-15": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-16": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-17": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-18": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-19": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-20": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-21": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-22": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-23": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-24": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-25": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-26": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-27": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-28": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-29": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-30": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-01": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-02": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-03": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-04": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-05": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-06": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-07": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-08": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-09": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-10": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-11": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-12": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      }
    },
    "sales": {
      "2024-12-05": {
        "infoBuysSum": 2882.9,
        "infoBuysCount": 8
      },
      "2024-12-06": {
        "infoBuysSum": 13136.46,
        "infoBuysCount": 37
      },
      "2024-12-07": {
        "infoBuysSum": 9597.15,
        "infoBuysCount": 27
      },
      "2024-12-08": {
        "infoBuysSum": 11338.9,
        "infoBuysCount": 32
      },
      "2024-12-09": {
        "infoBuysSum": 13744.45,
        "infoBuysCount": 39
      },
      "2024-12-10": {
        "infoBuysSum": 5639.48,
        "infoBuysCount": 16
      },
      "2024-12-11": {
        "infoBuysSum": 11615.07,
        "infoBuysCount": 33
      }
    },
    "other_metricks": {
      "2024-12-07": {
        "drr": 0,
        "krrr": 100,
        "ctrArk": null,
        "ctrPrk": null,
        "margin": 15.885633773142652,
        "revWithDrr": 1930.2188799999985,
        "marginWithDrr": 15.885633773142652,
        "revWithoutDrr": 1930.2188799999985
      },
      "2024-12-08": {
        "drr": 0,
        "krrr": 100,
        "ctrArk": null,
        "ctrPrk": null,
        "margin": 15.900196864746627,
        "revWithDrr": 2093.4835199999998,
        "marginWithDrr": 15.900196864746627,
        "revWithoutDrr": 2093.4835199999998
      },
      "2024-12-09": {
        "drr": 0,
        "krrr": 100,
        "ctrArk": null,
        "ctrPrk": null,
        "margin": 15.929654048728725,
        "revWithDrr": 1345.2783999999992,
        "marginWithDrr": 15.929654048728725,
        "revWithoutDrr": 1345.2783999999992
      },
      "2024-12-10": {
        "drr": 0,
        "krrr": 100,
        "ctrArk": null,
        "ctrPrk": null,
        "margin": 15.898678473745495,
        "revWithDrr": 1878.6895999999997,
        "marginWithDrr": 15.898678473745495,
        "revWithoutDrr": 1878.6895999999997
      },
      "2024-12-11": {
        "drr": 0,
        "krrr": 100,
        "ctrArk": null,
        "ctrPrk": null,
        "margin": 15.895475970898653,
        "revWithDrr": 1985.5865599999997,
        "marginWithDrr": 15.895475970898653,
        "revWithoutDrr": 1985.5865599999997
      }
    },
    "order_info": {
      "stock": 528,
      "2024-12-07": {
        "buysSum": 12150.72,
        "buysCount": 34.56,
        "ordersSum": 12657,
        "ordersCount": 36,
        "addToCartCount": 78
      },
      "2024-12-08": {
        "buysSum": 13166.4,
        "buysCount": 37.44,
        "ordersSum": 13715,
        "ordersCount": 39,
        "addToCartCount": 82
      },
      "2024-12-09": {
        "buysSum": 8445.119999999999,
        "buysCount": 24,
        "ordersSum": 8797,
        "ordersCount": 25,
        "addToCartCount": 75
      },
      "2024-12-10": {
        "buysSum": 11816.64,
        "buysCount": 33.6,
        "ordersSum": 12309,
        "ordersCount": 35,
        "addToCartCount": 79
      },
      "2024-12-11": {
        "buysSum": 12491.52,
        "buysCount": 35.519999999999996,
        "ordersSum": 13012,
        "ordersCount": 37,
        "addToCartCount": 85
      },
      "commission": 19.5,
      "pricePerOne": 361.1972361809045,
      "cart_to_order": "97.00",
      "click_to_cart": "17.63",
      "ordersCount30": 796,
      "buyoutsPercent": 96,
      "fullConversion": "17.10%",
      "addToCartPercent": 24,
      "cartToOrderPercent": 37
    },
    "tax": 0,
    "percent_buys": 96,
    "percent_mp": null,
    "price_before_spp": 351,
    "logistics": 65,
    "storage": 0,
    "size": {
      "width": 11,
      "height": 20,
      "length": 6,
      "isValid": true,
      "literSize": 1.32
    },
    "vendor_code": "ДозСироп03"
  },
  {
    "article": "159885920",
    "chat_id": 209523270,
    "wb_api_key": "eyJhbGciOiJFUzI1NiIsImtpZCI6IjIwMjQxMTE4djEiLCJ0eXAiOiJKV1QifQ.eyJlbnQiOjEsImV4cCI6MTc0OTA2MTI2NywiaWQiOiIwMTkzOTA1NC01YTQyLTc3YzAtODQzMS1kNDg1M2U4NGQ3Y2YiLCJpaWQiOjI5NDExOTE2LCJvaWQiOjY5NjM4OSwicyI6MTA3Mzc0OTc1OCwic2lkIjoiNjY3OGNhN2YtZDM5OC00MzY3LWE4ZDktNGY1M2Q1MTg4NTBhIiwidCI6ZmFsc2UsInVpZCI6Mjk0MTE5MTZ9.v4yeTBsdFmNc2l4a5uooQJRB-3QX5zezHQ47kcgpyQnUbgD_UnhzJKzkkSE9E2uv7J0kNy34whTZxEsZZfS4DA",
    "notification_time": 10,
    "self_cost": 4303,
    "marketing_cost": {
      "2024-11-13": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-14": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-15": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-16": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-17": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-18": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-19": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-20": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-21": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-22": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-23": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-24": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-25": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-26": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-27": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-28": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-29": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-30": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-01": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-02": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-03": {
        "ark": {
          "ctr": 0,
          "views": 673,
          "clicks": 30
        },
        "prk": {
          "ctr": 0,
          "views": 51,
          "clicks": 2
        },
        "cost": 110.98000000000002
      },
      "2024-12-04": {
        "ark": {
          "ctr": 0,
          "views": 4786,
          "clicks": 136
        },
        "prk": {
          "ctr": 0,
          "views": 630,
          "clicks": 12
        },
        "cost": 1187.41
      },
      "2024-12-05": {
        "ark": {
          "ctr": 0,
          "views": 4709,
          "clicks": 121
        },
        "prk": {
          "ctr": 0,
          "views": 469,
          "clicks": 11
        },
        "cost": 1220.64
      },
      "2024-12-06": {
        "ark": {
          "ctr": 0,
          "views": 5289,
          "clicks": 162
        },
        "prk": {
          "ctr": 0,
          "views": 1294,
          "clicks": 41
        },
        "cost": 1914.08
      },
      "2024-12-07": {
        "ark": {
          "ctr": 0,
          "views": 7432,
          "clicks": 239
        },
        "prk": {
          "ctr": 0,
          "views": 2714,
          "clicks": 72
        },
        "cost": 3461.3
      },
      "2024-12-08": {
        "ark": {
          "ctr": 0,
          "views": 10216,
          "clicks": 423
        },
        "prk": {
          "ctr": 0,
          "views": 3305,
          "clicks": 142
        },
        "cost": 5181.18
      },
      "2024-12-09": {
        "ark": {
          "ctr": 0,
          "views": 8770,
          "clicks": 347
        },
        "prk": {
          "ctr": 0,
          "views": 1488,
          "clicks": 68
        },
        "cost": 3860.72
      },
      "2024-12-10": {
        "ark": {
          "ctr": 0,
          "views": 8444,
          "clicks": 293
        },
        "prk": {
          "ctr": 0,
          "views": 1544,
          "clicks": 58
        },
        "cost": 3740.6500000000005
      },
      "2024-12-11": {
        "ark": {
          "ctr": 0,
          "views": 6694,
          "clicks": 213
        },
        "prk": {
          "ctr": 0,
          "views": 1803,
          "clicks": 75
        },
        "cost": 3228.62
      },
      "2024-12-12": {
        "ark": {
          "ctr": 0,
          "views": 495,
          "clicks": 10
        },
        "prk": {
          "ctr": 0,
          "views": 170,
          "clicks": 9
        },
        "cost": 252.1
      }
    },
    "sales": {
      "2024-12-06": {
        "infoBuysSum": 28254,
        "infoBuysCount": 2
      },
      "2024-12-09": {
        "infoBuysSum": 14127,
        "infoBuysCount": 1
      },
      "2024-12-11": {
        "infoBuysSum": 14660,
        "infoBuysCount": 1
      }
    },
    "other_metricks": {
      "2024-12-07": {
        "drr": null,
        "krrr": 0,
        "ctrArk": 3.2158234660925724,
        "ctrPrk": 2.6529108327192334,
        "margin": null,
        "revWithDrr": -3461.3,
        "marginWithDrr": null,
        "revWithoutDrr": 0
      },
      "2024-12-08": {
        "drr": 36.67572733064345,
        "krrr": 4.9526698259159625,
        "ctrArk": 4.140563821456539,
        "ctrPrk": 4.296520423600605,
        "margin": 40.61768878556553,
        "revWithDrr": 269.9778499999993,
        "marginWithDrr": 2.0116600164671556,
        "revWithoutDrr": 5451.15785
      },
      "2024-12-09": {
        "drr": 26.335061391541608,
        "krrr": 34.132033665185986,
        "ctrArk": 3.9566704675028506,
        "ctrPrk": 4.56989247311828,
        "margin": 42.08588604868242,
        "revWithDrr": 2000.5813500000008,
        "marginWithDrr": 14.364768794428095,
        "revWithoutDrr": 5861.301350000001
      },
      "2024-12-10": {
        "drr": 25.856431879449786,
        "krrr": 34.52146135620981,
        "ctrArk": 3.4699194694457605,
        "ctrPrk": 3.756476683937824,
        "margin": 41.56674427826669,
        "revWithDrr": 1972.1378499999992,
        "marginWithDrr": 14.349447563056389,
        "revWithoutDrr": 5712.78785
      },
      "2024-12-11": {
        "drr": 11.158567774936062,
        "krrr": 71.74216788043336,
        "ctrArk": 3.181953988646549,
        "ctrPrk": 4.159733777038269,
        "margin": 41.56674427826669,
        "revWithDrr": 8196.955699999999,
        "marginWithDrr": 29.82088346254452,
        "revWithoutDrr": 11425.5757
      }
    },
    "order_info": {
      "stock": 120,
      "2024-12-07": {
        "buysSum": 0,
        "buysCount": 0,
        "ordersSum": 0,
        "ordersCount": 0,
        "addToCartCount": 107
      },
      "2024-12-08": {
        "buysSum": 13420.65,
        "buysCount": 0.95,
        "ordersSum": 14127,
        "ordersCount": 1,
        "addToCartCount": 167
      },
      "2024-12-09": {
        "buysSum": 13927,
        "buysCount": 0.95,
        "ordersSum": 14660,
        "ordersCount": 1,
        "addToCartCount": 124
      },
      "2024-12-10": {
        "buysSum": 13743.65,
        "buysCount": 0.95,
        "ordersSum": 14467,
        "ordersCount": 1,
        "addToCartCount": 79
      },
      "2024-12-11": {
        "buysSum": 27487.3,
        "buysCount": 1.9,
        "ordersSum": 28934,
        "ordersCount": 2,
        "addToCartCount": 95
      },
      "commission": 16.5,
      "pricePerOne": 13421.95,
      "cart_to_order": "94.00",
      "click_to_cart": "9.34",
      "ordersCount30": 40,
      "buyoutsPercent": 96,
      "fullConversion": "8.78%",
      "addToCartPercent": 7,
      "cartToOrderPercent": 2
    },
    "tax": 0,
    "percent_buys": 95,
    "percent_mp": null,
    "price_before_spp": null,
    "logistics": 1115,
    "storage": 7,
    "size": {
      "width": 41,
      "height": 15,
      "length": 118,
      "isValid": true,
      "literSize": 72.57
    },
    "vendor_code": "Velvet6_MAX_Белый"
  },
  {
    "article": "264240459",
    "chat_id": 807559940,
    "wb_api_key": "eyJhbGciOiJFUzI1NiIsImtpZCI6IjIwMjQxMTE4djEiLCJ0eXAiOiJKV1QifQ.eyJlbnQiOjEsImV4cCI6MTc0OTAxMTk5NywiaWQiOiIwMTkzOGQ2NC04YmIyLTc1OGUtOTE4Ny0zNWU2OWZjM2QxZDkiLCJpaWQiOjYwMDk0NDM0LCJvaWQiOjM1NTUxMywicyI6MTA3Mzc0OTc1OCwic2lkIjoiNGYzNGU4YjAtYmFjNS00YTZmLWFkNTYtNjQ4MWJiNDljYjc0IiwidCI6ZmFsc2UsInVpZCI6NjAwOTQ0MzR9.BUTAiRGFvJ8xq9dUpWQXxMAWo4iDxmpgkeETeR6OM41GTIlZQkCjGp8A6Zfw-DffEcNzouLocPLuy9CGklhA5g",
    "notification_time": 9,
    "self_cost": 1420,
    "marketing_cost": {
      "2024-11-13": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-14": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-15": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-16": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-17": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-18": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-19": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-20": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-21": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-22": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-23": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-24": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-25": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-26": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-27": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-28": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-29": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-30": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-01": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-02": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-03": {
        "ark": {
          "ctr": 0,
          "views": 8,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0.15
      },
      "2024-12-04": {
        "ark": {
          "ctr": 0,
          "views": 7,
          "clicks": 1
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0.22
      },
      "2024-12-05": {
        "ark": {
          "ctr": 0,
          "views": 4,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0.08
      },
      "2024-12-06": {
        "ark": {
          "ctr": 0,
          "views": 1,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0.02
      },
      "2024-12-07": {
        "ark": {
          "ctr": 0,
          "views": 1,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0.02
      },
      "2024-12-08": {
        "ark": {
          "ctr": 0,
          "views": 4,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0.08
      },
      "2024-12-09": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-10": {
        "ark": {
          "ctr": 0,
          "views": 1,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0.02
      },
      "2024-12-11": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-12": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      }
    },
    "sales": {
      "2024-12-06": {
        "infoBuysSum": 2749.9,
        "infoBuysCount": 1
      },
      "2024-12-07": {
        "infoBuysSum": 2750,
        "infoBuysCount": 1
      },
      "2024-12-08": {
        "infoBuysSum": 3400,
        "infoBuysCount": 1
      },
      "2024-12-10": {
        "infoBuysSum": 3399.85,
        "infoBuysCount": 1
      },
      "2024-12-11": {
        "infoBuysSum": 2749.96,
        "infoBuysCount": 1
      }
    },
    "other_metricks": {
      "2024-12-07": {
        "drr": 0.00029411764705882356,
        "krrr": 99.99608321292477,
        "ctrArk": 0,
        "ctrPrk": null,
        "margin": 13.653010695187168,
        "revWithDrr": 510.60260000000017,
        "marginWithDrr": 13.652475935828882,
        "revWithoutDrr": 510.62260000000015
      },
      "2024-12-08": {
        "drr": 0.0011764705882352942,
        "krrr": 99.9843328516991,
        "ctrArk": 0,
        "ctrPrk": null,
        "margin": 13.653010695187168,
        "revWithDrr": 510.54260000000016,
        "marginWithDrr": 13.650871657754013,
        "revWithoutDrr": 510.62260000000015
      },
      "2024-12-09": {
        "drr": 0,
        "krrr": 100,
        "ctrArk": null,
        "ctrPrk": null,
        "margin": 13.653010695187168,
        "revWithDrr": 510.62260000000015,
        "marginWithDrr": 13.653010695187168,
        "revWithoutDrr": 510.62260000000015
      },
      "2024-12-10": {
        "drr": 0.000196078431372549,
        "krrr": 99.99738880861652,
        "ctrArk": 0,
        "ctrPrk": null,
        "margin": 13.653010695187165,
        "revWithDrr": 765.9139,
        "marginWithDrr": 13.652654188948308,
        "revWithoutDrr": 765.9339
      },
      "2024-12-11": {
        "drr": 0,
        "krrr": 100,
        "ctrArk": null,
        "ctrPrk": null,
        "margin": 13.250440404040397,
        "revWithDrr": 491.9225999999999,
        "marginWithDrr": 13.250440404040397,
        "revWithoutDrr": 491.9225999999999
      }
    },
    "order_info": {
      "stock": 2,
      "2024-12-07": {
        "buysSum": 3740.0000000000005,
        "buysCount": 1.1,
        "ordersSum": 6800,
        "ordersCount": 2,
        "addToCartCount": 17
      },
      "2024-12-08": {
        "buysSum": 3740.0000000000005,
        "buysCount": 1.1,
        "ordersSum": 6800,
        "ordersCount": 2,
        "addToCartCount": 20
      },
      "2024-12-09": {
        "buysSum": 3740.0000000000005,
        "buysCount": 1.1,
        "ordersSum": 6800,
        "ordersCount": 2,
        "addToCartCount": 15
      },
      "2024-12-10": {
        "buysSum": 5610,
        "buysCount": 1.6500000000000001,
        "ordersSum": 10200,
        "ordersCount": 3,
        "addToCartCount": 18
      },
      "2024-12-11": {
        "buysSum": 3712.5000000000005,
        "buysCount": 1.1,
        "ordersSum": 6750,
        "ordersCount": 2,
        "addToCartCount": 19
      },
      "commission": 24.5,
      "pricePerOne": 2925.675675675676,
      "cart_to_order": "77.00",
      "click_to_cart": "9.67",
      "ordersCount30": 111,
      "buyoutsPercent": 50,
      "fullConversion": "7.45%",
      "addToCartPercent": 5,
      "cartToOrderPercent": 12
    },
    "tax": 0,
    "percent_buys": 55,
    "percent_mp": null,
    "price_before_spp": 3400,
    "logistics": 195,
    "storage": 1,
    "size": {
      "width": 26,
      "height": 30,
      "length": 13,
      "isValid": true,
      "literSize": 10.14
    },
    "vendor_code": "00011"
  },
  {
    "article": "264234442",
    "chat_id": 807559940,
    "wb_api_key": "eyJhbGciOiJFUzI1NiIsImtpZCI6IjIwMjQxMTE4djEiLCJ0eXAiOiJKV1QifQ.eyJlbnQiOjEsImV4cCI6MTc0OTAxMTk5NywiaWQiOiIwMTkzOGQ2NC04YmIyLTc1OGUtOTE4Ny0zNWU2OWZjM2QxZDkiLCJpaWQiOjYwMDk0NDM0LCJvaWQiOjM1NTUxMywicyI6MTA3Mzc0OTc1OCwic2lkIjoiNGYzNGU4YjAtYmFjNS00YTZmLWFkNTYtNjQ4MWJiNDljYjc0IiwidCI6ZmFsc2UsInVpZCI6NjAwOTQ0MzR9.BUTAiRGFvJ8xq9dUpWQXxMAWo4iDxmpgkeETeR6OM41GTIlZQkCjGp8A6Zfw-DffEcNzouLocPLuy9CGklhA5g",
    "notification_time": 9,
    "self_cost": 1420,
    "marketing_cost": {
      "2024-11-13": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-14": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-15": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-16": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-17": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-18": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-19": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-20": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-21": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-22": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-23": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-24": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-25": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-26": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-27": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-28": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-29": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-30": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-01": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-02": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-03": {
        "ark": {
          "ctr": 0,
          "views": 1592,
          "clicks": 76
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 100.36999999999999
      },
      "2024-12-04": {
        "ark": {
          "ctr": 0,
          "views": 1642,
          "clicks": 67
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 108.6
      },
      "2024-12-05": {
        "ark": {
          "ctr": 0,
          "views": 2741,
          "clicks": 79
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 184.12
      },
      "2024-12-06": {
        "ark": {
          "ctr": 0,
          "views": 3180,
          "clicks": 105
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 287.16
      },
      "2024-12-07": {
        "ark": {
          "ctr": 0,
          "views": 4486,
          "clicks": 134
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 419.35
      },
      "2024-12-08": {
        "ark": {
          "ctr": 0,
          "views": 3958,
          "clicks": 137
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 389.32
      },
      "2024-12-09": {
        "ark": {
          "ctr": 0,
          "views": 2560,
          "clicks": 77
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 259.63
      },
      "2024-12-10": {
        "ark": {
          "ctr": 0,
          "views": 3697,
          "clicks": 123
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 405.45000000000005
      },
      "2024-12-11": {
        "ark": {
          "ctr": 0,
          "views": 2772,
          "clicks": 108
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 299.57
      },
      "2024-12-12": {
        "ark": {
          "ctr": 0,
          "views": 1,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0.03
      }
    },
    "sales": {
      "2024-12-06": {
        "infoBuysSum": 15400,
        "infoBuysCount": 4
      },
      "2024-12-07": {
        "infoBuysSum": 3850,
        "infoBuysCount": 1
      },
      "2024-12-08": {
        "infoBuysSum": 3650,
        "infoBuysCount": 1
      },
      "2024-12-09": {
        "infoBuysSum": 10950,
        "infoBuysCount": 3
      },
      "2024-12-10": {
        "infoBuysSum": 3650,
        "infoBuysCount": 1
      },
      "2024-12-11": {
        "infoBuysSum": 7250,
        "infoBuysCount": 2
      }
    },
    "other_metricks": {
      "2024-12-07": {
        "drr": 11.489041095890412,
        "krrr": 0,
        "ctrArk": 2.9870708872046365,
        "ctrPrk": null,
        "margin": 10.614511275026354,
        "revWithDrr": -268.2524319999999,
        "marginWithDrr": -18.844568458025986,
        "revWithoutDrr": 151.09756800000014
      },
      "2024-12-08": {
        "drr": 1.7777168949771687,
        "krrr": 57.29198859664064,
        "ctrArk": 3.461344113188479,
        "ctrPrk": null,
        "margin": 10.673052429457908,
        "revWithDrr": 522.265408,
        "marginWithDrr": 6.114803980798501,
        "revWithoutDrr": 911.5854079999999
      },
      "2024-12-09": {
        "drr": 1.8029861111111112,
        "krrr": 53.16499096080535,
        "ctrArk": 3.0078125,
        "ctrPrk": null,
        "margin": 9.870909401709396,
        "revWithDrr": 294.7202719999997,
        "marginWithDrr": 5.247868091168086,
        "revWithoutDrr": 554.3502719999997
      },
      "2024-12-10": {
        "drr": 11.262500000000001,
        "krrr": 0,
        "ctrArk": 3.327021909656478,
        "ctrPrk": null,
        "margin": 9.817490598290593,
        "revWithDrr": -267.6124320000001,
        "marginWithDrr": -19.060714529914538,
        "revWithoutDrr": 137.83756799999992
      },
      "2024-12-11": {
        "drr": 2.080347222222222,
        "krrr": 45.960160005116734,
        "ctrArk": 3.896103896103896,
        "ctrPrk": null,
        "margin": 9.870909401709396,
        "revWithDrr": 254.78027199999968,
        "marginWithDrr": 4.53668575498575,
        "revWithoutDrr": 554.3502719999997
      }
    },
    "order_info": {
      "stock": 93,
      "2024-12-07": {
        "buysSum": 1423.5,
        "buysCount": 0.39,
        "ordersSum": 3650,
        "ordersCount": 1,
        "addToCartCount": 27
      },
      "2024-12-08": {
        "buysSum": 8541,
        "buysCount": 2.34,
        "ordersSum": 21900,
        "ordersCount": 6,
        "addToCartCount": 42
      },
      "2024-12-09": {
        "buysSum": 5616,
        "buysCount": 1.56,
        "ordersSum": 14400,
        "ordersCount": 4,
        "addToCartCount": 34
      },
      "2024-12-10": {
        "buysSum": 1404,
        "buysCount": 0.39,
        "ordersSum": 3600,
        "ordersCount": 1,
        "addToCartCount": 24
      },
      "2024-12-11": {
        "buysSum": 5616,
        "buysCount": 1.56,
        "ordersSum": 14400,
        "ordersCount": 4,
        "addToCartCount": 41
      },
      "commission": 24.5,
      "pricePerOne": 3739.5042016806724,
      "cart_to_order": "77.00",
      "click_to_cart": "9.67",
      "ordersCount30": 119,
      "buyoutsPercent": 38,
      "fullConversion": "7.45%",
      "addToCartPercent": 5,
      "cartToOrderPercent": 13
    },
    "tax": 0,
    "percent_buys": 39,
    "percent_mp": null,
    "price_before_spp": 3650,
    "logistics": 217,
    "storage": 1,
    "size": {
      "width": 32,
      "height": 13,
      "length": 28,
      "isValid": true,
      "literSize": 11.648
    },
    "vendor_code": "00013"
  },
  {
    "article": "264238848",
    "chat_id": 807559940,
    "wb_api_key": "eyJhbGciOiJFUzI1NiIsImtpZCI6IjIwMjQxMTE4djEiLCJ0eXAiOiJKV1QifQ.eyJlbnQiOjEsImV4cCI6MTc0OTAxMTk5NywiaWQiOiIwMTkzOGQ2NC04YmIyLTc1OGUtOTE4Ny0zNWU2OWZjM2QxZDkiLCJpaWQiOjYwMDk0NDM0LCJvaWQiOjM1NTUxMywicyI6MTA3Mzc0OTc1OCwic2lkIjoiNGYzNGU4YjAtYmFjNS00YTZmLWFkNTYtNjQ4MWJiNDljYjc0IiwidCI6ZmFsc2UsInVpZCI6NjAwOTQ0MzR9.BUTAiRGFvJ8xq9dUpWQXxMAWo4iDxmpgkeETeR6OM41GTIlZQkCjGp8A6Zfw-DffEcNzouLocPLuy9CGklhA5g",
    "notification_time": 9,
    "self_cost": 1470,
    "marketing_cost": {
      "2024-11-13": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-14": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-15": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-16": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-17": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-18": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-19": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-20": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-21": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-22": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-23": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-24": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-25": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-26": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-27": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-28": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-29": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-30": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-01": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-02": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-03": {
        "ark": {
          "ctr": 0,
          "views": 3541,
          "clicks": 157
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 388.55
      },
      "2024-12-04": {
        "ark": {
          "ctr": 0,
          "views": 3655,
          "clicks": 157
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 403.78
      },
      "2024-12-05": {
        "ark": {
          "ctr": 0,
          "views": 5049,
          "clicks": 160
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 555.7299999999999
      },
      "2024-12-06": {
        "ark": {
          "ctr": 0,
          "views": 6667,
          "clicks": 263
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 696.52
      },
      "2024-12-07": {
        "ark": {
          "ctr": 0,
          "views": 8816,
          "clicks": 352
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 904.7499999999999
      },
      "2024-12-08": {
        "ark": {
          "ctr": 0,
          "views": 7316,
          "clicks": 299
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 748.0799999999999
      },
      "2024-12-09": {
        "ark": {
          "ctr": 0,
          "views": 9613,
          "clicks": 407
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 1152.82
      },
      "2024-12-10": {
        "ark": {
          "ctr": 0,
          "views": 12644,
          "clicks": 509
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 1530.13
      },
      "2024-12-11": {
        "ark": {
          "ctr": 0,
          "views": 9360,
          "clicks": 457
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 1121.4299999999998
      },
      "2024-12-12": {
        "ark": {
          "ctr": 0,
          "views": 10,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0.38
      }
    },
    "sales": {
      "2024-12-07": {
        "infoBuysSum": 13700,
        "infoBuysCount": 4
      },
      "2024-12-08": {
        "infoBuysSum": 6800,
        "infoBuysCount": 4
      },
      "2024-12-09": {
        "infoBuysSum": 6799.969999999999,
        "infoBuysCount": 4
      },
      "2024-12-10": {
        "infoBuysSum": 13650,
        "infoBuysCount": 4
      },
      "2024-12-11": {
        "infoBuysSum": 20450,
        "infoBuysCount": 6
      }
    },
    "other_metricks": {
      "2024-12-07": {
        "drr": 2.4230048205677557,
        "krrr": 68.7511031231889,
        "ctrArk": 3.9927404718693285,
        "ctrPrk": null,
        "margin": 12.307760535958728,
        "revWithDrr": 1990.5522040000033,
        "marginWithDrr": 8.461721138232132,
        "revWithoutDrr": 2895.3022040000033
      },
      "2024-12-08": {
        "drr": 3.6670588235294113,
        "krrr": 53.039647780183245,
        "ctrArk": 4.086932750136687,
        "ctrPrk": null,
        "margin": 12.394984313725487,
        "revWithDrr": 844.9233839999997,
        "marginWithDrr": 6.574256022408961,
        "revWithoutDrr": 1593.0033839999996
      },
      "2024-12-09": {
        "drr": 1.9944982698961937,
        "krrr": 74.46128596924905,
        "ctrArk": 4.23384999479871,
        "ctrPrk": null,
        "margin": 12.396357411984404,
        "revWithDrr": 3361.189588000001,
        "marginWithDrr": 9.230487142307906,
        "revWithoutDrr": 4514.009588000001
      },
      "2024-12-10": {
        "drr": 3.7503186274509805,
        "krrr": 51.97342280096498,
        "ctrArk": 4.02562480227776,
        "ctrPrk": null,
        "margin": 12.394984313725487,
        "revWithDrr": 1655.8767679999992,
        "marginWithDrr": 6.442097603485836,
        "revWithoutDrr": 3186.0067679999993
      },
      "2024-12-11": {
        "drr": 1.4992379679144383,
        "krrr": 80.80404624844132,
        "ctrArk": 4.882478632478633,
        "ctrPrk": null,
        "margin": 12.397106374671086,
        "revWithDrr": 4720.582408000002,
        "marginWithDrr": 10.017363568457691,
        "revWithoutDrr": 5842.012408000002
      }
    },
    "order_info": {
      "stock": 99,
      "2024-12-07": {
        "buysSum": 23524.2,
        "buysCount": 6.93,
        "ordersSum": 37340,
        "ordersCount": 11,
        "addToCartCount": 68
      },
      "2024-12-08": {
        "buysSum": 12852,
        "buysCount": 3.7800000000000002,
        "ordersSum": 20400,
        "ordersCount": 6,
        "addToCartCount": 73
      },
      "2024-12-09": {
        "buysSum": 36414,
        "buysCount": 10.71,
        "ordersSum": 57800,
        "ordersCount": 17,
        "addToCartCount": 89
      },
      "2024-12-10": {
        "buysSum": 25704,
        "buysCount": 7.5600000000000005,
        "ordersSum": 40800,
        "ordersCount": 12,
        "addToCartCount": 95
      },
      "2024-12-11": {
        "buysSum": 47124,
        "buysCount": 13.86,
        "ordersSum": 74800,
        "ordersCount": 22,
        "addToCartCount": 117
      },
      "commission": 24.5,
      "pricePerOne": 3501.209944751381,
      "cart_to_order": "77.00",
      "click_to_cart": "9.67",
      "ordersCount30": 181,
      "buyoutsPercent": 63,
      "fullConversion": "7.45%",
      "addToCartPercent": 6,
      "cartToOrderPercent": 14
    },
    "tax": 0,
    "percent_buys": 63,
    "percent_mp": null,
    "price_before_spp": 3394,
    "logistics": 222,
    "storage": 1,
    "size": {
      "width": 33,
      "height": 14,
      "length": 26,
      "isValid": true,
      "literSize": 12.012
    },
    "vendor_code": "00012"
  },
  {
    "article": "281683069",
    "chat_id": 807559940,
    "wb_api_key": "eyJhbGciOiJFUzI1NiIsImtpZCI6IjIwMjQxMTE4djEiLCJ0eXAiOiJKV1QifQ.eyJlbnQiOjEsImV4cCI6MTc0OTAxMTk5NywiaWQiOiIwMTkzOGQ2NC04YmIyLTc1OGUtOTE4Ny0zNWU2OWZjM2QxZDkiLCJpaWQiOjYwMDk0NDM0LCJvaWQiOjM1NTUxMywicyI6MTA3Mzc0OTc1OCwic2lkIjoiNGYzNGU4YjAtYmFjNS00YTZmLWFkNTYtNjQ4MWJiNDljYjc0IiwidCI6ZmFsc2UsInVpZCI6NjAwOTQ0MzR9.BUTAiRGFvJ8xq9dUpWQXxMAWo4iDxmpgkeETeR6OM41GTIlZQkCjGp8A6Zfw-DffEcNzouLocPLuy9CGklhA5g",
    "notification_time": 9,
    "self_cost": 1270,
    "marketing_cost": {
      "2024-11-13": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-14": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-15": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-16": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-17": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-18": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-19": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-20": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-21": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-22": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-23": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-24": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-25": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-26": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-27": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-28": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-29": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-30": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-01": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-02": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-03": {
        "ark": {
          "ctr": 0,
          "views": 8792,
          "clicks": 315
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 1031.87
      },
      "2024-12-04": {
        "ark": {
          "ctr": 0,
          "views": 8912,
          "clicks": 297
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 1037.08
      },
      "2024-12-05": {
        "ark": {
          "ctr": 0,
          "views": 8871,
          "clicks": 282
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 1035.3600000000001
      },
      "2024-12-06": {
        "ark": {
          "ctr": 0,
          "views": 17181,
          "clicks": 543
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 1939.2400000000002
      },
      "2024-12-07": {
        "ark": {
          "ctr": 0,
          "views": 19272,
          "clicks": 721
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 2163.01
      },
      "2024-12-08": {
        "ark": {
          "ctr": 0,
          "views": 22105,
          "clicks": 703
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 2053.48
      },
      "2024-12-09": {
        "ark": {
          "ctr": 0,
          "views": 27102,
          "clicks": 743
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 2056.71
      },
      "2024-12-10": {
        "ark": {
          "ctr": 0,
          "views": 29121,
          "clicks": 826
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 2093.7200000000003
      },
      "2024-12-11": {
        "ark": {
          "ctr": 0,
          "views": 2063,
          "clicks": 89
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 50.46
      },
      "2024-12-12": {
        "ark": {
          "ctr": 0,
          "views": 26,
          "clicks": 3
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0.62
      }
    },
    "sales": {
      "2024-12-06": {
        "infoBuysSum": 4960,
        "infoBuysCount": 2
      },
      "2024-12-07": {
        "infoBuysSum": 24680,
        "infoBuysCount": 10
      },
      "2024-12-08": {
        "infoBuysSum": 7439.6900000000005,
        "infoBuysCount": 3
      },
      "2024-12-09": {
        "infoBuysSum": 21999.93,
        "infoBuysCount": 9
      },
      "2024-12-10": {
        "infoBuysSum": 22039.93,
        "infoBuysCount": 11
      },
      "2024-12-11": {
        "infoBuysSum": 17120,
        "infoBuysCount": 9
      }
    },
    "other_metricks": {
      "2024-12-07": {
        "drr": 5.214585342333655,
        "krrr": 0,
        "ctrArk": 3.741178912411789,
        "ctrPrk": null,
        "margin": 2.5927327239592737,
        "revWithDrr": -1528.4853349999994,
        "marginWithDrr": -6.245547517284211,
        "revWithoutDrr": 634.5246650000008
      },
      "2024-12-08": {
        "drr": 4.429421915444349,
        "krrr": 0,
        "ctrArk": 3.180275955666139,
        "ctrPrk": null,
        "margin": 2.5957435362161916,
        "revWithDrr": -1343.4818450000025,
        "marginWithDrr": -4.911751235723383,
        "revWithoutDrr": 709.9981549999975
      },
      "2024-12-09": {
        "drr": 6.483953341740227,
        "krrr": 0,
        "ctrArk": 2.741495092613091,
        "ctrPrk": null,
        "margin": 2.594618617350975,
        "revWithDrr": -1571.1323149999998,
        "marginWithDrr": -8.395132809327377,
        "revWithoutDrr": 485.5776850000002
      },
      "2024-12-10": {
        "drr": 4.715585585585586,
        "krrr": 0,
        "ctrArk": 2.836441056282408,
        "ctrPrk": null,
        "margin": 3.3014101771262796,
        "revWithDrr": -1228.8825900000002,
        "marginWithDrr": -4.691107764544205,
        "revWithoutDrr": 864.8374100000001
      },
      "2024-12-11": {
        "drr": 0.268962208837482,
        "krrr": 94.60652202636388,
        "ctrArk": 4.314105671352399,
        "ctrPrk": null,
        "margin": 8.452211222523474,
        "revWithDrr": 885.1144150000009,
        "marginWithDrr": 7.996343071951468,
        "revWithoutDrr": 935.574415000001
      }
    },
    "order_info": {
      "stock": 6,
      "2024-12-07": {
        "buysSum": 24473.199999999997,
        "buysCount": 10.03,
        "ordersSum": 41480,
        "ordersCount": 17,
        "addToCartCount": 99
      },
      "2024-12-08": {
        "buysSum": 27352.399999999998,
        "buysCount": 11.209999999999999,
        "ordersSum": 46360,
        "ordersCount": 19,
        "addToCartCount": 119
      },
      "2024-12-09": {
        "buysSum": 18714.8,
        "buysCount": 7.67,
        "ordersSum": 31720,
        "ordersCount": 13,
        "addToCartCount": 103
      },
      "2024-12-10": {
        "buysSum": 26196,
        "buysCount": 10.62,
        "ordersSum": 44400,
        "ordersCount": 18,
        "addToCartCount": 125
      },
      "2024-12-11": {
        "buysSum": 11068.99,
        "buysCount": 4.13,
        "ordersSum": 18761,
        "ordersCount": 7,
        "addToCartCount": 69
      },
      "commission": 24.5,
      "pricePerOne": 2485.4350282485875,
      "cart_to_order": "77.00",
      "click_to_cart": "9.67",
      "ordersCount30": 177,
      "buyoutsPercent": 59,
      "fullConversion": "7.45%",
      "addToCartPercent": 8,
      "cartToOrderPercent": 15
    },
    "tax": 0,
    "percent_buys": 59,
    "percent_mp": null,
    "price_before_spp": 2440,
    "logistics": 157,
    "storage": 0,
    "size": {
      "width": 35,
      "height": 7,
      "length": 31,
      "isValid": true,
      "literSize": 7.595
    },
    "vendor_code": "00016"
  },
  {
    "article": "252796280",
    "chat_id": 843357804,
    "wb_api_key": "eyJhbGciOiJFUzI1NiIsImtpZCI6IjIwMjQxMTE4djEiLCJ0eXAiOiJKV1QifQ.eyJlbnQiOjEsImV4cCI6MTc0OTEwMzI3MSwiaWQiOiIwMTkzOTJkNS00N2YzLTc4ZTItYmZmOS02ZDRhMDVmZGYxNmMiLCJpaWQiOjk2Mzg1NzcsIm9pZCI6MjU4Mjg1LCJzIjoxMDczNzQ5NzU4LCJzaWQiOiI0OGU2YzMwMC05YTE2LTRlMzgtYjc0Ny1iNjcyOGVkZjU2M2UiLCJ0IjpmYWxzZSwidWlkIjo5NjM4NTc3fQ.XwuFzazFGwLUg0PyborB0R8PImIKuLTWFJEfN6WQjZuQOeslx3doaeN-_pA1olMWsjeeysAP0oesZ_w4RwDJaw",
    "notification_time": 20,
    "self_cost": 2800,
    "marketing_cost": {
      "2024-11-13": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-14": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-15": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-16": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-17": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-18": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-19": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-20": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-21": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-22": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-23": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-24": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-25": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-26": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-27": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-28": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-29": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-30": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-01": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-02": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-03": {
        "ark": {
          "ctr": 0,
          "views": 111,
          "clicks": 3
        },
        "prk": {
          "ctr": 0,
          "views": 1,
          "clicks": 0
        },
        "cost": 4.340000000000001
      },
      "2024-12-04": {
        "ark": {
          "ctr": 0,
          "views": 63,
          "clicks": 7
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 2.23
      },
      "2024-12-05": {
        "ark": {
          "ctr": 0,
          "views": 50,
          "clicks": 1
        },
        "prk": {
          "ctr": 0,
          "views": 1,
          "clicks": 1
        },
        "cost": 1.97
      },
      "2024-12-06": {
        "ark": {
          "ctr": 0,
          "views": 27,
          "clicks": 5
        },
        "prk": {
          "ctr": 0,
          "views": 1,
          "clicks": 0
        },
        "cost": 1.2
      },
      "2024-12-07": {
        "ark": {
          "ctr": 0,
          "views": 25,
          "clicks": 4
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0.8500000000000001
      },
      "2024-12-08": {
        "ark": {
          "ctr": 0,
          "views": 14,
          "clicks": 1
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0.44999999999999996
      },
      "2024-12-09": {
        "ark": {
          "ctr": 0,
          "views": 19084,
          "clicks": 1952
        },
        "prk": {
          "ctr": 0,
          "views": 43,
          "clicks": 7
        },
        "cost": 2505.5199999999995
      },
      "2024-12-10": {
        "ark": {
          "ctr": 0,
          "views": 18088,
          "clicks": 1697
        },
        "prk": {
          "ctr": 0,
          "views": 4318,
          "clicks": 507
        },
        "cost": 3490.05
      },
      "2024-12-11": {
        "ark": {
          "ctr": 0,
          "views": 63705,
          "clicks": 8422
        },
        "prk": {
          "ctr": 0,
          "views": 731,
          "clicks": 113
        },
        "cost": 7263.9
      },
      "2024-12-12": {
        "ark": {
          "ctr": 0,
          "views": 3668,
          "clicks": 477
        },
        "prk": {
          "ctr": 0,
          "views": 2,
          "clicks": 0
        },
        "cost": 348.38
      }
    },
    "sales": {
      "2024-12-06": {
        "infoBuysSum": 121662,
        "infoBuysCount": 14
      },
      "2024-12-07": {
        "infoBuysSum": 62046,
        "infoBuysCount": 7
      },
      "2024-12-08": {
        "infoBuysSum": 54270,
        "infoBuysCount": 6
      },
      "2024-12-09": {
        "infoBuysSum": 64479.57,
        "infoBuysCount": 7
      },
      "2024-12-10": {
        "infoBuysSum": 43416,
        "infoBuysCount": 5
      },
      "2024-12-11": {
        "infoBuysSum": 24786,
        "infoBuysCount": 3
      }
    },
    "other_metricks": {
      "2024-12-07": {
        "drr": 0.0043724279835390956,
        "krrr": 99.98364218731159,
        "ctrArk": 16,
        "ctrPrk": null,
        "margin": 28.436070396637774,
        "revWithDrr": 5195.44376,
        "marginWithDrr": 28.43141887750635,
        "revWithoutDrr": 5196.2937600000005
      },
      "2024-12-08": {
        "drr": null,
        "krrr": 0,
        "ctrArk": 7.142857142857142,
        "ctrPrk": null,
        "margin": null,
        "revWithDrr": -0.44999999999999996,
        "marginWithDrr": null,
        "revWithoutDrr": 0
      },
      "2024-12-09": {
        "drr": 3.580132601737539,
        "krrr": 84.08452084452627,
        "ctrArk": 10.228463634458185,
        "ctrPrk": 16.27906976744186,
        "margin": 23.930487211666616,
        "revWithDrr": 13237.141439999996,
        "marginWithDrr": 20.12183550769051,
        "revWithoutDrr": 15742.661439999996
      },
      "2024-12-10": {
        "drr": 13.549382716049383,
        "krrr": 37.54276469745152,
        "ctrArk": 9.381910659000441,
        "ctrPrk": 11.74154701250579,
        "margin": 23.07857026034464,
        "revWithDrr": 2097.853439999998,
        "marginWithDrr": 8.664333328377213,
        "revWithoutDrr": 5587.903439999998
      },
      "2024-12-11": {
        "drr": 3.9680432645034416,
        "krrr": 80.47250697376593,
        "ctrArk": 13.220312377364415,
        "ctrPrk": 15.45827633378933,
        "margin": 21.617330069666735,
        "revWithDrr": 29934.423360000008,
        "marginWithDrr": 17.396007447854565,
        "revWithoutDrr": 37198.32336000001
      }
    },
    "order_info": {
      "stock": 84,
      "2024-12-07": {
        "buysSum": 18273.6,
        "buysCount": 1.88,
        "ordersSum": 19440,
        "ordersCount": 2,
        "addToCartCount": 67
      },
      "2024-12-08": {
        "buysSum": 0,
        "buysCount": 0,
        "ordersSum": 0,
        "ordersCount": 0,
        "addToCartCount": 46
      },
      "2024-12-09": {
        "buysSum": 65784.95999999999,
        "buysCount": 7.52,
        "ordersSum": 69984,
        "ordersCount": 8,
        "addToCartCount": 169
      },
      "2024-12-10": {
        "buysSum": 24212.52,
        "buysCount": 2.82,
        "ordersSum": 25758,
        "ordersCount": 3,
        "addToCartCount": 133
      },
      "2024-12-11": {
        "buysSum": 172076.4,
        "buysCount": 20.68,
        "ordersSum": 183060,
        "ordersCount": 22,
        "addToCartCount": 487
      },
      "commission": 22.5,
      "pricePerOne": 8289.162679425837,
      "cart_to_order": "94.00",
      "click_to_cart": "3.23",
      "ordersCount30": 209,
      "buyoutsPercent": 94,
      "fullConversion": "3.04%",
      "addToCartPercent": 4,
      "cartToOrderPercent": 3
    },
    "tax": 0,
    "percent_buys": 94,
    "percent_mp": null,
    "price_before_spp": 9720,
    "logistics": 901,
    "storage": 6,
    "size": {
      "width": 24,
      "height": 22,
      "length": 110,
      "isValid": true,
      "literSize": 58.08
    },
    "vendor_code": "Королева 180"
  },
  {
    "article": "182777948",
    "chat_id": 1297873019,
    "wb_api_key": "eyJhbGciOiJFUzI1NiIsImtpZCI6IjIwMjQxMTE4djEiLCJ0eXAiOiJKV1QifQ.eyJlbnQiOjEsImV4cCI6MTc0OTAwODQyNywiaWQiOiIwMTkzOGQyZS0xMmM3LTdkMjctOGU4Yy1mYjg4NzEzNzZmOWUiLCJpaWQiOjI0NjAzMjk5LCJvaWQiOjQzNzk2OSwicyI6MTA3Mzc0OTc1OCwic2lkIjoiMDNmNWY1ZDEtMjRjMy00NTlmLThhNmItNmVkNTBlMDEyMTJhIiwidCI6ZmFsc2UsInVpZCI6MjQ2MDMyOTl9.Cp6R4nwwUlmg2WzcZznmsFz-RUk1Lv1QQEFlGvBAJKbW0Us6Jpbd8_MWSvI7_sZCp0lNN71nbFzoXrAKVPJPJw",
    "notification_time": 8,
    "self_cost": 95,
    "marketing_cost": {
      "2024-11-13": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-14": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-15": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-16": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-17": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-18": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-19": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-20": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-21": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-22": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-23": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-24": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-25": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-26": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-27": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-28": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-29": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-30": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-01": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-02": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-03": {
        "ark": {
          "ctr": 0,
          "views": 4684,
          "clicks": 259
        },
        "prk": {
          "ctr": 0,
          "views": 1383,
          "clicks": 178
        },
        "cost": 1756.71
      },
      "2024-12-04": {
        "ark": {
          "ctr": 0,
          "views": 4333,
          "clicks": 262
        },
        "prk": {
          "ctr": 0,
          "views": 792,
          "clicks": 79
        },
        "cost": 1465.73
      },
      "2024-12-05": {
        "ark": {
          "ctr": 0,
          "views": 2577,
          "clicks": 152
        },
        "prk": {
          "ctr": 0,
          "views": 771,
          "clicks": 100
        },
        "cost": 1002.63
      },
      "2024-12-06": {
        "ark": {
          "ctr": 0,
          "views": 3201,
          "clicks": 222
        },
        "prk": {
          "ctr": 0,
          "views": 858,
          "clicks": 93
        },
        "cost": 1291.2399999999998
      },
      "2024-12-07": {
        "ark": {
          "ctr": 0,
          "views": 1693,
          "clicks": 129
        },
        "prk": {
          "ctr": 0,
          "views": 434,
          "clicks": 42
        },
        "cost": 691.72
      },
      "2024-12-08": {
        "ark": {
          "ctr": 0,
          "views": 2376,
          "clicks": 138
        },
        "prk": {
          "ctr": 0,
          "views": 1258,
          "clicks": 146
        },
        "cost": 1417.16
      },
      "2024-12-09": {
        "ark": {
          "ctr": 0,
          "views": 2765,
          "clicks": 169
        },
        "prk": {
          "ctr": 0,
          "views": 1433,
          "clicks": 144
        },
        "cost": 1539.13
      },
      "2024-12-10": {
        "ark": {
          "ctr": 0,
          "views": 1680,
          "clicks": 74
        },
        "prk": {
          "ctr": 0,
          "views": 1385,
          "clicks": 174
        },
        "cost": 661.1400000000001
      },
      "2024-12-11": {
        "ark": {
          "ctr": 0,
          "views": 2281,
          "clicks": 117
        },
        "prk": {
          "ctr": 0,
          "views": 1565,
          "clicks": 201
        },
        "cost": 1306.13
      },
      "2024-12-12": {
        "ark": {
          "ctr": 0,
          "views": 424,
          "clicks": 13
        },
        "prk": {
          "ctr": 0,
          "views": 236,
          "clicks": 30
        },
        "cost": 224.18
      }
    },
    "sales": {
      "2024-12-06": {
        "infoBuysSum": 13146,
        "infoBuysCount": 44
      },
      "2024-12-07": {
        "infoBuysSum": 11683,
        "infoBuysCount": 39
      },
      "2024-12-08": {
        "infoBuysSum": 12845,
        "infoBuysCount": 43
      },
      "2024-12-09": {
        "infoBuysSum": 10353,
        "infoBuysCount": 35
      },
      "2024-12-10": {
        "infoBuysSum": 9485,
        "infoBuysCount": 32
      },
      "2024-12-11": {
        "infoBuysSum": 11900,
        "infoBuysCount": 40
      },
      "2024-12-12": {
        "infoBuysSum": 294,
        "infoBuysCount": 1
      }
    },
    "other_metricks": {
      "2024-12-07": {
        "drr": 5.881972789115646,
        "krrr": 62.286658902860836,
        "ctrArk": 7.619610159480213,
        "ctrPrk": 9.67741935483871,
        "margin": 16.592053842813723,
        "revWithDrr": 1142.432,
        "marginWithDrr": 10.334635982052395,
        "revWithoutDrr": 1834.152
      },
      "2024-12-08": {
        "drr": 10.70039263062519,
        "krrr": 31.65052154844194,
        "ctrArk": 5.808080808080808,
        "ctrPrk": 11.605723370429253,
        "margin": 16.6546938959111,
        "revWithDrr": 656.2427999999979,
        "marginWithDrr": 5.271297480352388,
        "revWithoutDrr": 2073.402799999998
      },
      "2024-12-09": {
        "drr": 9.003919503919505,
        "krrr": 45.894913243722144,
        "ctrArk": 6.112115732368896,
        "ctrPrk": 10.048848569434753,
        "margin": 17.70376566121247,
        "revWithDrr": 1305.5747999999994,
        "marginWithDrr": 8.125127891085334,
        "revWithoutDrr": 2844.7047999999995
      },
      "2024-12-10": {
        "drr": 5.235508394044981,
        "krrr": 68.78979520622131,
        "ctrArk": 4.404761904761905,
        "ctrPrk": 12.56317689530686,
        "margin": 17.84573288672926,
        "revWithDrr": 1457.2056000000005,
        "marginWithDrr": 12.276043105830343,
        "revWithoutDrr": 2118.3456000000006
      },
      "2024-12-11": {
        "drr": 8.039207238259372,
        "krrr": 52.17630001061095,
        "ctrArk": 5.129329241560719,
        "ctrPrk": 12.843450479233226,
        "margin": 17.883074976853333,
        "revWithDrr": 1425.005399999999,
        "marginWithDrr": 9.330726851045492,
        "revWithoutDrr": 2731.135399999999
      }
    },
    "order_info": {
      "stock": 920,
      "2024-12-07": {
        "buysSum": 11054.4,
        "buysCount": 37.599999999999994,
        "ordersSum": 11760,
        "ordersCount": 40,
        "addToCartCount": 81
      },
      "2024-12-08": {
        "buysSum": 12449.359999999999,
        "buysCount": 42.3,
        "ordersSum": 13244,
        "ordersCount": 45,
        "addToCartCount": 108
      },
      "2024-12-09": {
        "buysSum": 16068.359999999999,
        "buysCount": 53.58,
        "ordersSum": 17094,
        "ordersCount": 57,
        "addToCartCount": 104
      },
      "2024-12-10": {
        "buysSum": 11870.32,
        "buysCount": 39.48,
        "ordersSum": 12628,
        "ordersCount": 42,
        "addToCartCount": 90
      },
      "2024-12-11": {
        "buysSum": 15272.179999999998,
        "buysCount": 50.76,
        "ordersSum": 16247,
        "ordersCount": 54,
        "addToCartCount": 123
      },
      "commission": 19.5,
      "pricePerOne": 300.87279529663283,
      "cart_to_order": "96.00",
      "click_to_cart": "23.95",
      "ordersCount30": 1871,
      "buyoutsPercent": 95,
      "fullConversion": "22.99%",
      "addToCartPercent": 20,
      "cartToOrderPercent": 42
    },
    "tax": 0,
    "percent_buys": 94,
    "percent_mp": null,
    "price_before_spp": 294,
    "logistics": 60,
    "storage": 0,
    "size": {
      "width": 9,
      "height": 3,
      "length": 14,
      "isValid": true,
      "literSize": 0.378
    },
    "vendor_code": "125886"
  },
  {
    "article": "233659263",
    "chat_id": 501660146,
    "wb_api_key": "eyJhbGciOiJFUzI1NiIsImtpZCI6IjIwMjQxMTE4djEiLCJ0eXAiOiJKV1QifQ.eyJlbnQiOjEsImV4cCI6MTc0OTE1NTIyOSwiaWQiOiIwMTkzOTVlZS0xN2IxLTc1YzUtOWEyNC01N2UwOWY5N2M4MjkiLCJpaWQiOjYwMDI0OTczLCJvaWQiOjUyOTk3NSwicyI6MTA3Mzc0OTc1OCwic2lkIjoiMWIyYmJmODYtMzE0ZC00OWIzLWE2ZGQtYmZkOTUxZWEwYWE0IiwidCI6ZmFsc2UsInVpZCI6NjAwMjQ5NzN9.Xg12YoKgPh1o-Qvt6XDK57lWsBy4TS9ZaEjoVnkEibCq6b62gpVXHJMwIhrHnrkkT-c-exukmrtOZheILeBdiQ",
    "notification_time": 5,
    "self_cost": 429,
    "marketing_cost": {
      "2024-11-13": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-14": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-15": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-16": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-17": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-18": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-19": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-20": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-21": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-22": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-23": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-24": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-25": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-26": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-27": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-28": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-29": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-30": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-01": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-02": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-03": {
        "ark": {
          "ctr": 0,
          "views": 14283,
          "clicks": 859
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 978.22
      },
      "2024-12-04": {
        "ark": {
          "ctr": 0,
          "views": 12405,
          "clicks": 740
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 872.22
      },
      "2024-12-05": {
        "ark": {
          "ctr": 0,
          "views": 12303,
          "clicks": 617
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 919.44
      },
      "2024-12-06": {
        "ark": {
          "ctr": 0,
          "views": 11485,
          "clicks": 565
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 844.27
      },
      "2024-12-07": {
        "ark": {
          "ctr": 0,
          "views": 13537,
          "clicks": 660
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 964.24
      },
      "2024-12-08": {
        "ark": {
          "ctr": 0,
          "views": 13879,
          "clicks": 669
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 1013.6500000000001
      },
      "2024-12-09": {
        "ark": {
          "ctr": 0,
          "views": 13186,
          "clicks": 470
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 1331.93
      },
      "2024-12-10": {
        "ark": {
          "ctr": 0,
          "views": 8200,
          "clicks": 324
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 669.65
      },
      "2024-12-11": {
        "ark": {
          "ctr": 0,
          "views": 10120,
          "clicks": 488
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 963.55
      },
      "2024-12-12": {
        "ark": {
          "ctr": 0,
          "views": 44,
          "clicks": 6
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 2.3099999999999996
      }
    },
    "sales": {
      "2024-12-06": {
        "infoBuysSum": 4876.639999999999,
        "infoBuysCount": 5
      },
      "2024-12-07": {
        "infoBuysSum": 8871.45,
        "infoBuysCount": 9
      },
      "2024-12-08": {
        "infoBuysSum": 7672.49,
        "infoBuysCount": 8
      },
      "2024-12-09": {
        "infoBuysSum": 5834,
        "infoBuysCount": 6
      },
      "2024-12-10": {
        "infoBuysSum": 10669.17,
        "infoBuysCount": 11
      },
      "2024-12-11": {
        "infoBuysSum": 8631.05,
        "infoBuysCount": 9
      }
    },
    "other_metricks": {
      "2024-12-07": {
        "drr": 7.734338654046684,
        "krrr": 13.513645387648618,
        "ctrArk": 4.875526335229371,
        "ctrPrk": null,
        "margin": 13.549761673849273,
        "revWithDrr": 150.66420000000085,
        "marginWithDrr": 1.8310667434755128,
        "revWithoutDrr": 1114.9042000000009
      },
      "2024-12-08": {
        "drr": 11.744293824585798,
        "krrr": 0,
        "ctrArk": 4.820232005187694,
        "ctrPrk": null,
        "margin": 13.534907644396704,
        "revWithDrr": -242.63939999999957,
        "marginWithDrr": -4.259476938309048,
        "revWithoutDrr": 771.0106000000005
      },
      "2024-12-09": {
        "drr": 13.88873826903024,
        "krrr": 0,
        "ctrArk": 3.564386470499014,
        "ctrPrk": null,
        "margin": 13.543685025436854,
        "revWithDrr": -474.6959999999997,
        "marginWithDrr": -7.499857806427144,
        "revWithoutDrr": 857.2340000000004
      },
      "2024-12-10": {
        "drr": 6.347393364928909,
        "krrr": 28.982695809019205,
        "ctrArk": 3.951219512195122,
        "ctrPrk": null,
        "margin": 13.542139882234652,
        "revWithDrr": 273.2891999999989,
        "marginWithDrr": 3.924877208099941,
        "revWithoutDrr": 942.9391999999989
      },
      "2024-12-11": {
        "drr": 11.163828061638279,
        "krrr": 0,
        "ctrArk": 4.822134387351778,
        "ctrPrk": null,
        "margin": 13.534907644396704,
        "revWithDrr": -192.53939999999943,
        "marginWithDrr": -3.379983358085538,
        "revWithoutDrr": 771.0106000000005
      }
    },
    "order_info": {
      "stock": 261,
      "2024-12-07": {
        "buysSum": 8228.220000000001,
        "buysCount": 8.58,
        "ordersSum": 12467,
        "ordersCount": 13,
        "addToCartCount": 43
      },
      "2024-12-08": {
        "buysSum": 5696.46,
        "buysCount": 5.94,
        "ordersSum": 8631,
        "ordersCount": 9,
        "addToCartCount": 39
      },
      "2024-12-09": {
        "buysSum": 6329.400000000001,
        "buysCount": 6.6000000000000005,
        "ordersSum": 9590,
        "ordersCount": 10,
        "addToCartCount": 30
      },
      "2024-12-10": {
        "buysSum": 6963,
        "buysCount": 7.260000000000001,
        "ordersSum": 10550,
        "ordersCount": 11,
        "addToCartCount": 30
      },
      "2024-12-11": {
        "buysSum": 5696.46,
        "buysCount": 5.94,
        "ordersSum": 8631,
        "ordersCount": 9,
        "addToCartCount": 28
      },
      "commission": 24.5,
      "pricePerOne": 990.0521042084168,
      "cart_to_order": "67.00",
      "click_to_cart": "16.82",
      "ordersCount30": 499,
      "buyoutsPercent": 66,
      "fullConversion": "11.27%",
      "addToCartPercent": 5,
      "cartToOrderPercent": 33
    },
    "tax": 0,
    "percent_buys": 66,
    "percent_mp": null,
    "price_before_spp": 959,
    "logistics": 72,
    "storage": 0,
    "size": {
      "width": 18,
      "height": 4,
      "length": 25,
      "isValid": true,
      "literSize": 1.8
    },
    "vendor_code": "БельеЧерное01"
  },
  {
    "article": "270069630",
    "chat_id": 501660146,
    "wb_api_key": "eyJhbGciOiJFUzI1NiIsImtpZCI6IjIwMjQxMTE4djEiLCJ0eXAiOiJKV1QifQ.eyJlbnQiOjEsImV4cCI6MTc0OTE1NTIyOSwiaWQiOiIwMTkzOTVlZS0xN2IxLTc1YzUtOWEyNC01N2UwOWY5N2M4MjkiLCJpaWQiOjYwMDI0OTczLCJvaWQiOjUyOTk3NSwicyI6MTA3Mzc0OTc1OCwic2lkIjoiMWIyYmJmODYtMzE0ZC00OWIzLWE2ZGQtYmZkOTUxZWEwYWE0IiwidCI6ZmFsc2UsInVpZCI6NjAwMjQ5NzN9.Xg12YoKgPh1o-Qvt6XDK57lWsBy4TS9ZaEjoVnkEibCq6b62gpVXHJMwIhrHnrkkT-c-exukmrtOZheILeBdiQ",
    "notification_time": 5,
    "self_cost": 980,
    "marketing_cost": {
      "2024-11-13": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-14": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-15": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-16": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-17": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-18": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-19": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-20": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-21": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-22": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-23": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-24": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-25": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-26": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-27": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-28": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-29": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-30": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-01": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-02": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-03": {
        "ark": {
          "ctr": 0,
          "views": 27616,
          "clicks": 1003
        },
        "prk": {
          "ctr": 0,
          "views": 4876,
          "clicks": 323
        },
        "cost": 5820.92
      },
      "2024-12-04": {
        "ark": {
          "ctr": 0,
          "views": 25166,
          "clicks": 808
        },
        "prk": {
          "ctr": 0,
          "views": 5192,
          "clicks": 298
        },
        "cost": 6235.1
      },
      "2024-12-05": {
        "ark": {
          "ctr": 0,
          "views": 24832,
          "clicks": 779
        },
        "prk": {
          "ctr": 0,
          "views": 5061,
          "clicks": 290
        },
        "cost": 5913.96
      },
      "2024-12-06": {
        "ark": {
          "ctr": 0,
          "views": 16175,
          "clicks": 572
        },
        "prk": {
          "ctr": 0,
          "views": 2951,
          "clicks": 194
        },
        "cost": 2948.26
      },
      "2024-12-07": {
        "ark": {
          "ctr": 0,
          "views": 23231,
          "clicks": 860
        },
        "prk": {
          "ctr": 0,
          "views": 4768,
          "clicks": 326
        },
        "cost": 4637.23
      },
      "2024-12-08": {
        "ark": {
          "ctr": 0,
          "views": 30922,
          "clicks": 1084
        },
        "prk": {
          "ctr": 0,
          "views": 3077,
          "clicks": 188
        },
        "cost": 3587.19
      },
      "2024-12-09": {
        "ark": {
          "ctr": 0,
          "views": 26520,
          "clicks": 905
        },
        "prk": {
          "ctr": 0,
          "views": 3018,
          "clicks": 198
        },
        "cost": 3317.59
      },
      "2024-12-10": {
        "ark": {
          "ctr": 0,
          "views": 9403,
          "clicks": 412
        },
        "prk": {
          "ctr": 0,
          "views": 2986,
          "clicks": 174
        },
        "cost": 3558.05
      },
      "2024-12-11": {
        "ark": {
          "ctr": 0,
          "views": 9546,
          "clicks": 403
        },
        "prk": {
          "ctr": 0,
          "views": 2968,
          "clicks": 200
        },
        "cost": 3347.42
      },
      "2024-12-12": {
        "ark": {
          "ctr": 0,
          "views": 99,
          "clicks": 4
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 5.49
      }
    },
    "sales": {
      "2024-12-06": {
        "infoBuysSum": 41612.6,
        "infoBuysCount": 11
      },
      "2024-12-07": {
        "infoBuysSum": 79442,
        "infoBuysCount": 23
      },
      "2024-12-08": {
        "infoBuysSum": 56745,
        "infoBuysCount": 15
      },
      "2024-12-09": {
        "infoBuysSum": 37830,
        "infoBuysCount": 12
      },
      "2024-12-10": {
        "infoBuysSum": 26481,
        "infoBuysCount": 9
      },
      "2024-12-11": {
        "infoBuysSum": 47282.75,
        "infoBuysCount": 15
      }
    },
    "other_metricks": {
      "2024-12-07": {
        "drr": 4.903230240549828,
        "krrr": 64.49614260189942,
        "ctrArk": 3.7019499806293314,
        "ctrPrk": 6.837248322147651,
        "margin": 33.68394034931626,
        "revWithDrr": 8423.9705,
        "marginWithDrr": 21.724842201633752,
        "revWithoutDrr": 13061.200499999999
      },
      "2024-12-08": {
        "drr": 3.058863155740501,
        "krrr": 77.85202485105562,
        "ctrArk": 3.5055947222042563,
        "ctrPrk": 6.109847253818654,
        "margin": 33.68543531901654,
        "revWithDrr": 12609.27932,
        "marginWithDrr": 26.22479347574702,
        "revWithoutDrr": 16196.46932
      },
      "2024-12-09": {
        "drr": 3.179991756688106,
        "krrr": 74.34460598316122,
        "ctrArk": 3.412518853695324,
        "ctrPrk": 6.560636182902585,
        "margin": 30.231761204860796,
        "revWithDrr": 9613.7647,
        "marginWithDrr": 22.475683749523952,
        "revWithoutDrr": 12931.3547
      },
      "2024-12-10": {
        "drr": 2.4434303687069505,
        "krrr": 80.20288160157422,
        "ctrArk": 4.381580346697862,
        "ctrPrk": 5.827193569993302,
        "margin": 30.10330162804296,
        "revWithDrr": 14414.51514,
        "marginWithDrr": 24.143715362904057,
        "revWithoutDrr": 17972.56514
      },
      "2024-12-11": {
        "drr": 2.4756643222175385,
        "krrr": 79.94069804891848,
        "ctrArk": 4.221663523989106,
        "ctrPrk": 6.738544474393531,
        "margin": 30.101773624379085,
        "revWithDrr": 13340.199579999991,
        "marginWithDrr": 24.06356796043387,
        "revWithoutDrr": 16687.61957999999
      }
    },
    "order_info": {
      "stock": 162,
      "2024-12-07": {
        "buysSum": 38775.75,
        "buysCount": 10.25,
        "ordersSum": 94575,
        "ordersCount": 25,
        "addToCartCount": 197
      },
      "2024-12-08": {
        "buysSum": 48081.52,
        "buysCount": 12.709999999999999,
        "ordersSum": 117272,
        "ordersCount": 31,
        "addToCartCount": 155
      },
      "2024-12-09": {
        "buysSum": 42774.07,
        "buysCount": 12.299999999999999,
        "ordersSum": 104327,
        "ordersCount": 30,
        "addToCartCount": 184
      },
      "2024-12-10": {
        "buysSum": 59702.969999999994,
        "buysCount": 17.22,
        "ordersSum": 145617,
        "ordersCount": 42,
        "addToCartCount": 157
      },
      "2024-12-11": {
        "buysSum": 55437.329999999994,
        "buysCount": 15.989999999999998,
        "ordersSum": 135213,
        "ordersCount": 39,
        "addToCartCount": 140
      },
      "commission": 24.5,
      "pricePerOne": 3803.9382819015846,
      "cart_to_order": "50.00",
      "click_to_cart": "15.61",
      "ordersCount30": 1199,
      "buyoutsPercent": 41,
      "fullConversion": "7.80%",
      "addToCartPercent": 7,
      "cartToOrderPercent": 19
    },
    "tax": 0,
    "percent_buys": 41,
    "percent_mp": null,
    "price_before_spp": 3783,
    "logistics": 167,
    "storage": 0,
    "size": {
      "width": 30,
      "height": 12,
      "length": 23,
      "isValid": true,
      "literSize": 8.28
    },
    "vendor_code": "КроссовкиСерыеЗима01"
  },
  {
    "article": "203733096",
    "chat_id": 1297873019,
    "wb_api_key": "eyJhbGciOiJFUzI1NiIsImtpZCI6IjIwMjQxMTE4djEiLCJ0eXAiOiJKV1QifQ.eyJlbnQiOjEsImV4cCI6MTc0OTAwODQyNywiaWQiOiIwMTkzOGQyZS0xMmM3LTdkMjctOGU4Yy1mYjg4NzEzNzZmOWUiLCJpaWQiOjI0NjAzMjk5LCJvaWQiOjQzNzk2OSwicyI6MTA3Mzc0OTc1OCwic2lkIjoiMDNmNWY1ZDEtMjRjMy00NTlmLThhNmItNmVkNTBlMDEyMTJhIiwidCI6ZmFsc2UsInVpZCI6MjQ2MDMyOTl9.Cp6R4nwwUlmg2WzcZznmsFz-RUk1Lv1QQEFlGvBAJKbW0Us6Jpbd8_MWSvI7_sZCp0lNN71nbFzoXrAKVPJPJw",
    "notification_time": 8,
    "self_cost": 126,
    "marketing_cost": {
      "2024-11-13": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-14": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-15": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-16": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-17": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-18": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-19": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-20": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-21": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-22": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-23": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-24": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-25": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-26": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-27": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-28": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-29": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-30": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-01": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-02": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-03": {
        "ark": {
          "ctr": 0,
          "views": 3476,
          "clicks": 87
        },
        "prk": {
          "ctr": 0,
          "views": 1388,
          "clicks": 17
        },
        "cost": 1245.6
      },
      "2024-12-04": {
        "ark": {
          "ctr": 0,
          "views": 2928,
          "clicks": 101
        },
        "prk": {
          "ctr": 0,
          "views": 1317,
          "clicks": 42
        },
        "cost": 1293.95
      },
      "2024-12-05": {
        "ark": {
          "ctr": 0,
          "views": 3639,
          "clicks": 97
        },
        "prk": {
          "ctr": 0,
          "views": 568,
          "clicks": 22
        },
        "cost": 1187.87
      },
      "2024-12-06": {
        "ark": {
          "ctr": 0,
          "views": 2653,
          "clicks": 78
        },
        "prk": {
          "ctr": 0,
          "views": 795,
          "clicks": 26
        },
        "cost": 1430.95
      },
      "2024-12-07": {
        "ark": {
          "ctr": 0,
          "views": 2901,
          "clicks": 88
        },
        "prk": {
          "ctr": 0,
          "views": 945,
          "clicks": 19
        },
        "cost": 1220.78
      },
      "2024-12-08": {
        "ark": {
          "ctr": 0,
          "views": 3023,
          "clicks": 116
        },
        "prk": {
          "ctr": 0,
          "views": 818,
          "clicks": 27
        },
        "cost": 1374.73
      },
      "2024-12-09": {
        "ark": {
          "ctr": 0,
          "views": 2409,
          "clicks": 84
        },
        "prk": {
          "ctr": 0,
          "views": 693,
          "clicks": 18
        },
        "cost": 1283.95
      },
      "2024-12-10": {
        "ark": {
          "ctr": 0,
          "views": 3268,
          "clicks": 99
        },
        "prk": {
          "ctr": 0,
          "views": 674,
          "clicks": 26
        },
        "cost": 1355.42
      },
      "2024-12-11": {
        "ark": {
          "ctr": 0,
          "views": 4989,
          "clicks": 216
        },
        "prk": {
          "ctr": 0,
          "views": 30,
          "clicks": 2
        },
        "cost": 2068.27
      },
      "2024-12-12": {
        "ark": {
          "ctr": 0,
          "views": 428,
          "clicks": 12
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 165.48
      }
    },
    "sales": {
      "2024-12-05": {
        "infoBuysSum": 450,
        "infoBuysCount": 1
      },
      "2024-12-06": {
        "infoBuysSum": 11629,
        "infoBuysCount": 26
      },
      "2024-12-07": {
        "infoBuysSum": 9841.21,
        "infoBuysCount": 22
      },
      "2024-12-08": {
        "infoBuysSum": 11218,
        "infoBuysCount": 25
      },
      "2024-12-09": {
        "infoBuysSum": 7173.53,
        "infoBuysCount": 16
      },
      "2024-12-10": {
        "infoBuysSum": 8966.59,
        "infoBuysCount": 20
      },
      "2024-12-11": {
        "infoBuysSum": 14767.72,
        "infoBuysCount": 33
      },
      "2024-12-12": {
        "infoBuysSum": 450,
        "infoBuysCount": 1
      }
    },
    "other_metricks": {
      "2024-12-07": {
        "drr": 10.0508809484604,
        "krrr": 64.85593460793689,
        "ctrArk": 3.0334367459496727,
        "ctrPrk": 2.0105820105820107,
        "margin": 29.7907129919315,
        "revWithDrr": 2252.8648000000003,
        "marginWithDrr": 19.321045337285252,
        "revWithoutDrr": 3473.6448
      },
      "2024-12-08": {
        "drr": 14.567447281975204,
        "krrr": 48.985703394872246,
        "ctrArk": 3.8372477671187557,
        "ctrPrk": 3.3007334963325183,
        "margin": 29.74543463671364,
        "revWithDrr": 1320.0636,
        "marginWithDrr": 14.57101038465614,
        "revWithoutDrr": 2694.7936
      },
      "2024-12-09": {
        "drr": 14.36185682326622,
        "krrr": 49.29972453357089,
        "ctrArk": 3.4869240348692405,
        "ctrPrk": 2.5974025974025974,
        "margin": 29.507270693512304,
        "revWithDrr": 1248.4819999999997,
        "marginWithDrr": 14.547003169276657,
        "revWithoutDrr": 2532.432
      },
      "2024-12-10": {
        "drr": 12.582807278128483,
        "krrr": 46.01523945715565,
        "ctrArk": 3.02937576499388,
        "ctrPrk": 3.857566765578635,
        "margin": 24.279242480505008,
        "revWithDrr": 1155.3255999999992,
        "marginWithDrr": 11.17215156578784,
        "revWithoutDrr": 2510.7455999999993
      },
      "2024-12-11": {
        "drr": 15.40610800744879,
        "krrr": 23.128185229455454,
        "ctrArk": 4.329524954900782,
        "ctrPrk": 6.666666666666667,
        "margin": 20.87635009310987,
        "revWithDrr": 622.2739999999999,
        "marginWithDrr": 4.828320918684046,
        "revWithoutDrr": 2690.544
      }
    },
    "order_info": {
      "stock": 635,
      "2024-12-07": {
        "buysSum": 11660.16,
        "buysCount": 25.919999999999998,
        "ordersSum": 12146,
        "ordersCount": 27,
        "addToCartCount": 59
      },
      "2024-12-08": {
        "buysSum": 9059.52,
        "buysCount": 20.16,
        "ordersSum": 9437,
        "ordersCount": 21,
        "addToCartCount": 67
      },
      "2024-12-09": {
        "buysSum": 8582.4,
        "buysCount": 19.2,
        "ordersSum": 8940,
        "ordersCount": 20,
        "addToCartCount": 47
      },
      "2024-12-10": {
        "buysSum": 10341.119999999999,
        "buysCount": 25.919999999999998,
        "ordersSum": 10772,
        "ordersCount": 27,
        "addToCartCount": 72
      },
      "2024-12-11": {
        "buysSum": 12888,
        "buysCount": 34.56,
        "ordersSum": 13425,
        "ordersCount": 36,
        "addToCartCount": 97
      },
      "commission": 19.5,
      "pricePerOne": 434.6550680786687,
      "cart_to_order": "97.00",
      "click_to_cart": "22.14",
      "ordersCount30": 1322,
      "buyoutsPercent": 95,
      "fullConversion": "21.48%",
      "addToCartPercent": 28,
      "cartToOrderPercent": 40
    },
    "tax": 0,
    "percent_buys": 96,
    "percent_mp": null,
    "price_before_spp": 449,
    "logistics": 60,
    "storage": 0,
    "size": {
      "width": 13,
      "height": 4,
      "length": 12,
      "isValid": true,
      "literSize": 0.624
    },
    "vendor_code": "125887-3"
  },
  {
    "article": "206869777",
    "chat_id": 5105827939,
    "wb_api_key": "eyJhbGciOiJFUzI1NiIsImtpZCI6IjIwMjQxMTE4djEiLCJ0eXAiOiJKV1QifQ.eyJlbnQiOjEsImV4cCI6MTc0OTE1MDk2MywiaWQiOiIwMTkzOTVhZC0wMWU1LTdhYTMtYTllYy1kNWFhMTBiMzRjZWUiLCJpaWQiOjY5NjE2NjAxLCJvaWQiOjQ0MDA4MCwicyI6MTA3Mzc0OTc1OCwic2lkIjoiOGZiNTA1ZGMtZmE5My00YTI1LWIyZDItZjk2NmVmOWVjM2M1IiwidCI6ZmFsc2UsInVpZCI6Njk2MTY2MDF9.8xJ81Uqdczq63lBXHW9gQ1oFitttLOm-PidIoDZrxPDt4xC7SPe-pbk56_3Iofrxl4ZZikh29FRK2zuLWTMOVw",
    "notification_time": 9,
    "self_cost": 522,
    "marketing_cost": {
      "2024-11-13": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-14": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-15": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-16": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-17": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-18": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-19": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-20": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-21": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-22": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-23": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-24": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-25": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-26": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-27": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-28": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-29": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-30": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-01": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-02": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-03": {
        "ark": {
          "ctr": 0,
          "views": 3427,
          "clicks": 90
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 746.04
      },
      "2024-12-04": {
        "ark": {
          "ctr": 0,
          "views": 335,
          "clicks": 12
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 80.82000000000001
      },
      "2024-12-05": {
        "ark": {
          "ctr": 0,
          "views": 21,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 3.67
      },
      "2024-12-06": {
        "ark": {
          "ctr": 0,
          "views": 3916,
          "clicks": 144
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 371.92
      },
      "2024-12-07": {
        "ark": {
          "ctr": 0,
          "views": 6174,
          "clicks": 243
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 578.87
      },
      "2024-12-08": {
        "ark": {
          "ctr": 0,
          "views": 646,
          "clicks": 25
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 30.32
      },
      "2024-12-09": {
        "ark": {
          "ctr": 0,
          "views": 718,
          "clicks": 28
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 32.58
      },
      "2024-12-10": {
        "ark": {
          "ctr": 0,
          "views": 4303,
          "clicks": 208
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 961.3900000000001
      },
      "2024-12-11": {
        "ark": {
          "ctr": 0,
          "views": 3132,
          "clicks": 172
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 622.65
      },
      "2024-12-12": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      }
    },
    "sales": {
      "2024-12-06": {
        "infoBuysSum": 4172,
        "infoBuysCount": 4
      },
      "2024-12-07": {
        "infoBuysSum": 3361,
        "infoBuysCount": 3
      },
      "2024-12-08": {
        "infoBuysSum": 5215,
        "infoBuysCount": 5
      },
      "2024-12-09": {
        "infoBuysSum": 7300.8099999999995,
        "infoBuysCount": 7
      },
      "2024-12-10": {
        "infoBuysSum": 4172,
        "infoBuysCount": 6
      },
      "2024-12-11": {
        "infoBuysSum": 17847,
        "infoBuysCount": 17
      }
    },
    "other_metricks": {
      "2024-12-07": {
        "drr": 2.055646306818182,
        "krrr": 0,
        "ctrArk": 3.9358600583090384,
        "ctrPrk": null,
        "margin": 1.862793124501595,
        "revWithDrr": -279.86935000000005,
        "marginWithDrr": -1.7436039050039875,
        "revWithoutDrr": 299.00064999999995
      },
      "2024-12-08": {
        "drr": 0.18168744007670184,
        "krrr": 82.87570654654075,
        "ctrArk": 3.8699690402476783,
        "ctrPrk": null,
        "margin": 1.861390052312006,
        "revWithDrr": 146.73840000000172,
        "marginWithDrr": 1.5426401574405995,
        "revWithoutDrr": 177.0584000000017
      },
      "2024-12-09": {
        "drr": 0.2839710624945524,
        "krrr": 73.15262583882588,
        "ctrArk": 3.8997214484679668,
        "ctrPrk": null,
        "margin": 1.8556557654049677,
        "revWithDrr": 88.77264999999981,
        "marginWithDrr": 1.357460918923297,
        "revWithoutDrr": 121.35264999999981
      },
      "2024-12-10": {
        "drr": 2.094896714024231,
        "krrr": 0,
        "ctrArk": 4.833836858006042,
        "ctrPrk": null,
        "margin": 1.863301481280991,
        "revWithDrr": -473.97940000000085,
        "marginWithDrr": -1.811955911743976,
        "revWithoutDrr": 487.41059999999925
      },
      "2024-12-11": {
        "drr": 1.9899328859060403,
        "krrr": 0,
        "ctrArk": 5.491698595146871,
        "ctrPrk": null,
        "margin": 1.862791766889272,
        "revWithDrr": -290.4154999999977,
        "marginWithDrr": -1.628318559261676,
        "revWithoutDrr": 332.2345000000023
      }
    },
    "order_info": {
      "stock": 569,
      "2024-12-07": {
        "buysSum": 16051.199999999999,
        "buysCount": 15.389999999999999,
        "ordersSum": 28160,
        "ordersCount": 27,
        "addToCartCount": 74
      },
      "2024-12-08": {
        "buysSum": 9512.16,
        "buysCount": 9.12,
        "ordersSum": 16688,
        "ordersCount": 16,
        "addToCartCount": 35
      },
      "2024-12-09": {
        "buysSum": 6539.61,
        "buysCount": 6.27,
        "ordersSum": 11473,
        "ordersCount": 11,
        "addToCartCount": 27
      },
      "2024-12-10": {
        "buysSum": 26158.44,
        "buysCount": 25.08,
        "ordersSum": 45892,
        "ordersCount": 44,
        "addToCartCount": 108
      },
      "2024-12-11": {
        "buysSum": 17835.3,
        "buysCount": 17.099999999999998,
        "ordersSum": 31290,
        "ordersCount": 30,
        "addToCartCount": 77
      },
      "commission": 24.5,
      "pricePerOne": 1109.3291666666667,
      "cart_to_order": "71.00",
      "click_to_cart": "14.99",
      "ordersCount30": 240,
      "buyoutsPercent": 57,
      "fullConversion": "10.64%",
      "addToCartPercent": 8,
      "cartToOrderPercent": 36
    },
    "tax": 0,
    "percent_buys": 57,
    "percent_mp": null,
    "price_before_spp": 1042,
    "logistics": 92,
    "storage": 0,
    "size": {
      "width": 30,
      "height": 3,
      "length": 35,
      "isValid": true,
      "literSize": 3.15
    },
    "vendor_code": "Футболка 4/серый"
  },
  {
    "article": "238699080",
    "chat_id": 5105827939,
    "wb_api_key": "eyJhbGciOiJFUzI1NiIsImtpZCI6IjIwMjQxMTE4djEiLCJ0eXAiOiJKV1QifQ.eyJlbnQiOjEsImV4cCI6MTc0OTE1MDk2MywiaWQiOiIwMTkzOTVhZC0wMWU1LTdhYTMtYTllYy1kNWFhMTBiMzRjZWUiLCJpaWQiOjY5NjE2NjAxLCJvaWQiOjQ0MDA4MCwicyI6MTA3Mzc0OTc1OCwic2lkIjoiOGZiNTA1ZGMtZmE5My00YTI1LWIyZDItZjk2NmVmOWVjM2M1IiwidCI6ZmFsc2UsInVpZCI6Njk2MTY2MDF9.8xJ81Uqdczq63lBXHW9gQ1oFitttLOm-PidIoDZrxPDt4xC7SPe-pbk56_3Iofrxl4ZZikh29FRK2zuLWTMOVw",
    "notification_time": 9,
    "self_cost": 522,
    "marketing_cost": {
      "2024-11-13": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-14": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-15": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-16": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-17": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-18": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-19": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-20": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-21": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-22": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-23": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-24": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-25": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-26": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-27": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-28": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-29": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-30": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-01": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-02": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-03": {
        "ark": {
          "ctr": 0,
          "views": 1,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0.14
      },
      "2024-12-04": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-05": {
        "ark": {
          "ctr": 0,
          "views": 2,
          "clicks": 1
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0.23
      },
      "2024-12-06": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-07": {
        "ark": {
          "ctr": 0,
          "views": 1,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0.13
      },
      "2024-12-08": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-09": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-10": {
        "ark": {
          "ctr": 0,
          "views": 1,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0.14
      },
      "2024-12-11": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-12": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      }
    },
    "sales": {
      "2024-12-06": {
        "infoBuysSum": 4636,
        "infoBuysCount": 6
      },
      "2024-12-07": {
        "infoBuysSum": 16225.9,
        "infoBuysCount": 14
      },
      "2024-12-08": {
        "infoBuysSum": 15067,
        "infoBuysCount": 13
      },
      "2024-12-09": {
        "infoBuysSum": 2318,
        "infoBuysCount": 2
      },
      "2024-12-10": {
        "infoBuysSum": 6954,
        "infoBuysCount": 6
      },
      "2024-12-11": {
        "infoBuysSum": 3477,
        "infoBuysCount": 3
      }
    },
    "other_metricks": {
      "2024-12-07": {
        "drr": 0.0022429261559696345,
        "krrr": 99.97231554781195,
        "ctrArk": 0,
        "ctrPrk": null,
        "margin": 12.092169844359974,
        "revWithDrr": 469.4476499999997,
        "marginWithDrr": 12.088822193380915,
        "revWithoutDrr": 469.5776499999997
      },
      "2024-12-08": {
        "drr": 0,
        "krrr": 100,
        "ctrArk": null,
        "ctrPrk": null,
        "margin": 12.081831996188178,
        "revWithDrr": 281.4571500000002,
        "marginWithDrr": 12.081831996188178,
        "revWithoutDrr": 281.4571500000002
      },
      "2024-12-09": {
        "drr": 0,
        "krrr": 100,
        "ctrArk": null,
        "ctrPrk": null,
        "margin": 12.094709798719942,
        "revWithDrr": 939.1904999999997,
        "marginWithDrr": 12.094709798719942,
        "revWithoutDrr": 939.1904999999997
      },
      "2024-12-10": {
        "drr": 0.001654650750502305,
        "krrr": 99.98304281126934,
        "ctrArk": 0,
        "ctrPrk": null,
        "margin": 14.563899860113214,
        "revWithDrr": 825.4685499999999,
        "marginWithDrr": 14.561430232127389,
        "revWithoutDrr": 825.6085499999999
      },
      "2024-12-11": {
        "drr": 0,
        "krrr": 100,
        "ctrArk": null,
        "ctrPrk": null,
        "margin": 14.937422583058432,
        "revWithDrr": 487.19300000000067,
        "marginWithDrr": 14.937422583058432,
        "revWithoutDrr": 487.19300000000067
      }
    },
    "order_info": {
      "stock": 95,
      "2024-12-07": {
        "buysSum": 3883.32,
        "buysCount": 3.35,
        "ordersSum": 5796,
        "ordersCount": 5,
        "addToCartCount": 23
      },
      "2024-12-08": {
        "buysSum": 2329.59,
        "buysCount": 2.0100000000000002,
        "ordersSum": 3477,
        "ordersCount": 3,
        "addToCartCount": 8
      },
      "2024-12-09": {
        "buysSum": 7765.3,
        "buysCount": 6.7,
        "ordersSum": 11590,
        "ordersCount": 10,
        "addToCartCount": 24
      },
      "2024-12-10": {
        "buysSum": 5668.87,
        "buysCount": 4.69,
        "ordersSum": 8461,
        "ordersCount": 7,
        "addToCartCount": 14
      },
      "2024-12-11": {
        "buysSum": 3261.5600000000004,
        "buysCount": 2.68,
        "ordersSum": 4868,
        "ordersCount": 4,
        "addToCartCount": 12
      },
      "commission": 24.5,
      "pricePerOne": 1188.4469696969697,
      "cart_to_order": "71.00",
      "click_to_cart": "14.99",
      "ordersCount30": 132,
      "buyoutsPercent": 66,
      "fullConversion": "10.64%",
      "addToCartPercent": 7,
      "cartToOrderPercent": 40
    },
    "tax": 0,
    "percent_buys": 67,
    "percent_mp": null,
    "price_before_spp": 1159,
    "logistics": 92,
    "storage": 0,
    "size": {
      "width": 30,
      "height": 3,
      "length": 35,
      "isValid": true,
      "literSize": 3.15
    },
    "vendor_code": "Футболка 6/ бежевый"
  },
  {
    "article": "229069605",
    "chat_id": 1944574607,
    "wb_api_key": "eyJhbGciOiJFUzI1NiIsImtpZCI6IjIwMjQxMTE4djEiLCJ0eXAiOiJKV1QifQ.eyJlbnQiOjEsImV4cCI6MTc0Nzc3OTYwNywiaWQiOiIwMTkzNDNlZi1jNWU5LTcyNWEtYWJkYi04ZjI1MzE4NWM2ZTkiLCJpaWQiOjE4MTczMjU4LCJvaWQiOjQwMDY4MjMsInMiOjEwNzM3NDk3NTgsInNpZCI6ImJhOGQxZGNmLTNmZDAtNDkzZi04ODUzLWYyOTU1MDVkNDM3YiIsInQiOmZhbHNlLCJ1aWQiOjE4MTczMjU4fQ.D0sCu-VCl7lLImUgrt3-2TBn_TdMoQVd4GzsutO5CAnFwlP5l8lX-tSaT--2Y1CKZYHv_ZShMS540Jmcqkcdlw",
    "notification_time": 9,
    "self_cost": 147,
    "marketing_cost": {
      "2024-11-13": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-14": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-15": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-16": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-17": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-18": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-19": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-20": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-21": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-22": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-23": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-24": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-25": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-26": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-27": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-28": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-29": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-30": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-01": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-02": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-03": {
        "ark": {
          "ctr": 0,
          "views": 2092,
          "clicks": 94
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 330.69
      },
      "2024-12-04": {
        "ark": {
          "ctr": 0,
          "views": 1951,
          "clicks": 74
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 329.28999999999996
      },
      "2024-12-05": {
        "ark": {
          "ctr": 0,
          "views": 2021,
          "clicks": 70
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 431.64
      },
      "2024-12-06": {
        "ark": {
          "ctr": 0,
          "views": 982,
          "clicks": 54
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 198.76
      },
      "2024-12-07": {
        "ark": {
          "ctr": 0,
          "views": 1734,
          "clicks": 83
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 377.39
      },
      "2024-12-08": {
        "ark": {
          "ctr": 0,
          "views": 1639,
          "clicks": 83
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 408.05000000000007
      },
      "2024-12-09": {
        "ark": {
          "ctr": 0,
          "views": 2105,
          "clicks": 136
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 499.80999999999995
      },
      "2024-12-10": {
        "ark": {
          "ctr": 0,
          "views": 2260,
          "clicks": 152
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 572.9000000000001
      },
      "2024-12-11": {
        "ark": {
          "ctr": 0,
          "views": 2480,
          "clicks": 159
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 566.01
      },
      "2024-12-12": {
        "ark": {
          "ctr": 0,
          "views": 157,
          "clicks": 8
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 35.28
      }
    },
    "sales": {
      "2024-12-05": {
        "infoBuysSum": 2000,
        "infoBuysCount": 4
      },
      "2024-12-06": {
        "infoBuysSum": 980.1700000000001,
        "infoBuysCount": 2
      },
      "2024-12-07": {
        "infoBuysSum": 3999.94,
        "infoBuysCount": 10
      },
      "2024-12-08": {
        "infoBuysSum": 1000,
        "infoBuysCount": 2
      },
      "2024-12-09": {
        "infoBuysSum": 1500,
        "infoBuysCount": 3
      },
      "2024-12-10": {
        "infoBuysSum": 3440,
        "infoBuysCount": 7
      },
      "2024-12-11": {
        "infoBuysSum": 1440,
        "infoBuysCount": 3
      }
    },
    "other_metricks": {
      "2024-12-07": {
        "drr": 25.159333333333333,
        "krrr": 0,
        "ctrArk": 4.786620530565167,
        "ctrPrk": null,
        "margin": 24.920928270042193,
        "revWithDrr": -82.077,
        "marginWithDrr": -6.92632911392405,
        "revWithoutDrr": 295.313
      },
      "2024-12-08": {
        "drr": 27.20333333333334,
        "krrr": 0,
        "ctrArk": 5.064063453325198,
        "ctrPrk": null,
        "margin": 24.920928270042193,
        "revWithDrr": -112.73700000000008,
        "marginWithDrr": -9.513670886075957,
        "revWithoutDrr": 295.313
      },
      "2024-12-09": {
        "drr": 6.576447368421053,
        "krrr": 56.8040847756891,
        "ctrArk": 6.460807600950119,
        "ctrPrk": null,
        "margin": 19.271768820786146,
        "revWithDrr": 657.2670000000003,
        "marginWithDrr": 10.947151898734182,
        "revWithoutDrr": 1157.0770000000002
      },
      "2024-12-10": {
        "drr": 10.850378787878789,
        "krrr": 25.406365392928347,
        "ctrArk": 6.725663716814159,
        "ctrPrk": null,
        "margin": 18.412639048714993,
        "revWithDrr": 195.1279999999997,
        "marginWithDrr": 4.677982355197538,
        "revWithoutDrr": 768.0279999999998
      },
      "2024-12-11": {
        "drr": 10.719886363636363,
        "krrr": 26.303468102725404,
        "ctrArk": 6.411290322580646,
        "ctrPrk": null,
        "margin": 18.412639048714993,
        "revWithDrr": 202.0179999999998,
        "marginWithDrr": 4.84316263904871,
        "revWithoutDrr": 768.0279999999998
      }
    },
    "order_info": {
      "stock": 461,
      "2024-12-07": {
        "buysSum": 1185,
        "buysCount": 2.37,
        "ordersSum": 1500,
        "ordersCount": 3,
        "addToCartCount": 17
      },
      "2024-12-08": {
        "buysSum": 1185,
        "buysCount": 2.37,
        "ordersSum": 1500,
        "ordersCount": 3,
        "addToCartCount": 18
      },
      "2024-12-09": {
        "buysSum": 6004,
        "buysCount": 13.43,
        "ordersSum": 7600,
        "ordersCount": 17,
        "addToCartCount": 82
      },
      "2024-12-10": {
        "buysSum": 4171.2,
        "buysCount": 9.48,
        "ordersSum": 5280,
        "ordersCount": 12,
        "addToCartCount": 49
      },
      "2024-12-11": {
        "buysSum": 4171.2,
        "buysCount": 9.48,
        "ordersSum": 5280,
        "ordersCount": 12,
        "addToCartCount": 49
      },
      "commission": 19.5,
      "pricePerOne": 481.58590308370043,
      "cart_to_order": "99.00",
      "click_to_cart": "12.88",
      "ordersCount30": 227,
      "buyoutsPercent": 80,
      "fullConversion": "12.75%",
      "addToCartPercent": 7,
      "cartToOrderPercent": 27
    },
    "tax": 0,
    "percent_buys": 79,
    "percent_mp": null,
    "price_before_spp": 500,
    "logistics": 60,
    "storage": 0,
    "size": {
      "width": 25,
      "height": 1,
      "length": 35,
      "isValid": true,
      "literSize": 0.875
    },
    "vendor_code": "Планер5пустой"
  },
  {
    "article": "221619227",
    "chat_id": 1944574607,
    "wb_api_key": "eyJhbGciOiJFUzI1NiIsImtpZCI6IjIwMjQxMTE4djEiLCJ0eXAiOiJKV1QifQ.eyJlbnQiOjEsImV4cCI6MTc0Nzc3OTYwNywiaWQiOiIwMTkzNDNlZi1jNWU5LTcyNWEtYWJkYi04ZjI1MzE4NWM2ZTkiLCJpaWQiOjE4MTczMjU4LCJvaWQiOjQwMDY4MjMsInMiOjEwNzM3NDk3NTgsInNpZCI6ImJhOGQxZGNmLTNmZDAtNDkzZi04ODUzLWYyOTU1MDVkNDM3YiIsInQiOmZhbHNlLCJ1aWQiOjE4MTczMjU4fQ.D0sCu-VCl7lLImUgrt3-2TBn_TdMoQVd4GzsutO5CAnFwlP5l8lX-tSaT--2Y1CKZYHv_ZShMS540Jmcqkcdlw",
    "notification_time": 9,
    "self_cost": 1730,
    "marketing_cost": {
      "2024-11-13": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-14": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-15": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-16": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-17": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-18": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-19": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-20": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-21": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-22": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-23": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-24": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-25": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-26": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-27": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-28": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-29": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-30": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-01": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-02": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-03": {
        "ark": {
          "ctr": 0,
          "views": 1046,
          "clicks": 29
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 141.46
      },
      "2024-12-04": {
        "ark": {
          "ctr": 0,
          "views": 1000,
          "clicks": 16
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 113.85
      },
      "2024-12-05": {
        "ark": {
          "ctr": 0,
          "views": 1055,
          "clicks": 28
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 160.29000000000002
      },
      "2024-12-06": {
        "ark": {
          "ctr": 0,
          "views": 1012,
          "clicks": 22
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 179.52
      },
      "2024-12-07": {
        "ark": {
          "ctr": 0,
          "views": 1045,
          "clicks": 32
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 208.35000000000002
      },
      "2024-12-08": {
        "ark": {
          "ctr": 0,
          "views": 1311,
          "clicks": 27
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 247.59
      },
      "2024-12-09": {
        "ark": {
          "ctr": 0,
          "views": 1109,
          "clicks": 20
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 203.5
      },
      "2024-12-10": {
        "ark": {
          "ctr": 0,
          "views": 943,
          "clicks": 14
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 172.54000000000002
      },
      "2024-12-11": {
        "ark": {
          "ctr": 0,
          "views": 1126,
          "clicks": 23
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 215.49
      },
      "2024-12-12": {
        "ark": {
          "ctr": 0,
          "views": 78,
          "clicks": 1
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 14.75
      }
    },
    "sales": {
      "2024-12-06": {
        "infoBuysSum": 23760.08,
        "infoBuysCount": 6
      },
      "2024-12-07": {
        "infoBuysSum": 7920,
        "infoBuysCount": 2
      },
      "2024-12-08": {
        "infoBuysSum": 3960,
        "infoBuysCount": 1
      },
      "2024-12-09": {
        "infoBuysSum": 11880,
        "infoBuysCount": 3
      },
      "2024-12-10": {
        "infoBuysSum": 15930,
        "infoBuysCount": 4
      },
      "2024-12-11": {
        "infoBuysSum": 11880,
        "infoBuysCount": 3
      }
    },
    "other_metricks": {
      "2024-12-07": {
        "drr": 5.144444444444445,
        "krrr": 68.48146198043486,
        "ctrArk": 3.062200956937799,
        "ctrPrk": null,
        "margin": 19.665016926967123,
        "revWithDrr": 452.6895439999997,
        "marginWithDrr": 13.466891090287067,
        "revWithoutDrr": 661.0395439999998
      },
      "2024-12-08": {
        "drr": 1.5283333333333333,
        "krrr": 90.63633929893912,
        "ctrArk": 2.059496567505721,
        "ctrPrk": null,
        "margin": 19.665016926967123,
        "revWithDrr": 2396.568175999999,
        "marginWithDrr": 17.82365146511973,
        "revWithoutDrr": 2644.158175999999
      },
      "2024-12-09": {
        "drr": 2.5123456790123457,
        "krrr": 84.60757742505038,
        "ctrArk": 1.8034265103697025,
        "ctrPrk": null,
        "margin": 19.665016926967123,
        "revWithDrr": 1118.5790879999995,
        "marginWithDrr": 16.63809442213297,
        "revWithoutDrr": 1322.0790879999995
      },
      "2024-12-10": {
        "drr": 0.6086067019400353,
        "krrr": 96.27124100936216,
        "ctrArk": 1.4846235418875928,
        "ctrPrk": null,
        "margin": 19.665016926967123,
        "revWithDrr": 4454.736807999999,
        "marginWithDrr": 18.93175584029238,
        "revWithoutDrr": 4627.276807999999
      },
      "2024-12-11": {
        "drr": 1.3301851851851854,
        "krrr": 91.8503362636956,
        "ctrArk": 2.0426287744227354,
        "ctrPrk": null,
        "margin": 19.665016926967123,
        "revWithDrr": 2428.668175999999,
        "marginWithDrr": 18.06238417373196,
        "revWithoutDrr": 2644.158175999999
      }
    },
    "order_info": {
      "stock": 465,
      "2024-12-07": {
        "buysSum": 3361.5,
        "buysCount": 0.83,
        "ordersSum": 4050,
        "ordersCount": 1,
        "addToCartCount": 9
      },
      "2024-12-08": {
        "buysSum": 13446,
        "buysCount": 3.32,
        "ordersSum": 16200,
        "ordersCount": 4,
        "addToCartCount": 6
      },
      "2024-12-09": {
        "buysSum": 6723,
        "buysCount": 1.66,
        "ordersSum": 8100,
        "ordersCount": 2,
        "addToCartCount": 9
      },
      "2024-12-10": {
        "buysSum": 23530.5,
        "buysCount": 5.81,
        "ordersSum": 28350,
        "ordersCount": 7,
        "addToCartCount": 7
      },
      "2024-12-11": {
        "buysSum": 13446,
        "buysCount": 3.32,
        "ordersSum": 16200,
        "ordersCount": 4,
        "addToCartCount": 10
      },
      "commission": 19.5,
      "pricePerOne": 3956.8720930232557,
      "cart_to_order": 0,
      "click_to_cart": 0,
      "ordersCount30": 86,
      "buyoutsPercent": 76,
      "fullConversion": "0.00%",
      "addToCartPercent": 11,
      "cartToOrderPercent": 36
    },
    "tax": 0,
    "percent_buys": 83,
    "percent_mp": null,
    "price_before_spp": 4050,
    "logistics": 303,
    "storage": 1,
    "size": {
      "width": 42,
      "height": 52,
      "length": 8,
      "isValid": true,
      "literSize": 17.472
    },
    "vendor_code": "Новый ББ режим сменный"
  },
  {
    "article": "223596146",
    "chat_id": 1944574607,
    "wb_api_key": "eyJhbGciOiJFUzI1NiIsImtpZCI6IjIwMjQxMTE4djEiLCJ0eXAiOiJKV1QifQ.eyJlbnQiOjEsImV4cCI6MTc0Nzc3OTYwNywiaWQiOiIwMTkzNDNlZi1jNWU5LTcyNWEtYWJkYi04ZjI1MzE4NWM2ZTkiLCJpaWQiOjE4MTczMjU4LCJvaWQiOjQwMDY4MjMsInMiOjEwNzM3NDk3NTgsInNpZCI6ImJhOGQxZGNmLTNmZDAtNDkzZi04ODUzLWYyOTU1MDVkNDM3YiIsInQiOmZhbHNlLCJ1aWQiOjE4MTczMjU4fQ.D0sCu-VCl7lLImUgrt3-2TBn_TdMoQVd4GzsutO5CAnFwlP5l8lX-tSaT--2Y1CKZYHv_ZShMS540Jmcqkcdlw",
    "notification_time": 9,
    "self_cost": 1730,
    "marketing_cost": {
      "2024-11-13": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-14": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-15": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-16": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-17": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-18": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-19": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-20": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-21": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-22": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-23": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-24": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-25": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-26": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-27": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-28": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-29": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-30": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-01": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-02": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-03": {
        "ark": {
          "ctr": 0,
          "views": 1379,
          "clicks": 43
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 310.64
      },
      "2024-12-04": {
        "ark": {
          "ctr": 0,
          "views": 1254,
          "clicks": 36
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 290.12
      },
      "2024-12-05": {
        "ark": {
          "ctr": 0,
          "views": 1204,
          "clicks": 29
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 317.31
      },
      "2024-12-06": {
        "ark": {
          "ctr": 0,
          "views": 1044,
          "clicks": 31
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 275.97
      },
      "2024-12-07": {
        "ark": {
          "ctr": 0,
          "views": 401,
          "clicks": 15
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 99.35
      },
      "2024-12-08": {
        "ark": {
          "ctr": 0,
          "views": 964,
          "clicks": 29
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 230.46999999999997
      },
      "2024-12-09": {
        "ark": {
          "ctr": 0,
          "views": 1545,
          "clicks": 50
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 347.59000000000003
      },
      "2024-12-10": {
        "ark": {
          "ctr": 0,
          "views": 1603,
          "clicks": 57
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 342.49
      },
      "2024-12-11": {
        "ark": {
          "ctr": 0,
          "views": 1634,
          "clicks": 37
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 386.67999999999995
      },
      "2024-12-12": {
        "ark": {
          "ctr": 0,
          "views": 91,
          "clicks": 1
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 20.53
      }
    },
    "sales": {
      "2024-12-06": {
        "infoBuysSum": 15840,
        "infoBuysCount": 4
      },
      "2024-12-07": {
        "infoBuysSum": 7920,
        "infoBuysCount": 2
      },
      "2024-12-08": {
        "infoBuysSum": 3960,
        "infoBuysCount": 1
      },
      "2024-12-09": {
        "infoBuysSum": 7919.95,
        "infoBuysCount": 2
      },
      "2024-12-10": {
        "infoBuysSum": 19772.57,
        "infoBuysCount": 5
      },
      "2024-12-11": {
        "infoBuysSum": 3960,
        "infoBuysCount": 1
      }
    },
    "other_metricks": {
      "2024-12-07": {
        "drr": 2.4530864197530864,
        "krrr": 84.07519368154978,
        "ctrArk": 3.7406483790523692,
        "ctrPrk": null,
        "margin": 19.25522962962963,
        "revWithDrr": 524.5194399999999,
        "marginWithDrr": 16.188871604938267,
        "revWithoutDrr": 623.8694399999999
      },
      "2024-12-08": {
        "drr": 1.422654320987654,
        "krrr": 90.77188979652816,
        "ctrArk": 3.008298755186722,
        "ctrPrk": null,
        "margin": 19.270661728395062,
        "revWithDrr": 2267.00776,
        "marginWithDrr": 17.492343827160497,
        "revWithoutDrr": 2497.4777599999998
      },
      "2024-12-09": {
        "drr": 2.86082304526749,
        "krrr": 81.43818991469607,
        "ctrArk": 3.2362459546925564,
        "ctrPrk": null,
        "margin": 19.265517695473235,
        "revWithDrr": 1525.0183199999983,
        "marginWithDrr": 15.689488888888873,
        "revWithoutDrr": 1872.6083199999985
      },
      "2024-12-10": {
        "drr": null,
        "krrr": 0,
        "ctrArk": 3.5558328134747343,
        "ctrPrk": null,
        "margin": null,
        "revWithDrr": -342.49,
        "marginWithDrr": null,
        "revWithoutDrr": 0
      },
      "2024-12-11": {
        "drr": 1.3639506172839504,
        "krrr": 91.1536859965018,
        "ctrArk": 2.2643818849449207,
        "ctrPrk": null,
        "margin": 19.27286631393297,
        "revWithDrr": 3984.4060799999975,
        "marginWithDrr": 17.56792804232803,
        "revWithoutDrr": 4371.086079999997
      }
    },
    "order_info": {
      "stock": 197,
      "2024-12-07": {
        "buysSum": 3240,
        "buysCount": 0.8,
        "ordersSum": 4050,
        "ordersCount": 1,
        "addToCartCount": 5
      },
      "2024-12-08": {
        "buysSum": 12960,
        "buysCount": 3.2,
        "ordersSum": 16200,
        "ordersCount": 4,
        "addToCartCount": 12
      },
      "2024-12-09": {
        "buysSum": 9720,
        "buysCount": 2.4000000000000004,
        "ordersSum": 12150,
        "ordersCount": 3,
        "addToCartCount": 8
      },
      "2024-12-10": {
        "buysSum": 0,
        "buysCount": 0,
        "ordersSum": 0,
        "ordersCount": 0,
        "addToCartCount": 4
      },
      "2024-12-11": {
        "buysSum": 22680,
        "buysCount": 5.6000000000000005,
        "ordersSum": 28350,
        "ordersCount": 7,
        "addToCartCount": 12
      },
      "commission": 19.5,
      "pricePerOne": 3944.098765432099,
      "cart_to_order": 0,
      "click_to_cart": 0,
      "ordersCount30": 81,
      "buyoutsPercent": 76,
      "fullConversion": "0.00%",
      "addToCartPercent": 10,
      "cartToOrderPercent": 37
    },
    "tax": 0,
    "percent_buys": 80,
    "percent_mp": null,
    "price_before_spp": 4050,
    "logistics": 303,
    "storage": 1,
    "size": {
      "width": 42,
      "height": 52,
      "length": 8,
      "isValid": true,
      "literSize": 17.472
    },
    "vendor_code": "Новый ББ режим сменный 10-22"
  },
  {
    "article": "252796094",
    "chat_id": 843357804,
    "wb_api_key": "eyJhbGciOiJFUzI1NiIsImtpZCI6IjIwMjQxMTE4djEiLCJ0eXAiOiJKV1QifQ.eyJlbnQiOjEsImV4cCI6MTc0OTEwMzI3MSwiaWQiOiIwMTkzOTJkNS00N2YzLTc4ZTItYmZmOS02ZDRhMDVmZGYxNmMiLCJpaWQiOjk2Mzg1NzcsIm9pZCI6MjU4Mjg1LCJzIjoxMDczNzQ5NzU4LCJzaWQiOiI0OGU2YzMwMC05YTE2LTRlMzgtYjc0Ny1iNjcyOGVkZjU2M2UiLCJ0IjpmYWxzZSwidWlkIjo5NjM4NTc3fQ.XwuFzazFGwLUg0PyborB0R8PImIKuLTWFJEfN6WQjZuQOeslx3doaeN-_pA1olMWsjeeysAP0oesZ_w4RwDJaw",
    "notification_time": 20,
    "self_cost": 1950,
    "marketing_cost": {
      "2024-11-13": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-14": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-15": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-16": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-17": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-18": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-19": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-20": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-21": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-22": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-23": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-24": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-25": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-26": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-27": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-28": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-29": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-30": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-01": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-02": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-03": {
        "ark": {
          "ctr": 0,
          "views": 1,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0.03
      },
      "2024-12-04": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-05": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-06": {
        "ark": {
          "ctr": 0,
          "views": 1,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0.03
      },
      "2024-12-07": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-08": {
        "ark": {
          "ctr": 0,
          "views": 2,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0.06
      },
      "2024-12-09": {
        "ark": {
          "ctr": 0,
          "views": 9497,
          "clicks": 1123
        },
        "prk": {
          "ctr": 0,
          "views": 30,
          "clicks": 3
        },
        "cost": 1259.8000000000002
      },
      "2024-12-10": {
        "ark": {
          "ctr": 0,
          "views": 12131,
          "clicks": 1459
        },
        "prk": {
          "ctr": 0,
          "views": 58,
          "clicks": 7
        },
        "cost": 1927.38
      },
      "2024-12-11": {
        "ark": {
          "ctr": 0,
          "views": 12412,
          "clicks": 1439
        },
        "prk": {
          "ctr": 0,
          "views": 112,
          "clicks": 11
        },
        "cost": 3110.2700000000004
      },
      "2024-12-12": {
        "ark": {
          "ctr": 0,
          "views": 621,
          "clicks": 64
        },
        "prk": {
          "ctr": 0,
          "views": 12,
          "clicks": 1
        },
        "cost": 184.76000000000002
      }
    },
    "sales": {
      "2024-12-06": {
        "infoBuysSum": 23328,
        "infoBuysCount": 5
      },
      "2024-12-07": {
        "infoBuysSum": 58860,
        "infoBuysCount": 8
      },
      "2024-12-08": {
        "infoBuysSum": 5508,
        "infoBuysCount": 1
      },
      "2024-12-09": {
        "infoBuysSum": 5508,
        "infoBuysCount": 1
      },
      "2024-12-10": {
        "infoBuysSum": 5508,
        "infoBuysCount": 1
      },
      "2024-12-11": {
        "infoBuysSum": 29916,
        "infoBuysCount": 4
      }
    },
    "other_metricks": {
      "2024-12-07": {
        "drr": null,
        "krrr": 0,
        "ctrArk": null,
        "ctrPrk": null,
        "margin": null,
        "revWithDrr": 0,
        "marginWithDrr": null,
        "revWithoutDrr": 0
      },
      "2024-12-08": {
        "drr": null,
        "krrr": 0,
        "ctrArk": 0,
        "ctrPrk": null,
        "margin": null,
        "revWithDrr": -0.06,
        "marginWithDrr": null,
        "revWithoutDrr": 0
      },
      "2024-12-09": {
        "drr": 4.780661809350335,
        "krrr": 79.39729853414183,
        "ctrArk": 11.824786774770981,
        "ctrPrk": 10,
        "margin": 24.425319160834682,
        "revWithDrr": 4854.932099999997,
        "marginWithDrr": 19.393043572044856,
        "revWithoutDrr": 6114.732099999997
      },
      "2024-12-10": {
        "drr": 2.370001475579165,
        "krrr": 90.28189076595736,
        "ctrArk": 12.027038166680406,
        "ctrPrk": 12.068965517241379,
        "margin": 25.67102648535165,
        "revWithDrr": 17905.49030000001,
        "marginWithDrr": 23.176288090005162,
        "revWithoutDrr": 19832.87030000001
      },
      "2024-12-11": {
        "drr": 4.999791023662552,
        "krrr": 80.15249375452481,
        "ctrArk": 11.593619078311312,
        "ctrPrk": 9.821428571428571,
        "margin": 26.516872470286444,
        "revWithDrr": 12560.565225000002,
        "marginWithDrr": 21.253934550641652,
        "revWithoutDrr": 15670.835225000003
      }
    },
    "order_info": {
      "stock": 134,
      "2024-12-07": {
        "buysSum": 0,
        "buysCount": 0,
        "ordersSum": 0,
        "ordersCount": 0,
        "addToCartCount": 9
      },
      "2024-12-08": {
        "buysSum": 0,
        "buysCount": 0,
        "ordersSum": 0,
        "ordersCount": 0,
        "addToCartCount": 29
      },
      "2024-12-09": {
        "buysSum": 25034.399999999998,
        "buysCount": 3.8,
        "ordersSum": 26352,
        "ordersCount": 4,
        "addToCartCount": 118
      },
      "2024-12-10": {
        "buysSum": 77257.8,
        "buysCount": 11.399999999999999,
        "ordersSum": 81324,
        "ordersCount": 12,
        "addToCartCount": 155
      },
      "2024-12-11": {
        "buysSum": 59097.6,
        "buysCount": 8.549999999999999,
        "ordersSum": 62208,
        "ordersCount": 9,
        "addToCartCount": 183
      },
      "commission": 22.5,
      "pricePerOne": 5991.55,
      "cart_to_order": "94.00",
      "click_to_cart": "3.23",
      "ordersCount30": 220,
      "buyoutsPercent": 95,
      "fullConversion": "3.04%",
      "addToCartPercent": 4,
      "cartToOrderPercent": 5
    },
    "tax": 0,
    "percent_buys": 95,
    "percent_mp": null,
    "price_before_spp": null,
    "logistics": 786,
    "storage": 5,
    "size": {
      "width": 23,
      "height": 23,
      "length": 95,
      "isValid": true,
      "literSize": 50.255
    },
    "vendor_code": "Королева 150"
  },
  {
    "article": "252799387",
    "chat_id": 843357804,
    "wb_api_key": "eyJhbGciOiJFUzI1NiIsImtpZCI6IjIwMjQxMTE4djEiLCJ0eXAiOiJKV1QifQ.eyJlbnQiOjEsImV4cCI6MTc0OTEwMzI3MSwiaWQiOiIwMTkzOTJkNS00N2YzLTc4ZTItYmZmOS02ZDRhMDVmZGYxNmMiLCJpaWQiOjk2Mzg1NzcsIm9pZCI6MjU4Mjg1LCJzIjoxMDczNzQ5NzU4LCJzaWQiOiI0OGU2YzMwMC05YTE2LTRlMzgtYjc0Ny1iNjcyOGVkZjU2M2UiLCJ0IjpmYWxzZSwidWlkIjo5NjM4NTc3fQ.XwuFzazFGwLUg0PyborB0R8PImIKuLTWFJEfN6WQjZuQOeslx3doaeN-_pA1olMWsjeeysAP0oesZ_w4RwDJaw",
    "notification_time": 20,
    "self_cost": 2850,
    "marketing_cost": {
      "2024-11-13": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-14": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-15": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-16": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-17": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-18": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-19": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-20": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-21": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-22": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-23": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-24": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-25": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-26": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-27": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-28": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-29": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-11-30": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-01": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-02": {
        "ark": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "prk": {
          "ctr": 0,
          "views": 0,
          "clicks": 0
        },
        "cost": 0
      },
      "2024-12-03": {
        "ark": {
          "ctr": 0,
          "views": 30712,
          "clicks": 1099
        },
        "prk": {
          "ctr": 0,
          "views": 11,
          "clicks": 1
        },
        "cost": 2814.11
      },
      "2024-12-04": {
        "ark": {
          "ctr": 0,
          "views": 40927,
          "clicks": 1742
        },
        "prk": {
          "ctr": 0,
          "views": 4,
          "clicks": 0
        },
        "cost": 3664.92
      },
      "2024-12-05": {
        "ark": {
          "ctr": 0,
          "views": 60915,
          "clicks": 3097
        },
        "prk": {
          "ctr": 0,
          "views": 2,
          "clicks": 1
        },
        "cost": 5007.52
      },
      "2024-12-06": {
        "ark": {
          "ctr": 0,
          "views": 42323,
          "clicks": 1722
        },
        "prk": {
          "ctr": 0,
          "views": 4033,
          "clicks": 269
        },
        "cost": 4697.78
      },
      "2024-12-07": {
        "ark": {
          "ctr": 0,
          "views": 24616,
          "clicks": 715
        },
        "prk": {
          "ctr": 0,
          "views": 18996,
          "clicks": 1232
        },
        "cost": 5014.08
      },
      "2024-12-08": {
        "ark": {
          "ctr": 0,
          "views": 7015,
          "clicks": 189
        },
        "prk": {
          "ctr": 0,
          "views": 25,
          "clicks": 3
        },
        "cost": 504.17
      },
      "2024-12-09": {
        "ark": {
          "ctr": 0,
          "views": 6246,
          "clicks": 121
        },
        "prk": {
          "ctr": 0,
          "views": 7240,
          "clicks": 128
        },
        "cost": 2018.59
      },
      "2024-12-10": {
        "ark": {
          "ctr": 0,
          "views": 18085,
          "clicks": 395
        },
        "prk": {
          "ctr": 0,
          "views": 563,
          "clicks": 14
        },
        "cost": 2776.41
      },
      "2024-12-11": {
        "ark": {
          "ctr": 0,
          "views": 47019,
          "clicks": 1736
        },
        "prk": {
          "ctr": 0,
          "views": 2846,
          "clicks": 79
        },
        "cost": 6574.39
      },
      "2024-12-12": {
        "ark": {
          "ctr": 0,
          "views": 2719,
          "clicks": 83
        },
        "prk": {
          "ctr": 0,
          "views": 2,
          "clicks": 0
        },
        "cost": 276.28
      }
    },
    "sales": {
      "2024-12-06": {
        "infoBuysSum": 121410,
        "infoBuysCount": 15
      },
      "2024-12-07": {
        "infoBuysSum": 153558,
        "infoBuysCount": 19
      },
      "2024-12-08": {
        "infoBuysSum": 72504,
        "infoBuysCount": 9
      },
      "2024-12-09": {
        "infoBuysSum": 113202,
        "infoBuysCount": 14
      },
      "2024-12-10": {
        "infoBuysSum": 114912,
        "infoBuysCount": 14
      },
      "2024-12-11": {
        "infoBuysSum": 142273.39,
        "infoBuysCount": 17
      }
    },
    "other_metricks": {
      "2024-12-07": {
        "drr": 2.961828814460393,
        "krrr": 82.60266336669238,
        "ctrArk": 2.9046148846278843,
        "ctrPrk": 6.485575910718046,
        "margin": 17.733969362238362,
        "revWithDrr": 23806.88326399999,
        "marginWithDrr": 14.64873101384212,
        "revWithoutDrr": 28820.96326399999
      },
      "2024-12-08": {
        "drr": 0.589672514619883,
        "krrr": 97.02743200387938,
        "ctrArk": 2.6942266571632216,
        "ctrPrk": 12,
        "margin": 20.663688888888895,
        "revWithDrr": 16456.585840000007,
        "marginWithDrr": 20.049446686159854,
        "revWithoutDrr": 16960.755840000005
      },
      "2024-12-09": {
        "drr": 5.465101797704137,
        "krrr": 76.51717947909847,
        "ctrArk": 1.9372398334934358,
        "ctrPrk": 1.7679558011049725,
        "margin": 24.242464262508122,
        "revWithDrr": 6577.438736,
        "marginWithDrr": 18.549649889899648,
        "revWithoutDrr": 8596.028736
      },
      "2024-12-10": {
        "drr": 6.2931456548347615,
        "krrr": 70.421372851771,
        "ctrArk": 2.184130494885264,
        "ctrPrk": 2.4866785079928952,
        "margin": 22.16248923341947,
        "revWithDrr": 6610.131120000002,
        "marginWithDrr": 15.607129176299928,
        "revWithoutDrr": 9386.541120000002
      },
      "2024-12-11": {
        "drr": 6.6747786712150745,
        "krrr": 62.7188396102231,
        "ctrArk": 3.6921244603245493,
        "ctrPrk": 2.775825720309206,
        "margin": 18.649887440437517,
        "revWithDrr": 11060.227408000006,
        "marginWithDrr": 11.69699299125515,
        "revWithoutDrr": 17634.617408000006
      }
    },
    "order_info": {
      "stock": 39,
      "2024-12-07": {
        "buysSum": 162518.4,
        "buysCount": 20.16,
        "ordersSum": 169290,
        "ordersCount": 21,
        "addToCartCount": 241
      },
      "2024-12-08": {
        "buysSum": 82080,
        "buysCount": 9.6,
        "ordersSum": 85500,
        "ordersCount": 10,
        "addToCartCount": 63
      },
      "2024-12-09": {
        "buysSum": 35458.56,
        "buysCount": 3.84,
        "ordersSum": 36936,
        "ordersCount": 4,
        "addToCartCount": 59
      },
      "2024-12-10": {
        "buysSum": 42353.28,
        "buysCount": 4.8,
        "ordersSum": 44118,
        "ordersCount": 5,
        "addToCartCount": 62
      },
      "2024-12-11": {
        "buysSum": 94556.16,
        "buysCount": 11.52,
        "ordersSum": 98496,
        "ordersCount": 12,
        "addToCartCount": 249
      },
      "commission": 22.5,
      "pricePerOne": 8163.741035856574,
      "cart_to_order": "94.00",
      "click_to_cart": "3.23",
      "ordersCount30": 251,
      "buyoutsPercent": 96,
      "fullConversion": "3.04%",
      "addToCartPercent": 6,
      "cartToOrderPercent": 5
    },
    "tax": 0,
    "percent_buys": 96,
    "percent_mp": null,
    "price_before_spp": 8061,
    "logistics": 1030,
    "storage": 6,
    "size": {
      "width": 24,
      "height": 24,
      "length": 116,
      "isValid": true,
      "literSize": 66.816
    },
    "vendor_code": "Королева белоснежная 180"
  }
]
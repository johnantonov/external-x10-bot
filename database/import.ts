import { users_db } from "./models/users";
import { articles_db } from "./models/articles";
import { sids_db } from "./models/sids";


export async function startImport() {
  const importData = usersData;
  console.log('length:', importData.length)

  for (const data of importData) {
    await sids_db.upsertSidFromJson(data);
  }
}

const usersData = [
  {
    "sid": "6d9b06da-aaa3-40b2-9907-52e478321924",
    "added_at": "2024-12-12 12:20:51.071813",
    "added_by": null
  },
  {
    "sid": "0d1a6497-3376-47fc-8b43-ad64b97dc9ad",
    "added_at": "2024-12-12 12:24:40.774572",
    "added_by": null
  },
  {
    "sid": "2d42b5f3-0359-56d9-b53d-1a00073e4cdf",
    "added_at": "2024-12-12 13:14:04.534532",
    "added_by": null
  },
  {
    "sid": "1ac02c24-63bf-4ef4-ac2b-6c12e8e17f94",
    "added_at": "2024-12-12 13:21:28.365644",
    "added_by": null
  },
  {
    "sid": "f8e9ecdf-5fea-4129-b403-4dc8ba742190",
    "added_at": "2024-12-12 13:40:28.947541",
    "added_by": null
  },
  {
    "sid": "611a4310-e954-4533-920a-826a670f4064",
    "added_at": "2024-12-12 14:03:04.009651",
    "added_by": null
  },
  {
    "sid": "e7fb02ca-7657-4f5d-8135-a869f1a711e4",
    "added_at": "2024-12-12 14:26:56.512413",
    "added_by": null
  },
  {
    "sid": "ca97836f-4d70-420c-bae4-0381406c2dfe",
    "added_at": "2024-12-12 14:30:53.306726",
    "added_by": null
  },
  {
    "sid": "e71dd701-1bcd-4d2e-a17d-2e754f9b6349",
    "added_at": "2024-12-12 14:32:28.462913",
    "added_by": null
  },
  {
    "sid": "2f093ad2-5d7d-4b8d-b3fc-2b9198fcae8a",
    "added_at": "2024-12-12 14:50:55.72874",
    "added_by": null
  },
  {
    "sid": "f076b639-8043-425b-ba7a-0a3e6ec44085",
    "added_at": "2024-12-12 15:33:46.059815",
    "added_by": null
  },
  {
    "sid": "cce4fa70-b6ff-53f0-8198-66955a635cfd",
    "added_at": "2024-12-12 16:09:20.424158",
    "added_by": null
  },
  {
    "sid": "2c5e37a9-b736-45ef-a161-4e511678ccaa",
    "added_at": "2024-12-12 16:23:55.849615",
    "added_by": null
  },
  {
    "sid": "8fc32a2c-173f-5daf-95a2-4fac4b5bd448",
    "added_at": "2024-12-12 16:38:24.852013",
    "added_by": null
  },
  {
    "sid": "6139f1c0-5e36-495c-9cfe-6bef506e6452",
    "added_at": "2024-12-12 16:59:30.123059",
    "added_by": null
  },
  {
    "sid": "994a3092-ebc9-49c3-bdd0-92754fb54eab",
    "added_at": "2024-12-12 17:37:09.311482",
    "added_by": null
  },
  {
    "sid": "2e204d93-3836-4827-bc3a-58b698d94fa6",
    "added_at": "2024-12-12 17:58:13.543032",
    "added_by": null
  },
  {
    "sid": "9e6c9615-acb7-41af-b70d-1af507533e4e",
    "added_at": "2024-12-12 18:33:48.558572",
    "added_by": null
  },
  {
    "sid": "a8758e11-5911-41eb-b4bb-b3f828d790c1",
    "added_at": "2024-12-12 18:34:54.526952",
    "added_by": null
  },
  {
    "sid": "71aae1f3-267b-45ce-a0e6-e884264d6c85",
    "added_at": "2024-12-12 18:47:12.727599",
    "added_by": null
  },
  {
    "sid": "3da18c57-7068-4c77-8708-12c4246a9643",
    "added_at": "2024-12-12 19:01:21.275448",
    "added_by": null
  },
  {
    "sid": "f7703f59-c188-45b5-9e18-ce0bd8b39276",
    "added_at": "2024-12-12 19:09:29.947321",
    "added_by": null
  },
  {
    "sid": "8c57e42a-4009-4725-a13e-49cce3b80f99",
    "added_at": "2024-12-12 19:35:23.369871",
    "added_by": null
  },
  {
    "sid": "989ce6c9-6cb6-5605-b3d7-0b6c3b6c15af",
    "added_at": "2024-12-12 20:10:27.840715",
    "added_by": null
  },
  {
    "sid": "b71de752-3508-43bd-acb9-935028744416",
    "added_at": "2024-12-12 20:10:28.518259",
    "added_by": null
  },
  {
    "sid": "d0e7faf7-7c35-4f3a-bf59-a021953c9651",
    "added_at": "2024-12-12 20:10:34.445375",
    "added_by": null
  },
  {
    "sid": "12f1436a-0dfc-41fb-aeff-47b75632aa5d",
    "added_at": "2024-12-12 20:52:12.843062",
    "added_by": null
  },
  {
    "sid": "69f53707-3550-4a33-9f3a-b09d77c61e50",
    "added_at": "2024-12-12 20:59:21.774718",
    "added_by": null
  },
  {
    "sid": "c664b410-d5ff-4a7e-ad81-f04881ebdce0",
    "added_at": "2024-12-12 21:09:31.099558",
    "added_by": null
  },
  {
    "sid": "7f2a2312-b3af-4327-ae34-e83fa3153b8d",
    "added_at": "2024-12-12 22:11:20.291194",
    "added_by": null
  },
  {
    "sid": "ab9175d9-475a-4573-870f-7bdf52774354",
    "added_at": "2024-12-12 22:55:40.409973",
    "added_by": null
  },
  {
    "sid": "f407e029-13b8-463b-aea3-81e890a99dbf",
    "added_at": "2024-12-12 23:41:10.098773",
    "added_by": null
  },
  {
    "sid": "406bd97d-8106-4cdf-8598-81cf2a1fc9b2",
    "added_at": "2024-12-13 01:47:01.223704",
    "added_by": null
  },
  {
    "sid": "400e6ef2-bd57-4835-b50b-f4a005f22b0e",
    "added_at": "2024-12-13 05:36:28.395051",
    "added_by": null
  },
  {
    "sid": "803c4e83-481c-497d-a918-0cab6854b093",
    "added_at": "2024-12-13 05:38:21.249038",
    "added_by": null
  },
  {
    "sid": "96e114cf-8b48-4ecf-bb5a-5b4074c50499",
    "added_at": "2024-12-13 05:41:13.706522",
    "added_by": null
  },
  {
    "sid": "6567d607-9e30-45a1-ad19-c6944cab620d",
    "added_at": "2024-12-13 06:08:50.523107",
    "added_by": null
  },
  {
    "sid": "ad6bc545-e7ae-4ef8-8caa-466e4c3c246b",
    "added_at": "2024-12-13 06:36:34.177321",
    "added_by": null
  },
  {
    "sid": "79d8d974-588c-49ed-bb3a-817e63649a49",
    "added_at": "2024-12-13 07:01:31.949501",
    "added_by": null
  },
  {
    "sid": "a4ce71a6-6a1a-41dc-98be-5a2882762345",
    "added_at": "2024-12-13 07:56:07.988743",
    "added_by": null
  },
  {
    "sid": "329c9219-2448-4bf6-b3a0-c3beab5bb533",
    "added_at": "2024-12-13 08:37:58.63644",
    "added_by": null
  },
  {
    "sid": "b0bcc4dd-0fd5-45f5-9de0-00f17fdf7995",
    "added_at": "2024-12-13 08:40:23.178927",
    "added_by": null
  },
  {
    "sid": "152923d6-6bba-4446-af12-4d17ef625b6a",
    "added_at": "2024-12-13 09:05:04.992985",
    "added_by": null
  },
  {
    "sid": "85934b3c-686a-47c5-a17b-a9a0188db7e3",
    "added_at": "2024-12-13 10:39:21.646787",
    "added_by": null
  },
  {
    "sid": "8a60363a-1eb1-459d-a5ed-5472bee5c2df",
    "added_at": "2024-12-13 11:43:43.657728",
    "added_by": null
  },
  {
    "sid": "0e6359fa-f2a5-4e05-85d0-e7e178975d6d",
    "added_at": "2024-12-13 12:10:44.749431",
    "added_by": null
  },
  {
    "sid": "05ca6ee5-922e-49bd-8b14-dc111fea1fe3",
    "added_at": "2024-12-13 13:52:18.275607",
    "added_by": null
  },
  {
    "sid": "a7c06ed1-eb0a-41ff-bbb5-5c6b71c07a3d",
    "added_at": "2024-12-13 14:28:31.243558",
    "added_by": null
  },
  {
    "sid": "ed17a5c4-ef6e-435f-b509-4de7692f8d25",
    "added_at": "2024-12-13 15:15:42.360528",
    "added_by": null
  },
  {
    "sid": "f8ffdaa9-fc10-471c-aa99-486f77c42e53",
    "added_at": "2024-12-13 16:52:29.96121",
    "added_by": null
  },
  {
    "sid": "a4c0420c-3f8e-4035-98f4-6f103cdec720",
    "added_at": "2024-12-13 16:55:12.074586",
    "added_by": null
  },
  {
    "sid": "90c3267e-9fd0-4d93-a84b-3448fd289d60",
    "added_at": "2024-12-13 19:17:42.169925",
    "added_by": null
  },
  {
    "sid": "7fce5ad0-403a-4e72-abc6-c12bdd5f96b5",
    "added_at": "2024-12-13 22:15:43.006016",
    "added_by": null
  },
  {
    "sid": "361987fb-7cb8-4a1d-8547-4ce9fe593e65",
    "added_at": "2024-12-14 04:31:25.842632",
    "added_by": null
  },
  {
    "sid": "75e00676-8ca3-4fa9-aa60-1f9d1a218b50",
    "added_at": "2024-12-14 05:28:34.660336",
    "added_by": null
  },
  {
    "sid": "46916c78-93a9-4492-8823-3ecee3608897",
    "added_at": "2024-12-14 06:54:46.500732",
    "added_by": null
  },
  {
    "sid": "4b767eba-0d69-4c85-95aa-78ed718f3bf0",
    "added_at": "2024-12-14 07:52:13.562793",
    "added_by": null
  },
  {
    "sid": "9294344d-2ccb-4aaa-9de1-af8d5a48b651",
    "added_at": "2024-12-14 08:27:21.7112",
    "added_by": null
  },
  {
    "sid": "c0ddd779-278d-48f2-8293-19b300377e4a",
    "added_at": "2024-12-14 10:42:36.091949",
    "added_by": null
  },
  {
    "sid": "1ae21226-36eb-4e21-98f7-6c95566d4c46",
    "added_at": "2024-12-14 12:16:48.869257",
    "added_by": null
  },
  {
    "sid": "bf835839-c569-4e87-80ee-69054265889c",
    "added_at": "2024-12-14 21:39:25.859719",
    "added_by": null
  },
  {
    "sid": "938622a2-0a55-490a-97f0-865179fe063d",
    "added_at": "2024-12-14 22:18:37.310472",
    "added_by": null
  },
  {
    "sid": "455c3d9b-03fd-4afe-935d-640095e95080",
    "added_at": "2024-12-15 05:51:37.448525",
    "added_by": null
  },
  {
    "sid": "b4fbd3e6-734e-440e-ad9c-b7056de43938",
    "added_at": "2024-12-15 07:21:03.800586",
    "added_by": null
  },
  {
    "sid": "c0e23176-19cd-5b5e-a7bc-bbb1ca31977c",
    "added_at": "2024-12-15 07:47:40.198107",
    "added_by": null
  },
  {
    "sid": "a9326a15-f60f-438c-b7de-848ba86be4bb",
    "added_at": "2024-12-15 08:08:06.648495",
    "added_by": null
  },
  {
    "sid": "93d0bdf8-cb52-4a52-a337-3686fd4cf0fb",
    "added_at": "2024-12-15 10:28:14.413219",
    "added_by": null
  },
  {
    "sid": "37851cd2-661c-4b34-97c1-132c6c4b4f02",
    "added_at": "2024-12-15 11:46:50.662902",
    "added_by": null
  },
  {
    "sid": "7bd77e90-0cfe-4685-9044-15a753f25131",
    "added_at": "2024-12-15 15:29:16.800876",
    "added_by": null
  },
  {
    "sid": "e58a6433-ceac-4400-9822-0e4c0666a1bb",
    "added_at": "2024-12-15 16:32:42.509101",
    "added_by": null
  },
  {
    "sid": "03cb1b3f-dd9c-4f94-b50c-c5efdefb58f3",
    "added_at": "2024-12-15 16:44:59.31169",
    "added_by": null
  },
  {
    "sid": "bc8b94a7-0549-4999-86ec-a90c556ac3ad",
    "added_at": "2024-12-15 17:14:06.737706",
    "added_by": null
  },
  {
    "sid": "acc0fb30-f046-4aae-9451-7bf01550419b",
    "added_at": "2024-12-15 17:19:58.718543",
    "added_by": null
  },
  {
    "sid": "37841b7c-a725-4f10-ac65-1c7afad843d3",
    "added_at": "2024-12-15 18:34:38.55158",
    "added_by": null
  },
  {
    "sid": "36041e73-aa0d-48ee-9ac6-eb4cc78c337a",
    "added_at": "2024-12-15 18:49:03.420569",
    "added_by": null
  },
  {
    "sid": "72894cf3-e30a-4d66-a3e8-0797548f2fd0",
    "added_at": "2024-12-15 19:39:02.421816",
    "added_by": null
  },
  {
    "sid": "0031efa9-05e8-4705-82c5-2fb00b68cfed",
    "added_at": "2024-12-15 21:22:37.195811",
    "added_by": null
  },
  {
    "sid": "d2afb416-1769-4cf5-b36d-5a35ad6bf4ca",
    "added_at": "2024-12-16 02:48:28.793219",
    "added_by": null
  },
  {
    "sid": "a479f3d9-0de2-41eb-903b-278d515018d8",
    "added_at": "2024-12-16 03:21:31.864993",
    "added_by": null
  },
  {
    "sid": "6abd4123-ec3b-422c-9af4-4247abb3fe29",
    "added_at": "2024-12-16 05:23:48.454432",
    "added_by": null
  },
  {
    "sid": "e4008c43-5714-47f8-b440-22c645244130",
    "added_at": "2024-12-16 09:38:47.350765",
    "added_by": null
  },
  {
    "sid": "86c3df7d-3d59-54bf-9c93-1899e1352d5e",
    "added_at": "2024-12-16 09:40:31.928644",
    "added_by": null
  },
  {
    "sid": "43842df6-a916-473b-ba4e-5d9bc1157b4f",
    "added_at": "2024-12-16 10:05:27.095984",
    "added_by": null
  },
  {
    "sid": "e6e3e155-9236-4d3f-8d72-0290018f1fed",
    "added_at": "2024-12-16 12:14:56.032831",
    "added_by": null
  },
  {
    "sid": "61d2f3c4-9476-48ab-96a4-7a317393325e",
    "added_at": "2024-12-16 13:04:54.11268",
    "added_by": null
  },
  {
    "sid": "c4a2092b-141a-4cac-8e57-738e7b83d1a3",
    "added_at": "2024-12-16 13:22:03.191696",
    "added_by": null
  },
  {
    "sid": "f4fd3327-c765-481a-89a1-4fac9636ae85",
    "added_at": "2024-12-16 18:05:10.398324",
    "added_by": null
  },
  {
    "sid": "446b6c4b-a1ed-4731-99e0-f80a7d0925a5",
    "added_at": "2024-12-16 18:33:58.483825",
    "added_by": null
  },
  {
    "sid": "c4d70055-e431-43d1-9ead-07c6ed3c2c2e",
    "added_at": "2024-12-16 20:06:33.843851",
    "added_by": null
  },
  {
    "sid": "6ceae5b0-c400-4e37-ae79-895284678641",
    "added_at": "2024-12-16 20:41:49.687846",
    "added_by": null
  },
  {
    "sid": "8f5ac3a1-f418-4c47-91aa-2484a4fce03f",
    "added_at": "2024-12-16 20:45:23.723857",
    "added_by": null
  },
  {
    "sid": "01718f33-91b6-458a-80b3-052cacc3c223",
    "added_at": "2024-12-16 21:44:40.556154",
    "added_by": null
  },
  {
    "sid": "cae70291-0dbc-5e72-bbe3-d5a8ff485459",
    "added_at": "2024-12-16 22:03:28.765761",
    "added_by": null
  },
  {
    "sid": "526e6230-0196-44f1-821e-41f05755fc8a",
    "added_at": "2024-12-16 22:14:39.453212",
    "added_by": null
  },
  {
    "sid": "7558407d-cfa0-4545-a9e0-577abd96e05a",
    "added_at": "2024-12-16 22:39:18.921038",
    "added_by": null
  },
  {
    "sid": "26506388-9507-49d6-995d-b671f7e068c8",
    "added_at": "2024-12-16 23:02:40.070292",
    "added_by": null
  },
  {
    "sid": "a6887f91-a688-4100-a672-c003c5ef7fe2",
    "added_at": "2024-12-17 05:18:17.401252",
    "added_by": null
  }
]
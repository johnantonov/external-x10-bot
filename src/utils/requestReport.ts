import axios from "axios";
import * as dotenv from 'dotenv';
dotenv.config();


export async function requestReport(chat_id: string | number) {
  try {
    const response = await axios.post(`http://localhost:${process.env.BASE_PORT}/generate-report`, { chat_id: chat_id });
    return response.data;
  } catch (error) {
    console.error("Error сalling ReportService:", error);
    return null
  }
}
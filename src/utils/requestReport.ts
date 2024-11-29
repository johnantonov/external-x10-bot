import axios from "axios";

export async function requestReport(chat_id: string | number) {
  try {
    const response = await axios.post(`http://localhost:${process.env.BASE_PORT}/generate-report`, { chat_id });
    return response.data;
  } catch (error) {
    console.error("Error сalling ReportService:", error);
    throw error;
  }
}
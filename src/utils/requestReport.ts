import axios from "axios";

async function requestReport(chat_id: string) {
  try {
    const response = await axios.post(`http://localhost:${process.env.BASE_PORT}/generate-report`, { chat_id });
    return response.data;
  } catch (error) {
    console.error("Error сalling ReportService:", error);
    throw error;
  }
}
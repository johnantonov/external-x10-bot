import axios from "axios";
import * as dotenv from 'dotenv';
dotenv.config();

export async function requestReport(chat_id: string | number, loadingMsgId: number) {
  try {
    const response = await axios.post(`http://external-x10Bot-report:${process.env.BASE_PORT}/generate-report`, { 
      chat_id: chat_id,
      loadingMsgId: loadingMsgId
    });
    
    return response.data;
  } catch (error) {
    console.error("Error сalling ReportService:", error);
    return null
  }
}
export async function requestStockReport(chat_id: string | number, loadingMsgId: number) {
  try {
    const response = await axios.post(`http://external-x10Bot-report:${process.env.BASE_PORT}/generate-stock-report`, { 
      chat_id: chat_id,
      loadingMsgId: loadingMsgId
    });
    
    return response.data;
  } catch (error) {
    console.error("Error сalling ReportService:", error);
    return null
  }
}
export async function adminRequestStockReport(admin_chat_id: string | number, chat_id: string | number, loadingMsgId: number) {
  try {
    const response = await axios.post(`http://external-x10Bot-report:${process.env.BASE_PORT}/admin-generate-stock-report`, { 
      admin_chat_id: admin_chat_id,
      chat_id: chat_id,
      loadingMsgId: loadingMsgId
    });
    
    return response.data;
  } catch (error) {
    console.error("Error сalling ReportService:", error);
    return null
  }
}
export async function requestPrepareReports() {
  try {
    const response = await axios.get(`http://external-x10Bot-report:${process.env.BASE_PORT}/prepare`);
    return response.data;
  } catch (error) {
    console.error("Error сalling ReportService:", error);
    return null
  }
}
export async function requestRunReportService() {
  try {
    const response = await axios.get(`http://external-x10Bot-report:${process.env.BASE_PORT}/run`);
    return response.data;
  } catch (error) {
    console.error("Error сalling ReportService:", error);
    return null
  }
}
export async function adminRequestReport(admin_chat_id: string | number, chat_id: string | number, loadingMsgId: number) {
  try {
    const response = await axios.post(`http://external-x10Bot-report:${process.env.BASE_PORT}/admin-generate-report`, { 
      admin_chat_id: admin_chat_id,
      chat_id: chat_id,
      loadingMsgId: loadingMsgId
    });
    
    return response.data;
  } catch (error) {
    console.error("Error сalling ReportService:", error);
    return null
  }
}
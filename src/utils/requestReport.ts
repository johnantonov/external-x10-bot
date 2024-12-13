import axios from "axios";
import * as dotenv from 'dotenv';
import { DateKey, OrdersSalesReportType } from "../dto/sku&report";
dotenv.config();

// *************************************
// ОТЧЕТЫ ПО СКЛАДУ
export async function requestStockReport(chat_id: string | number, loadingMsgId: number) {
  try {
    const response = await axios.post(`http://${process.env.REPORT_SERVICE_HOST}:${process.env.BASE_PORT}/generate-stock-report`, { 
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
    const response = await axios.post(`http://${process.env.REPORT_SERVICE_HOST}:${process.env.BASE_PORT}/admin-generate-stock-report`, { 
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

// *************************************
// ОТЧЕТЫ ПО ЗАКАЗАМ
export async function requestOrdersOrSalesReport(chat_id: string | number, loadingMsgId: number, date: DateKey, reportType: OrdersSalesReportType) {
  try {
    const response = await axios.post(`http://${process.env.REPORT_SERVICE_HOST}:${process.env.BASE_PORT}/generate-orders-sales-report`, { 
      chat_id: chat_id,
      loadingMsgId: loadingMsgId,
      date: date,
      reportType: reportType
    });
    
    return response.data;
  } catch (error) {
    console.error("Error сalling ReportService:", error);
    return null
  }
}

export async function adminRequestOrdersOrSalesReport(admin_chat_id: string | number, chat_id: string | number, loadingMsgId: number, date: DateKey, reportType: OrdersSalesReportType) {
  try {
    const response = await axios.post(`http://${process.env.REPORT_SERVICE_HOST}:${process.env.BASE_PORT}/admin-generate-orders-sales-report`, { 
      admin_chat_id: admin_chat_id,
      chat_id: chat_id,
      loadingMsgId: loadingMsgId, 
      date: date,
      reportType: reportType
    });
    
    return response.data;
  } catch (error) {
    console.error("Error сalling ReportService:", error);
    return null
  }
}

// *************************************
// ПОДГОТОВКА ОСНОВНОГО ОТЧЕТА И ОТПРАВКА
export async function requestPrepareReports() {
  try {
    const response = await axios.get(`http://${process.env.REPORT_SERVICE_HOST}:${process.env.BASE_PORT}/prepare`);
    return response.data;
  } catch (error) {
    console.error("Error сalling ReportService:", error);
    return null
  }
}

export async function requestReport(chat_id: string | number, loadingMsgId: number) {
  try {
    const response = await axios.post(`http://${process.env.REPORT_SERVICE_HOST}:${process.env.BASE_PORT}/generate-report`, { 
      chat_id: chat_id,
      loadingMsgId: loadingMsgId
    });
    
    return response.data;
  } catch (error) {
    console.error("Error сalling ReportService:", error);
    return null
  }
}

export async function requestRunReportService() {
  try {
    const response = await axios.get(`http://${process.env.REPORT_SERVICE_HOST}:${process.env.BASE_PORT}/run`);
    return response.data;
  } catch (error) {
    console.error("Error сalling ReportService:", error);
    return null
  }
}

export async function adminRequestReport(admin_chat_id: string | number, chat_id: string | number, loadingMsgId: number) {
  try {
    const response = await axios.post(`http://${process.env.REPORT_SERVICE_HOST}:${process.env.BASE_PORT}/admin-generate-report`, { 
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
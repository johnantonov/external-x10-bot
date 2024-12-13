import { CallbackData } from "../components/buttons";
import { CallbackAction } from "../dto/callback";
import { user_type } from "../dto/user";
import { rStates } from "../redis";

export class CallbackProcessor {
  private userCallbackData: string;
  private userType: user_type | null;

  constructor(userCallbackData: string, type: user_type | null) {
    this.userCallbackData = userCallbackData;
    this.userType = type;
  }

  getAction(): CallbackAction {
    if (this?.userType === 'waitTax') {
      return 'update tax'
    }

    if (this.isMenuAction()) {
      return "menu";
    }

    if (this.isNewUserAction()) {
      return "new user";
    }

    if (this.isChangeWbKey()) {
      return "change key";
    }

    if (this.isAddArticle()) {
      return "add sku";
    }

    if (this.isInfo()) {
      return 'info'
    }

    if (this.changeTime()) {
      return "change time";
    }

    if (this.isTaxState()) {
      return "update tax";
    }

    if (this.isArticlesMenu()) {
      return "articles";
    }

    if (this.goArticle()) {
      return "go article";
    }

    if (this.deleteArticle()) {
      return "delete article";
    }

    if (this.isReturnArticleMenu()) {
      return "return article menu";
    }

    if (this.isNewMenu()) {
      return "new menu";
    }

    if (this.isNewSelfcost()) {
      return "selfcost";
    }

    if (this.getAllReportNow()) {
      return "get all reports";
    }

    if (this.isAllReadyToReport()) {
      return "all ready";
    }

    if (this.isTestReport()) {
      return "test report";
    }

    if (this.isFb()) {
      return "fb";
    }

    if (this.isStockReport()) {
      return "stock report";
    }

    if (this.isRefMenu()) {
      return "ref";
    }

    if (this.isOrdersOrSalesReport()) {
      return "orders | sales report";
    }

    return null; // error
  }

  private isMenuAction(): boolean {
    return this.userCallbackData.startsWith(CallbackData.menu as string);
  }

  private isNewUserAction(): boolean {
    return this.userCallbackData === CallbackData.registrateUser
  }

  private isChangeWbKey(): boolean {
    return this.userCallbackData === CallbackData.changeWbApiKey
  }

  private isAddArticle(): boolean {
    return this.userCallbackData.startsWith(CallbackData.newSku as string)
  }

  private isInfo(): boolean {
    return this.userCallbackData.startsWith(CallbackData.faq)
  }

  private isArticlesMenu(): boolean {
    return this.userCallbackData === CallbackData.articlesMenu
  }

  private isTaxState(): boolean {
    return this.userCallbackData === CallbackData.editTax;
  }

  private isReturnArticleMenu(): boolean {
    return this.userCallbackData.startsWith(CallbackData.returnArticle as string)
  }

  private changeTime(): boolean {
    return this.userCallbackData.startsWith(CallbackData.changeTime as string)
  }

  private goArticle(): boolean {
    return this.userCallbackData.startsWith(CallbackData.goArticle as string)
  }

  private deleteArticle(): boolean {
    return this.userCallbackData.startsWith(CallbackData.deleteArticle as string)
  }

  private isNewMenu(): boolean {
    return this.userCallbackData.startsWith(CallbackData.returnNewMenu as string)
  }

  private isNewSelfcost(): boolean {
    return this.userCallbackData.startsWith(CallbackData.editSelfCost as string)
  }

  private getAllReportNow(): boolean {
    return this.userCallbackData === CallbackData.getAllReportNow
  }

  private isAllReadyToReport(): boolean {
    return this.userCallbackData === CallbackData.timeLater
  }

  private isTestReport(): boolean {
    return this.userCallbackData === CallbackData.testReport
  }

  private isFb(): boolean {
    return this.userCallbackData === CallbackData.feedback
  }

  private isStockReport(): boolean {
    return this.userCallbackData === CallbackData.stockReport
  }

  private isOrdersOrSalesReport(): boolean {
    const cb = this.userCallbackData
    return cb.startsWith(CallbackData.ordersReport as string) || cb.startsWith(CallbackData.salesReport as string)
  }

  private isRefMenu(): boolean {
    return this.userCallbackData === CallbackData.ref
  }
}
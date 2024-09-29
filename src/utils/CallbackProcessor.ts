import { CallbackData, returnArticleMenu } from "../components/botButtons";
import { CallbackAction } from "../dto/callback";
import { inputStates } from "../redis";


export class CallbackProcessor {
  private userCallbackData: string;

  constructor(userCallbackData: string) {
    this.userCallbackData = userCallbackData;
  }

  getAction(): CallbackAction {
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
      return "add article";
    }

    if (this.isEdits()) {
      return 'edits'
    }

    if (this.changeTime()) {
      return "change time";
    }

    if (this.isInputState()) {
      return  "input states";
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

    if (this.isOffReport()) {
      return "off report";
    }
    
    if (this.isOnReport()) {
      return "on report";
    }

    // if (this.off()) {
    //   return "off";
    // }


    // if (this.getAllReportsNow()) {
    //   return "get all reports";
    // }

    // if (this.changeTime()) {
    //   return "change time";
    // }



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
    return this.userCallbackData.startsWith(CallbackData.newArticle as string)
  }
  
  private isEdits(): boolean {
    return this.userCallbackData === CallbackData.editArticle
  }

  private isArticlesMenu(): boolean {
    return this.userCallbackData === CallbackData.articlesMenu
  }

  private isInputState(): boolean {
    return inputStates.some(state => this.userCallbackData.startsWith(state as string));
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

  private isOffReport(): boolean {
    return this.userCallbackData.startsWith(CallbackData.offReport as string)
  }

  private isOnReport(): boolean {
    return this.userCallbackData.startsWith(CallbackData.onReport as string)
  }
}
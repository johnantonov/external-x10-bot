import { resolve } from "path"
import { ArticleCallbackData, ArticleStatus } from "../dto/articles"

export const getPath = (imageName: string) => {
  return resolve(__dirname, `../../../public/messageImages/${imageName}`)
}

export const getStateAndArticleFromCallback = (data: string): [ArticleStatus, string] => {
  const splitData = data.split('?')
  return [splitData[0] as ArticleStatus, splitData[1]]
}

 // use short keys because btn callback limit is 64 bytes
export const parseArticleData = (data: string): ArticleCallbackData => {
  const newData = data.split('?')
  return {
    mn: newData[0],
    art: newData[1],
    sts: newData[2] as ArticleStatus,
    an: newData[3],
  }
}

export const newArticleData = (data: ArticleCallbackData): string => {
  return data.art + "?" + data.sts
}
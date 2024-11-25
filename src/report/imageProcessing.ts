import axios from "axios";
import sharp from "sharp";
import { getWbArticlePhoto } from "../utils/parse";
import { article } from "../dto/sku";

export const fetchAndResizeImage = async (article: article): Promise<string | null> => {
  try {
    const imgUrl = getWbArticlePhoto(article);
    const response = await axios.get(imgUrl, { responseType: "arraybuffer" });
    const imgBuffer = Buffer.from(response.data, "binary");
    const resizedBuffer = await sharp(imgBuffer).resize({ width: 200, height: 330 }).toBuffer();
    return `data:image/jpeg;base64,${resizedBuffer.toString("base64")}`;
  } catch (error) {
    console.error(`Error processing image: ${error}`);
    return null;
  }
};
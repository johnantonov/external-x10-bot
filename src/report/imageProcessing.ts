import axios from "axios";
import sharp from "sharp";
import { getWbArticlePhoto } from "../utils/parse";
import { article } from "../dto/sku&report";
import { config } from "../config/config";

export const fetchAndResizeImage = async (article: article): Promise<string | null> => {
  try {
    const imgUrl = getWbArticlePhoto(article);
    const response = await axios.get(imgUrl, { responseType: "arraybuffer" });
    const imgBuffer = Buffer.from(response.data, "binary");

    const resizedBuffer = await sharp(imgBuffer)
      .resize({ width: config.pdf.imgWidth, height: config.pdf.imgHeight })
      .toBuffer();

    // const resizedBuffer = await sharp(imgBuffer).resize({ width: config.pdf.imgWidth, height: config.pdf.imgHeight }).toBuffer();
    return `data:image/jpeg;base64,${resizedBuffer.toString("base64")}`;
  } catch (error) {
    console.error(`Error processing image: ${error}`);
    return null;
  }
};
import { Writable } from 'stream';
import wkhtmltopdf from 'wkhtmltopdf';

export async function generatePdfFromHtml(htmlContent: string): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const buffers: Uint8Array[] = [];

    const writableStream = new Writable({
      write(chunk, encoding, callback) {
        buffers.push(chunk);  
        callback();  
      }
    });

    const options = {
      pageSize: 'A4' as 'A4',
      marginTop: '10mm',
      marginBottom: '10mm',
      marginLeft: '10mm',
      marginRight: '10mm',
      disableJavascript: false, 
      noOutline: true,
    };

    try {
      const pdfStream = wkhtmltopdf(htmlContent, options);

      if (pdfStream && pdfStream.pipe) {
        pdfStream.pipe(writableStream);

        writableStream.on('finish', () => {
          resolve(Buffer.concat(buffers));
        });

        writableStream.on('error', (err) => {
          reject(new Error(`Ошибка при записи в поток: ${err.message}`));
        });
      } else {
        reject(new Error('wkhtmltopdf не вернул поток.'));
      }
    } catch (err: any) {
      reject(new Error(`Ошибка при запуске wkhtmltopdf: ${err.message}`));
    }
  });
}
declare module 'node-wkhtmltopdf' {
  import { Readable } from 'stream';

  function wkhtmltopdf(
    html: string,
    options?: string | Record<string, unknown> | any[]
  ): Readable;
  
  export = wkhtmltopdf;
}
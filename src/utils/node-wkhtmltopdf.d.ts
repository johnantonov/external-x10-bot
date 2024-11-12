declare module 'node-wkhtmltopdf' {
  import { Readable } from 'stream';
  function wkhtmltopdf(
    html: string,
    options?: Record<string, unknown>
  ): Readable;
  export = wkhtmltopdf;
}
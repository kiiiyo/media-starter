import Document from 'next/document'
import { Head, Main, NextScript } from 'next/document'

export default class extends Document {
  // FIXME:
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  render() {
    return (
      <html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

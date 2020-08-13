import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document'
import { ServerStyleSheets as MaterialUiServerStyleSheets } from '@material-ui/styles'

export default class extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const materialUiServerStyleSheets = new MaterialUiServerStyleSheets()
    const originalRenderPage = ctx.renderPage

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) =>
          materialUiServerStyleSheets.collect(<App {...props} />),
      })

    const initialProps = await Document.getInitialProps(ctx)

    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          {materialUiServerStyleSheets.getStyleElement()}
        </>
      ),
    }
  }

  render() {
    return (
      <Html lang="ja">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

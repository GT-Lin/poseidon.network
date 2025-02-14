import Document, { Main, Head, NextScript } from 'next/document';
import { styles } from '../constants';

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat:400,500,600"
            rel="stylesheet"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/favicon-16x16.png"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="/static/css/animate.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="/static/css/flag-icon-css/css/flag-icon.min.css"
          />
          <style>{`
          html, body {
            width: 100%;
            height: 100%;
            background: ${styles.darkLight};
          }
        `}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

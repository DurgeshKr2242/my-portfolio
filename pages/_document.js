import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en-US">
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

          <meta
            name="description"
            content="Portfolio website of Durgesh Kumar."
          />
          <meta
            name="keywords"
            content="Durgesh DurgeshKr DurgeshKumar durgeshKr KumarDurgesh KrDurgesh code.durgesh code.durgesh@gmail.com durgeshCode durgeshportfolio portfolio Kumar"
          />
          <meta name="theme-color" content="#0D1117" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

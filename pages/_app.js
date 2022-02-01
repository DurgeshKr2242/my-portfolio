import "../styles/globals.css";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  <Head>
    <meta charset="utf-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta
      name="viewport"
      content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=5"
    />
  </Head>;
  return (
    <div className="h-full ">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;

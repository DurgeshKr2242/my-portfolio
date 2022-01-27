import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="h-full ">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;

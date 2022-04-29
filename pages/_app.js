import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import Head from "next/head";

const baseUrl = "http://localhost:8080/get-text";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export { baseUrl };
export default MyApp;

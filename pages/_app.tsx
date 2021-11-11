import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "../components/Layout";
import { IdProvider } from "@radix-ui/react-id";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <IdProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </IdProvider>
  );
}

export default MyApp;

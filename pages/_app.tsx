import type { AppProps } from "next/app";
import "../public/css/styles.css";
import Router from "../src/components/router";
import { CarProvider } from "../context/CarContext";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <CarProvider>
        <Router />
        <Component {...pageProps} />
      </CarProvider>
    </>
  );
}

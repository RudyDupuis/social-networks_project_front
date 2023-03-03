import type { AppProps } from "next/app";
import "../assets/styles/index.scss";
import "@fortawesome/fontawesome-free/css/all.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

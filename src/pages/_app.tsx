import type { AppProps } from "next/app";
import "../assets/styles/index.scss";
import "@fortawesome/fontawesome-free/css/all.css";
import { useEffect } from "react";

//Retrieving the theme variable from local storage to display colors
function App({ Component, pageProps }: AppProps) {
  const applyTheme = (theme: string) => {
    if (theme === "dark") {
      document.documentElement.style.setProperty("--background-1", "#344d59");
      document.documentElement.style.setProperty("--background-2", "#486877");
      document.documentElement.style.setProperty("--main", "#f0eee9");
    }
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      applyTheme(savedTheme);
    }
  }, []);

  return <Component {...pageProps} />;
}

export default App;

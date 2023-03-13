import type { AppProps } from "next/app";
import "../assets/styles/index.scss";
import "@fortawesome/fontawesome-free/css/all.css";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

function App({ Component, pageProps }: AppProps) {
  const applyTheme = (theme: string) => {
    if (theme === "dark") {
      document.documentElement.style.setProperty("--background-1", "#344d59");
      document.documentElement.style.setProperty("--background-2", "#486877");
      document.documentElement.style.setProperty("--main", "#f0eee9");
    }
  };
  const router = useRouter();

  useEffect(() => {
    //Retrieving the theme variable from local storage to display colors
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      applyTheme(savedTheme);
    }

    //If the login token does not exist returns to the login page
    if (router.pathname !== "/inscription") {
      const token = Cookies.get("token");
      if (!token) {
        router.push("/");
      }
    }
  }, []);

  return <Component {...pageProps} />;
}

export default App;

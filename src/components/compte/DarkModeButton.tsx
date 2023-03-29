import React, { useEffect, useState } from "react";

const DarkModeButton = () => {
  //Definition of colors for each theme
  const LIGHT_THEME = {
    background1: "#f0eee9",
    background2: "#e1e0df",
    main: "#344d59",
  };

  const DARK_THEME = {
    background1: "#344d59",
    background2: "#486877",
    main: "#f0eee9",
  };

  const [currentTheme, setCurrentTheme] = useState("");

  //Retrieve theme value from localstorage when component mounts
  useEffect(() => {
    setCurrentTheme(
      localStorage.getItem("theme") ? localStorage.theme : "light"
    );
  }, []);

  //Function that changes the theme and stores the new value locally
  const handleThemeChange = () => {
    const theme = currentTheme === "light" ? DARK_THEME : LIGHT_THEME;

    document.documentElement.style.setProperty(
      "--background-1",
      theme.background1
    );
    document.documentElement.style.setProperty(
      "--background-2",
      theme.background2
    );
    document.documentElement.style.setProperty("--main", theme.main);

    if (localStorage.getItem("theme") && localStorage.theme === "dark") {
      setCurrentTheme("light");
      localStorage.theme = "light";
    } else {
      setCurrentTheme("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <button className="account__buttons--button" onClick={handleThemeChange}>
      {currentTheme === "dark" ? (
        <div>
          <i className="fa-solid fa-moon"></i> <p>Mode Sombre</p>
        </div>
      ) : (
        <div>
          <i className="fa-solid fa-sun"></i> <p>Mode Clair</p>
        </div>
      )}
    </button>
  );
};

export default DarkModeButton;

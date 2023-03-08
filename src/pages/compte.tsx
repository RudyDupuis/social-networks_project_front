import EditProfil from "@/components/EditProfil";
import AdminPage from "@/components/AdminPage";
import CGU from "@/components/CGU";
import Header from "@/components/Header";
import MyPosts from "@/components/MyPosts";
import MyFollows from "@/components/MyFollows";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Compte = () => {
  //Change the content of the section when a button is clicked
  const [section, setSection] = useState<string>("EditProfil");

  const handleSectionChange = (newSection: string) => {
    //create a modal if the screen size is small
    if (window.innerWidth < 1000) {
      (
        document.querySelector(".account__section") as HTMLElement
      ).classList.add("account__section--open");
    }
    setSection(newSection);
  };

  //change theme colors when button is clicked

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

  useEffect(() => {
    setCurrentTheme(
      localStorage.getItem("theme") ? localStorage.theme : "light"
    );
  }, []);

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
    <main>
      <Header />
      <section className="account">
        <div className="account__profil">
          <div className="account__profil--infos">
            <Image
              src="/assets/profil-picto.png"
              alt="logo"
              width={96 / 2}
              height={119 / 2}
            />
            <div>
              <p className="profil-pseudo">John Doe</p>
              <p className="profil-mail">johndoe@gmail.com</p>
            </div>
          </div>
          <i
            className="fa-solid fa-pen btn-anim"
            onClick={() => handleSectionChange("EditProfil")}
          ></i>
        </div>

        <div className="account__container">
          <div className="account__buttons">
            <button
              className="account__buttons--button btn-anim"
              onClick={handleThemeChange}
            >
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
            <button
              className="account__buttons--button btn-anim"
              onClick={() => handleSectionChange("MyFollows")}
            >
              <div>
                <i className="fa-solid fa-user"></i>
                <p>Mes suivis</p>
              </div>
              <i className="fa-solid fa-angle-right"></i>
            </button>
            <button
              className="account__buttons--button btn-anim"
              onClick={() => handleSectionChange("MyPosts")}
            >
              <div>
                <i className="fa-solid fa-book"></i>
                <p>Mes posts</p>
              </div>
              <i className="fa-solid fa-angle-right"></i>
            </button>
            <button
              className="account__buttons--button btn-anim"
              onClick={() => handleSectionChange("AdminPage")}
            >
              <div>
                <i className="fa-solid fa-scale-balanced"></i>
                <p>Page Admin</p>
              </div>
              <i className="fa-solid fa-angle-right"></i>
            </button>
            <button
              className="account__buttons--button btn-anim"
              onClick={() => handleSectionChange("CGU")}
            >
              <div>
                <i className="fa-solid fa-circle-info"></i>
                <p>CGU</p>
              </div>
              <i className="fa-solid fa-angle-right"></i>
            </button>
            <button className="btn-2">Déconnexion</button>
          </div>

          <div className="account__section">
            <i
              className="fa-solid fa-circle-xmark"
              onClick={() =>
                (
                  document.querySelector(".account__section") as HTMLElement
                ).classList.remove("account__section--open")
              }
            ></i>
            {(() => {
              switch (section) {
                case "EditProfil":
                  return <EditProfil />;
                case "MyFollows":
                  return <MyFollows />;
                case "MyPosts":
                  return <MyPosts />;
                case "AdminPage":
                  return <AdminPage />;
                case "CGU":
                  return <CGU />;
                default:
                  return <EditProfil />;
              }
            })()}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Compte;

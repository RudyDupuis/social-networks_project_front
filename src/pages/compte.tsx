import React, { useEffect, useState } from "react";

import Header from "@/components/header/Header";
import DarkModeButton from "@/components/compte/DarkModeButton";

import EditProfil from "@/components/compte/EditProfil";
import AdminPage from "@/components/compte/AdminPage";
import CGU from "@/components/CGU";
import MyPosts from "@/components/compte/MyPosts";
import MyFollows from "@/components/compte/MyFollows";
import AccountProfile from "@/components/compte/AccountProfile";
import Cookies from "js-cookie";
import Logout from "@/components/compte/Logout";

const Compte = () => {
  //List of configuration buttons for the user account
  const [settingsButtons, setSettingsButtons] = useState([
    ["Mes suivis", "fa-user"],
    ["Mes posts", "fa-book"],
    ["CGU", "fa-circle-info"],
  ]);

  //Add admin page if user is admin
  useEffect(() => {
    if (Cookies.get("role") === "ADMIN") {
      setSettingsButtons([
        ["Mes suivis", "fa-user"],
        ["Mes posts", "fa-book"],
        ["Page Admin", "fa-scale-balanced"],
        ["CGU", "fa-circle-info"],
      ]);
    }
  }, []);

  //Function to change the displayed section
  const [section, setSection] = useState<string>("EditProfil");

  const handleSectionChange = (newSection: string) => {
    //If the window width is less than 1000, add a class to create a modal to the section
    window.innerWidth < 1000 &&
      (
        document.querySelector(".account__section") as HTMLElement
      ).classList.add("account__section--open");

    setSection(newSection);
  };

  return (
    <main>
      <Header />

      <section className="account">
        <div className="account__profil">
          <AccountProfile />

          <i
            className="fa-solid fa-pen btn-anim"
            onClick={() => handleSectionChange("EditProfil")}
          ></i>
        </div>

        <div className="account__container">
          <div className="account__buttons">
            <DarkModeButton />

            {settingsButtons.map((button) => (
              <button
                key={button[0]}
                className="account__buttons--button btn-anim"
                onClick={() => handleSectionChange(button[0])}
              >
                <div>
                  <i className={"fa-solid " + button[1]}></i>
                  <p>{button[0]}</p>
                </div>
                <i className="fa-solid fa-angle-right"></i>
              </button>
            ))}

            <Logout />
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
                case "Mes suivis":
                  return <MyFollows />;
                case "Mes posts":
                  return <MyPosts />;
                case "Page Admin":
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

import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

import Header from "@/components/header/Header";
import DarkModeButton from "@/components/compte/DarkModeButton";

import EditProfil from "@/components/compte/EditProfil";
import AdminPage from "@/components/compte/AdminPage";
import CGU from "@/components/compte/CGU";
import MyPosts from "@/components/compte/MyPosts";
import MyFollows from "@/components/compte/MyFollows";
import { accountProfile } from "@/types/Interface";

const Compte = () => {
  //List of configuration buttons for the user account
  const settingsButtons = [
    ["Mes suivis", "fa-user"],
    ["Mes posts", "fa-book"],
    ["Page Admin", "fa-scale-balanced"],
    ["CGU", "fa-circle-info"],
  ];

  //Current state of the section displayed in the account page
  const [section, setSection] = useState<string>("EditProfil");

  //Function to change the displayed section
  const handleSectionChange = (newSection: string) => {
    //If the window width is less than 1000, add a class to create a modal to the section
    window.innerWidth < 1000 &&
      (
        document.querySelector(".account__section") as HTMLElement
      ).classList.add("account__section--open");

    //Define the new section
    setSection(newSection);
  };

  //Fetch data
  const [userData, setUserData] = useState<accountProfile>({
    id: 0,
    username: "",
    email: "",
    avatar: {
      url: "",
    },
    role: "",
    created_at: "",
    updated_at: null,
    posts: [],
    posts_count: "",
    subscriptions: [],
  });

  useEffect(() => {
    axios
      .get(`./BackTest/account.json`)
      .then((res) => setUserData(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <main>
      <Header />

      <section className="account">
        <div className="account__profil">
          <div className="account__profil--infos">
            <Image
              src={
                userData.avatar.url
                  ? userData.avatar.url
                  : "/assets/profil-picto.png"
              }
              alt="logo"
              width={119}
              height={119}
            />

            <div>
              <p className="profil-pseudo">{userData.username}</p>

              <p className="profil-mail">{userData.email}</p>
            </div>
          </div>

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
                case "Mes suivis":
                  return <MyFollows data={userData.subscriptions} />;
                case "Mes posts":
                  return <MyPosts data={userData.posts} />;
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

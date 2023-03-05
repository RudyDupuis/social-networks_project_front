// import EditProfil from "@/components/EditProfil";
import Header from "@/components/Header";
import MyPosts from "@/components/MyPosts";
// import MyFollows from "@/components/MyFollows";
import Image from "next/image";
import React from "react";

const compte = () => {
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
          <i className="fa-solid fa-pen"></i>
        </div>

        <div className="account__container">
          <div className="account__buttons">
            <button className="account__buttons--button">
              <div>
                <i className="fa-solid fa-sun"></i>
                <p>Mode Clair</p>
              </div>
            </button>
            <button className="account__buttons--button">
              <div>
                <i className="fa-solid fa-user"></i>
                <p>Mes suivis</p>
              </div>
              <i className="fa-solid fa-angle-right"></i>
            </button>
            <button className="account__buttons--button">
              <div>
                <i className="fa-solid fa-book"></i>
                <p>Mes posts</p>
              </div>
              <i className="fa-solid fa-angle-right"></i>
            </button>
            <button className="account__buttons--button">
              <div>
                <i className="fa-solid fa-scale-balanced"></i>
                <p>Page Admin</p>
              </div>
              <i className="fa-solid fa-angle-right"></i>
            </button>
            <button className="account__buttons--button">
              <div>
                <i className="fa-solid fa-circle-info"></i>
                <p>CGU</p>
              </div>
              <i className="fa-solid fa-angle-right"></i>
            </button>
            <button className="btn-2">Déconnexion</button>
          </div>

          <div className="account__section">
            {/* <EditProfil /> */}
            {/* <MyFollows /> */}
            <MyPosts />
          </div>
        </div>
      </section>
    </main>
  );
};

export default compte;

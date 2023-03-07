import Header from "@/components/Header";
import Notifs from "@/components/Notifs";
import Posts from "@/components/Posts";
import React from "react";

const accueil = () => {
  const closeNotifs = () => {
    (document.querySelector(".home__notifs") as HTMLElement).classList.remove(
      "home__notifs--open"
    );
    (document.querySelector(".home__posts") as HTMLElement).style.display =
      "block";
  };
  return (
    <main>
      <Header />
      <section className="home">
        <section className="home__posts">
          <form action="" className="message home__posts--create">
            <textarea placeholder="Écrire un post ..."></textarea>
            <button type="submit">
              <i className="fa-solid fa-share"></i>
            </button>
          </form>
          <div className="home__posts--list">
            <Posts />
            <Posts />
            <Posts />
            <Posts />
          </div>
        </section>
        <section className="home__notifs">
          <i className="fa-solid fa-circle-xmark" onClick={closeNotifs}></i>
          <h2>
            <i className="fa-solid fa-bell"></i> Mes notifications
          </h2>
          <div className="home__posts--list">
            <Notifs />
            <Notifs />
            <Notifs />
          </div>
        </section>
      </section>
    </main>
  );
};

export default accueil;

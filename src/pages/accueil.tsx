import Header from "@/components/Header";
import Notifs from "@/components/Notifs";
import Posts from "@/components/Posts";
import React from "react";

const accueil = () => {
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

import Header from "@/components/Header";
import Posts from "@/components/Posts";
import Image from "next/image";
import React from "react";

const profil = () => {
  return (
    <main>
      <Header />
      <section className="profil">
        <div className="profil__infos">
          <div className="profil__infos--content">
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
          <div className="profil__infos--buttons">
            <button className="btn-2">Suivre</button>
            <button className="btn-2">Bannir</button>
          </div>
        </div>

        <div className="profil__posts">
          <Posts />
          <Posts />
          <Posts />
          <Posts />
        </div>
      </section>
    </main>
  );
};

export default profil;

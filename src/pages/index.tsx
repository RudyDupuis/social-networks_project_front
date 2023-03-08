import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const index = () => {
  const [currentTheme, setCurrentTheme] = useState("");

  useEffect(() => {
    setCurrentTheme(
      localStorage.getItem("theme") ? localStorage.theme : "light"
    );
  }, []);

  return (
    <main className="login-container">
      <form action="" className="login">
        {currentTheme === "dark" ? (
          <Image
            src="/assets/logo-dark.png"
            alt="logo"
            width={521 / 2.7}
            height={133 / 2.7}
          />
        ) : (
          <Image
            src="/assets/logo.png"
            alt="logo"
            width={521 / 2.7}
            height={133 / 2.7}
          />
        )}
        <div className="input-1">
          <input type="text" placeholder="Pseudo ou mail" />
          <i className="fa-solid fa-user"></i>
        </div>
        <div className="input-1">
          <input type="password" placeholder="Mot de passe" />
          <i className="fa-solid fa-lock"></i>
        </div>
        <input type="submit" value="Connexion" className="btn-1" />
        <Link href="/inscription">
          <button className="btn-2">Inscription</button>
        </Link>
      </form>
    </main>
  );
};

export default index;

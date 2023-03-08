import CGU from "@/components/CGU";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const inscription = () => {
  const [currentTheme, setCurrentTheme] = useState("");

  useEffect(() => {
    setCurrentTheme(
      localStorage.getItem("theme") ? localStorage.theme : "light"
    );
  }, []);

  return (
    <main className="register-container">
      <form action="" className="register">
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
          <input type="text" placeholder="Pseudo" />
          <i className="fa-solid fa-user"></i>
        </div>
        <div className="input-1">
          <input type="mail" placeholder="Mail" />
          <i className="fa-solid fa-envelope"></i>
        </div>
        <div className="input-1">
          <input type="password" placeholder="Mot de passe" />
          <i className="fa-solid fa-lock"></i>
        </div>
        <div className="input-1">
          <input type="password" placeholder="Confirmer le mot de passe" />
          <i className="fa-solid fa-lock"></i>
        </div>
        <div className="register__checkbox">
          <input type="checkbox" id="CGU" />
          <label htmlFor="CGU">
            Accepter les{" "}
            <strong
              onClick={() =>
                ((
                  document.querySelector(".register__cgu") as HTMLElement
                ).style.display = "block")
              }
            >
              CGU
            </strong>
          </label>
        </div>
        <input type="submit" value="Inscription" className="btn-1" />
        <Link href="/">
          Vous possédez déjà un compte ? <strong>Connexion</strong>
        </Link>
      </form>
      <div className="register__cgu">
        <CGU />
        <i
          className="fa-solid fa-circle-xmark"
          onClick={() =>
            ((
              document.querySelector(".register__cgu") as HTMLElement
            ).style.display = "none")
          }
        ></i>
      </div>
    </main>
  );
};

export default inscription;

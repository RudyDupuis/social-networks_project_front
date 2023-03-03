import Image from "next/image";
import Link from "next/link";
import React from "react";

const inscription = () => {
  return (
    <main className="register-container">
      <form action="" className="register">
        <Image
          src="/assets/logo.png"
          alt="logo"
          width={521 / 2.7}
          height={133 / 2.7}
        />
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
        <div className="cgu">
          <input type="checkbox" id="CGU" />
          <label htmlFor="CGU">
            Accepter les{" "}
            <Link href="/cgu">
              <strong>CGU</strong>
            </Link>
          </label>
        </div>
        <input type="submit" value="Inscription" className="btn-1" />
        <Link href="/">
          Vous possédez déjà un compte ? <strong>Connexion</strong>
        </Link>
      </form>
    </main>
  );
};

export default inscription;

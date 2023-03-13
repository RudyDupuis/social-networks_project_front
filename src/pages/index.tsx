import LogoLoginRegister from "@/components/indexInscription/LogoLoginRegister";
import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

const index = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      identifier,
      password,
    };

    const res = await axios.get("./bddTest/Users.json");
    const expires = 1;

    if (identifier === "Admin" && password === "admin") {
      Cookies.set("user-id", res.data.Users[1].id, { expires });
      Cookies.set("user-rule", res.data.Users[1].rule, { expires });
      Cookies.set("user-pseudo", res.data.Users[1].pseudo, { expires });
      Cookies.set("user-mail", res.data.Users[1].mail, { expires });
      Cookies.set("user-profilPicture", res.data.Users[1].profilPicture, {
        expires,
      });
      router.push("/accueil");
    } else if (identifier === "User" && password === "user") {
      Cookies.set("user-id", res.data.Users[0].id, { expires });
      Cookies.set("user-rule", res.data.Users[0].rule, { expires });
      Cookies.set("user-pseudo", res.data.Users[0].pseudo, { expires });
      Cookies.set("user-mail", res.data.Users[0].mail, { expires });
      Cookies.set("user-profilPicture", res.data.Users[0].profilPicture, {
        expires,
      });
      router.push("/accueil");
    } else {
      setErrorMessage("Votre compte n'existe pas");
    }
  };

  return (
    <main className="login-container">
      <form onSubmit={handleLogin} className="login">
        <LogoLoginRegister />
        <div className="input-1">
          <input
            type="text"
            placeholder="Pseudo ou mail"
            required
            onChange={(e) => setIdentifier(e.target.value)}
          />
          <i className="fa-solid fa-user"></i>
        </div>
        <div className="input-1">
          <input
            type="password"
            placeholder="Mot de passe"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <i className="fa-solid fa-lock"></i>
        </div>
        <input type="submit" value="Connexion" className="btn-1" />
        <Link href="/inscription">
          <button className="btn-2">Inscription</button>
        </Link>
        <p className="login__instructions">{errorMessage}</p>
      </form>
    </main>
  );
};

export default index;

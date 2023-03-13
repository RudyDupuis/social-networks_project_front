import React, { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Link from "next/link";
import Cookies from "js-cookie";

import LogoLoginRegister from "@/components/indexInscription/LogoLoginRegister";
import InputField from "@/components/InputField";

const index = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  //If the connection token exists returns to the home page
  if (Cookies.get("token")) {
    router.push("/accueil");
  }

  //Send to Api
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      identifier,
      password,
    };

    try {
      // const res = await axios.post("/user/login", data);
      const res = await axios.get("./BackTest/login.json");

      //create a secure cookie with a one-day expiry
      const expires = 1;
      Cookies.set("token", res.data.token, {
        expires,
        // HttpOnly: true,
        Secure: true,
      });

      router.push("/accueil");
    } catch (error: any) {
      if (error.response && error.response.status === 404) {
        setErrorMessage("Votre compte n'existe pas");
      }
    }
  };

  return (
    <main className="login">
      <form onSubmit={handleLogin}>
        <LogoLoginRegister />

        <InputField
          type="text"
          placeholder="Pseudo ou mail"
          required={true}
          onChange={(e: any) => setIdentifier(e.target.value)}
          icon="user"
        />

        <InputField
          type="password"
          placeholder="Mot de passe"
          required={true}
          onChange={(e: any) => setPassword(e.target.value)}
          icon="lock"
        />

        <input type="submit" value="Connexion" className="btn-1" />

        <Link href="/inscription">
          <button className="btn-2">Inscription</button>
        </Link>

        <p className="login__error">{errorMessage}</p>
      </form>
    </main>
  );
};

export default index;

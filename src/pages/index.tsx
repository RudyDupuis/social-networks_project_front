import React, { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Link from "next/link";
import Cookies from "js-cookie";

import Logo from "@/components/Logo";
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

  //Function that handles the cookie expiration format
  function parseExpirationDate(expiresAt: string): Date {
    // Remove timezone
    const expiresAtWithoutTimeZone = expiresAt.slice(0, -6) + "Z";
    const expiresAtDate = new Date(expiresAtWithoutTimeZone);

    //Returns the expiration date with the same time zone as the current date
    return new Date(
      expiresAtDate.valueOf() - expiresAtDate.getTimezoneOffset() * 60000
    );
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
      const res = await axios.get("./outputBack/loginResp.json");

      //Create cookies
      const expires = parseExpirationDate(res.data.token.expires_at);

      const dataValue = [
        res.data.token.token,
        res.data.user.id,
        res.data.user.username,
        res.data.user.email,
        res.data.user.avatar.url,
        res.data.user.role,
      ];

      const dataKey = ["token", "id", "username", "email", "avatar", "role"];

      for (let i = 0; i < dataKey.length; i++) {
        Cookies.set(dataKey[i], dataValue[i], {
          expires,
          Secure: true,
        });
      }

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
        <Logo />

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

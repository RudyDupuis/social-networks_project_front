import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Cookies from "js-cookie";

import Logo from "@/components/Logo";
import InputField from "@/components/InputField";
import { axiosService } from "@/services/axiosService";

const index = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  //If the connection token exists returns to the home page
  if (Cookies.get("token")) {
    router.push("/accueil");
  }

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //cf services => axiosService
    axiosService({
      method: "get", //it's a post
      uri: "loginResp.json",
      data: { identifier, password },
      thenAction: function (response) {
        //Create cookies
        // const expires = parseExpirationDate(res.data.token.expires_at);
        const expires = 1;

        const dataValue = [
          response.token.token,
          response.user.id,
          response.user.username,
          response.user.email,
          response.user.avatar.url,
          response.user.role,
        ];

        const dataKey = ["token", "id", "username", "email", "avatar", "role"];

        for (let i = 0; i < dataKey.length; i++) {
          Cookies.set(dataKey[i], dataValue[i], {
            expires,
            Secure: true,
          });
        }

        router.push("/accueil");
      },
      catchAction: function (error) {
        setErrorMessage(error);
      },
    });
  };

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

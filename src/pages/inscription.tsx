import React, { useState } from "react";
import Link from "next/link";

import Logo from "@/components/Logo";
import CheckboxCGU from "@/components/inscription/CheckboxCGU";
import InputField from "@/components/InputField";

import { processRegistrationData } from "@/helpers/processFieldData";
import { axiosService } from "@/services/axiosService";

const inscription = () => {
  const [instructions, setInstructions] = useState("");
  const [username, setUsername] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //cf helpers => processFieldData
    const processData = processRegistrationData(
      username,
      mail,
      password,
      confPassword
    );

    if (typeof processData === "string") {
      return setInstructions(processData);
    }

    //cf services => axiosService
    axiosService({
      method: "post",
      uri: "user/create",
      data: processData,
      thenAction: function (response) {
        setInstructions("Compte créé ! Veuillez vous connecter");
      },
      catchAction: function (error) {
        setInstructions(error);
      },
    });
  };

  return (
    <main className="register">
      <form onSubmit={handleRegister}>
        <Logo />

        <InputField
          type="text"
          placeholder="Pseudo"
          required={true}
          onChange={(e: any) => setUsername(e.target.value)}
          icon="user"
        />

        <InputField
          type="mail"
          placeholder="Mail"
          required={true}
          onChange={(e: any) => setMail(e.target.value)}
          icon="envelope"
        />

        <InputField
          type="password"
          placeholder="Mot de passe"
          required={true}
          onChange={(e: any) => setPassword(e.target.value)}
          icon="lock"
        />

        <InputField
          type="password"
          placeholder="Confirmer le mot de passe"
          required={true}
          onChange={(e: any) => setConfPassword(e.target.value)}
          icon="lock"
        />

        <CheckboxCGU />

        <input type="submit" value="Inscription" className="btn-1" />

        <Link href="/">
          Vous possédez déjà un compte ? <strong>Connexion</strong>
        </Link>

        <p className="register__instructions">{instructions}</p>
      </form>
    </main>
  );
};

export default inscription;

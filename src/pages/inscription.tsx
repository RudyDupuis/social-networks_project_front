import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";

import Logo from "@/components/Logo";
import CheckboxCGU from "@/components/inscription/CheckboxCGU";
import InputField from "@/components/InputField";

const inscription = () => {
  const [instructions, setInstructions] = useState("");
  const [username, setUsername] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");

  //Check if the input information is correct
  const dataProcessing = (
    username: string,
    mail: string,
    password: string,
    confPassword: string
  ) => {
    const mailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[\S]{8,}$/;
    const usernameLengthMin = 5;
    const usernameLengthMax = 15;
    let instructionsList = [];

    if (
      username.length < usernameLengthMin ||
      username.length > usernameLengthMax
    ) {
      instructionsList.push("Le pseudo doit faire entre 5 et 15 caractères.");
    }

    if (!mailRegex.test(mail)) {
      instructionsList.push("Le mail n'est pas correct.");
    }

    if (!passwordRegex.test(password)) {
      instructionsList.push(
        "Le mot de passe doit contenir 8 caractères dont une majuscule et un chiffre."
      );
    }

    if (password !== confPassword) {
      instructionsList.push("Les deux mots de passe ne sont pas identiques.");
    }

    setInstructions(instructionsList.join("\n\n"));

    if (instructionsList.length === 0) {
      return {
        username,
        mail,
        password,
      };
    }
  };

  //Api Error
  const handleApiError = (error: any) => {
    if (error.response.status === 409) {
      if (error.response.data.message === "This email is already taken") {
        return "Cette adresse mail est déjà utilisée.";
      }
      if (error.response.data.message === "This username is already taken") {
        return "Ce pseudo est déjà utilisé.";
      }
      return "Ce pseudo ou cette adresse mail est déjà utilisé.";
    }
    return `Une erreur ${error.reponse.status} s'est produite.`;
  };

  //Send to Api
  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = dataProcessing(username, mail, password, confPassword);

    if (data) {
      try {
        const res = await axios.post("/user/create", data);

        if (res.status === 201) {
          setInstructions("Compte créé ! Veuillez vous connecter");
        }
      } catch (error: any) {
        setInstructions(handleApiError(error));
      }
    }
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

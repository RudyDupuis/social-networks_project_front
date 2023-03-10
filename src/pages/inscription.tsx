import CGU from "@/components/compte/CGU";
import LogoLoginRegister from "@/components/indexInscription/LogoLoginRegister";
import Link from "next/link";
import React, { useState } from "react";
import axios from "axios";

const inscription = () => {
  const [instructions, setInstructions] = useState("");
  const [pseudo, setPseudo] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");

  //Check if the input information is correct
  const dataProcessing = (
    pseudo: string,
    mail: string,
    password: string,
    confPassword: string
  ) => {
    const mailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[\S]{8,}$/;
    let instructionsList = [];

    if (pseudo.length < 5) {
      instructionsList.push("Le pseudo est trop court.");
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
        pseudo,
        mail,
        password,
      };
    }
  };

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = dataProcessing(pseudo, mail, password, confPassword);

    if (data) {
      try {
        const response = await axios.post("", data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <main className="register-container">
      <form onSubmit={handleRegister} className="register">
        <LogoLoginRegister />
        <div className="input-1">
          <input
            type="text"
            placeholder="Pseudo"
            required
            onChange={(e) => setPseudo(e.target.value)}
          />
          <i className="fa-solid fa-user"></i>
        </div>
        <div className="input-1">
          <input
            type="mail"
            placeholder="Mail"
            required
            onChange={(e) => setMail(e.target.value)}
          />
          <i className="fa-solid fa-envelope"></i>
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
        <div className="input-1">
          <input
            type="password"
            placeholder="Confirmer le mot de passe"
            required
            onChange={(e) => setConfPassword(e.target.value)}
          />
          <i className="fa-solid fa-lock"></i>
        </div>
        <div className="register__checkbox">
          <input type="checkbox" id="CGU" required />
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
        <p className="register__instructions">{instructions}</p>
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

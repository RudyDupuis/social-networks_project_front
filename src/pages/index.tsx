import LogoLoginRegister from "@/components/indexInscription/LogoLoginRegister";
import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";

const index = () => {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      identifier,
      password,
    };

    try {
      const response = await axios.post("", data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
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
      </form>
    </main>
  );
};

export default index;

import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

const Logout = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const logout = async () => {
    try {
      const response = await axios.post("/user/logout", {
        headers: {
          Authorization: `bearer ${Cookies.get("token")}`,
        },
      });

      Cookies.remove("role"); // Remove all cookies
      Cookies.remove("token");
      Cookies.remove("email");
      Cookies.remove("avatar");
      Cookies.remove("id");
      Cookies.remove("username");

      router.push("/"); // Redirect to login page
    } catch (error: any) {
      setErrorMessage(`Une erreur ${error.response.status} s'est produite.`);
    }
  };

  return (
    <div className="account-logout">
      <button className="btn-2" onClick={logout}>
        Déconnexion
      </button>
      <p>{errorMessage}</p>
    </div>
  );
};

export default Logout;

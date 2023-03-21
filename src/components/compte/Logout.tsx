import React from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

const Logout = () => {
  const router = useRouter();

  const logout = async () => {
    try {
      const response = await axios.post("/user/logout", {
        token: Cookies.get("token"),
      });

      if (response.status === 200) {
        Cookies.remove("role"); // Remove all cookies
        Cookies.remove("token");
        Cookies.remove("email");
        Cookies.remove("avatar");
        Cookies.remove("id");
        Cookies.remove("username");

        router.push("/"); // Redirect to login page
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button className="btn-2" onClick={logout}>
      Déconnexion
    </button>
  );
};

export default Logout;

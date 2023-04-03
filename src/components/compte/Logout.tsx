import React, { useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { axiosService } from "@/services/axiosService";

const Logout = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const logout = () => {
    //cf services => axiosService
    axiosService({
      method: "post",
      uri: "user/logout",
      thenAction: function (response) {
        Cookies.remove("role"); // Remove all cookies
        Cookies.remove("token");
        Cookies.remove("email");
        Cookies.remove("avatar");
        Cookies.remove("id");
        Cookies.remove("username");

        router.push("/"); // Redirect to login page
      },
      catchAction: function (error) {
        setErrorMessage(error);
      },
    });
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

import Cookies from "js-cookie";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const AccountProfile = () => {
  //Put basic info before fetching cookies because next.js does server side rendering and cookies are client side
  const [userData, setUserData] = useState({
    src: "/assets/profil-picto.png",
    username: "",
    email: "",
  });

  useEffect(() => {
    const cookieData = {
      src: Cookies.get("avatar"),
      username: Cookies.get("username"),
      email: Cookies.get("email"),
    };

    Object.entries(cookieData).forEach(([key, value]) => {
      if (value !== undefined) {
        setUserData((prevState) => ({ ...prevState, [key]: value }));
      }
    });
  }, []);

  return (
    <div className="account-profile">
      <Image src={userData.src} alt="logo" width={119} height={119} />

      <div>
        <p className="account-profile__pseudo">{userData.username}</p>

        <p className="profil-mail__mail">{userData.email}</p>
      </div>
    </div>
  );
};

export default AccountProfile;

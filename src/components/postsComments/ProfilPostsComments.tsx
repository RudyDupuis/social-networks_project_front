import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Interaction from "../Interaction";

const ProfilPostsComments = ({ data }: any) => {
  const [profilData, setProfilData] = useState([]);

  useEffect(() => {
    axios.get("./bddTest/Users.json").then((res) => {
      const users = res.data.Users;
      users.filter((user: any) => {
        user.id === data.author;
        console.log(user.id);
      });
      setProfilData(users);
    });
  }, []);

  return (
    <div className="posts__content--container">
      <div className="posts__content--profil">
        <Image
          src="/assets/profil-picto.png"
          alt="logo"
          width={96 / 3}
          height={119 / 3}
        />
        <div>
          <p>John Doe</p>
          <p className="posts-date">
            {data.updatedAt ? data.updatedAt : data.createdAt}
          </p>
        </div>
      </div>
      <Interaction />
    </div>
  );
};

export default ProfilPostsComments;

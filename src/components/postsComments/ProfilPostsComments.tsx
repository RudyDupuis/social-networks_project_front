import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Interaction from "../Interaction";

const ProfilPostsComments = () => {
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
          <p className="posts-date">Jeudi</p>
        </div>
      </div>
      <Interaction />
    </div>
  );
};

export default ProfilPostsComments;

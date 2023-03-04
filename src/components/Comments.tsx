import Image from "next/image";
import React from "react";
import EditText from "./EditText";
import Interaction from "./Interaction";

const Comments = () => {
  return (
    <div className="posts__content comments">
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
            <p className="posts-date">23 Fev à 09:05</p>
          </div>
        </div>
        <Interaction />
      </div>
      <div className="posts__content--message">
        <EditText />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo deserunt
          velit exercitationem sunt harum perferendis dolorum pariatur nostrum
          officiis iste.
        </p>
      </div>
    </div>
  );
};

export default Comments;

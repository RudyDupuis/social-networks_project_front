import Image from "next/image";
import React from "react";

const Notifs = () => {
  return (
    <div className="notification">
      <Image
        src="/assets/profil-picto.png"
        alt="logo"
        width={96 / 3}
        height={119 / 3}
      />
      <div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit,
          provident.
        </p>
        <p className="notification__date">23 Fev à 09:05</p>
      </div>
      <i className="fa-solid fa-circle-xmark btn-anim"></i>
    </div>
  );
};

export default Notifs;

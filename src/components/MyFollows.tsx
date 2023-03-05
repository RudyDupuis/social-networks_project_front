import Image from "next/image";
import React from "react";

const MyFollows = () => {
  return (
    <div className="my-follows">
      <h1>Mes suivis</h1>

      <div className="my-follows__profil">
        <div>
          <Image
            src="/assets/profil-picto.png"
            alt="logo"
            width={96 / 3}
            height={119 / 3}
          />
          <p>John Doe</p>
        </div>
        <i className="fa-solid fa-angle-right"></i>
      </div>
      <div className="my-follows__profil">
        <div>
          <Image
            src="/assets/profil-picto.png"
            alt="logo"
            width={96 / 3}
            height={119 / 3}
          />
          <p>John Doe</p>
        </div>
        <i className="fa-solid fa-angle-right"></i>
      </div>
      <div className="my-follows__profil">
        <div>
          <Image
            src="/assets/profil-picto.png"
            alt="logo"
            width={96 / 3}
            height={119 / 3}
          />
          <p>John Doe</p>
        </div>
        <i className="fa-solid fa-angle-right"></i>
      </div>
    </div>
  );
};

export default MyFollows;

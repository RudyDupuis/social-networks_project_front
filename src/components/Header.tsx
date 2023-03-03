import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header>
      <div className="container container__global">
        <Link href="/accueil">
          <Image
            src="/assets/logo.png"
            alt="logo"
            width={521 / 4}
            height={133 / 4}
          />
        </Link>
        <div className="container container__secondary">
          <div className="menu">
            <i className="fa-solid fa-bars"></i>
            <i className="fa-solid fa-xmark"></i>
          </div>
          <div className="input-1">
            <input type="text" placeholder="Rechercher" />
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
          <div className="icon">
            <i className="fa-solid fa-bell"></i>
            <Link href="/compte">
              <i className="fa-solid fa-user"></i>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

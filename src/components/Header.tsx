import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";

const Header = () => {
  const headerMenuRef = useRef<HTMLDivElement>(null);

  const handleMenuOpen = () => {
    if (headerMenuRef.current) {
      headerMenuRef.current.style.transform = "translateX(0)";
    }
  };

  const handleMenuClose = () => {
    if (headerMenuRef.current) {
      headerMenuRef.current.style.transform = "translateX(100%)";
    }
  };

  return (
    <header>
      <div className="header">
        <Link href="/accueil">
          <Image
            src="/assets/logo.png"
            alt="logo"
            width={521 / 4}
            height={133 / 4}
          />
        </Link>

        <i className="fa-solid fa-bars" onClick={handleMenuOpen}></i>

        <div className="header__menu" ref={headerMenuRef}>
          <i className="fa-solid fa-xmark" onClick={handleMenuClose}></i>

          <div className="input-1">
            <input type="text" placeholder="Rechercher" />
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>

          <div className="header__menu--icon">
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

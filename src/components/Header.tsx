import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useRef } from "react";

const Header = () => {
  const router = useRouter();

  return (
    <header>
      <div className="header">
        {router.pathname !== "/accueil" && (
          <Link href="/accueil">
            <Image
              src="/assets/logo.png"
              alt="logo"
              width={521 / 4}
              height={133 / 4}
            />
          </Link>
        )}

        <div className="header__menu">
          <div className="input-1">
            <input type="text" placeholder="Rechercher" />
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>

          <div className="header__menu--icon">
            {router.pathname === "/accueil" && (
              <i
                className="fa-solid fa-bell"
                onClick={() =>
                  (
                    document.querySelector(".home__notifs") as HTMLElement
                  ).classList.add("home__notifs--open")
                }
              ></i>
            )}

            {router.pathname !== "/compte" && (
              <Link href="/compte">
                <i className="fa-solid fa-user"></i>
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

const Header = () => {
  const router = useRouter();
  const [searchFocused, setSearchFocused] = useState(false);

  const openNotifs = () => {
    (document.querySelector(".home__notifs") as HTMLElement).classList.add(
      "home__notifs--open"
    );
    (document.querySelector(".home__posts") as HTMLElement).style.display =
      "none";
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

        <div className="header__right">
          <div className="header__right--search">
            <div className="input-1">
              <input
                type="text"
                placeholder="Rechercher"
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
              />
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <div
              className="results-container"
              style={{ display: searchFocused ? "block" : "none" }}
            >
              <div className="results-container__result">
                <div>
                  <Image
                    src="/assets/profil-picto.png"
                    alt="logo"
                    width={96 / 4}
                    height={119 / 4}
                  />
                  <p>John Doe</p>
                </div>
                <i className="fa-solid fa-angle-right"></i>
              </div>
              <div className="results-container__result">
                <div>
                  <Image
                    src="/assets/profil-picto.png"
                    alt="logo"
                    width={96 / 4}
                    height={119 / 4}
                  />
                  <p>John Doe</p>
                </div>
                <i className="fa-solid fa-angle-right"></i>
              </div>
            </div>
          </div>

          <div className="header__right--icon">
            {router.pathname === "/accueil" && (
              <i className="fa-solid fa-bell" onClick={openNotifs}></i>
            )}

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

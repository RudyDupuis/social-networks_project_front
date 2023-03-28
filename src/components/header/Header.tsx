import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import SearchInput from "./SearchInput";

const Header = () => {
  const router = useRouter();

  const openNotifs = () => {
    const notifs = document.querySelector(".home__notifs");
    notifs?.classList.add("home__notifs--open");

    const posts = document.querySelector(".home__posts");
    (posts as HTMLElement).style.display = "none";
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
          <SearchInput />

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

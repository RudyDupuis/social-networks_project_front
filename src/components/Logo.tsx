import Image from "next/image";
import React, { useEffect, useState } from "react";

const Logo = () => {
  //Change the image according to the theme
  const [currentTheme, setCurrentTheme] = useState("");

  useEffect(() => {
    setCurrentTheme(
      localStorage.getItem("theme") ? localStorage.theme : "light"
    );
  }, []);

  return (
    <div className="logo">
      {currentTheme === "dark" ? (
        <Image
          src="/assets/logo-dark.png"
          alt="logo"
          priority={true}
          width={521 / 2.7}
          height={133 / 2.7}
        />
      ) : (
        <Image
          src="/assets/logo.png"
          alt="logo"
          priority={true}
          width={521 / 2.7}
          height={133 / 2.7}
        />
      )}
    </div>
  );
};

export default Logo;

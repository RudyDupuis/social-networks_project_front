import Image from "next/image";
import React, { useEffect, useState } from "react";

const LogoLoginRegister = () => {
  //Change the image according to the theme
  const [currentTheme, setCurrentTheme] = useState("");

  useEffect(() => {
    setCurrentTheme(
      localStorage.getItem("theme") ? localStorage.theme : "light"
    );
  }, []);

  return (
    <div>
      {currentTheme === "dark" ? (
        <Image
          src="/assets/logo-dark.png"
          alt="logo"
          width={521 / 2.7}
          height={133 / 2.7}
        />
      ) : (
        <Image
          src="/assets/logo.png"
          alt="logo"
          width={521 / 2.7}
          height={133 / 2.7}
        />
      )}
    </div>
  );
};

export default LogoLoginRegister;

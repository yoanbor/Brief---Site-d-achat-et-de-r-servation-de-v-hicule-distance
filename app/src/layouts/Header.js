import React from "react";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import LogoCompte from "../components/LogoCompte";

const Header = () => {
  return (
    <header>
      <ul>
        <li>
          <Logo />
        </li>
        <li>
          <Navigation />
        </li>
        <li>
          <LogoCompte />
        </li>
      </ul>
    </header>
  );
};

export default Header;

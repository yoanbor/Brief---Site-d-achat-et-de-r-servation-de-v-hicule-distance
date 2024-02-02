import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <ul>
        <NavLink to="/">
          <li>BROUMBROUM © 2024</li>
        </NavLink>{" "}
        <NavLink to="/">
          <li>Mentions légales</li>
        </NavLink>
        <NavLink to="/">
          <li>À propos</li>
        </NavLink>
      </ul>
    </footer>
  );
};

export default Footer;

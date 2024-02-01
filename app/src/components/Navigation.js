import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink to="/">
          <li>L'ASSOCIALE</li>
        </NavLink>
        <NavLink to="/lasolideair">
          <li>lA SOLIDE AIR</li>
        </NavLink>
        <NavLink to="/LaVioque">
          <li>LA VIOQUE</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;

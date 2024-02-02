import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink to="/">
          <li>l'associale</li>
        </NavLink>
        <NavLink to="/">
          <li>la solide air</li>
        </NavLink>
        <NavLink to="/">
          <li>la vioque</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;

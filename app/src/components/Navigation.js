import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink to="/">
          <li>l'associale</li>
        </NavLink>
        <NavLink to="/Lasolideair">
          <li>la solide air</li>
        </NavLink>
        <NavLink to="/Lavioque">
          <li>la vioque</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;

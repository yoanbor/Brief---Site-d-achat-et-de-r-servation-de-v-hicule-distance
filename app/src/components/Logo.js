import React from "react";
import { NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <div className="logo">
      <ul>
        <NavLink to="/">
          <li>
            <img
              src="../assets/icons/Logo Broumbroum.svg"
              alt="Logo BroumBroum"
            />
          </li>
          <li>BROUMBROUM</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Logo;

import React from "react";
import { NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <div className="logo">
      <NavLink to="/">
        <ul>
          <li>
            <img
              src="./assets/icons/Logo Broumbroum.svg"
              alt="Logo BroumBroum"
            />
          </li>
          <li>
            <h2>BROUMBROUM</h2>
          </li>
        </ul>
      </NavLink>
    </div>
  );
};

export default Logo;

import React from "react";
import { NavLink } from "react-router-dom";

import "../styles/styles.css";

const Header = props => {
  return (
    <div>
      <nav className="header">
        <NavLink exact to="/" className="logo">
          <div className="palette" />
          artful
        </NavLink>
        <NavLink exact to="/" className="login-logout">
          LOGIN
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;

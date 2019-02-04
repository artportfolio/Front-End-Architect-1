import React from "react";
import { NavLink } from "react-router-dom";
import "../fontawesome";
import "../styles/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = props => {
  return (
    <div>
      <nav className="header">
        <NavLink exact to="/" className="logo">
          <FontAwesomeIcon className="palette" icon={["far", "palette"]} />
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

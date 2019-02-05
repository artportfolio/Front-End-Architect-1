import React from "react";
import { NavLink } from "react-router-dom";
import { MdPalette } from "react-icons/md";
import "../styles/styles.css";

const Header = props => {
  return (
    <div>
      <nav className="header">
        <NavLink exact to="/" className="logo">
          <div className="palette">
            <MdPalette />
          </div>
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

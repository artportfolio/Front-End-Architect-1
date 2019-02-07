import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { logoutUser } from "../store/actions/authActions";
import {
  MdPalette,
  MdAddCircleOutline,
  MdModeEdit,
  MdExitToApp
} from "react-icons/md";
import "../styles/styles.css";

export class Header extends Component {
  render() {
    return (
      <div>
        <nav className="header">
          <NavLink exact to="/" className="logo">
            <div className="palette">
              <MdPalette />
            </div>
            <span className="logotype">artful</span>
          </NavLink>
          <div className="userMenu">
            {this.props.loggedIn ? (
              <span className="icons">
                <MdAddCircleOutline />
                <MdModeEdit />
                <MdExitToApp onClick={this.props.logoutUser} />
              </span>
            ) : null}
          </div>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.loggedIn,
  logInMessage: state.auth.logInMessage
});

const mapDispatchToProps = {
  logoutUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

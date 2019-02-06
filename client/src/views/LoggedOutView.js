import React, { Component } from "react";
import { connect } from "react-redux";

import { LoginForm } from "./Login";
import { RegistrationForm } from "./Register";

export class LoggedOutView extends Component {
  render() {
    return (
      <div>
        {/* <BreadCrumbs />
        <PostsList /> */}
        <div className="login-register-forms">
          <RegistrationForm className="registrationForm" />
          <LoginForm className="loginForm" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoggedOutView);

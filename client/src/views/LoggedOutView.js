import React, { Component } from "react";
import { connect } from "react-redux";
import BreadCrumbs from "../components/BreadCrumbs";
import PhotoList from "../components/PhotoList";
import { LoginForm } from "./Login";
import { RegistrationForm } from "./Register";

export class LoggedOutView extends Component {
  render() {
    return (
      <div>
        {/* <BreadCrumbs />
        <PhotoList /> */}
        <LoginForm />
        {/* <RegistrationForm /> */}
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

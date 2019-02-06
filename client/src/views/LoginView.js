import React, { Component } from "react";
import { connect } from "react-redux";
import { Login } from "./Login";
import { loginUser } from "../store/actions";

export class LoginView extends Component {
  render() {
    return (
      <div>
        <Login loginUser={this.props.loginUser} />
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  loginUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginView);

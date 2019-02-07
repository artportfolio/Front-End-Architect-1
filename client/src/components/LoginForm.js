import React, { Component } from "react";
import { connect } from "react-redux";
import { Formik, Form, Field } from "formik";
import { loginUser } from "../store/actions/authActions";
import "../styles/styles.css";
import "../styles/form.css";
import logo from "../assets/logo.png";

class LoginForm extends Component {
  handleSubmit = (values, { props = this.props, setSubmitting }) => {
    this.props.loginUser(values);
    setSubmitting(false);
    return;
  };

  render() {
    return (
      <form>
        <Formik
          initialValues={{
            username: "",
            password: ""
          }}
          onSubmit={this.handleSubmit}
          render={formProps => {
            return (
              <div className="loginForm">
                <h1>Returning Members</h1>
                <Form>
                  <Field type="text" name="username" placeholder="" />

                  <Field type="password" name="password" placeholder="" />

                  <button type="submit" disabled={formProps.isSubmitting}>
                    LOGIN
                  </button>
                </Form>
                <div className="login-logo">
                  <img src={logo} alt="artful logo" />{" "}
                </div>
              </div>
            );
          }}
        />
      </form>
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
)(LoginForm);

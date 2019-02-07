import React, { Component } from "react";
import { connect } from "react-redux";
import { Formik, Form, Field } from "formik";
import { registerUser } from "../store/actions/userActions";
import "../styles/styles.css";
import "../styles/form.css";

class RegisterForm extends Component {
  handleSubmit = (values, { props = this.props, setSubmitting }) => {
    this.props.registerUser(values);
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
              <div className="registrationForm">
                <h1>New Members</h1>
                <Form>
                  <Field
                    type="text"
                    name="username"
                    label="Username"
                    placeholder=""
                  />

                  <Field type="text" name="fullName" placeholder="" />

                  <Field type="password" name="password" placeholder="" />

                  <Field type="text" name="email" placeholder="" />

                  <Field type="text" name="userImgUrl" placeholder="" />

                  <button type="submit" disabled={formProps.isSubmitting}>
                    SIGN UP
                  </button>
                </Form>
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
  registerUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterForm);

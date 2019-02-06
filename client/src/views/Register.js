import React from "react";
import { withFormik } from "formik";
import * as Yup from "yup";
import classnames from "classnames";

import "../styles/form.css";

const formikEnhancer = withFormik({
  validationSchema: Yup.object().shape({
    username: Yup.string()
      .min(6, "Username must be minimum of 6 characters.")
      .required("A username is required."),
    fullName: Yup.string()
      .min(2, "C'mon, your parents didn't name you that!")
      .required("Your name is required."),
    password: Yup.string()
      .min(6, "Password must be a minimum of 6 characters.")
      .required("A password is required."),
    email: Yup.string().email("Invalid email address"),
    userImgUrl: Yup.string().url("This doesn't look like a URL")
  }),

  mapPropsToValues: ({ user }) => ({
    ...user
  }),
  handleSubmit: (payload, { setSubmitting }) => {
    alert(JSON.stringify(payload, null, 2));
    setSubmitting(false);
  },
  displayName: "MyForm"
});

const InputFeedback = ({ error }) =>
  error ? <div className="input-feedback">{error}</div> : null;

const Label = ({ error, className, children, ...props }) => {
  return (
    <label className="label" {...props}>
      {children}
    </label>
  );
};

const TextInput = ({
  type,
  id,
  label,
  error,
  value,
  onChange,
  className,
  ...props
}) => {
  const classes = classnames(
    "input-group",
    {
      "animated shake error": !!error
    },
    className
  );
  return (
    <div className={classes}>
      <Label htmlFor={id} error={error}>
        {label}
      </Label>
      <input
        id={id}
        className="text-input"
        type={type}
        value={value}
        onChange={onChange}
        {...props}
      />
      <InputFeedback error={error} />
    </div>
  );
};
const MyForm = props => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting
  } = props;
  return (
    <form onSubmit={handleSubmit}>
      <TextInput
        id="username"
        type="text"
        label="Username"
        placeholder=""
        error={touched.username && errors.username}
        value={values.username || ""}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <TextInput
        id="fullName"
        type="text"
        label="Full Name"
        placeholder=""
        error={touched.fullName && errors.fullName}
        value={values.fullName || ""}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <TextInput
        id="password"
        type="password"
        label="Password"
        placeholder={values.password}
        error={touched.password && errors.password}
        value={values.password || ""}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <TextInput
        id="email"
        type="text"
        label="Email"
        placeholder=""
        error={touched.email && errors.email}
        value={values.email || ""}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <TextInput
        id="userImgUrl"
        type="text"
        label="Image URL (of you, maybe?)"
        placeholder=""
        error={touched.userImgUrl && errors.userImgUrl}
        value={values.userImgUrl || ""}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <button type="submit" disabled={isSubmitting}>
        Submit
      </button>
    </form>
  );
};

export const RegistrationForm = formikEnhancer(MyForm);

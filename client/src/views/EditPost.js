import React from "react";
import { withFormik } from "formik";
import * as Yup from "yup";
import classnames from "classnames";
import axios from "axios";
import "../styles/styles.css";
import "../styles/form.css";

const formikEnhancer = withFormik({
  validationSchema: Yup.object().shape({
    postName: Yup.string().min(
      2,
      "You can't even come up with a name longer than two characters?"
    ),
    description: Yup.string().min(
      2,
      "You can do better than that...try three characters at least."
    ),
    imageUrl: Yup.string().url("This doesn't look like a URL")
  }),

  mapPropsToValues: ({ user }) => ({
    ...user
  }),
  handleSubmit: (payload, { setSubmitting }) => {
    const endpoint = "https://backend-art.herokuapp.com/api/register";
    console.log(payload);
    axios
      .post(endpoint, payload)
      .then(res => {
        console.log(res.data);
        localStorage.setItem("register", res.data);
      })
      .catch(err => {
        console.error("ERROR", err);
      });
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
    <div className="editPostForm">
      <form onSubmit={handleSubmit}>
        <h1>Edit Post</h1>
        <TextInput
          id="postName"
          type="text"
          label="Post Name"
          placeholder=""
          error={touched.postname && errors.postname}
          value={values.postname || ""}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <TextInput
          id="imageUrl"
          type="text"
          label="image URL"
          placeholder=""
          error={touched.imageUrl && errors.imageUrl}
          value={values.imageUrl || ""}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <TextInput
          id="description"
          type="text"
          label="Description"
          placeholder={values.description}
          error={touched.description && errors.description}
          value={values.description || ""}
          onChange={handleChange}
          onBlur={handleBlur}
        />

        <button type="submit" disabled={isSubmitting}>
          Update Post
        </button>
      </form>
    </div>
  );
};

export const EditPostForm = formikEnhancer(MyForm);

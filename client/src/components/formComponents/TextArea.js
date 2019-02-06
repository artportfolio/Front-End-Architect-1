import React from "react";
import PropTypes from "prop-types";

const TextArea = props => {
  return (
    <div className="form-group">
      <label className="form-label">{props.title}</label>
      <textarea
        className="form-control"
        name={props.name}
        rows={props.rows}
        cols={props.cols}
        value={props.value}
        onChange={props.handleChange}
        placeholder={props.placeholder}
      />
    </div>
  );
};

TextArea.propTypes = {};

export default TextArea;

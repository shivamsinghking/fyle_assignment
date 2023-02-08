import React from "react";
import './FormInput.css'

const FormInput = (props) => {
  const { className = '', label, errorMessage, onChange, id, ...inputProps } = props;

  return (
    <div className={`formInput ${className}`}>
      <label>{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
      />
      {errorMessage && <p className={`${className}-err-message`}>{errorMessage}</p>}
    </div>
  );
};

export default FormInput;
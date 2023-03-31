import React from "react";
import {Field, ErrorMessage} from "formik";

const TextField = ({name, label, placeholder}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <Field id={name} name={name} placeholder={placeholder} className="form-control" />
      <ErrorMessage
        name={name}
        render={(msg) => <div className="text-danger">{msg}</div>}
      />
    </div>
  );
};

export default TextField;

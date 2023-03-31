import React from "react";
import CustomForm from "../components/Form/CustomForm";
import formConfig from "../components/utils/formConfig"; // Adjust the import path according to the location of formConfig.js

const Membership = () => {
  return (
    <div className="container">
      <h1>Membership</h1>
      <CustomForm formConfig={formConfig} onSubmit={(values) => console.log(values)} />
    </div>
  );
};

export default Membership;

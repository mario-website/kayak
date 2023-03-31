import React from "react";
import CustomForm from "../components/Form/CustomForm";

const Membership = () => {
  return (
    <div className="container">
      <h1>Membership</h1>
      <CustomForm onSubmit={(values) => console.log(values)} />
    </div>
  );
};

export default Membership;

import React from "react";
import {TextField, Button} from "@mui/material"; // Import the TextField and Button components

const CustomForm = ({formConfig, onSubmit}) => {
  // Create a state to store the form values
  const [formValues, setFormValues] = React.useState({});

  // Handle the change event for input fields
  const handleChange = (event) => {
    const {name, value} = event.target;
    setFormValues((prevValues) => ({...prevValues, [name]: value}));
  };

  // Map through formConfig and create form fields
  const renderFormFields = formConfig.map((field, index) => {
    const {type, name, label, placeholder, validation} = field;

    return (
      <TextField
        key={index}
        type={type}
        name={name}
        label={label}
        placeholder={placeholder}
        fullWidth
        required={!!validation?.required}
        helperText={validation?.required}
        onChange={handleChange}
        margin="normal"
        variant="outlined"
      />
    );
  });

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit(formValues);
      }}>
      {renderFormFields}
      <Button
        type="submit"
        variant="contained"
        color="primary"
        style={{marginTop: "1rem"}}>
        Submit
      </Button>
    </form>
  );
};

export default CustomForm;

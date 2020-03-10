//use the built-in useState hook to keep track of all input values inside the form
import { useState } from "react";

//component will take a callback as an input parameter
const useRegistrationForm = (callback) => {
  //use the useState hook to initialize a state variable and its setter function
  const [inputs, setInputs] = useState({});
  //a function that manages the submit event
  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
    }
    callback();
  }
  const handleInputChange = (event) => {
  //a function to manage the event where the user gives some input
    event.persist();
    setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
  }
  // return the above functions
  return {
    handleSubmit,
    handleInputChange,
    inputs
  };
}

export default useRegistrationForm;






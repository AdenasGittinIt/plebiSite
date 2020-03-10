import React from "react";
import useRegistrationForm from "../../utils/CustomHooks";

const RegistrationForm = props => {
  //destructuring the registration form object so the state variable and handler funtions can be used.
  const register = () => {
    alert(`The email ${inputs.email} is registered, you're ready to create a watchlist`)
  }
  const {inputs, handleInputChange, handleSubmit} = useRegistrationForm(register);
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>email address</label>
        <input type="email" name="email address" required onChange={handleInputChange} value={inputs.email}/>
      </div>
      <div>
        <label>password</label>
        <input type="password" name="password1" required onChange={handleInputChange} value={inputs.password1}/>
      </div>
      <div>
        <label>confirm password</label>
        <input type="password" name="password2" required onChange={handleInputChange} value={inputs.password2} />
      </div>
      <button type="submit">Register</button>
    </form>
  )
}

export default RegistrationForm;
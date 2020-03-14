import React, { useState, useEffect } from "react";
import { FormGroup, Form, Label, Input, Button } from "reactstrap";
import UserContext from "../../utils/UserContext";


const LoginForm = () => {
  const [loginState, setLoginState] = useState({
    email: "",
    password: ""
  });

  const { email, password } = loginState

  

  const login = (event) => {
    event.preventDefault();
    console.log(`The email ${userLogin.email}  ${userLogin.password}`)
  }

  return (
    <UserContext.Provider value={userLogin}>
    <Form >
       <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input type="email" value={email} name="email" onChange={handleInputChageEmail()} id="exampleEmail" placeholder="with a placeholder" />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input type="password" value={password} name="password" onChange={handleInputChagePassword()} id="examplePassword" placeholder="password placeholder" />
      </FormGroup>
      <Button onClick={()=>{login()}}>Login</Button>
    </Form>
    </UserContext.Provider>
  )
}

export default LoginForm;
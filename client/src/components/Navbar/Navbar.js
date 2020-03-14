import React from "react";
import { Navbar } from "reactstrap";

// import {  FormGroup, Label, Input } from "reactstrap";

const NavBar = () => {
    return (
      <Navbar>
          <a href="/">Home</a>
          <a href="/registration">Register</a>
          <a href="/login">Log In</a>
          <a href="memberlisting/Senate">Senate</a>
          <a href="memberlisting/House">House</a>
      </Navbar>
    )
  }

export default NavBar 
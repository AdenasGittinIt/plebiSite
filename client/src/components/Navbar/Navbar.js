import React from "react";
import { Navbar } from "reactstrap";
import { PromiseProvider } from "mongoose";
// import {  FormGroup, Label, Input } from "reactstrap";

const NavBar = () => {
    return (
      <Navbar>
          <a href="/login">Log In   </a>
          <a href="memberlisting">Senate   </a>
          <a href="/memberlisting">House    </a>
      </Navbar>
    )
  }

export default NavBar
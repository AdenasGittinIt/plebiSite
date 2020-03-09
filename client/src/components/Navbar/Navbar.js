import React from "react";
import { FormGroup, Label, Input, Button, Navbar} from "reactstrap";


const NavBar = () => {
  return (
    <Navbar inline>
      <Button>Home</Button>
      <Button>Search Senate</Button>
      <Button>Search House</Button>
    </Navbar>
  )
}

export default NavBar
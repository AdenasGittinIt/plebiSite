import React from "react";
import { FormGroup, Label, Input, Button, Navbar} from "reactstrap";


const Navigate = () => {
  return (
    <Navbar inline>
      <Button>Home</Button>
      <Button>Search Senate</Button>
      <Button>Search House</Button>
    </Navbar>
  )
}

export default Navigate
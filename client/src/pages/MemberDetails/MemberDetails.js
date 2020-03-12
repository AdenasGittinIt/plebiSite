import React from "react";
import { Container } from "reactstrap";



const MemberDetails = props => {

  return (
    <Container>
    <img src={`https://theunitedstates.io/images/congress/225x275/${props.image}.jpg`} alt={`${props.firstName}`}></img>
    <h2>Name: {props.firstName} {props.lastName}</h2>
    <h3>DOB: {props.dob}</h3>
    <h3>Next Election: {props.nextElection}</h3>
    </Container>
  )
}

export default MemberDetails
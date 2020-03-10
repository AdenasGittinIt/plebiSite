import React from "react";
import { Table, Container, Col, Row } from "reactstrap";
import { results } from "../../data/sample.json"


const MemberListing = props => {
  
  return (
    <Container>
      <Row>
        <h2>
          {results[0].chamber === "House" ? <h2> United States House of Representatives</h2> : <h2> United States Senate</h2>}
        </h2>
      </Row>
      <Row>
        <h3>Search Bar Here</h3>
      </Row>
      <Row>
        <Col>
          <Table>
            <thead>
                <tr>
                    <th>Member First Name</th>
                    <th>Member Last Name</th>
                    <th>State</th>
                    <th>Party Affiliation</th>
                    {/* <th>View Details?</th> */}
                </tr>
            </thead>
            <tbody>
              {results[0].members.map(member => (
                <tr>
                      <td>
                      {member.first_name}
                      </td> 
                      <td>
                      {member.last_name}
                      </td> 
                      <td>
                      {member.state}
                      </td> 
                      <td>
                      {member.party === "R" ? "Republican" : "Democrat"}
                      </td> 
                </tr>
                ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>


  )
}

export default MemberListing;
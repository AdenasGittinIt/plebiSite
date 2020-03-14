import React, { useState, useEffect } from "react";
import { Table, Container, Col, Row } from "reactstrap";
import MemberSearch from "../../components/MemberSearch/MemberSearch";
import API from "../../utils/API";
import NavBar from "../../components/Navbar/Navbar";

const MemberListing = () => {
  const [membersInfo, updateMembersInfo ] = useState({
    members: [],
  });
  const { members } = membersInfo;

  useEffect(() => {
    const windowChamber = window.location.pathname.split("/")[2].split(".")[0];
    console.log(windowChamber)
    getMembers(windowChamber) 
  },[]);

  const getMembers = congressChamber => {
    API.getMembers(congressChamber)
    .then(res => {
      // console.log(res.data.results[0].chamber, res.data.results[0].members)
      updateMembersInfo({
        chamber: res.data.results[0].chamber,
        members: res.data.results[0].members
      })
    })
    .catch(err => {
      console.log(err)
    });
  }

  return (
    <Container>
      <Row>
        <Col>
          <NavBar />          
        </Col>
      </Row>
      <Row>
        <Col>
          <MemberSearch />          
        </Col>
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
                    <th>View Details</th>
                    {/* Future Dev... make the entire table row clickable and remove the view details column */}
                </tr>
            </thead>
            <tbody>
              {members.map(member => (
                  <tr key={`${member.id}-${member.party}`} data={`${member.id}`}>
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
                        {member.party //=== "R" ? "Republican" : "Democrat" I wanted the full party name to display but there are more than two parties//
                        } 
                        </td> 
                        <td>
                          <a href={`/memberdetails/${member.id}`}>View Details</a>         
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
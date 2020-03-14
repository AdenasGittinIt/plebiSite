import React, { useState, useEffect } from "react";
import {
  Container, Col, Row, ListGroup, ListGroupItem, ListGroupItemHeading, Button } from "reactstrap";
import API from "../../utils/API";
import NavBar from "../../components/Navbar/Navbar";
import MemberContext from "../../utils/MemberContext";

const MemberDetails = () => {
  const [memberDetailState, setMemberDetailState] = useState({
    memberDetails: []
  });

  const { memberDetails } = memberDetailState;

  useEffect(() => {
    const member_id = window.location.pathname.split("/")[2].split(".")[0];
    console.log(member_id);
    getOneMember(member_id);
  }, []);

  const saveMember = savedMember =>{
    console.log("savedMember:", savedMember.first_name)

    API.addToWatchlist(savedMember).then(function(data){
      console.log("ready to save data", data)
    })

  }
  const getOneMember = id => {
    API.getOneMember(id)
      .then(res => {
        console.log(res.data.results);
        setMemberDetailState({
          memberDetails: res.data.results
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <>
    <NavBar />
    <Container>
        <Row>
          <Col>
          </Col>
        </Row>
      <MemberContext.Provider value={memberDetailState}>
        {  memberDetails[0] === undefined ? "not found" : console.log("member:",  memberDetails[0].roles[0].votes_with_party_pct)}
        <ListGroup>
          <ListGroupItemHeading>
            { memberDetails[0] === undefined ? "not found" : memberDetails[0].first_name} { memberDetails[0] === undefined  ? "not found" : memberDetails[0].last_name}:  { memberDetails[0] === undefined  ? "not found" : memberDetails[0].roles[0].title}
          </ListGroupItemHeading>

            <ListGroupItem tag="a">
              <img src={memberDetails[0] === undefined ? "not found" : `https://theunitedstates.io/images/congress/225x275/${memberDetails[0].id}.jpg`} alt="congress member"></img>
            </ListGroupItem>

            <ListGroupItem tag="a" >
              Party Affiliation: { memberDetails[0] === undefined ? "not found" : memberDetails[0].current_party === "R" ? "Repulican" : memberDetails[0].current_party === "D" ? "Democratic" : "Independant"}
            </ListGroupItem>

            <ListGroupItem tag="a" href={ memberDetails[0] === undefined ? "not found" : memberDetails[0].url} target="blank" action>
            { memberDetails[0] === undefined  ? "not found" : memberDetails[0].url}
            </ListGroupItem>

            <ListGroupItem tag="a"> {`Votes with Party: 
            ${ memberDetails[0] === undefined ? "not found" : memberDetails[0].roles[0].votes_with_party_pct}%`}
            </ListGroupItem>

            <ListGroupItem tag="a"> {`Votes against Party: 
            ${ memberDetails[0] === undefined  ? "not found" : memberDetails[0].roles[0].votes_against_party_pct}%`}
            </ListGroupItem>
        </ListGroup>
        <Button onClick={ ()=>{saveMember(memberDetails[0]) } }>Save to Watchlist</Button>
        </MemberContext.Provider>
      </Container>
      </>
  );
};

export default MemberDetails;

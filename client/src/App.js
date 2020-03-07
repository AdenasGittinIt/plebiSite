
import React, { useState, useEffect } from 'react';
import Navigate from "./components/navigate";
import sampleData from "./data/sample.json"
import MemberDetails from './components/memberDetails';
// import { Container, Row, Col } from "reactstrap"
import moment from "moment";
// import sampleData from "./data/sample.json"
// import SearchBar from "./components/SearchBar"
// import DayDetails from "./components/DayDetails"
// import DayCard from "./components/DayCard"


function App() {
  return (
    <>
    <Navigate></Navigate>
    {console.log(sampleData)}
    <MemberDetails
     image={sampleData.results[0].member_id} 
     firstName={sampleData.results[0].first_name}
     lastName={sampleData.results[0].last_name}
     dob={moment(sampleData.results[0].date_of_birth, "YYYY-MM-DD").format("MMMM Do, YYYY")}
     nextElection={sampleData.results[0].roles[0].next_election}

    />
     
    </>
  );
}

export default App;

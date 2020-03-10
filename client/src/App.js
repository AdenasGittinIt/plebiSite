
import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from "reactstrap"
import Login from './components/Login/Login';
import LogoButton from './components/LogoButton/LogoButton';
import MemberCard from './components/MemberCard/MemberCard'; 
import MemberDetails from './components/MemberDetails/MemberDetails'; 
import MemberListing from './components/MemberListing/MemberListing'; 
import MemberSearch from './components/MemberSearch/MemberSearch'; 
import NavBar from "./components/Navbar/Navbar";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";  
import SplashPage from "./pages/SplashPage/SplashPage"; 
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import moment from "moment";
import sampleData from "./data/sample.json"





function App() {
  return (
    <Router>
      <Container>
        <Switch>
          <Route exact path="/splashpage" component={SplashPage}/>
          <Route exact path="/registration" component={RegistrationForm} />
          <Route exact path="/houseresults" component={MemberListing} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;

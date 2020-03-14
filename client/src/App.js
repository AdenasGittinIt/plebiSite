
import React from 'react';
import Login from './components/Login/Login';
// import LogoButton from './components/LogoButton/LogoButton';
// import MemberCard from './components/MemberCard/MemberCard'; 
import MemberDetails from './pages/MemberDetails/MemberDetails'; 
import MemberListing from './pages/MemberListing/MemberListing'; 
// import MemberSearch from './components/MemberSearch/MemberSearch'; 
// import NavBar from "./components/Navbar/Navbar";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";  
import SplashPage from "./pages/SplashPage/SplashPage"; 
import Home from "./pages/Home/Home"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
// import moment from "moment";
// import sampleData from "./data/sample.json"


function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/splashpage" component={SplashPage}/>
          <Route exact path="/" component={Home}/> 
          <Route exact path="/registration" component={RegistrationForm} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/results" component={MemberListing} />
          <Route exact path="/memberlisting" component={MemberListing} />
          <Route exact path="/memberdetails/:id" component={MemberDetails} />
        </Switch>
    </Router>
  );
}

export default App;

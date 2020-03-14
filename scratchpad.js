//SEARCH BAR
import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="language">Search Term:</label>
        <input
          value={props.results}
          onChange={props.handleInputChange}
          name="term"
          list="term"
          type="text"
          className="form-control"
          placeholder="Type in a search term to begin"
          id="term"
        />
      </div>
    </form>
  );
}

export default SearchForm;


//APP BEFORE
<Navbar></Navbar>
{console.log(sampleData)}
<MemberDetails
 image={sampleData.results[0].member_id} 
 firstName={sampleData.results[0].first_name}
 lastName={sampleData.results[0].last_name}
 dob={moment(sampleData.results[0].date_of_birth, "YYYY-MM-DD").format("MMMM Do, YYYY")}
 nextElection={sampleData.results[0].roles[0].next_election}
 />


 //FORM COPIED FROM THE INTERWEBS
 <input type="image" id="image" alt="Login"
       src="/media/examples/login-button.png"></input>

       <form>
       <div>
         <label>First Name</label>
         <input type="text" name="firstName" required />
         <label>Last Name</label>
         <input type="text" name="lastName" required />
       </div>
       <div>
         <label>Email Address</label>
         <input type="email" name="email" required />
       </div>
       <div>
         <label>Password</label>
         <input type="password" name="password1"/>
       </div>
       <div>
         <label>Re-enter Password</label>
         <input type="password" name="password2"/>
       </div>
       <button type="submit">Sign Up</button>
     </form>
     

     //Alternative display as cards for the house or senate search results


     {member.first_name},
     {member.last_name},
     {member}

    //  ./data/sample.json

    {console.log(results[0].members)}

    //SEEDS.... attempt sepaarate watchlist

    const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/mongoWatchList")

const userSeed = [
  {
    user_email: "march1120@email.com",
    password: "passWord123"
  }
]

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

  
  console.log(db.User)

const watchlistSeed = [
  {
    member_id: "B001288", 
    first_name: "Corey Anthony",
    last_name: "Userer",
    current_party: "D",
    state: "NJ"
  },
  {
    member_id: "W000187", 
    first_name: "Maxine",
    last_name: "Waters",
    current_party: "D",
    state: "CA"
  },
  {
    member_id: "P000593", 
    first_name: "Ed",
    last_name: "PERLMUTTER",
    current_party: "D",
    state: "CO"
  }
]

  db.Watchlist 
  .remove({})
  .then(() => db.Watchlist.collection.insertMany(watchlistSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

  //View details button
  <a href={`/memberdetails/${member.id}`}/>
  // when the 'View Details' link is clicked, I need to send an API call for specific member data and then render the member details page with it.


  // From api-rooutes.js

// const APIRoutes = function(app) {
//   app.get("/api/users", function(req,res) {
//     db.User.find()
//     .then(function (response) {
//       res.json(response)
//     })
//   })
// }

// module.exports = APIRoutes

app.post("/login", { failureRedirect: "/login" },
  function(req,res) {
    res.redirect("/")
  }
)

const getSpecMember = id => {
  API.getSpecMember(id)
  .then(res => {
    // console.log(res.data.results[0].chamber, res.data.results[0].members)
    updateMemberInfo({
      chamber: res.data.results[0].chamber,
      members:res.data.results[0].members
    })
  })
  .catch(err => {
    console.log(err)
  });
}


//Original member details function

import React from "react";
import { Container } from "reactstrap";



const MemberDetails = props => {

  return (
    <Container>
    <img src={memberDetails[0] === undefined  ? "not found" : `https://theunitedstates.io/images/congress/225x275/${memberDetails[0].image}.jpg`} alt={`${memberDetails[0].first_name}`}></img>
    <h2>Name: {results.first_Name} {results.lastName}</h2>
    <h3>DOB: {props.dob}</h3>
    <h3>Next Election: {props.nextElection}</h3>
    </Container>
  )
}

export default MemberDetails

const ArrayObjects = [{
  first_name: "",
  last_name: "",
  url: "",
  bills_sponsored: "No Bills Sponsored",
  bills_cosponsored: "No Bills Cosponsored",
  missed_votes_pct: "",
  votes_with_party_pct: 0,
  votes_against_party_pct: 0,
  roles[0].title: ""
},
{
title: "",
first: "",
last: "",
url: "",
bills_sponsored: "No Bills Sponsored",
bills_cosponsored: "No Bills Cosponsored",
missed_votes_pct: "",
votes_with_party_pct: 0,
votes_against_party_pct: 0
}
]


<ListGroupItem tag="a" href={ memberDetails[0] === undefined  ? "not found" : memberDetails[0].url} action>
{ memberDetails[0] === undefined  ? "not found" : memberDetails[0].url}
</ListGroupItem>


<ListGroup>
<ListGroupItem active tag="a" href="#" action>Cras justo odio</ListGroupItem>
<ListGroupItem tag="a" href="#" action>Dapibus ac facilisis in</ListGroupItem>
<ListGroupItem tag="a" href="#" action>Morbi leo risus</ListGroupItem>
<ListGroupItem tag="a" href="#" action>Porta ac consectetur ac</ListGroupItem>
<ListGroupItem disabled tag="a" href="#" action>Vestibulum at eros</ListGroupItem>
</ListGroup>


import React, { useState, useEffect } from "react";
import { FormGroup, Form, Label, Input, Button } from "reactstrap";
import UserContext from "../../utils/UserContext";


const LoginForm = props => {


  import React from "react";
  import { Container, Row, Col } from "reactstrap";
  
  
  
  
  const Login = props => {
    return (
      <h2>Login</h2>
    )
  }
  
  export default Login;

  //destructuring the Login form object so the state variable and handler funtions can be used.
  const login = () => {

    alert(`The email ${userLogin.email}  ${userLogin.password}  is registered, you're ready to create a watchlist`)
  }

  return (
    <UserContext.Provider value={userLogin}>
    <Form >
       <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input type="email" value={email} name="email" onChange={handleInputChageEmail()} id="exampleEmail" placeholder="with a placeholder" />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input type="password" value={password} name="password" onChange={handleInputChagePassword()} id="examplePassword" placeholder="password placeholder" />
      </FormGroup>
      <Button onClick={()=>{login()}}>Login</Button>
    </Form>
    </UserContext.Provider>
  )
}

export default LoginForm;

app.post('/register', function(req, res){
  var password = req.body.password;
  var password2 = req.body.password2;

  if (password == password2){
    var newUser = new User({
      name: req.body.name,
      email: req.body.email,
      username: req.body.username,
      password: req.body.password
    });

    User.createUser(newUser, function(err, user){
      if(err) throw err;
      res.send(user).end()
    });
  } else{
    res.status(500).send("{errors: \"Passwords don't match\"}").end()
  }
});

const newUser = new User({
  email: req.body.email,
  password: req.body.password
});


//use the built-in useState hook to keep track of all input values inside the form
import { useState } from "react";

//component will take a callback as an input parameter
const useRegistrationForm = (callback) => {
  //use the useState hook to initialize a state variable and its setter function
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    password2: ""
  });
  //a function that manages the submit event
  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
      setInputs();
    }
  }
  // const handleInputChange = (event) => {
  // //a function to manage the event where the user gives some input
  //   event.persist();
  //   setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
  // }
  // return the above functions
  return {
    handleSubmit,
    // handleInputChange,
    inputs
  };
}

export default useRegistrationForm;


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



import axios from "axios"
const proPubKey = process.env.REACT_APP_PROPUBLICA_KEY;
//you can interface with the backend here

export default {
  getMembers: function(chamber) {
    return axios.get(
        `https://api.propublica.org/congress/v1/116/${chamber}/members.json`,
        { headers: { "X-API-Key": proPubKey } } 
      )
      // .then(res => {
      //   const chamberRes = res.data.results[0].chamber
      //   const { members } = res.data.results[0];
      // })
      .catch(err => {
        console.log(err);
      });
  },

  getSpecMember: function(member_id) {
    return axios.get(
      `https://api.propublica.org/congress/v1/members/${member_id}.json`,
      { headers: { "X-API-Key": proPubKey } }
    )
    .catch(err => {
      console.log(err);
    })
  },

  

};
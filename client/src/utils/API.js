import axios from "axios"
const proPubKey = process.env.REACT_APP_PROPUBLICA_KEY;
//you can interface with the backend here

export default {
  getMembers: function(chamber) {
    return axios.get(
        `https://api.propublica.org/congress/v1/116/${chamber}/members.json`,
        { headers: { "X-API-Key": proPubKey } } 
      )
      .catch(err => {
        console.log(err);
      });
  },

  getOneMember: function(id) {
    return axios.get(
      `https://api.propublica.org/congress/v1/members/${id}.json`,
      { headers: { "X-API-Key": proPubKey } }
    )
    .catch(err => {
      console.log(err);
    })
  },

  addToWatchlist: function(savedMember) {
    return axios.post(`/api/user_watchlist`, savedMember)
  }
};
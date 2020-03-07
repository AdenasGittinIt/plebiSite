const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/mongoWatchList")

const userSeed = [
  {
    user_email: "fred@email.com",
    password: "passWord123",
    watchlist: [
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

  }
]
console.log(db.User)
 
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
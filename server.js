const express = require("express");
const PORT = process.env.PORT || 3001
const mongoose = require("mongoose");


const app = express()

//middlware translates the users input into json
app.use(express.urlencoded({ extended:true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
const routes = require("./routes/APIRoutes");

routes(app)
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoWatchList"

mongoose.connect(MONGODB_URI);
app.listen(PORT, function(){
  console.log("app listening on http://localhost:" + PORT)
})




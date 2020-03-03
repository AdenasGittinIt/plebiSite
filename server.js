const express = require("express");
const app = express()
const PORT = process.env.PORT || 3001
const mongoose = require("mongoose");
const routes = require("./routes/APIRoutes");
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoWatchList";
const logger = require("morgan");
const flash = require("connect-flash");
const passport = require("passport");
const session = require("express-session");

//middlware translates the users input into json
app.use(express.urlencoded({ extended:true }));
app.use(express.json());
app.use(logger("dev"));
app.use(flash());
app.use(express.static("public"));
app.use(session({
  secret: "secret",
  resave: false,
  saveUninitialized: true,
  // cookie: { secure: true }
}));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);

mongoose.connect(MONGODB_URI, { userNewUrlParser: true }, (err) => {
  if (err) throw err;
  console.log("mongoose connection successful! ");
  app.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`connected on port ${PORT}`)
  })
})
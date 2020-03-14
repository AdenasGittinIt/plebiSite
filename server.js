const express = require("express");
const app = express()
const session = require("express-session");
const passport = require("./config/passport");
const PORT = process.env.PORT || 3001
const mongoose = require("mongoose");
const routes = require("./routes/api-routes");
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoWatchList";
const logger = require("morgan");

//middlware translates the users input into json
app.use(express.urlencoded({ extended:true }));
app.use(express.json());
app.use(logger("dev"));

app.use(express.static("public"));
app.use(session({
  secret: "keyboard cat",
  resave: true,
  saveUninitialized: false,
}));

app.use(passport.initialize());
app.use(passport.session());



// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

routes(app);

mongoose.connect(MONGODB_URI, { userNewUrlParser: true }, function(err) {
  if (err) throw err;
  console.log("mongoose connection successful! ");
  app.listen(PORT, function (err) {
    if (err) throw err;
    console.log(`connected on port ${PORT}`)
  })
})
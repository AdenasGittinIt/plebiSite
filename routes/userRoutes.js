const router = require("express").Router();
const passport = require("../config/passport");
const db = require("../models");
const authMiddleware = require("../config/middleware/authMiddleware");

router.post("/login", passport.authenticate("local", {
  failureRedirect:"/api/users/unauthorized",
  failureFlash: true
}), (req, res, next) => {
  console.log("login successful!")
  res.json({
    user: req.user,
    loggedIn: true
  });
});

router.post("/register", (req, res, next) => {
  db.User.findOne({user_email: req.body.user_email}, (err, user) => {
    if (err) throw err;
    if (user) {
      console.log("email already registered");
      return res.json("email already registered");
    }
    if (!user) {
      let newUser = new db.User({
        user_email: req.body.user_email,
        password: req.body.password,
        watchlist: req.body.ObjectId
      })
      newUser.password = newUser.generateHash(req.body.password);
      newUser.save((err) => {
        if (err) throw err;
        console.log("user saved!");
        res.redirect(307, "/")
      });
      }
    })
  });

  
// BELOW CODE FROM REACT AUTH
  // router.get("/unauthorized", function(req, res, next) {
  //   res.json({
  //     error: req.flash("error"),
  //     message: "user not authenticated"
  //   });
  // });
  
  // router.get("/profile", authMiddleware.isLoggedIn, function(req, res, next) {
  //   res.json({
  //     user: req.user,
  //     loggedIn: true
  //   });
  // });
  
  // router.get("/logout", authMiddleware.logoutUser, function(req, res, next) {
  //   res.json("User logged out successfully");
  // });
  
  // router.get("/admin", authMiddleware.isAdmin, function(req, res, next) {
  //   res.json({
  //     user: req.user,
  //     loggedIn: true
  //   });
  // });
  
  
  module.exports = router;
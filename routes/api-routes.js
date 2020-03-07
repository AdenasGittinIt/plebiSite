const db = require("../models");
const passport = require("../config/passport");

module.exports = function(app) {

  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    console.log(req.user)
    res.json(req.user);
  });

  app.post("/api/register", function(req, res) {
    db.User.create({
      email: req.body.email,
      password: req.body.password
    })
      .then(function() {
        res.redirect(307, "/api/login");
      })
      .catch(function(err) {
        res.status(401).json(err);
        console.log("registration failed")
      });
  });

  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/splash");
  });

  app.get("/api/user_watchlist", function(req, res) {
    if (!req.user) {
    
      res.json({});
    } else {
    
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });
};



// const APIRoutes = function(app) {
//   app.get("/api/users", function(req,res) {
//     db.User.find()
//     .then(function (response) {
//       res.json(response)
//     })
//   })
// }




// module.exports = APIRoutes
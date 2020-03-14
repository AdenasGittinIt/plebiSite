const db = require("../models");
const passport = require("../config/passport");


module.exports = function(app) {


app.post("/api/user_watchlist", function(req,res){
  console.log(req.body)
})


  app.post(
    "/api/login",
    function(req, res, next) {
      // call passport authentication passing the "local" strategy name and a callback function
      passport.authenticate("local", function(error, user, info) {
        // this will execute in any case, even if a passport strategy will find an error
        // log everything to console
        console.log(error);
        console.log(user);
        console.log(info);
        if (error) {
          return res.status(401).send(error);
        } else if (!user) {
          return res.status(401).send(info);
        } else {
          next();
        }
        res.status(401).send(info);
      })(req, res);
    },
    // function to call once successfully authenticated
    function(req, res) {
      console.log(res.status)
      res.status(200).send("logged in!");
    }
  );

  app.post("/api/register", function(req, res) {
    db.User.create({
      email: req.body.email,
      password: req.body.password
    })
      .then(function(response) {
        console.log(response + "You successfully registered");
        // res.redirect(307, "/api/login");
        res.sendStatus(200)
      })
      .catch(function(err) {
        res.sendStatus(401).json(err);
        console.log("registration failed");
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
        id: req.user.id,
        watchlist: req.user.watchlist
      });
    }
  });
};


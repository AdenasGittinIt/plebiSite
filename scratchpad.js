details.findOne({ age: 21, location: "New York" }, function(err, result) {
  if (err) {
    res.send(err);
  } else {
    res.send(result);
  }
});

passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      if (!user.verifyPassword(password)) { return done(null, false); }
      return done(null, user);
    });
  }
));

var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: username }, function(err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));

  // function(email, password, done) {
  //   db.User.findOne({ email: email }, function(err, user) {
  //     if (err) { return done(err); }
  //     if (!user) {
  //       return done(null, false, { message: 'Incorrect username.' });
  //     }
  //     if (!user.validPassword(password)) {
  //       return done(null, false, { message: 'Incorrect password.' });
  //     }
  //     return done(null, user);
  //   });
  // }

  function(email, password, done) {
    db.User.findOne({ email: email }, function(err, user) {
      console.log(user)
      if (err) { return done(err);}
      if (!user) { return done(null, false); }
      if (!user.verifyPassword(password, done())) 
      // { return done(null,false)}
      return done(null, user)
    });
  }

  User.find({name:'vlad','links.url':req.params.query}, function(err, foundUsers){
    // ---
 });

 app.post( "/api/login", passport.authenticate("local"),
 function(req, res) {
   res.json(req.user);
 });
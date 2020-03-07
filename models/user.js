const mongoose = require("mongoose");
const Schema = mongoose.Schema,
bcrypt = require('bcrypt'),
SALT_WORK_FACTOR = 10;

const usersSchema = new Schema (
  {
    email: { type: String, required: true, index: { unique: true } },
    password: { type: String, required: true },

    watchlist: [{
      member_id: { //congress member id
        type: String, 
        required: true
      },
      first_name: {
        type: String, 
        required: true
      },
      last_name: {
        type: String, 
        required: true
      },
      current_party: {
        type: String, 
        required: true
      },
      state: {
        type: String, 
        required: true
      }
    }]
  },
)

usersSchema.pre('save', function(next) {
  var user = this;

  // only hash the password if it has been modified (or is new)
  if (!user.isModified('password')) return next();

  // generate a salt
  bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
      if (err) return next(err);

      // hash the password using our new salt
      bcrypt.hash(user.password, salt, function(err, hash) {
          if (err) return next(err);

          // override the cleartext password with the hashed one
          user.password = hash;
          next();
      });
  });
});

usersSchema.methods.verifyPassword = function(candidatePassword) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    console.log(this.password, candidatePassword)
    if (err) return err;
    return isMatch;
  });
  
};

module.exports = mongoose.model('User', usersSchema);

const User = mongoose.model("User", usersSchema)

module.exports = User
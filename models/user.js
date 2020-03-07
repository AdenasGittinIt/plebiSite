const mongoose = require("mongoose");
const Schema = mongoose.Schema

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


const User = mongoose.model("User", usersSchema)

module.exports = User
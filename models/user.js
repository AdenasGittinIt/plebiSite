const mongoose = require("mongoose");
const Schema = mongoose.Schema

const usersSchema = new Schema (
  {
    user_first_name: {
      type: String,
      required: true
    },
    user_last_name: {
      type: String,
      required: true
    },
    user_email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    watchlist: {
      type: Schema.Types.ObjectId,
      ref: "Watchlist"
    }

  },

)

const User = mongoose.model("User", usersSchema)

module.exports = User
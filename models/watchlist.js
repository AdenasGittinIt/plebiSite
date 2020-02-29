const mongoose = require("mongoose");
const Schema = mongoose.Schema

const watchlistSchema = new Schema (
  {
    member_id: {
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
  }
)

const Watchlist = mongoose.model("Watchlist", watchlistSchema)

module.exports = Watchlist
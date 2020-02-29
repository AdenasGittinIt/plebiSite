const db = require("../models")
const APIRoutes = app => {
  app.get("/api/users", (req,res) => {
    db.User.find()
    .then(response => {
      res.json(response)
    })
  })
}

module.exports = APIRoutes
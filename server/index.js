const express = require("express");
const cors = require("cors");
require("./db/config");
const User = require("./db/Users");
const app = express();
app.use(express.json());
app.use(cors());
//register API
app.post("/register", async (req, res) => {
  let user = new User(req.body);
  let result = await user.save();
  console.log(result);
  res.send("data saved");
});
app.listen(5000);

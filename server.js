const express = require("express");
const app = express();
const port = 3000;
var mongoose = require("mongoose");

// const bcrypt = require('bcrypt');
app.use(express.json());
var jwt = require('jsonwebtoken');


//connect mongodb
const mongoDB = "mongodb://127.0.0.1/jwt";
mongoose
  .connect(mongoDB)
  .then(() => console.log("database connection successful"))
  .catch((err) => console.log(err.message));

//home page
app.get("/", (req, res) => {
  res.send("Hello World!");
});

//auth routes
app.use("/auth", require("./Routes/auth"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

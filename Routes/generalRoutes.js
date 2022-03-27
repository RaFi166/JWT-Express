const express = require("express");
var genralRouter = express.Router();
const checkLogin = require("../middlewares/authMiddleware");

genralRouter.get("/", checkLogin, (req, res) => {
  res.send("hello general route");
});

genralRouter.get("/two", checkLogin, (req, res) => {
  res.send("hello general route 2");
});

module.exports = genralRouter;

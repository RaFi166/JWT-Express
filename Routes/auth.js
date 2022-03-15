const express = require("express");
const { signup } = require("../Controllers/authController");
var router = express.Router();

router.post("/signup", signup);

module.exports = router;

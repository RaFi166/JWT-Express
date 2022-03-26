const express = require("express");
const { signup, loginController } = require("../Controllers/authController");
var router = express.Router();

router.post("/signup", signup);
router.post("/login", loginController);

module.exports = router;

const bcrypt = require("bcrypt");
const Model = require("../Model/userSchema");
var jwt = require("jsonwebtoken");
const env = require("dotenv").config();

//signup
const signup = async (req, res) => {
  const hashPasss = await bcrypt.hash(req.body.password, 10);
  const model = new Model({
    name: req.body.name,
    password: hashPasss,
  });

  model
    .save()
    .then(() => res.send("sent success"))
    .catch((err) => res.send(err.message));
};

//login
const loginController = async (req, res) => {
  const user = await Model.find({ name: req.body.name });
  if (user && user.length >= 0) {
    const validPassword = await bcrypt.compare(
      req.body.password,
      user[0].password
    );
    if (validPassword) {
      // res.status(200).json({ message: "Valid password" });
      const token = jwt.sign({ name: user[0].name }, process.env.JWT_TOKEN, {
        expiresIn: "1h",
      });
      res.send({ token: token, message: "successfull" });
    } else {
      res.send("user not found");
    }
  } else {
    res.send("user not found");
  }
};

module.exports = {
  signup,
  loginController,
};

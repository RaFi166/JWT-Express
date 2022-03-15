const bcrypt = require("bcrypt");
const Model = require("../Model/userSchema");

const signup = (req, res) => {
  //   const hashPasss = bcrypt.hash(req.body.password, 10);
  const model = new Model({
    name: req.body.name,
    password: bcrypt.hash(req.body.password, 10),
    // password: req.body.password,
  });

  model
    .save()
    .then(() => res.send("sent success"))
    .catch((err) => res.send(err.message));
};

module.exports = {
  signup,
};

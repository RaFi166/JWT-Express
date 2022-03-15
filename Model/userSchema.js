var mongoose = require("mongoose");

//Define a schema
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

var UserModel = mongoose.model("UserModel", userSchema);

module.exports = UserModel;

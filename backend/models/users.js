const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, required: true }
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Users", userSchema);

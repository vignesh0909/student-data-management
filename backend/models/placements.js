const mongoose = require("mongoose");
//const uniqueValidator = require("mongoose-unique-validator");

const userSchema = mongoose.Schema({
  rollno: { type: String, required: true },
  company: {type: String, required: true},
  package: {type: String, required: true}
});

//userSchema.plugin(uniqueValidator);
module.exports = mongoose.model("Placements", userSchema);

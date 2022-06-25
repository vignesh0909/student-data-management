const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = mongoose.Schema({
  rollno: { type: String, require: true, unique: true },
  FullName: { type: String },
  Gender: { type: String },
  Year: { type: String, required: true },
  DateofBirth: { type: String },
  Department_Course: { type: String },
  StudentAadharNumber: { type: String },
  FatherName: { type: String },
  MotherName: { type: String },
  MobileNumber: { type: String },
  Email_Id: { type: String },
});

userSchema.plugin(uniqueValidator);
module.exports = mongoose.model("Students", userSchema);

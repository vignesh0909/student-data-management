const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const Grades = mongoose.model('Grades', {
  Htno: { type: String, required: true },
  year: { type: String, required: true },
  sem: { type: String, required: true },
  Subcode: { type: String, required: true },
  Subname: {type: String, required: true},
  Grade: {type: String, required: true},
  Credits: {type: Number, required: true},
  //cgpa: {type: String, required: true},
});

module.exports = Grades;

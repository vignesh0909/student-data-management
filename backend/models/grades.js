const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const Grades = mongoose.model('Grades', {
  rollno: { type: String, required: true },
  subject: {type: String, required: true},
  grade: {type: String, required: true},
  credits: {type: Number, required: true},
  cgpa: {type: String, required: true},
});

module.exports = Grades;

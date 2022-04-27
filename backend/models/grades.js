const mongoose = require("mongoose");

const Grades = mongoose.model('Grades', {
  rollno: { type: String, required: true },
  subject: {type: String},
  cgpa: {type: String, required: true},
});

module.exports = Grades;

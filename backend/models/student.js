const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const Student = mongoose.model('Student', {
  rollno: { type: String, unique: true },
  name: { type: String, required: true },
  dept: { type: String, required: true },
  year: { type: String, required: true },
  sem: { type: Number, required: true },
  sec: { type: String, required: true },
  phno: { type: String, required: true },
});

//Student.plugin(uniqueValidator);
module.exports = Student;

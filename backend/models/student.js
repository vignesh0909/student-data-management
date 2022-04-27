const mongoose = require("mongoose");

const Student = mongoose.model('Student', {
  rollno: { type: String, required: true },
  name: { type: String, required: true },
  dept: { type: String, required: true },
  year: { type: String, required: true },
  sem: { type: Number, required: true },
  sec: { type: String, required: true },
  phno: { type: String, required: true },
  //creator: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }
  grades: [{
    subject: String,
    sem: Number,
    grade: String,
    credits: Number,
    sgpa: Number,
    cgpa: Number,
  }],
  placements: {
    status: String,
    batch: Number,
    enrolled: Array,
    placed: Array,
  },
});

module.exports = Student;

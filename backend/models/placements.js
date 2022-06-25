const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  rollno: { type: String, required: true },
  company: { type: String, required: true },
  package: { type: String, required: true }
});

module.exports = mongoose.model("Placements", userSchema);

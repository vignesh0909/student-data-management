const mongoose = require("mongoose");

const Placements = mongoose.model('Placements', {
  rollno: { type: String, required: true },
  placed: {type:Array},
  package: {type: String}
});

module.exports = Placements;

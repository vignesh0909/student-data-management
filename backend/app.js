const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const studentRoutes = require('./routes/students');
const userRoutes = require('./routes/users');
const gradeRoutes = require('./routes/grades');
const placementRoutes = require('./routes/placements');

const app = express();
app.listen(3000, () => console.log("Server Started at port: 3000"));
app.use(express.json());
app.use(cors());

app.use('/students', studentRoutes);
app.use('/users', userRoutes);
app.use('/students/grades', gradeRoutes);
app.use('/students/placements', placementRoutes);

mongoose.connect(
  "mongodb+srv://vignesh:vignesh@cluster1.wdjeo.mongodb.net/meanDB"
).then(() => {
  console.log("Connected to database!");
}).catch(() => {
  console.log("Connection failed!");
});

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

module.exports = mongoose;

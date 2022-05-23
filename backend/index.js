const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const mongoose = require("./app.js");
const studentRoutes = require('./routes/students');
const userRoutes = require('./routes/users');
const gradeRoutes = require('./routes/grades');
const placementRoutes = require('./routes/placements');

const app = express();
app.use(express.json());
app.use(cors());
app.listen(3000, () => console.log("Server Started at port: 3000"));

app.use('/students', studentRoutes);
app.use('/users', userRoutes);
app.use('/students/grades', gradeRoutes);
app.use('/students/placements', placementRoutes);

const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const mongoose = require("./app.js");
const routes1 = require('./routes/students');
//const debug = require("debug")("node-angular");
//const http = require("http");
//const path = require("path");

const app = express();
app.use(express.json());
//app.use(cors({ origin: 'htpp://localhost:4200' }));
app.use(cors());
app.listen(3000, () => console.log("Server Started at port: 3000"));

app.use('/students', routes1);

const express = require("express");
const ObjectId = require('mongoose').Types.ObjectId;
const Student = require("../models/user.js");

const UserController = require("../controllers/user");

const router = express.Router();

router.post("/signup", UserController.createUser);

router.post("/login", UserController.userLogin);

module.exports = router;

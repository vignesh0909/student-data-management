const express = require("express");
const router = express.Router();
const ObjectId = require("mongoose").Types.ObjectId;
const Users = require("../models/users.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//POST student on signup API(Registration)
router.post("/", (req, res) => {
  bcrypt.hash(req.body.password, 10).then((hash) => {
    const user = new Users({
      username: req.body.username,
      password: hash,
      role: req.body.role,
    });
    user
      .save()
      .then((result) => {
        res.status(201).json({
          message: "User created!",
          result: result,
        });
      })
      .catch((err) => {
        res.status(500).json({
          message: "User Already Registered!",
        });
      });
  });
});

//GET all users API
router.get("/", (req, res) => {
  Users.find((err, doc) => {
    if (err) {
      console.log("Error in GET Data " + err);
    } else {
      res.send(doc);
    }
  });
});

router.get("/findByUsername/:username", (req, res) => {
  var query = { rollno: req.params.username };
  Users.find(query, (err, doc) => {
    if (err) {
      console.log(doc);
      console.log("Error in GET student by username " + err);
    } else {
      console.log(doc);
      res.send(doc);
    }
  });
});

router.post("/login", (req, res, next) => {
  let fetchedUser;
  let invalidUser = false;
  Users.findOne({ username: req.body.username })
    .then((user) => {
      if (!user) {
        invalidUser = true;
        return res.send({
          message: "User not registered!",
        });
      }
      fetchedUser = user;
      return bcrypt.compare(req.body.password, user.password);
    })
    .then((result) => {
      if (!result) {
        invalidUser = true;
        return res.send({
          message: "Invalid Password",
        });
      } else if(!invalidUser){
        const token = jwt.sign(
          { username: fetchedUser.username, userId: fetchedUser._id },
          "secret_this_should_be_longer",
          { expiresIn: "1h" }
        );
        res.status(200).json({
          user: fetchedUser.username,
          token: token,
          expiresIn: 3600,
          role: fetchedUser.role,
          message: "login successful",
        });
      }
    })
    .catch((err) => {
      console.log(err);
      return res.status(401).json({
        message: "Auth Failed",
      });
    });
});

module.exports = router;

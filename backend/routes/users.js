const express = require("express");
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;
const Users = require("../models/users.js");
const bcrypt = require("bcrypt");
const { result } = require("lodash");
const jwt = require("jsonwebtoken");

//POST student on signup API(Registration)
router.post('/', (req, res) => {
  bcrypt.hash(req.body.password, 10)
    .then(hash => {
      const user = new Users({
        username: req.body.username,
        password: hash,
        role: req.body.role,
      });
      user.save()
        .then(result => {
          res.status(201).json({
            message: 'User created!',
            result: result
          });
        })
        .catch(err => {
          //console.log(err);
          res.status(500).json({
            error: err
          });
        });
    });
});

//GET all users API
router.get('/', (req, res) => {
  Users.find((err, doc) => {
      if(err){
          console.log('Error in GET Data ' + err);
      } else {
          res.send(doc);
      }
  })
})

router.get('/findByUsername/:username', (req, res) => {
  var query = {rollno: req.params.username};
  Users.find(query, (err, doc) => {
    if(err){
      console.log(doc);
      console.log('Error in GET student by username ' + err);
    } else {
      console.log(doc);
      res.send(doc);
    }
  })
  //return res.status(400).send(`No record found with roll ${req.params.rollno}`);
})

//PUT(Update) users API
router.patch('/:id', (req, res) => {
  if(ObjectId.isValid(req.params.id)){
    let user = {
      username: req.body.username,
      password: req.body.password,
    }
    Users.findByIdAndUpdate(req.params.id, {$set :user}, {new: true},(err, doc) => {
      if(err){
        console.log('Error in UPDATE User Credentials' + err);
      } else {
        res.send(doc);
      }
    })
  } else {
    return res.status(400).send(`No record found with Id ${req.params.id}`);
  }
})

router.post('/login', (req, res, next) => {
  let fetchedUser;
  Users.findOne({ username: req.body.username })
    .then(user => {
      //console.log(user);
      const currentUser = user;
      if (!user) {
        return res.status(401).json({
          message: "Auth Failed"
        });
      }
      fetchedUser = user;
      return bcrypt.compare(req.body.password, user.password);
    })
    .then(result => {
      if(!result){
        return res.status(401).json({
          message: 'Auth Failed'
        });
      }
      //Users.findById()
      //console.log(fetchedUser)
      const token = jwt.sign(
        {username: fetchedUser.username, userId: fetchedUser._id},
        'secret_this_should_be_longer',
        { expiresIn: '1h' }
        );
      res.status(200).json({
        user: fetchedUser.username,
        token: token,
        expiresIn: 3600,
        role: fetchedUser.role
      });
    })
    .catch(err => {
      console.log(err);
      return res.status(401).json({
        message: 'Auth Failed'
      });
    });
});

module.exports = router;

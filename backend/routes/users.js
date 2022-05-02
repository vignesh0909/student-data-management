const express = require("express");
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;
const Users = require("../models/users.js");
const bcrypt = require("bcrypt");

//POST student API
router.post('/', (req, res) => {
  bcrypt.hash(req.body.password, 10)
    .then(hash => {
      const user = new Users({
        username: req.body.username,
        password: hash,
        role: req.body.role,
      });
      /*
      user.save((err,doc) => {
        if(err){
          console.log('Error in post data'+err);
        } else{
          console.log(doc);
          res.send(doc);
        }
      });
      */
      user.save()
        .then(result => {
          res.status(201).json({
            message: 'User created!',
            result: result
          });
        })
        .catch(err => {
          res.status(500).json({
            error: err
          })
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

//Delete single student using Id
router.delete('/:id', (req, res) => {
  if(ObjectId.isValid(req.params.id)){
    Student.findByIdAndRemove(req.params.id, (err, doc) => {
      if(err){
        console.log('Error in DELETE student by Id ' + err);
      } else {
        res.send(doc);
      }
    })
  } else {
    return res.status(400).send(`No record found with Id ${req.params.id}`);
  }
})



//get grades
router.get('/:id/grades', (req, res) => {
  if(ObjectId.isValid(req.params.id)){
    Student.findById(req.params.id, (err, doc) => {
      if(err){
        console.log('Error in GET student by Id ' + err);
      } else {
        //console.log(doc.grades);
        res.send(doc.grades);
      }
    })
  } else {
    return res.status(400).send(`No record found with Id ${req.params.id}`);
  }
})
module.exports = router;

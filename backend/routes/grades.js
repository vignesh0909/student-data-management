const express = require("express");
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;
const Grades = require("../models/grades.js");
const checkAuth = require("../middleware/check-auth.js");


//POST student API
router.post('/',
  checkAuth,
  (req, res) => {
  let grades = new Grades({
    Htno: req.body.Htno,
    year: req.body.year,
    sem: req.body.sem,
    Subcode: req.body.Subcode,
    Subname: req.body.Subname,
    Grade: req.body.Grade,
    Credits: req.body.Credits,
  });

  grades.save((err,doc) => {
    if(err){
      console.log('Error in post data '+err);
    } else{
      //console.log(doc[0]);
      res.send(doc);
    }
  })
})


//GET all student Grades API
router.get('/', (req, res) => {
  Grades.find((err, doc) => {
      if(err){
          console.log('Error in GET Data ' + err);
      } else {
          res.send(doc);
      }
  })
})

//getGrades of a student
router.get('/:rollno', (req, res) => {
  let fetchedStudentGrades;
  var query = {Htno: req.params.rollno};
  Grades.find(query)
    .then((user) => {
      if(!user){
        return res.send({
          message: "User not Found!",
        });
      }
      fetchedStudentGrades = user;
      //console.log(fetchedStudent);
      res.send(fetchedStudentGrades);
    })
})

//PUT(Update) student API
router.put('/:id', (req, res) => {
  if(ObjectId.isValid(req.params.id)){
    let stu = {
      Htno: req.body.Htno,
      name: req.body.name,
      dept: req.body.dept,
      year: req.body.year,
      sec: req.body.sec,
      phno: req.body.phno
    }
    Students.findByIdAndUpdate(req.params.id, {$set :stu}, {new: true},(err, doc) => {
      if(err){
        console.log('Error in UPDATE student by Id ' + err);
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
    Students.findByIdAndRemove(req.params.id, (err, doc) => {
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

module.exports = router;

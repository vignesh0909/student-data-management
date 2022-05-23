const express = require("express");
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;
const Students = require("../models/students.js");

//POST student API
router.post('/', (req, res) => {
  let stu = new Students({
    rollno: req.body.rollno,
    FullName: req.body.FullName,
    Gender: req.body.Gender,
    Year: req.body.Year,
    Department_Course: req.body.Department_Course,
    StudentAadharNumber: req.body.StudentAadharNumber,
    FatherName: req.body.FatherName,
    MotherName: req.body.MotherName,
    MobileNumber: req.body.MobileNumber,
    Email_Id: req.body.Email_Id
  });

  stu.save((err,doc) => {
    if(err){
      console.log('Error in post data:'+err);
    } else{
      //console.log(doc);
      res.send(doc);
    }
  })
})

//GET all students API
router.get('/', (req, res) => {
  Students.find((err, doc) => {
      if(err){
          console.log('Error in GET Data ' + err);
      } else {
          res.send(doc);
      }
  })
})

router.get('/findByRoll/:rollno', (req, res) => {
  let fetchedStudent;
  var query = {rollno: req.params.rollno};
  Students.findOne(query)
    .then((user) => {
      if(!user){
        return res.send({
          message: "User not Found!",
        });
      }
      fetchedStudent = user;
      //console.log(fetchedStudent);
      res.send(fetchedStudent);
    })
})


//PUT(Update) student API
router.put('/:id', (req, res) => {
  if(ObjectId.isValid(req.params.id)){
    let stu = {
      rollno: req.body.rollno,
      FullName: req.body.FullName,
      Gender: req.body.Gender,
      Year: req.body.Year,
      Department_Course: req.body.Department_Course,
      StudentAadharNumber: req.body.StudentAadharNumber,
      FatherName: req.body.FatherName,
      MotherName: req.body.MotherName,
      MobileNumber: req.body.MobileNumber,
      Email_Id: req.body.Email_Id
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

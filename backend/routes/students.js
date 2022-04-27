const express = require("express");
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;
const Student = require("../models/student.js");

//POST student API
router.post('/', (req, res) => {
  let stu = new Student({
    rollno: req.body.rollno,
    name: req.body.name,
    dept: req.body.dept,
    year: req.body.year,
    sem: req.body.sem,
    sec: req.body.sec,
    phno: req.body.phno,
    //grades: req.body.grades,
    //placements: req.body.placements
  });

  stu.save((err,doc) => {
    if(err){
      console.log('Error in post data'+err);
    } else{
      res.send(doc);
    }
  })
})

//GET all students API
router.get('/', (req, res) => {
  Student.find((err, doc) => {
      if(err){
          console.log('Error in GET Data ' + err);
      } else {
          res.send(doc);
      }
  })
})

//GET single student using Id
router.get('/:id', (req, res) => {
  if(ObjectId.isValid(req.params.id)){
    Student.findById(req.params.id, (err, doc) => {
      if(err){
        console.log('Error in GET student by Id ' + err);
      } else {
        res.send(doc);
      }
    })
  } else {
    return res.status(400).send(`No record found with Id ${req.params.id}`);
  }
})

//PUT(Update) student API
router.put('/:id', (req, res) => {
  if(ObjectId.isValid(req.params.id)){
    let stu = {
      rollno: req.body.rollno,
      name: req.body.name,
      dept: req.body.dept,
      year: req.body.year,
      sec: req.body.sec,
      phno: req.body.phno
    }
    Student.findByIdAndUpdate(req.params.id, {$set :stu}, {new: true},(err, doc) => {
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

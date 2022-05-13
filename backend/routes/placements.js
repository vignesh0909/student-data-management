const express = require("express");
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;
const Placements = require("../models/placements.js");

//POST student API
router.post('/', (req, res) => {
  let placements = new Placements({
    rollno: req.body.rollno,
    company: req.body.company,
    package: req.body.package
  });

  placements.save((err,doc) => {
    if(err){
      console.log('Error in post data'+err);
    } else{
      console.log(doc);
      res.send(doc);
    }
  })
})

//GET all students API
router.get('/', (req, res) => {
  Placements.find((err, doc) => {
      if(err){
          console.log('Error in GET Data ' + err);
      } else {
        console.log(doc);
        res.send(doc);
      }
  })
})

router.get('/:rollno', (req, res) => {
  let fetchedData;
  var query = {rollno: req.params.rollno};
  Placements.find(query)
    .then((user) => {
      if(!user){
        return res.send({
          message: "User not Found!",
        });
      }
      fetchedData = user;
      //console.log(fetchedData);
      res.send(fetchedData);
    })
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

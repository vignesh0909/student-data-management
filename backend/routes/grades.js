const express = require("express");
const checkAuth = require("../middleware/check-auth.js");
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;
const Grades = require("../models/grades.js");

//POST student API
router.post('/',
  checkAuth,
  (req, res) => {
  let grades = new Grades({
    rollno: req.body.rollno,
    year: req.body.year,
    sem: req.body.sem,
    subjcode: req.body.subjcode,
    subject: req.body.subject,
    grade: req.body.grade,
    credits: req.body.credits,
  });

  grades.save((err,doc) => {
    if(err){
      console.log('Error in post data'+err);
    } else{
      //console.log(doc[0]);
      res.send(doc);
    }
  })
})

//GET all students API
router.get('/', (req, res) => {
  Grades.find((err, doc) => {
      if(err){
          console.log('Error in GET Data ' + err);
      } else {
          res.send(doc);
      }
  })
})

module.exports = router;

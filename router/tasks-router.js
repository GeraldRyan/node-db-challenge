const express = require('express');
const db = require('../data/dbconfig');

const Tasks = require('./tasks-model.js');

const router = express.Router();

// GET ALL STORES
router.get('/', (req, res) => {
    Tasks.getAllTasks()
        .then(tasks => {
            res.status(200).json(tasks);
        })
        .catch(err => {
            res.status(500).json({
                errMessage: 'Internal Server Error, could not receive projects'
            })
        })
})

router.post('/', (req,res) =>{
  Tasks.addTask(req.body)
  .then(ids =>{
res.status(200).json(req.body)
  })
  .catch(error =>{
    res.status(500).json(`internal error: ${error}`)
  })
})



module.exports = router;
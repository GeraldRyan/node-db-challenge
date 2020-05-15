const express = require('express');
const db = require('../data/dbconfig');

const Proj = require('./projects-model.js');

const router = express.Router();

// GET ALL STORES
router.get('/', (req, res) => {
    Proj.getAllProjects()
        .then(projects => {
            res.status(200).json(projects);
        })
        .catch(err => {
            res.status(500).json({
                errMessage: 'Internal Server Error, could not receive projects'
            })
        })
})

router.post('/', (req,res) =>{
  Proj.addProject(req.body)
  .then(ids =>{
res.status(200).json(req.body)
  })
  .catch(error =>{
    res.status(500).json("internal error")
  })
})
router.get('/:id/', (req, res) => {
  Proj.getAllProjectData(req.params.id)
      .then(tasks => {
          res.status(200).json(tasks);
      })
      .catch(err => {
          res.status(500).json({
              errMessage: `Internal Server Error, could not receive projects ${err}`
          })
      })
})
router.get('/:id/tasks', (req, res) => {
  Proj.getTasksByProjId(req.params.id)
      .then(tasks => {
          res.status(200).json(tasks);
      })
      .catch(err => {
          res.status(500).json(
            `Internal Server Error, could not receive projects, ${err}`
          )
      })
})

router.get('/:id/resources', (req, res) => {
  Proj.getResourcesByProjId(req.params.id)
      .then(resources => {
          res.status(200).json(resources);
      })
      .catch(err => {
          res.status(500).json(`Internal Server Error, could not receive projects, ${err}`)
      })
})

module.exports = router;
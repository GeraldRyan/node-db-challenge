const db = require('../data/dbconfig');

module.exports = {
  getAllProjects,
  addProject
  }


  function getAllProjects() {
    return db.select('*').from('projects')
  }
  
  function addProject(project) {
    return db('projects').insert({proj_name: project.proj_name, proj_desc:project.proj_desc, completed:project.completed})
  }


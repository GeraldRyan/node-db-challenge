const db = require('../data/dbconfig');

module.exports = {
  getAllProjects,
  addProject,
  getTasksByProjId,
  getResourcesByProjId
  }


  function getAllProjects() {
    return db.select('*').from('projects')
  }
  
  function addProject(project) {
    return db('projects').insert({proj_name: project.proj_name, proj_desc:project.proj_desc, completed:project.completed})
  }
  
  function getTasksByProjId(id) {
    return db('tasks as t').leftJoin('projects as p', 't.proj_id', 'p.id').where('p.id', '=',id)
  }

  function getResourcesByProjId(id) {
    return db('project_resources as pr').leftJoin('resources as r', 'pr.resource_id', 'r.id').where('pr.proj_id', '=',id)
  }

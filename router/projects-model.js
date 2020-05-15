const db = require('../data/dbconfig');

module.exports = {
  getAllProjects,
  addProject,
  getTasksByProjId,
  getResourcesByProjId,
  getAllProjectData
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
  function getAllProjectData(id) {
    return db('projects as p').join('project_resources as pr', 'pr.proj_id', 'p.id').join('resources as r', 'pr.resource_id','r.id').join("tasks as t", 't.proj_id', 'p.id').where('p.id','=',id)
  }

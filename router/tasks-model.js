const db = require('../data/dbconfig');

module.exports = {
  getAllTasks,
  addTask,
  // getAllTasksByProjId
  }


  function getAllTasks() {
    return db.select('*').from('tasks')
  }
  
  function addTask(task) {
    return db('tasks').insert({task_name: task.task_name, task_desc:task.task_desc, completed:task.completed, proj_id:task.proj_id})
  }

  // function getAllTasks() {
  //   return db.select('*').from('tasks')
  // }
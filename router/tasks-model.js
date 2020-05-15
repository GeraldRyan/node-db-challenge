const db = require('../data/dbconfig');

module.exports = {
  getAllTasks,
  addTask,
  getTasksByProjId
  }


  function getAllTasks() {
    return db.select('*').from('tasks')
  }
  
  function addTask(task) {
    return db('tasks').insert({task_name: task.task_name, task_desc:task.task_desc, completed:task.completed, proj_id:task.proj_id})
  }

  function getTasksByProjId(id) {
    return db('tasks as t').leftJoin('projects as p', 't.proj_id', 'p.id').where('p.id', '=',id)
  }

  // server.get('/api/ingredients', (req, res) => {
  //   // get all animals from the database
  //   // include species name
  //   db('ingredient as i')
  //     .leftJoin('recipies as r', 'r.id', 'i.ingredient_id')
  //     .select('i.id', 'i.ingredients_name', 'r.recipe_name')
  //   .then(recipe => {
  //     res.status(200).json(recipe);
  //   })
  //   .catch(error => {
  //     res.status(500).json(error);
  //   });
  // });
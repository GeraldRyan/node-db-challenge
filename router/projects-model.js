const db = require('../data/dbconfig');

module.exports = {
  getAllProjects
  }


  function getAllProjects() {
    return db.select('*').from('projects')
  }
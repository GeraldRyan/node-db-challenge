const db = require('../data/dbconfig');

module.exports = {
  getAllResources
  }


  function getAllResources() {
    return db.select('*').from('resources')
  }
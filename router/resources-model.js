const db = require('../data/dbconfig');

module.exports = {
  getAllResources,
  addResource
  }


  function getAllResources() {
    return db.select('*').from('resources')
  }  
  
  function addResource(resource) {
    return db('resources').insert({resource_name: resource.resource_name, resource_desc:resource.resource_desc})
  }


exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('project_resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('project_resources').insert([
        {id: 1, proj_id: 1, resource_id: 1},
        {id: 2, proj_id: 1, resource_id: 2},
        {id: 3, proj_id: 1, resource_id: 3},
        {id: 4, proj_id: 1, resource_id: 4},
        {id: 5, proj_id: 1, resource_id: 5},
        {id: 6, proj_id: 1, resource_id: 9},
        {id: 7, proj_id: 2, resource_id: 8},
        {id: 8, proj_id: 3, resource_id: 1},
        {id: 9, proj_id: 3, resource_id: 2},
        {id: 10, proj_id: 3, resource_id: 3},
        {id: 11, proj_id: 3, resource_id: 4},
        {id: 12, proj_id: 3, resource_id: 5},
        {id: 13, proj_id: 4, resource_id: 6},
        {id: 14, proj_id: 4, resource_id: 7},



      ]);
    });
};

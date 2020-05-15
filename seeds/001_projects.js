
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, proj_name: 'Build Workbench',proj_desc: 'Building a workbench for my shop', completed:false},
      ]);
    });
};

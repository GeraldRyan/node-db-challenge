
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, proj_name: 'Build Workbench',proj_desc: 'Building a workbench for my shop', completed:false},
        {id: 2, proj_name: 'Finish Lambda',proj_desc: 'Get my endorsement', completed:false},
        {id: 3, proj_name: 'Build Power Rack Bench',proj_desc: 'Building an adjustable bench for my rack', completed:false},
        {id: 4, proj_name: 'Clean Garage',proj_desc: 'Reorganize Garage', completed:false},

      ]);
    });
};

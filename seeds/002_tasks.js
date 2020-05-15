
exports.seed = function (knex)
{
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function ()
    {
      // Inserts seed entries
      return knex('tasks').insert([
        { id: 1, task_name: 'Gather supplies', task_desc: 'go', task_notes: 'home depot is a good place', completed:false, proj_id:1},
      ]);
    });
};

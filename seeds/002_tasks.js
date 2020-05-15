
exports.seed = function (knex)
{
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function ()
    {
      // Inserts seed entries
      return knex('tasks').insert([
        { id: 1, task_name: 'Choose Plan', task_desc: 'go', task_notes: 'Look online for good plan', completed:false, proj_id:1},
        { id: 2, task_name: 'Gather supplies', task_desc: 'go', task_notes: 'home depot is a good place', completed:false, proj_id:1},
        { id: 3, task_name: 'Assemble materials', task_desc: 'go', task_notes: 'Use the tools you got', completed:false, proj_id:1},
        { id: 4, task_name: 'Study hard enough', task_desc: 'go', task_notes: 'You got this', completed:false, proj_id:2},
        { id: 5, task_name: 'Buy materials', task_desc: 'go', task_notes: 'home depot is a good place', completed:false, proj_id:3},
        { id: 6, task_name: 'Follow instructions', task_desc: 'go', task_notes: 'With the plan made', completed:false, proj_id:3},
        { id: 7, task_name: 'make space', task_desc: 'go', task_notes: 'Clean garage and reorganize', completed:false, proj_id:4},
        { id: 8, task_name: 'Sweep floor', task_desc: 'go', task_notes: 'Clean garage and reorganize', completed:false, proj_id:4},
        { id: 9, task_name: 'Use Shopvac', task_desc: 'go', task_notes: 'Clean garage and reorganize', completed:false, proj_id:4},
        { id: 10, task_name: 'install workbench', task_desc: 'go', task_notes: 'Clean garage and reorganize', completed:false, proj_id:4},
        { id: 11, task_name: 'Crack a beer', task_desc: 'go', task_notes: 'Clean garage and reorganize', completed:false, proj_id:4},


      ]);
    });
};

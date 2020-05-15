
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {id: 1, resource_name: 'pressure treated wood', resource_desc:"pressure treated"},
        {id: 2, resource_name: 'screws', resource_desc:"pressure treated"},
        {id: 3, resource_name: 'bolts', resource_desc:"pressure treated"},
        {id: 4, resource_name: 'wood glue', resource_desc:"pressure treated"},
        {id: 5, resource_name: 'miter saw', resource_desc:"pressure treated"},
        {id: 6, resource_name: 'shop vac', resource_desc:"pressure treated"},
        {id: 7, resource_name: 'broom', resource_desc:"pressure treated"},
        {id: 8, resource_name: 'computer', resource_desc:"pressure treated"},
        {id: 9, resource_name: 'drill', resource_desc:"pressure treated"}

      ]);
    });
};

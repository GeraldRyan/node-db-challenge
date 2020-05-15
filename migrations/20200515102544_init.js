exports.up = function(knex) {
  return knex.schema
  .createTable('projects', tbl => {
      tbl.increments(); // unique ID
      tbl.string('proj_name', 30)
      .notNullable();
      tbl.string('proj_desc', 100);
      tbl.boolean('completed')
      .defaultTo(false);
  })
  .createTable('tasks', tbl => {
      tbl.increments();
      tbl.string('task_name', 30)
      .notNullable();
      tbl.string('task_desc', 100)
      .defaultTo(false)
      .notNullable();
      tbl.string('task_notes',100)
      tbl.boolean('completed')
      .defaultTo(false);
      // foreign key that references the id in the store table - one to many relationship
      tbl.integer('proj_id') 
      .unsigned() // not negative
      .notNullable()
      .references('id')
      .inTable('projects')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
  })
  .createTable('resources', tbl => {
      tbl.increments();
      tbl.string('resource_name', 30) // tbl.unique??????????????????????
      .notNullable()
      // do not duplicate
      tbl.string('resource_desc', 100)

  })
  .createTable('project_resources', tbl => {
      // this is the table to combines the store and the supplies table - many to many relationship
      tbl.increments();
      // foreign key that points to store table 
      tbl.integer('proj_id')
      .unsigned()
      .references('id')
      .inTable('projects')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
      // forgeign key that points to supplies table 
      tbl.integer('resource_id')
      .unsigned()
      .references('id')
      .inTable('resources')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
  })
};

exports.down = function(knex) {
   // can't take off your socks without taking off your shoes...put the tables backward
   return knex.schema
   .dropTableIfExists('project_resources')
   .dropTableIfExists('resources')
   .dropTableIfExists('tasks')
   .dropTableIfExists('projects');
};
exports.up = function(knex) {
  return knex.schema.createTable("hobbits", hobbits => {
    hobbits.increments();
    hobbits.string("name", 128).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("hobbits");
};

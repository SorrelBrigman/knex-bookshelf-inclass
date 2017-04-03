//runs on knex migrate:latest
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('monsters', (table)=>{
      table.increments('monster_id').primary();
      table.string('monster_name').notNullable();
    })
};
// runs on knex migrate:rollback
exports.down = function(knex, Promise) {
  return knex.schema
    .dropTable('monsters')
};

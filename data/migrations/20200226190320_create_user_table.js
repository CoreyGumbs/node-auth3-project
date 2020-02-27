
exports.up = function(knex) {
  return knex.schema.createTable('users', tbl => {
      tbl.increments();
      tbl.string('username', 255).unique().notNullable();
      tbl.string('password', 255).notNullable();
      tbl.string('departments', 255).nullable();
      
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExist('users');
};

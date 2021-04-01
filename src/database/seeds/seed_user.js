
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex.schema.hasTable('users').then(function(exists) {
    if (!exists) {
      return knex.schema.createTable('users', function(column) {
        column.increments('id').primary();
        column.string('first_name', 100).notNullable();;
        column.string('username', 100).notNullable();;
        column.string('password', 100).notNullable();;
      });
    }
  })
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { first_name: 'Alef', username: 'admin', password: 'admin' },
      ]);
    });
};

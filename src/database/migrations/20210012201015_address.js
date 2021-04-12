
exports.up = function(knex) {
    return knex.schema
        .createTable('address', function (table) {
            table.increments('id',  { primaryKey: true });
        })
};

exports.down = function(knex) {
  
};

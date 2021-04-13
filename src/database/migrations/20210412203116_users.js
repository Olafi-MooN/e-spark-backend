
exports.up = function (knex) {
    return knex.schema
        .createTable('users', function (table) {
            table.increments('id', { primaryKey: true });
            table.string('first_name', 255).notNullable();
            table.string('last_name', 255).notNullable();
            table.string('user_name', 255).notNullable();
            table.string('email', 255).notNullable();
            table.string('password', 255).notNullable();
            table.integer('id_address');
            table.integer('id_credit_cards');
            table.integer('id_credibility');
            table.timestamp('created_at').defaultTo(knex.fn.now());

            table.foreign('id_credit_cards').references('id').inTable('credit_cards');
            table.foreign('id_address').references('id').inTable('address');
            table.foreign('id_credibility').references('id').inTable('credibility');
        })
};

exports.down = function (knex) {
    knex.dropTable("users");
};

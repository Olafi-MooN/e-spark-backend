const knex = require('../database/connection');

exports.select = (table_name,...arguments) => {
    return knex.select(arguments.toString())
        .from(table_name)
            .catch(error => error);
}

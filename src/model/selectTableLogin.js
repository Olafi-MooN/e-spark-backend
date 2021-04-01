const knex = require('../database/connection');

exports.authenticate = async (table_name, username, password) => {
    
    let result;
    await knex.select('id', 'first_name')
                .from(table_name)
                    .where({ username, password })
                        .then(response => result = response)
                            .catch(error => result = error);

    if (!result[0]) {
        return false;
    }

    return result;
}
const knex = require('../database/connection');

exports.insert = async (name_table, first_name, username, password) => {
  let result;

  await knex(name_table)
          .where('username', username)
            .then((rows) => {
              if (rows.length !== 0) {
                return result = false;
              }
              return result = true;
            })
  
  if(result) {
    result = knex(name_table).insert({
      first_name,
      username,
      password
    })
    return result;
  }
  return result;
}

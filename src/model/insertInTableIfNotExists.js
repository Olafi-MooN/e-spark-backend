const knex = require('../database/connection');

const { joinArraysToObject } = require('../utils/utils');

async function insertInTableIfNotExists(
    tableName,
    nameAttributeNotExists,
    valueAttributesNotExists,
    arrayNameAttributes = [],
    arrayValueAttributes = []
) {

    const object = joinArraysToObject(arrayNameAttributes, arrayValueAttributes)

    let result;

    await knex(tableName)
        .where(nameAttributeNotExists, valueAttributesNotExists)
        .then((rows) => {
            if (rows.length !== 0) {
                return result = false;
            }
            return result = true;
        })

    if (result) {
        result = knex(tableName).insert(object)
        return result;
    }
    return result;
}

module.exports = insertInTableIfNotExists;
function arrayToObject (object = []) {
    let objeto = {};

    if (!object[0]) {
        return "nenhum array foi passado como parametro"
    }

    object.forEach(item => {
        objeto[item] = item;
    })

    return objeto;
}

function joinArraysToObject(arrayNameAttributes, arrayValueAttributes) {
    let newObject = {};
    
    arrayNameAttributes.forEach((item, index) => {
        newObject[item] = arrayValueAttributes[index];
    })

    return newObject;
}

module.exports = { arrayToObject, joinArraysToObject }
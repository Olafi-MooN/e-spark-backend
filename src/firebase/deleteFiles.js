const { Storage } = require('@google-cloud/storage');

require('dotenv').config();

const storage = new Storage({
    credentials: require('./firebase-storage-credentials.json')
});

async function deleteOneFile(bucketName, fileName) {
    await storage
        .bucket(bucketName)
            .file(fileName)
                .delete()
}

function deleteAllFiles(bucketName, listNameFiles) {

    if (!Array.isArray(listNameFiles)) {
        return "Insira uma lista como argumento 'listNameFiles'"
    }

    return listNameFiles.map(value => async () => await deleteOneFile(bucketName, value))
}


module.exports = { deleteOneFile, deleteAllFiles };

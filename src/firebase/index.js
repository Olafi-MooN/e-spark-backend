const getUrl = require('./urlFiles');
const uploadFiles = require('./uploadFiles');

require('dotenv').config();

async function uploadFilesToFirebase(bucketName, filePath, finalNameFile, nameFile) {
    // Fazendo o upload do arquivo
    return new Promise((resolve, reject) => {
        await uploadFiles(bucketName, filePath, finalNameFile)
                .then(result => {
                    // caso ocorra algum erro...
                    if (result.fileSend === false){
                        return reject(result);
                    }
                    // Gerando e buscando pela url do arquivo enviado
                    await getUrl(bucketName, nameFile)
                            .then(result => resolve(result))
                })
    })
}

module.exports = uploadFilesToFirebase;
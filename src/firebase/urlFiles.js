/* 
    Descrição: Esse arquivo cria uma URL para o arquivo desejado.
    Observação: Os links criados tem a duração de um ano.

    Recursos necessários:
        - É preciso criar um bucket no Firebase
        - É necessário utilizar as crededenciais que são dispoonibilizadas pelo firebase-store 
*/

const { Storage } = require('@google-cloud/storage');

const storage = new Storage({
    credentials: require('./credentials')
});


async function urlFile(bucketName, fileName) {
    
    return new Promise((resolve, reject) => {
        (async function generateSignedUrl() {
            // Opções de do link
            const options = {
                version: 'v2', 
                action: 'read',
                expires: Date.now() + 31536000000, // Toda URL criada, tera a durabilidade de um ano.
            };
        
            // Gerando a URL para o arquivo;
            const [url] = await storage
              .bucket(bucketName)
                  .file(fileName)
                      .getSignedUrl(options)
                        .catch(e => {
                            console.error(e)
                            return reject("Ocorreu um erro ao gerar a URL");
                        });
        
            return resolve(url);
          })()
    });
}

const getUrl = async (bucketName, fileName) => {
    return await urlFile(bucketName, fileName)
        .then(result => result).catch(console.error);
}

module.exports = getUrl;
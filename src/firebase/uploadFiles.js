/* 
    Descrição: Esse arquivo cria uma URL para o arquivo desejado.
    Observação: Os links criados tem a duração de um ano.

    Recursos necessários:
        - É preciso criar um bucket no Firebase
        - É necessário utilizar as crededenciais que são dispoonibilizadas pelo firebase-store 
*/

const { Storage } = require('@google-cloud/storage');
  
// insira as credenciais
const storage = new Storage({
    credentials: require('./e-spark-3b3b6-firebase-adminsdk-kc4lz-b7b923012c.json')
});

const uploadFilesToFirebase = async (bucketName, filePath, destFileName) => {
    return new Promise((resolve, reject) => {

      async function uploadFile() {

        await storage.bucket(bucketName).upload(filePath, {
          destination: destFileName,
        });
    
        return `${filePath} uploaded to ${bucketName}`;
      }
      
      uploadFile()
        .then(result => resolve({fileSend: true, result}))
          .catch(error => {
            console.error(error);
            reject({fileSend: false, result:"Ocorreu um erro ao fazer o upload do arquivo"})
          });
    })
  }

  module.exports = uploadFilesToFirebase;
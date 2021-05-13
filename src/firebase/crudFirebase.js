import { Storage } from '@google-cloud/storage';
import { credentials } from './firebase.js';

import { config } from 'dotenv';
config();

const storage = new Storage({ credentials });

/* UPLOAD DE ARQUIVOS PARA O FIREBASE */
const uploadFilesToFirebase = async (bucketName, filePath, destFileName) => {
    return new Promise((resolve, reject) => {

        async function uploadFile() {

            await storage.bucket(bucketName).upload(filePath, {
                destination: destFileName,
            });

            return `${filePath} uploaded to ${bucketName}`;
        }

        uploadFile()
            .then(result => resolve({ fileSend: true, result }))
            .catch(error => {
                console.error(error);
                reject({ fileSend: false, result: "Ocorreu um erro ao fazer o upload do arquivo" })
            });
    })
}

/* GERAR URL DOS ARQUIVOS QUE JA ESTÃO NO FIRE BASE */
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
        })();
    });
}

async function deleteFileInFirebase(bucketName, fileName) {
    return new Promise(async (resolve, reject) => {
        const erase = await storage
            .bucket(bucketName)
            .file(fileName)
            .delete()
            .catch(e => {
                console.error(e)
                return reject("Ocorreu um erro ao deletar o arquivo \n"+ e);
            });
        return resolve('Arquivo apagado com sucesso!')
    });

}

export { uploadFilesToFirebase, urlFile, deleteFileInFirebase }
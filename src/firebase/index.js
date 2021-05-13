import { uploadFilesToFirebase, urlFile } from './crudFirebase.js';
import { config } from 'dotenv';
import { readFile, writeFile } from 'fs/promises';

const dateCars = JSON.parse(await readFile(new URL('./json/dateCars.json', import.meta.url)));

config();

// Faz upload das imagens dos carros e depois cria um json com o link para imagem
function uploadAllImages(){
    dateCars.map(async item => {
        await uploadFilesToFirebase(process.env.BUCKETNAME, new URL(`./images/${item.cars.name_car}.png`, import.meta.url).pathname, `cars/${item.cars.name_car}.png`)
        .then(async res => {
            const linkFile = await urlFile(process.env.BUCKETNAME, `cars/${item.cars.name_car}.png`);
            item.cars.url_img_car = linkFile;
        }).then(res => {
            writeFile(new URL('./json/dateCars.json', import.meta.url), JSON.stringify(dateCars, null, 2), {encoding: 'utf-8'});
        })
    });

    dateCars.map(async item => {
        await uploadFilesToFirebase(process.env.BUCKETNAME, new URL(`./images/${item.cars_description.name_img_bg}.png`, import.meta.url).pathname, `cars/${item.cars_description.name_img_bg}.png`)
        .then(async res => {
            const linkFile = await urlFile(process.env.BUCKETNAME, `cars/${item.cars_description.name_img_bg}.png`);
            item.cars_description.url_img_description = linkFile;
        }).then(res => {
            writeFile(new URL('./json/dateCars.json', import.meta.url), JSON.stringify(dateCars, null, 2), {encoding: 'utf-8'});
        })
    });
}

export { uploadAllImages };
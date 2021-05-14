/* 
    Modulo para gerar a documentaçaõ do swagger automaticamente
*/

import swagger from 'swagger-autogen';
import doc from  './doc.js';

const swaggerAutogen = swagger();

const outputFile = new URL('./swagger_output.json', import.meta.url).pathname;
const endpointsFiles = [new URL('../app.js', import.meta.url).pathname];

swaggerAutogen(outputFile, endpointsFiles, doc);
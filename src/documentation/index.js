/* 
    Modulo para gerar a documentaçaõ do swagger automaticamente
*/

import swagger from 'swagger-autogen';
import doc from  './doc.js';

const outputFile = './src/documentation/swagger_output.json';
const endpointsFiles = ['./src/app.js'];

const swaggerAutogen = swagger();

swaggerAutogen(outputFile, endpointsFiles, doc);

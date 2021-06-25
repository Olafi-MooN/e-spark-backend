/* 
    Modulo para gerar a documentaçaõ do swagger automaticamente
*/

// import swagger from 'swagger-autogen';
// import doc from  './doc.js';

// const swaggerAutogen = swagger();


// const outputFile = new URL('./swagger_output.json', import.meta.url).pathname;
// const endpointsFiles = ["/src/app.js"];


// swaggerAutogen(outputFile, endpointsFiles, doc);

  
import swagger from 'swagger-autogen';
import doc from  './doc.js';

const swaggerAutogen = swagger();

const outputFile = './swagger_output.json';
const endpointsFiles = ['src/app.js'];

swaggerAutogen(outputFile, endpointsFiles, doc)
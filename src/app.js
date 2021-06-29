import express from 'express';
import { readFile } from 'fs/promises';
import { serve, setup }  from 'swagger-ui-express';
import cors from 'cors';
import { routes } from './routes/index.js';
import { connection_db } from './database/index.js';

const swaggerFile = JSON.parse(await readFile('./src/documentation/swagger_output.json'));

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);
app.use('/doc', serve, setup(swaggerFile));

connection_db();

export { app };
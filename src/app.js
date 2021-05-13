import express from 'express';
import { routes } from './routes/index.js';
import { connection_db } from './database/index.js';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

connection_db();

export { app };
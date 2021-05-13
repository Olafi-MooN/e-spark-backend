import express from 'express';
import { app } from './app.js';

const server = express();

server.use(app);

server.listen(5000, () => {
    console.log('Servidor iniciado com sucesso!');
})
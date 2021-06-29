import express from 'express';
import { app } from './app.js';

const server = express();

server.use(app);

const port = process.env.PORT || 3000;
server.listen(port, () => {
    console.log('Servidor iniciado com sucesso!');
})
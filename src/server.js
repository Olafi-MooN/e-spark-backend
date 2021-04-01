// Servidor da aplicação é aqui onde tudo começa!
const express = require('express');
const server = express();

require('dotenv').config(); // O dontenv é necessário gerenciar as variaveís de ambiente
server.use(require('./app')); // Aqui é onde vai ficar a aplicação em sí.

// Porta em que o servidor sera iniciado.
server.listen(5000, () => {
    console.log('Servidor iniciado! ');
})
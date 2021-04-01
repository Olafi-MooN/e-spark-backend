const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors()); // O cors permite que outros endereços/ rotas se comunique com API
app.use(express.json()); // Permite receber um json na rota
app.use(require('body-parser').json());
app.use(require('./routes/route')); // Onde vai ficar toda a rota da nossa aplicação.

module.exports = app; // Cria um modulo para que o server reconheça o app.
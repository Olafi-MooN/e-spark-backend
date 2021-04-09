// Toda rota da aplicação fica nesse modulo.
const router = require('express').Router();

// Busca as funções que foram cridas dentro de controllers
const insertController = require('../controllers/insertController').insert;
const viewUserController = require('../controllers/viewUsersController').viewUser;
const loginController = require('../controllers/loginController').login;
const authorization_jwt = require('../auth-jwt/middleController').middle;

// Cria as rotas.
router.post('/insert', insertController);
router.get('/users', authorization_jwt, viewUserController);
router.post('/login', loginController);


module.exports = router;
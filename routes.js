const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController');

// Rotas da home
route.get('/', homeController.paginaInicial ); // '/' rota é a home, os proximos parametros são todos MIDDLEWARES onde podemos colocar um função que chama outra função e assim por diante.
route.post('/', homeController.trataPost);

// Rotas de contato
route.get('/contato', contatoController.paginaInicial);


module.exports = route;

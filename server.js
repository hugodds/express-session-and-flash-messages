require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');
''
mongoose.connect(process.env.CONNECTIONSTRING)
  .then(() => {
    app.emit('pronto'); // Conexão com mongoose só vai existir quando o app.emit emitir esse aviso.
  })
  .catch(e => console.log(e));

const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');

const routes = require('./routes');
const path = require('path');
const { middlewareGlobal, outroMiddleware } = require('./src/middlewares/middleware'); // Via desestruturação

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, 'public')));

const sessionOptions = session({
  secret: 'psodspdofnsnfnfnfn',
  store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true
  }
});

app.use(sessionOptions);
app.use(flash());

app.set('views', path.resolve(__dirname, 'src', 'views')); // Passando caminho relativo ou caminho absoluto.
app.set('view engine', 'ejs');

// Nossos próprios MIDDLEWARES
app.use(middlewareGlobal);
app.use(outroMiddleware);
app.use(routes);

app.on('pronto', () => {  // o app escuta na porta 3000
  app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    // console.log('Servidor executando na porta 3000');
  });
});
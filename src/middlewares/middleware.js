exports.middlewareGlobal = (req, res, next) => {
  if(req.body.cliente) { // Interceptamos o valor do input pelo MIDDLEWARE GLOBAL
    req.body.cliente = req.body.cliente.replace('Domingos', 'NÃO USE DOMINGOS'); // Alteramos o valor
    console.log();
    console.log(`Vi que você postou ${req.body.cliente}`);
    console.log();
  }
  next();
};

exports.outroMiddleware = (req, res, next) => {
  // console.log('Sou o seu outro middleware');
  next();
};
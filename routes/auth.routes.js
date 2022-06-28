const { verifySignUp } = require('../middlewares');
const controller = require('../controllers/auth.controller');

module.exports = function (app) {
  app.use((req, res, next) => {
    res.header(
      'Access-Control-Allow-Headers',
      'x-access-token, Origin, Content-Type, Accept',
    );
    next();
  });

  // Insira aqui a rota para sign up
  app.post(
    // [...]
  );

  // Insira aqui a rota para sign in
  app.post(
    // [...]
  );
};

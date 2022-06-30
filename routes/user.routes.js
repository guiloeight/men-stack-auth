const { authJwt } = require('../middlewares');
const controller = require('../controllers/user.controller');

module.exports = function (app) {
  app.use((req, res, next) => {
    res.header(
      'Access-Control-Allow-Headers',
      'x-access-token, Origin, Content-Type, Accept',
    );
    next();
  });

  // Insira aqui uma rota de teste com método 'GET' retornando o controller de acesso público.
  app.get('/api/public', controller.publicAccess);

  // Insira aqui uma rota de teste com método 'GET' usando o middleware com permissão de acesso
  // restrito para usuários autenticados e retornando o controller de dashboard do usuário.
  app.get('/api/dashboard/user', [authJwt.verifyToken], controller.userBoard);

  // Insira aqui uma rota de teste com método 'GET' usando os middlewares com permissão de acesso
  // restrito para usuários autenticados e com permissão moderador retornando o controller de
  // dashboard de moderadores.
  app.get(
    '/api/dashboard/moderator',
    [authJwt.verifyToken, authJwt.isModerator],
    controller.moderatorBoard,
  );

  // Insira aqui uma rota de teste com método 'GET' usando os middlewares com permissão de acesso
  // restrito para usuários autenticados e com permissão moderador retornando o controller de
  // dashboard de administradores.
  app.get(
    '/api/dashboard/admin',
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.adminBoard,
  );
};

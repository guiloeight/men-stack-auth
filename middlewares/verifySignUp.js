const db = require('../models');

const { ROLES } = db;
const User = db.user;

// Insira aqui o método `checkDuplicateUsernameOrEmail` responsável por verificar se o usuário já existe
const checkDuplicateUsernameOrEmail = (req, res, next) => {
  // Username
  User.findOne({
    username: req.body.username,
  }).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    if (user) {
      res.status(400).send({ message: 'Erro: nome de usuário já está em uso.' });
      return;
    }

    // Email
    User.findOne({
      email: req.body.email,
    }).exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      if (user) {
        res.status(400).send({ message: 'Erro: e-mail já está em uso.' });
        return;
      }

      next();
    });
  });
};

// Insira aqui o método `checkRolesExisted` responsável por verificar se os papéis enviados
// no cadastramento de usuários existem/são válidos
const checkRolesExisted = (req, res, next) => {
  if (req.body.roles) {
    for (let i = 0; i < req.body.roles.length; i++) {
      if (!ROLES.includes(req.body.roles[i])) {
        res.status(400).send({
          message: `Erro: o papel/função ${req.body.roles[i]} não existe.`,
        });
        return;
      }
    }
  }

  next();
};

const verifySignUp = {
  checkDuplicateUsernameOrEmail,
  checkRolesExisted,
};

module.exports = verifySignUp;

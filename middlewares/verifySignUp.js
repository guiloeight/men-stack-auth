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
      // [...]
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
        // [...]
      }

      next();
    });
  });
};

// Insira aqui o método `checkRolesExisted` responsável por verificar se os papéis enviados
// no cadastramento de usuários existem/são válidos
const checkRolesExisted = (req, res, next) => {
  // [...]

  next();
};

const verifySignUp = {
  checkDuplicateUsernameOrEmail,
  checkRolesExisted,
};

module.exports = verifySignUp;

const jwt = require('jsonwebtoken');
const config = require('../config/auth.config.js');
const db = require('../models');

const User = db.user;
const Role = db.role;

// Insira aqui o método `verifyToken` responsável por verificar se o token é válido
// e existe na requisição realizada pelo usuário
const verifyToken = (req, res, next) => {
  const token = req.headers['x-access-token'];

  // [...]
};

// Insira aqui o método `isAdmin` responsável por verificar se o usuário tem papel `admin`
const isAdmin = (req, res, next) => {
  User.findById(req.userId).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    Role.find(
      // [...]
    );
  });
};

// Insira aqui o método `isModerator` responsável por verificar se o usuário tem papel `moderator`
const isModerator = (req, res, next) => {
  User.findById(req.userId).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    Role.find(
      // [...]
    );
  });
};

const authJwt = {
  verifyToken,
  // [...]
};

module.exports = authJwt;

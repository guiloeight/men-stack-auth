const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('../config/auth.config');
const db = require('../models');

const User = db.user;
const Role = db.role;

// Insira aqui o método `signUp` responsável pelo cadastramento de usuários
const signUp = (req, res) => {
  const user = new User({
    username: req.body.username,

    // [...]
  });

  user.save((err, user) => {
    // [...]
  });
};

// Insira aqui o método `signIn` responsável pela autenticação/login de usuários
const signIn = (req, res) => {
  User.findOne({
    username: req.body.username,
  })
    .exec((err, user) => {
      // [...]
    });
};

module.exports = {
  signUp,
  signIn,
};

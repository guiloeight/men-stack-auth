const mongoose = require('mongoose');

// Insira aqui o model 'User', contendo:
// - username: String
// - email: String
// - password: String
// - roles: [String]

const User = mongoose.model(
  'User',
  new mongoose.Schema({
    // [...]
  }),
);

module.exports = User;

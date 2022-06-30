const mongoose = require('mongoose');

// Insira aqui o model 'Role', contendo:
// - name: String

const Role = mongoose.model(
  'Role',
  new mongoose.Schema({
    name: String,
  }),
);

module.exports = Role;

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

// Insira aqui a importação do seu model 'user'
db.user = require('./user.model');

// Insira aqui a importação do seu model 'role'
db.role = require('./role.model');

// Insira aqui uma lista de 'roles' (papéis) a serem utilizados
db.ROLES = ['user', 'admin', 'moderator'];

module.exports = db;

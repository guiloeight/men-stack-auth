const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

// Insira aqui a importação do seu model 'user'
// [...]

// Insira aqui a importação do seu model 'role'
// [...]

// Insira aqui uma lista de 'roles' (papéis) a serem utilizados
// db.ROLES = [<?>];

module.exports = db;

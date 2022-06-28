// Insira aqui o método `publicAccess` responsável por retornar conteúdo público
const publicAccess = (req, res) => {
  // [...]
};

// Insira aqui o método `userBoard` responsável por retornar conteúdo apenas para usuários autenticados
const nomeDoMetodo = (req, res) => {
  // [...]
};

// Insira aqui o método `moderatorBoard` responsável por retornar conteúdo apenas para usuários 
// autenticados e com papel `moderator`
const nomeDoMetodo = (req, res) => {
  // [...]
};

// Insira aqui o método `adminBoard` responsável por retornar conteúdo apenas para usuários 
// autenticados e com papel `admin`
const nomeDoMetodo = (req, res) => {
  // [...]
};

module.exports = {
  publicAccess,
  // [...]
};

// Insira aqui o método `publicAccess` responsável por retornar conteúdo público
const publicAccess = (req, res) => {
  res.status(200).send('Conteúdo público.');
};

// Insira aqui o método `userBoard` responsável por retornar conteúdo apenas para usuários autenticados
const userBoard = (req, res) => {
  res.status(200).send('Conteúdo apenas para usuários logados.');
};

// Insira aqui o método `moderatorBoard` responsável por retornar conteúdo apenas para usuários 
// autenticados e com papel `moderator`
const moderatorBoard = (req, res) => {
  res.status(200).send('Conteúdo apenas para usuários moderadores.');
};

// Insira aqui o método `adminBoard` responsável por retornar conteúdo apenas para usuários 
// autenticados e com papel `admin`
const adminBoard = (req, res) => {
  res.status(200).send('Conteúdo apenas para usuários administradores.');
};

module.exports = {
  publicAccess,
  userBoard,
  moderatorBoard,
  adminBoard,
};

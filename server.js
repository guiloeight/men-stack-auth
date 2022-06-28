const express = require('express');
const dbConfig = require('./config/db.config');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require('./models');
const Role = db.role;

// Conexão com banco de dados
db.mongoose
  .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Conectado com o MongoDB com sucesso.');
    initial();
  })
  .catch((err) => {
    console.error('Erro de conexão com o MongoDB: ', err);
    process.exit();
  });

// Rotas
require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);

// Definição de porta e inicialização do servidor
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Servidor executando na porta ${PORT}.`);
});

// 
const initial = () => {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: 'user',
      }).save((err) => {
        if (err) {
          console.log('Erro: ', err);
        }

        console.log("Adicionado papel 'user' na coleção 'roles' com sucesso.");
      });

      new Role({
        name: 'moderator',
      }).save((err) => {
        if (err) {
          console.log('Erro: ', err);
        }

        console.log("Adicionado papel 'moderator' na coleção 'roles' com sucesso.");
      });

      new Role({
        name: 'admin',
      }).save((err) => {
        if (err) {
          console.log('Erro: ', err);
        }

        console.log("Adicionado papel 'admin' na coleção 'roles' com sucesso.");
      });
    }
  });
}

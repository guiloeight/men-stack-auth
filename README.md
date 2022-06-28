# MEN Stack – Autenticação e Autorização

## Dependências
- Node 14+;
- NPM 8+;
- Docker Compose 1.26+;
- Nodemon **(opcional)**;
- MongoDB Compass ou qualquer outro client/ferramenta de consulta para Mongo **(opcional)**.

## Configuração
1. Instale as dependências do projeto:
    ```bash
    npm install
    ```

2. Provisione localmente o banco de dados:
    ```bash
    $ docker-compose up -d
    ```

## Executando
Para provisionar a aplicação locamente, faça:
```sh
$ nodemon server.js
```

## Resolução

### 1. Fluxos de autenticação:
   - [ ] Crie um model nominado `User` que contenha os campos:
     - [ ] `username`: afim de receber o nome de usuário; 
     - [ ] `email`: afim de receber o e-mail de usuário; 
     - [ ] `password`: afim de receber a senha de usuário.
   - [ ] Importe o model recentemente criado (`User`) no arquivo `models/index.js`;
   - [ ] Crie um controller nominado `auth` e implemente os seguintes métodos:
     - [ ] `signUp` para permitir a criação de novos usuários;
       - [ ] Realize o hash da senha de usuário usando `bcrypt`.
     - [ ] `signIn` para permitir a autenticação de usuários.
       - [ ] Valide se usuário existe;
       - [ ] Valide se a senha está correta;
       - [ ] Gere o token de autenticação de usuário.
   - [ ] Crie um middleware nominado `verifySignUp` que contenha um método que valide a duplicidade de usuários através do `username` ou `email`.
   - [ ] Crie um arquivo de rotas nominado `auth` e implemente as seguintes rotas:
     - [ ] `POST /api/auth/signup`:
       - [ ] Atribua o middleware de checagem de duplicidade de usuários;
       - [ ] Retorne o controller `signUp` criado acima.
     - [ ] `POST /api/auth/signin`:
       - [ ] Retorno o controller `signIn` criado acima.
   - [ ] Crie um novo middleware nominado `authJwt` que contenha o seguinte método:
     - [ ] `verifyToken`: para verificar se o token de autenticação existe e é válido (o usaremos em breve).

### 2. Fluxo de autorização:
   - [ ] Crie um model nominado `Role` que contenha o campo `name` (nome/descrição do papel de usuário);
   - [ ] Importe o model recentemente criado (`Role`) no arquivo `models/index.js`;
   - [ ] No arquivo `models/index.js` especifique as 'roles' (papéis) a serem utilizados;
   - [ ] Adapte o model `User` para que possa receber o campo `roles` referenciando o model `Role`;
   - [ ] Adapte o método `signUp` em controller `auth` para receber e cadastrar os papéis de usuários;
   - [ ] Adapte o método `signIn` em controller `auth` para popular e retornar os papéis de usuários;
   - [ ] No middleware `verifySignUp`, crie um novo método que verifique se o(s) papél(is) de usuário passado(s) são válidos;
   - [ ] Adapte a rota `POST /api/auth/signup` atribuindo o middleware de validação de papéis criado acima;
   - [ ] Crie os seguintes métodos auxiliares no middleware `authJwt` (os usaremos em breve):
     - [ ] `isAdmin`: verifica se usuário é administrador;
     - [ ] `isModerator`: verifica se usuário é moderador.


### 3. Funcionamento
   - [ ] Crie um controller nominado `user` e implemente os seguintes métodos:
     - [ ] `publicAccess`: que deve retornar conteúdo público;
     - [ ] `userBoard`: que deve retornar conteúdo restrito a usuários autenticados;
     - [ ] `adminBoard`: que deve retornar conteúdo restrito a usuários autenticados e administradores;
     - [ ] `moderatorBoard`: que deve retornar conteúdo restrito a usuários autenticados e moderadores.
   - [ ] Crie um arquivo de rotas nominado `user` e implemente as seguintes rotas:
     - [ ] `GET /api/public`:
       - [ ] Retorne o controller `publicAccess` criado acima.
     - [ ] `GET /api/dashboard/user`:
       - [ ] Atribua o middleware `verifyToken`;
       - [ ] Retorne o controller `userBoard` criado acima.
     - [ ] `GET /api/dashboard/mod`:
       - [ ] Atribua os middlewares `verifyToken` e `isModerator`;
       - [ ] Retorne o controller `moderatorBoard` criado acima.
     - [ ] `GET /api/dashboard/admin`:
       - [ ] Atribua os middlewares `verifyToken` e `isAdmin`;
       - [ ] Retorne o controller `adminBoard` criado acima.

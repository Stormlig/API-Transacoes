![](https://i.imgur.com/xG74tOh.png)

# API de Controle Financeiro

## Descrição

Esta é uma API RESTful desenvolvida em equipe para fornecer funcionalidades de controle financeiro. A aplicação permite que os usuários cadastrem despesas e receitas, gerenciem categorias e visualizem seu extrato financeiro.

## Tecnologias Utilizadas

- Node.js
- Express.js
- PostgreSQL
- Bcrypt (para criptografar senhas)
- JSON Web Tokens (JWT) (para autenticação)
- Knex.js (para construção de consultas SQL)
- Outras bibliotecas e dependências relevantes

## Princípios de Arquitetura

Neste projeto, o Princípio da Responsabilidade Única (SRP) foi o foco principal da arquitetura, buscando manter o código organizado e legível. No entanto, houve momentos em que a flexibilidade se tornou necessária para garantir a harmonia e a eficácia do sistema.

## Banco de Dados

O sistema utiliza um banco de dados PostgreSQL chamado "dindin" com as seguintes tabelas:

### Tabela "usuarios"

- `id` (Chave Primária, Auto Incremento)
- `nome`
- `email` (Campo Único)
- `senha`

### Tabela "categorias"

- `id` (Chave Primária, Auto Incremento)
- `descricao`

### Tabela "transacoes"

- `id` (Chave Primária, Auto Incremento)
- `descricao`
- `valor` (Representado em centavos)
- `data`
- `categoria_id` (Chave Estrangeira)
- `usuario_id` (Chave Estrangeira)
- `tipo` (Entrada ou Saída)

## Endpoints

A seguir estão os principais endpoints da API com exemplos de uso:

### Cadastrar Usuário

- **POST** `/usuario`

  Cria um novo usuário no sistema.

  Exemplo de requisição:

  ```json
  {
      "nome": "José",
      "email": "jose@email.com",
      "senha": "123456"
  }

### Fazer Login

- **POST** `/login`

  Permite que um usuário cadastrado faça login no sistema.

  Exemplo de requisição:

  ```json
  {
      "email": "jose@email.com",
      "senha": "123456"
  }

### Detalhar Perfil do Usuário Logado

- **GET** `/usuario`

  Obtém os dados do perfil do usuário logado.

### Editar Perfil do Usuário Logado

- **PUT** `/usuario`

  Permite que o usuário logado edite seu próprio perfil.

  Exemplo de requisição:

  ```json
  {
      "nome": "José de Abreu",
      "email": "jose_abreu@email.com",
      "senha": "j4321"
  }

### Listar Categorias

- **GET** `/categoria`

  Lista todas as categorias cadastradas no sistema.

### Listar Transações do Usuário Logado

- **GET** `/transacao`

  Lista todas as transações associadas ao usuário logado.

### Detalhar Transação do Usuário Logado

- **GET** `/transacao/:id`

  Obtém detalhes de uma transação específica associada ao usuário logado.

### Cadastrar Transação do Usuário Logado

- **POST** `/transacao`

  Permite que o usuário logado cadastre uma nova transação.

  Exemplo de requisição:

  ```json
  {
      "tipo": "entrada",
      "descricao": "Salário",
      "valor": 300000,
      "data": "2022-03-24T15:30:00.000Z",
      "categoria_id": 6
  }

### Atualizar Transação do Usuário Logado

- **PUT** `/transacao/:id`

  Permite que o usuário logado atualize uma transação específica.

  Exemplo de requisição:

  ```json
  {
      "descricao": "Sapato amarelo",
      "valor": 15800,
      "data": "2022-03-23 12:35:00",
      "categoria_id": 4,
      "tipo": "saida"
  }

### Excluir Transação do Usuário Logado

- **DELETE** `/transacao/:id`

  Permite que o usuário logado exclua uma transação específica.

### Obter Extrato de Transações do Usuário Logado

- **GET** `/transacao/extrato`

  Obtém um resumo das transações do usuário, incluindo o total de entradas e saídas.

Fique à vontade para entrar em contato caso tenha alguma dúvida ou sugest


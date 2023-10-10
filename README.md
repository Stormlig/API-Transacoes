![](https://i.imgur.com/xG74tOh.png)

# API de Controle Financeiro - Dindin

## Descrição

Esta é uma API RESTful desenvolvida em equipe para fornecer funcionalidades de controle financeiro. A aplicação permite que os usuários cadastrem despesas e receitas, gerenciem categorias e visualizem seu extrato financeiro.

## Tecnologias Utilizadas

- Node.js
- Express.js
- PostgreSQL
- Bcrypt (para criptografar senhas)
- JSON Web Tokens (JWT) (para autenticação)
- Knex.js (para consulta ao banco de dados)
- Outras bibliotecas e dependências relevantes

## Princípios de Arquitetura

Este projeto foi desenvolvido com foco no Princípio da Responsabilidade Única (SRP) para manter o código mais organizado e legível.

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
  ```

### Fazer Login

- **POST** `/login`

  Permite que um usuário cadastrado faça login no sistema.

  Exemplo de requisição:

  ```json
  {
    "email": "jose@email.com",
    "senha": "123456"
  }
  ```

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
### Fazer Login

**Rota:** `POST /login`

**Requisição:**

Corpo (body) com as propriedades:
- email
- senha

**Resposta:**

Em caso de sucesso, o corpo (body) da resposta conterá um objeto com a propriedade `token`, que contém o token de autenticação, e a propriedade `usuario`, que contém as informações do usuário autenticado (exceto a senha).
Em caso de falha na validação, a resposta terá um status code apropriado e um objeto com uma propriedade `mensagem` explicando a falha.

**Nota:** A partir deste ponto, todas as funcionalidades requerem o token de autenticação do usuário logado, enviado no cabeçalho com o formato "Bearer Token".

### Detalhar Perfil do Usuário Logado

**Rota:** `GET /usuario`

**Requisição:** Sem parâmetros de rota ou de consulta.

**Resposta:**

Em caso de sucesso, o corpo (body) da resposta conterá um objeto representando o usuário encontrado (exceto a senha).
Em caso de falha na validação, a resposta terá um status code apropriado e um objeto com uma propriedade `mensagem` explicando a falha.

### Editar Perfil do Usuário Logado

**Rota:** `PUT /usuario`

**Requisição:**

Corpo (body) com as propriedades:
- nome
- email
- senha

**Resposta:**

Em caso de sucesso, não haverá conteúdo no corpo (body) da resposta.
Em caso de falha na validação, a resposta terá um status code apropriado e um objeto com uma propriedade `mensagem` explicando a falha.

### Listar Categorias

**Rota:** `GET /categoria`

**Requisição:** Sem parâmetros de rota ou de consulta.

**Resposta:**

Em caso de sucesso, o corpo (body) da resposta conterá um array com objetos representando as categorias cadastradas.
Em caso de falha na validação, a resposta terá um status code apropriado e um objeto com uma propriedade `mensagem` explicando a falha.

### Listar Transações do Usuário Logado

**Rota:** `GET /transacao`

**Requisição:** Sem parâmetros de rota ou de consulta.

**Resposta:**

Em caso de sucesso, o corpo (body) da resposta conterá um array com objetos representando as transações do usuário logado.
Em caso de falha na validação, a resposta terá um status code apropriado e um objeto com uma propriedade `mensagem` explicando a falha.

### Detalhar uma Transação do Usuário Logado

**Rota:** `GET /transacao/:id`

**Requisição:** Deverá ser enviado o ID da transação no parâmetro de rota.

**Resposta:**

Em caso de sucesso, o corpo (body) da resposta conterá um objeto representando a transação encontrada.
Em caso de falha na validação, a resposta terá um status code apropriado e um objeto com uma propriedade `mensagem` explicando a falha.

### Cadastrar Transação para o Usuário Logado

**Rota:** `POST /transacao`

**Requisição:**

Corpo (body) com as propriedades:
- descricao
- valor
- data
- categoria_id
- tipo (entrada ou saída)

**Resposta:**

Em caso de sucesso, o corpo (body) da resposta conterá as informações da transação cadastrada, incluindo seu ID.
Em caso de falha na validação, a resposta terá um status code apropriado e um objeto com uma propriedade `mensagem` explicando a falha.

### Atualizar Transação do Usuário Logado

**Rota:** `PUT /transacao/:id`

**Requisição:**

Corpo (body) com as propriedades a serem atualizadas.

**Resposta:**

Em caso de sucesso, não haverá conteúdo no corpo (body) da resposta.
Em caso de falha na validação, a resposta terá um status code apropriado e um objeto com uma propriedade `mensagem` explicando a falha.

### Excluir Transação do Usuário Logado

**Rota:** `DELETE /transacao/:id`

**Requisição:**

Deverá ser enviado o ID da transação no parâmetro de rota.

**Resposta:**

Em caso de sucesso, não haverá conteúdo no corpo (body) da resposta.
Em caso de falha na validação, a resposta terá um status code apropriado e um objeto com uma propriedade `mensagem` explicando a falha.

### Testes Automatizados

A API dindin inclui testes automatizados para garantir a integridade das funcionalidades. Para executar os testes, você pode usar o seguinte comando:

```bash
npm test

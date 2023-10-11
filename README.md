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


<h1>Fazer Login</h1>

<p><strong>POST /login</strong></p>

<p>Permite que um usuário cadastrado faça login no sistema.</p>

<p>Exemplo de requisição:</p>

```json
  
  {
      "email": "jose@email.com",
      "senha": "123456"
  }

```
<h1>Detalhar Perfil do Usuário Logado</h1>

<p><strong>GET /usuario</strong></p>

<p>Obtém os dados do perfil do usuário logado.</p>

<h1>Editar Perfil do Usuário Logado</h1>

<p><strong>PUT /usuario</strong></p>

<p>Permite que o usuário logado edite seu próprio perfil.</p>

<p>Exemplo de requisição:</p>


  ```js
{
    "nome": "José de Abreu",
    "email": "jose_abreu@email.com",
    "senha": "j4321"
}
  ```

<h1>Listar Categorias</h1>

<p><strong>GET /categoria</strong></p>

<p>Lista todas as categorias cadastradas no sistema.</p>

<h1>Listar Transações do Usuário Logado</h1>

<p><strong>GET /transacao</strong></p>

<p>Lista todas as transações associadas ao usuário logado.</p>

<h1>Detalhar Transação do Usuário Logado</h1>

<p><strong>GET /transacao/:id</strong></p>

<p>Obtém detalhes de uma transação específica associada ao usuário logado.</p>

<h1>Cadastrar Transação do Usuário Logado</h1>

<p><strong>POST /transacao</strong></p>

<p>Permite que o usuário logado cadastre uma nova transação.</p>

<p>Exemplo de requisição:</p>

  ```js
{
    "tipo": "entrada",
    "descricao": "Salário",
    "valor": 300000,
    "data": "2022-03-24T15:30:00.000Z",
    "categoria_id": 6
}
```

<h1>Atualizar Transação do Usuário Logado</h1>

<p><strong>PUT /transacao/:id</strong></p>

<p>Permite que o usuário logado atualize uma transação específica.</p>

<p>Exemplo de requisição:</p>

<pre>
<code>{
    "descricao": "Sapato amarelo",
    "valor": 15800,
    "data": "2022-03-23 12:35:00",
    "categoria_id": 4,
    "tipo": "saida"
}</code>
</pre>

<h1>Excluir Transação do Usuário Logado</h1>

<p><strong>DELETE /transacao/:id</strong></p>

<p>Permite que o usuário logado exclua uma transação específica.</p>

<h1>Obter Extrato de Transações do Usuário Logado</h1>

<p><strong>GET /transacao/extrato</strong></p>

<p>Obtém um resumo das transações do usuário, incluindo o total de entradas e saídas.</p>



<p>
Fique à vontade para entrar em contato caso tenha alguma dúvida ou sugestão!</p>

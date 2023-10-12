const { db } = require('../../database/conexao.js'); // Certifique-se de que 'db' seja uma instância válida do Knex

class RepositorioUsuarios {
  async EncontrarEmailRepository(email) {
    try {
      const resultado = await db('usuarios').where({ email }).first();

      return resultado;
    } catch (error) {
      throw new Error(error);
    }
  }

  async EncontraUsuarioPorIdRepository(userId) {
    try {
      const resultado = await db('usuarios').where({ id: userId }).first();

      return resultado;
    } catch (error) {
      throw new Error(error);
    }
  }

  async CadastrarUsuarioRepository(nome, email, senhaHash) {
    try {
      const resultado = await db('usuarios')
        .insert({ nome, email, senha: senhaHash })
        .returning('*');

      return resultado;
    } catch (error) {
      throw new Error(error);
    }
  }

  async AtualizarUsuarioRepository({ nome, email, senhaHash }, userId) {
    try {
      const resultado = await db('usuarios')
        .where({ id: userId })
        .update({ nome, email, senha: senhaHash })
        .returning('*');

      return resultado;
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = RepositorioUsuarios;

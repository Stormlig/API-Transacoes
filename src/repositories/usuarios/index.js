const { pool } = require('../../database/conexao.js');

class RepositorioUsuarios {
  EncontrarEmailRepository = async (email) => {
    try {
      const query = `SELECT * FROM usuarios WHERE email = $1`;

      const valor = [email];

      const resultado = await pool.query(query, valor);

      return resultado.rows[0];
    } catch (error) {
      throw new Error(error);
    }
  };

  EncontraUsuarioPorIdRepository = async (userId) => {
    const query = `SELECT * FROM usuarios
      WHERE id = $1`;

    const valor = [userId];

    const resultado = await pool.query(query, valor);

    return resultado.rows[0];
  };

  CadastrarUsuarioRepository = async (nome, email, senhaHash) => {
    try {
      const query = `INSERT INTO usuarios
      (nome, email, senha)
      VALUES ($1, $2, $3) RETURNING *`;

      const valores = [nome, email, senhaHash];

      const resultado = await pool.query(query, valores);

      return resultado.rows[0];
    } catch (error) {
      throw new Error(error);
    }
  };

  LoginRepository = async (email) => {
    const query = `
      SELECT * FROM usuarios
      WHERE email = $1`;

    const valores = [email];

    const resultado = await pool.query(query, valores);

    return resultado.rows[0];
  };

  AtualizarUsuarioRepository = async ({ nome, email, senhaHash }, userId) => {
    const query = `UPDATE usuarios
      SET nome = $1, email = $2, senha = $3
      WHERE id = $4`;

    const valores = [nome, email, senhaHash, userId];

    const resultado = await pool.query(query, valores);

    return resultado.rows[0];
  };
}

module.exports = RepositorioUsuarios;

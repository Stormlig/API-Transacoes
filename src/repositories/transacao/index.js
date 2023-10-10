const { pool } = require('../../database/conexao.js');

class RepositorioTransacoes {
  EncontraTransacaoRepository = async (userId) => {
    const query = `SELECT * FROM transacoes WHERE usuario_id = $1 `;

    const valor = [userId];

    const resultado = await pool.query(query, valor);

    return resultado.rows;
  };

  EncontrarTransacaoPorIdRepository = async (userId, transacaoId) => {
    const query = `SELECT * FROM transacoes WHERE usuario_id = $1 AND id = $2 `;

    const valor = [userId, transacaoId];

    const resultado = await pool.query(query, valor);

    return resultado.rows[0];
  };

  DeletaTransacaoRepository = async (userId, transacaoId) => {
    const query = `
        DELETE FROM transacoes
        WHERE id = $1
        AND usuario_id = $2
      `;

    const valores = [transacaoId, userId];

    const resultado = await pool.query(query, valores);

    return resultado.rowCount;
  };

  CadastrarTransacaoRepository = async (dadosDaTransacao, userId) => {
    const { descricao, valor, data, categoria_id, tipo } = dadosDaTransacao;

    const query = `INSERT INTO transacoes
      (descricao, valor, data, categoria_id, tipo, usuario_id)
      VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`;

    const valores = [descricao, valor, data, categoria_id, tipo, userId];

    const resultado = await pool.query(query, valores);

    return resultado.rows[0];
  };

  AtualizarTransacaoRepository = async (
    transacaoId,
    dadosDaTransacao,
    userId,
  ) => {
    const { descricao, valor, data, categoria_id, tipo } = dadosDaTransacao;

    const query = `
        UPDATE transacoes
        SET descricao = $1, valor = $2, data = $3, categoria_id = $4, tipo = $5
        WHERE id = $6 AND usuario_id = $7`;

    const valores = [
      descricao,
      valor,
      data,
      categoria_id,
      tipo,
      transacaoId,
      userId,
    ];

    const resultado = await pool.query(query, valores);

    return resultado.rows[0];
  };

  ListaTransacaoRepository = async (userId, filtro) => {
    const query =
      filtro !== undefined
        ? 'SELECT * FROM transacoes WHERE usuario_id = $1 AND categoria_id = $2'
        : 'SELECT * FROM transacoes WHERE usuario_id = $1';

    const valores = filtro !== undefined ? [userId, filtro] : [userId];

    const resultado = await pool.query(query, valores);

    return resultado.rows;
  };
}

module.exports = RepositorioTransacoes;

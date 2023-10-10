const { pool } = require('../../database/conexao.js');

class RepositorioCategorias {
  EncontraCategoriaPorIdRepository = async (categoria_id) => {
    const query = `SELECT * FROM categorias WHERE id = $1`;

    const valor = [categoria_id];

    const resultado = await pool.query(query, valor);

    if (resultado.rows.length > 0) {
      return resultado.rows[0];
    }

    return null;
  };

  EncontraCategoriaRepository = async () => {
    const query = `SELECT * FROM categorias`;

    const resultado = await pool.query(query);

    return resultado.rows;
  };
}

module.exports = RepositorioCategorias;

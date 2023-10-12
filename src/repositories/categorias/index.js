const { db } = require('../../database/conexao.js');

class RepositorioCategorias {
  async EncontraCategoriaPorIdRepository(categoria_id) {
    try {
      const resultado = await db('categorias')
        .where('id', categoria_id)
        .first();

      return resultado;
    } catch (error) {
      throw new Error(error);
    }
  }

  async EncontraCategoriaRepository() {
    try {
      const resultado = await db('categorias');

      return resultado;
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = RepositorioCategorias;

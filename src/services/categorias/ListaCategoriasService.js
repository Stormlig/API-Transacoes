const RepositorioCategorias = require('../../repositories/categorias/');
const repoCategorias = new RepositorioCategorias();

const ListaCategoriasService = async () => {
  const resultado = await repoCategorias.EncontraCategoriaRepository();

  return resultado;
};

module.exports = { ListaCategoriasService };

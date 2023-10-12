const {
  ListaCategoriasService,
} = require('../../services/categorias/ListaCategoriasService');
const handleError = require('../../utils/handleError.js');

const ListaCategoriasController = async (req, res) => {
  try {
    const resultado = await ListaCategoriasService();

    return res.json(resultado);
  } catch (error) {
    handleError(res, error, 400);
  }
};

module.exports = { ListaCategoriasController };

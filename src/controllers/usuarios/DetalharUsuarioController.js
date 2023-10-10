const {
  DetalharUsuarioService,
} = require('../../services/usuarios/DetalharUsuarioService');
const handleError = require('../../utils/handleError.js');

const DetalharUsuarioController = async (req, res) => {
  const { userId } = res.locals.usuario;

  try {
    const resultado = await DetalharUsuarioService(userId);

    const retornoParaUsuario = {
      id: resultado.id,
      nome: resultado.nome,
      email: resultado.email,
    };

    return res.json(retornoParaUsuario);
  } catch (error) {
    handleError(res, error, 400);
  }
};

module.exports = { DetalharUsuarioController };

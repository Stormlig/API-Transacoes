const {
  AtualizaUsuarioService,
} = require('../../services/usuarios/AtualizarUsuarioService.js');
const handleError = require('../../utils/handleError.js');

const AtualizaUsuarioController = async (req, res) => {
  const { userId } = res.locals.usuario;
  const { nome, email, senha } = req.body;
  const dadosDoUsuario = { nome, email, senha };

  try {
    await AtualizaUsuarioService(dadosDoUsuario, userId);

    return res.status(204).json();
  } catch (error) {
    handleError(res, error, 400);
  }
};

module.exports = { AtualizaUsuarioController };

const {
  CadastrarUsuarioService,
} = require('../../services/usuarios/CadastrarUsuarioService.js');
const handleError = require('../../utils/handleError.js');

const CadastrarUsuarioController = async (req, res) => {
  const { nome, email, senha } = req.body;
  const dadosDoUsuario = { nome, email, senha };

  try {
    const resultado = await CadastrarUsuarioService(dadosDoUsuario);

    const { id, nome, email } = resultado;

    return res.status(201).json({ id, nome, email });
  } catch (error) {
    handleError(res, error, 400);
  }
};

module.exports = { CadastrarUsuarioController };

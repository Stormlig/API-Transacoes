const { LoginService } = require('../../services/usuarios/LoginService.js');
const { AutenticarUsuario } = require('../../utils/AutenticarUsuario.js');
const handleError = require('../../utils/handleError.js');

const LoginController = async (req, res) => {
  const { email, senha } = req.body;

  try {
    const dadosDoUsurio = { email, senha };

    const resultado = await LoginService(dadosDoUsurio);

    const autenticado = await AutenticarUsuario(resultado);

    const retornoParaUsuario = {
      id: resultado.id,
      nome: resultado.nome,
      email: resultado.email,
      token: autenticado,
    };

    return res.json(retornoParaUsuario);
  } catch (error) {
    handleError(res, error, 400);
  }
};

module.exports = { LoginController };

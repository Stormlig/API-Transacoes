const {
  DeletarTransacaoService,
} = require('../../services/transacao/DeletaTransacaoService');
const handleError = require('../../utils/handleError.js');

const DeletarTransacaoController = async (req, res) => {
  const { userId } = res.locals.usuario;
  const { id } = req.params;
  const transacaoId = id;
  try {
    await DeletarTransacaoService(transacaoId, userId);

    return res.status(204).json();
  } catch (error) {
    handleError(res, error, 400);
  }
};

module.exports = { DeletarTransacaoController };

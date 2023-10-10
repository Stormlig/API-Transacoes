const {
  ListaTransacaoPorIDService,
} = require('../../services/transacao/ListaTransacaoPorIDService');
const handleError = require('../../utils/handleError.js');

const ListaTransacaoPorIdController = async (req, res) => {
  const { userId } = res.locals.usuario;
  const { id } = req.params;
  const transacaoId = id;

  try {
    const resultado = await ListaTransacaoPorIDService(userId, transacaoId);

    return res.status(201).json(resultado);
  } catch (error) {
    handleError(res, error, 400);
  }
};

module.exports = { ListaTransacaoPorIdController };

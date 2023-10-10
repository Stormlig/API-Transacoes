const {
  ExtratoTransacaoService,
} = require('../../services/transacao/ExtratoTransacaoService');
const handleError = require('../../utils/handleError.js');

const ExtratoTransacaoController = async (req, res) => {
  const { userId } = res.locals.usuario;
  try {
    const resultado = await ExtratoTransacaoService(userId);

    return res.status(201).json(resultado);
  } catch (error) {
    handleError(res, error, 400);
  }
};

module.exports = { ExtratoTransacaoController };

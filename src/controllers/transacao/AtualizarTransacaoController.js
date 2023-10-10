const {
  AtualizarTransacaoService,
} = require('../../services/transacao/AtualizarTransacaoService.js');
const handleError = require('../../utils/handleError.js');

const AtualizarTransacaoController = async (req, res) => {
  const { userId } = res.locals.usuario;
  const { id } = req.params;
  const { descricao, valor, data, categoria_id, tipo } = req.body;

  const transacaoId = id;
  const dadosDaTransacao = { descricao, valor, data, categoria_id, tipo };

  try {
    const resultado = await AtualizarTransacaoService(
      transacaoId,
      dadosDaTransacao,
      userId,
    );

    return res.status(204).json(resultado);
  } catch (error) {
    handleError(res, error, 400);
  }
};

module.exports = { AtualizarTransacaoController };

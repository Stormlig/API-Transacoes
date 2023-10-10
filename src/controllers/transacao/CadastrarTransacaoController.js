const {
  CadastrarTransacaoService,
} = require('../../services/transacao/CadastrarTransacaoService');
const handleError = require('../../utils/handleError.js');

const CadastrarTransacaoController = async (req, res) => {
  const { userId } = res.locals.usuario;
  const { descricao, valor, data, categoria_id, tipo } = req.body;
  const dadosDaTransacao = { descricao, valor, data, categoria_id, tipo };

  try {
    const resultado = await CadastrarTransacaoService(dadosDaTransacao, userId);

    return res.status(201).json(resultado);
  } catch (error) {
    handleError(res, error, 400);
  }
};

module.exports = { CadastrarTransacaoController };

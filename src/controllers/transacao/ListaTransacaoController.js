const {
  ListaTransacaoService,
} = require('../../services/transacao/ListaTransacaoService.js');
const handleError = require('../../utils/handleError.js');

const ListaTransacaoController = async (req, res) => {
  const { userId } = res.locals.usuario;
  const { filtro } = req.query;

  try {
    const resultado = await ListaTransacaoService(userId, filtro);

    return res.json(resultado);
  } catch (error) {
    handleError(res, error, 400);
  }
};

module.exports = { ListaTransacaoController };

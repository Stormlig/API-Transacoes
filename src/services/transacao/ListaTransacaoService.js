const RepositorioTransacoes = require('../../repositories/transacao/');
const repoTransacoes = new RepositorioTransacoes();

const ListaTransacaoService = async (userId, filtro) => {
  const resultado = await repoTransacoes.ListaTransacaoRepository(
    userId,
    filtro,
  );

  return resultado;
};

module.exports = { ListaTransacaoService };

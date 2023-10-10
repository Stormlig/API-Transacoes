const RepositorioTransacoes = require('../../repositories/transacao/');
const repoTransacoes = new RepositorioTransacoes();

const ListaTransacaoPorIDService = async (userId, transacaoId) => {
  const transacoes = await repoTransacoes.EncontrarTransacaoPorIdRepository(
    userId,
    transacaoId,
  );

  if (!transacoes) {
    throw new Error('Transação não encontrada');
  }

  if (transacoes.id !== Number(transacaoId)) {
    throw new Error('Não existe transação com esse id');
  }

  return transacoes;
};

module.exports = { ListaTransacaoPorIDService };

const RepositorioTransacoes = require('../../repositories/transacao/');
const repoTransacoes = new RepositorioTransacoes();

const DeletarTransacaoService = async (transacaoId, userId) => {
  const confirmaUsuarioLogado =
    await repoTransacoes.EncontraTransacaoRepository(userId);
  const userIdString = userId.toString();
  if (!confirmaUsuarioLogado.some((user) => user.usuario_id === userIdString)) {
    throw new Error('Usuário não pertence a essa rota');
  }

  const resultadoExclusao = await repoTransacoes.DeletaTransacaoRepository(
    userId,
    transacaoId,
  );

  if (resultadoExclusao === 0) {
    throw new Error('Transação não encontrada');
  }

  return resultadoExclusao;
};

module.exports = { DeletarTransacaoService };

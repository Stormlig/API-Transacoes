const RepositorioTransacoes = require('../../repositories/transacao/');
const repoTransacoes = new RepositorioTransacoes();

const ExtratoTransacaoService = async (userId) => {
  const confirmaUsuarioLogado =
    await repoTransacoes.EncontraTransacaoRepository(userId);

  const userIdString = userId.toString();
  if (!confirmaUsuarioLogado.some((user) => user.usuario_id === userIdString)) {
    throw new Error('Usuário não pertence a essa rota');
  }

  let entrada = 0;
  let saida = 0;

  confirmaUsuarioLogado.forEach((transacao) => {
    const valor = Number(transacao.valor);

    if (transacao.tipo === 'entrada') {
      entrada += valor;
    } else if (transacao.tipo === 'saida') {
      saida += valor;
    }
  });

  const extrato = {
    entrada,
    saida,
  };

  return extrato;
};

module.exports = { ExtratoTransacaoService };

const RepositorioTransacoes = require('../../repositories/transacao/');
const RepositorioCategorias = require('../../repositories/categorias/');
const repoTransacoes = new RepositorioTransacoes();
const repoCategorias = new RepositorioCategorias();

const AtualizarTransacaoService = async (
  transacaoId,
  dadosDaTransacao,
  userId,
) => {
  const transacoesEncontradas =
    await repoTransacoes.EncontraTransacaoRepository(userId);
  if (transacoesEncontradas.length === 0) {
    throw new Error('Nenhuma transação encontrada para o usuário logado');
  }

  const encontrouTransacao = transacoesEncontradas.some((transacao) => {
    return transacao.id === Number(transacaoId);
  });
  if (!encontrouTransacao) {
    throw new Error('Transação não encontrada');
  }

  const categoriaExistente =
    await repoCategorias.EncontraCategoriaPorIdRepository(
      dadosDaTransacao.categoria_id,
    );
  if (!categoriaExistente) {
    throw new Error(
      'A categoria associada ao categoria_id fornecido não foi encontrada',
    );
  }

  if (
    dadosDaTransacao.tipo !== 'entrada' &&
    dadosDaTransacao.tipo !== 'saida'
  ) {
    throw new Error('Tipo da transação inválido');
  }

  const resultado = await repoTransacoes.AtualizarTransacaoRepository(
    transacaoId,
    dadosDaTransacao,
    userId,
  );

  return resultado;
};

module.exports = { AtualizarTransacaoService };

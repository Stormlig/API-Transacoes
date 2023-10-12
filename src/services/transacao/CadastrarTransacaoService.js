const RepositorioTransacoes = require('../../repositories/transacao/');
const RepositorioCategorias = require('../../repositories/categorias/');
const repoTransacoes = new RepositorioTransacoes();
const repoCategorias = new RepositorioCategorias();

const CadastrarTransacaoService = async (dadosDaTransacao, userId) => {
  const { categoria_id } = dadosDaTransacao;


  const existeIdCategoria =
    await repoCategorias.EncontraCategoriaPorIdRepository(categoria_id);

  if (existeIdCategoria === null) {
    throw new Error(
      'A categoria associada ao categoria_id fornecido não foi encontrada',
    );
  }

  const resultado = await repoTransacoes.CadastrarTransacaoRepository(
    dadosDaTransacao,
    userId,
  );

  const resultadoFinal = {
    id: resultado.id,
    tipo: resultado.tipo,
    descricao: resultado.descricao,
    valor: parseFloat(resultado.valor),
    data: resultado.data,
    usuario_id: resultado.usuario_id,
    categoria_id: resultado.categoria_id,
    categoria_nome: existeIdCategoria.descricao,
  };

  return resultadoFinal;
};

module.exports = { CadastrarTransacaoService };

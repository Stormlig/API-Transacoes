const { db } = require('../../database/conexao.js'); // Certifique-se de que 'db' seja uma instância válida do Knex

class RepositorioTransacoes {
  async EncontraTransacaoRepository(userId) {
    const transacoes = await db('transacoes').where('usuario_id', userId);
    return transacoes;
  }

  async EncontrarTransacaoPorIdRepository(userId, transacaoId) {
    const transacao = await db('transacoes')
      .where({ usuario_id: userId, id: transacaoId })
      .first();
    return transacao;
  }

  async DeletaTransacaoRepository(userId, transacaoId) {
    const numDeletados = await db('transacoes')
      .where({ id: transacaoId, usuario_id: userId })
      .del();
    return numDeletados;
  }

  async CadastrarTransacaoRepository(dadosDaTransacao, userId) {
    const [novoRegistro] = await db('transacoes')
      .insert({
        descricao: dadosDaTransacao.descricao,
        valor: dadosDaTransacao.valor,
        data: dadosDaTransacao.data,
        categoria_id: dadosDaTransacao.categoria_id,
        tipo: dadosDaTransacao.tipo,
        usuario_id: userId,
      })
      .returning('*');
    return novoRegistro;
  }

  async AtualizarTransacaoRepository(transacaoId, dadosDaTransacao, userId) {
    const [registroAtualizado] = await db('transacoes')
      .where({ id: transacaoId, usuario_id: userId })
      .update({
        descricao: dadosDaTransacao.descricao,
        valor: dadosDaTransacao.valor,
        data: dadosDaTransacao.data,
        categoria_id: dadosDaTransacao.categoria_id,
        tipo: dadosDaTransacao.tipo,
      })
      .returning('*');
    return registroAtualizado;
  }

  async ListaTransacaoRepository(userId, filtro) {
    let query = db('transacoes').where('usuario_id', userId);
    if (filtro !== undefined) {
      query = query.where({ categoria_id: filtro });
    }
    return query;
  }
}

module.exports = RepositorioTransacoes;

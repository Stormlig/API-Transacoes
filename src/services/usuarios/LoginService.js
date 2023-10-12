const { ComparaSenha } = require('../../utils/ComparaSenha.js');
const RepositorioUsuarios = require('../../repositories/usuarios/');
const repoUsuarios = new RepositorioUsuarios();

const LoginService = async ({ email, senha }) => {
  const emailEncontrado = await repoUsuarios.EncontrarEmailRepository(email);

  if (!emailEncontrado) {
    throw new Error('Usuário não encontrado ou não existe');
  }

  await ComparaSenha(senha, emailEncontrado.senha);

  return emailEncontrado;
};

module.exports = { LoginService };

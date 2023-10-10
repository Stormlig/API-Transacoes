const { CryptografaSenha } = require('../../utils/CryptografaSenha.js');
const RepositorioUsuarios = require('../../repositories/usuarios/');
const repoUsuarios = new RepositorioUsuarios();

const AtualizaUsuarioService = async (dadosDoUsuario, userId) => {
  const { nome, email, senha } = dadosDoUsuario;

  const senhaHash = await CryptografaSenha(senha);

  const resultado = await repoUsuarios.AtualizarUsuarioRepository(
    { nome, email, senhaHash },
    userId,
  );

  return resultado;
};

module.exports = { AtualizaUsuarioService };

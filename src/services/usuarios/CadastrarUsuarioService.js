const RepositorioUsuarios = require('../../repositories/usuarios/');

const repoUsuarios = new RepositorioUsuarios();

const { CryptografaSenha } = require('../../utils/CryptografaSenha.js');

const CadastrarUsuarioService = async (dadosDoUsuario) => {
  const { nome, email, senha } = dadosDoUsuario;

  const emailDuplicado =
    await repoUsuarios.EncontraUsuarioPorIdRepository(email);

  if (emailDuplicado) {
    throw new Error('Já existe uma conta cadastrada com esse email');
  }
  const senhaHash = await CryptografaSenha(senha);

  const resultado = await repoUsuarios.CadastrarUsuarioRepository(
    nome,
    email,
    senhaHash,
  );

  return resultado;
};

module.exports = { CadastrarUsuarioService };

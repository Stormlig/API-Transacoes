const RepositorioUsuarios = require('../../repositories/usuarios/');
const repoUsuarios = new RepositorioUsuarios();

const DetalharUsuarioService = async (userId) => {
  const resultado = repoUsuarios.EncontraUsuarioPorIdRepository(userId);

  return resultado;
};

module.exports = { DetalharUsuarioService };

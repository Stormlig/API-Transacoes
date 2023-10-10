const { CriarTokenJWT } = require('./CriarTokenJWT.js');

const AutenticarUsuario = async (resultado) => {
  const { id } = resultado;

  if (id !== null) {
    const tokenJWT = await CriarTokenJWT(id);

    return tokenJWT;
  } else {
    throw new Error('Autenticação Falhou');
  }
};

module.exports = { AutenticarUsuario };

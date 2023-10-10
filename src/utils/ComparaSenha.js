const bcrypt = require('bcrypt');

const ComparaSenha = async (senha, senhaHash) => {
  const correspondente = await bcrypt.compare(senha, senhaHash);
  if (!correspondente) {
    throw new Error('Credenciais inválidas. Verifique sua senha e email.');
  }

  return correspondente;
};

module.exports = { ComparaSenha };

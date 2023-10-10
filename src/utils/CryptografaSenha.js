const bcrypt = require("bcrypt");

const CryptografaSenha = async (senha) => {
  try {
    const salt = await bcrypt.genSalt(10);

    const hash = await bcrypt.hash(senha, salt);

    return hash;
  } catch (error) {
    throw error;
  }
};

module.exports = { CryptografaSenha };

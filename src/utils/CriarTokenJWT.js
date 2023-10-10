const jwt = require('jsonwebtoken');
const SECRET_KEY = require('../env/SecretKey.js');

const CriarTokenJWT = async (userId) => {
  const payload = { userId };

  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' });

  return token;
};

module.exports = { CriarTokenJWT };

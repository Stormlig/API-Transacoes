const jwt = require('jsonwebtoken');
const SECRET_KEY = require('../env/SecretKey.js');

const verificaToken = async (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res
      .status(401)
      .json({ message: 'Token de autenticação não fornecido' });
  }

  if (!token.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Formato de token inválido' });
  }

  const tokenJWT = token.substring(7);

  try {
    const decoded = jwt.verify(tokenJWT, SECRET_KEY);

    res.locals.usuario = decoded;

    next();
  } catch (error) {
    return res.status(401).json({ message: 'Token de autenticação inválido' });
  }
};

module.exports = { verificaToken };

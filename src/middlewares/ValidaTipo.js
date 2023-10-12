const ValidaTipo = async (req, res, next) => {
  const { tipo } = req.body;

  if (tipo !== 'entrada' && tipo !== 'saida') {
    return res.status(409).json({ message: 'Tipo da transação inválido' });
  }

  next();
};

module.exports = { ValidaTipo };

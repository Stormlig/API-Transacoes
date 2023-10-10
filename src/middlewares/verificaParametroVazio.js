const verificaParametroVazios = (req, res, next) => {
  const { id } = req.params;
  if (!id || id.trim() === '') {
    throw new Error(`Informe um valor válido para ${id}`);
  }

  next();
};

module.exports = { verificaParametroVazios };

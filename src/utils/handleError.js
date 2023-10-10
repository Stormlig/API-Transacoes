function handleError(res, error, statusCode) {
  if (error instanceof Error) {
    res.status(statusCode).json({ message: error.message });
  } else {
    res.status(500).json({ message: 'Erro interno' });
  }
}

module.exports = handleError;

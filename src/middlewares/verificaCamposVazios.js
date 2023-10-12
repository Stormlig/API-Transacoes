const VerificaCamposVazios = (req, res, next) => {
  const analisar_campos = req.body;

  let campo_vazio = null;

  for (const campo in analisar_campos) {
    if (analisar_campos[campo] === '') {
      campo_vazio = campo;
      break;
    }
  }

  if (campo_vazio) {
    return res.status(409).json({
      mensagem: `Campo vazio encontrado: ${campo_vazio}. Por favor preencha todos os campos!`,
    });
  }

  next();
};

module.exports = { VerificaCamposVazios };

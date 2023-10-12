const express = require('express');

const {
  AtualizaUsuarioController,
  CadastrarUsuarioController,
  DetalharUsuarioController,
  LoginController,
} = require('../controllers/usuarios');
const {
  AtualizarTransacaoController,
  CadastrarTransacaoController,
  DeletarTransacaoController,
  ExtratoTransacaoController,
  ListaTransacaoController,
  ListaTransacaoPorIdController,
} = require('../controllers/transacao');
const { ListaCategoriasController } = require('../controllers/funcionalidades');
const { VerificaToken, ValidaTipo } = require('../middlewares');

const router = express.Router();

router.post('/usuario', CadastrarUsuarioController);
router.post('/login', LoginController);
router.get('/usuario', VerificaToken, DetalharUsuarioController);
router.put('/usuario', VerificaToken, AtualizaUsuarioController);

router.get('/categoria', VerificaToken, ListaCategoriasController);

router.get('/transacao', VerificaToken, ListaTransacaoController);

router.get('/transacao/extrato', VerificaToken, ExtratoTransacaoController);

router.get('/transacao/:id', VerificaToken, ListaTransacaoPorIdController);
router.post(
  '/transacao',
  ValidaTipo,
  VerificaToken,
  CadastrarTransacaoController,
);
router.put(
  '/transacao/:id',
  ValidaTipo,
  VerificaToken,
  AtualizarTransacaoController,
);
router.delete('/transacao/:id', VerificaToken, DeletarTransacaoController);

module.exports = { router };

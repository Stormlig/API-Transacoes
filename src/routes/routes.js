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
const { verificaToken } = require('../middlewares');

const router = express.Router();

router.post('/usuario', CadastrarUsuarioController);
router.post('/login', LoginController);
router.get('/usuario', verificaToken, DetalharUsuarioController);
router.put('/usuario', verificaToken, AtualizaUsuarioController);

router.get('/categoria', verificaToken, ListaCategoriasController);

router.get('/transacao', verificaToken, ListaTransacaoController);

router.get('/transacao/extrato', verificaToken, ExtratoTransacaoController);

router.get('/transacao/:id', verificaToken, ListaTransacaoPorIdController);
router.post('/transacao', verificaToken, CadastrarTransacaoController);
router.put('/transacao/:id', verificaToken, AtualizarTransacaoController);
router.delete('/transacao/:id', verificaToken, DeletarTransacaoController);

module.exports = { router };

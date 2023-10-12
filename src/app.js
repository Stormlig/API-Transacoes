const express = require('express');
const { router } = require('./routes/routes.js');
const { VerificaCamposVazios } = require('./middlewares/');

const app = express();

app.use(express.json());
app.use(VerificaCamposVazios);
app.use(router);

module.exports = { app };

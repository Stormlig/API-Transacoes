const express = require('express');
const { router } = require('./routes/routes.js');
const { verificaCamposVazios } = require('./middlewares/');

const app = express();

app.use(express.json());
app.use(verificaCamposVazios);
app.use(router);

module.exports = { app };

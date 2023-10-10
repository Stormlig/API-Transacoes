const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  host: process.env.HOST_DB,
  port: process.env.PORT_DB,
  user: process.env.USER_DB,
  password: process.env.PASSWORD_DB,
  database: process.env.NAME_DB,
});

pool.connect((error, client, release) => {
  if (error) {
    return console.error(
      "Ocorreu um erro ao tentar conectar com o banco de dados.",
    );
  }
  console.log("Conectado com o banco de dados.");
  release();
});

module.exports = { pool };

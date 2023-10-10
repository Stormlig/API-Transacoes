DROP TABLE IF EXISTS "transacoes";

CREATE TABLE
    "transacoes" (
        id SERIAL PRIMARY KEY,
        descricao TEXT default NULL,
        valor TEXT default NULL,
        data varchar(255),
        categoria_id varchar(36) NOT NULL,
        usuario_id varchar(36) NOT NULL,
        tipo TEXT default NULL
    );
DROP TABLE IF EXISTS "categorias";

CREATE TABLE
    "categorias" (
        id SERIAL PRIMARY KEY,
        descricao TEXT default NULL
    );
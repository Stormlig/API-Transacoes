DROP TABLE IF EXISTS "usuarios";

CREATE TABLE
    "usuarios" (
        id SERIAL PRIMARY KEY,
        nome varchar(255) default NULL,
        email varchar(255) default NULL,
        senha TEXT default NULL
    );
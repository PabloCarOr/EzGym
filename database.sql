CREATE DATABASE IF NOT EXISTS ez1;

USE ez1;

CREATE TABLE usuarios (
    id    INTEGER         NOT NULL    AUTO_INCREMENT,
    nombre      VARCHAR(50)    NOT NULL,
    correo   VARCHAR(50)    NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE ejercicios (
    id    INTEGER             NOT NULL    AUTO_INCREMENT,
    nombre          VARCHAR(50)        NOT NULL,
    categoria          VARCHAR(50)        NOT NULL,
    descripcion          VARCHAR(250),
    PRIMARY KEY     (id)
);

CREATE TABLE registros (
    id                  INTEGER             NOT NULL    AUTO_INCREMENT,
    fecha               DATE        NOT NULL,
    ejercicios_id       INT        NOT NULL,
    no_series           INT        NOT NULL,
    reps                INT        NOT NULL,
    peso                INT        NOT NULL,
    notas               VARCHAR(250)        NOT NULL,   
    PRIMARY KEY     (id)
    FOREIGN KEY     (ejercicios_id)
);

//@ Importa as bibliotecas e arquivos
const express = require("express");
const routerApp = express.Router();
const calculadora = require("../controller/ctl");

//@ Configura as rotas
routerApp.post("/calculadora", calculadora.calculadora);

//@ Exporta a variável com as rotas
module.exports = routerApp;
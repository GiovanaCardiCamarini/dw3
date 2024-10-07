const express = require("express");
const routerApp = express.Router();

const appAlunos = require("../apps/alunos/controller/ctlAlunos");
const appCursos = require("../apps/cursos/controller/ctlCursos");
const appEscola = require("../apps/escola/controller/ctlEscola"); // Importando o controlador de escola
const appLogin = require("../apps/login/controller/ctlLogin");

// Middleware que é específico para este roteador
routerApp.use((req, res, next) => {
  next();
});

routerApp.get("/", (req, res) => {
  res.send("Olá mundo!");
});

// Rotas de Alunos
routerApp.get("/getAllAlunos", appAlunos.getAllAlunos);
routerApp.post("/getAlunoByID", appLogin.AutenticaJWT, appAlunos.getAlunoByID);
routerApp.post("/insertAlunos", appLogin.AutenticaJWT, appAlunos.insertAlunos);
routerApp.post("/updateAlunos", appAlunos.updateAlunos);
routerApp.post("/deleteAlunos", appAlunos.DeleteAlunos);

// Rotas de Cursos
routerApp.get("/getAllCursos", appCursos.GetAllCursos);
routerApp.post("/getCursoByID", appCursos.GetCursoByID);
routerApp.post("/insertCursos", appCursos.InsertCursos);
routerApp.post("/updateCursos", appCursos.UpdateCursos);
routerApp.post("/deleteCursos", appCursos.DeleteCursos);

// Rotas de Escola
routerApp.get("/getAllEscola", appEscola.GetAllEscola);
routerApp.post("/getEscolaByID", appEscola.GetEscolaByID);
routerApp.post("/insertEscola", appEscola.InsertEscola);
routerApp.post("/updateEscola", appEscola.UpdateEscola);
routerApp.post("/deleteEscola", appEscola.DeleteEscola);

// Rota Login
routerApp.post("/Login", appLogin.Login);
routerApp.post("/Logout", appLogin.Logout);

module.exports = routerApp;

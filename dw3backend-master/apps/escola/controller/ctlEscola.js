const mdlEscola = require("../model/mdlEscola");

const GetAllEscola = (req, res) =>
  (async () => {
    let registro = await mdlEscola.GetAllEscola();
    res.json({ status: "ok", registro: registro });
  })();

  const GetEscolaByID = (req, res) => {
    console.log(req.body); // Para depuração
    (async () => {
      try {
        const escolaID = parseInt(req.body.escolaid);
        if (isNaN(escolaID)) {
          return res.status(400).json({ status: "error", message: "ID inválido" });
        }
        let registro = await mdlEscola.GetEscolaByID(escolaID);
        res.json({ status: "ok", registro: registro });
      } catch (error) {
        console.error(error); // Logar o erro para depuração
        res.status(500).json({ status: "error", message: "Erro interno do servidor" });
      }
    })();
  };
  

const InsertEscola = (req, res) =>
  (async () => {
    const registro = req.body;
    let { msg, linhasAfetadas } = await mdlEscola.InsertEscola(registro);
    res.json({ status: msg, linhasAfetadas: linhasAfetadas });
  })();

const UpdateEscola = (req, res) =>
  (async () => {
    const registro = req.body;
    let { msg, linhasAfetadas } = await mdlEscola.UpdateEscola(registro);
    res.json({ status: msg, linhasAfetadas: linhasAfetadas });
  })();

const DeleteEscola = (req, res) =>
  (async () => {
    const registro = req.body;
    let { msg, linhasAfetadas } = await mdlEscola.DeleteEscola(registro);
    res.json({ status: msg, linhasAfetadas: linhasAfetadas });
  })();

module.exports = {
  GetAllEscola,
  GetEscolaByID,
  InsertEscola,
  UpdateEscola,
  DeleteEscola,
};

const db = require("../../../database/databaseconfig");

// Função para buscar todas as escolas
const GetAllEscola = async () => {
  return (
    await db.query("SELECT * FROM escola WHERE deleted = false ORDER BY nome ASC")
  ).rows;
};

// Função para buscar escola por ID
const GetEscolaByID = async (escolaID) => {
    try {
      const result = await db.query(
        "SELECT * FROM escola WHERE id = $1", // Ajuste o nome da coluna aqui
        [escolaID]
      );
      return result.rows[0]; // Retorna o primeiro registro encontrado
    } catch (error) {
      console.error(error);
      throw error; // Lança o erro para ser tratado na camada de controle
    }
  };
  

// Função para inserir nova escola
const InsertEscola = async (registroPar) => {
  let linhasAfetadas;
  let msg = "ok";
  try {
    linhasAfetadas = (
      await db.query(
        "INSERT INTO escola (codigo, nome, dataabertura, deleted) VALUES ($1, $2, $3, $4)",
        [
          registroPar.codigo,
          registroPar.nome,
          registroPar.dataabertura,
          registroPar.deleted || false, // Define deleted como false se não for fornecido
        ]
      )
    ).rowCount;
  } catch (error) {
    msg = "[mdlEscola|InsertEscola] " + error.detail;
    linhasAfetadas = -1;
  }

  return { msg, linhasAfetadas };
};

// Função para atualizar escola
const UpdateEscola = async (registroPar) => {
  let linhasAfetadas;
  let msg = "ok";
  try {
    linhasAfetadas = (
      await db.query(
        "UPDATE escola SET codigo = $2, nome = $3, dataabertura = $4, deleted = $5 WHERE escolaid = $1",
        [
          registroPar.escolaid,
          registroPar.codigo,
          registroPar.nome,
          registroPar.dataabertura,
          registroPar.deleted,
        ]
      )
    ).rowCount;
  } catch (error) {
    msg = "[mdlEscola|UpdateEscola] " + error.detail;
    linhasAfetadas = -1;
  }

  return { msg, linhasAfetadas };
};

// Função para deletar escola (soft delete)
const DeleteEscola = async (registroPar) => {
  let linhasAfetadas;
  let msg = "ok";
  try {
    linhasAfetadas = (
      await db.query("UPDATE escola SET deleted = true WHERE escolaid = $1", [registroPar.escolaid])
    ).rowCount;
  } catch (error) {
    msg = "[mdlEscola|DeleteEscola] " + error.detail;
    linhasAfetadas = -1;
  }

  return { msg, linhasAfetadas };
};

module.exports = {
  GetAllEscola,
  GetEscolaByID,
  InsertEscola,
  UpdateEscola,
  DeleteEscola,
};

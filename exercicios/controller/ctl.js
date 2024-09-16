const fsoma = (num1, num2) => num1 + num2;
const fsub = (num1, num2) => num1 - num2;
const fmul = (num1, num2) => num1 * num2;
const fdiv = (num1, num2) => num1 / num2;

const calculadora = (request, res) => {
    const { num1, num2, operacao } = request.body;
    let result;

    switch (operacao) {
        case "+":
            result = fsoma(num1, num2);
            break;
        case "-":
            result = fsub(num1, num2);
            break;
        case "*":
            result = fmul(num1, num2);
            break;
        case "/":
            result = fdiv(num1, num2);
            break;
        default:
            return res.status(400).json({ status: "400", mensagem: "operação inválida" });
    }

    res.json({ status: "ok", "result": result });
};

module.exports = {
    calculadora,
};

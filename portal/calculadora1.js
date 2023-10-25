const prompt = require("prompt-sync")();

let valor1 = parseFloat(prompt("Insira o valor 1: "));
let valor2 = parseFloat(prompt("Insira o valor 2: "));

let operador = prompt("Escolha o operador: + * / -")

switch (operador) {
    case "+":
        console.log(valor1 + valor2);
        break;
    case "*":
        console.log(valor1 * valor2);
        break;
    case "/":
        console.log(valor1 / valor2);
        console.log(valor1 % valor2);
        break;
    case "-":
        console.log(valor1 - valor2)
        break;
    default:
        console.log("Opção inválida")
        break;
}



do {
    var opcao = parseInt(prompt("CALCULADORA SOFTEX: 1-Somar  2-Subtrair " +
        "3-Multiplicar  4-Dividir 0-Sair"), 10)

    if (opcao != 0 && validarOpcao(opcao) == true) {

        var num1 = parseInt(prompt("Insira numero 1: "))
        var num2 = parseInt(prompt("Insira número 2: "))

        alert("O resultado é: " + obterResultado(num1, num2, opcao));
    } else if (validarOpcao(opcao) == false) {
        alert("INVÁLIDO, TENTE NOVAMENTE!")
    }

} while (opcao != 0)

function validarOpcao(opcao) {
    if (opcao < 0 || opcao > 4) {
        return false;
    } else if (Number.isNaN(opcao)) {
        return false;
    } else {
        return true;
    }
}

function obterResultado(num1, num2, opcao) {
    if (opcao == 1) {
        return num1 + num2
    } else if (opcao == 2) {
        return num1 - num2
    } else if (opcao == 3) {
        num1 * num2
    } else {
        return num1 / num2;
    }
}

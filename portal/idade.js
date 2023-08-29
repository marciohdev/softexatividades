var nome = prompt("Entre com o nome: ")
var idadeAtual = 0;

do {
    var dataNasc = prompt("Entre com o ano de nascimento: ")
    var validacao = validarAno(dataNasc)

    if (validacao == false) {
        alert("Entre com um ano válido")
    }
} while (validacao == false) //Repita o do enquanto a funcao retornar false

idadeAtual = 2023 - dataNasc;
document.write("A sua idade é: " + idadeAtual)

function validarAno(dataNasc) {
    if (dataNasc < 1922 || dataNasc > 2021) {
        return false;
    } else {
        return true;
    }
}

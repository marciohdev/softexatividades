//11 - RECEBE O ANO DE NASCIMENTO E DIZ SE PODE VOTAR OU NÃO

var anoDeNascimento = parseInt(prompt("Entre com o ano de nascimento: "));
/*
var dataAtual = new Date();
var anoAtual = dataAtual.getFullYear();
*/

var anoAtual = 2023;

var idade = anoAtual - anoDeNascimento;

if (idade >= 18) {
	document.write("`Parabéns, você já pode votar em Lulinha!!");
} else {
	document.write("`Calma garotinhx, você ainda não pode votar!");
}

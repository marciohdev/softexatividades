//FAÇA UM PROGRAMA QUE RECEBE DOIS NUMEROS DO USUARIO E INFORMA QUAL O MAIOR E QUAL O MENOR

var n1 = parseInt(prompt("Informe o primeiro número: "));
var n2 = parseInt(prompt("Informe o segundo número: "));

//Esse if verifica quem é o maior e joga a mensagem de acordo na tela.
if (n1 > n2) {
	document.write(n1 + " é maior que " + n2);
} else if (n2 > n1) {
	document.write(n2 + " é maior que " + n1);
} else {
	document.write("Os dois números são iguais!");
}

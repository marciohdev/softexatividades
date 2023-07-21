//FAÇA UM PROGRAMA QUE RECEBE UM INTEIRO E DIGA SE É PAR OU IMPAR

var numero = parseInt(prompt("Insira um número: "));

//O %(mod) retorna o resto da divisao. A verificação aqui vê se o resto da divisão 
if (numero % 2 == 0) {
	document.write("É PAR!");
} else {
	document.write("É IMPAR!");
}

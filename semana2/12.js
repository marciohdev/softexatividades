var n1 = parseInt(prompt("Entre com o primeiro número: "));
var n2 = parseInt(prompt("Entre com o segundo número: "));
var n3 = parseInt(prompt("Entre com o terceiro número: "));

var maiorNumero = n1;

if (n2 > maiorNumero) {
	maiorNumero = n2;

	if (n3 > n2) {
		maiorNumero = n3;
	}
} else if (n3 > maiorNumero) {
	maiorNumero = n3;

	if (n2 > n3) {
		maiorNumero = n2;
	}
}

document.write(maiorNumero);

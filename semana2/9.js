/*
 TRANSFORMAR CELSIUS EM FARENHEIT
*/

var tempFarenheit = parseFloat(
	prompt("Entre com a temperatura em Farenheit para conversão: ")
);

var temperaturaCelsius = (tempFarenheit - 32) * (5 / 9);
document.write(
	"A temperatura em Celsius é: " + temperaturaCelsius.toFixed(1) + " ºC"
);

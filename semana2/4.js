/*
Uma empresa vai dar um aumento de salário ao seu funcionário. 
Faça um programa para ler o salário do funcionário e o percentual de reajuste. 
Calcular e escrever o valor do novo salário.
*/

var salario = parseFloat(prompt("Informe o salário do funcionário: "))
var percentual = parseFloat(prompt("Informe o percentual de aumento: "))
//Já que o parseFloat recebe uma string, e o prompt retorna uma string, eu consigo fazer o prompt dentro do parseFloat.
 

var reajuste = (salario * percentual) / 100;
var salarioComAumento = salario + reajuste;

alert(salarioComAumento);
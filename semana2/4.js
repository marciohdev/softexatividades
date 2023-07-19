var salario = parseFloat(prompt("Informe o salário do funcionário: "))
var percentual = parseFloat(prompt("Informe o percentual de aumento: "))

var reajuste = (salario * percentual) / 100;
var salarioComAumento = salario + reajuste;

alert(salarioComAumento);
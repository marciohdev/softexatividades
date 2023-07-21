var salario = parseFloat(prompt("Entre com o salário do colaborador: "))
var percentualAplicado;
var valorAumento;
var novoSalario;

if(salario <= 280){
    percentualAplicado = 20;
    valorAumento = (salario * 0.2) 
    novoSalario = salario + valorAumento;

} else if(salario > 280.00 && salario < 700){
    percentualAplicado = 15;
    valorAumento = (salario * percentualAplicado) / 100;
    novoSalario = salario + valorAumento;

} else if (salario >= 700 && salario < 1500){

    percentualAplicado = 10;
    valorAumento = (salario * percentualAplicado) / 100;
    novoSalario = salario + valorAumento;

} else if(salario >= 1500){

    percentualAplicado = 5;
    valorAumento = (salario * percentualAplicado) / 100;
    novoSalario = salario + valorAumento;
}

alert("Percentual: " + percentualAplicado)
alert("Valor do aumento " + valorAumento)
alert("Valor do novo salário : " + novoSalario)

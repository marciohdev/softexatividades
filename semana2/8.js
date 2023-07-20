var salario = parseFloat(prompt("Entre com o salário do colaborador: "))
var percentualAplicado;

if(salario >= 280){
    salario += (salario * 0.2) //Aqui é o mesmo de dizer salario = salario + (salario * 0.1)
} else if(salario > 280.01 && salario < 700){
    salario += (salario * 0.15)
} else if (salario >= 700 && salario < 1500){
    salario += (salario * 0.1)
} else if(salario >= 1500){
    salario += (salario * 0.05)
}

alert(salario)
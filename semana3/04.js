//Calcular a área de um triângulo de acordo com os valores de base e altura informados. 

function calcularArea(base, altura){
  return (base * altura) / 2;
}

let base = parseFloat(prompt("Informe o comprimento da base do triângulo: "));
let altura = parseFloat(prompt("Informe a altura do triângulo: "));

document.write("A area do triangulo é: " + calcularArea(base, altura));

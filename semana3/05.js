//Faça uma função que encontre a área e o PERÍMETRO de um círculo, com base no raio. 
const PI = 3.14;
let raio = parseFloat(prompt("Entre com o valor do raio: "));

function calcularArea(raio){
  PI * raio * raio;
}

function calcularPerimetro(raio){
  2 * PI * raio;
}

document.write("A area do circulo é: " + calcularArea(raio) + " e o perímetro é: " + calcularPerimetro(raio));

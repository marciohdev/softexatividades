let quilometragemInicial = parseFloat(prompt("Entre com a KM inicial: ")) 
let quilometragemFinal = parseFloat(prompt("Entre com a KM final: "))
let litrosConsumidos = parseInt(prompt("Entre com a quantidade de litros consumidos: ")) 
let precoDoLitro = parseFloat(prompt("Entre com o preço do litro de combustível: "))

//determinando a distância percorrida na viagem
let distanciaPercorrida = quilometragemFinal - quilometragemInicial;

//valorTotalGasto vai ser a quantidade de litros consumidos * o preço do litro. 
let valorTotalGasto = litrosConsumidos * precoDoLitro;

//Consumo do carro - Quantos quilômetros percorre com um litro.
//Basta fazer a divisão dos kms rodados pela quantidade de combustível consumido.
let consumoPorLitro = distanciaPercorrida / litrosConsumidos;

//AGORA O RELATÓRIO: 
alert("RELATÓRIO DA VIAGEM");
alert("Distância Percorrida: " + distanciaPercorrida)
alert("Valor total gasto: " + valorTotalGasto)
alert("Consumo do veiculo por litro: " + consumoPorLitro)
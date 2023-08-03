//Criar uma função que receba um número e faça a inversão 

function inverterNumero(numero){
    let aux = "";
    
    for(let i = 1; i <= numero.length; i++){
      aux += numero[numero.length - i];
    }
    //return Number(aux); Dessa forma ele transforma em inteiro.
    return aux;
 }

 document.write(inverterNumero(prompt("Entre com o número que quer inverter: ")));

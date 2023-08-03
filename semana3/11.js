// Escreva uma função que verifica se um número fornecido pelo usuário em um prompt é primo ou não.

let numero = parseInt(prompt("Informe o número que deseja verificar: "))
eprimo = true;

for(let i = numero - 1; i > 1; i--){

    if(numero % i == 0){
        eprimo = false;
    }
}

document.write("O número informado " + eprimo)

function contarVogais(palavra){
let contadorDeVogais = 0;

    for(let i = 0; i < palavra.length; i++){
        if (palavra[i] == "a" || palavra[i] == "e" || palavra[i] == "i" || palavra[i] == "o" || palavra[i] == "u"){
            contadorDeVogais += 1;
        }
    }
    console.log("O número de vogais da palavra é: " + contadorDeVogais)
}


contarVogais("Marcio")
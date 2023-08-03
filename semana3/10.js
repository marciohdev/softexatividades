//Faça uma função que conta quantas vezes um caractere aparece dentro da string.


function contarCaractere(palavra, caractere){
let contador = 0;
    for(let i = 0; i < palavra.length; i++){

        if(palavra[i] == caractere){
            contador++;
        }
    }

    console.log(contador)
}

contarCaractere("Beterraba", "a");
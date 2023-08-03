//função que retorne o fatorial de um número inteiro dito pelo usuário 

function calcularFatorial(numero){
    
        let fatorial = numero;
        
        for(numero; numero >= 2; numero--){
            fatorial *= (numero - 1)
            console.log(fatorial);
        }
    }

calcularFatorial(10);
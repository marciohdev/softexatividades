/* Escreva uma função que informe o retorno de um investimento (montante) com base nos 
valores do capital inicial, 
tempo em meses e 
taxa de juros mensal, fornecidos pelo usuário.
*/

//Fórmula = Montante = C * (1 + i)^t

function calcularMontante(capitalInicial, tempoMeses, taxaJuros){
    
    let montante = capitalInicial * ((1 + taxaJuros/100) ** tempoMeses); 
    console.log(montante.toFixed(2));

}

  
    

calcularMontante(100, 5, 10);

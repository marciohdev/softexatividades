function realizarOperacao(numero1, numero2) {
    if (isNaN(numero1) || isNaN(numero2)) {
        throw new Error("Por favor, insira números válidos.");
    }

    return numero1 + numero2; // Você pode substituir pela operação desejada
}

// Bloco try-catch-finally para capturar e tratar a exceção
try {
    // Solicita números ao usuário
    var inputNumero1 = prompt("Digite o primeiro número:");
    var inputNumero2 = prompt("Digite o segundo número:");

    // Converte os inputs para números
    var numero1 = parseFloat(inputNumero1);
    var numero2 = parseFloat(inputNumero2);

    // Chama a função e exibe o resultado
    var resultado = realizarOperacao(numero1, numero2);
    console.log("Resultado da operação:", resultado);
} catch (error) {
    // Captura e trata a exceção
    console.error("Erro:", error.message);
} finally {
    console.log("Finalizando o bloco try-catch-finally.");
}

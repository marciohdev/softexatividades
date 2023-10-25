let notas = []
let media = 0;

const prompt = require('prompt-sync')();

for (let i = 0; i < 3; i++) {
    notas[i] = parseFloat(prompt("Entre com a nota " + (i + 1) + "º: "));
}

for (let i of notas) {
    resultado += i;
}

console.log(media)


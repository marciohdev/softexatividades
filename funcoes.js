let a = 1;
let b = 2;

function print() {
    console.log("Imprimindo")
}

function imprimir(palavra) {
    console.log("Imprimindo a palavra desejada: " + palavra)
}


const printArrow = (a, b) => console.log(a + " e " + b)

print();
imprimir("Abacate");
printArrow(a, b);

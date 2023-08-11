let nota1 = parseFloat(prompt("Entre com a primeira nota: "))
let nota2 = parseFloat(prompt("Entre com a segunda nota: "))

let media = (nota1 + nota2) / 2;

if(media >= 7){
    document.write("ALUNO APROVADOR")
} else {
    document.write("ALUNO REPROVADO")
}

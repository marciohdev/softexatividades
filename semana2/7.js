var nota1 = parseFloat(prompt("Insira a nota 1 do aluno: "))
var nota2 = parseFloat(prompt("Insira a nota 2 do aluno: "))
var nota3 = parseFloat(prompt("Insira a nota 3 do aluno: "))
var mediaAluno; 

//LÓGICA QUE DESCOBRE QUAL A MENOR NOTA E CALCULA A MEDIA;

if(nota1 < nota2 && nota1 < nota3){
    mediaAluno = (nota2 + nota3) / 2
}

if(nota2 < nota1 && nota2 < nota3){
    mediaAluno = (nota1 + nota3) / 2
}

if(nota3 < nota1 && nota3 < nota2){
    mediaAluno = (nota1 + nota2) / 2
}

//LÓGICA QUE CLASSIFICA O ALUNO DE ACORDO COM A MÉDIA.
if(mediaAluno < 3 ){
    alert("Reprovado direto")
} else if(mediaAluno > 3 && mediaAluno < 7){
    alert("Prova Final")
} else {
    alert("Aprovado direto")
}



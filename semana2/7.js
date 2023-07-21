var nota1 = parseFloat(prompt("Insira a nota 1 do aluno: "))
var nota2 = parseFloat(prompt("Insira a nota 2 do aluno: "))
var nota3 = parseFloat(prompt("Insira a nota 3 do aluno: "))
var mediaAluno; 

//LÓGICA QUE DESCOBRE QUAL A MENOR NOTA E CALCULA A MEDIA;
var menorNota = nota1; //Aqui fazemos a variável menorNota receber NOTA1;

if(menorNota > nota2){
    menorNota = nota2;
}

if(menorNota > nota3){
    menorNota = nota3;
}

mediaAluno = (nota1 + nota2 + nota3 - menorNota) / 2;

//LÓGICA QUE CLASSIFICA O ALUNO DE ACORDO COM A MÉDIA.
if(mediaAluno < 3 ){
    alert("Reprovado direto")
} else if(mediaAluno > 3 && mediaAluno < 7){
    alert("Prova Final")
} else {
    alert("Aprovado direto")
}

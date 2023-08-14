let nomeAluno = "Marcio"; 
let notas = [9.0, 8.8];
let numeroFaltas = 4;
let media = (notas[0] + notas[1]) / 2

if(media < 7){
  console.log("ALUNO REPROVADO")
} else if(numeroFaltas > 3){
  console.log("ALUNO REPROVADO") 
} else{
  console.log("O ALUNO ESTÁ APROVADO")
}


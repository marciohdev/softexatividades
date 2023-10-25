const prompt = require('prompt-sync')();


//String 
let nome = prompt('Informe o nome: ')
//Number
let salario = prompt("Informe o seu salário: ")
//Number
let idade = prompt("Informe a idade: ")
//Boolean
let temDiploma = prompt("Tem diploma? S/N ")



console.log(nome.concat(" Sobrenome"))
console.log(salario / 2)
console.log(Math.pow(idade))
console.log(temDiploma)

/*

Faça um programa que leia o nome do usuário, 
a idade do usuário, o nome da mãe do usuário, 
a idade da mãe do usuário, o nome do pai do usuário e a idade do pai do usuário. 
O programa devera imprimir na tela quantos anos a mãe e o pai do usuário tinha quando ele nasceu. 
A resposta deve ter o formato deste exemplo: 
“Carlos, quando você nasceu, Dona Cecilia tinha 27 anos e Seu Paulo tinha 32 anos”
*/

var nomeUsuario = prompt("Digite o seu nome: ")
var idadeUsuario = parseInt(prompt("Digite a sua idade: "))
var nomeMae = prompt("Digite o nome da sua mãe: ")
var idadeMae =parseInt(prompt("Digite a idade da sua mãe: "))
var nomePai = prompt("Digite o nome do seu pai: ")
var idadePai =parseInt(prompt("Digite a idade do seu pai: "))

var idadeMaeNascimento = idadeMae - idadeUsuario;
var idadePaiNascimento = idadePai - idadeUsuario;

alert(nomeUsuario +" quando você nasceu, Dona " + nomeMae + " tinha " + idadeMaeNascimento 
+ " anos e Seu " + nomePai + " tinha " + idadePaiNascimento + " anos.")


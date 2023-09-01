const candidatosDisponiveis = {
    candidato_X: {
        numero: 889,
        votosRecebidos: 0
    },
    candidato_Y: {
        numero: 847,
        votosRecebidos: 0
    },
    candidato_Z: {
        numero: 515,
        votosRecebidos: 0
    },

    branco: {
        numero: 0,
        votosRecebidos: 0
    }
}

// também pode ser implementado utilizando classe 

// class CandidatosDisponiveis2 {
//     static candidato_X = 889;
//     static candidato_Y = 847;
//     static candidato_Z = 515;
//     static branco = 0
// }

let opcao = 0;


do {
    let voto = parseInt(prompt("Entre com o seu voto: "));

    if (validacao(voto)) {
        contagemVotos(voto);
        opcao = parseInt(prompt("Deseja votar novamente? 1- SIM  2- NÃO"))
    } else {
        alert("Valor inserido inválido, tente novamente!")
        opcao = 1;
    }



} while (opcao == 1); //Mantem o loop enquanto opcao for 1;

document.write("CONFIRA A CONTAGEM DE VOTOS VÁLIDOS: <br>" +
    "Candidato X: " + candidatosDisponiveis.candidato_X.votosRecebidos + "!! <br>" +
    "Candidato Y: " + candidatosDisponiveis.candidato_Y.votosRecebidos + "!! <br>" +
    "Candidato Z: " + candidatosDisponiveis.candidato_Z.votosRecebidos + "!! <br>" +
    "VOTOS BRANCOS: " + candidatosDisponiveis.branco.votosRecebidos + ".")



function contagemVotos(voto) {

    if (voto == candidatosDisponiveis.candidato_X.numero) {
        candidatosDisponiveis.candidato_X.votosRecebidos++;
    } else if (voto == candidatosDisponiveis.candidato_Y.numero) {
        candidatosDisponiveis.candidato_Y.votosRecebidos++;
    } else if (voto == candidatosDisponiveis.candidato_Z.numero) {
        candidatosDisponiveis.candidato_Z.votosRecebidos++;

    } else {
        candidatosDisponiveis.branco.votosRecebidos++;
    }
}

function validacao(voto) {
    if (voto == candidatosDisponiveis.candidato_X.numero
        || voto == candidatosDisponiveis.candidato_Y.numero
        || voto == candidatosDisponiveis.candidato_Z.numero
        || voto == candidatosDisponiveis.branco.numero) {

        return true;

    } else {
        return false;
    }
}

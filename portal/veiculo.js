let qtdRodas = parseInt(prompt("Informe a quantidade de rodas do veículo: "));
let pesoBruto = parseFloat(prompt("Informe o preso bruto do veículo: "));
let qtdPessoas = parseInt(prompt("Informe a quantidade de pessoas no veículo: "));

function classificarVeiculo(qtdRodas, pesoBruto, qtdPessoas){
 
  if(qtdRodas > 1 && qtdRodas < 4)
  {
    console.log("CLASSIFICAÇÃO A");
  } else if(qtdRodas == 4 && qtdPessoas <=8 && pesoBruto >= 3.500){
    console.log("CLASSIFICAÇÃO B");
  }else if(qtdRodas >= 4 && (pesoBruto >= 3.500 && pesoBruto <=6000)){
     console.log("CLASSIFICAÇÃO C");
  } else if(qtdRodas >=4 && qtdPessoas > 8){
     console.log("CLASSIFICAÇÃO D");
  }else if(qtdRodas >= 4 && pesoBruto  > 6000){
     console.log("CLASSIFICAÇÃO E");
  }
  
  
}

classificarVeiculo();

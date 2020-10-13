// irá mudar o conteudo da classe titulo para "aparecida nutricionista"
var title = document.querySelector(".title");
title.textContent = "Aparecida Nutricionista";

var paciente01 = document.querySelector("#paciente01");
// var paciente02 = document.querySelector("#paciente02");
// var paciente03 = document.querySelector("#paciente03");
var tdPeso = paciente01.querySelector(".info-peso"); //tenho certeza que há como melhorar essa parte
var pesoPaciente = tdPeso.textContent;

var tdAltura = paciente01.querySelector(".info-altura");
var alturaPaciente = tdAltura.textContent;

var imc = pesoPaciente / (alturaPaciente * alturaPaciente);
var tdImc = paciente01.querySelector(".info-imc");


//variaveis para a validacao do peso
var pesoValidacao = true;
var alturaValidacao = true;

//verificação imc (de uma forma beeeem estranha ainda)
if(pesoPaciente < 0 || pesoPaciente >= 1000){
  console.log("Peso Inválido!");
  pesoValidacao = false;

  tdImc.textContent == "Peso inválido!"; //parte da validação de imc
}

if(alturaPaciente <= 0 || alturaPaciente >= 3.00){
  console.log("Altura inválida!");
  pesoValidacao = false;

  tdImc.textContent = "Altura inválida!" //parte da validação de imc
}

//aqui o isntrutor usa as variaveis de validacao calcular o imc com valores validos
if(alturaValidacao && pesoValidacao) {
  var imc = pesoPaciente / (alturaPaciente * alturaPaciente);
  tdImc.textContent = imc;
  
}

console.log(imc);
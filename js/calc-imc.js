// irá mudar o conteudo da classe titulo para "aparecida nutricionista"
var title = document.querySelector(".title");
title.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");
//não é uma boaprática de programação repetir mil vezes o código
// var paciente02 = document.querySelector("#paciente02");
// var paciente03 = document.querySelector("#paciente03");

//agora o instrutor vai usar for o que já da um alivio mental
for (var i = 0; i < pacientes.length; i++) {
  // console.log(i);
  var paciente = pacientes[i]; //ele vai modificar mais atributos atraves dessa propriedade por isso faz isso

  var tdPeso = paciente.querySelector(".info-peso"); //tenho certeza que há como melhorar essa parte
  var pesoPaciente = tdPeso.textContent;

  var tdAltura = paciente.querySelector(".info-altura");
  var alturaPaciente = tdAltura.textContent;

  var imc = calculaIMC(pesoPaciente, alturaPaciente);
  var tdImc = paciente.querySelector(".info-imc");

  //verificação imc (de uma forma beeeem estranha ainda)
  if (!validaPeso(pesoPaciente)) {
    console.log("Peso Inválido!");
    pesoValidacao = false;
    tdImc.textContent = "Peso inválido!"; //parte da validação de imc
    paciente.classList.add("paciente-invalido"); //modifica o estilo da linha para deixar mais evidente
  }

  if (!validaAltura(alturaPaciente)) {
    console.log("Altura inválida!");
    alturaValidacao = false;
    tdImc.textContent = "Altura inválida!"; //parte da validação de imc
    paciente.classList.add("paciente-invalido"); //modifica o estilo da linha para deixar mais evidente
  }

  //aqui o isntrutor usa as variaveis de validacao calcular o imc com valores validos
  if (validaPeso(pesoPaciente) && validaAltura(alturaPaciente)) {
    var imc = calculaIMC(pesoPaciente, alturaPaciente);
    tdImc.textContent = imc; //trunca em duas casas decimais o imc
  }
}

function validaPeso(pesoPaciente) {
  if (pesoPaciente >= 0 && pesoPaciente < 1000) {
    return true;
  } else {
    return false;
  }
}

function validaAltura(alturaPaciente) {
  if (alturaPaciente >= 0 && alturaPaciente < 3.0) {
    return true;
  } else {
    return false;
  }
}

function calculaIMC(peso, altura) {
  var imc = 0;

  imc = peso / (altura * altura);

  return imc.toFixed(2);
}

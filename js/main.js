// irá mudar o conteudo da classe titulo para "aparecida nutricionista"
var title = document.querySelector(".title");
title.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");
//não é uma boaprática de programação repetir mil vezes o código
// var paciente02 = document.querySelector("#paciente02");
// var paciente03 = document.querySelector("#paciente03");

//agora o instrutor vai usar for o que já da um alivio mental
for(var i = 0; i < pacientes.length; i++){
  console.log(i);
  var paciente = pacientes[i] //ele vai modificar mais atributos atraves dessa propriedade por isso faz isso

  var tdPeso = paciente.querySelector(".info-peso"); //tenho certeza que há como melhorar essa parte
  
  var pesoPaciente = tdPeso.textContent;
  var tdAltura = paciente.querySelector(".info-altura");
  var alturaPaciente = tdAltura.textContent;

  var imc = pesoPaciente / (alturaPaciente * alturaPaciente);
  var tdImc = paciente.querySelector(".info-imc");

  //variaveis para a validacao do peso
  var pesoValidacao = true;
  var alturaValidacao = true;

  //verificação imc (de uma forma beeeem estranha ainda)
  if(pesoPaciente < 0 || pesoPaciente >= 1000){
    console.log("Peso Inválido!");
    pesoValidacao = false;

    tdImc.textContent = "Peso inválido!"; //parte da validação de imc

    paciente.classList.add("paciente-invalido");   //modifica o estilo da linha para deixar mais evidente 
  }

  if(alturaPaciente <= 0 || alturaPaciente >= 3.00){
    console.log("Altura inválida!");
    pesoValidacao = false;

    tdImc.textContent = "Altura inválida!"; //parte da validação de imc

    paciente.classList.add("paciente-invalido");  //modifica o estilo da linha para deixar mais evidente
  }

  //aqui o isntrutor usa as variaveis de validacao calcular o imc com valores validos
  if(alturaValidacao && pesoValidacao){
    var imc = pesoPaciente / (alturaPaciente * alturaPaciente);
    tdImc.textContent = imc.toFixed(2); //trunca em duas casas decimais o imc
    
  }

}

title.addEventListener("click", function(){
  console.log("Olá eu fui clicado!");
});

var  botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click",function(){
  console.log("Oi, cliquei no botão");
});
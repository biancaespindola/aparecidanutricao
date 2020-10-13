// irá mudar o conteudo da classe titulo para "aparecida nutricionista"
var title = document.querySelector(".title");
title.textContent = "Aparecida Nutricionista";

var paciente01 = document.querySelector("#paciente01");
// var paciente02 = document.querySelector("#paciente02");
// var paciente03 = document.querySelector("#paciente03");
var tdPeso = paciente01.querySelector(".info-peso");
var pesoPaciente = tdPeso.textContent;

var tdAltura = paciente01.querySelector(".info-altura");
var alturaPaciente = tdAltura.textContent;

var imc = pesoPaciente / (alturaPaciente * alturaPaciente);
var tdImc = paciente01.querySelector(".info-imc");

tdImc.textContent = imc;

console.log(imc);
var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function (event) {
  event.preventDefault();
  // console.log("Oi, cliquei no botão");

  var form = document.querySelector("#form-add");

  var nomeNovoPaciente = form.nome.value;
  var pesoNovoPaciente = form.peso.value;
  var alturaNovoPaciente = form.altura.value;
  var gorduraNovoPaciente = form.gordura.value;
  // var imcNovoPaciente = 

  // console.log(nomeNovoPaciente);
  // console.log(pesoNovoPaciente);
  // console.log(alturaNovoPaciente);
  // console.log(gorduraNovoPaciente);

  var novoPacienteTr = document.createElement("tr");
  
  var nomeNovoPacienteTd = document.createElement("td");
  var pesoNovoPacienteTd = document.createElement("td");
  var alturaNovoPacienteTd = document.createElement("td");
  var gorduraNovoPacienteTd = document.createElement("td");
  var imcNovoPacienteTd = document.createElement("td");

  nomeNovoPacienteTd.textContent = nomeNovoPaciente;
  pesoNovoPacienteTd.textContent = pesoNovoPaciente;
  alturaNovoPacienteTd.textContent = alturaNovoPaciente;
  gorduraNovoPacienteTd.textContent = gorduraNovoPaciente;

  novoPacienteTr.appendChild(nomeNovoPacienteTd);
  novoPacienteTr.appendChild(pesoNovoPacienteTd);
  novoPacienteTr.appendChild(alturaNovoPacienteTd);
  novoPacienteTr.appendChild(gorduraNovoPacienteTd);

  // console.log(novoPacienteTr);

  var tabelaPacientes = document.querySelector("#tabela-pacientes");

  tabelaPacientes.appendChild(novoPacienteTr);

});
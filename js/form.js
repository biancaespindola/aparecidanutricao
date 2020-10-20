var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function (event) {
  event.preventDefault();
  // console.log("Oi, cliquei no botão");

  var form = document.querySelector("#form-add");

  var novoPaciente = obtemPacienteDoFormulario(form);
  // Extraindo informações do paciente do form

  console.log(novoPaciente);
  // console.log(pesoNovoPaciente);
  // console.log(alturaNovoPaciente);
  // console.log(gorduraNovoPaciente);

  //cria a tr e td do paciente
  var novoPacienteTr = montaTr(novoPaciente);

  // console.log(novoPacienteTr);
  //adiconando o paciente na tabela
  var tabelaPacientes = document.querySelector("#tabela-pacientes");

  tabelaPacientes.appendChild(novoPacienteTr);

  form.reset();
});

function obtemPacienteDoFormulario(form) {
  var novoPaciente = {
    nomeNovoPaciente: form.nome.value,
    pesoNovoPaciente: form.peso.value,
    alturaNovoPaciente: form.altura.value,
    gorduraNovoPaciente: form.gordura.value,
    imcNovoPaciente: calculaIMC(form.peso.value, form.altura.value),
  };

  return novoPaciente;
}

function montaTr(novoPaciente) {
  var novoPacienteTr = document.createElement("tr");
  novoPacienteTr.classList.add("paciente");

  novoPacienteTr.appendChild(
    montaTd(novoPaciente.nomeNovoPaciente, "info-nome")
  );
  novoPacienteTr.appendChild(
    montaTd(novoPaciente.pesoNovoPaciente, "info-peso")
  );
  novoPacienteTr.appendChild(
    montaTd(novoPaciente.alturaNovoPaciente, "info-altura")
  );
  novoPacienteTr.appendChild(
    montaTd(novoPaciente.gorduraNovoPaciente, "info-gordura")
  );
  novoPacienteTr.appendChild(montaTd(novoPaciente.imcNovoPaciente, "info-imc"));

  return novoPacienteTr;
}

function montaTd(dado, classe) {
  var td = document.createElement("td");
  td.textContent = dado;
  td.classList.add(classe);

  return td;
}

// function filhoTr ()
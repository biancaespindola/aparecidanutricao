var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function (event) {
  event.preventDefault();
  // console.log("Oi, cliquei no botão");

  var form = document.querySelector("#form-add");

  var novoPaciente = obtemPacienteDoFormulario(form);

  console.log(novoPaciente);

  var erroNovoPaciente = validaPaciente(novoPaciente);

  console.log(erroNovoPaciente.length);

  // var mensagemErro = document.querySelector("#mensagem-erro");
  // var validaPeso = validaPeso(pesoPaciente)

  if (erroNovoPaciente.length > 0) {
    // var mensagemErro = document.querySelector("#mensagem-erro");
    // mensagemErro.textContent = erro;
    alert("Há algo de errado com o paciente que você deseja cadrastrar");
    exibirMensagem(erroNovoPaciente);
    //cria a tr e td do paciente
    // alert("Os dados do paciente não foram inseridos corretamente");
    return;
  } else {
    // exibirMensagem("");
    // mensagemErro.textContent = erro;
    adicionaNaTabela(novoPaciente);

    form.reset();
    var mensagemErro = document.querySelector("#mensagem-erro");
    mensagemErro.innerHTML = "";
  }
});

function adicionaNaTabela(novoPaciente){

  var novoPacienteTr = montaTr(novoPaciente);

    // console.log(novoPacienteTr);
    //adiconando o paciente na tabela
    var tabelaPacientes = document.querySelector("#tabela-pacientes");

    tabelaPacientes.appendChild(novoPacienteTr);

};

function obtemPacienteDoFormulario(form) {
  var novoPaciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaIMC(form.peso.value, form.altura.value),
  };

  return novoPaciente;
}

function montaTr(novoPaciente) {
  var novoPacienteTr = document.createElement("tr");
  novoPacienteTr.classList.add("paciente");

  novoPacienteTr.appendChild(
    montaTd(novoPaciente.nome, "info-nome")
  );
  novoPacienteTr.appendChild(
    montaTd(novoPaciente.peso, "info-peso")
  );
  novoPacienteTr.appendChild(
    montaTd(novoPaciente.altura, "info-altura")
  );
  novoPacienteTr.appendChild(
    montaTd(novoPaciente.gordura, "info-gordura")
  );
  novoPacienteTr.appendChild(montaTd(novoPaciente.imc, "info-imc"));

  return novoPacienteTr;
}

function montaTd(dado, classe) {
  var td = document.createElement("td");
  td.textContent = dado;
  td.classList.add(classe);

  return td;
}

function validaPaciente(novoPaciente) {
  var erros = [];

  if (novoPaciente.nome.length == 0) {
    erros.push("Insira o nome do paciente");
  }
  if (novoPaciente.peso.length == 0) {
    erros.push("Insira o peso do paciente");
  }
  if (novoPaciente.altura.length == 0) {
    erros.push("Insira a altura do paciente");
  }
  if (novoPaciente.gordura.length == 0) {
    erros.push("Insira a porcentagem de gordura do paciente");
  }
  if (!validaPeso(novoPaciente.peso)) {
    erros.push("Peso inválido");
  }
  if (!validaAltura(novoPaciente.altura)) {
    erros.push("Altura inválida");
  }
  return erros;
}

function exibirMensagem(erroNovoPaciente) {
  var ul = document.querySelector("#mensagem-erro");
  ul.innerHTML = "";

  erroNovoPaciente.forEach(function (erroNovoPaciente) {
    var li = document.createElement("li");
    li.textContent = erroNovoPaciente;
    ul.appendChild(li);
  });
}

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function (event) {
  event.preventDefault();
  // console.log("Oi, cliquei no botão");

  var form = document.querySelector("#form-add");

  var novoPaciente = obtemPacienteDoFormulario(form);

  console.log(novoPaciente);
  

  var erroNovoPaciente = validaPaciente(validaPeso(novoPaciente.pesoNovoPaciente),
  validaAltura(novoPaciente.alturaNovoPaciente));

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
    var novoPacienteTr = montaTr(novoPaciente);

    // console.log(novoPacienteTr);
    //adiconando o paciente na tabela
    var tabelaPacientes = document.querySelector("#tabela-pacientes");

    tabelaPacientes.appendChild(novoPacienteTr);

    form.reset();
  }
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

function validaPaciente(peso, altura) {
  var erros = [];
 
  // if (!peso && !altura) {
  //   erros
  //   return "Peso e altura inválidos";
  // }
  if (!peso) {
    erros.push("Peso inválido");
  }    
  if (!altura) {
    erros.push("Altura inválida");
  } else {
    return "";
  }
  return erros;
}


function exibirMensagem(erroNovoPaciente) {
  var ul = document.querySelector("#mensagem-erro");
  erroNovoPaciente.forEach(function(erroNovoPaciente){
    var li = document.createElement("li");
    li.textContent = erroNovoPaciente;
    ul.appendChild(li);
  });  
  
}
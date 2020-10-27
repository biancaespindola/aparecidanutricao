var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(){
  console.log("Buscando pacientes...");

  var xhr = new XMLHttpRequest();

  xhr.open("GET", "http://api-pacientes.herokuapp.com/pacientes");

  xhr.addEventListener("load", function(){
    var resposta = xhr.responseText;
    // console.log(resposta);
    // console.log(typeof resposta);
    var pacientes = JSON.parse(resposta);

    
    pacientes.forEach( function(paciente){
      console.log(paciente);
      adicionaNaTabela(paciente);
    });

  });

  xhr.send();
});
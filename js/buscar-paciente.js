var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(){
  console.log("Buscando pacientes...");

  var xhr = new XMLHttpRequest();

  xhr.open("GET", "http://api-pacientes.herokuapp.com/pacientes");

  xhr.addEventListener("load", function(){
    // console.log(xhr.responseText);
    var resposta = xhr.responseText;
    console.log(resposta);
    console.log(typeof resposta);

    var pacientes = JSON.parse(resposta);
    console.log(pacientes);
    console.log(typeof pacientes);
  });

  xhr.send();
});
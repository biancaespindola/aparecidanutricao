var pacientesTabela = document.querySelectorAll(".paciente");

console.log(pacientesTabela);

pacientesTabela.forEach(function(paciente){
  paciente.addEventListener("dblclick", function(){
    console.log("fui clicado duas vezes");
    this.remove();
  });
});
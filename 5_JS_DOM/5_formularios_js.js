function ponPrimeraMayus(texto) {
  var primeraLetra = texto.charAt(0).toUpperCase();
   // Desde el 2º carácter al final
  var resto = texto.substring(1).toLowerCase();  
  return primeraLetra + resto;
}
function validar() {
  var inputNombre   = document.getElementById("nombre");
  var nombre = inputNombre.value; 
    
  validarInput(inputNombre, nombre);
   
  var inputApell_1   = document.getElementById("primer_apellido");
  var apell_1 = inputApell_1.value; 
  validarInput(inputApell_1, apell_1);
}
function validarInput(/* var */ inputTexto, texto) {
  if ( texto == "") {
    inputTexto.style.borderColor = "#F04040";
  }  else { // Cuando texto tenga algún valor (texto!="")
    inputTexto.style.borderColor = "";
    inputTexto.value = ponPrimeraMayus(texto);
  }
}
/*

  var inputApell_1  = document.getElementById("primer_apellido");
  var inputApell_2  = document.getElementById("segundo_apellido"); 
  //.getAttribute("value");
  var apell_1 = inputApell_1.value; */
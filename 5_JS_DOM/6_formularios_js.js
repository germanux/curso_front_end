// 6_formularios_js.js

/*  Ejercicio:

  1 - Validar que el usuario introduzca un email y contraseña
  1.1 - Marcar en rojo los campos que no sean rellenados
  2 - Comprobar que sean iguales entre sí
  2.1 - Marcar en verde cuando sean iguales
  2.2 - En naranja cuando no
  3 - Cuando esté correcto, indicar "Registrado con exito"
  en el INPUT del Mensaje y el fondo de table, en verde.
  3.1 - Si hay algo mal, decir qué está mal
  4º - Ir pensando qué cerveza tomar
*/
function validarInputById(id) {
  var input = document.getElementById(id);
  var textoInput = input.value;
  if (textoInput == "") {
    input.style.borderColor = "red";
    return false;
  } else {
    input.style.borderColor = "";    
    return true;
  }
}

function validarParInput(id_1, id_2) {
  var input_1 = document.getElementById(id_1);
  var input_2 = document.getElementById(id_2);
  if (input_1.value != input_2.value) {
    input_1.style.borderColor = "orange";
    input_2.style.borderColor = "orange";
    return false;
  } else {
    input_1.style.borderColor = "green";
    input_2.style.borderColor = "green";
    return true;
  }
}

function validarFormulario() {
  
  if (validarInputById("email") 
    && validarInputById("email_rep"))
  {
    var emailsOk = validarParInput("email", "email_rep");
  }
   if (validarInputById("password") && validarInputById("password_rep") ){
     
    var passwordsOk = validarParInput("password", "password_rep");
   }
   if (emailsOk == true && passwordsOk == true) {
     document.getElementById("mensaje").value = "Registrado";
     document.getElementsByTagName("table")[0].style.backgroundColor = "green";
   }
}

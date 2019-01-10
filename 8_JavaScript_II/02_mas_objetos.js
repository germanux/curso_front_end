var listaPersonas = new Array();

function addPersona ( ) 
{
  var nuevaPersona = new Object();
  nuevaPersona.nombre = document.getElementById("inputNombre").value;
  nuevaPersona.edad = document.getElementById("inputEdad").value;
  nuevaPersona.edad = parseInt(nuevaPersona.edad);
  nuevaPersona.email = document.getElementById("inputEmail").value;

  listaPersonas [ listaPersonas . length ] = nuevaPersona;

  nuevaPersona = new Object();
}
function listarPersonas() {
  var divListado = document.getElementById("divListado");
  divListado.innerHTML = "<h2>Lista de personas</h2>";
  for (var i = 0; i < listaPersonas.length; i++) 
  {   
    var persona = listaPersonas [ i ];
    divListado.innerHTML += "<p>Nombre: " + persona.nombre + ", Edad: " + persona.edad + ", &lt;" + persona.email + "&gt; </p>";
  }
}

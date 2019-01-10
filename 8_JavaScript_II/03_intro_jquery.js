var listaPersonas;

jQuery(document).ready( function() {
  listaPersonas = new Array();
  jQuery("*").css( "border-color", "red");
});

function addPersona ( ) 
{
  var nuevaPersona = new Object();
  nuevaPersona.nombre = $("#inputNombre").val();
  nuevaPersona.edad = $("#inputEdad").val();
  nuevaPersona.edad = parseInt(nuevaPersona.edad);
  nuevaPersona.email = $("#inputEmail").get(0).value;

  listaPersonas [ listaPersonas . length ] = nuevaPersona;
}
function listarPersonas() {
  $("#divListado").html("<h2>Lista de personas</h2>");

  for (var i = 0; i < listaPersonas.length; i++) 
  {   
    var persona = listaPersonas [ i ];
    $("#divListado").html(      
      $("#divListado").html() + "<p>Nombre: " + persona.nombre + ", Edad: " + persona.edad + ", &lt;" + persona.email + "&gt; </p>"
    );
    // divListado.innerHTML += "<p>Nombre: " + persona.nombre + ", Edad: " + persona.edad + ", &lt;" + persona.email + "&gt; </p>";
  }
}

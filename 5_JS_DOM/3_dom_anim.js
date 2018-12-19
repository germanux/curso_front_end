// Cojemos todos los div con clase circulo
var arrayDiv = document.getElementsByClassName("circulo");
// Los recorremos para pausarlos por JS
for (var i = 0; i < arrayDiv.length; i++) 
{
    arrayDiv[i].style.webkitAnimationPlayState="paused";
}
// Cogemos el DIV padre, con la clase "marco"
var divMarco = document.getElementsByClassName("marco") [0];
// Le añadimos un <INPUT type="button" value="¡Pero anímate"/>
var boton = divMarco.appendChild(document.createElement("input"));
boton.setAttribute("type", "button");
boton.setAttribute("value", "¡Pero anímate!");
// Creamos una función para animar de nuevo los circulos
function cuandoSePulsaElBoton() {
  for (var i = 0; i < arrayDiv.length; i++) 
  {
      arrayDiv[i].style.webkitAnimationPlayState="running"; // initial
  }
}
// Hacemos que cuando se pulse el botón, se pausen los circulos
// <INPUT type="button" value="¡Pero anímate" onclick="cuandoSePulsaElBoton();"/>
boton.setAttribute("onclick", "cuandoSePulsaElBoton();");

// Cojemos todos los div con clase circulo
var arrayDiv = document.getElementsByClassName("circulo");
// Creamos una función para animar de nuevo los circulos
 playPauseAnim("paused");
// playPauseAnim("play");

function playPauseAnim(estado) {    
    for (var i = 0; i < arrayDiv.length; i++) 
    {
        arrayDiv[i].style.webkitAnimationPlayState=estado; 
    }
    if (estado == "running") {
        document.getElementsByTagName("input")[0].setAttribute("onclick", "playPauseAnim('paused');");
    } else {
        document.getElementsByTagName("input")[0].setAttribute("onclick", "playPauseAnim('running');");
    }
}

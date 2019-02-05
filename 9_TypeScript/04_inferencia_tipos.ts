
let ejemploAny : any;
ejemploAny = 10;
ejemploAny = "uuuu";
ejemploAny = true;

// INFERENCIA DE TIPOS (similar a deducción)
let textoPorInferencia  = "Hola";
// textoPorInferencia = 10; Error

function decudeElTipo() { // void
}
function decudeElTipo2() { // infiere number por el return 
  return 200;
}
function decudeElTipo3() { // infiere string por el return 
  return "200";
}
function dimeOsiOno() : boolean {
  let devolucion = true;
  if (devolucion) {
    return true;
  } else {
    return false;
  }
}
function dameLoQueTuQuieras() : any { // NUNCA HAGAIS ESTO
  let valor : any = 3;
  switch(valor) {
    case 1: return 1000; break;
    case 2: return "1000"; break;
    case 3: return false; break;
  }
}
function noMeDesNadaDeNada() : void {
  if (true)
    return; // No podemos devolver nada
}
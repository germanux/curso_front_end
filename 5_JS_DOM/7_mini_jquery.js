function generarAntigua() {
  elemPorId("div_form").style.backgroundColor = "red";
}
function generar() {
  cambiaAtribPorId("div_form", "style", "background-color:green");
  cambiaAtribPorId("div_form", "id", "nuevo_id_div");

  adjuntarElementoPorId("nuevo_id_div", "input");
  adjuntarElementoPorId("nuevo_id_div", "br");
  adjuntarElementoPorId("nuevo_id_div", "input");
  adjuntarElementoPorId("nuevo_id_div", "br");
  adjuntarElementoPorId("nuevo_id_div", "img");
}
function elemPorId(id) {
  return  document.getElementById(id);
}
function cambiaAtribPorId(id, atributo, valor) {
  elemPorId(id).setAttribute(atributo, valor);
}
function  adjuntarElementoPorId(id, etiqueta) {
  var elem = elemPorId(id);
  var nuevoElem = document.createElement(etiqueta);
  elem.appendChild(nuevoElem);
  // elemPorId(Id).appendChild(document.createElement(etiqueta));
}
/*1 - Crear una función 	elemPorId(id)	que devuelva un elemento por su Id
		1.1 - Probar la función
			elemPorId("div_form").style.backgroundColor = "red";
	2 - Crear una función cambiaAtribPorId(id, atributo, valor)
		que modifique el atributo de un elemento buscado por su Id
		2.1 - Probar la función
			Ej. cambiaAtribPorId("div_form", "style", "background-color:red");
  3 - Crear una función adjuntarElementoPorId(id, etiqueta) que genere un elemento tipo "etiqueta" y lo adjunte a un elemento encontrado por Id
  
		3.1 - Probar la función
      adjuntarElementoPorId("div_form", "input");
      
	<div id="div_form"></div> -> <div id="div_form"><INPUT/></div>

	4 - Lo mismo que los 3 anteriores, pero que en vez de buscar por Id busque por clase (devuelve o busca un array de elementos a los que hacer lo que sea).
		*/
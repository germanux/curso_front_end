// 1 - Esquema de interfaz, sin terminar 
interface IProducto {
  // DEFINIR MÉTODO
  mostrar();
}
// 2 - Esquema de clase camiseta, sin terminar
class Camiseta implements IProducto {
  // Cómo indicar campos
  talla : string;
  // Como crear un constructor (faltan campos)
  constructor(talla : string) {
    this.talla = talla;
  }
  // IMPLEMENTAR MÉTODO
  mostrar() {
    console.log("Info camiseta");
  }
}
// 3 - Segunda clase, sin terminar
class Libro implements IProducto {
  mostrar() {
    console.log("Info camiseta");
  }
}
// 4 - Cómo instanciar un objeto, y llamar al método mostrar. Sin terminar
let producto : IProducto;
producto = new Camiseta("XXL");
producto. mostrar();
// 5 - Para la selección del usuario, algo parecido
let seleccionUsuario = "c"; // camiseta, 
if (seleccionUsuario == "c") {
  console.log("Programar el código para instanciar un objeto tipo camiseta.");
}
// 7 - ¿Cómo pedir datos al usuario?
// CON NODE JS NO PODEMOS CREAR UN BUCLE,
// En vez de eso usaremos eventos. No pasa nada
// por el error del objeto process, NODE sí tiene el objeto.
var stdin = process.openStdin();

// while (true) {
  console.log("¿Quieres camiseta o libro?");
  function cuandoUsuHaIntroducidoDato(d) {
    console.log("Has elegido " + d.toString());
    stdin.off("data", cuandoUsuHaIntroducidoDato);
  }
  stdin.addListener("data", cuandoUsuHaIntroducidoDato);
// }
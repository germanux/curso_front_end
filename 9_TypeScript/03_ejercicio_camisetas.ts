interface IProducto { // Todo es público
  precio : number;
  mostrar() : void;
}

// 2 - Esquema de clase camiseta, sin terminar
class Camiseta implements IProducto {
  precio : number;  // CAMPO OBLIGARTORIO
  talla : string;
  color : string;
  // Como crear un constructor
  constructor(pre : number, tall : string, col : string) {
    this.talla = tall;
    this.precio = pre;
    this.color = col;
  }
  mostrar() { // MÉTODO OBLIGARTORIO
    console.log("Info camiseta: " + this.precio + " €");
    console.log("        talla: " + this.talla);
    console.log("        color: " + this.color);
  }
}
class Libro implements IProducto {
  constructor(public precio: number, public titulo : string) {
  }
  mostrar() { // MÉTODO OBLIGARTORIO
    console.log("Info Libro: " + this.precio + " €");
    console.log("    titulo: " + this.titulo);
  }
}
let fecha : Date ;
fecha.
let miLibro : Libro = new Libro(900, "Mi jodido libro");
miLibro.mostrar();
console.log("Solo el precio: " + miLibro.precio);
let camisetaJorge : Camiseta;
camisetaJorge = new Camiseta(17, "XXL", "arcoiris");
camisetaJorge.mostrar();
// Puede valer cualquier cosa que implemente IProducto
let algunProducto : IProducto;  
algunProducto = new Camiseta(19, "S", "roja");
algunProducto.mostrar();
// Cambiamos a otra cosa
algunProducto = miLibro;
algunProducto.mostrar();

let tipo : string = "cam";  // Si vale "lib" pues libro

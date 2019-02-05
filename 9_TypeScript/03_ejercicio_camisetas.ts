interface IProducto { // Todo es público
  // precio : number;
  mostrar() : void;
}
class Producto implements IProducto {
  private precio : number;  // CAMPO OBLIGARTORIO
  private nombre : string;
  private empresa : string;
  public constructor(pre : number, nom : string) {
    this.precio = pre;
    this.nombre = nom;
    this.empresa = "Incyde";
  }
  public mostrar() { // MÉTODO OBLIGARTORIO
    console.log(`Producto ${this.nombre}, precio: ${this.precio} $`);
  }
  // Métodos de ACCESO
  // PRECIO es de Lectura y Escritura
  public getPrecio() : number { return this.precio; }
  public setPrecio(nuevoPrecio : number) : void { 
    if (nuevoPrecio < 0) {
      console.error("PRecio negativo!");
      throw new Error("Detente malvado! Nos arruinas con precios negativos");
    } 
    this.precio = nuevoPrecio; 
  }
  // Nombre es de SÓLO LECTURA
  public getNombre() : string { return this.nombre; } 
}
// EJERCICIOS:
// 1 - Poner publico lo público y privado lo privado.
// 2 - Terminar de heredar Libro. Con métodos de acceso
// 3 - Usarlos (instanciarlos) abajo ( new, etc... 
// 4 - Validar datos: Precio nunca puede ser negativo, y no puede haber nombres, tallas, títulos... vacíos
class Camiseta extends Producto {
  talla : string;
  color : string;
  // Como crear un constructor heredando. Pediremos los datos del hijo y del padre
  constructor(pre : number, tall : string, col : string) {
    super(pre, "camiseta"); // Llamada al constructor del padre
    // this.precio = pre;     // MAL, precio es privado
    // this.setPrecio(pre);  // Llamando al método de acceso se puede
                             // No es necesario por el constructor     
    this.talla = tall;
    this.color = col;
  }
  mostrar() { // MÉTODO OBLIGARTORIO
    console.log("Info camiseta: " + this.getPrecio() + " €");
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
// Mal porque no se puede instanciar una interfaz
// let p : IProducto = new IProducto();
let cam : Camiseta = new Camiseta(18, "M", "verde");
console.log("Color: " + cam.color);

let p : Producto = new Producto(100, "Ordenador");
console.log("Nombre: " + p.getNombre());

let otroProd : Producto = new Camiseta(50, "L", "azul");
console.log("Nombre: " + otroProd.getNombre());

(new Producto(999, "Diamante")).mostrar();

let listaProductos : Producto  [];  // Array de productos
listaProductos[0] = cam;
//listaProductos[1] = new Libro(12, "Programando en TypeScript");
listaProductos[2] = p;  // ordenador
listaProductos[3] = otroProd;
for (let i = 0; i < listaProductos.length; i++) {
  listaProductos[i].mostrar();  
}
// Descuento a todo:
for (let i = 0; i < listaProductos.length; i++) {
  listaProductos[i].setPrecio( listaProductos[i].getPrecio() * 0.90 );  
}














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

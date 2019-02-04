// npm install -g typescript
// Comando tsc
let unNumero : number;
unNumero = 12;
//unNumero = "un texto";

console.log("Un numero " + unNumero);

var unTexto = "Un texto";
console.log(unTexto);
alert(unTexto);

let siONo : boolean = false;
siONo = true;
if (siONo) {
  console.log("Pues parece que sí.");
}

let miUnion : number | string | boolean;
miUnion = "Puede ser cadena";
miUnion = 3434;
miUnion = unTexto == "Un texto" && unNumero == 12;

interface Tiempo {
  dia : number | string;
  mes : number;
  anio : number;

  mostrar();  
};
class Cumpleanios implements Tiempo {
  dia : number | string;
  mes : number;
  anio : number;

  mostrar() {
    console.log("Cumpleaños feliz! Hoy " + this.dia + " del " + this.mes);
  } 
}


var miCumple : Tiempo = {dia: "7", mes: 10, anio: 1982 /*, minutos: 10 */};
console.log("Cumplo años el " + miCumple.dia + " del " +miCumple.mes );

miCumple.mostrar();
// variableSinDeclarar = "LLLLLLL";


"use strict"; // Le decimos a Node usar JavaScript en modo estricto
let variable = 3434;
console.log("Var " + variable);
listar();
function listar() {
  for (let i = 0; i < process.argv.length; i++) {
    console.log("Parámetro: " + i + " - " + process.argv[i]);
  }
}
console.log(process.cpuUsage());
console.log(process.cwd());
process.chdir("../"); // eqiv CD ..
process.chdir("../");
console.log(process.cwd());
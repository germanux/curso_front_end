programaPrincipal();
// Funciones callback
function funCallBack_A(todoCorrecto) {
  console.log("funCallBack A: hemos terminado" + todoCorrecto);
}
function funCallBack_B(todoCorrecto) {
  if (todoCorrecto)
    console.log("funCallBack B: hemos terminado OK" );
  else console.log("funCallBack B: Algo ha ido mal" );
}
function programaPrincipal() {
  console.log("programaPrincipal: Comenzando" );
  // Invocamos un proceso, y cuando termine, que avise en A
  funProceso(funCallBack_A);
  console.log("programaPrincipal: Haciendo otra cosa" );
  funProceso(funCallBack_B);
  console.log("programaPrincipal: Terminando" );
}

// Proceso independiente (jQuery, Ajax, módulo propio...)
function funProceso(funDeAviso) {
  console.log("funProceso: Comenzando proceso");
  let todoOk = true;
  funDeAviso(todoOk);
  console.log("funProceso: Terminando proceso");
}
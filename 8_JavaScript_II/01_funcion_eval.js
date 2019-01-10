function ejecutarJavaScript() 
{
  var inputJS = document.getElementById("codJS");
  var veces = document.getElementById("inputVeces").value;

  eval("for (var i_95 = 0; i_95 < " + veces + "; i_95++) {"
    + inputJS.value
    + "}");
}
function codificarASCII() {
  var inputJS = document.getElementById("codJS");
  var enc = encodeURI(inputJS.value);
  var dec = decodeURI(enc);
  alert(enc + "\n" + dec);
} 
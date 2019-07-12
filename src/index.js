function continueClick() {

  const userRank = document.getElementById("listRank").value; //toma el valor que el usuario escoge en la lista
  const userName = document.getElementById("policeName").value; // toma el nombre que da el usuario

  document.getElementById("rankWelcome").innerHTML = userRank; //el valor dado al rango, lo arroja en el HTML
  document.getElementById("nameWelcome").innerHTML = userName; //el nombre del usuario lo da al HTML

  const firstScreen = document.getElementById("firstScreen");
  const secondScreen = document.getElementById("secondScreen");

  firstScreen.style.display = "none";
  secondScreen.style.display = "block"; //me muestra la segunda pantalla
}
document.getElementById("continue").addEventListener("click", continueClick, false); //Acciona el botón de Continuar


function llamarencode() {
  let offset = parseInt(document.getElementById("operativeCode").value); // Convierte mi type:number en número
  let word = document.getElementById("message1").value.toUpperCase(); //obtiene la cadena de texto del textarea 
  let cifrado = cipher.encode(offset, word); //llama al objeto cipher.js

  document.getElementById("message2").value = cifrado; //Me arroja el mensaje en el segundo recuadro, después de cifrarlo

  const firstScreen = document.getElementById("firstScreen");
  const secondScreen = document.getElementById("secondScreen");
  const thirdScreen = document.getElementById("thirdScreen");

  firstScreen.style.display = "none";
  secondScreen.style.display = "none";
  thirdScreen.style.display = "block"; //Me muestra sólo la tercer pantalla
  
  document.getElementById("chooseCode").innerHTML = "cifrado"; //Si el usuario escoge cifrar, manda al HTML el mensaje: cifrado
  document.getElementById("endecode").innerHTML = "Cifrar"; //Si el usuario escoge cifrar, pregunta al usuario si quiere volver a cifrar
}
document.getElementById("encodeButton").addEventListener("click", llamarencode, false); //Acciona el boton cifrar


function llamardecode() {
  let offset = parseInt(document.getElementById("operativeCode").value);
  let word = document.getElementById("message1").value.toUpperCase();
  let cifrado = cipher.decode(offset, word);

  document.getElementById("message2").value = cifrado;

  const firstScreen = document.getElementById("firstScreen");
  const secondScreen = document.getElementById("secondScreen");
  const thirdScreen = document.getElementById("thirdScreen");

  firstScreen.style.display = "none";
  secondScreen.style.display = "none";
  thirdScreen.style.display = "block";

  document.getElementById("chooseCode").innerHTML = "descifrado";
  document.getElementById("endecode").innerHTML = "Descifrar";
}
document.getElementById("decodeButton").addEventListener("click", llamardecode, false); //Acciona el botón descifrar

function yesClick() {
  document.getElementById("message1").value = ""; //limpia los recuadros ya utilizados anteriormente
  document.getElementById("message2").value = "";

  const firstScreen = document.getElementById("firstScreen");
  const secondScreen = document.getElementById("secondScreen");
  const thirdScreen = document.getElementById("thirdScreen");

  firstScreen.style.display = "none";
  secondScreen.style.display = "block"; //Vuelve a la pantalla para volver a cifrar, pantalla 2
  thirdScreen.style.display = "none";
}
document.getElementById("yesButton").addEventListener("click", yesClick, false); //Acciona el botón sí

function noClick() {
  document.getElementById("message1").value = ""; //LIMPIA PANTALLA
  document.getElementById("message2").value = ""; //LIMPIA PANTALLA
  document.getElementById("listRank").value = "";
  document.getElementById("policeName").value = "";

  const firstScreen = document.getElementById("firstScreen");
  const secondScreen = document.getElementById("secondScreen");
  const thirdScreen = document.getElementById("thirdScreen");

  firstScreen.style.display = "block"; //Vuelve al inicio, muestra la pantalla 1
  secondScreen.style.display = "none";
  thirdScreen.style.display = "none";
}
document.getElementById("noButton").addEventListener("click", noClick, false); //Acciona el botón no

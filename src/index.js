function continueClick(){

    const userRank = document.getElementById("listRank").value; //toma el valor que el usuario escoge en la lista
    const userName = document.getElementById("policeName").value; // toma el nombre que da el usuario
    
         document.getElementById("rankWelcome").innerHTML = userRank; //el valor dado al rango, lo arroja en el HTML
         document.getElementById("nameWelcome").innerHTML= userName; //el nombre del usuario lo da al HTML
}
document.getElementById("continue").addEventListener("click",continueClick,false); //Acciona el botón de Continuar


function llamarencode(){
  let offset = parseInt(document.getElementById("operativeCode").value);
  let word  = document.getElementById("message1").value;
  let cifrado = cipher.encode(offset,word);

  document.getElementById("message2").value=cifrado;
}
  document.getElementById("encodeButton").addEventListener("click",llamarencode,false);


function llamardecode(){
  let offset = parseInt(document.getElementById("operativeCode").value);
  let word  = document.getElementById("message1").value;
  let cifrado = cipher.decode(offset,word);
  
  document.getElementById("message2").value=cifrado;
}
  document.getElementById("decodeButton").addEventListener("click",llamardecode,false);

function yesClick(){
  
  //VUELVE A PANTALLA CIFRAR/DESCIFRAR
  }
document.getElementById("yesButton").addEventListener("click",yesClick,false);

function noClick(){
  document.clear();//LIMPIA PANTALLA
  //VUELVE AL INICIO
 }
document.getElementById("noButton").addEventListener("click",noClick,false);
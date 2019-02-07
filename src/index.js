function continueClick(){

    const userRank = document.getElementById("listRank").value; //toma el valor que el usuario escoge en la lista
    const userName = document.getElementById("policeName").value; // toma el nombre que da el usuario

      document.getElementById("rankWelcome").innerHTML = userRank; //el valor dado al rango, lo arroja en el HTML
      document.getElementById("nameWelcome").innerHTML= userName; //el nombre del usuario lo da al HTML

      firstScreen.style.display = 'none';
      secondScreen.style.display = 'block';
}
document.getElementById("continue").addEventListener("click",continueClick,false); //Acciona el botón de Continuar


function llamarencode(){
    let offset = parseInt(document.getElementById("operativeCode").value);
    let word  = document.getElementById("message1").value;
    let cifrado = cipher.encode(offset,word);

       document.getElementById("message2").value=cifrado;

       firstScreen.style.display = 'none';
       secondScreen.style.display = 'none';
       thirdScreen.style.display = 'block';
       document.getElementById("chooseCode").innerHTML = "cifrado";
       document.getElementById("endecode").innerHTML = "Cifrar";
}
  document.getElementById("encodeButton").addEventListener("click",llamarencode,false);


function llamardecode(){
     let offset = parseInt(document.getElementById("operativeCode").value);
     let word = document.getElementById("message1").value;
     let cifrado = cipher.decode(offset,word);
  
        document.getElementById("message2").value=cifrado;

        firstScreen.style.display = 'none';
        secondScreen.style.display = 'none';
        thirdScreen.style.display = 'block';
        document.getElementById("chooseCode").innerHTML = "descifrado";
        document.getElementById("endecode").innerHTML = "Descifrar";
}
  document.getElementById("decodeButton").addEventListener("click",llamardecode,false);

function yesClick(){
    document.getElementById("message1").value="";
    document.getElementById("message2").value="";

    firstScreen.style.display = 'none';
    secondScreen.style.display = 'block';
    thirdScreen.style.display = 'none';
}
document.getElementById("yesButton").addEventListener("click",yesClick,false);

function noClick(){
    document.getElementById("message1").value=""; //LIMPIA PANTALLA
    document.getElementById("message2").value="";//LIMPIA PANTALLA
    document.getElementById("listRank").value = ""; 
    document.getElementById("policeName").value= "";

    firstScreen.style.display = 'block';
    secondScreen.style.display = 'none';
    thirdScreen.style.display = 'none';
}
document.getElementById("noButton").addEventListener("click",noClick,false);
window.cipher = {

  encode: function (offset, word) {

    let alphabet = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ¡!¿?ÁÉÍÓÚ=()/&%$#"+-@:.,;9246801357*'; //defino mi arreglo 
    const space = ' '; //defino los espacios
    let letter = word[0]; //defino letter que es donde se guardarán las iteraciones
    let texto = ""; //defino texto para que me haga una cadena de texto

    for (let i = 0; i < word.length; i++) { //le digo a mi función que se mueva de 1 en 1 en mi arreglo desde la posición 0 de mi frase(word) hasta donde termine
      letter = word[i]; //Itera tantas veces como la longitud de mi frase
      if (letter == space) {
        texto += space; //le digo que si encuentra un espacio, lo ponga como espacio
      }
      else {
        const position = alphabet.indexOf(letter); //Aquí me cambia la letra a la posicion en mi alfabeto  definido al principio
        const newPosition = (position + offset) % 63; //le digo que se recorra las veces que le diga el usuario (offset)
        const newLetter = alphabet[newPosition]; //Ahora cambia la nueva posición por la nueva letra
        texto += newLetter; //Me junta cada iteracion que hizo y me muestra la frase cifrada
      }
    }
    return texto;
  },

  decode: function (offset, word) {

    let alphabet = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ¡!¿?ÁÉÍÓÚ=()/&%$#"+-@:.,;9246801357*';
    const space = ' ';
    let letter = word[0];
    let texto = "";

    for (let i = 0; i < word.length; i++) {
      letter = word[i];
      if (letter == space) {
        texto += space;
      }
      else {
       const position = alphabet.indexOf(letter);
       const newPosition = (position - offset + 63 * offset) % 63; //Aquí la diferencia con el anterior es que si el usuario introducía un número mayor a 26, me daba un negativo, así que lo que hice fue multiplicar 26*cualquier número (en este caso el offset) y siempre tendré positivos
       const newLetter = alphabet[newPosition];
        texto += newLetter;
      }
    }
    return texto;
  }
  
};


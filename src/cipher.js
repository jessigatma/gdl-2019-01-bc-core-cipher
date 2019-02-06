window.cipher = {

  encode: function (offset, word) {

    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
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
        const newPosition = (position + offset) % 26;
        const newLetter = alphabet[newPosition];
        texto += newLetter;
      }
    }
    return texto;
  },



  decode: function (offset, word) {

    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
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
       const newPosition = (position - offset + 26 * offset) % 26;
       const newLetter = alphabet[newPosition];
        texto += newLetter;
      }
    }
    return texto;
  }
  // ... 
};


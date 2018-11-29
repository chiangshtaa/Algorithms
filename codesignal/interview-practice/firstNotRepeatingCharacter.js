function firstNotRepeatingCharacter(s) {
  let alphabet = new Array(26);
  for (let i = 0; i < s.length; i++) {
    let letter = s[i];
    let index = s[i].charCodeAt(0) - 97;
    if (alphabet[index] === undefined) {
      alphabet[index] = i;
    } else {
      alphabet[index] = false;
    }
  }

  let result = '_';
  let minIndex = Infinity;
  for (let i = 0; i < alphabet.length; i++) {
    if (alphabet[i] !== undefined && alphabet[i] !== false) {
      if (alphabet[i] < minIndex) {
        minIndex = alphabet[i];
        result = String.fromCharCode(i + 97);
      }
    }
  }
  return result;
}


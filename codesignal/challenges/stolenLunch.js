// function stolenLunch(note) {
//   let code = '';
//   for (let i = 0; i < note.length; i++) {
//     let char = note[i];
//     if (char >= 'a' && char <= 'j') {
//       code += '' + char.charCodeAt(0) - 97;
//     } else if (char >= 0 && char < 10 && char !== ' ') {
//       code += '' + String.fromCharCode(Number(char) + 97);
//     } else {
//       code += char;
//     }
//   }
//   return code;
// }

function stolenLunch(note) {
  let code = 'abcdefghij';
  return note.replace(/[\da-j]/g, char => isNaN(char) ? code.indexOf(char) : code[char]);
}

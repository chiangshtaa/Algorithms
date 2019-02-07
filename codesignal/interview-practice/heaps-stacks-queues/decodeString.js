 // function decodeString(s) {
//   let charStack = [];
//   let numStack = [];
//   let num = '';
//   for (let i = 0; i < s.length; i++) {
//     let char = s[i];
//     if (!isNaN(char)) {
//       num += char;
//     } else if (char === '[') {
//       numStack.push(Number(num));
//       charStack.push(char);
//       num = '';
//     } else if (char === ']') {
//       let temp = charStack.pop();
//       let decodedString = temp;
//       while (temp !== '[') {
//         temp = charStack.pop();
//         if (temp === '[') {
//           break;
//         }
//         decodedString = temp + decodedString;
//       }
//       decodedString = decodedString.repeat(numStack.pop());
//       charStack.push(decodedString);
//     } else {
//       charStack.push(char);
//     }
//   }
//   return charStack.join('');
// }
// 
function decodeString(s) {
  const numStack = [];
  const charStack = [''];
  let num = '';
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (!isNaN(char)) {
      num += char;
    } else {
      if (char === '[') {
        numStack.push(num);
        charStack.push('');
        num = '';
      } else if (char === ']') {
        const repeater = numStack.pop();
        const word = charStack.pop();
        charStack[charStack.length - 1] += word.repeat(repeater);
      } else {
        charStack[charStack.length - 1] += char;
      }
    }
  }
  return charStack.pop();
}
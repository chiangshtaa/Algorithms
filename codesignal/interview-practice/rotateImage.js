function rotateImage(a) {
  return a.map((row, rowIndex) => {
    return a.map(val => {
      return val[rowIndex]
    }).reverse();
  });
}

// NON-IDEAL SOLUTION.  ABOVE IS O(1) MEMORY
// function rotateImage(a) {
//     let result = [];
//     for (let i = 0; i < a.length; i++) {
//         result[i] = new Array(a.length);
//     }
//     for (let i = 0; i < a.length; i++) {
//         for (let j = 0; j < a[i].length; j++) {
//             result[j][a.length - 1 - i] = a[i][j];
//         }
//     }
//     return result;
// }
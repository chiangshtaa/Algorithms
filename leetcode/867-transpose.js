var transpose = function(A) {
  let results = new Array(A[0].length).fill().map((row) => new Array(A.length));
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A[i].length; j++) {
      results[j][i] = A[i][j];
    }
  }
  return results;
};


// var transpose = function(A) {
//   let temp = [];
//   let results = [];
//   for (let i = 0; i < A[0].length; i++) {
//     temp = [];
//     for (let j = 0; j < A.length; j++) {
//       temp.push(A[j][i]);
//     }
//     results.push(temp);
//   }
//   return results;
// };
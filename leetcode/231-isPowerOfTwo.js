var isPowerOfTwo = function(n) {
  return n !== 0 && Math.log2(n) % 1 === 0;
}

// very slow solution
// var isPowerOfTwo = function(n) {
//   let i = 0;
//   while (true) {
//     let result = Math.pow(2, i);
//     if (result === n) {
//       return true;
//     } else if (result > n) {
//       return false;
//     }
//     i++;
//   }
// };
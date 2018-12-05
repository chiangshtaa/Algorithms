// DYNAMIC PROGRAMMING WAY
function maximalSquare(matrix) {
  let rows = matrix.length;
  let cols = rows > 0 ? matrix[0].length : 0;
  let dp = new Array(rows + 1).fill().map(row => new Array(cols + 1).fill(0));
  let size = 0;
  for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= cols; j++) {
      if (matrix[i - 1][j - 1] === '1') {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
        size = Math.max(size, dp[i][j]);
      }
    }
  }
  return size * size;
}


// NAIVE SOLUTION
// function checkOnes(matrix) {
//   return matrix.map((row) => row.every((num) => num === '1')).every((value) => value);
// }

// function findArea(matrix, row, col) {
//   let area = 1;
//   let size = 0;
//   for (let i = col; i < matrix.length; i++) {
//     size++;
//     if (matrix[row][i] === '1') {
//       let square = matrix.slice(row, row + size).map((row) => row.slice(col, col + size));
//       let isSquare = square.every((row) => row.length === square[0].length && row.length === square.length);
//       if (!isSquare) {
//         break;
//       }
//       if (square.length !== square[0].length) {
//         break;
//       }
//       if (checkOnes(square)) {
//         area = size * size;
//       }
//     } else {
//       break;
//     }
//   }
//   return area;
// }

// function maximalSquare(matrix) {
//   let max = 0;
//   for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix[i].length; j++) {
//       if (matrix[i][j] === '1') {
//         let area = findArea(matrix, i, j);
//         max = Math.max(max, area);
//       }
//     }
//   }
//   return max;
// }

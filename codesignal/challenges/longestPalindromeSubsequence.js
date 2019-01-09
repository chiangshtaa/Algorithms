function longestPalindromeSubsequence(input) {
  input = input.replace(/ /g, '');
  let dp = new Array(input.length).fill().map(() => new Array(input.length).fill(0));
  for (let n = 0; n < input.length; n++) {
    dp[n][n] = input[n];
  }
  for (let subLength = 2; subLength <= input.length; subLength++) {
    for (let i = 0; i < input.length - subLength + 1; i++) {
      let j = i + subLength - 1;
      if (input[i] === input[j] && subLength === 2) {
        dp[i][j] = input.slice(i, j + 1);
      } else if (input[i] === input[j]) {
        dp[i][j] = input[i] + dp[i + 1][j - 1] + input[i];
      } else {
        dp[i][j] = dp[i][j - 1].length >= dp[i + 1][j].length ? dp[i][j - 1] : dp[i + 1][j];
      }
    }
  }
  console.log(dp);
  return dp[0][dp.length - 1];
}


// Recurse solution TLE
// function longestPalindromeSubsequence(input) {
//   input = input.replace(/ /g, '');
//   const recurse = function(string, substring, left, right) {
//     let result;
//     if (string.length === 0) {
//       return substring;
//     }
//     if (string[0] === string[string.length - 1]) {
//       if (string.length === 1) {
//         left = left + string[0];
//         substring = left + right;
//       } else {
//         left = left + string[0];
//         right = string[0] + right;
//         substring = left + right;
//       }
//       result = recurse(string.slice(1, -1), substring, left, right);
//     } else {
//       let result1 = recurse(string.slice(0, -1), substring, left, right);
//       let result2 = recurse(string.slice(1), substring, left, right);
//       result = result1.length >= result2.length ? result1 : result2;
//     }
//     return result;
//   }
//   return recurse(input, '', '', '');
// }

/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
  let result = num;
  while (result > 9) {
    let sum = 0;
    while (result) {
      sum += result % 10;
      result = Math.floor(result / 10);
    }
    result = sum;
  }
  return result;
};
var maxProfit = function(prices) {
  let max = 0;
  let low = Infinity;
  for (let i = 0; i < prices.length; i++) {
    if (low > prices[i]) {
      low = prices[i];
    }
    let diff = prices[i] - low;
    max = Math.max(max, diff);
  }
  return max;
}


// // n ^ 2 naive solution
// var maxProfit = function(prices) {
//   let max = 0;
//   for (let i = 0; i < prices.length - 1; i++) {
//     for (let j = i + 1; j < prices.length; j++) {
//       max = Math.max(max, prices[j] - prices[i])
//     }
//   }
//   return max;
// };
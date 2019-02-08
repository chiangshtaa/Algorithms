function maxProfit(prices) {
  if (prices.length <= 1) {
    return 0;
  }
  let s0 = new Array(prices.length).fill(0);
  let s1 = new Array(prices.length).fill(0);
  let s2 = new Array(prices.length).fill(0);
  s0[0] = 0;
  s1[0] = -prices[0];
  s2[0] = -Infinity;
  for (let i = 1; i < prices.length; i++) {
    s0[i] = Math.max(s0[i - 1], s2[i - 1]);
    s1[i] = Math.max(s1[i - 1], s0[i - 1] - prices[i]);
    s2[i] = s1[i - 1] + prices[i];
  }
  return Math.max(s0[prices.length - 1], s2[prices.length - 1]);
}


// function maxProfit(prices) {
//     var buy = -Number.MAX_VALUE;
//     var cooldown = 0;

//     return prices.reduce((sell, price) => {
//        buy = Math.max(buy, cooldown - price);
//        cooldown = Math.max(cooldown, sell);
//        console.log(sell, cooldown, buy, price);
//        return Math.max(sell, buy + price);
//     }, 0);
// }
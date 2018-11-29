function findMax(array, n) {
  let dp = [];
  dp[0] = array[0];
  
  let currMax = array[0];

  // finds largest sum so far
  for (let i = 1; i < array.length; i++) {
    currMax = Math.max(array[i], currMax + array[i]);
    dp[i] = currMax;
  }
  
  // finds sum of first n elements
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += array[i];
  }

  let result = sum;
  for (let i = n; i < array.length; i++) {
    // finds sum of window size n;
    sum = sum + array[i] - array[i - n];

    result = Math.max(result, sum);
    
    // finds sum of window of size >= n
    result = Math.max(result, sum + dp[i - n]);
  }
  return result;
}


function speedingForCandy(streets, n, k) {
  let streetMax = streets.map((street) => findMax(street, n));
  let results = streetMax.sort((a, b) => b - a).slice(0, k).filter((num) => num > 0).reduce((a, b) => a + b, 0);
  return results;
}

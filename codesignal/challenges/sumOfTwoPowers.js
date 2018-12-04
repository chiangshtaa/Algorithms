function sumOfTwoPowers(n, k) {
  let results = [];
  let range = Math.ceil(Math.pow(n, 1 / k));
  let start = 0;
  let end = range;
  while (start <= end) {
    let sum = Math.pow(start, k) + Math.pow(end, k);
    if (sum === n) {
      results.push([Math.pow(start, k), Math.pow(end, k)]);
      start++;
      end--;
    }
    if (sum < n) {
      start++;
    }
    if (sum > n) {
      end--;
    }
  }
  return results;
}

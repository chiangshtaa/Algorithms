var rob = function(nums) {
  let dp = [0, 0];
  for (let i = 2; i < nums.length + 2; i++) {
    let num = nums[i - 2];
    let sum = num + dp[i - 2];
    if (sum > dp[i - 1]) {
      dp.push(sum);
    } else {
      dp.push(dp[i - 1]);
    }
  }
  return dp[dp.length - 1];
};
function multiDivisorSequence(nums) {
  for (let i = 1; i < nums.length; i++) {
    let prev2 = nums[i - 2];
    let prev1 = nums[i - 1];
    let curr = nums[i];
    if (prev1 % curr !== 0 && curr % prev2 !== 0) {
      return curr;
    }
  }
  return -1;
}

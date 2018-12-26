var findLengthOfLCIS = function(nums) {
  let longest = 0;
  let temp = 0;
  for (let i = 1; i <= nums.length; i++) {
    if (nums[i - 1] < nums[i]) {
      temp++;
    } else {
      temp = 0;
    }
    longest = Math.max(temp + 1, longest);
  }
  return longest;
};

console.log(findLengthOfLCIS([]));
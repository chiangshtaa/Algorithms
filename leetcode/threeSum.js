var threeSum = function(nums) {
  let result = {};
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    let start = i + 1;
    let end = nums.length - 1;
    while (start < end) {
      let sum = nums[i] + nums[start] + nums[end];
      if (sum === 0) {
        result[`[${nums[i]}, ${nums[start]}, ${nums[end]}]`] = [nums[i], nums[start], nums[end]];
        start++;
        end--;
      } else if (sum > 0) {
        end--;
      } else if (sum < 0) {
        start++;
      }
    }
  }
  return [...Object.values(result)];
};

console.log(threeSum([0, 0, 0, 0]));
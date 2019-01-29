var twoSum = function(nums, target) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    let diff = target - num;
    if (obj[num] >= 0) {
      return [obj[num], i];
    } else {
      obj[diff] = i;
    }
  }
};
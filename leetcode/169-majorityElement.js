/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let obj = {};
  let majority = nums.length / 2;
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (!obj[num]) {
      obj[num] = 1;
    } else {
      obj[num]++;
    }
    if (obj[num] > majority) {
      return num;
    }
  }
};
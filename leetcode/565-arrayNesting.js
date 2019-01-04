// my solution.
// var arrayNesting = function(nums) {
//   let memo = {};
//   let max = 0;
//   for (let i = 0; i < nums.length; i++) {
//     let total = 0;
//     let obj = {};
//     let index = i;
//     while (!obj[index]) {
//       if (memo[index]) {
//         total = memo[index];
//         break;
//       }
//       total++;
//       obj[index] = true;
//       index = nums[index];
//     }
//     memo[i] = total;
//     max = Math.max(max, total);
//   }
//   return max;
// };

// better solution
var arrayNesting = function(nums) {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== -1) {
      let start = nums[i];
      let count = 0;
      while (nums[start] !== -1) {
        let temp = start;
        start = nums[start];
        count++;
        nums[temp] = -1;
      }
      result = Math.max(result, count);
    }
  }
  return result;
}
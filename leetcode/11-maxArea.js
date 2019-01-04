// if we move pointer of the longer line inwards, we won't gain any increase in area
// because it is limited by the shorter line

// need to move pointer of the shorter line inwards
var maxArea = function(height) {
  let left = 0;
  let right = height.length - 1;
  let max = 0;
  while (left < right) {
    let min = Math.min(height[left], height[right]);
    let area = min * (right - left);
    max = Math.max(max, area);

    // move pointer of shorter line
    if (height[left] === min) {
      left++;
    } else {
      right--;
    }
  }
  return max;
};
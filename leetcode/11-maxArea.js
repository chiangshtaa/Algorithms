var maxArea = function(height) {
  let left = 0;
  let right = height.length - 1;
  let max = 0;
  while (left < right) {
    let min = Math.min(height[left], height[right]);
    let area = min * (right - left);
    max = Math.max(max, area);
    if (height[left] === min) {
      left++;
    } else {
      right--;
    }
  }
  return max;
};
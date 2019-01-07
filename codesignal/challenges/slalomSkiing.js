function slalomSkiing(flags, threshold) {
  const traverse = function(points, left) {
    for (let i = 1; i < points.length; i++) {
      let start = points[i - 1];
      let end = points[i];
      if (left) {
        start--;
        end++;
      } else {
        start++;
        end--;
      }
      if (Math.abs(end - start) > threshold) {
        return i;
      } else {
        left = !left;
      }
    }
    return -1;
  }
  
  let left = traverse(flags, true);
  let right = traverse(flags, false);
  return (left === -1 || right === -1) ? -1 : Math.max(left, right);
}
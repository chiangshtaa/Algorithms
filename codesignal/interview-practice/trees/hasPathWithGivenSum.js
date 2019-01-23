//
// Definition for binary tree:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
function hasPathWithGivenSum(t, s) {
  if (!t) {
    return s === 0;
  }
  
  s -= t.value;
  if (t.left && t.right) {
    return hasPathWithGivenSum(t.left, s) || hasPathWithGivenSum(t.right, s);
  } else if (t.left) {
    return hasPathWithGivenSum(t.left, s);
  } else {
    return hasPathWithGivenSum(t.right, s);
  }
}
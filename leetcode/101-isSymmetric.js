/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  const recurse = function(left, right) {
    if (!left && !right) {
      return true;
    } else if (!left || !right) {
      return false;
    }
    if (left.val === right.val) {
      return recurse(left.left, right.right) && recurse(left.right, right.left);
    } else {
      return false;
    }
  }
  if (!root) {
    return true;
  }
  return recurse(root.left, root.right);
  
};
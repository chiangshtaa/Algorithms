/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  let depth = 0;
  const recurse = function(root, level) {
    if (!root) {
      depth = Math.max(depth, level);
      return;
    }
    recurse(root.left, level + 1);
    recurse(root.right, level + 1);
  }
  recurse(root, 0);
  return depth;
};
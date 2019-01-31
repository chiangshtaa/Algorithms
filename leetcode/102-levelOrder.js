/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  let results = [];
  const recurse = function(tree, level) {
    if (!tree) {
      return;
    }
    results[level] = results[level] || [];
    
    results[level].push(tree.val);
    
    recurse(tree.left, level + 1);
    recurse(tree.right, level + 1);
  }
  recurse(root, 0);
  return results;
};
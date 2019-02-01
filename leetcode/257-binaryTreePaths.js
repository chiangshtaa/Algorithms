/*
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  let results = [];
  const traverse = function(tree, path) {
    if (!tree) {
      return;
    }
    path = path.concat(tree.val);
    if (!tree.left && !tree.right) {
      results = results.concat([path]);
      return;
    }
    
    traverse(tree.left, path);
    traverse(tree.right, path);
  }
  traverse(root, []);
  return results.map((result) => result.toString().replace(/,/g, '->'));
};
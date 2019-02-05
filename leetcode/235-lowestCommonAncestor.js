/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  const traverse = function(tree) {
    if (!tree) {
      return;
    }
    let curr = tree.val;
    let pVal = p.val;
    let qVal = q.val;
    if (curr === pVal || curr === qVal || (pVal > curr && qVal < curr) || (pVal < curr && qVal > curr)) {
      return tree;
    } else if (pVal > curr && qVal > curr) {
      return traverse(tree.right);
    } else if (pVal < curr && qVal < curr) {
      return traverse(tree.left);
    }
  }
  return traverse(root);
};
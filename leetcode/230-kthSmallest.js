/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
// var kthSmallest = function(root, k) {
//   let result = [];
//   const traverse = function(tree) {
//     if (!tree) {
//       return;
//     }
//     traverse(tree.left);
//     result.push(tree.val);
//     traverse(tree.right);
//   }
//   traverse(root)
//   return result[k - 1];
// };

var kthSmallest = function(root, k) {
    let stack = [];
    while (root) {
        stack.push(root);
      root = root.left;
    }
    while (k) {
      let node = stack.pop();
      k--;
      if (k === 0) {
        return node.val;
      }
      let right = node.right;
      while (right) {
        stack.push(right);
        right = right.left;
      }
    }
    return -1;
  };
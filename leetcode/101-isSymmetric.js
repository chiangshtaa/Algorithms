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

// iterative solution
// var isSymmetric = function(root) {
//   let queue = [];
//   queue.push(root, root);
//   while (queue.length) {
//     let t1 = queue.shift();
//     let t2 = queue.shift();
//     if (!t1 && !t2) {
//       continue;
//     } 
//     if (!t1 || !t2) {
//       return false;
//     }
//     if (t1.val !== t2.val) {
//       return false;
//     }
//     queue.push(t1.left);
//     queue.push(t2.right);
//     queue.push(t1.right);
//     queue.push(t2.left);
    
//   }
//   return true;
// }
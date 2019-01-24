//
// Definition for binary tree:
function Tree(x) {
  this.value = x;
  this.left = null;
  this.right = null;
}
function restoreBinaryTree(inorder, preorder) {
  const buildTree = function(left, right) {
    if (left > right) {
      return null;
    }
    
    let node = preorder.shift();
    let index = inorder.indexOf(node);
    let root = new Tree(node);
    
    root.left = buildTree(left, index - 1);
    root.right = buildTree(index + 1, right);
    
    return root;
  }
  return buildTree(0, inorder.length - 1);
}

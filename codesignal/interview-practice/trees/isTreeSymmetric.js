// Definition for binary tree:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
function isTreeSymmetric(t) {
    if (t === null) {
        return true;
    }
    const symmetric = function(leftNode, rightNode) {
        if (leftNode === null && rightNode === null) {
            return true;
        }
        if (leftNode === null || rightNode === null) {
            return false;
        }
        return (leftNode.value === rightNode.value 
                && symmetric(leftNode.left, rightNode.right) 
                && symmetric(leftNode.right, rightNode.left));
    }
    return symmetric(t.left, t.right);
}
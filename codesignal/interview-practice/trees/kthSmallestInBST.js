//
// Definition for binary tree:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
function kthSmallestInBST(t, k) {
    let count = 0;
    let value;
    const traverse = function(node) {
        if (node) {
            traverse(node.left);
            count++;
        }
        if (count === k) {
            value = node.value;
            return;
        }
        if (node) {
            traverse(node.right);
        }
    }
    traverse(t);
    return value;
}

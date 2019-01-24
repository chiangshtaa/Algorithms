//
// Definition for binary tree:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
// function isSubtree(t1, t2) {
//     t1 = JSON.stringify(t1);
//     t2 = JSON.stringify(t2);
//     return t1.indexOf(t2) !== -1;
// }
function isSubtree(t1, t2) {
    if (t2 === null) {
        return true;
    }
    if (t1 === null) {
        return false;
    }
    const subTree = function(a, b) {
        if (a === null && b === null) {
            return true;
        }
        if (a === null || b === null) {
            return false;
        }
        if (a.value === b.value) {
            return subTree(a.left, b.left) && subTree(a.right, b.right);
        }
        return subTree(a.left, b) || subTree(a.right, b);
    }
    return subTree(t1, t2);
}

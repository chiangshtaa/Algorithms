//
// Definition for binary tree:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
// 
// 
function deleteFromBST(t, queries) {
        // search() walk on the tree while number found, recursively.
        // set current node left or right with return values.
        // when number found, remove it from the tree and return with changed nodes.
        // n: number to remove
        // c: current node
    var search = (n, c) => {
          var tmp;
          if (c) {
            if (n < c.value) {
              // if n < current value go to left
              c.left = search(n, c.left);
            } else if (n > c.value) {
              // if n > current value go to right
              c.right = search(n, c.right);
            } else {
              // if n == current value, check left side
              if (c.left) {
                // if left child have right child
                // find the rightmost child
                if (c.left.right) {
                  prev = c;
                  tmp  = c.left;
                  while (tmp.right) {
                    prev = tmp;
                    tmp  = tmp.right;
                  }
                  // if rightmost node found replcae current value
                  c.value = tmp.value;
                  // and remove the rightmost ndoe
//for original tests:                  prev.right = null;
                   prev.right = tmp.left;
                } else {
                  // if left child have no right child, move it to upper level
                  c.left.right = c.right;
                  c = c.left;
                }
              } else {
                // if no left child, move right child to upper level
                c = c.right;
              }
            }
          }
          return c;
        };

    // remove numbers from t one by one and return result. 
    for (let i = 0; i < queries.length; i++) {
        t = search(queries[i], t);
    }
    return t;
    // return queries.reduce((t, n) => search(n, t), t);
}
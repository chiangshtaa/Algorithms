//
// Definition for binary tree:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
function betterOrderTraversal(root) {
  let inOrder = [];
  let preOrder = [];
  let postOrder = [];
  
  const traverse = function(node) {
    if (!node) {
      return;
    }
    preOrder.push(node.value);
    
    traverse(node.left);
    
    inOrder.push(node.value);
    
    traverse(node.right);
    
    postOrder.push(node.value);
  }  
  
  traverse(root);
  console.log(inOrder, preOrder, postOrder);
  
  for (let i = 0; i < inOrder.length; i++) {
    if (inOrder[i] < preOrder[i]) {
      for (let j = 0; j < inOrder.length; j++) {
        if (inOrder[j] < postOrder[j]) {
          return inOrder;
        } else if (inOrder[j] > postOrder[j]) {
          return postOrder;
        }
      }
    }
    
    if (inOrder[i] > preOrder[i]) {
      for (let j = 0; j < preOrder.length; j++) {
        if (preOrder[j] < postOrder[j]) {
          return preOrder;
        } else if (preOrder[j] > postOrder[j]) {
          return postOrder;
        }
      }
    }
    
    if (inOrder[i] < postOrder[i]) {
      for (let j = 0; j < inOrder.length; j++) {
        if (inOrder[j] < preOrder[j]) {
          return inOrder;
        } else if (inOrder[j] > preOrder[j]) {
          return preOrder;
        }
      }
    }
    
    if (inOrder[i] > postOrder[i]) {
      for (let j = 0; j < postOrder.length; j++) {
        if (postOrder[j] < preOrder[j]) {
          return postOrder;
        } else if (postOrder[j] > preOrder[j]) {
          return preOrder;
        }
      }
    }
  }
  return preOrder;
}

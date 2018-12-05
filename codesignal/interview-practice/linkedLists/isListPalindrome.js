// Definition for singly-linked list:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }

function isListPalindrome(l) {
  var current = l;
  var prevNode = l;
  while (current) {
    if (current !== prevNode) {
      current.prev = prevNode;
    }
    prevNode = current;
    current = current.next;
  }
  var lastNode = prevNode;

  var forward = l;
  var backward = lastNode;
  while (forward) {
    if (forward.value !== backward.value) {
      return false;
    }
    forward = forward.next;
    backward = backward.prev;
  }
  return true;
}

// NAIVE SOLUTION BELOW;
// function isListPalindrome(l) {
//     let arr = [];
//     while (l !== null) {
//         arr.push(l.value);
//         l = l.next;
//     }
//     for (let i = 0; i < arr.length/2; i++) {
//         if (arr[i] !== arr[arr.length - 1 - i]) {
//             return false;
//         }
//     }
//     return true;
// }

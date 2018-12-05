// Definition for singly-linked list:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function removeKFromList(l, k) {
  while (l && l.value === k) { // removes leading items with value === k
    l = l.next;
  }
  
  let node = l;
  
  while (node && node.next) { 
    if (node.next.value === k) { // if item === value, skip over item
      node.next = node.next.next;
    } else {
      node = node.next;
    }
  }
  return l;
}
// Definition for singly-linked list:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function reverseNodesInKGroups(l, k) {
  let node = l;
  let reversed = null;
  let next = null;
  let count = 0;
  while (node !== null && count < k) {
    node = node.next;
    count++;
  }
  // if nodes remaining < k, remain as is
  if (count !== k) {
    return l;
  }
  node = l;

  // reverse k group of linked list
  while (node !== null && count > 0) {
    next = node.next;
    node.next = reversed;
    reversed = node;
    node = next;
    count--;
  }
  // l refers to the end of the k-length reversed linked list
  // so adding the remaining elements would have to be in l.next
  // reversed refers to the entire list of reversed elements

  // remaining nodes in linked list, recursively call
  if (next !== null) {
    l.next = reverseNodesInKGroups(next, k);
  }

  return reversed;
}
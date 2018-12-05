// Definition for singly-linked list:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function rearrangeLastN(l, n) {
  if (!l || n === 0) {
    return l;
  }
  let node = l;
  let front = l;
  let total = 0;
  // get total # of elements and tail
  while (node.next) {
    total++;
    node = node.next;
  }
  total++;

  let tail = node;
  node = front;

  let diff = total - n;
  // if total === n, return list. no rearrange needed
  if (diff === 0) {
    return l;
  }

  while (diff > 1) {
    node = node.next
    diff--;
  }
  // temp contains elements that need to be
  // moved to the beginning
  let temp = node.next;
  // node.next is the end of the beginning group
  node.next = null;
  // this connects the end to the front
  tail.next = front;
  return temp;
}
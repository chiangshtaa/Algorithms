/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  let reverse = null;
  let curr = head;
  while (curr) {
    let temp = curr.next;
    curr.next = reverse;
    reverse = curr;
    curr = temp;
  }
  return reverse;
};
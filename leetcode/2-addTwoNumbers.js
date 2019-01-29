/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function(l1, l2) {
  // create l3 to return
  let l3 = new ListNode(0);
  let l3_head = l3;
  let carry = false;

  // traverse l1 and l2 till they are both null
  while (l1 || l2) {
    // add values while keeping track if it's null or not...
    let sum = 0;
    if (l1) sum += l1.val;
    if (l2) sum += l2.val;
    
    // if we are carrying from before, add one and set carry to false
    if (carry) {
      sum++;
      carry = false;
    }
    
    // keep track if you need to carry
    if (sum > 9) {
      sum -= 10;
      carry = true;
    }
    
    // add final value to next l3 val
    l3.next = new ListNode(sum);
    l3 = l3.next;
    if (l1) l1 = l1.next; 
    if (l2) l2 = l2.next;
  }
  // if there's one final carry left...
  if (carry) {
    l3.next = new ListNode(1);
    l3 = l3.next;
  }
  return l3_head.next;
};
var isPalindrome = function(head) {
  let pointB = head;
  let temp;
  while (pointB) {
    temp = pointB;
    pointB = pointB.next;
    if (pointB === null) {
      break;
    }
    pointB.prev = temp;
  }
  let pointer1 = head;
  let pointer2 = temp;
  while (pointer1 && pointer2) {
    if (pointer1.val !== pointer2.val) {
      return false;
    }
    pointer1 = pointer1.next;
    pointer2 = pointer2.prev;
  }
  return true;
};
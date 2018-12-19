var middleNode = function(head) {
  let count = 0;
  let temp = head;
  while (temp) {
    count++;
    temp = temp.next;
  }
  let middle = Math.floor(count / 2);
  temp = head;
  while (middle > 0) {
    middle--;
    temp = temp.next;
  }
  return temp;
};
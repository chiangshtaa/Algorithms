// Definition for singly-linked list:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function addTwoHugeNumbers(a, b) {
  let first = [];
  let second = [];
  while (a !== null) {
    let num = a.value.toString();
    let length = a.value.toString().length;
    for (let i = 0; i < 4 - length; i++) {
      num = '0' + num;
    }
    first.push(num)
    a = a.next;
  }
  while (b !== null) {
    let num = b.value.toString();
    let length = b.value.toString().length;
    for (let i = 0; i < 4 - length; i++) {
      num = '0' + num;
    }
    second.push(num);
    b = b.next;
  }
  console.log('first', first);
  console.log('second', second);
  if (first.length > second.length) {
    let temp = first;
    first = second;
    second = temp;
  }
  second = second.reverse();
  first = first.reverse();
  console.log('first', first);
  console.log('second', second);
  let carry = 0;
  for (let i = 0; i < second.length; i++) {
    if (first[i]) {
      second[i] = Number(second[i]) + Number(first[i]) + carry;
      if (second[i] > 9999) {
        carry = 1;
        second[i] = second[i].toString().slice(1);
      } else {
        carry = 0;
      }
    } else {
      second[i] = Number(second[i]) + carry;
      if (second[i] > 9999) {
        carry = 1;
        second[i] = second[i].toString().slice(1);
      } else {
        carry = 0;
      }
    }
  }
  if (carry === 1) {
    second.push('1');
  }
  
  second = second.reverse();
  second = second.map((string) => {
    return Number(string);
  })
  return second;
}
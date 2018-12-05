// Definition for singly-linked list:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function mergeTwoLinkedLists(l1, l2) {
    let node = {value: 'X', next: null};
    let temp = node;
    while (l1 !== null && l2 !== null) {
        if (l1.value < l2.value) {
            temp.next = l1;
            temp = temp.next;
            l1 = l1.next;
        } else {
            temp.next = l2;
            temp = temp.next;
            l2 = l2.next;
        }
    }
    if (l1 === null) {
        temp.next = l2;
    } else {
        temp.next = l1;
    }
    return node.next;
}

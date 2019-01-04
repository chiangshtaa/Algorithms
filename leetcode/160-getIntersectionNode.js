var getIntersectionNode = function(headA, headB) {
  let A = headA;
  while (A) {
    A.visited = true;
    A = A.next;
  }
  let B = headB;
  while (B) {
    if (B.visited) {
      return B;
    }
    B = B.next;
  }
};

// var getIntersectionNode = function(headA, headB) {
//   if (!headA || !headB) {
//     return null;
//   }
//   let hA = headA;
//   let hB = headB;

//   while (hA !== hB ) {
//     hA = hA.next;
//     hB = hB.next;

//     // both can be NULL or the same
//     if (hA === hB) {
//       return hA;
//     }

//     // remove the gap after the first full traversal
//     if (!hA) { hA = headB; }
//     if (!hB) { hB = headA; }
//   }

//   // the answer has been found
//   return hA;
// };
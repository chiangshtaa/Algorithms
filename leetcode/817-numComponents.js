var numComponents = function(head, G) {
  let total = 0;
  let set = new Set(G);
  let curr = head;
  while (curr !== null) {
    if (set.has(curr.val) && (curr.next === null || !set.has(curr.next.val))) {
      total++;
    }
    curr = curr.next;
  }
  return total;
};
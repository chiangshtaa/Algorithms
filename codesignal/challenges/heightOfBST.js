function heightOfBST(values) {
  let maxDepth = 0;
  function recurse(vals, depth) {
    if (vals.length) {
      let left = [];
      let right = [];
      maxDepth = Math.max(depth + 1, maxDepth);
      for (let i = 1; i < vals.length; i++) {
        let num = vals[i];
        if (num < vals[0]) {
          left.push(num);
        } else {
          right.push(num);
        }
      };
      recurse(left, depth + 1);
      recurse(right, depth + 1);
    }
  }

  recurse(values, 0);

  return maxDepth;
}

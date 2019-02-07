function differentValuesInMultiplicationTable(n, m) {
  let unique = new Set();
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      unique.add(i * j);
    }
  }
  return unique.size;
}

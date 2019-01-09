function flaviusJosephus(n) {
  let start = n * n;
  let num = n;
  for (let i = start; i >= 0; i--) {
    if (i % num === 0) {
      num--;
    }
    if (n - num === n) {
      return i;
    }
  }
}

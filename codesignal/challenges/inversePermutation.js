function inversePermutation(permutation) {
  let results = new Array(permutation.length);
  for (let i = 0; i < permutation.length; i++) {
    results[permutation[i] - 1] = i + 1;
  }
  return results;
}

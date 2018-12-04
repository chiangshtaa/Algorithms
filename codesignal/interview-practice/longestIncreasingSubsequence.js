function longestIncreasingSubsequence(sequence) {
  let array = new Array(sequence.length).fill(1);
  for (let i = 1; i < sequence.length; i++) {
    for (let j = 0; j < i; j++) {
      if (sequence[j] < sequence[i] && array[j] >= array[i]) {
        array[i] = array[j] + 1;
      }
    }
  }
  array.sort((a, b) => b - a);
  return array[0];
}

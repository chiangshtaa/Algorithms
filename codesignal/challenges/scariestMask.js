function scariestMask(mask) {
  let count = 0;
  for (let i = 0; i < mask.length; i++) {
    let row = mask[i];
    for (let j = 0; j < row.length / 2; j++) {
      if (row[j] !== row[row.length - 1 - j]) {
        count++;
      }
    }
  }
  return count;
}

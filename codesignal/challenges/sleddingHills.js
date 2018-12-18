function sleddingHills(enjoyability, maxRuns) {
  let total = 0;
  while (maxRuns > 0) {
    let max = Math.max(...enjoyability);
    if (max < 0) {
      break;
    }
    let index = enjoyability.indexOf(max);
    total += max;
    enjoyability[index]--;
    maxRuns--;
  }
  return total;
}

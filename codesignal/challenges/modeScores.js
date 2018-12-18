function modeScores(scores) {
  let result = [scores[0]];
  let obj = {};
  obj[scores[0]] = 1;
  for (let i = 1; i < scores.length; i++) {
    let score = scores[i];
    obj[score] = obj[score] ? obj[score] + 1 : 1;
    if (obj[score] > obj[result[i - 1]]) {
      result.push(score);
    } else if (obj[score] === obj[result[i - 1]]) {
      if (score > result[i - 1]) {
        result.push(score);
      } else {
        result.push(result[i - 1]);
      }
    } else {
      result.push(result[i - 1]);
    }
  }
  return result;
}

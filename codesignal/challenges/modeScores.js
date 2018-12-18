function modeScores(scores) {
  let result = [scores[0]];
  let obj = {};
  obj[scores[0]] = 1;
  for (let i = 1; i < scores.length; i++) {
    let score = scores[i];
    obj[score] = obj[score] ? obj[score] + 1 : 1;
    let prev = result[i - 1];
    if (obj[score] > obj[prev] || (obj[score] === obj[prev] && score > prev)) {
      result.push(score);
    } else {
      result.push(prev);
    }
  }
  return result;
}

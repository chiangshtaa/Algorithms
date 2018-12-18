function whereToGather(travelCosts) {
  let cols = [];
  for (let i = 0; i < travelCosts.length; i++) {
    let temp = [];
    for (let j = 0; j < travelCosts[i].length; j++) {
      temp.push(travelCosts[j][i]);
    }
    cols.push(temp);
  }
  
  let results = cols
                .filter((col) => col.indexOf(-1) === -1)
                .map((validCol) => validCol.reduce((a, b) => a + b, 0));
  return results.length === 0 ? -1 : Math.min(...results);
}

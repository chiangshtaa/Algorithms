function isCryptSolution(crypt, solution) {
  crypt = crypt.map((word) => {
    let digits = '';
    for (let i = 0; i < word.length; i++) {
      for (let j = 0; j < solution.length; j++) {
        if (word[i] === solution[j][0]) {
          digits += solution[j][1];
        }
      }
    }
    return digits;
  })
  for (let k = 0; k < crypt.length; k++) {
    if (crypt[k].length !== 1) {
      if (crypt[k][0] === '0') {
        return false;
      }
    }
  }
  return (Number(crypt[0]) + Number(crypt[1])) === Number(crypt[2]);
}

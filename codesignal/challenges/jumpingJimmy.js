function jumpingJimmy(tower, jumpHeight) {
  let total = 0;
  for (let i = 0; i < tower.length; i++) {
    if (tower[i] <= jumpHeight) {
      total += tower[i];
    } else {
      break;
    }
  }
  return total;
}

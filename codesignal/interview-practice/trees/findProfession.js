function findProfession(level, pos) {
  if (level === 1) {
    return 'Engineer';
  }
  if (findProfession(level - 1, Math.floor((pos + 1)/2)) === 'Doctor') {
    return pos % 2 ? 'Doctor' : 'Engineer';
  }
  return pos % 2 ? 'Engineer' : 'Doctor';
}
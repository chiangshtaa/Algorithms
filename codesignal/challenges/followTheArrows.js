function followTheArrows(directionMap, start) {
  let x = start[1];
  let y = start[0];
  directionMap = directionMap.map((row) => row.split(''));
  while (x >= 0 && x < directionMap[0].length && y >= 0 && y < directionMap.length) {
    let direction = directionMap[y][x];
    directionMap[y][x] = '.';
    if (direction === '>') {
      x++;
    } else if (direction === '<') {
      x--;
    } else if (direction === '^') {
      y--;
    } else if (direction === 'v') {
      y++;
    } else if (direction === '.') {
      break;
    }
  }
  return directionMap.map((row) => row.join(''));
}

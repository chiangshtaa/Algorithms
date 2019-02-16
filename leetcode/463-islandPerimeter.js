var countSides = function(matrix, x, y) {
    let sides = 4;
    if(x - 1 >= 0 && matrix[x-1][y] === 1) sides--;
    if(y + 1 < matrix[x].length && matrix[x][y+1] === 1) sides--;
    if(x + 1 < matrix.length && matrix[x+1][y] === 1) sides--;
    if(y - 1 >= 0 && matrix[x][y-1] === 1) sides--;
    return sides;
}
var islandPerimeter = function(grid) {
  let perimeter = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        perimeter += countSides(grid, i, j);
      }
    }
  }
  return perimeter;
};

console.log(islandPerimeter([[0, 1]]));
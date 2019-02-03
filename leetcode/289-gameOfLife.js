/*
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      let live = board[i][j];
      let neighbors = countNeighbors(board, i, j);
      if (board[i][j] === 1 && (neighbors < 2 || neighbors > 3)) {
        board[i][j] = 2; // 2 means the cell died (went from 1 -> 0)
      }
      if (board[i][j] === 0 && neighbors === 3) {
        board[i][j] = 3; // 3 means the cell comes back to life (0 -> 1);
      }
      // any other scenario, the cell stays as is (live or dead);
    }
  }
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      board[i][j] = board[i][j] % 2;
    }
  }
};

var countNeighbors = function(board, x, y) {
  let count = 0;
  for (let i = -1; i < 2; i++) {
    for (let j = -1; j < 2; j++) {
      if (i === 0 && j === 0) {
        continue;
      }
      if (board[x + i]) {
        if (board[x + i][y + j]) {
          if (board[x + i][y + j] === 1 || board[x + i][y + j] === 2) {
            // checks to see if there was a live cell
            count++;
          }
        }
      }
    }
  }
  return count;
}
// var floodFill = function(image, sr, sc, newColor) {
//   let target = image[sr][sc];
//   let queue = [[sr, sc]];
//   let set = new Set();
//   while (queue.length) {
//     let coord = queue.pop();
//     let x = coord[0];
//     let y = coord[1];
//     if (x >= 0 && y >= 0 && x < image.length && y < image[0].length && image[x][y] === target && !set.has(`${x},${y}`)) {
//       set.add(`${x},${y}`);
//       image[x][y] = newColor;
//       queue.push([x - 1, y], [x + 1, y], [x, y - 1], [x, y + 1]);
//     }
//   }
//   return image;
// };

var floodFill = function(image, sr, sc, newColor) {
  function dfs(x, y) {
    if (x >= 0 && y >= 0 && x < image.length && y < image[0].length && image[x][y] === target && image[x][y] !== newColor) {
      image[x][y] = newColor;
      dfs(x - 1, y);
      dfs(x + 1, y);
      dfs(x, y - 1);
      dfs(x, y + 1);
    }
  }
  
  let target = image[sr][sc];
  dfs(sr, sc, target);
  return image;
};

let sample = [[0,0,0],[0,1,1]];
let sample2 = [[1,1,1],[1,1,0],[1,0,1]];

// console.log(floodFill(sample, 1, 1, 1));
console.log(floodFill(sample2, 1, 1, 2));
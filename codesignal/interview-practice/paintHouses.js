function paintHouses(cost) {
  let dp = [0, 0, 0]; // keeps track of min cost if r, g, b were to be built
  for (let i = 0; i < cost.length; i++) {
    let r = cost[i][0];
    let b = cost[i][1];
    let g = cost[i][2];
    
    dp = [r + Math.min(dp[1], dp[2]), b + Math.min(dp[0], dp[2]), g + Math.min(dp[0], dp[1])];
  }
  return Math.min(...dp);
}

//Basic idea:
// DP:
// "What's the best I can do for all houses up to i
//   if I paint i color j?"
// function paintHouses(cost) {
//   let prev = cost[0];
//   for (let i = 1; i < cost.length; i++) {
//     let curr = cost[i];
//     curr[0] += Math.min(prev[1], prev[2]);
//     curr[1] += Math.min(prev[0], prev[2]);
//     curr[2] += Math.min(prev[0], prev[1]);
//     prev = curr;
    
//   }
//   return Math.min(...cost[cost.length - 1]);
// }


// // RECURSIVE
// function paintHouses(cost) {
  
//   function recurse(index, filled) {
//     if (index === cost.length - 1) {
//       return cost[index][filled];
//     }

//     let min = Infinity;
//     for(let i = 0; i < 3; i++) {
//       if (i !== filled) {
//         min = Math.min(min, recurse(index + 1, i));
//       }
//     }
//     return cost[index][filled] + min;
//   }
  
//   return Math.min(recurse(0, 0), recurse(0, 1), recurse(0, 2));
// }

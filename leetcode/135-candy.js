var candy = function(ratings) {
  let forward = new Array(ratings.length);
  let backward = new Array(ratings.length);

  forward[0] = 1;
  backward[ratings.length - 1] = 1;

  for (let i = 1; i < ratings.length; i++) {
    forward[i] = ratings[i - 1] < ratings[i] ? forward[i - 1] + 1 : 1;
  }

  for (let i = ratings.length - 2; i >= 0; i--) {
    backward[i] = ratings[i] > ratings[i + 1] ? backward[i + 1] + 1 : 1;
  }

  let sum = 0;
  for (let i = 0; i < ratings.length; i++) {
     sum += Math.max(forward[i], backward[i]);
  }
  return sum;
};

console.log(candy([1, 2, 3, 4, 1, 2])); // 13
console.log(candy([1, 3, 5, 7, 1, 7])); // 13
console.log(candy([1, 0, 2])); // 5
console.log(candy([6, 5, 3, 3])); // 7
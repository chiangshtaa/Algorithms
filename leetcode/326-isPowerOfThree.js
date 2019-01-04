var isPowerOfThree = function(n) {
  console.log(n.toString(3));
  return n.toString(3).split('').reduce((a, b) => Number(a) + Number(b), 0) === 1;
};

console.log(isPowerOfThree(243));
console.log(isPowerOfThree(9));
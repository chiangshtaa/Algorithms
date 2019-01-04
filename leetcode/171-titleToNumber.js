var titleToNumber = function(s) {
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    result = result * 26 + (s.charCodeAt(i) - 64);
  }
  return result;
};

// console.log(titleToNumber('AAA'));
console.log(titleToNumber('ZZ'));
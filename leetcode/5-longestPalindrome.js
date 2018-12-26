var longestPalindrome = function(s) {
  let result = '';
  let curr = '';
  for(let i = 0; i < s.length; i ++){
    for(let j = i; j < i + 2; j ++){
      let left = i;
      let right = j;
      while(s[left] && s[left] === s[right]){
        curr = s.substring(left, right + 1);
        if (curr.length > result.length) {
          result = curr;
        }
        left--;
        right++;
      }
    }
  }
  return result;
};

console.log(longestPalindrome('cbbd'));
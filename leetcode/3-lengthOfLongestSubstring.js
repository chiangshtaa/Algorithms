/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let dp = new Set();
  let max = 0;
  let i = 0;
  let j = 0;
  while (i < s.length && j < s.length) {
    if (!dp.has(s.charAt(j))) {
      dp.add(s.charAt(j));
      j++;
      max = Math.max(max, j - i);
    } else {
      dp.delete(s.charAt(i));
      i++;
    }
  }
  return max;
};
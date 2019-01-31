/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isIsomorphic = function(s, t) {
  let obj1 = {};
  let obj2 = {};
  for (let i = 0; i < s.length; i++) {
    let char1 = s[i];
    let char2 = t[i];
    if (obj1[char1] && obj1[char1] !== char2) { return false };
    if (obj2[char2] && obj2[char2] !== char1) { return false };
    obj1[char1] = char2;
    obj2[char2] = char1;
  }
  return true;
};


// var isIsomorphic = function(s, t) {
//   let sObj = {};
//   let tObj = {};
//   if (s.length !== t.length) {
//     return false;
//   }
//   for (let i = 0; i < s.length; i++) {
//     let charS = s[i];
//     let charT = t[i];
    
//     if (!sObj[charS]) {
//       sObj[charS] = t[i];
//     }
//     if (!tObj[charT]) {
//       tObj[charT] = s[i];
//     }
//     if (tObj[charT] !== s[i] || sObj[charS] !== t[i]) {
//       return false;
//     }
//   }
//   return true;
// };

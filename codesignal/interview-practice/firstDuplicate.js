// O(n) time O(1) space
function firstDuplicate(a) {
  for (let i = 0; i < a.length; i++) {
    let index = Math.abs(a[i]) - 1;
    if (a[index] < 0) { // if value at index is negative, it means the number has already been declared already
      return index + 1;
    } else {
      a[index] = a[index] * -1; // mark number as found by making it negative
    }
  }
  return -1;
}


// O(n) time and O(n) space
// function firstDuplicate(a) {
//   let result = -1;
//   let obj = {};
//   for (let i = 0; i < a.length; i++) {
//     let num = a[i];
//     if (!obj[num]) {
//       obj[num] = true;
//     } else {
//       result = a[i];
//       break;
//     }
//   }
//   return result;
// }

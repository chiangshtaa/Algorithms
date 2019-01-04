// naive n^2 solution
var maxWidthRamp = function(A) {
  let width = 0;
  for (let i = 0; i < A.length; i++) {
    for (let j = i + 1; j < A.length; j++) {
      if (A[i] <= A[j]) {
        width = Math.max(width, j - i);
      }
    }
  }
  return width;
};
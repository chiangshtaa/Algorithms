function valid(a, b) {
  for (let i = 0; i < a.length; i++) {
    if (a[i] < b[i]) {
      return false;
    }
  }
  return true;
}

function findDiff(a, b) {
  let total = 0;
  for (let i = 0; i < a.length; i++) {
    total = total + a[i] - b[i];
  }
  return total;
}

function findMin(arr) {
  let index = -1;
  let smallest = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
      index = i;
    }
  }
  return smallest === Infinity ? -1 : index;
}
function waveformRecognition(unknownWave, waveDatabase) {
  let length = unknownWave.length;
  let diff = waveDatabase.map((wave) => {
    let minDiff = Infinity;
    for (let i = 0; i < wave.length - length; i++) {
      let curr = wave.slice(i, i + length);
      if (valid(unknownWave, curr)) {
        minDiff = Math.min(findDiff(unknownWave, curr), minDiff);
      }
    }
    return minDiff;
  });
  
  let result = findMin(diff);
  return result;
}

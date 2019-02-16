var constructRectangle = function(area) {
  let length = Math.floor(Math.sqrt(area));
  let width = length;
  let tempArea = length * width;
  while (tempArea !== area) {
    if (tempArea < area) {
      length++;
    } else {
      width--;
    }
    tempArea = length * width;
  }
  return [length, width];
};
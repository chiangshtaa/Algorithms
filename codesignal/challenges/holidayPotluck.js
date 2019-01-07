function holidayPotluck(dishes, capacity) {
  let enjoyment = 0;
  dishes.sort((a, b) => b[0] - a[0]);
  let index = 0;
  while (capacity > 0 && index < dishes.length) {
    let servings = Math.min(capacity, dishes[index][1]);
    enjoyment += dishes[index][0] * servings;
    capacity -= servings;
    index++;
  }
  return enjoyment;
}
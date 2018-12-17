function groupingDishes(dishes) {
  let obj = {};
  let results = [];
  for (let i = 0; i < dishes.length; i++) {
    let ingredients = dishes[i];
    for (let j = 1; j < ingredients.length; j++) {
      let ingredient = ingredients[j];
      if (obj[ingredient]) {
        obj[ingredient].push(ingredients[0]);
      } else {
        obj[ingredient] = [ingredients[0]];
      }
    }
  }
  for (let key in obj) {
    if (obj[key].length !== 1) {
      let food = obj[key].sort();
      results.push([key, food]);
    }
  }

  return results.sort((a, b) => {
    if (a[0] < b[0]) {
      return -1;
    }
    if (a[0] > b[0]) {
      return 1;
    }
    return 0;
  }).map((element) => {
    return [element[0], ...element[1]];
  })
}
